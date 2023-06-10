const Client = require('./lib/Client');
const Command = require('./lib/structures/Command');
const Event = require('./lib/structures/Event');

const Hebe = {};

Hebe.HebeClient = Client;
Hebe.HebeCommand = Command;
Hebe.HebeEvent = Event;

module.exports = Hebe;