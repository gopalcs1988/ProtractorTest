var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config={
    seleniumaddress: 'http://localhost:4444/wd/hub',
    specs: ['../Specs/angularspecs.js'],
    capabilities: {
        browserName: 'chrome'},
    jasmineModeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target',
                fileNamePrefix: 'Test',
                screenshotsFolder: 'Snapshot',
                fixedScreenshotName: true,
                takeScreenshots: true,
                takeScreenshotsOnlyOnFailures: true,
                cleanDestination: true,
                fileName: 'Report',
                fileNameSeparator: '_',
                fileNameSuffix: '',
                fileNameDateSuffix: true
            })
        );
    }
};