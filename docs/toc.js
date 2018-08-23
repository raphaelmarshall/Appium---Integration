module.exports = {
  en: [
    ["Home", "about-appium/intro.md"],
    ["About", ["about-appium",
      ["Introduction", "intro.md"],
      ["The Appium Clients", "appium-clients.md"],
      ["Getting Started", "getting-started.md"],
      ["Supported Platforms", "platform-support.md"],
      ["API Documentation", "api.md"],
    ]],
    ["Drivers", ["drivers",
      ["XCUITest (iOS)", "ios-xcuitest.md"],
      ["XCUITest Real Devices (iOS)", "ios-xcuitest-real-devices.md"],
      ["UIAutomation (iOS)", "ios-uiautomation.md"],
      ["UIAutomation Safari Launcher (iOS)", "ios-uiautomation-safari-launcher.md"],
      ["UIAutomator (Android)", "android-uiautomator.md"],
      ["UIAutomator2 (Android)", "android-uiautomator2.md"],
      ["Espresso (Android)", "android-espresso.md"],
      ["Selendroid (Android)", "android-selendroid.md"],
      ["Windows", "windows.md"],
      ["Mac", "mac.md"],
    ]],
    ["Commands", ["commands",
      ["Status", "status.md"],
      ["Execute Mobile Command", "mobile-command.md"],
      ["Session", ["session",
        ["Create", "create.md"],
        ["End", "delete.md"],
        ["Get Session Capabilities", "get.md"],
        ["Go Back", "back.md"],
        ["Screenshot", "screenshot.md"],
        ["Source", "source.md"],
        ["Timeouts", ["timeouts",
          ["Timeouts", "timeouts.md"],
          ["Implicit Wait", "implicit-wait.md"],
          ["Async Script", "async-script.md"],
        ]],
        ["Orientation", ["orientation",
          ["Get Orientation", "get-orientation.md"],
          ["Set Orientation", "set-orientation.md"],
        ]],
        ["Geolocation", ["geolocation",
          ["Get Geolocation", "get-geolocation.md"],
          ["Set Geolocation", "set-geolocation.md"],
        ]],
        ["Logs", ["logs",
          ["Get Log Types", "get-log-types.md"],
          ["Get Logs", "get-log.md"],
        ]],
        ["Settings", ["settings",
          ["Update Settings", "update-settings.md"],
          ["Get Device Settings", "get-settings.md"],
        ]],
      ]],
      ["Device", ["device",
        ["Activity", ["activity",
          ["Start Activity", "start-activity.md"],
          ["Current Activity", "current-activity.md"],
          ["Current Package", "current-package.md"],
        ]],
        ["App", ["app",
          ["Install App", "install-app.md"],
          ["Is App Installed", "is-app-installed.md"],
          ["Launch App", "launch-app.md"],
          ["Background App", "background-app.md"],
          ["Close App", "close-app.md"],
          ["Reset App", "reset-app.md"],
          ["Remove App", "remove-app.md"],
          ["Get App Strings", "get-app-strings.md"],
          ["End Test Coverage", "end-test-coverage.md"],
        ]],
        ["Files", ["files",
          ["Push File", "push-file.md"],
          ["Pull File", "pull-file.md"],
          ["Pull Folder", "pull-folder.md"],
        ]],
        ["Interactions", ["interactions",
          ["Shake", "shake.md"],
          ["Lock", "lock.md"],
          ["Unlock", "unlock.md"],
          ["Is Locked", "is-locked.md"],
          ["Rotate", "rotate.md"],
        ]],
        ["Keys", ["keys",
          ["Press keycode", "press-keycode.md"],
          ["Long press keycode", "long-press-keycode.md"],
          ["Hide Keyboard", "hide-keyboard.md"],
          ["Is Keyboard Shown", "is-keyboard-shown.md"],
        ]],
        ["Network", ["network",
          ["Toggle Airplane Mode", "toggle-airplane-mode.md"],
          ["Toggle Data", "toggle-data.md"],
          ["Toggle WiFi", "toggle-wifi.md"],
          ["Toggle Location Services", "toggle-location-services.md"],
          ["Send SMS", "send-sms.md"],
          ["GSM Call", "gsm-call.md"],
          ["GSM Signal", "gsm-signal.md"],
          ["GSM Voice", "gsm-voice.md"],
        ]],
        ["Performance Data", ["performance-data",
          ["Get Performance Data", "get-performance-data.md"],
          ["Performance Data Types", "performance-data-types.md"],
        ]],
        ["Screen Recording", ["recording-screen",
          ["Start Screen Recording", "start-recording-screen.md"],
          ["Stop Screen Recording", "stop-recording-screen.md"],
        ]],
        ["Simulator", ["simulator",
          ["Perform Touch ID", "touch-id.md"],
          ["Toggle Touch ID Enrollment", "toggle-touch-id-enrollment.md"],
        ]],
        ["System", ["system",
          ["Open Notifications", "open-notifications.md"],
          ["System Bars", "system-bars.md"],
          ["System Time", "system-time.md"],
        ]]
      ]],
      ["Element", ["element",
        ["Find Element", "find-element.md"],
        ["Find Elements", "find-elements.md"],
        ["Actions", ["actions",
          ["Click", "click.md"],
          ["Send Keys", "send-keys.md"],
          ["Clear", "clear.md"],
        ]],
        ["Attributes", ["attributes",
          ["Text", "text.md"],
          ["Name", "name.md"],
          ["Attribute", "attribute.md"],
          ["Selected", "selected.md"],
          ["Enabled", "enabled.md"],
          ["Displayed", "displayed.md"],
          ["Location", "location.md"],
          ["Size", "size.md"],
          ["Rect", "rect.md"],
          ["CSS Property", "css-property.md"],
          ["Location in View", "location-in-view.md"],
        ]],
        ["Other", ["other",
          ["Submit", "submit.md"],
          ["Active Element", "active.md"],
          ["Equals Element", "equals-element.md"],
        ]]
      ]],
      ["Context", ["context",
        ["Get Context", "get-context.md"],
        ["Get All Contexts", "get-contexts.md"],
        ["Set Context", "set-context.md"],
      ]],
      ["Interactions", ["interactions",
        ["Mouse", ["mouse",
          ["Move To", "moveto.md"],
          ["Click", "click.md"],
          ["Double Click", "doubleclick.md"],
          ["Button Down", "button-down.md"],
          ["Button Up", "button-up.md"],
        ]],
        ["Touch", ["touch",
          ["Single Tap", "tap.md"],
          ["Double Tap", "double-tap.md"],
          ["Move", "move.md"],
          ["Touch Down", "touch-down.md"],
          ["Touch Up", "touch-up.md"],
          ["Long Press", "long-press.md"],
          ["Scroll", "scroll.md"],
          ["Flick", "flick.md"],
          ["Multi Touch Perform", "multi-touch-perform.md"],
          ["Touch Perform", "touch-perform.md"],
        ]],
      ]],
      ["Web", ["web",
        ["Window", ["window",
          ["Set Window", "set-window.md"],
          ["Close Window", "close-window.md"],
          ["Get Handle", "get-handle.md"],
          ["Get Handles", "get-handles.md"],
          ["Get Title", "title.md"],
          ["Get Window Size", "get-window-size.md"],
          ["Set Window Size", "set-window-size.md"],
          ["Get Window Position", "get-window-position.md"],
          ["Set Window Position", "set-window-position.md"],
          ["Maximize Window", "maximize-window.md"],
        ]],
        ["Navigation", ["navigation",
          ["Go to URL", "go-to-url.md"],
          ["Get URL", "url.md"],
          ["Back", "back.md"],
          ["Forward", "forward.md"],
          ["Refresh", "refresh.md"],
        ]],
        ["Storage", ["storage",
          ["Get All Cookies", "get-all-cookies.md"],
          ["Set Cookie", "set-cookie.md"],
          ["Delete Cookie", "delete-cookie.md"],
          ["Delete All Cookies", "delete-all-cookies.md"],
        ]],
        ["Frame", ["frame",
          ["Switch to Frame", "switch.md"],
          ["Switch to Parent Frame", "parent.md"],
        ]],
        ["Execute Async", "execute-async.md"],
        ["Execute", "execute.md"],
      ]],
    ]],
    ["Writing & Running Tests", ["writing-running-appium",
      ["Running Tests", "running-tests.md"],
      ["Desired Capabilities", "caps.md"],
      ["The --default-capabilities flag", "default-capabilities-arg.md"],
      ["Finding Elements", "finding-elements.md"],
      ["Touch Actions", "touch-actions.md"],
      ["CLI Arguments", "server-args.md"],
      ["Web/Web Views", ["web",
        ["Mobile Web Testing", "mobile-web.md"],
        ["Automating Hybrid Apps", "hybrid.md"],
        ["Using ios-webkit-debug-proxy", "ios-webkit-debug-proxy.md"],
        ["Using Chromedriver", "chromedriver.md"],
      ]],
      ["iOS", ["ios",
        ["XCUITest Mobile Gestures", "ios-xctest-mobile-gestures.md"],
        ["XCUITest Mobile App Management", "ios-xctest-mobile-apps-management.md"],
        ["iOS Pasteboard Guide", "ios-xctest-pasteboard.md"],
        ["iOS Predicate Guide", "ios-predicate.md"],
        ["iOS Touch ID Guide", "ios-touch-id.md"],
        ["iOS Install Certificate", "ios-xctest-install-certificate.md"],
      ]],
      ["Android", ["android",
        ["UiSelector Guide", "uiautomator-uiselector.md"],
        ["Android Code Coverage Guide", "android-coverage.md"],
        ["Activities Startup Troubleshooting Guide", "activity-startup.md"],
      ]],
      ["Other", ["other",
        ["Reset Strategies", "reset-strategies.md"],
        ["Network Connection Guide", "network-connection.md"],
        ["Using Unicode with Appium", "unicode.md"],
        ["Troubleshooting", "troubleshooting.md"]
      ]],
    ]],
    ["Advanced", ["advanced-concepts",
      ["Migrating to XCUITest", "migrating-to-xcuitest.md"],
      ["Using Selenium Grid with Appium", "grid.md"],
      ["Cross-domain iframes", "cross-domain-iframes.md"],
      ["Using a custom WDA server", "wda-custom-server.md"],
      ["Running with multiple versions of Xcode", "multiple-xcode-versions.md"],
      ["The Event Timings API", "event-timings.md"],
      ["Setup for Parallel Testing", "parallel-tests.md"],
      ["The Settings API", "settings.md"]]],
    ["Contributing", ["contributing-to-appium",
      ["Running Appium from Source", "appium-from-source.md"],
      ["Developer Overview", "developers-overview.md"],
      ["Standard Dev Commands", "dev-tools.md"],
      ["Appium Style Guide", "style-guide.md"],
      ["How to Write Docs", "how-to-write-docs.md"],
      ["Appium Package Structure", "appium-packages.md"],
      ["Credits", "credits.md"]]]
  ], "cn": [
  ]
};
