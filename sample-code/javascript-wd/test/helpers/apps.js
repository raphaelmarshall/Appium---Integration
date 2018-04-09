import path from 'path';

if (process.env.SAUCE_LABS) {
  // TODO: Change thes URL's to updated locations
  exports.iosTestApp = "http://appium.github.io/appium/assets/TestApp7.1.app.zip";
  exports.androidApiDemos = "http://appium.github.io/appium/assets/ApiDemos-debug.apk";
} else {
  exports.iosTestApp = path.resolve(__dirname, "..", "..","..", "apps", "TestApp.app.zip");
  exports.androidApiDemos = path.resolve(__dirname, "..", "..","..", "apps", "ApiDemos-debug.apk");
}
