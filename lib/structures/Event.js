'use strict';

const Client = require('../Client');

class Event {
  /**
   * Create an Event
   * @param {Client} client 
   * @param {Object} options Hebe event options
   * @param {String} options.name The name of the event
   * @param {Boolean} [options.once] Whether the event must be called multiple times
   */
  constructor(client, options) {
    this.client = client;
    this.options = Object.assign({
      name: '',
      once: false
    }, options);

    if (!this.options.name || !this.options.name.length) throw new Error('You must provide a name in event options.');
    if (typeof this.options.name !== 'string') throw new TypeError('The event name must be a string.');

    if (typeof this.options.once !== 'boolean') throw new TypeError('The event once option must be a boolean.');
  }

  execute() {
    this.client.logger.warn(`The ${this.options.name} event does not have an "execute" method.`);
  }
}

module.exports = Event;