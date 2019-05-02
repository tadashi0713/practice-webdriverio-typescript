const expect = require("chai").expect

describe("Sample", function () {
  it('can get title', function () {
    browser.url("/");
    expect(browser.getTitle()).to.eq("WebdriverIO · Next-gen WebDriver test framework for Node.js");
  })
});
