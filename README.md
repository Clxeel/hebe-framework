<div align="center">

  <img src="https://drive.google.com/uc?id=15HOlRaLwRtf1ShmThJJKneMaewsAdiMS"></img>

  # Hebe

  **A simple framework for the Eris Discord library.**

  [![GitHub](https://img.shields.io/github/license/Clxeel/hebe-framework)](https://github.com/Clxeel/hebe-framework/blob/main/LICENSE.md)
  ![GitHub Repo stars](https://img.shields.io/github/stars/Clxeel/hebe-framework?color=yellow)
  [![npm](https://img.shields.io/npm/v/hebe-framework?color=crimson)](https://www.npmjs.com/package/hebe-framework)

</div>

---

### Table of Contents
- [Hebe](#hebe)
    - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Example](#example)
    - [Main file](#main-file)
    - [Event file](#event-file)
  - [Planned (or not 🤡)](#planned-or-not-)
  - [FAQ](#faq)

## Introduction
Hebe is a Discord bot framework built with [eris](https://github.com/abalabahaha/eris). It is probably coding like shit but it works (and it has a small unpacking size :D).

## Installation
```sh
npm install hebe-framework eris
```

## Example
### Main file
```js
const { Client } = require('hebe-framework');

const client = new Client('your_bot_token', {
  commandsDirectory: 'src/commands', // The directory of your commands folder
  eventsDirectory: 'src/events', // The directory of your events folder
  prefix: '!', // The prefix used for message commands
  messageCommands: true, // Whether message commands work
  slashCommands: false, // Whether slash commands will be registered (currently Hebe does not support slash commands)
  owners: ['your_id'], // The owners of the bot
  enableDebugLoggings: true // You should enable this when developing the bot
});

client.connect();
```
### Event file
```js
const { Event } = require('hebe-framework');

class ReadyEvent extends Event {
  constructor(client) {
    super(client, {
      name: 'ready',
      once: true
    });
  }

  execute(client) {
    this.client.logger.info('The bot is ready!');
  };
};

module.exports = ReadyEvent;
```

## Planned (or not 🤡)
- Add slash commands support

## FAQ
- **Why is this called Hebe?** \
It's 4 letters. Also apparently [Hebe is a sibling of Eris or something](https://en.wikipedia.org/wiki/Hebe_(mythology)).

- **Quoicoubeh ?** \
Oui