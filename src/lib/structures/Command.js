class Command {
  constructor(options) {
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
};

module.exports = Command;