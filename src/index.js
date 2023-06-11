const Client = require('./lib/Client');
const Command = require('./lib/structures/Command');
const Event = require('./lib/structures/Event');

const Hebe = {
  Client,
  Command,
  Event
};

module.exports = Hebe;