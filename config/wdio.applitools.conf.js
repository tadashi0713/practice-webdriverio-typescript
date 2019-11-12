const config = require("./wdio.base.conf").config;

config.capabilities = [{
  browserName: 'chrome',
  'goog:chromeOptions': {
    args: ['window-size=1920,1080', '--headless', '--disable-gpu']
  }
}]

config.onComplete = function(){
    console.log("Applitools")
}

exports.config = config;
