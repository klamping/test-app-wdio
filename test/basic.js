const {Eyes, Target} = require('@applitools/eyes.webdriverio');

describe('applitools', function () {
  it('should work', async function () {
    let eyes = new Eyes();
    eyes.setApiKey(process.env.APPLITOOLS_KEY);

    try {
        // Start the test and set the browser's viewport size to 800x600.
        await eyes.open(browser, 'Hello World!', 'My first Javascript test!', {width: 800, height: 600});

        // Navigate the browser to the "hello world!" web-site.
        await browser.url('./helloworld');

        // Visual checkpoint #1.
        await eyes.check('Main Page', Target.window());

        // Click the "Click me!" button.
        await browser.click('button');

        // Visual checkpoint #2.
        await eyes.check('Click!', Target.window());

        // End the test.
        await eyes.close();

    } finally {

        // If the test was aborted before eyes.close was called ends the test as aborted.
        await eyes.abortIfNotClosed();

    }
  })
})