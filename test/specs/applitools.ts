

describe("Applitools", function () {
    it('is good with applitools', function () {
        browser.url('/');
        const runner = new ClassicRunner();
        const eyes = new Eyes(runner);

        const configuration = new Configuration();
        configuration.setAppName('WebdriverIO');
        configuration.setTestName('Smoke');
        eyes.setConfiguration(configuration);

        eyes.open(browser);

        browser.url("/");
        eyes.check('Top');
        eyes.close()
    })
});
