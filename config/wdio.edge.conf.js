const config = require("./wdio.base.conf").config;

config.capabilities = [{
  browserName: 'edge',
}]

exports.config = config;
