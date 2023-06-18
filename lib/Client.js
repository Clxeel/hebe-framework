'use strict';

const Eris = require('eris');
const functions = require('./util/functions');
const logger = require('./util/logger');

const LoadCommands = require('./registeries/commandsRegistery');
const LoadEvents = require('./registeries/eventsRegistery');

class Client extends Eris.Client {
  /**
   * Create a Client
   * @param {String} token The auth token to use
   * @param {Object} options Hebe client options
   * @param {Eris.ClientOptions} options.erisOptions Options for the eris client (intents, ...)
   * @param {String} options.commandsDirectory The directory where commands are declared
   * @param {String} options.eventsDirectory The directory where events are declared
   * @param {String} [options.prefix] The prefix that should trigger message commands
   * @param {Boolean} [options.messageCommands] Whether message commands should be executed (currently it not works)
   * @param {Boolean} [options.applicationCommands] Whether application commands should be registered
   * @param {Array<String>} [options.owners] Owners of the bot
   * @param {Boolean} [options.enableDebugLoggings] You should enable this when developing the bot
   */
  constructor(token, options) {
    super(token, options);
    this.hebeOptions = Object.assign({
      commandsDirectory: '',
      eventsDirectory: '',
      prefix: '!',
      messageCommands: true,
      applicationCommands: true,
      owners: [],
      enableDebugLoggings: false
    }, options);

    if (!this.hebeOptions.commandsDirectory || !this.hebeOptions.commandsDirectory.length) throw new Error('You must provide a commands directory in client options.');
    if (typeof this.hebeOptions.commandsDirectory !== 'string') throw new TypeError('The commands directory must be a string.');

    if (!this.hebeOptions.eventsDirectory || !this.hebeOptions.eventsDirectory.length) throw new Error('You must provide an events directory in client options.');
    if (typeof this.hebeOptions.commandsDirectory !== 'string') throw new TypeError('The events directory must be a string.');

    if (typeof this.hebeOptions.prefix !== 'string') throw new TypeError('The bot prefix must be a string.');
    if (typeof this.hebeOptions.messageCommands !== 'boolean') throw new TypeError('The messageCommands option must be a boolean.');
    if (typeof this.hebeOptions.applicationCommands !== 'boolean') throw new TypeError('The applicationCommands option must be a boolean.');
    if (!Array.isArray(this.hebeOptions.owners)) throw new TypeError('Bot owners must be an array of strings.');
    if (typeof this.hebeOptions.enableDebugLoggings !== 'boolean') throw new TypeError('The enableDebugLoggings option must be a boolean.');

    this.functions = functions;
    this.logger = logger;
    this.commands = new Eris.Collection();

    new LoadCommands(this, this.hebeOptions.commandsDirectory);
    new LoadEvents(this, this.hebeOptions.eventsDirectory);
  }
}

module.exports = Client;