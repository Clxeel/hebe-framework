const Client = require('../Client');

class Event {
  /**
   * @param {Client} client
   * @param {object} options The options of the event
   * @param {string} options.name The name of the event
   * @param {boolean} [options.once] Whether the event must be called multiple times
   */
  constructor(client, options) {
    this.client = client;
    this.options = options;
    if (typeof options.name === 'undefined' || options.name.length === 0) throw new Error('You must provide a name for an event.');
    if (typeof options.name !== 'string') throw new TypeError('Event\'s name must be a string.');

    if (typeof options.once === 'undefined') options.once === false;
    if (typeof options.once !== 'boolean') throw new TypeError('Event\'s once option must be a boolean.');
  }

  execute() {
    this.client.logger.warn(`The ${this.options.name} event has no "execute" method.`);
  }
};

module.exports = Event;