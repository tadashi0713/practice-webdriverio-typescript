const config = require("./wdio.base.conf").config;

config.capabilities = [{
  maxInstances: 2,
  browserName: 'firefox',
  'goog:chromeOptions': {
    args: ['window-size=1920,1080', '--headless']
  }
}]

exports.config = config;
