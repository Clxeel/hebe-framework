const { Event } = require('../../index');

class ReadyEvent extends Event {
  constructor(client) {
    super(client, {
      name: 'ready',
      once: true
    });
  }

  execute(client) {
    return this.client.logger.info('Logged in!');
  }
};

module.exports = ReadyEvent;