const { Command } = require('../../index');

class PingCommand extends Command {
  constructor(client) {
    super(client,
      { // message command options
        name: 'ping',
        description: 'Shows the response speed of the bot.'
      },
      { // application command options
        enabled: true
      }
    );
  }

  run(message, args) {
    return message.channel.createMessage(`Pong! rtt: \`${message.createdAt - Date.now()}ms\``);
  }

  applicationCommandRun(interaction) {
    return interaction.createMessage(`Pong! rtt: \`${interaction.createdAt - Date.now()}ms\``);
  }
};

module.exports = PingCommand;