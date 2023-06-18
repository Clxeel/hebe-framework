'use strict';

const Client = require('../Client');

class Command {
  /**
   * Create a Command
   * @param {Client} client 
   * @param {Object} options Hebe command options 
   * @param {String} options.name The name of the command
   * @param {String} [options.description] The description of the command
   * @param {String} [options.category] The category of the command
   * @param {String} [options.details] More information about the command
   * @param {String} [options.usage] The usage format of the command
   * @param {Array<String>} [options.examples] Examples of usages of the command
   * @param {Boolean} [options.ownerOnly] Whether the command can only be run by bot owners
   * @param {Boolean} [options.nsfw] Whether the command can only be run in a nsfw channel
   * @param {Object} [applicationCommandOptions] Hebe application command options
   * @param {boolean} [applicationCommandOptions.enabled] Whether the command should be registered
   * @param {String} [applicationCommandOptions.name] The name of the application command
   * @param {String} [applicationCommandOptions.description] The description of the application command
   * @param {Number} [applicationCommandOptions.type] The type of application command. 1 = slash command, 2 = user, 3 = message
   * @param {Array<Object>} [applicationCommandOptions.options] An array of [command options](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure)
   */
  constructor(client, options, applicationCommandOptions) {
    this.client = client;
    this.options = Object.assign({
      name: '',
      description: 'No description provided.',
      category: 'None',
      details: '',
      usage: 'No usage format provided.',
      examples: [],
      ownerOnly: false,
      nsfw: false
    }, options);
    this.applicationCommandOptions = Object.assign({
      enabled: false,
      name: '',
      description: '',
      type: 1,
      options: []
    }, applicationCommandOptions);

    if (!this.options.name || !this.options.name.length) throw new Error('You must provide a name in command options.');
    if (typeof this.options.name !== 'string') throw new TypeError('The command name must be a string.');

    if (typeof this.options.description !== 'string') throw new TypeError('The command description must be a string.');
    if (typeof this.options.category !== 'string') throw new TypeError('The command category must be a string.');
    if (typeof this.options.details !== 'string') throw new TypeError('Command details must be a string.');

    if (this.applicationCommandOptions.enabled) {
      if (!this.applicationCommandOptions.name || !this.applicationCommandOptions.name.length) this.applicationCommandOptions.name = this.options.name;
      if (typeof this.applicationCommandOptions.name !== 'string') throw new TypeError('The application command name must be a string.');

      if (!this.applicationCommandOptions.description || !this.applicationCommandOptions.description.length) this.applicationCommandOptions.description = this.options.description;
      if (typeof this.applicationCommandOptions.description !== 'string') throw new TypeError('The application command description must be a string.');

      if (this.applicationCommandOptions.type !== 1) this.applicationCommandOptions.description = null;

      if (typeof this.applicationCommandOptions.type !== 'number' || this.applicationCommandOptions.type < 1 || this.applicationCommandOptions.type > 3) throw new TypeError('The application command type must be an integer between 1 and 3.');
      if (!Array.isArray(this.applicationCommandOptions.options)) throw new TypeError('Application command options must be an array of command options.');
    }
  }

  run() {

  }

  applicationCommandRun() {

  }
}

module.exports = Command;