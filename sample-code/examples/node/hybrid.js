// WD.js driver
var wd = require("wd");

// Test libraries
require('colors');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

// Enable chai assertion chaining
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

// Appium server info
var host = process.env.APPIUM_HOST || "localhost",
    port = parseInt(process.env.APPIUM_PORT || 4723);

// Browser/app config
var appURL = "http://appium.s3.amazonaws.com/WebViewApp6.0.app.zip";
var desired = {
    device: 'iPhone Simulator',
    name: "Appium Hybrid App: with WD",
    platform:'Mac',
    app: appURL,
    // version: '6.0',
    browserName: '',
    newCommandTimeout: 60
};

// Instantiate a new browser session
var browser = wd.promiseChainRemote(host , port);

// See whats going on
browser.on('status', function(info) {
  console.log(info.cyan);
});
browser.on('command', function(meth, path, data) {
  console.log(' > ' + meth.yellow, path.grey, data || '');
});

// Run the test
browser
  .init(desired)
  .windowHandles().then(function(handles) {
    handles.should.have.length.above(0);
    return browser
      .window(handles[0])
      .elementById('i_am_an_id')
        .text().should.become("I am a div");
  })
  .execute("mobile: leaveWebView")
  .fin(function() { return browser.quit(); })
  .done();
