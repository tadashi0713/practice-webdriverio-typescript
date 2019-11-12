import {expect} from "chai"
import {
  ClassicRunner,
  Eyes,
  Target
} from '@applitools/eyes.webdriverio'
import {Configuration} from '@applitools/eyes-selenium'

describe("Sample", function () {
  it('can get title', function () {
    browser.url("/");
    expect(browser.getTitle()).to.eq("WebdriverIO · Next-gen WebDriver test framework for Node.js");
  })
});
