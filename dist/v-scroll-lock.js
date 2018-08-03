(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("v-scroll-lock", [], factory);
	else if(typeof exports === 'object')
		exports["v-scroll-lock"] = factory();
	else
		root["v-scroll-lock"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/v-scroll-lock.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/body-scroll-lock/lib/bodyScrollLock.js":
/*!*************************************************************!*\
  !*** ./node_modules/body-scroll-lock/lib/bodyScrollLock.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _toConsumableArray(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }return arr2;\n  } else {\n    return Array.from(arr);\n  }\n}\n\nvar isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && /iPad|iPhone|iPod|(iPad Simulator)|(iPhone Simulator)|(iPod Simulator)/.test(window.navigator.platform);\n// Adopted and modified solution from Bohdan Didukh (2017)\n// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi\n\nvar firstTargetElement = null;\nvar allTargetElements = [];\nvar initialClientY = -1;\nvar previousBodyOverflowSetting = void 0;\nvar previousBodyPaddingRight = void 0;\n\nvar preventDefault = function preventDefault(rawEvent) {\n  var e = rawEvent || window.event;\n  if (e.preventDefault) e.preventDefault();\n\n  return false;\n};\n\nvar setOverflowHidden = function setOverflowHidden(options) {\n  // Setting overflow on body/documentElement synchronously in Desktop Safari slows down\n  // the responsiveness for some reason. Setting within a setTimeout fixes this.\n  setTimeout(function () {\n    // If previousBodyPaddingRight is already set, don't set it again.\n    if (previousBodyPaddingRight === undefined) {\n      var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;\n      var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;\n\n      if (_reserveScrollBarGap && scrollBarGap > 0) {\n        previousBodyPaddingRight = document.body.style.paddingRight;\n        document.body.style.paddingRight = scrollBarGap + 'px';\n      }\n    }\n\n    // If previousBodyOverflowSetting is already set, don't set it again.\n    if (previousBodyOverflowSetting === undefined) {\n      previousBodyOverflowSetting = document.body.style.overflow;\n      document.body.style.overflow = 'hidden';\n    }\n  });\n};\n\nvar restoreOverflowSetting = function restoreOverflowSetting() {\n  // Setting overflow on body/documentElement synchronously in Desktop Safari slows down\n  // the responsiveness for some reason. Setting within a setTimeout fixes this.\n  setTimeout(function () {\n    if (previousBodyPaddingRight !== undefined) {\n      document.body.style.paddingRight = previousBodyPaddingRight;\n\n      // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it\n      // can be set again.\n      previousBodyPaddingRight = undefined;\n    }\n\n    if (previousBodyOverflowSetting !== undefined) {\n      document.body.style.overflow = previousBodyOverflowSetting;\n\n      // Restore previousBodyOverflowSetting to undefined\n      // so setOverflowHidden knows it can be set again.\n      previousBodyOverflowSetting = undefined;\n    }\n  });\n};\n\n// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions\nvar isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {\n  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;\n};\n\nvar handleScroll = function handleScroll(event, targetElement) {\n  var clientY = event.targetTouches[0].clientY - initialClientY;\n\n  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {\n    // element is at the top of its scroll\n    return preventDefault(event);\n  }\n\n  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {\n    // element is at the top of its scroll\n    return preventDefault(event);\n  }\n\n  return true;\n};\n\nvar disableBodyScroll = exports.disableBodyScroll = function disableBodyScroll(targetElement, options) {\n  if (isIosDevice) {\n    // targetElement must be provided, and disableBodyScroll must not have been\n    // called on this targetElement before.\n    if (targetElement && !allTargetElements.includes(targetElement)) {\n      allTargetElements = [].concat(_toConsumableArray(allTargetElements), [targetElement]);\n\n      targetElement.ontouchstart = function (event) {\n        if (event.targetTouches.length === 1) {\n          // detect single touch\n          initialClientY = event.targetTouches[0].clientY;\n        }\n      };\n      targetElement.ontouchmove = function (event) {\n        if (event.targetTouches.length === 1) {\n          // detect single touch\n          handleScroll(event, targetElement);\n        }\n      };\n    }\n  } else {\n    setOverflowHidden(options);\n\n    if (!firstTargetElement) firstTargetElement = targetElement;\n  }\n};\n\nvar clearAllBodyScrollLocks = exports.clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {\n  if (isIosDevice) {\n    // Clear all allTargetElements ontouchstart/ontouchmove handlers, and the references\n    allTargetElements.forEach(function (targetElement) {\n      targetElement.ontouchstart = null;\n      targetElement.ontouchmove = null;\n    });\n\n    allTargetElements = [];\n\n    // Reset initial clientY\n    initialClientY = -1;\n  } else {\n    restoreOverflowSetting();\n\n    firstTargetElement = null;\n  }\n};\n\nvar enableBodyScroll = exports.enableBodyScroll = function enableBodyScroll(targetElement) {\n  if (isIosDevice) {\n    targetElement.ontouchstart = null;\n    targetElement.ontouchmove = null;\n\n    allTargetElements = allTargetElements.filter(function (element) {\n      return element !== targetElement;\n    });\n  } else if (firstTargetElement === targetElement) {\n    restoreOverflowSetting();\n\n    firstTargetElement = null;\n  }\n};\n\n//# sourceURL=webpack://v-scroll-lock/./node_modules/body-scroll-lock/lib/bodyScrollLock.js?");

/***/ }),

