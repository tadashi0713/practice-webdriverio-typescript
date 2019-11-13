// / <reference types="node"/>
declare namespace WebdriverIO {
  interface Browser {
    // for applitools
    eyesCheck(title: string, checkSettings?: object): Browser;
  }
}
