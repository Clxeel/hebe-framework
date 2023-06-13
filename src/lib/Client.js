const Eris = require('eris');
const fs = require('fs');
const glob = require('fast-glob');
const logger = require('../util/logger');

class Client extends Eris.Client {
  /**
   * @param {string} token The token of the client
   * @param {object} options The options of the client
   * @param {string} options.commandsDirectory The directory where the commands are located
   * @param {string} options.eventsDirectory The directory where the events are located
   * @param {string} [options.prefix] The prefix of the client
   * @param {boolean} [options.messageCommands] Whether message commands work
   * @param {boolean} [options.slashCommands] Whether slash commands will be registered (currently Hebe does not support slash commands)
   * @param {string[]} [options.owners] The owners of the bot
   * @param {boolean} [options.enableDebugLoggings] Whether debug logs can appear in the console
   */
  constructor(token, options) {
    if (typeof options.commandsDirectory === 'undefined' || options.commandsDirectory.length === 0) throw new Error('You must provide a commands directory in the Client options.');
    if (typeof options.commandsDirectory !== 'string') throw new TypeError('Commands directory must be a string.');

    if (typeof options.eventsDirectory === 'undefined' || options.eventsDirectory.length === 0) throw new Error('You must provide an events directory in the Client options.');
    if (typeof options.eventsDirectory !== 'string') throw new TypeError('Events directory must be a string.');

    if (typeof options.prefix === 'undefined') options.prefix = '!';
    if (typeof options.prefix !== 'string') throw new TypeError('Prefix must be a string.');

    if (typeof options.messageCommands === 'undefined') options.messageCommands = true;
    if (typeof options.messageCommands !== 'boolean') throw new TypeError('messageCommands option must be a boolean.');

    if (typeof options.slashCommands === 'undefined') options.slashCommands = false;
    if (typeof options.slashCommands !== 'boolean') throw new TypeError('slashCommands option must be a boolean.');

    if (typeof options.enableDebugLoggings === 'undefined') options.enableDebugLoggings = false;
    if (typeof options.enableDebugLoggings !== 'boolean') throw new TypeError('enableDebugLoggings option must be a boolean.');

    super(token, options);

    this.commands = new Eris.Collection();
    this.categories = [];
    this.logger = logger;

    this.loadEvents(this.options.eventsDirectory);
  }

  async loadEvents(directory) {
    if (!fs.existsSync(directory)) throw new Error(`The command's path ${directory} does not exist.`);

    const files = await glob(`${process.cwd().replace(/\\/g, '/')}/${directory}/**/*.{js,ts}`);

    files.forEach(file => {
      const event = require(file);
      const _event = new event(this);

      if (_event.options.once) this.once(_event.options.name, (...args) => _event.execute(...args));
      else this.on(_event.options.name, (...args) => _event.execute(...args));
    });
  }
};

module.exports = Client;