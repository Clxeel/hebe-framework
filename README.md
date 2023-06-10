<div align="center">

  <img height=250 src="https://drive.google.com/uc?id=1wus3oTkNOSdCJu0ftFZBwuC27XG5m99S"></img>

  # Hebe

  **A simple framework for the Eris Discord library.**

  [![GitHub](https://img.shields.io/github/license/Clxeel/hebe-framework)](https://github.com/Clxeel/hebe-framework/blob/main/LICENSE.md)
  ![GitHub Repo stars](https://img.shields.io/github/stars/Clxeel/hebe-framework?color=yellow)
  [![npm](https://img.shields.io/npm/v/hebe-framework?color=crimson)](https://www.npmjs.com/package/hebe-framework)

</div>

---

## Description
Hebe is a Discord bot framework built with [eris](https://github.com/abalabahaha/eris).

## Installation
```sh
npm install hebe-framework eris
```

## Example
```js
const { HebeClient } = require('hebe-framework');

const client = new HebeClient('your_bot_token', {
  commandsDirectory: 'src/commands', // The directory of your commands folder
  eventsDirectory: 'src/events', // The directory of you events folder
  prefix: '!', // The prefix used for message commands
  messageCommands: true, // Whether message commands work
  slashCommands: false, // Whether slash commands will be registered (currently Hebe does not support slash commands)
  owners: ['your_id'], // The owners of the bot
  enableDebugLoggings: true // You should enable this when developing the bot
});

client.connect();
```

## To do
- Add slash commands support

## FAQ
- **Why is this called Hebe?** \
It's 4 letters. Also apparently [Hebe is a sibling of Eris or something](https://en.wikipedia.org/wiki/Hebe_(mythology)).

- **Quoicoubeh ?** \
Oui