/***/ "./src/classes/VScrollLock.js":
/*!************************************!*\
  !*** ./src/classes/VScrollLock.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar VScrollLock = function () {\n  function VScrollLock(disableBodyScroll, enableBodyScroll) {\n    _classCallCheck(this, VScrollLock);\n\n    this.disableBodyScroll = disableBodyScroll;\n    this.enableBodyScroll = enableBodyScroll;\n  }\n\n  /**\n   * Called when plugin is initialized\n   * @param {Object} Vue The Vue instance\n   * @param {Object} options Options passed to plugin\n   */\n\n\n  _createClass(VScrollLock, [{\n    key: 'install',\n    value: function install(Vue, options) {\n      Vue.directive('scroll-lock', {\n        inserted: this.inserted.bind(this),\n        componentUpdated: this.componentUpdated.bind(this),\n        unbind: this.unbind.bind(this)\n      });\n    }\n\n    /**\n     * Inserted directive hook. Called when the bound element has been inserted into its parent node\n     * @param {Node} el Element directive is bound to\n     * @param {Object} binding Binding options\n     */\n\n  }, {\n    key: 'inserted',\n    value: function inserted(el, binding) {\n      if (binding.value) {\n        this.disableBodyScroll(el);\n      }\n    }\n\n    /**\n     * Update directive hook. called after the containing component’s VNode and the VNodes of its children have updated\n     * @param {Node} el Element directive is bound to\n     * @param {Object} binding Binding options\n     */\n\n  }, {\n    key: 'componentUpdated',\n    value: function componentUpdated(el, binding) {\n      if (binding.value) {\n        this.disableBodyScroll(el);\n      } else {\n        this.enableBodyScroll(el);\n      }\n    }\n\n    /**\n     * Unbind directive hook\n     * @param {Node} el Element directive is bound to\n     */\n\n  }, {\n    key: 'unbind',\n    value: function unbind(el) {\n      this.enableBodyScroll(el);\n    }\n  }]);\n\n  return VScrollLock;\n}();\n\nexports.default = VScrollLock;\n\n//# sourceURL=webpack://v-scroll-lock/./src/classes/VScrollLock.js?");

/***/ }),

/***/ "./src/v-scroll-lock.js":
/*!******************************!*\
  !*** ./src/v-scroll-lock.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _VScrollLock = __webpack_require__(/*! ./classes/VScrollLock.js */ \"./src/classes/VScrollLock.js\");\n\nvar _VScrollLock2 = _interopRequireDefault(_VScrollLock);\n\nvar _bodyScrollLock = __webpack_require__(/*! body-scroll-lock */ \"./node_modules/body-scroll-lock/lib/bodyScrollLock.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = new _VScrollLock2.default(_bodyScrollLock.disableBodyScroll, _bodyScrollLock.enableBodyScroll);\n\n//# sourceURL=webpack://v-scroll-lock/./src/v-scroll-lock.js?");

/***/ })

/******/ });
});