const config = require("./wdio.base.conf").config;

config.capabilities = [{
  browserName: 'MicrosoftEdge'
}]

exports.config = config;
