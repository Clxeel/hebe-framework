<div align="center">

  <img src="https://drive.google.com/uc?id=15HOlRaLwRtf1ShmThJJKneMaewsAdiMS"></img>

  # Hebe

  **A simple framework for the Eris Discord library.**

  [![GitHub](https://img.shields.io/github/license/Clxeel/hebe-framework)](https://github.com/Clxeel/hebe-framework/blob/main/LICENSE.md)
  ![GitHub Repo stars](https://img.shields.io/github/stars/Clxeel/hebe-framework?color=yellow)
  [![npm](https://img.shields.io/npm/v/hebe-framework?color=crimson)](https://www.npmjs.com/package/hebe-framework)

</div>

## Introduction
Hebe is a Discord bot framework built with [eris](https://github.com/abalabahaha/eris). It is probably coding like shit but it works (and it has a small unpacking size :D). If you want to help me in this project, you can join [the discord server](https://discord.gg/xmS2eMwgrf).

## Installation
```sh
npm install hebe-framework eris
```

## Example
```js
// Main file
const { Client } = require('hebe-framework');

const client = new Client('your_bot_token', {
  erisOptions: { // Client options provided by Eris
    intents: ['all']
  },
  commandsDirectory: 'src/commands', // The directory of your commands folder
  eventsDirectory: 'src/events', // The directory of your events folder
  messageCommands: true, // Whether message commands work
  applicationCommands: true, // Whether application commands work
  prefix: '!', // The prefix used for message commands
  owners: ['your_id'], // The owners of the bot
  enableDebugLoggings: true // You should enable this when developing the bot
});

client.on('error', err => {
  client.logger.error(err);
});

client.connect();
```
*You can find more examples in the [examples folder](https://github.com/Clxeel/hebe-framework/tree/main/examples).*

## Planned (or not 🤡)
- I'm waiting for your feedback so there is nothing planned for the moment

## FAQ
- **Why is this called Hebe?** \
It's 4 letters. Also apparently [Hebe is a sibling of Eris or something](https://en.wikipedia.org/wiki/Hebe_(mythology)).

- **Quoicoubeh ?** \
Oui