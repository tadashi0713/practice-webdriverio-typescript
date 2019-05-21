const config = require("./wdio.base.conf").config;

config.capabilities = [{
  browserName: 'safari',
}]

exports.config = config;
