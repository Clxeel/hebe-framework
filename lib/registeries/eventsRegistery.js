const fs = require('fs');
const glob = require('fast-glob');
const colorette = require('colorette');

const Client = require('../Client');

class LoadEvents {
  /**
   * @param {Client} client 
   * @param {String} directory
   */
  constructor(client, directory) {
    this.client = client;
    this.directory = directory;

    // check if the directory exists
    if (!fs.existsSync(this.directory)) throw new Error(`The events path ${this.directory} declared in client options does not exist.`);

    // get all files
    const files = glob.sync(`${process.cwd().replace(/\\/g, '/')}/${this.directory}/**/*.{js,ts}`);
    let count = 0;

    // handle events
    files.forEach(file => {
      const event = require(file);
      const _event = new event(this.client);

      if (_event.options.once) this.client.once(_event.options.name, (...args) => _event.execute(...args));
      else this.client.on(_event.options.name, (...args) => _event.execute(...args));

      return count++;
    });

    // debug
    this.client.once('ready', () => {
      if (this.client.hebeOptions.enableDebugLoggings) this.client.logger.debug(`Loaded ${colorette.yellow(count)} events.`);

    });
  }
}

module.exports = LoadEvents;