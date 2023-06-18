const colorette = require('colorette');

function createLog(content, color, type, error = false) {
  const timestamp = `${new Date().toLocaleString({ hourCycle: 'h23' })}`;
  const stream = error ? process.stderr : process.stdout;

  let line;
  if (type === 'DEBUG') line = `${colorette.gray(`${colorette[color](timestamp)} - ${colorette[color](type)} - ${content}`)}\n`;
  else line = `${colorette[color](timestamp)} - ${colorette[color](type)} - ${content}\n`;

  return stream.write(line);
}

function info(content) {
  return createLog(`${content}`, 'cyan', 'INFO');
}

function debug(content) {
  return createLog(`${content}`, 'magenta', 'DEBUG');
}

function warn(content) {
  return createLog(`${content}`, 'yellow', 'WARN');
}

function error(content) {
  return createLog(`${content}`, 'red', 'ERROR', true);
}

module.exports = { info, debug, warn, error };