const Client = require('../Client')

class Command {
  /**
   * @param {Client} client   
   * @param {object} command A command object
   * @param {string} command.name The command name
   * @param {string} [command.description] The command description
   * @param {string[]} [command.options] An array of [command options](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure)
   * @param {number} command.type The type of application command : 1 = slash command, 2 = user command, 3 = message command
   */
  constructor(client, command) {
    this.client = client;
    this.command = command;
    if (typeof command.name === 'undefined' || command.name.length === 0) throw new Error('You must provide a name for the command.');
    if (typeof command.name !== 'string') throw new TypeError('Command\'s name must be a string.');

    if (typeof command.description === 'undefined' || command.description.length === 0) command.description = 'No description provided.';
    if (typeof command.description !== 'string') throw new TypeError('Command\'s description must be a string.');

    if (typeof command.options === 'undefined') command.options = [];
    if (!Array.isArray(command.options)) throw new TypeError('Command options must be an array of objects.')

    if (typeof command.type === 'undefined') command.type = 1;
    if (typeof command.type !== 'number' || command.type < 1 || command.type > 3) throw new TypeError('Command type must be an integer between 1 and 3.');
  }

  run() {
    this.client.logger.warn(`The ${this.options.name} command has no "run" method.`);
  }
};

module.exports = Command;