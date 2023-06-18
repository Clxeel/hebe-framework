const { Command } = require('../../index');
const Eris = require('eris');

class EchoCommand extends Command {
  constructor(client) {
    super(client,
      { // message command options
        name: 'echo',
        description: 'Sends a dm to a member.',
        usage: '<member> <message_to_send>',
        examples: ['echo 012345678987654321 hi my sweetie', 'echo @Member amogus'],
        ownerOnly: true
      },
      { // application command options
        enabled: true,
        options: [
          {
            type: 6, // User option
            name: 'user',
            description: 'the targeted member',
            required: true
          },
          {
            type: 3, // String option
            name: 'message',
            description: 'the message to send',
            required: true
          }
        ]
      }
    );
  }

  /**
   * @param {Eris.Message} message 
   * @param {Array} args 
   */
  async run(message, args) {
    const member = this.client.guilds.get(message.guildID).members.get(args[0]);
    if (!member) return message.channel.createMessage('I cannot find this member.');

    const msg = args.slice(1).join(' ');
    if (!msg) return message.channel.createMessage('Please provide a message to send.');

    member.user.getDMChannel().then(async user => {
      await user.createMessage(msg);
      return message.channel.createMessage('I sent the message!');
    }).catch(err => {
      return message.channel.createMessage('I cannot send messages to this member.');
    });
  }

  /**
   * @param {Eris.CommandInteraction} interaction 
   */
  async applicationCommandRun(interaction) {
    const user = await this.client.users.get(interaction.data.options[0].value);
    const msg = interaction.data.options[1].value;

    user.getDMChannel().then(async user => {
      await user.createMessage(msg);
      return interaction.createMessage({ content: 'I sent the message!', flags: 64 });
    }).catch(err => {
      return interaction.createMessage({ content: 'I cannot send messages to this member.', flags: 64 });
    });
  }
};

module.exports = EchoCommand;