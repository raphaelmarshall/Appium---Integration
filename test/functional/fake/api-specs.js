"use strict";
var path = require('path')
  , setup = require("../common/setup-base");

require('../../helpers/setup-chai');

describe("appium mock api", function () {
  var mockApp = path.resolve(__dirname, 'app.xml');
  var driver;
  setup(this, {app: mockApp}).then(function (d) { driver = d; });

  describe('contexts', function () {
    it('should get current context', function (done) {
      driver
        .currentContext()
          .should.eventually.become('NATIVE_APP')
        .nodeify(done);
    });
    it('should get contexts', function (done) {
      driver
        .contexts()
           .should.eventually.become(['NATIVE_APP', 'WEBVIEW_1'])
        .nodeify(done);
    });
    it('should set context', function (done) {
      driver
        .context('WEBVIEW_1')
        .currentContext()
          .should.eventually.become('WEBVIEW_1')
        .nodeify(done);
    });
    it('should not set context that is not there', function (done) {
      driver
        .context('WEBVIEW_FOO')
          .should.eventually.be.rejectedWith(/35/)
        .nodeify(done);
    });
  });

  describe('finding elements', function () {
    it('should find a single element', function (done) {
      driver
        .elementByXPath('//MockWebView')
        .then(function (el) {
          el.value.should.exist;
        })
        .nodeify(done);
    });
    it('should not find a single element with bad strategy', function (done) {
      driver
        .elementByCss('.sorry')
        .should.eventually.be.rejectedWith(/9/)
        .nodeify(done);
    });
    it('should not find a single element with bad selector', function (done) {
      driver
        .elementByXPath('badsel')
        .should.eventually.be.rejectedWith(/32/)
        .nodeify(done);
    });
    it('should not find a single element that is not there', function (done) {
      driver
        .elementByXPath('//dontexist')
        .should.eventually.be.rejectedWith(/7/)
        .nodeify(done);
    });
    it('should find multiple elements', function (done) {
      driver
        .elementsByXPath('//MockListItem')
        .then(function (els) {
          els.should.have.length(3);
        })
        .nodeify(done);
    });
    it('should not find multiple elements with bad strategy', function (done) {
      driver
        .elementsByCss('.sorry')
        .should.eventually.be.rejectedWith(/9/)
        .nodeify(done);
    });
    it('should not find multiple elements with bad selector', function (done) {
      driver
        .elementsByXPath('badsel')
        .should.eventually.be.rejectedWith(/32/)
        .nodeify(done);
    });
    it('should not find multiple elements that are not there', function (done) {
      driver
        .elementsByXPath('//dontexist')
        .should.eventually.eql([])
        .nodeify(done);
    });
  });

  describe('interacting with elements', function () {
    var el;
    it('should not send keys to an invalid element', function (done) {
      driver
        .elementByXPath('//MockListItem')
        .sendKeys("test value")
        .should.eventually.be.rejectedWith(/12/)
        .nodeify(done);
    });
    it('should send keys to an element', function (done) {
      driver
        .elementByXPath('//MockInputField')
        .then(function (_el) {
          el = _el;
          return el;
        })
        .sendKeys("test value")
        .nodeify(done);
    });
    it('should get text of an element', function (done) {
      el
        .text()
        .should.eventually.become("test value")
        .nodeify(done);
    });
    it('should not click an invisible element', function (done) {
      driver
        .elementByXPath('//MockButton[@id="Button1"]')
        .click()
        .should.eventually.be.rejectedWith(/12/)
        .nodeify(done);
    });
    it('should click an element', function (done) {
      driver
        .elementByXPath('//MockButton[@id="Button2"]')
        .then(function (_el) { el = _el; return el; })
        .click()
        .click()
        .click()
        .nodeify(done);
    });
    it('should get the attribute of an element', function (done) {
      el
        .getAttribute('clicks')
        .should.eventually.become(3)
        .nodeify(done);
    });
    it('should detect whether an element is displayed', function (done) {
      driver
        .elementByXPath('//MockButton[@id="Button1"]')
        .isDisplayed()
          .should.eventually.become(false)
        .elementByXPath('//MockButton[@id="Button2"]')
        .isDisplayed()
          .should.eventually.become(true)
        .nodeify(done);
    });
    it('should detect whether an element is enabled', function (done) {
      driver
        .elementByXPath('//MockButton[@id="Button1"]')
        .isEnabled()
          .should.eventually.become(false)
        .elementByXPath('//MockButton[@id="Button2"]')
        .isEnabled()
          .should.eventually.become(true)
        .nodeify(done);
    });
    it('should detect whether an element is enabled', function (done) {
      driver
        .elementByXPath('//MockButton[@id="Button1"]')
        .isSelected()
          .should.eventually.become(false)
        .elementByXPath('//MockButton[@id="Button2"]')
        .isSelected()
          .should.eventually.become(true)
        .nodeify(done);
    });
  });
});

