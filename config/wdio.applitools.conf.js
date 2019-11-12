const config = require("./wdio.base.conf").config;
const { EyesService } = require('@applitools/eyes-webdriverio5-service');

export const applitoolsConfig = {
  eyes: {
    appName: 'WebdriverIO',
    branchName: 'master',
    hideCaret: true,
    stitchMode: true,
  },
  services: [[EyesService]],

  beforeHook() {
  },
};


config.capabilities = [{
  browserName: 'chrome',
  'goog:chromeOptions': {
    args: ['window-size=1920,1080', '--headless', '--disable-gpu']
  }
}]

config.specs = [
    './test/specs/applitools.ts'
]

config.before = function() {

}

config.onComplete = function(){
    console.log("Applitools")
}

exports.config = config;
