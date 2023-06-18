const Eris = require('eris');
const fs = require('fs');
const glob = require('fast-glob');
const colorette = require('colorette');

const Client = require('../Client');

class LoadCommands {
  /**
   * @param {Client} client 
   * @param {String} directory 
   * @returns 
   */
  constructor(client, directory) {
    this.client = client;
    this.directory = directory;

    // check if the directory exists
    if (!fs.existsSync(this.directory)) throw new Error(`The commands path ${this.directory} declared in client options does not exist.`);

    // get all files
    const files = glob.sync(`${process.cwd().replace(/\\/g, '/')}/${this.directory}/**/*.{js,ts}`);
    const commandsToRegister = [];

    // save commands
    files.forEach(file => {
      const command = require(file);
      const _command = new command(this);

      if (this.client.hebeOptions.messageCommands) this.client.commands.set(_command.options.name, _command);
      if (this.client.hebeOptions.applicationCommands) commandsToRegister.push(_command.applicationCommandOptions);
    });

    // register application commands
    this.client.once('ready', () => {
      try {
        if (this.client.hebeOptions.enableDebugLoggings) {
          this.client.getCommands().then(commands => {
            this.client.logger.debug(`Loaded ${colorette.yellow(this.client.commands.size)} commands.`);
            this.client.logger.debug(`└ The client now has ${colorette.yellow(commands.length)} application commands (may be a wrong number).`);
          });
        }

        this.client.bulkEditCommands(commandsToRegister);
      } catch (error) {
        throw new TypeError(error);
      }
    });

    // handle message commands
    this.client.on('messageCreate', message => {
      if (message.author.bot || !message.content.startsWith(this.client.hebeOptions.prefix)) return;

      const args = message.content.slice(this.client.hebeOptions.prefix.length).trim().split(/ +/g);
      const commandName = args.shift().toLowerCase();

      if (!commandName.length) return;

      const command = this.client.commands.get(commandName);
      if (command) {
        if (command.options.ownerOnly && !this.client.hebeOptions.owners.includes(message.author.id)) return message.channel.createMessage('Only bot owners can run this command.');
        if (command.options.nsfw && !message.channel.nsfw) return message.channel.createMessage('This command can only be run in a nsfw channel');

        command.run(message, args);
      }
    });

    // handle application commands
    this.client.on('interactionCreate', interaction => {
      if (interaction instanceof Eris.CommandInteraction) {
        const command = this.client.commands.get(interaction.data.name);
        if (command) command.applicationCommandRun(interaction);
      }
    });
  }
}

module.exports = LoadCommands;