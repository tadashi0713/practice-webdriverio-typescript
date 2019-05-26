const config = require("./wdio.base.conf").config;

config.capabilities = [{
  browserName: 'MicrosoftEdge',
  osPlatform: 'Windows',
  osVersion: '10'
}]

exports.config = config;
