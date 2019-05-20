const config = require("./wdio.base.conf").config;

config.capabilities = [{
  maxInstances: 1,
  browserName: 'chrome',
  'goog:chromeOptions': {
    args: ['window-size=1920,1080', '--headless', '--disable-gpu']
  }
}]

config.services = ['selenium-standalone', 'chromedriver']

exports.config = config;
