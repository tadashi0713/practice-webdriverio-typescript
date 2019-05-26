const config = require("./wdio.base.conf").config;

config.capabilities = [{
  browserName: 'internet explorer'
}]

exports.config = config;
