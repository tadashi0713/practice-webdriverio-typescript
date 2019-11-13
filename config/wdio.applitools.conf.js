const config = require("./wdio.base.conf").config;
const { EyesService } = require('@applitools/eyes-webdriverio5-service');

config.capabilities = [{
  browserName: 'chrome',
  'goog:chromeOptions': {
    args: ['window-size=500, 500', '--headless', '--disable-gpu']
  }
}]

config.specs = [
    './test/specs/applitools.ts'
]

config.beforeHook = function() {
  browser.setWindowSize(500, 500);
}

config.services = ['selenium-standalone', [EyesService]]
config.eyes = {
  appName: 'WebdriverIO',
  branchName: 'master',
  hideCaret: true,
  stitchMode: true,
}

config.onComplete = function() {
    console.log("Applitools")
}

exports.config = config;
