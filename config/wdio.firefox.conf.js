const config = require("./wdio.base.conf").config;

config.capabilities = [{
  maxInstances: 2,
  browserName: 'firefox',
  'moz:firefoxOptions': {
    args: ['window-size=1920,1080', '--headless']
  }
}]

exports.config = config;
