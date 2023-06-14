const Client = require('../Client')

class Command {
  /**
   * @param {Client} client   
   * @param {object} options The options of the command
   * @param {string} options.name The name of the command
   * @param {string[]} [options.aliases] The aliases of the command
   * @param {string} [options.description] The description of the command
   * @param {string} [options.details] The details of the command
   * @param {string} [options.usage] The usage format of the command
   * @param {string[]} [options.examples] The examples of the command
   * @param {boolean} [options.ownerOnly] Whether the command can only be executed by an owner
   * @param {boolean} [options.nsfw] Whether the command can only be executed in a nsfw channel
   */
  constructor(client, options) {
    this.client = client;
    this.options = options;
    // Le client ne détecte pas la création d'un array pour les aliases s'il n'y en a pas
    if (typeof options.name === 'undefined' || options.name.length === 0) throw new Error('You must provide a name for a command.');
    if (typeof options.name !== 'string') throw new TypeError('Command\'s name must be a string.');

    if (typeof options.aliases === 'undefined' || options.aliases.length === 0) options.aliases === [];
    if (!Array.isArray(options.aliases)) throw new TypeError('Command\'s aliases must be an array of strings.');

    if (typeof options.description === 'undefined' || options.description.length === 0) options.description === 'No description provided';
    if (typeof options.description !== 'string') throw new TypeError('Command\'s description must be a string.');

    if (typeof options.details === 'undefined' || options.details.length === 0) options.details === undefined;
    if (typeof options.details !== 'string') throw new TypeError('Command\'s details must be a string.');

    if (typeof options.usage === 'undefined' || options.usage.length === 0) options.usage === 'No usage format provided';
    if (typeof options.usage !== 'string') throw new TypeError('Command\'s usage format must be a string.');

    if (typeof options.examples === 'undefined' || options.examples.length === 0) options.examples === [];
    if (!Array.isArray(options.examples)) throw new TypeError('Command\'s examples must be an array of strings.');

    if (typeof options.ownerOnly === 'undefined') options.ownerOnly === false;
    if (typeof options.ownerOnly !== 'boolean') throw new TypeError('Command\'s ownerOnly option must be a boolean.');

    if (typeof options.nsfw === 'undefined') options.nsfw === false;
    if (typeof options.nsfw !== 'boolean') throw new TypeError('Command\'s nsfw option must be a boolean.');
  }

  run() {
    this.client.logger.warn(`The ${this.options.name} command has no "run" method.`);
  }
};

module.exports = Command;