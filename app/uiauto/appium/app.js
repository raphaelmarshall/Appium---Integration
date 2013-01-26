/*global au:true $:true codes:true */
"use strict";
var au;

if (typeof au === "undefined") {
  au = {};
}

$.extend(au, {
    cache: new Array
    , getScreenOrientation: function () {
      var orientation = $.orientation()
        , value = null;
      switch (orientation) {
        case UIA_DEVICE_ORIENTATION_UNKNOWN ||
             UIA_DEVICE_ORIENTATION_FACEUP ||
             UIA_DEVICE_ORIENTATION_FACEDOWN:
            value = "UNKNOWN"; break;
        case UIA_DEVICE_ORIENTATION_PORTRAIT ||
             UIA_DEVICE_ORIENTATION_PORTRAIT_UPSIDEDOWN:
            value = "PORTRAIT"; break;
        case UIA_DEVICE_ORIENTATION_LANDSCAPELEFT ||
             UIA_DEVICE_ORIENTATION_LANDSCAPERIGHT:
            value = "LANDSCAPE"; break;
      }
      if (value !== null) {
        return {
          status: codes.Success.code,
          value: value
        };
      } else {
        return {
          status: codes.UnknownError.code,
          value: 'Unsupported Orientation: ' + orientation
        };
      }
    }

  , setScreenOrientation: function(orientation) {
      if (orientation === "LANDSCAPE") {
        $.orientation(UIA_DEVICE_ORIENTATION_LANDSCAPELEFT);
      } else if (orientation === "PORTRAIT") {
        $.orientation(UIA_DEVICE_ORIENTATION_PORTRAIT);
      } else {
        return {
          status: codes.UnknownError.code,
          value: 'Unsupported orientation: ' + orientation
        };
      }
      var newOrientation = au.getScreenOrientation();
      if (newOrientation == orientation) {
        return {
          status: codes.Success.code
          , value: newOrientation
        };
      } else {
        console.log("returning error");
        return {
          status: codes.UnknownError.code
          , value: "Orientation change did not take effect"
        };
      }
    }

  , lookup: function(selector, name, ctx) {
      if (typeof name !== 'undefined' && typeof this.cache[name] !== 'undefined') {
        return [ this.cache[name] ];
      } else if (typeof selector === 'string') {
        var _ctx = target.frontMostApp().mainWindow();
      
        if (typeof ctx === 'string') {
          _ctx = this.lookup(ctx);
        } else if (typeof ctx === 'object') {
          _ctx = ctx;
        }

        $.timeout(0);
        var elems = $(selector, _ctx);
        $.timeout(1);

        var cache = this.cache;
        elems.each(function(e, el) {
          cache[el.name()] = el;
        });

        return elems;
      } else {
        return null;
      }
    }

  , getElement: function(name) {
      var results = this.lookup(null, name);
      return results[0];
    }

  , getElementByName: function(name) {
      var selector = ['#', name].join('');
      var elems = this.lookup(selector, name);

      if (elems.length > 0) {
        var el = elems.first();

        return {
          status: codes.Success.code,
          value: {'ELEMENT': el.name() }
        };
      } else {
        return {
          status: codes.NoSuchElement.code,
          value: codes.NoSuchElement.summary
        };
      }
    }

  , getElementsByType: function(type, ctx) {
      var selector = type;

      // be backwards compatible, mechanic.js
      switch (type) {
        case 'tableView':
        case 'textField':
          selector = type.toLowerCase();
          break;
        case 'staticText':
          selector = 'text';
          break;
        case 'tableCell':
          selector = 'cell';
      }

      var elems = this.lookup(selector, ctx);
      var results = [];

      elems.each(function(e, el) {
        results.push({ 'ELEMENT': el.name() });
      });

      return {
        status: codes.Success.code,
        value: results
      };
    }

  , getElementByType: function(type, ctx) {
      var results = this.getElementsByType(type, ctx);

      if (results.value.length < 1) {
        return {
          status: codes.NoSuchElement.code,
          value: null
        };
      } else {
        return {
          status: codes.Success.code,
          value: results.value[0]
        };
      } 
    }
});
