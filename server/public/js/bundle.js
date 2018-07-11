/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "server/public/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(29)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(19);
} else {}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/PropTypes.js


var subscriptionShape = prop_types_default.a.shape({
  trySubscribe: prop_types_default.a.func.isRequired,
  tryUnsubscribe: prop_types_default.a.func.isRequired,
  notifyNestedSubs: prop_types_default.a.func.isRequired,
  isSubscribed: prop_types_default.a.func.isRequired
});

var storeShape = prop_types_default.a.shape({
  subscribe: prop_types_default.a.func.isRequired,
  dispatch: prop_types_default.a.func.isRequired,
  getState: prop_types_default.a.func.isRequired
});
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return react["Children"].only(this.props.children);
    };

    return Provider;
  }(react["Component"]);

  if (false) {}

  Provider.propTypes = {
    store: storeShape.isRequired,
    children: prop_types_default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = storeShape.isRequired, _Provider$childContex[subscriptionKey] = subscriptionShape, _Provider$childContex);

  return Provider;
}

/* harmony default export */ var components_Provider = (createProvider());
// EXTERNAL MODULE: ./node_modules/react-redux/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(15);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(2);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
function Subscription_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    Subscription_classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();


// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connectAdvanced.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function connectAdvanced_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function connectAdvanced_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function connectAdvanced_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = subscriptionShape, _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    browser_default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      connectAdvanced_inherits(Connect, _Component);

      function Connect(props, context) {
        connectAdvanced_classCallCheck(this, Connect);

        var _this = connectAdvanced_possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        browser_default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        browser_default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(react["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(react["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {}

    return hoist_non_react_statics_cjs_default()(Connect, WrappedComponent);
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/shallowEqual.js
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/lodash-es/_freeGlobal.js
var _freeGlobal = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ var _root = (root);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var Symbol = _root.Symbol;

/* harmony default export */ var _Symbol = (Symbol);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ var _getPrototype = (getPrototype);

// CONCATENATED MODULE: ./node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);

// CONCATENATED MODULE: ./node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    isPlainObject_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!lodash_es_isObjectLike(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ var lodash_es_isPlainObject = (isPlainObject);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/verifyPlainObject.js



function verifyPlainObject(value, displayName, methodName) {
  if (!lodash_es_isPlainObject(value)) {
    warning(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/wrapMapToProps.js


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}

      return props;
    };

    return proxy;
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapDispatchToProps.js



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return Object(redux["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ var connect_mapDispatchToProps = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapStateToProps.js


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ var connect_mapStateToProps = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mergeProps.js
var mergeProps_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return mergeProps_extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) {}
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ var connect_mergeProps = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/verifySubselectors.js


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      warning('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/selectorFactory.js
function selectorFactory_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = selectorFactory_objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/connect.js
var connect_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function connect_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? connect_mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? connect_mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? connect_mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? shallowEqual : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? shallowEqual : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? shallowEqual : _ref2$areMergedPropsE,
        extraOptions = connect_objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, connect_extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ var connect_connect = (createConnect());
// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Provider", function() { return components_Provider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "createProvider", function() { return createProvider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return connectAdvanced; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "connect", function() { return connect_connect; });






/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.REPLACE });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

  return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {}

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var store = createStore.apply(undefined, args);
      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */
function isCrushed() {}

if (false) {}




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10), __webpack_require__(28)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {}

module.exports = emptyObject;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var toggleContinent = exports.toggleContinent = function toggleContinent(name) {
	return {
		type: 'TOGGLE_CONTINENT',
		name: name
	};
};

var toggleCountry = exports.toggleCountry = function toggleCountry(name) {
	return {
		type: 'TOGGLE_COUNTRY',
		name: name
	};
};

var toggleCity = exports.toggleCity = function toggleCity(name) {
	return {
		type: 'TOGGLE_CITY',
		name: name
	};
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var toggleState = exports.toggleState = function toggleState(name) {
	return {
		type: 'TOGGLE_STATE',
		name: name
	};
};

var toggleCiity = exports.toggleCiity = function toggleCiity(name) {
	return {
		type: 'TOGGLE_CIITY',
		name: name
	};
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    buttonDefault: {
        width: 120,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'transparent',
        margin: 1
    },
    buttonClicked: {
        width: 120,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'azure',
        margin: 1
    }
};

var Item = function (_React$Component) {
    _inherits(Item, _React$Component);

    function Item(props) {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

        _this.onButtonPress = function () {

            if (_this.props.id.substring(0, 9) === "Continent") {
                _this.props.toggleContinent(_this.props.name);
            } else if (_this.props.id.substring(0, 7) === "Country") {
                _this.props.toggleCountry(_this.props.name);
            } else if (_this.props.id.substring(0, 4) === "City") {
                _this.props.toggleCity(_this.props.name);
            } else if (_this.props.id.substring(0, 5) === "State") {
                _this.props.toggleState(_this.props.name);
            } else if (_this.props.id.substring(0, 5) === "Ciity") {
                _this.props.toggleCiity(_this.props.name);
            }
        };

        return _this;
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'button',
                { style: this.props.highlight ? styles.buttonClicked : styles.buttonDefault, onClick: this.onButtonPress },
                this.props.name
            );
        }
    }]);

    return Item;
}(_react2.default.Component);

exports.default = Item;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _indexWorld = __webpack_require__(31);

var _indexWorld2 = _interopRequireDefault(_indexWorld);

var _indexCountry = __webpack_require__(33);

var _indexCountry2 = _interopRequireDefault(_indexCountry);

var _d3Geo = __webpack_require__(47);

var _topojsonClient = __webpack_require__(48);

var _indiaStates = __webpack_require__(35);

var _indiaStates2 = _interopRequireDefault(_indiaStates);

var _country = __webpack_require__(36);

var _country2 = _interopRequireDefault(_country);

var _world110m = __webpack_require__(37);

var _world110m2 = _interopRequireDefault(_world110m);

var _domToImage = __webpack_require__(38);

var _domToImage2 = _interopRequireDefault(_domToImage);

var _fileSaver = __webpack_require__(39);

var _fileSaver2 = _interopRequireDefault(_fileSaver);

var _continent = __webpack_require__(42);

var _continent2 = _interopRequireDefault(_continent);

var _country3 = __webpack_require__(44);

var _country4 = _interopRequireDefault(_country3);

var _worldWhale = __webpack_require__(46);

var _worldWhale2 = _interopRequireDefault(_worldWhale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _redux.createStore)((0, _redux.combineReducers)({ continentReducer: _indexWorld2.default, countryReducer: _indexCountry2.default }));

var continentCount = 0;
var countryCount = 0;
var stateCount = 0;
var cityCount = 0;
var ciityCount = 0;

var indiaMap = new Image();

var styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    height: 50
  },
  sharebutton: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row"
  }
};

var IndiaMap = function (_React$Component) {
  _inherits(IndiaMap, _React$Component);

  function IndiaMap() {
    _classCallCheck(this, IndiaMap);

    var _this = _possibleConstructorReturn(this, (IndiaMap.__proto__ || Object.getPrototypeOf(IndiaMap)).call(this));

    _this.onSaveMap = function () {
      _domToImage2.default.toBlob(_this.refs.saveImage, { width: 1280, height: 960, style: { "background": 'url(' + _worldWhale2.default + ') no-repeat center' } }).then(function (blob) {
        _fileSaver2.default.saveAs(blob, 'mytravelmap.png');
      });
    };

    _this.state = {
      indiadata: (0, _topojsonClient.feature)(_indiaStates2.default, _indiaStates2.default.objects.states).features,
      renderState: []
    };
    return _this;
  }

  _createClass(IndiaMap, [{
    key: 'projection',
    value: function projection() {
      return (0, _d3Geo.geoMercator)().scale(1000).translate([-780, 800]);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var travelState = [];

      store.subscribe(function () {
        travelState = store.getState().countryReducer.states;

        var renderData = [];

        stateCount = 0;
        ciityCount = 0;

        travelState.forEach(function (state, index) {

          if (state.cities.some(function (city) {
            return city.select === 1;
          })) {
            stateCount++;

            state.cities.forEach(function (city, index) {
              if (city.select === 1) ciityCount++;
            });

            //get country id from name    

            _indiaStates2.default.objects.states.geometries.forEach(function (geometry, index) {
              if (geometry.properties["NAME_1"] === state.name || geometry.properties["NAME_1"] === "Andhra Pradesh" && state.name === "Telangana") {
                // Update fillstyle
                renderData[index] = 1;
              }
            });
          }
        });

        _this2.setState({
          renderState: renderData
        });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //store.unsubsribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { ref: 'saveImage' },
          _react2.default.createElement(
            'svg',
            { width: 1280, height: 720, viewBox: '0 0 1280 720' },
            this.state.indiadata.map(function (d, i) {
              return _react2.default.createElement('path', {
                stroke: 'gray',
                strokeWidth: '0.5',
                key: 'path-' + i,
                fill: _this3.state.renderState[i] ? 'forestgreen' : 'honeydew',
                d: (0, _d3Geo.geoPath)().projection(_this3.projection())(d)
              });
            })
          ),
          _react2.default.createElement(
            'div',
            { style: { "textAlign": "center" } },
            _react2.default.createElement(
              'h1',
              null,
              ' You have traveled... '
            ),
            _react2.default.createElement(
              'h3',
              null,
              ' ',
              ciityCount,
              ' out of total 184 cities listed!'
            ),
            _react2.default.createElement(
              'h3',
              null,
              ' ',
              stateCount,
              ' out of total 29 states and 7 Union Territories!'
            ),
            _react2.default.createElement(
              'h1',
              null,
              ' Congratulations!, that is ',
              Number(stateCount / 36 * 100).toFixed(2),
              '% of India!'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { "textAlign": "center" } },
          _react2.default.createElement(
            'button',
            { style: styles.button, onClick: this.onSaveMap },
            'Download your Map'
          )
        )
      );
    }
  }]);

  return IndiaMap;
}(_react2.default.Component);

var WorldMap = function (_React$Component2) {
  _inherits(WorldMap, _React$Component2);

  function WorldMap() {
    _classCallCheck(this, WorldMap);

    var _this4 = _possibleConstructorReturn(this, (WorldMap.__proto__ || Object.getPrototypeOf(WorldMap)).call(this));

    _this4.state = {
      worlddata: (0, _topojsonClient.feature)(_world110m2.default, _world110m2.default.objects.countries).features,
      renderState: [],
      imageURL: null
    };
    return _this4;
  }

  _createClass(WorldMap, [{
    key: 'projection',
    value: function projection() {
      return (0, _d3Geo.geoMercator)().scale(120).translate([1280 / 2, 720 / 2]);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this5 = this;

      var travelState = [];

      store.subscribe(function () {
        travelState = store.getState().continentReducer.continents;

        var renderData = [];

        continentCount = 0;
        countryCount = 0;
        cityCount = 0;

        travelState.forEach(function (continent, index) {

          if (continent.countries.some(function (country) {
            return country.cities.some(function (city) {
              return city.select === 1;
            });
          })) continentCount++;

          continent.countries.forEach(function (country, index) {

            //get selected countries name
            if (country.cities.some(function (city) {
              return city.select === 1;
            })) {

              countryCount++;

              country.cities.forEach(function (city, index) {
                if (city.select === 1) cityCount++;
              });

              //get country id from name    
              _country2.default.forEach(function (countryData, index) {

                //update arr for matched countries
                if (country.name === countryData["name"]) {

                  _world110m2.default.objects.countries.geometries.forEach(function (geometry, index) {

                    if (geometry.id == countryData["country-code"]) {

                      // Update fillstyle
                      renderData[index] = 1;
                    }
                  });
                }
              });
            }
          });

          _this5.setState({
            renderState: renderData
          });
        });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //store.unsubsribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'svg',
          { width: 1280, height: 720, viewBox: '0 0 1280 720' },
          _react2.default.createElement(
            'g',
            { className: 'countries' },
            this.state.worlddata.map(function (d, i) {
              return _react2.default.createElement('path', {
                className: 'country',
                stroke: 'gray',
                strokeWidth: '1',
                fill: _this6.state.renderState[i] ? 'forestgreen' : 'honeydew',
                key: 'path-' + i,
                d: (0, _d3Geo.geoPath)().projection(_this6.projection())(d)
              });
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { "textAlign": "center" } },
          _react2.default.createElement(
            'h1',
            null,
            'You have traveled : ',
            countryCount / 206 * 100,
            '% of the World! '
          ),
          _react2.default.createElement(
            'h3',
            null,
            continentCount,
            ' out of total 7 Continents!'
          ),
          _react2.default.createElement(
            'h3',
            null,
            countryCount,
            ' out of total 206 Countries!'
          ),
          _react2.default.createElement(
            'h3',
            null,
            cityCount,
            ' out of total Cities listed!'
          )
        )
      );
    }
  }]);

  return WorldMap;
}(_react2.default.Component);

var Home = function (_React$Component3) {
  _inherits(Home, _React$Component3);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this7 = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this7.state = { value: 'india' };

    _this7.handleChange = _this7.handleChange.bind(_this7);

    return _this7;
  }

  _createClass(Home, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { background: 'url(' + _worldWhale2.default + ') no-repeat center', backgroundSize: "100% 100%" } },
        _react2.default.createElement(
          'label',
          { style: { "display": "block", "textAlign": "center", "fontSize": 24 } },
          'Where all have you been? in INDIA!'
        ),
        _react2.default.createElement(
          'label',
          { style: !window.navigator.userAgent.toLowerCase().includes("mobi") ? { "display": "block", "textAlign": "center", "fontSize": 36 } : { "display": "none" } },
          'Sorry, the mobile Version is still not ready, Please use your laptop or desktop!'
        ),
        _react2.default.createElement(
          'div',
          { style: this.state.value === 'india' ? { "display": "block" } : { "display": "none" } },
          _react2.default.createElement(
            'label',
            { style: { "display": "block", "marginLeft": 20, "textAlign": "left" } },
            'Select the State/City...'
          ),
          _react2.default.createElement(_country4.default, null),
          _react2.default.createElement(IndiaMap, null)
        ),
        _react2.default.createElement(
          'div',
          { style: this.state.value === 'world' ? { "display": "block" } : { "display": "none" } },
          _react2.default.createElement(
            'label',
            { style: { "display": "block", "marginLeft": 20, "textAlign": "left" } },
            'Select the Continent/Country/City you have been...'
          ),
          _react2.default.createElement(_continent2.default, null),
          _react2.default.createElement(WorldMap, null)
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

var App = function App() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(Home, null)
  );
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('.react-container'));

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.1
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(8),n=__webpack_require__(3),p=__webpack_require__(9),q=__webpack_require__(4),r="function"===typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,v=r?Symbol.for("react.fragment"):60107,w=r?Symbol.for("react.strict_mode"):60108,x=r?Symbol.for("react.profiler"):60114,y=r?Symbol.for("react.provider"):60109,z=r?Symbol.for("react.context"):60110,A=r?Symbol.for("react.async_mode"):60111,B=
r?Symbol.for("react.forward_ref"):60112;r&&Symbol.for("react.timeout");var C="function"===typeof Symbol&&Symbol.iterator;function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);n(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}
var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function F(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function G(){}
G.prototype=F.prototype;function H(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}var I=H.prototype=new G;I.constructor=H;k(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:t,type:a,key:g,ref:h,props:d,_owner:J.current}}
function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,e,c){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0}}if(g)return e(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+T(d,h);g+=S(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
h=0;!(d=a.next()).done;)d=d.value,f=b+T(d,h++),g+=S(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function U(a,b){a.func.call(a.context,b,a.count++)}
function V(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,q.thatReturnsArgument):null!=a&&(N(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(O,"$&/")+"/");b=Q(b,g,c,d);null==a||S(a,"",V,b);R(b)}
var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=Q(null,null,b,e);null==a||S(a,"",U,b);R(b)},count:function(a){return null==a?0:S(a,"",q.thatReturnsNull,null)},toArray:function(a){var b=[];W(a,b,null,q.thatReturnsArgument);return b},only:function(a){N(a)?void 0:D("143");return a}},createRef:function(){return{current:null}},Component:F,PureComponent:H,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:z,
_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_currentValue2:a,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null};a.Provider={$$typeof:y,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:B,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:A,unstable_Profiler:x,createElement:M,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==
b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l}return{$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.4.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:J,
assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default?Z.default:Z;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(21);
} else {}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.1
 * react-dom.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(3),ba=__webpack_require__(1),m=__webpack_require__(22),p=__webpack_require__(8),v=__webpack_require__(4),da=__webpack_require__(23),ea=__webpack_require__(24),fa=__webpack_require__(25),ha=__webpack_require__(9);
function A(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);aa(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}ba?void 0:A("227");
function ia(a,b,c,d,e,f,g,h,k){this._hasCaughtError=!1;this._caughtError=null;var n=Array.prototype.slice.call(arguments,3);try{b.apply(c,n)}catch(r){this._caughtError=r,this._hasCaughtError=!0}}
var B={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,invokeGuardedCallback:function(a,b,c,d,e,f,g,h,k){ia.apply(B,arguments)},invokeGuardedCallbackAndCatchFirstError:function(a,b,c,d,e,f,g,h,k){B.invokeGuardedCallback.apply(this,arguments);if(B.hasCaughtError()){var n=B.clearCaughtError();B._hasRethrowError||(B._hasRethrowError=!0,B._rethrowError=n)}},rethrowCaughtError:function(){return ka.apply(B,arguments)},hasCaughtError:function(){return B._hasCaughtError},clearCaughtError:function(){if(B._hasCaughtError){var a=
B._caughtError;B._caughtError=null;B._hasCaughtError=!1;return a}A("198")}};function ka(){if(B._hasRethrowError){var a=B._rethrowError;B._rethrowError=null;B._hasRethrowError=!1;throw a;}}var la=null,ma={};
function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:A("96",a);if(!oa[c]){b.extractEvents?void 0:A("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?A("99",h):void 0;pa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&qa(k[e],g,h);e=!0}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:A("98",d,a)}}}}
function qa(a,b,c){ra[a]?A("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies}var oa=[],pa={},ra={},sa={};function ta(a){la?A("101"):void 0;la=Array.prototype.slice.call(a);na()}function ua(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?A("102",c):void 0,ma[c]=d,b=!0)}b&&na()}
var va={plugins:oa,eventNameDispatchConfigs:pa,registrationNameModules:ra,registrationNameDependencies:sa,possibleRegistrationNames:null,injectEventPluginOrder:ta,injectEventPluginsByName:ua},wa=null,xa=null,ya=null;function za(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=ya(d);B.invokeGuardedCallbackAndCatchFirstError(b,c,void 0,a);a.currentTarget=null}
function Aa(a,b){null==b?A("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function Ba(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Ca=null;
function Da(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)za(a,b,c[e],d[e]);else c&&za(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ea(a){return Da(a,!0)}function Fa(a){return Da(a,!1)}var Ga={injectEventPluginOrder:ta,injectEventPluginsByName:ua};
function Ha(a,b){var c=a.stateNode;if(!c)return null;var d=wa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?A("231",b,typeof c):void 0;
return c}function Ia(a,b){null!==a&&(Ca=Aa(Ca,a));a=Ca;Ca=null;a&&(b?Ba(a,Ea):Ba(a,Fa),Ca?A("95"):void 0,B.rethrowCaughtError())}function Ja(a,b,c,d){for(var e=null,f=0;f<oa.length;f++){var g=oa[f];g&&(g=g.extractEvents(a,b,c,d))&&(e=Aa(e,g))}Ia(e,!1)}var Ka={injection:Ga,getListener:Ha,runEventsInBatch:Ia,runExtractedEventsInBatch:Ja},La=Math.random().toString(36).slice(2),C="__reactInternalInstance$"+La,Ma="__reactEventHandlers$"+La;
function Na(a){if(a[C])return a[C];for(;!a[C];)if(a.parentNode)a=a.parentNode;else return null;a=a[C];return 5===a.tag||6===a.tag?a:null}function Oa(a){if(5===a.tag||6===a.tag)return a.stateNode;A("33")}function Pa(a){return a[Ma]||null}var Qa={precacheFiberNode:function(a,b){b[C]=a},getClosestInstanceFromNode:Na,getInstanceFromNode:function(a){a=a[C];return!a||5!==a.tag&&6!==a.tag?null:a},getNodeFromInstance:Oa,getFiberCurrentPropsFromNode:Pa,updateFiberProps:function(a,b){a[Ma]=b}};
function F(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ra(a,b,c){for(var d=[];a;)d.push(a),a=F(a);for(a=d.length;0<a--;)b(d[a],"captured",c);for(a=0;a<d.length;a++)b(d[a],"bubbled",c)}function Sa(a,b,c){if(b=Ha(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a)}function Ta(a){a&&a.dispatchConfig.phasedRegistrationNames&&Ra(a._targetInst,Sa,a)}
function Ua(a){if(a&&a.dispatchConfig.phasedRegistrationNames){var b=a._targetInst;b=b?F(b):null;Ra(b,Sa,a)}}function Va(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ha(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a))}function Xa(a){a&&a.dispatchConfig.registrationName&&Va(a._targetInst,null,a)}function Ya(a){Ba(a,Ta)}
function Za(a,b,c,d){if(c&&d)a:{var e=c;for(var f=d,g=0,h=e;h;h=F(h))g++;h=0;for(var k=f;k;k=F(k))h++;for(;0<g-h;)e=F(e),g--;for(;0<h-g;)f=F(f),h--;for(;g--;){if(e===f||e===f.alternate)break a;e=F(e);f=F(f)}e=null}else e=null;f=e;for(e=[];c&&c!==f;){g=c.alternate;if(null!==g&&g===f)break;e.push(c);c=F(c)}for(c=[];d&&d!==f;){g=d.alternate;if(null!==g&&g===f)break;c.push(d);d=F(d)}for(d=0;d<e.length;d++)Va(e[d],"bubbled",a);for(a=c.length;0<a--;)Va(c[a],"captured",b)}
var $a={accumulateTwoPhaseDispatches:Ya,accumulateTwoPhaseDispatchesSkipTarget:function(a){Ba(a,Ua)},accumulateEnterLeaveDispatches:Za,accumulateDirectDispatches:function(a){Ba(a,Xa)}};function ab(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;c["ms"+a]="MS"+b;c["O"+a]="o"+b.toLowerCase();return c}
var bb={animationend:ab("Animation","AnimationEnd"),animationiteration:ab("Animation","AnimationIteration"),animationstart:ab("Animation","AnimationStart"),transitionend:ab("Transition","TransitionEnd")},cb={},db={};m.canUseDOM&&(db=document.createElement("div").style,"AnimationEvent"in window||(delete bb.animationend.animation,delete bb.animationiteration.animation,delete bb.animationstart.animation),"TransitionEvent"in window||delete bb.transitionend.transition);
function eb(a){if(cb[a])return cb[a];if(!bb[a])return a;var b=bb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in db)return cb[a]=b[c];return a}var fb=eb("animationend"),gb=eb("animationiteration"),hb=eb("animationstart"),ib=eb("transitionend"),jb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kb=null;
function lb(){!kb&&m.canUseDOM&&(kb="textContent"in document.documentElement?"textContent":"innerText");return kb}var G={_root:null,_startText:null,_fallbackText:null};function mb(){if(G._fallbackText)return G._fallbackText;var a,b=G._startText,c=b.length,d,e=nb(),f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);G._fallbackText=e.slice(a,1<d?1-d:void 0);return G._fallbackText}function nb(){return"value"in G._root?G._root.value:G._root[lb()]}
var ob="dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),pb={type:null,target:null,currentTarget:v.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
function H(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?v.thatReturnsTrue:v.thatReturnsFalse;this.isPropagationStopped=v.thatReturnsFalse;return this}
p(H.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=v.thatReturnsTrue)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=v.thatReturnsTrue)},persist:function(){this.isPersistent=v.thatReturnsTrue},isPersistent:v.thatReturnsFalse,
destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;for(a=0;a<ob.length;a++)this[ob[a]]=null}});H.Interface=pb;H.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;p(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=p({},d.Interface,a);c.extend=d.extend;qb(c);return c};qb(H);
function rb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function sb(a){a instanceof this?void 0:A("223");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function qb(a){a.eventPool=[];a.getPooled=rb;a.release=sb}var tb=H.extend({data:null}),ub=H.extend({data:null}),vb=[9,13,27,32],wb=m.canUseDOM&&"CompositionEvent"in window,xb=null;m.canUseDOM&&"documentMode"in document&&(xb=document.documentMode);
var yb=m.canUseDOM&&"TextEvent"in window&&!xb,zb=m.canUseDOM&&(!wb||xb&&8<xb&&11>=xb),Ab=String.fromCharCode(32),Bb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Cb=!1;
function Db(a,b){switch(a){case "keyup":return-1!==vb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Eb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Fb=!1;function Gb(a,b){switch(a){case "compositionend":return Eb(b);case "keypress":if(32!==b.which)return null;Cb=!0;return Ab;case "textInput":return a=b.data,a===Ab&&Cb?null:a;default:return null}}
function Hb(a,b){if(Fb)return"compositionend"===a||!wb&&Db(a,b)?(a=mb(),G._root=null,G._startText=null,G._fallbackText=null,Fb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return zb?null:b.data;default:return null}}
var Ib={eventTypes:Bb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(wb)b:{switch(a){case "compositionstart":e=Bb.compositionStart;break b;case "compositionend":e=Bb.compositionEnd;break b;case "compositionupdate":e=Bb.compositionUpdate;break b}e=void 0}else Fb?Db(a,c)&&(e=Bb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=Bb.compositionStart);e?(zb&&(Fb||e!==Bb.compositionStart?e===Bb.compositionEnd&&Fb&&(f=mb()):(G._root=d,G._startText=nb(),Fb=!0)),e=tb.getPooled(e,b,c,d),f?e.data=
f:(f=Eb(c),null!==f&&(e.data=f)),Ya(e),f=e):f=null;(a=yb?Gb(a,c):Hb(a,c))?(b=ub.getPooled(Bb.beforeInput,b,c,d),b.data=a,Ya(b)):b=null;return null===f?b:null===b?f:[f,b]}},Jb=null,Kb={injectFiberControlledHostComponent:function(a){Jb=a}},Lb=null,Mb=null;function Nb(a){if(a=xa(a)){Jb&&"function"===typeof Jb.restoreControlledState?void 0:A("194");var b=wa(a.stateNode);Jb.restoreControlledState(a.stateNode,a.type,b)}}function Ob(a){Lb?Mb?Mb.push(a):Mb=[a]:Lb=a}
function Pb(){return null!==Lb||null!==Mb}function Qb(){if(Lb){var a=Lb,b=Mb;Mb=Lb=null;Nb(a);if(b)for(a=0;a<b.length;a++)Nb(b[a])}}var Rb={injection:Kb,enqueueStateRestore:Ob,needsStateRestore:Pb,restoreStateIfNeeded:Qb};function Sb(a,b){return a(b)}function Tb(a,b,c){return a(b,c)}function Ub(){}var Vb=!1;function Wb(a,b){if(Vb)return a(b);Vb=!0;try{return Sb(a,b)}finally{Vb=!1,Pb()&&(Ub(),Qb())}}
var Xb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Xb[a.type]:"textarea"===b?!0:!1}function Zb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}
function $b(a,b){if(!m.canUseDOM||b&&!("addEventListener"in document))return!1;a="on"+a;b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function ac(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function bc(a){var b=ac(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function cc(a){a._valueTracker||(a._valueTracker=bc(a))}function dc(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=ac(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var ec=ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fc="function"===typeof Symbol&&Symbol.for,gc=fc?Symbol.for("react.element"):60103,hc=fc?Symbol.for("react.portal"):60106,ic=fc?Symbol.for("react.fragment"):60107,jc=fc?Symbol.for("react.strict_mode"):60108,kc=fc?Symbol.for("react.profiler"):60114,lc=fc?Symbol.for("react.provider"):60109,mc=fc?Symbol.for("react.context"):60110,pc=fc?Symbol.for("react.async_mode"):60111,qc=fc?Symbol.for("react.forward_ref"):60112,rc=fc?Symbol.for("react.timeout"):
60113,sc="function"===typeof Symbol&&Symbol.iterator;function tc(a){if(null===a||"undefined"===typeof a)return null;a=sc&&a[sc]||a["@@iterator"];return"function"===typeof a?a:null}
function uc(a){var b=a.type;if("function"===typeof b)return b.displayName||b.name;if("string"===typeof b)return b;switch(b){case pc:return"AsyncMode";case mc:return"Context.Consumer";case ic:return"ReactFragment";case hc:return"ReactPortal";case kc:return"Profiler("+a.pendingProps.id+")";case lc:return"Context.Provider";case jc:return"StrictMode";case rc:return"Timeout"}if("object"===typeof b&&null!==b)switch(b.$$typeof){case qc:return a=b.render.displayName||b.render.name||"",""!==a?"ForwardRef("+
a+")":"ForwardRef"}return null}function vc(a){var b="";do{a:switch(a.tag){case 0:case 1:case 2:case 5:var c=a._debugOwner,d=a._debugSource;var e=uc(a);var f=null;c&&(f=uc(c));c=d;e="\n    in "+(e||"Unknown")+(c?" (at "+c.fileName.replace(/^.*[\\\/]/,"")+":"+c.lineNumber+")":f?" (created by "+f+")":"");break a;default:e=""}b+=e;a=a.return}while(a);return b}
var wc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xc={},zc={};function Ac(a){if(zc.hasOwnProperty(a))return!0;if(xc.hasOwnProperty(a))return!1;if(wc.test(a))return zc[a]=!0;xc[a]=!0;return!1}
function Bc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}function Cc(a,b,c,d){if(null===b||"undefined"===typeof b||Bc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}
function I(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){J[a]=new I(a,0,!1,a,null)});
[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];J[b]=new I(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){J[a]=new I(a,2,!1,a.toLowerCase(),null)});["autoReverse","externalResourcesRequired","preserveAlpha"].forEach(function(a){J[a]=new I(a,2,!1,a,null)});
"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){J[a]=new I(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){J[a]=new I(a,3,!0,a.toLowerCase(),null)});["capture","download"].forEach(function(a){J[a]=new I(a,4,!1,a.toLowerCase(),null)});
["cols","rows","size","span"].forEach(function(a){J[a]=new I(a,6,!1,a.toLowerCase(),null)});["rowSpan","start"].forEach(function(a){J[a]=new I(a,5,!1,a.toLowerCase(),null)});var Dc=/[\-:]([a-z])/g;function Ec(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Dc,
Ec);J[b]=new I(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Dc,Ec);J[b]=new I(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Dc,Ec);J[b]=new I(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});J.tabIndex=new I("tabIndex",1,!1,"tabindex",null);
function Fc(a,b,c,d){var e=J.hasOwnProperty(b)?J[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Cc(b,c,e,d)&&(c=null),d||null===e?Ac(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function Gc(a,b){var c=b.checked;return p({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Hc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Ic(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Jc(a,b){b=b.checked;null!=b&&Fc(a,"checked",b,!1)}
function Kc(a,b){Jc(a,b);var c=Ic(b.value);if(null!=c)if("number"===b.type){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);b.hasOwnProperty("value")?Lc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Lc(a,b.type,Ic(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Mc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){b=""+a._wrapperState.initialValue;var d=a.value;c||b===d||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!a.defaultChecked;""!==c&&(a.name=c)}function Lc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}
function Ic(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}var Nc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Oc(a,b,c){a=H.getPooled(Nc.change,a,b,c);a.type="change";Ob(c);Ya(a);return a}var Pc=null,Qc=null;function Rc(a){Ia(a,!1)}function Sc(a){var b=Oa(a);if(dc(b))return a}
function Tc(a,b){if("change"===a)return b}var Uc=!1;m.canUseDOM&&(Uc=$b("input")&&(!document.documentMode||9<document.documentMode));function Vc(){Pc&&(Pc.detachEvent("onpropertychange",Wc),Qc=Pc=null)}function Wc(a){"value"===a.propertyName&&Sc(Qc)&&(a=Oc(Qc,a,Zb(a)),Wb(Rc,a))}function Xc(a,b,c){"focus"===a?(Vc(),Pc=b,Qc=c,Pc.attachEvent("onpropertychange",Wc)):"blur"===a&&Vc()}function Yc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Sc(Qc)}
function Zc(a,b){if("click"===a)return Sc(b)}function $c(a,b){if("input"===a||"change"===a)return Sc(b)}
var ad={eventTypes:Nc,_isInputEventSupported:Uc,extractEvents:function(a,b,c,d){var e=b?Oa(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Tc:Yb(e)?Uc?f=$c:(f=Yc,g=Xc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Zc);if(f&&(f=f(a,b)))return Oc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Lc(e,"number",e.value)}},bd=H.extend({view:null,detail:null}),cd={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=cd[a])?!!b[a]:!1}function ed(){return dd}
var fd=bd.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:ed,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)}}),gd=fd.extend({pointerId:null,width:null,height:null,pressure:null,tiltX:null,tiltY:null,pointerType:null,isPrimary:null}),hd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},
mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},id={eventTypes:hd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||
e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Na(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,n=void 0;if("mouseout"===a||"mouseover"===a)g=fd,h=hd.mouseLeave,k=hd.mouseEnter,n="mouse";else if("pointerout"===a||"pointerover"===a)g=gd,h=hd.pointerLeave,k=hd.pointerEnter,n="pointer";a=null==f?e:Oa(f);e=null==b?e:Oa(b);h=g.getPooled(h,f,c,d);h.type=n+"leave";h.target=a;h.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=n+"enter";c.target=e;c.relatedTarget=a;Za(h,
c,f,b);return[h,c]}};function jd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function kd(a){2!==jd(a)?A("188"):void 0}
function ld(a){var b=a.alternate;if(!b)return b=jd(a),3===b?A("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return kd(e),a;if(g===d)return kd(e),b;g=g.sibling}A("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:A("189")}}c.alternate!==d?A("190"):void 0}3!==c.tag?A("188"):void 0;return c.stateNode.current===c?a:b}function md(a){a=ld(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function nd(a){a=ld(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child&&4!==b.tag)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}var od=H.extend({animationName:null,elapsedTime:null,pseudoElement:null}),pd=H.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),qd=bd.extend({relatedTarget:null});
function rd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ud=bd.extend({key:function(a){if(a.key){var b=sd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=rd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?td[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:ed,charCode:function(a){return"keypress"===
a.type?rd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?rd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),vd=fd.extend({dataTransfer:null}),wd=bd.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:ed}),xd=H.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),yd=fd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),zd=[["abort","abort"],[fb,"animationEnd"],[gb,"animationIteration"],[hb,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[ib,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Ad={},Bd={};function Cd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};Ad[a]=b;Bd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],
["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Cd(a,!0)});zd.forEach(function(a){Cd(a,!1)});
var Dd={eventTypes:Ad,isInteractiveTopLevelEventType:function(a){a=Bd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Bd[a];if(!e)return null;switch(a){case "keypress":if(0===rd(c))return null;case "keydown":case "keyup":a=ud;break;case "blur":case "focus":a=qd;break;case "click":if(2===c.button)return null;case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=fd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
vd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=wd;break;case fb:case gb:case hb:a=od;break;case ib:a=xd;break;case "scroll":a=bd;break;case "wheel":a=yd;break;case "copy":case "cut":case "paste":a=pd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=gd;break;default:a=H}b=a.getPooled(e,b,c,d);Ya(b);return b}},Ed=Dd.isInteractiveTopLevelEventType,
Fd=[];function Gd(a){var b=a.targetInst;do{if(!b){a.ancestors.push(b);break}var c;for(c=b;c.return;)c=c.return;c=3!==c.tag?null:c.stateNode.containerInfo;if(!c)break;a.ancestors.push(b);b=Na(c)}while(b);for(c=0;c<a.ancestors.length;c++)b=a.ancestors[c],Ja(a.topLevelType,b,a.nativeEvent,Zb(a.nativeEvent))}var Hd=!0;function Id(a){Hd=!!a}function K(a,b){if(!b)return null;var c=(Ed(a)?Kd:Ld).bind(null,a);b.addEventListener(a,c,!1)}
function Md(a,b){if(!b)return null;var c=(Ed(a)?Kd:Ld).bind(null,a);b.addEventListener(a,c,!0)}function Kd(a,b){Tb(Ld,a,b)}function Ld(a,b){if(Hd){var c=Zb(b);c=Na(c);null===c||"number"!==typeof c.tag||2===jd(c)||(c=null);if(Fd.length){var d=Fd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Wb(Gd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Fd.length&&Fd.push(a)}}}
var Nd={get _enabled(){return Hd},setEnabled:Id,isEnabled:function(){return Hd},trapBubbledEvent:K,trapCapturedEvent:Md,dispatchEvent:Ld},Od={},Pd=0,Qd="_reactListenersID"+(""+Math.random()).slice(2);function Rd(a){Object.prototype.hasOwnProperty.call(a,Qd)||(a[Qd]=Pd++,Od[a[Qd]]={});return Od[a[Qd]]}function Sd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Td(a,b){var c=Sd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Sd(c)}}function Ud(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Vd=m.canUseDOM&&"documentMode"in document&&11>=document.documentMode,Wd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xd=null,Yd=null,Zd=null,$d=!1;
function ae(a,b){if($d||null==Xd||Xd!==da())return null;var c=Xd;"selectionStart"in c&&Ud(c)?c={start:c.selectionStart,end:c.selectionEnd}:window.getSelection?(c=window.getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}):c=void 0;return Zd&&ea(Zd,c)?null:(Zd=c,a=H.getPooled(Wd.select,Yd,a,b),a.type="select",a.target=Xd,Ya(a),a)}
var be={eventTypes:Wd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Rd(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Oa(b):window;switch(a){case "focus":if(Yb(e)||"true"===e.contentEditable)Xd=e,Yd=b,Zd=null;break;case "blur":Zd=Yd=Xd=null;break;case "mousedown":$d=!0;break;case "contextmenu":case "mouseup":return $d=!1,ae(c,d);case "selectionchange":if(Vd)break;
case "keydown":case "keyup":return ae(c,d)}return null}};Ga.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));wa=Qa.getFiberCurrentPropsFromNode;xa=Qa.getInstanceFromNode;ya=Qa.getNodeFromInstance;Ga.injectEventPluginsByName({SimpleEventPlugin:Dd,EnterLeaveEventPlugin:id,ChangeEventPlugin:ad,SelectEventPlugin:be,BeforeInputEventPlugin:Ib});
var ce="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,de=Date,ee=setTimeout,fe=clearTimeout,ge=void 0;if("object"===typeof performance&&"function"===typeof performance.now){var he=performance;ge=function(){return he.now()}}else ge=function(){return de.now()};var ie=void 0,je=void 0;
if(m.canUseDOM){var ke="function"===typeof ce?ce:function(){A("276")},L=null,le=null,me=-1,ne=!1,oe=!1,pe=0,qe=33,re=33,se={didTimeout:!1,timeRemaining:function(){var a=pe-ge();return 0<a?a:0}},ue=function(a,b){var c=a.scheduledCallback,d=!1;try{c(b),d=!0}finally{je(a),d||(ne=!0,window.postMessage(te,"*"))}},te="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){if(a.source===window&&a.data===te&&(ne=!1,null!==L)){if(null!==L){var b=ge();if(!(-1===
me||me>b)){a=-1;for(var c=[],d=L;null!==d;){var e=d.timeoutTime;-1!==e&&e<=b?c.push(d):-1!==e&&(-1===a||e<a)&&(a=e);d=d.next}if(0<c.length)for(se.didTimeout=!0,b=0,d=c.length;b<d;b++)ue(c[b],se);me=a}}for(a=ge();0<pe-a&&null!==L;)a=L,se.didTimeout=!1,ue(a,se),a=ge();null===L||oe||(oe=!0,ke(ve))}},!1);var ve=function(a){oe=!1;var b=a-pe+re;b<re&&qe<re?(8>b&&(b=8),re=b<qe?qe:b):qe=b;pe=a+re;ne||(ne=!0,window.postMessage(te,"*"))};ie=function(a,b){var c=-1;null!=b&&"number"===typeof b.timeout&&(c=ge()+
b.timeout);if(-1===me||-1!==c&&c<me)me=c;a={scheduledCallback:a,timeoutTime:c,prev:null,next:null};null===L?L=a:(b=a.prev=le,null!==b&&(b.next=a));le=a;oe||(oe=!0,ke(ve));return a};je=function(a){if(null!==a.prev||L===a){var b=a.next,c=a.prev;a.next=null;a.prev=null;null!==b?null!==c?(c.next=b,b.prev=c):(b.prev=null,L=b):null!==c?(c.next=null,le=c):le=L=null}}}else{var we=new Map;ie=function(a){var b={scheduledCallback:a,timeoutTime:0,next:null,prev:null},c=ee(function(){a({timeRemaining:function(){return Infinity},
didTimeout:!1})});we.set(a,c);return b};je=function(a){var b=we.get(a.scheduledCallback);we.delete(a);fe(b)}}function xe(a){var b="";ba.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}function ye(a,b){a=p({children:void 0},b);if(b=xe(b.children))a.children=b;return a}
function ze(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+c;b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ae(a,b){var c=b.value;a._wrapperState={initialValue:null!=c?c:b.defaultValue,wasMultiple:!!b.multiple}}function Be(a,b){null!=b.dangerouslySetInnerHTML?A("91"):void 0;return p({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Ce(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?A("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:A("93"),b=b[0]),c=""+b),null==c&&(c=""));a._wrapperState={initialValue:""+c}}
function De(a,b){var c=b.value;null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=b.defaultValue)}function Ee(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var Fe={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Ge(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Ge(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Ie=void 0,Je=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Fe.svg||"innerHTML"in a)a.innerHTML=b;else{Ie=Ie||document.createElement("div");Ie.innerHTML="<svg>"+b+"</svg>";for(b=Ie.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Ke(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var Le={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,
stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Me=["Webkit","ms","Moz","O"];Object.keys(Le).forEach(function(a){Me.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Le[b]=Le[a]})});
function Ne(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||Le.hasOwnProperty(e)&&Le[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Oe=p({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function Pe(a,b,c){b&&(Oe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?A("137",a,c()):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?A("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:A("61")),null!=b.style&&"object"!==typeof b.style?A("62",c()):void 0)}
function Qe(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var Re=v.thatReturns("");
function Se(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Rd(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Md("scroll",a);break;case "focus":case "blur":Md("focus",a);Md("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":$b(e,!0)&&Md(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===jb.indexOf(e)&&K(e,a)}c[e]=!0}}}
function Te(a,b,c,d){c=9===c.nodeType?c:c.ownerDocument;d===Fe.html&&(d=Ge(a));d===Fe.html?"script"===a?(a=c.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):a="string"===typeof b.is?c.createElement(a,{is:b.is}):c.createElement(a):a=c.createElementNS(d,a);return a}function Ue(a,b){return(9===b.nodeType?b:b.ownerDocument).createTextNode(a)}
function Ve(a,b,c,d){var e=Qe(b,c);switch(b){case "iframe":case "object":K("load",a);var f=c;break;case "video":case "audio":for(f=0;f<jb.length;f++)K(jb[f],a);f=c;break;case "source":K("error",a);f=c;break;case "img":case "image":case "link":K("error",a);K("load",a);f=c;break;case "form":K("reset",a);K("submit",a);f=c;break;case "details":K("toggle",a);f=c;break;case "input":Hc(a,c);f=Gc(a,c);K("invalid",a);Se(d,"onChange");break;case "option":f=ye(a,c);break;case "select":Ae(a,c);f=p({},c,{value:void 0});
K("invalid",a);Se(d,"onChange");break;case "textarea":Ce(a,c);f=Be(a,c);K("invalid",a);Se(d,"onChange");break;default:f=c}Pe(b,f,Re);var g=f,h;for(h in g)if(g.hasOwnProperty(h)){var k=g[h];"style"===h?Ne(a,k,Re):"dangerouslySetInnerHTML"===h?(k=k?k.__html:void 0,null!=k&&Je(a,k)):"children"===h?"string"===typeof k?("textarea"!==b||""!==k)&&Ke(a,k):"number"===typeof k&&Ke(a,""+k):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ra.hasOwnProperty(h)?null!=k&&Se(d,
h):null!=k&&Fc(a,h,k,e))}switch(b){case "input":cc(a);Mc(a,c,!1);break;case "textarea":cc(a);Ee(a,c);break;case "option":null!=c.value&&a.setAttribute("value",c.value);break;case "select":a.multiple=!!c.multiple;b=c.value;null!=b?ze(a,!!c.multiple,b,!1):null!=c.defaultValue&&ze(a,!!c.multiple,c.defaultValue,!0);break;default:"function"===typeof f.onClick&&(a.onclick=v)}}
function We(a,b,c,d,e){var f=null;switch(b){case "input":c=Gc(a,c);d=Gc(a,d);f=[];break;case "option":c=ye(a,c);d=ye(a,d);f=[];break;case "select":c=p({},c,{value:void 0});d=p({},d,{value:void 0});f=[];break;case "textarea":c=Be(a,c);d=Be(a,d);f=[];break;default:"function"!==typeof c.onClick&&"function"===typeof d.onClick&&(a.onclick=v)}Pe(b,d,Re);b=a=void 0;var g=null;for(a in c)if(!d.hasOwnProperty(a)&&c.hasOwnProperty(a)&&null!=c[a])if("style"===a){var h=c[a];for(b in h)h.hasOwnProperty(b)&&(g||
(g={}),g[b]="")}else"dangerouslySetInnerHTML"!==a&&"children"!==a&&"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(ra.hasOwnProperty(a)?f||(f=[]):(f=f||[]).push(a,null));for(a in d){var k=d[a];h=null!=c?c[a]:void 0;if(d.hasOwnProperty(a)&&k!==h&&(null!=k||null!=h))if("style"===a)if(h){for(b in h)!h.hasOwnProperty(b)||k&&k.hasOwnProperty(b)||(g||(g={}),g[b]="");for(b in k)k.hasOwnProperty(b)&&h[b]!==k[b]&&(g||(g={}),g[b]=k[b])}else g||(f||(f=[]),f.push(a,g)),
g=k;else"dangerouslySetInnerHTML"===a?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(a,""+k)):"children"===a?h===k||"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(a,""+k):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&(ra.hasOwnProperty(a)?(null!=k&&Se(e,a),f||h===k||(f=[])):(f=f||[]).push(a,k))}g&&(f=f||[]).push("style",g);return f}
function Xe(a,b,c,d,e){"input"===c&&"radio"===e.type&&null!=e.name&&Jc(a,e);Qe(c,d);d=Qe(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?Ne(a,h,Re):"dangerouslySetInnerHTML"===g?Je(a,h):"children"===g?Ke(a,h):Fc(a,g,h,d)}switch(c){case "input":Kc(a,e);break;case "textarea":De(a,e);break;case "select":a._wrapperState.initialValue=void 0,b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?ze(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?
ze(a,!!e.multiple,e.defaultValue,!0):ze(a,!!e.multiple,e.multiple?[]:"",!1))}}
function Ye(a,b,c,d,e){switch(b){case "iframe":case "object":K("load",a);break;case "video":case "audio":for(d=0;d<jb.length;d++)K(jb[d],a);break;case "source":K("error",a);break;case "img":case "image":case "link":K("error",a);K("load",a);break;case "form":K("reset",a);K("submit",a);break;case "details":K("toggle",a);break;case "input":Hc(a,c);K("invalid",a);Se(e,"onChange");break;case "select":Ae(a,c);K("invalid",a);Se(e,"onChange");break;case "textarea":Ce(a,c),K("invalid",a),Se(e,"onChange")}Pe(b,
c,Re);d=null;for(var f in c)if(c.hasOwnProperty(f)){var g=c[f];"children"===f?"string"===typeof g?a.textContent!==g&&(d=["children",g]):"number"===typeof g&&a.textContent!==""+g&&(d=["children",""+g]):ra.hasOwnProperty(f)&&null!=g&&Se(e,f)}switch(b){case "input":cc(a);Mc(a,c,!0);break;case "textarea":cc(a);Ee(a,c);break;case "select":case "option":break;default:"function"===typeof c.onClick&&(a.onclick=v)}return d}function Ze(a,b){return a.nodeValue!==b}
var $e={createElement:Te,createTextNode:Ue,setInitialProperties:Ve,diffProperties:We,updateProperties:Xe,diffHydratedProperties:Ye,diffHydratedText:Ze,warnForUnmatchedText:function(){},warnForDeletedHydratableElement:function(){},warnForDeletedHydratableText:function(){},warnForInsertedHydratedElement:function(){},warnForInsertedHydratedText:function(){},restoreControlledState:function(a,b,c){switch(b){case "input":Kc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;
c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Pa(d);e?void 0:A("90");dc(d);Kc(d,e)}}}break;case "textarea":De(a,c);break;case "select":b=c.value,null!=b&&ze(a,!!c.multiple,b,!1)}}},af=null,bf=null;function cf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function df(a,b){return"textarea"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&"string"===typeof b.dangerouslySetInnerHTML.__html}var ef=ge,ff=ie,gf=je;function hf(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function jf(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var kf=[],lf=-1;function mf(a){return{current:a}}
function M(a){0>lf||(a.current=kf[lf],kf[lf]=null,lf--)}function N(a,b){lf++;kf[lf]=a.current;a.current=b}var nf=mf(ha),O=mf(!1),of=ha;function pf(a){return qf(a)?of:nf.current}
function rf(a,b){var c=a.type.contextTypes;if(!c)return ha;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function qf(a){return 2===a.tag&&null!=a.type.childContextTypes}function sf(a){qf(a)&&(M(O,a),M(nf,a))}function tf(a){M(O,a);M(nf,a)}
function uf(a,b,c){nf.current!==ha?A("168"):void 0;N(nf,b,a);N(O,c,a)}function vf(a,b){var c=a.stateNode,d=a.type.childContextTypes;if("function"!==typeof c.getChildContext)return b;c=c.getChildContext();for(var e in c)e in d?void 0:A("108",uc(a)||"Unknown",e);return p({},b,c)}function wf(a){if(!qf(a))return!1;var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||ha;of=nf.current;N(nf,b,a);N(O,O.current,a);return!0}
function xf(a,b){var c=a.stateNode;c?void 0:A("169");if(b){var d=vf(a,of);c.__reactInternalMemoizedMergedChildContext=d;M(O,a);M(nf,a);N(nf,d,a)}else M(O,a);N(O,b,a)}
function yf(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=null;this.index=0;this.ref=null;this.pendingProps=b;this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.expirationTime=0;this.alternate=null}
function zf(a,b,c){var d=a.alternate;null===d?(d=new yf(a.tag,b,a.key,a.mode),d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=b,d.effectTag=0,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null);d.expirationTime=c;d.child=a.child;d.memoizedProps=a.memoizedProps;d.memoizedState=a.memoizedState;d.updateQueue=a.updateQueue;d.sibling=a.sibling;d.index=a.index;d.ref=a.ref;return d}
function Af(a,b,c){var d=a.type,e=a.key;a=a.props;if("function"===typeof d)var f=d.prototype&&d.prototype.isReactComponent?2:0;else if("string"===typeof d)f=5;else switch(d){case ic:return Bf(a.children,b,c,e);case pc:f=11;b|=3;break;case jc:f=11;b|=2;break;case kc:return d=new yf(15,a,e,b|4),d.type=kc,d.expirationTime=c,d;case rc:f=16;b|=2;break;default:a:{switch("object"===typeof d&&null!==d?d.$$typeof:null){case lc:f=13;break a;case mc:f=12;break a;case qc:f=14;break a;default:A("130",null==d?
d:typeof d,"")}f=void 0}}b=new yf(f,a,e,b);b.type=d;b.expirationTime=c;return b}function Bf(a,b,c,d){a=new yf(10,a,d,b);a.expirationTime=c;return a}function Cf(a,b,c){a=new yf(6,a,null,b);a.expirationTime=c;return a}function Df(a,b,c){b=new yf(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function Ef(a,b,c){b=new yf(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,pendingCommitExpirationTime:0,finishedWork:null,context:null,pendingContext:null,hydrate:c,remainingExpirationTime:0,firstBatch:null,nextScheduledRoot:null};return b.stateNode=a}var Ff=null,Gf=null;function Hf(a){return function(b){try{return a(b)}catch(c){}}}
function If(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Ff=Hf(function(a){return b.onCommitFiberRoot(c,a)});Gf=Hf(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}function Jf(a){"function"===typeof Ff&&Ff(a)}function Kf(a){"function"===typeof Gf&&Gf(a)}var Lf=!1;
function Mf(a){return{expirationTime:0,baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Nf(a){return{expirationTime:a.expirationTime,baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Of(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Pf(a,b,c){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b);if(0===a.expirationTime||a.expirationTime>c)a.expirationTime=c}
function Qf(a,b,c){var d=a.alternate;if(null===d){var e=a.updateQueue;var f=null;null===e&&(e=a.updateQueue=Mf(a.memoizedState))}else e=a.updateQueue,f=d.updateQueue,null===e?null===f?(e=a.updateQueue=Mf(a.memoizedState),f=d.updateQueue=Mf(d.memoizedState)):e=a.updateQueue=Nf(f):null===f&&(f=d.updateQueue=Nf(e));null===f||e===f?Pf(e,b,c):null===e.lastUpdate||null===f.lastUpdate?(Pf(e,b,c),Pf(f,b,c)):(Pf(e,b,c),f.lastUpdate=b)}
function Rf(a,b,c){var d=a.updateQueue;d=null===d?a.updateQueue=Mf(a.memoizedState):Sf(a,d);null===d.lastCapturedUpdate?d.firstCapturedUpdate=d.lastCapturedUpdate=b:(d.lastCapturedUpdate.next=b,d.lastCapturedUpdate=b);if(0===d.expirationTime||d.expirationTime>c)d.expirationTime=c}function Sf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Nf(b));return b}
function Tf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-1025|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return p({},d,e);case 2:Lf=!0}return d}
function Uf(a,b,c,d,e){Lf=!1;if(!(0===b.expirationTime||b.expirationTime>e)){b=Sf(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,n=f;null!==k;){var r=k.expirationTime;if(r>e){if(null===g&&(g=k,f=n),0===h||h>r)h=r}else n=Tf(a,b,k,n,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k));k=k.next}r=null;for(k=b.firstCapturedUpdate;null!==k;){var w=k.expirationTime;if(w>e){if(null===r&&(r=k,null===
g&&(f=n)),0===h||h>w)h=w}else n=Tf(a,b,k,n,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k));k=k.next}null===g&&(b.lastUpdate=null);null===r?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===r&&(f=n);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=r;b.expirationTime=h;a.memoizedState=n}}
function Vf(a,b){"function"!==typeof a?A("191",a):void 0;a.call(b)}
function Wf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);a=b.firstEffect;for(b.firstEffect=b.lastEffect=null;null!==a;){var d=a.callback;null!==d&&(a.callback=null,Vf(d,c));a=a.nextEffect}a=b.firstCapturedEffect;for(b.firstCapturedEffect=b.lastCapturedEffect=null;null!==a;)b=a.callback,null!==b&&(a.callback=null,Vf(b,c)),a=a.nextEffect}
function Xf(a,b){return{value:a,source:b,stack:vc(b)}}var Yf=mf(null),Zf=mf(null),$f=mf(0);function ag(a){var b=a.type._context;N($f,b._changedBits,a);N(Zf,b._currentValue,a);N(Yf,a,a);b._currentValue=a.pendingProps.value;b._changedBits=a.stateNode}function bg(a){var b=$f.current,c=Zf.current;M(Yf,a);M(Zf,a);M($f,a);a=a.type._context;a._currentValue=c;a._changedBits=b}var cg={},dg=mf(cg),eg=mf(cg),fg=mf(cg);function gg(a){a===cg?A("174"):void 0;return a}
function ig(a,b){N(fg,b,a);N(eg,a,a);N(dg,cg,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:He(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=He(b,c)}M(dg,a);N(dg,b,a)}function jg(a){M(dg,a);M(eg,a);M(fg,a)}function kg(a){eg.current===a&&(M(dg,a),M(eg,a))}function lg(a,b,c){var d=a.memoizedState;b=b(c,d);d=null===b||void 0===b?d:p({},d,b);a.memoizedState=d;a=a.updateQueue;null!==a&&0===a.expirationTime&&(a.baseState=d)}
var pg={isMounted:function(a){return(a=a._reactInternalFiber)?2===jd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=mg();d=ng(d,a);var e=Of(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Qf(a,e,d);og(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=mg();d=ng(d,a);var e=Of(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Qf(a,e,d);og(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=mg();c=ng(c,a);var d=Of(c);d.tag=2;void 0!==
b&&null!==b&&(d.callback=b);Qf(a,d,c);og(a,c)}};function qg(a,b,c,d,e,f){var g=a.stateNode;a=a.type;return"function"===typeof g.shouldComponentUpdate?g.shouldComponentUpdate(c,e,f):a.prototype&&a.prototype.isPureReactComponent?!ea(b,c)||!ea(d,e):!0}
function rg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&pg.enqueueReplaceState(b,b.state,null)}
function sg(a,b){var c=a.type,d=a.stateNode,e=a.pendingProps,f=pf(a);d.props=e;d.state=a.memoizedState;d.refs=ha;d.context=rf(a,f);f=a.updateQueue;null!==f&&(Uf(a,f,e,d,b),d.state=a.memoizedState);f=a.type.getDerivedStateFromProps;"function"===typeof f&&(lg(a,f,e),d.state=a.memoizedState);"function"===typeof c.getDerivedStateFromProps||"function"===typeof d.getSnapshotBeforeUpdate||"function"!==typeof d.UNSAFE_componentWillMount&&"function"!==typeof d.componentWillMount||(c=d.state,"function"===typeof d.componentWillMount&&
d.componentWillMount(),"function"===typeof d.UNSAFE_componentWillMount&&d.UNSAFE_componentWillMount(),c!==d.state&&pg.enqueueReplaceState(d,d.state,null),f=a.updateQueue,null!==f&&(Uf(a,f,e,d,b),d.state=a.memoizedState));"function"===typeof d.componentDidMount&&(a.effectTag|=4)}var tg=Array.isArray;
function ug(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(2!==c.tag?A("110"):void 0,d=c.stateNode);d?void 0:A("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs===ha?d.refs={}:d.refs;null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?A("148"):void 0;c._owner?void 0:A("254",a)}return a}
function vg(a,b){"textarea"!==a.type&&A("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function wg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=zf(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Cf(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.type===c.type)return d=e(b,c.props,d),d.ref=ug(a,b,c),d.return=a,d;d=Af(c,a.mode,d);d.ref=ug(a,b,c);d.return=a;return d}function n(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Df(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function r(a,b,c,d,f){if(null===b||10!==b.tag)return b=Bf(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function w(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Cf(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case gc:return c=Af(b,a.mode,c),c.ref=ug(a,null,b),c.return=a,c;case hc:return b=Df(b,a.mode,c),b.return=a,b}if(tg(b)||tc(b))return b=Bf(b,a.mode,c,null),b.return=
a,b;vg(a,b)}return null}function P(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case gc:return c.key===e?c.type===ic?r(a,b,c.props.children,d,e):k(a,b,c,d):null;case hc:return c.key===e?n(a,b,c,d):null}if(tg(c)||tc(c))return null!==e?null:r(a,b,c,d,null);vg(a,c)}return null}function nc(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);
if("object"===typeof d&&null!==d){switch(d.$$typeof){case gc:return a=a.get(null===d.key?c:d.key)||null,d.type===ic?r(b,a,d.props.children,e,d.key):k(b,a,d,e);case hc:return a=a.get(null===d.key?c:d.key)||null,n(b,a,d,e)}if(tg(d)||tc(d))return a=a.get(c)||null,r(b,a,d,e,null);vg(b,d)}return null}function Jd(e,g,h,k){for(var u=null,x=null,t=g,q=g=0,n=null;null!==t&&q<h.length;q++){t.index>q?(n=t,t=null):n=t.sibling;var l=P(e,t,h[q],k);if(null===l){null===t&&(t=n);break}a&&t&&null===l.alternate&&b(e,
t);g=f(l,g,q);null===x?u=l:x.sibling=l;x=l;t=n}if(q===h.length)return c(e,t),u;if(null===t){for(;q<h.length;q++)if(t=w(e,h[q],k))g=f(t,g,q),null===x?u=t:x.sibling=t,x=t;return u}for(t=d(e,t);q<h.length;q++)if(n=nc(t,e,q,h[q],k))a&&null!==n.alternate&&t.delete(null===n.key?q:n.key),g=f(n,g,q),null===x?u=n:x.sibling=n,x=n;a&&t.forEach(function(a){return b(e,a)});return u}function E(e,g,h,k){var u=tc(h);"function"!==typeof u?A("150"):void 0;h=u.call(h);null==h?A("151"):void 0;for(var t=u=null,n=g,x=
g=0,y=null,l=h.next();null!==n&&!l.done;x++,l=h.next()){n.index>x?(y=n,n=null):y=n.sibling;var r=P(e,n,l.value,k);if(null===r){n||(n=y);break}a&&n&&null===r.alternate&&b(e,n);g=f(r,g,x);null===t?u=r:t.sibling=r;t=r;n=y}if(l.done)return c(e,n),u;if(null===n){for(;!l.done;x++,l=h.next())l=w(e,l.value,k),null!==l&&(g=f(l,g,x),null===t?u=l:t.sibling=l,t=l);return u}for(n=d(e,n);!l.done;x++,l=h.next())l=nc(n,e,x,l.value,k),null!==l&&(a&&null!==l.alternate&&n.delete(null===l.key?x:l.key),g=f(l,g,x),null===
t?u=l:t.sibling=l,t=l);a&&n.forEach(function(a){return b(e,a)});return u}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ic&&null===f.key;k&&(f=f.props.children);var n="object"===typeof f&&null!==f;if(n)switch(f.$$typeof){case gc:a:{n=f.key;for(k=d;null!==k;){if(k.key===n)if(10===k.tag?f.type===ic:k.type===f.type){c(a,k.sibling);d=e(k,f.type===ic?f.props.children:f.props,h);d.ref=ug(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=k.sibling}f.type===ic?(d=Bf(f.props.children,
a.mode,h,f.key),d.return=a,a=d):(h=Af(f,a.mode,h),h.ref=ug(a,d,f),h.return=a,a=h)}return g(a);case hc:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Df(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=
a,a=d):(c(a,d),d=Cf(f,a.mode,h),d.return=a,a=d),g(a);if(tg(f))return Jd(a,d,f,h);if(tc(f))return E(a,d,f,h);n&&vg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 2:case 1:h=a.type,A("152",h.displayName||h.name||"Component")}return c(a,d)}}var xg=wg(!0),yg=wg(!1),zg=null,Ag=null,Bg=!1;function Cg(a,b){var c=new yf(5,null,null,0);c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Dg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}function Eg(a){if(Bg){var b=Ag;if(b){var c=b;if(!Dg(a,b)){b=hf(c);if(!b||!Dg(a,b)){a.effectTag|=2;Bg=!1;zg=a;return}Cg(zg,c)}zg=a;Ag=jf(b)}else a.effectTag|=2,Bg=!1,zg=a}}
function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag;)a=a.return;zg=a}function Gg(a){if(a!==zg)return!1;if(!Bg)return Fg(a),Bg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!df(b,a.memoizedProps))for(b=Ag;b;)Cg(a,b),b=hf(b);Fg(a);Ag=zg?hf(a.stateNode):null;return!0}function Hg(){Ag=zg=null;Bg=!1}function Q(a,b,c){Ig(a,b,c,b.expirationTime)}function Ig(a,b,c,d){b.child=null===a?yg(b,null,c,d):xg(b,a.child,c,d)}
function Jg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Kg(a,b,c,d,e){Jg(a,b);var f=0!==(b.effectTag&64);if(!c&&!f)return d&&xf(b,!1),R(a,b);c=b.stateNode;ec.current=b;var g=f?null:c.render();b.effectTag|=1;f&&(Ig(a,b,null,e),b.child=null);Ig(a,b,g,e);b.memoizedState=c.state;b.memoizedProps=c.props;d&&xf(b,!0);return b.child}
function Lg(a){var b=a.stateNode;b.pendingContext?uf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&uf(a,b.context,!1);ig(a,b.containerInfo)}
function Mg(a,b,c,d){var e=a.child;null!==e&&(e.return=a);for(;null!==e;){switch(e.tag){case 12:var f=e.stateNode|0;if(e.type===b&&0!==(f&c)){for(f=e;null!==f;){var g=f.alternate;if(0===f.expirationTime||f.expirationTime>d)f.expirationTime=d,null!==g&&(0===g.expirationTime||g.expirationTime>d)&&(g.expirationTime=d);else if(null!==g&&(0===g.expirationTime||g.expirationTime>d))g.expirationTime=d;else break;f=f.return}f=null}else f=e.child;break;case 13:f=e.type===a.type?null:e.child;break;default:f=
e.child}if(null!==f)f.return=e;else for(f=e;null!==f;){if(f===a){f=null;break}e=f.sibling;if(null!==e){e.return=f.return;f=e;break}f=f.return}e=f}}
function Qg(a,b,c){var d=b.type._context,e=b.pendingProps,f=b.memoizedProps,g=!0;if(O.current)g=!1;else if(f===e)return b.stateNode=0,ag(b),R(a,b);var h=e.value;b.memoizedProps=e;if(null===f)h=1073741823;else if(f.value===e.value){if(f.children===e.children&&g)return b.stateNode=0,ag(b),R(a,b);h=0}else{var k=f.value;if(k===h&&(0!==k||1/k===1/h)||k!==k&&h!==h){if(f.children===e.children&&g)return b.stateNode=0,ag(b),R(a,b);h=0}else if(h="function"===typeof d._calculateChangedBits?d._calculateChangedBits(k,
h):1073741823,h|=0,0===h){if(f.children===e.children&&g)return b.stateNode=0,ag(b),R(a,b)}else Mg(b,d,h,c)}b.stateNode=h;ag(b);Q(a,b,e.children);return b.child}function R(a,b){null!==a&&b.child!==a.child?A("153"):void 0;if(null!==b.child){a=b.child;var c=zf(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=zf(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Rg(a,b,c){if(0===b.expirationTime||b.expirationTime>c){switch(b.tag){case 3:Lg(b);break;case 2:wf(b);break;case 4:ig(b,b.stateNode.containerInfo);break;case 13:ag(b)}return null}switch(b.tag){case 0:null!==a?A("155"):void 0;var d=b.type,e=b.pendingProps,f=pf(b);f=rf(b,f);d=d(e,f);b.effectTag|=1;"object"===typeof d&&null!==d&&"function"===typeof d.render&&void 0===d.$$typeof?(f=b.type,b.tag=2,b.memoizedState=null!==d.state&&void 0!==d.state?d.state:null,f=f.getDerivedStateFromProps,"function"===
typeof f&&lg(b,f,e),e=wf(b),d.updater=pg,b.stateNode=d,d._reactInternalFiber=b,sg(b,c),a=Kg(a,b,!0,e,c)):(b.tag=1,Q(a,b,d),b.memoizedProps=e,a=b.child);return a;case 1:return e=b.type,c=b.pendingProps,O.current||b.memoizedProps!==c?(d=pf(b),d=rf(b,d),e=e(c,d),b.effectTag|=1,Q(a,b,e),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 2:e=wf(b);if(null===a)if(null===b.stateNode){var g=b.pendingProps,h=b.type;d=pf(b);var k=2===b.tag&&null!=b.type.contextTypes;f=k?rf(b,d):ha;g=new h(g,f);b.memoizedState=null!==
g.state&&void 0!==g.state?g.state:null;g.updater=pg;b.stateNode=g;g._reactInternalFiber=b;k&&(k=b.stateNode,k.__reactInternalMemoizedUnmaskedChildContext=d,k.__reactInternalMemoizedMaskedChildContext=f);sg(b,c);d=!0}else{h=b.type;d=b.stateNode;k=b.memoizedProps;f=b.pendingProps;d.props=k;var n=d.context;g=pf(b);g=rf(b,g);var r=h.getDerivedStateFromProps;(h="function"===typeof r||"function"===typeof d.getSnapshotBeforeUpdate)||"function"!==typeof d.UNSAFE_componentWillReceiveProps&&"function"!==typeof d.componentWillReceiveProps||
(k!==f||n!==g)&&rg(b,d,f,g);Lf=!1;var w=b.memoizedState;n=d.state=w;var P=b.updateQueue;null!==P&&(Uf(b,P,f,d,c),n=b.memoizedState);k!==f||w!==n||O.current||Lf?("function"===typeof r&&(lg(b,r,f),n=b.memoizedState),(k=Lf||qg(b,k,f,w,n,g))?(h||"function"!==typeof d.UNSAFE_componentWillMount&&"function"!==typeof d.componentWillMount||("function"===typeof d.componentWillMount&&d.componentWillMount(),"function"===typeof d.UNSAFE_componentWillMount&&d.UNSAFE_componentWillMount()),"function"===typeof d.componentDidMount&&
(b.effectTag|=4)):("function"===typeof d.componentDidMount&&(b.effectTag|=4),b.memoizedProps=f,b.memoizedState=n),d.props=f,d.state=n,d.context=g,d=k):("function"===typeof d.componentDidMount&&(b.effectTag|=4),d=!1)}else h=b.type,d=b.stateNode,f=b.memoizedProps,k=b.pendingProps,d.props=f,n=d.context,g=pf(b),g=rf(b,g),r=h.getDerivedStateFromProps,(h="function"===typeof r||"function"===typeof d.getSnapshotBeforeUpdate)||"function"!==typeof d.UNSAFE_componentWillReceiveProps&&"function"!==typeof d.componentWillReceiveProps||
(f!==k||n!==g)&&rg(b,d,k,g),Lf=!1,n=b.memoizedState,w=d.state=n,P=b.updateQueue,null!==P&&(Uf(b,P,k,d,c),w=b.memoizedState),f!==k||n!==w||O.current||Lf?("function"===typeof r&&(lg(b,r,k),w=b.memoizedState),(r=Lf||qg(b,f,k,n,w,g))?(h||"function"!==typeof d.UNSAFE_componentWillUpdate&&"function"!==typeof d.componentWillUpdate||("function"===typeof d.componentWillUpdate&&d.componentWillUpdate(k,w,g),"function"===typeof d.UNSAFE_componentWillUpdate&&d.UNSAFE_componentWillUpdate(k,w,g)),"function"===typeof d.componentDidUpdate&&
(b.effectTag|=4),"function"===typeof d.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof d.componentDidUpdate||f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=4),"function"!==typeof d.getSnapshotBeforeUpdate||f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=256),b.memoizedProps=k,b.memoizedState=w),d.props=k,d.state=w,d.context=g,d=r):("function"!==typeof d.componentDidUpdate||f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=4),"function"!==typeof d.getSnapshotBeforeUpdate||
f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=256),d=!1);return Kg(a,b,d,e,c);case 3:Lg(b);e=b.updateQueue;if(null!==e)if(d=b.memoizedState,d=null!==d?d.element:null,Uf(b,e,b.pendingProps,null,c),e=b.memoizedState.element,e===d)Hg(),a=R(a,b);else{d=b.stateNode;if(d=(null===a||null===a.child)&&d.hydrate)Ag=jf(b.stateNode.containerInfo),zg=b,d=Bg=!0;d?(b.effectTag|=2,b.child=yg(b,null,e,c)):(Hg(),Q(a,b,e));a=b.child}else Hg(),a=R(a,b);return a;case 5:a:{gg(fg.current);e=gg(dg.current);d=He(e,
b.type);e!==d&&(N(eg,b,b),N(dg,d,b));null===a&&Eg(b);e=b.type;k=b.memoizedProps;d=b.pendingProps;f=null!==a?a.memoizedProps:null;if(!O.current&&k===d){if(k=b.mode&1&&!!d.hidden)b.expirationTime=1073741823;if(!k||1073741823!==c){a=R(a,b);break a}}k=d.children;df(e,d)?k=null:f&&df(e,f)&&(b.effectTag|=16);Jg(a,b);1073741823!==c&&b.mode&1&&d.hidden?(b.expirationTime=1073741823,b.memoizedProps=d,a=null):(Q(a,b,k),b.memoizedProps=d,a=b.child)}return a;case 6:return null===a&&Eg(b),b.memoizedProps=b.pendingProps,
null;case 16:return null;case 4:return ig(b,b.stateNode.containerInfo),e=b.pendingProps,O.current||b.memoizedProps!==e?(null===a?b.child=xg(b,null,e,c):Q(a,b,e),b.memoizedProps=e,a=b.child):a=R(a,b),a;case 14:return e=b.type.render,c=b.pendingProps,d=b.ref,O.current||b.memoizedProps!==c||d!==(null!==a?a.ref:null)?(e=e(c,d),Q(a,b,e),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 10:return c=b.pendingProps,O.current||b.memoizedProps!==c?(Q(a,b,c),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 11:return c=
b.pendingProps.children,O.current||null!==c&&b.memoizedProps!==c?(Q(a,b,c),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 15:return c=b.pendingProps,b.memoizedProps===c?a=R(a,b):(Q(a,b,c.children),b.memoizedProps=c,a=b.child),a;case 13:return Qg(a,b,c);case 12:a:if(d=b.type,f=b.pendingProps,k=b.memoizedProps,e=d._currentValue,g=d._changedBits,O.current||0!==g||k!==f){b.memoizedProps=f;h=f.unstable_observedBits;if(void 0===h||null===h)h=1073741823;b.stateNode=h;if(0!==(g&h))Mg(b,d,g,c);else if(k===f){a=
R(a,b);break a}c=f.children;c=c(e);b.effectTag|=1;Q(a,b,c);a=b.child}else a=R(a,b);return a;default:A("156")}}function Sg(a){a.effectTag|=4}var Tg=void 0,Ug=void 0,Vg=void 0;Tg=function(){};Ug=function(a,b,c){(b.updateQueue=c)&&Sg(b)};Vg=function(a,b,c,d){c!==d&&Sg(b)};
function Wg(a,b){var c=b.pendingProps;switch(b.tag){case 1:return null;case 2:return sf(b),null;case 3:jg(b);tf(b);var d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b),b.effectTag&=-3;Tg(b);return null;case 5:kg(b);d=gg(fg.current);var e=b.type;if(null!==a&&null!=b.stateNode){var f=a.memoizedProps,g=b.stateNode,h=gg(dg.current);g=We(g,e,f,c,d);Ug(a,b,g,e,f,c,d,h);a.ref!==b.ref&&(b.effectTag|=128)}else{if(!c)return null===b.stateNode?
A("166"):void 0,null;a=gg(dg.current);if(Gg(b))c=b.stateNode,e=b.type,f=b.memoizedProps,c[C]=b,c[Ma]=f,d=Ye(c,e,f,a,d),b.updateQueue=d,null!==d&&Sg(b);else{a=Te(e,c,d,a);a[C]=b;a[Ma]=c;a:for(f=b.child;null!==f;){if(5===f.tag||6===f.tag)a.appendChild(f.stateNode);else if(4!==f.tag&&null!==f.child){f.child.return=f;f=f.child;continue}if(f===b)break;for(;null===f.sibling;){if(null===f.return||f.return===b)break a;f=f.return}f.sibling.return=f.return;f=f.sibling}Ve(a,e,c,d);cf(e,c)&&Sg(b);b.stateNode=
a}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)Vg(a,b,a.memoizedProps,c);else{if("string"!==typeof c)return null===b.stateNode?A("166"):void 0,null;d=gg(fg.current);gg(dg.current);Gg(b)?(d=b.stateNode,c=b.memoizedProps,d[C]=b,Ze(d,c)&&Sg(b)):(d=Ue(c,d),d[C]=b,b.stateNode=d)}return null;case 14:return null;case 16:return null;case 10:return null;case 11:return null;case 15:return null;case 4:return jg(b),Tg(b),null;case 13:return bg(b),null;case 12:return null;case 0:A("167");
default:A("156")}}function Xg(a,b){var c=b.source;null===b.stack&&null!==c&&vc(c);null!==c&&uc(c);b=b.value;null!==a&&2===a.tag&&uc(a);try{b&&b.suppressReactErrorLogging||console.error(b)}catch(d){d&&d.suppressReactErrorLogging||console.error(d)}}function Yg(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Zg(a,c)}else b.current=null}
function $g(a){"function"===typeof Kf&&Kf(a);switch(a.tag){case 2:Yg(a);var b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Zg(a,c)}break;case 5:Yg(a);break;case 4:ah(a)}}function bh(a){return 5===a.tag||3===a.tag||4===a.tag}
function ch(a){a:{for(var b=a.return;null!==b;){if(bh(b)){var c=b;break a}b=b.return}A("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:A("161")}c.effectTag&16&&(Ke(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||bh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(f=b,g=e.stateNode,8===f.nodeType?f.parentNode.insertBefore(g,f):f.appendChild(g)):b.appendChild(e.stateNode);else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===
e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function ah(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?A("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if($g(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag?d=b.stateNode.containerInfo:$g(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function dh(a,b){switch(b.tag){case 2:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&(c[Ma]=d,Xe(c,f,e,a,d))}break;case 6:null===b.stateNode?A("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 15:break;case 16:break;default:A("163")}}function eh(a,b,c){c=Of(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){fh(d);Xg(a,b)};return c}
function gh(a,b,c){c=Of(c);c.tag=3;var d=a.stateNode;null!==d&&"function"===typeof d.componentDidCatch&&(c.callback=function(){null===hh?hh=new Set([this]):hh.add(this);var c=b.value,d=b.stack;Xg(a,b);this.componentDidCatch(c,{componentStack:null!==d?d:""})});return c}
function ih(a,b,c,d,e,f){c.effectTag|=512;c.firstEffect=c.lastEffect=null;d=Xf(d,c);a=b;do{switch(a.tag){case 3:a.effectTag|=1024;d=eh(a,d,f);Rf(a,d,f);return;case 2:if(b=d,c=a.stateNode,0===(a.effectTag&64)&&null!==c&&"function"===typeof c.componentDidCatch&&(null===hh||!hh.has(c))){a.effectTag|=1024;d=gh(a,b,f);Rf(a,d,f);return}}a=a.return}while(null!==a)}
function jh(a){switch(a.tag){case 2:sf(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return jg(a),tf(a),b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 5:return kg(a),null;case 16:return b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 4:return jg(a),null;case 13:return bg(a),null;default:return null}}var kh=ef(),lh=2,mh=kh,nh=0,oh=0,ph=!1,S=null,qh=null,T=0,rh=-1,sh=!1,U=null,th=!1,uh=!1,hh=null;
function vh(){if(null!==S)for(var a=S.return;null!==a;){var b=a;switch(b.tag){case 2:sf(b);break;case 3:jg(b);tf(b);break;case 5:kg(b);break;case 4:jg(b);break;case 13:bg(b)}a=a.return}qh=null;T=0;rh=-1;sh=!1;S=null;uh=!1}
function wh(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&512)){b=Wg(b,a,T);var e=a;if(1073741823===T||1073741823!==e.expirationTime){var f=0;switch(e.tag){case 3:case 2:var g=e.updateQueue;null!==g&&(f=g.expirationTime)}for(g=e.child;null!==g;)0!==g.expirationTime&&(0===f||f>g.expirationTime)&&(f=g.expirationTime),g=g.sibling;e.expirationTime=f}if(null!==b)return b;null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&
(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a));if(null!==d)return d;if(null!==c)a=c;else{uh=!0;break}}else{a=jh(a,sh,T);if(null!==a)return a.effectTag&=511,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=512);if(null!==d)return d;if(null!==c)a=c;else break}}return null}
function xh(a){var b=Rg(a.alternate,a,T);null===b&&(b=wh(a));ec.current=null;return b}
function yh(a,b,c){ph?A("243"):void 0;ph=!0;if(b!==T||a!==qh||null===S)vh(),qh=a,T=b,rh=-1,S=zf(qh.current,null,T),a.pendingCommitExpirationTime=0;var d=!1;sh=!c||T<=lh;do{try{if(c)for(;null!==S&&!zh();)S=xh(S);else for(;null!==S;)S=xh(S)}catch(f){if(null===S)d=!0,fh(f);else{null===S?A("271"):void 0;c=S;var e=c.return;if(null===e){d=!0;fh(f);break}ih(a,e,c,f,sh,T,mh);S=wh(c)}}break}while(1);ph=!1;if(d)return null;if(null===S){if(uh)return a.pendingCommitExpirationTime=b,a.current.alternate;sh?A("262"):
void 0;0<=rh&&setTimeout(function(){var b=a.current.expirationTime;0!==b&&(0===a.remainingExpirationTime||a.remainingExpirationTime<b)&&Ah(a,b)},rh);Bh(a.current.expirationTime)}return null}
function Zg(a,b){var c;a:{ph&&!th?A("263"):void 0;for(c=a.return;null!==c;){switch(c.tag){case 2:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromCatch||"function"===typeof d.componentDidCatch&&(null===hh||!hh.has(d))){a=Xf(b,a);a=gh(c,a,1);Qf(c,a,1);og(c,1);c=void 0;break a}break;case 3:a=Xf(b,a);a=eh(c,a,1);Qf(c,a,1);og(c,1);c=void 0;break a}c=c.return}3===a.tag&&(c=Xf(b,a),c=eh(a,c,1),Qf(a,c,1),og(a,1));c=void 0}return c}
function Ch(){var a=2+25*(((mg()-2+500)/25|0)+1);a<=nh&&(a=nh+1);return nh=a}function ng(a,b){a=0!==oh?oh:ph?th?1:T:b.mode&1?Dh?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1):1;Dh&&(0===Eh||a>Eh)&&(Eh=a);return a}
function og(a,b){for(;null!==a;){if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;null!==a.alternate&&(0===a.alternate.expirationTime||a.alternate.expirationTime>b)&&(a.alternate.expirationTime=b);if(null===a.return)if(3===a.tag){var c=a.stateNode;!ph&&0!==T&&b<T&&vh();var d=c.current.expirationTime;ph&&!th&&qh===c||Ah(c,d);Fh>Gh&&A("185")}else break;a=a.return}}function mg(){mh=ef()-kh;return lh=(mh/10|0)+2}
function Hh(a){var b=oh;oh=2+25*(((mg()-2+500)/25|0)+1);try{return a()}finally{oh=b}}function Ih(a,b,c,d,e){var f=oh;oh=1;try{return a(b,c,d,e)}finally{oh=f}}var Jh=null,V=null,Kh=0,Lh=void 0,W=!1,X=null,Y=0,Eh=0,Mh=!1,Nh=!1,Oh=null,Ph=null,Z=!1,Qh=!1,Dh=!1,Rh=null,Gh=1E3,Fh=0,Sh=1;function Th(a){if(0!==Kh){if(a>Kh)return;null!==Lh&&gf(Lh)}var b=ef()-kh;Kh=a;Lh=ff(Uh,{timeout:10*(a-2)-b})}
function Ah(a,b){if(null===a.nextScheduledRoot)a.remainingExpirationTime=b,null===V?(Jh=V=a,a.nextScheduledRoot=a):(V=V.nextScheduledRoot=a,V.nextScheduledRoot=Jh);else{var c=a.remainingExpirationTime;if(0===c||b<c)a.remainingExpirationTime=b}W||(Z?Qh&&(X=a,Y=1,Vh(a,1,!1)):1===b?Wh():Th(b))}
function Xh(){var a=0,b=null;if(null!==V)for(var c=V,d=Jh;null!==d;){var e=d.remainingExpirationTime;if(0===e){null===c||null===V?A("244"):void 0;if(d===d.nextScheduledRoot){Jh=V=d.nextScheduledRoot=null;break}else if(d===Jh)Jh=e=d.nextScheduledRoot,V.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===V){V=c;V.nextScheduledRoot=Jh;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===V)break;
c=d;d=d.nextScheduledRoot}}c=X;null!==c&&c===b&&1===a?Fh++:Fh=0;X=b;Y=a}function Uh(a){Yh(0,!0,a)}function Wh(){Yh(1,!1,null)}function Yh(a,b,c){Ph=c;Xh();if(b)for(;null!==X&&0!==Y&&(0===a||a>=Y)&&(!Mh||mg()>=Y);)mg(),Vh(X,Y,!Mh),Xh();else for(;null!==X&&0!==Y&&(0===a||a>=Y);)Vh(X,Y,!1),Xh();null!==Ph&&(Kh=0,Lh=null);0!==Y&&Th(Y);Ph=null;Mh=!1;Zh()}function $h(a,b){W?A("253"):void 0;X=a;Y=b;Vh(a,b,!1);Wh();Zh()}
function Zh(){Fh=0;if(null!==Rh){var a=Rh;Rh=null;for(var b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){Nh||(Nh=!0,Oh=d)}}}if(Nh)throw a=Oh,Oh=null,Nh=!1,a;}function Vh(a,b,c){W?A("245"):void 0;W=!0;c?(c=a.finishedWork,null!==c?ai(a,c,b):(c=yh(a,b,!0),null!==c&&(zh()?a.finishedWork=c:ai(a,c,b)))):(c=a.finishedWork,null!==c?ai(a,c,b):(c=yh(a,b,!1),null!==c&&ai(a,c,b)));W=!1}
function ai(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===Rh?Rh=[d]:Rh.push(d),d._defer)){a.finishedWork=b;a.remainingExpirationTime=0;return}a.finishedWork=null;th=ph=!0;c=b.stateNode;c.current===b?A("177"):void 0;d=c.pendingCommitExpirationTime;0===d?A("261"):void 0;c.pendingCommitExpirationTime=0;mg();ec.current=null;if(1<b.effectTag)if(null!==b.lastEffect){b.lastEffect.nextEffect=b;var e=b.firstEffect}else e=b;else e=b.firstEffect;af=Hd;var f=da();if(Ud(f)){if("selectionStart"in
f)var g={start:f.selectionStart,end:f.selectionEnd};else a:{var h=window.getSelection&&window.getSelection();if(h&&0!==h.rangeCount){g=h.anchorNode;var k=h.anchorOffset,n=h.focusNode;h=h.focusOffset;try{g.nodeType,n.nodeType}catch(Wa){g=null;break a}var r=0,w=-1,P=-1,nc=0,Jd=0,E=f,t=null;b:for(;;){for(var x;;){E!==g||0!==k&&3!==E.nodeType||(w=r+k);E!==n||0!==h&&3!==E.nodeType||(P=r+h);3===E.nodeType&&(r+=E.nodeValue.length);if(null===(x=E.firstChild))break;t=E;E=x}for(;;){if(E===f)break b;t===g&&
++nc===k&&(w=r);t===n&&++Jd===h&&(P=r);if(null!==(x=E.nextSibling))break;E=t;t=E.parentNode}E=x}g=-1===w||-1===P?null:{start:w,end:P}}else g=null}g=g||{start:0,end:0}}else g=null;bf={focusedElem:f,selectionRange:g};Id(!1);for(U=e;null!==U;){f=!1;g=void 0;try{for(;null!==U;){if(U.effectTag&256){var u=U.alternate;k=U;switch(k.tag){case 2:if(k.effectTag&256&&null!==u){var y=u.memoizedProps,D=u.memoizedState,ja=k.stateNode;ja.props=k.memoizedProps;ja.state=k.memoizedState;var mi=ja.getSnapshotBeforeUpdate(y,
D);ja.__reactInternalSnapshotBeforeUpdate=mi}break;case 3:case 5:case 6:case 4:break;default:A("163")}}U=U.nextEffect}}catch(Wa){f=!0,g=Wa}f&&(null===U?A("178"):void 0,Zg(U,g),null!==U&&(U=U.nextEffect))}for(U=e;null!==U;){u=!1;y=void 0;try{for(;null!==U;){var q=U.effectTag;q&16&&Ke(U.stateNode,"");if(q&128){var z=U.alternate;if(null!==z){var l=z.ref;null!==l&&("function"===typeof l?l(null):l.current=null)}}switch(q&14){case 2:ch(U);U.effectTag&=-3;break;case 6:ch(U);U.effectTag&=-3;dh(U.alternate,
U);break;case 4:dh(U.alternate,U);break;case 8:D=U,ah(D),D.return=null,D.child=null,D.alternate&&(D.alternate.child=null,D.alternate.return=null)}U=U.nextEffect}}catch(Wa){u=!0,y=Wa}u&&(null===U?A("178"):void 0,Zg(U,y),null!==U&&(U=U.nextEffect))}l=bf;z=da();q=l.focusedElem;u=l.selectionRange;if(z!==q&&fa(document.documentElement,q)){null!==u&&Ud(q)&&(z=u.start,l=u.end,void 0===l&&(l=z),"selectionStart"in q?(q.selectionStart=z,q.selectionEnd=Math.min(l,q.value.length)):window.getSelection&&(z=window.getSelection(),
y=q[lb()].length,l=Math.min(u.start,y),u=void 0===u.end?l:Math.min(u.end,y),!z.extend&&l>u&&(y=u,u=l,l=y),y=Td(q,l),D=Td(q,u),y&&D&&(1!==z.rangeCount||z.anchorNode!==y.node||z.anchorOffset!==y.offset||z.focusNode!==D.node||z.focusOffset!==D.offset)&&(ja=document.createRange(),ja.setStart(y.node,y.offset),z.removeAllRanges(),l>u?(z.addRange(ja),z.extend(D.node,D.offset)):(ja.setEnd(D.node,D.offset),z.addRange(ja)))));z=[];for(l=q;l=l.parentNode;)1===l.nodeType&&z.push({element:l,left:l.scrollLeft,
top:l.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<z.length;q++)l=z[q],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}bf=null;Id(af);af=null;c.current=b;for(U=e;null!==U;){e=!1;q=void 0;try{for(z=d;null!==U;){var hg=U.effectTag;if(hg&36){var oc=U.alternate;l=U;u=z;switch(l.tag){case 2:var ca=l.stateNode;if(l.effectTag&4)if(null===oc)ca.props=l.memoizedProps,ca.state=l.memoizedState,ca.componentDidMount();else{var wi=oc.memoizedProps,xi=oc.memoizedState;ca.props=l.memoizedProps;
ca.state=l.memoizedState;ca.componentDidUpdate(wi,xi,ca.__reactInternalSnapshotBeforeUpdate)}var Ng=l.updateQueue;null!==Ng&&(ca.props=l.memoizedProps,ca.state=l.memoizedState,Wf(l,Ng,ca,u));break;case 3:var Og=l.updateQueue;if(null!==Og){y=null;if(null!==l.child)switch(l.child.tag){case 5:y=l.child.stateNode;break;case 2:y=l.child.stateNode}Wf(l,Og,y,u)}break;case 5:var yi=l.stateNode;null===oc&&l.effectTag&4&&cf(l.type,l.memoizedProps)&&yi.focus();break;case 6:break;case 4:break;case 15:break;case 16:break;
default:A("163")}}if(hg&128){l=void 0;var yc=U.ref;if(null!==yc){var Pg=U.stateNode;switch(U.tag){case 5:l=Pg;break;default:l=Pg}"function"===typeof yc?yc(l):yc.current=l}}var zi=U.nextEffect;U.nextEffect=null;U=zi}}catch(Wa){e=!0,q=Wa}e&&(null===U?A("178"):void 0,Zg(U,q),null!==U&&(U=U.nextEffect))}ph=th=!1;"function"===typeof Jf&&Jf(b.stateNode);b=c.current.expirationTime;0===b&&(hh=null);a.remainingExpirationTime=b}function zh(){return null===Ph||Ph.timeRemaining()>Sh?!1:Mh=!0}
function fh(a){null===X?A("246"):void 0;X.remainingExpirationTime=0;Nh||(Nh=!0,Oh=a)}function Bh(a){null===X?A("246"):void 0;X.remainingExpirationTime=a}function bi(a,b){var c=Z;Z=!0;try{return a(b)}finally{(Z=c)||W||Wh()}}function ci(a,b){if(Z&&!Qh){Qh=!0;try{return a(b)}finally{Qh=!1}}return a(b)}function di(a,b){W?A("187"):void 0;var c=Z;Z=!0;try{return Ih(a,b)}finally{Z=c,Wh()}}
function ei(a,b,c){if(Dh)return a(b,c);Z||W||0===Eh||(Yh(Eh,!1,null),Eh=0);var d=Dh,e=Z;Z=Dh=!0;try{return a(b,c)}finally{Dh=d,(Z=e)||W||Wh()}}function fi(a){var b=Z;Z=!0;try{Ih(a)}finally{(Z=b)||W||Yh(1,!1,null)}}
function gi(a,b,c,d,e){var f=b.current;if(c){c=c._reactInternalFiber;var g;b:{2===jd(c)&&2===c.tag?void 0:A("170");for(g=c;3!==g.tag;){if(qf(g)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}(g=g.return)?void 0:A("171")}g=g.stateNode.context}c=qf(c)?vf(c,g):g}else c=ha;null===b.context?b.context=c:b.pendingContext=c;b=e;e=Of(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);Qf(f,e,d);og(f,d);return d}
function hi(a){var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?A("188"):A("268",Object.keys(a)));a=md(b);return null===a?null:a.stateNode}function ii(a,b,c,d){var e=b.current,f=mg();e=ng(f,e);return gi(a,b,c,e,d)}function ji(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}
function ki(a){var b=a.findFiberByHostInstance;return If(p({},a,{findHostInstanceByFiber:function(a){a=md(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))}
var li={updateContainerAtExpirationTime:gi,createContainer:function(a,b,c){return Ef(a,b,c)},updateContainer:ii,flushRoot:$h,requestWork:Ah,computeUniqueAsyncExpiration:Ch,batchedUpdates:bi,unbatchedUpdates:ci,deferredUpdates:Hh,syncUpdates:Ih,interactiveUpdates:ei,flushInteractiveUpdates:function(){W||0===Eh||(Yh(Eh,!1,null),Eh=0)},flushControlled:fi,flushSync:di,getPublicRootInstance:ji,findHostInstance:hi,findHostInstanceWithNoPortals:function(a){a=nd(a);return null===a?null:a.stateNode},injectIntoDevTools:ki};
function ni(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:hc,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}Kb.injectFiberControlledHostComponent($e);function oi(a){this._expirationTime=Ch();this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}
oi.prototype.render=function(a){this._defer?void 0:A("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new pi;gi(a,b,null,c,d._onCommit);return d};oi.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
oi.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:A("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?A("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;$h(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};oi.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function pi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}pi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
pi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?A("191",c):void 0;c()}}};function qi(a,b,c){this._internalRoot=Ef(a,b,c)}qi.prototype.render=function(a,b){var c=this._internalRoot,d=new pi;b=void 0===b?null:b;null!==b&&d.then(b);ii(a,c,null,d._onCommit);return d};
qi.prototype.unmount=function(a){var b=this._internalRoot,c=new pi;a=void 0===a?null:a;null!==a&&c.then(a);ii(null,b,null,c._onCommit);return c};qi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new pi;c=void 0===c?null:c;null!==c&&e.then(c);ii(b,d,a,e._onCommit);return e};
qi.prototype.createBatch=function(){var a=new oi(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function ri(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Sb=li.batchedUpdates;Tb=li.interactiveUpdates;Ub=li.flushInteractiveUpdates;
function si(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qi(a,!1,b)}
function ti(a,b,c,d,e){ri(c)?void 0:A("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=ji(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=si(c,d);if("function"===typeof e){var h=e;e=function(){var a=ji(f._internalRoot);h.call(a)}}ci(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return ji(f._internalRoot)}
function ui(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;ri(b)?void 0:A("200");return ni(a,b,null,c)}
var vi={createPortal:ui,findDOMNode:function(a){return null==a?null:1===a.nodeType?a:hi(a)},hydrate:function(a,b,c){return ti(null,a,b,!0,c)},render:function(a,b,c){return ti(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?A("38"):void 0;return ti(a,b,c,!1,d)},unmountComponentAtNode:function(a){ri(a)?void 0:A("40");return a._reactRootContainer?(ci(function(){ti(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return ui.apply(void 0,
arguments)},unstable_batchedUpdates:bi,unstable_deferredUpdates:Hh,unstable_interactiveUpdates:ei,flushSync:di,unstable_flushControlled:fi,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:Ka,EventPluginRegistry:va,EventPropagators:$a,ReactControlledComponent:Rb,ReactDOMComponentTree:Qa,ReactDOMEventListener:Nd},unstable_createRoot:function(a,b){return new qi(a,!0,null!=b&&!0===b.hydrate)}};ki({findFiberByHostInstance:Na,bundleType:0,version:"16.4.1",rendererPackageName:"react-dom"});
var Ai={default:vi},Bi=Ai&&vi||Ai;module.exports=Bi.default?Bi.default:Bi;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */
function getActiveElement(doc) /*?DOMElement*/{
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

module.exports = getActiveElement;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var isTextNode = __webpack_require__(26);

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 */
function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if ('contains' in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

module.exports = containsNode;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var isNode = __webpack_require__(27);

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function isNode(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

module.exports = isNode;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(3);
var ReactPropTypesSecret = __webpack_require__(30);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = continentReducer;

var _indexWorld = __webpack_require__(11);

var _stateWorld = __webpack_require__(32);

function continentReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _stateWorld.initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'TOGGLE_CONTINENT':
      {
        var visiblecontinents = state.continents.map(function (continent) {
          return continent.name === action.name ? _extends({}, continent, { select: continent.select ^ 1 }) : _extends({}, continent, { select: 0 });
        });

        return _extends({}, state, { continents: visiblecontinents });
      }
    case 'TOGGLE_COUNTRY':
      {

        var visiblecontinents = state.continents.map(function (continent) {
          return continent.select === 1 ? _extends({}, continent, { countries: continent.countries.map(function (country) {
              return country.name === action.name ? _extends({}, country, { select: country.select ^ 1 }) : _extends({}, country, { select: 0 });
            })
          }) : _extends({}, continent);
        });

        return _extends({}, state, { continents: visiblecontinents });
      }
    case 'TOGGLE_CITY':
      {
        var visiblecontinents = state.continents.map(function (continent) {
          return continent.select === 1 ? _extends({}, continent, { countries: continent.countries.map(function (country) {
              return country.select === 1 ? _extends({}, country, { cities: country.cities.map(function (city) {
                  return city.name === action.name ? _extends({}, city, { select: city.select ^ 1 }) : _extends({}, city);
                }) }) : _extends({}, country, { select: 0 });
            }) }) : _extends({}, continent, { select: 0 });
        });

        return _extends({}, state, { continents: visiblecontinents });
      }
    default:
      {
        return state;
      }
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = exports.initialState = {
  continents: [{
    select: 0,
    name: "Africa",
    countries: [{
      select: 0,
      name: "Kenya",
      cities: [{
        select: 0,
        name: "Nairobi"
      }, {
        select: 0,
        name: "Nakuru"
      }]
    }, {
      select: 0,
      name: "Tanzania, United Republic of",
      cities: [{
        select: 0,
        name: "Arusha"
      }, {
        select: 0,
        name: "Moshi"
      }]
    }]
  }, {
    select: 0,
    name: "Asia",
    countries: [{
      select: 0,
      name: "India",
      cities: [{
        select: 0,
        name: "New Delhi"
      }, {
        select: 0,
        name: "Bangalore"
      }]
    }, {
      select: 0,
      name: "China",
      cities: [{
        select: 0,
        name: "Shenzhen"
      }, {
        select: 0,
        name: "Beijing"
      }]
    }]
  }, {
    select: 0,
    name: "Oceania",
    countries: [{
      select: 0,
      name: "Australia",
      cities: [{
        select: 0,
        name: "Sydney"
      }, {
        select: 0,
        name: "Melbourne"
      }]
    }, {
      select: 0,
      name: "New Zealand",
      cities: [{
        select: 0,
        name: "Auckland"
      }, {
        select: 0,
        name: "Wellington"
      }]
    }]
  }, {
    select: 0,
    name: "Europe",
    countries: [{
      select: 0,
      name: "Germany",
      cities: [{
        select: 0,
        name: "Berlin"
      }, {
        select: 0,
        name: "Munich"
      }]
    }, {
      select: 0,
      name: "France",
      cities: [{
        select: 0,
        name: "Paris"
      }, {
        select: 0,
        name: "Lyon"
      }]
    }]
  }, {
    select: 0,
    name: "North America",
    countries: [{
      select: 0,
      name: "Canada",
      cities: [{
        select: 0,
        name: "Toronto"
      }, {
        select: 0,
        name: "Vancouver"
      }]
    }, {
      select: 0,
      name: "United States of America",
      cities: [{
        select: 0,
        name: "New York"
      }, {
        select: 0,
        name: "Los Angeles"
      }]
    }]
  }, {
    select: 0,
    name: "South America",
    countries: [{
      select: 0,
      name: "Argentina",
      cities: [{
        select: 0,
        name: "Buones Aires"
      }, {
        select: 0,
        name: "Mendoza"
      }]
    }, {
      select: 0,
      name: "Brazil",
      cities: [{
        select: 0,
        name: "Rio De Janeiro"
      }, {
        select: 0,
        name: "Sao Paulo"
      }]
    }]
  }, {
    select: 0,
    name: "Antarctica",
    countries: [{
      select: 0,
      name: "Antarctica",
      cities: [{
        select: 0,
        name: "Antarctica"
      }]
    }]
  }]
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = countryReducer;

var _indexCountry = __webpack_require__(12);

var _stateCountry = __webpack_require__(34);

function countryReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _stateCountry.initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'TOGGLE_STATE':
      {
        var visiblestates = state.states.map(function (state) {
          return state.name === action.name ? _extends({}, state, { select: state.select ^ 1 }) : _extends({}, state, { select: 0 });
        });

        return _extends({}, state, { states: visiblestates });
      }
    case 'TOGGLE_CIITY':
      {

        var visiblestates = state.states.map(function (state) {
          return state.select === 1 ? _extends({}, state, { cities: state.cities.map(function (city) {
              return city.name === action.name ? _extends({}, city, { select: city.select ^ 1 }) : _extends({}, city);
            })
          }) : _extends({}, state);
        });

        return _extends({}, state, { states: visiblestates });
      }
    default:
      {
        return state;
      }
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = exports.initialState = {
  states: [{
    select: 0,
    name: "Assam",
    cities: [{
      select: 0,
      name: "Dispur"
    }, {
      select: 0,
      name: "Guwahati"
    }, {
      select: 0,
      name: "Dibrugarh"
    }, {
      select: 0,
      name: "Jorhat"
    }, {
      select: 0,
      name: "Silchar"
    }, {
      select: 0,
      name: "Tezpur"
    }]
  }, {
    select: 0,
    name: "Arunachal Pradesh",
    cities: [{
      select: 0,
      name: "Bomdila"
    }, {
      select: 0,
      name: "Bhalukpong"
    }, {
      select: 0,
      name: "Itanagar"
    }, {
      select: 0,
      name: "Mechuka"
    }, {
      select: 0,
      name: "Tawang"
    }, {
      select: 0,
      name: "Ziro"
    }]
  }, {
    select: 0,
    name: "Andaman and Nicobar",
    cities: [{
      select: 0,
      name: "Port Blair"
    }, {
      select: 0,
      name: "Havelock Island"
    }, {
      select: 0,
      name: "Neil Island"
    }, {
      select: 0,
      name: "Little Andaman"
    }, {
      select: 0,
      name: "Ross Island"
    }, {
      select: 0,
      name: "Mayabunder"
    }]
  }, {
    select: 0,
    name: "Andhra Pradesh",
    cities: [{
      select: 0,
      name: "Amaravati"
    }, {
      select: 0,
      name: "Puttaparthi"
    }, {
      select: 0,
      name: "Guntur"
    }, {
      select: 0,
      name: "Visakhapatnam"
    }, {
      select: 0,
      name: "Tirupati"
    }, {
      select: 0,
      name: "Vijayawada"
    }]
  }, {
    select: 0,
    name: "Bihar",
    cities: [{
      select: 0,
      name: "Nalanda"
    }, {
      select: 0,
      name: "Madhubani"
    }, {
      select: 0,
      name: "Patna"
    }, {
      select: 0,
      name: "Vaishali"
    }, {
      select: 0,
      name: "Gaya"
    }, {
      select: 0,
      name: "Rajgir"
    }]
  }, {
    select: 0,
    name: "Chandigarh",
    cities: [{
      select: 0,
      name: "Chandigarh"
    }]
  }, {
    select: 0,
    name: "Chhattisgarh",
    cities: [{
      select: 0,
      name: "Raipur"
    }, {
      select: 0,
      name: "Bilaspur"
    }, {
      select: 0,
      name: "Bastar"
    }, {
      select: 0,
      name: "Bhilai"
    }, {
      select: 0,
      name: "Durg"
    }, {
      select: 0,
      name: "Tiratha"
    }]
  }, {
    select: 0,
    name: "Daman and Diu",
    cities: [{
      select: 0,
      name: "Diu"
    }]
  }, {
    select: 0,
    name: "Dadra and Nagar Haveli",
    cities: [{
      select: 0,
      name: "Silvassa"
    }]
  }, {
    select: 0,
    name: "Delhi",
    cities: [{
      select: 0,
      name: "New Delhi"
    }]
  }, {
    select: 0,
    name: "Goa",
    cities: [{
      select: 0,
      name: "Panaji"
    }, {
      select: 0,
      name: "Morjim"
    }, {
      select: 0,
      name: "Old Goa"
    }, {
      select: 0,
      name: "Candolim"
    }, {
      select: 0,
      name: "Colva"
    }, {
      select: 0,
      name: "Paloleum"
    }]
  }, {
    select: 0,
    name: "Gujarat",
    cities: [{
      select: 0,
      name: "Ahmedabad"
    }, {
      select: 0,
      name: "Surat"
    }, {
      select: 0,
      name: "Vadodara"
    }, {
      select: 0,
      name: "Dwarka"
    }, {
      select: 0,
      name: "Modhera"
    }, {
      select: 0,
      name: "Somnath"
    }]
  }, {
    select: 0,
    name: "Himachal Pradesh",
    cities: [{
      select: 0,
      name: "Shimla"
    }, {
      select: 0,
      name: "Manali"
    }, {
      select: 0,
      name: "Kaza"
    }, {
      select: 0,
      name: "Reckong Peo"
    }, {
      select: 0,
      name: "Kullu"
    }, {
      select: 0,
      name: "Dharamshala"
    }]
  }, {
    select: 0,
    name: "Haryana",
    cities: [{
      select: 0,
      name: "Ambala"
    }, {
      select: 0,
      name: "Gurgaon"
    }, {
      select: 0,
      name: "Faridabad"
    }, {
      select: 0,
      name: "Karnal"
    }, {
      select: 0,
      name: "Hisar"
    }, {
      select: 0,
      name: "Panipat"
    }]
  }, {
    select: 0,
    name: "Jammu and Kashmir",
    cities: [{
      select: 0,
      name: "Jammu"
    }, {
      select: 0,
      name: "Srinagar"
    }, {
      select: 0,
      name: "Kargil"
    }, {
      select: 0,
      name: "Leh"
    }, {
      select: 0,
      name: "Drass"
    }, {
      select: 0,
      name: "Udhampur"
    }]
  }, {
    select: 0,
    name: "Jharkhand",
    cities: [{
      select: 0,
      name: "Ranchi"
    }, {
      select: 0,
      name: "Jamshedpur"
    }, {
      select: 0,
      name: "Dhanbad"
    }, {
      select: 0,
      name: "Hazaribagh"
    }, {
      select: 0,
      name: "Medininagar"
    }, {
      select: 0,
      name: "Deoghar"
    }]
  }, {
    select: 0,
    name: "Karnataka",
    cities: [{
      select: 0,
      name: "Bangalore"
    }, {
      select: 0,
      name: "Mysore"
    }, {
      select: 0,
      name: "Mangalore"
    }, {
      select: 0,
      name: "Belgaum"
    }, {
      select: 0,
      name: "Udupi"
    }, {
      select: 0,
      name: "Chikmaglur"
    }]
  }, {
    select: 0,
    name: "Kerala",
    cities: [{
      select: 0,
      name: "Kochi"
    }, {
      select: 0,
      name: "Kozhikode"
    }, {
      select: 0,
      name: "Kollam"
    }, {
      select: 0,
      name: "Thiruvannanthpuram"
    }, {
      select: 0,
      name: "Alapuzzha"
    }, {
      select: 0,
      name: "Trivendaram"
    }]
  }, {
    select: 0,
    name: "Lakshwadeep",
    cities: [{
      select: 0,
      name: "Kavaratti"
    }]
  }, {
    select: 0,
    name: "Madhya Pradesh",
    cities: [{
      select: 0,
      name: "Bhopal"
    }, {
      select: 0,
      name: "Gwalior"
    }, {
      select: 0,
      name: "Indore"
    }, {
      select: 0,
      name: "Jabalpur"
    }, {
      select: 0,
      name: "Ujjain"
    }, {
      select: 0,
      name: "Singrauli"
    }]
  }, {
    select: 0,
    name: "Maharashtra",
    cities: [{
      select: 0,
      name: "Mumbai"
    }, {
      select: 0,
      name: "Pune"
    }, {
      select: 0,
      name: "Nagpur"
    }, {
      select: 0,
      name: "Nashik"
    }, {
      select: 0,
      name: "Aurungabad"
    }, {
      select: 0,
      name: "Kolhapur"
    }]
  }, {
    select: 0,
    name: "Manipur",
    cities: [{
      select: 0,
      name: "Imphal"
    }, {
      select: 0,
      name: "Ukhrul"
    }, {
      select: 0,
      name: "Bishnupur"
    }, {
      select: 0,
      name: "Thoubal"
    }, {
      select: 0,
      name: "Senapati"
    }, {
      select: 0,
      name: "Tamenglong"
    }]
  }, {
    select: 0,
    name: "Meghalaya",
    cities: [{
      select: 0,
      name: "Shillong"
    }, {
      select: 0,
      name: "Tura"
    }, {
      select: 0,
      name: "Cherrapunji"
    }, {
      select: 0,
      name: "Williamnagar"
    }, {
      select: 0,
      name: "Baghmara"
    }, {
      select: 0,
      name: "Jowai"
    }]
  }, {
    select: 0,
    name: "Mizoram",
    cities: [{
      select: 0,
      name: "Aizwal"
    }, {
      select: 0,
      name: "Serchhip"
    }, {
      select: 0,
      name: "Champhai"
    }, {
      select: 0,
      name: "Lunglei"
    }, {
      select: 0,
      name: "Lawngtlai"
    }, {
      select: 0,
      name: "Thenzawal"
    }]
  }, {
    select: 0,
    name: "Nagaland",
    cities: [{
      select: 0,
      name: "Kohima"
    }, {
      select: 0,
      name: "Dimapur"
    }, {
      select: 0,
      name: "Mokokchung"
    }, {
      select: 0,
      name: "Phek"
    }, {
      select: 0,
      name: "Mon"
    }, {
      select: 0,
      name: "Wokha"
    }]
  }, {
    select: 0,
    name: "Orissa",
    cities: [{
      select: 0,
      name: "Bhubaneswar"
    }, {
      select: 0,
      name: "Cuttack"
    }, {
      select: 0,
      name: "Puri"
    }, {
      select: 0,
      name: "Rourkela"
    }, {
      select: 0,
      name: "Brahmapur"
    }, {
      select: 0,
      name: "Konark"
    }]
  }, {
    select: 0,
    name: "Puducherry",
    cities: [{
      select: 0,
      name: "Pondicherry"
    }]
  }, {
    select: 0,
    name: "Punjab",
    cities: [{
      select: 0,
      name: "Amritsar"
    }, {
      select: 0,
      name: "Bhatinda"
    }, {
      select: 0,
      name: "Ludhiana"
    }, {
      select: 0,
      name: "Jalandhar"
    }, {
      select: 0,
      name: "Patiala"
    }, {
      select: 0,
      name: "Ropar"
    }]
  }, {
    select: 0,
    name: "Rajasthan",
    cities: [{
      select: 0,
      name: "Jaipur"
    }, {
      select: 0,
      name: "Jodhpur"
    }, {
      select: 0,
      name: "Bikaner"
    }, {
      select: 0,
      name: "Jaisalmer"
    }, {
      select: 0,
      name: "Udaipur"
    }, {
      select: 0,
      name: "Pushkar"
    }]
  }, {
    select: 0,
    name: "Sikkim",
    cities: [{
      select: 0,
      name: "Gangtok"
    }, {
      select: 0,
      name: "Namchi"
    }, {
      select: 0,
      name: "Yuksom"
    }, {
      select: 0,
      name: "Pelling"
    }, {
      select: 0,
      name: "Lachung"
    }, {
      select: 0,
      name: "Ravangla"
    }]

  }, {
    select: 0,
    name: "Tamil Nadu",
    cities: [{
      select: 0,
      name: "Chennai"
    }, {
      select: 0,
      name: "Madurai"
    }, {
      select: 0,
      name: "Kanyakumari"
    }, {
      select: 0,
      name: "Kanchipuram"
    }, {
      select: 0,
      name: "Rameshwaram"
    }, {
      select: 0,
      name: "Ooty"
    }]
  }, {
    select: 0,
    name: "Telangana",
    cities: [{
      select: 0,
      name: "Hyderabad"
    }, {
      select: 0,
      name: "Warangal"
    }, {
      select: 0,
      name: "Nizamabad"
    }, {
      select: 0,
      name: "Karimnagar"
    }, {
      select: 0,
      name: "Khammam"
    }, {
      select: 0,
      name: "Mahbubnagar"
    }]
  }, {
    select: 0,
    name: "Tripura",
    cities: [{
      select: 0,
      name: "Agartala"
    }, {
      select: 0,
      name: "Dharamanagar"
    }, {
      select: 0,
      name: "Udaipur"
    }, {
      select: 0,
      name: "Ambassa"
    }, {
      select: 0,
      name: "Amarpur"
    }, {
      select: 0,
      name: "Melaghar"
    }]
  }, {
    select: 0,
    name: "Uttarakhand",
    cities: [{
      select: 0,
      name: "Dehradun"
    }, {
      select: 0,
      name: "Haridwar"
    }, {
      select: 0,
      name: "Almora"
    }, {
      select: 0,
      name: "Mussoorie"
    }, {
      select: 0,
      name: "Pithoragarh"
    }, {
      select: 0,
      name: "Nainital"
    }]
  }, {
    select: 0,
    name: "Uttar Pradesh",
    cities: [{
      select: 0,
      name: "Luckhnow"
    }, {
      select: 0,
      name: "Kanpur"
    }, {
      select: 0,
      name: "Allahabad"
    }, {
      select: 0,
      name: "Agra"
    }, {
      select: 0,
      name: "Mathura"
    }, {
      select: 0,
      name: "Varanasi"
    }]
  }, {
    select: 0,
    name: "West Bengal",
    cities: [{
      select: 0,
      name: "Kolkata"
    }, {
      select: 0,
      name: "Darjeeling"
    }, {
      select: 0,
      name: "Durgapur"
    }, {
      select: 0,
      name: "Kalimpong"
    }, {
      select: 0,
      name: "Siliguri"
    }, {
      select: 0,
      name: "Sundarbans"
    }]
  }]
};

/***/ }),
/* 35 */
/***/ (function(module) {

module.exports = {"type":"Topology","objects":{"states":{"type":"GeometryCollection","geometries":[{"type":"Polygon","properties":{"OBJECTID":2626,"NAME_0":"India","NAME_1":"Chandigarh","HASC_1":"IN.CH","ENGTYPE_1":"Union Territory"},"arcs":[[0,1]]},{"type":"Polygon","properties":{"OBJECTID":2627,"NAME_0":"India","NAME_1":"Delhi","HASC_1":"IN.DL","ENGTYPE_1":"Union Territory"},"arcs":[[2,3]]},{"type":"Polygon","properties":{"OBJECTID":2628,"NAME_0":"India","NAME_1":"Himachal Pradesh","HASC_1":"IN.HP","ENGTYPE_1":"Union Territory"},"arcs":[[4,5,6,7,8]]},{"type":"Polygon","properties":{"OBJECTID":2629,"NAME_0":"India","NAME_1":"Haryana","HASC_1":"IN.HR","ENGTYPE_1":"State"},"arcs":[[9,10,-2,11,-7,12,-4,13]]},{"type":"Polygon","properties":{"OBJECTID":2649,"NAME_0":"India","NAME_1":"Orissa","HASC_1":"IN.OR","ENGTYPE_1":"State"},"arcs":[[14,15,16,17,18]]},{"type":"Polygon","properties":{"OBJECTID":2660,"NAME_0":"India","NAME_1":"Karnataka","HASC_1":"IN.KA","ENGTYPE_1":"State"},"arcs":[[19,20,21,22,23,24]]},{"type":"Polygon","properties":{"OBJECTID":2661,"NAME_0":"India","NAME_1":"Maharashtra","HASC_1":"IN.MH","ENGTYPE_1":"State"},"arcs":[[25,26,27,28,29,-22,30]]},{"type":"Polygon","properties":{"OBJECTID":2712,"NAME_0":"India","NAME_1":"Assam","HASC_1":"IN.AS","ENGTYPE_1":"State"},"arcs":[[31,32,33,34,35,36,37,38,39,40]]},{"type":"Polygon","properties":{"OBJECTID":2713,"NAME_0":"India","NAME_1":"Manipur","HASC_1":"IN.MN","ENGTYPE_1":"State"},"arcs":[[41,42,-39,43]]},{"type":"Polygon","properties":{"OBJECTID":2714,"NAME_0":"India","NAME_1":"Nagaland","HASC_1":"IN.NL","ENGTYPE_1":"State"},"arcs":[[44,-44,-38,45]]},{"type":"Polygon","properties":{"OBJECTID":2724,"NAME_0":"India","NAME_1":"Meghalaya","HASC_1":"IN.ML","ENGTYPE_1":"State"},"arcs":[[46,-33]]},{"type":"Polygon","properties":{"OBJECTID":3546,"NAME_0":"India","NAME_1":"Punjab","HASC_1":"IN.PB","ENGTYPE_1":"State"},"arcs":[[47,48,-8,-12,-1,-11,49]]},{"type":"Polygon","properties":{"OBJECTID":3547,"NAME_0":"India","NAME_1":"Rajasthan","HASC_1":"IN.RJ","ENGTYPE_1":"State"},"arcs":[[50,-50,-10,51,52,53]]},{"type":"Polygon","properties":{"OBJECTID":3551,"NAME_0":"India","NAME_1":"Uttar Pradesh","HASC_1":"IN.UP","ENGTYPE_1":"State"},"arcs":[[54,55,56,57,58,-52,-14,-3,-13,59]]},{"type":"Polygon","properties":{"OBJECTID":3552,"NAME_0":"India","NAME_1":"Uttarakhand","HASC_1":"IN.UT","ENGTYPE_1":"State"},"arcs":[[60,-60,-6]]},{"type":"Polygon","properties":{"OBJECTID":3554,"NAME_0":"India","NAME_1":"Jharkhand","HASC_1":"IN.JH","ENGTYPE_1":"State"},"arcs":[[61,-18,62,-57,63]]},{"type":"Polygon","properties":{"OBJECTID":3556,"NAME_0":"India","NAME_1":"Bihar","HASC_1":"IN.BR","ENGTYPE_1":"State"},"arcs":[[64,65,-64,-56]]},{"type":"Polygon","properties":{"OBJECTID":3557,"NAME_0":"India","NAME_1":"Sikkim","HASC_1":"IN.SK","ENGTYPE_1":"State"},"arcs":[[66,67]]},{"type":"Polygon","properties":{"OBJECTID":3558,"NAME_0":"India","NAME_1":"Chhattisgarh","HASC_1":"IN.CT","ENGTYPE_1":"State"},"arcs":[[-17,68,-29,69,-58,-63]]},{"type":"Polygon","properties":{"OBJECTID":3559,"NAME_0":"India","NAME_1":"Madhya Pradesh","HASC_1":"IN.MP","ENGTYPE_1":"State"},"arcs":[[-28,70,-53,-59,-70]]},{"type":"MultiPolygon","properties":{"OBJECTID":3560,"NAME_0":"India","NAME_1":"Puducherry","HASC_1":"IN.PY","ENGTYPE_1":"Union Territory"},"arcs":[[[71,72]],[[73,74]],[[75,76]]]},{"type":"MultiPolygon","properties":{"OBJECTID":3561,"NAME_0":"India","NAME_1":"Tamil Nadu","HASC_1":null,"ENGTYPE_1":"State"},"arcs":[[[77,-73,78,-77,79,80,-24,81]]]},{"type":"Polygon","properties":{"OBJECTID":3563,"NAME_0":"India","NAME_1":"Goa","HASC_1":"IN.GA","ENGTYPE_1":"State"},"arcs":[[82,-31,-21]]},{"type":"Polygon","properties":{"OBJECTID":3604,"NAME_0":"India","NAME_1":"Arunachal Pradesh","HASC_1":"IN.AR","ENGTYPE_1":"State"},"arcs":[[-46,-37,83]]},{"type":"Polygon","properties":{"OBJECTID":3605,"NAME_0":"India","NAME_1":"Mizoram","HASC_1":"IN.MZ","ENGTYPE_1":"State"},"arcs":[[84,85,-40,-43]]},{"type":"Polygon","properties":{"OBJECTID":3606,"NAME_0":"India","NAME_1":"Tripura","HASC_1":"IN.TR","ENGTYPE_1":"State"},"arcs":[[86,-41,-86]]},{"type":"MultiPolygon","properties":{"OBJECTID":2634,"NAME_0":"India","NAME_1":"West Bengal","HASC_1":"IN.WB","ENGTYPE_1":"Division"},"arcs":[[[87]],[[88,-19,-62,-66,89,-68,90,-35]],[[91]],[[92]]]},{"type":"MultiPolygon","properties":{"OBJECTID":2646,"NAME_0":"India","NAME_1":"Kerala","HASC_1":"IN.KL","ENGTYPE_1":"State"},"arcs":[[[93,-75,94,-25,-81]]]},{"type":"Polygon","properties":{"OBJECTID":2659,"NAME_0":"India","NAME_1":"Gujarat","HASC_1":"IN.GJ","ENGTYPE_1":"State"},"arcs":[[95,-54,-71,-27]]},{"type":"MultiPolygon","properties":{"OBJECTID":2644,"NAME_0":"India","NAME_1":"Andhra Pradesh","HASC_1":"IN.AP","ENGTYPE_1":"State"},"arcs":[[[-97,97,-82,-23,-30,-69,-16,98]],[[99]]]},{"type":"MultiPolygon","properties":{"OBJECTID":2691,"NAME_0":"India","NAME_1":"Andaman and Nicobar","HASC_1":"IN.AN","ENGTYPE_1":"Union Territory"},"arcs":[[[100]],[[101]],[[102]],[[103]],[[104]],[[105]],[[106]],[[107]],[[108]],[[109]],[[110]],[[111]],[[112]]]},{"type":"MultiPolygon","properties":{"OBJECTID":2630,"NAME_0":"India","NAME_1":"Jammu and Kashmir","HASC_1":"IN.JK","ENGTYPE_1":"State"},"arcs":[[[113,-9,-49,114]]]}]}},"arcs":[[[2972,7897],[-19,-2],[-28,32],[41,5]],[[2966,7932],[6,-35]],[[3099,7301],[9,-31],[28,-20],[10,-33],[-4,-33]],[[3142,7184],[-34,-12],[-11,-17],[-32,14],[-11,18],[-67,-3],[-14,17],[40,41],[-4,39],[45,22],[45,-2]],[[3503,8506],[24,-33],[2,-65],[19,-8],[47,-56],[33,-24],[-26,-64],[21,-34],[30,-20],[-41,-32],[22,-21],[-9,-42],[48,-6]],[[3673,8101],[40,-45],[0,-11],[-42,-3],[-33,29],[-58,6],[-36,-4],[-41,24],[-28,2],[-92,-41],[-30,1],[-50,-43],[-4,-56],[-28,-27],[24,-51],[-11,-12],[25,-26],[-85,-35],[6,-11]],[[3230,7798],[-23,14],[-41,2],[-67,22],[-25,24],[8,36],[-52,32],[-32,41],[-30,11],[-17,-9]],[[2951,7971],[-43,31],[-15,44],[11,28],[-22,20],[-43,7],[-28,43],[-28,-40],[-27,-1],[-18,16],[-25,69],[-52,80],[17,11],[-32,44],[-43,20],[-58,14],[28,37],[-17,21],[34,9],[69,46],[-24,32]],[[2635,8502],[26,33],[-4,51],[-37,47],[15,10],[34,-15],[54,38],[39,13],[26,32],[36,16],[56,11],[22,-14],[40,3],[67,-54],[52,-28],[88,-27],[70,18],[58,30],[69,-79],[5,-27],[25,-27],[35,19],[45,7],[45,21],[0,-34],[-24,-17],[-11,-31],[13,-11],[24,19]],[[3127,6948],[-82,0],[9,-21],[-54,-24],[-4,25],[15,40],[-8,55],[4,41],[-26,24],[-67,-44],[0,-26],[-42,-11],[-30,24],[12,21],[-13,16],[-51,8],[17,-39],[-56,0],[-8,-10],[19,-67],[-73,0],[-24,25],[33,55],[-28,14],[30,20],[-2,25],[-48,46],[-36,8],[-60,64],[-41,103],[10,21],[-23,8],[-26,49],[4,29],[-19,13],[-79,-20],[-44,15],[-15,28],[-36,12],[-75,-21],[-22,34],[20,8],[-7,35],[7,63],[-37,-9],[-2,30],[21,9],[-10,31]],[[2180,7655],[47,-11],[19,18],[39,5],[37,-14],[23,-23],[37,15],[0,-32],[30,4],[15,-28],[-22,-20],[22,-42],[23,7],[48,74],[55,-15],[39,6],[26,17],[32,-27],[54,2],[58,34],[-13,29],[17,64],[49,-8],[16,22],[15,-28],[23,-4],[33,19],[6,20],[-32,16],[56,28],[14,31],[30,-2],[14,-22],[8,16],[-4,73],[-22,18]],[[2966,7932],[7,18],[-22,21]],[[3230,7798],[-4,-34],[-56,-45],[-64,-60],[-13,-52],[-15,-12],[-26,-65],[0,-48],[24,1],[2,-98],[25,-64],[-4,-20]],[[3142,7184],[58,-42],[-11,-27],[22,-19],[4,-24],[-23,-23],[-2,-22],[21,-31],[-19,-21],[-65,-27]],[[6616,4905],[-46,-17],[-49,-3],[-46,-26],[-51,-48],[-28,-52],[4,-29],[41,-91],[-29,-9],[34,-9],[-13,-19],[27,-5],[-85,-55],[-19,-48],[26,4],[-26,-31],[-76,-33],[-10,-30],[-24,-37],[-41,28],[-23,0],[56,-34],[-35,-18],[-65,-22],[-8,5],[-107,-31],[-99,-33],[-11,11],[47,19],[3,40],[-45,7],[-74,-54],[-38,-64],[6,-17],[26,10],[-3,18],[18,28],[20,-5],[29,16],[5,-15],[-24,-23],[-54,-33],[-105,-85],[-32,-34]],[[5692,4081],[-7,15],[-25,-2],[-15,-19],[-56,-21],[-4,-29],[-50,-46],[-54,-8],[-30,11],[-58,-4],[-17,18],[-17,47],[-21,-23],[-44,66],[-32,-40],[-19,21],[-11,-37],[-45,10],[32,-41],[-47,-34],[-51,-8],[-28,-34],[19,-37],[-18,-24],[3,-20],[-47,-13],[-5,15],[-36,7],[-7,-28],[-34,-18],[-6,-16],[-22,9],[4,27],[-27,27],[-3,27],[-19,6],[-28,-35],[-5,-50],[-14,-23],[17,-15],[-9,-32],[-28,-18],[-55,17],[-57,-16],[-118,-68],[-23,10],[-11,-13],[-30,6]],[[4534,3648],[2,27],[15,-3],[35,129],[34,7],[30,19],[21,31],[52,42],[-15,17],[23,22],[57,20],[10,39],[22,23],[-2,30],[-20,30],[-6,35],[8,54],[-49,44],[4,78],[-77,56],[15,37],[32,22],[30,-30],[20,13],[38,-24],[28,-47],[24,16],[73,-12],[0,-27],[47,27],[-8,51],[-26,-5],[-67,26],[7,42],[-9,44],[2,44],[-26,31],[9,38],[-8,65],[38,-7],[52,59],[15,41],[45,-1],[62,10],[37,-20],[40,12],[32,68],[35,-4],[-19,35],[6,36],[34,51],[9,30],[30,9],[2,31],[-17,30],[30,57],[45,23],[37,29],[36,7],[15,15],[-8,41]],[[5415,5211],[34,-13],[28,-38],[56,-20],[32,1],[32,14],[6,17],[74,2],[28,7],[32,-9],[54,27],[11,-36],[-1,-35],[-36,-61],[41,1],[41,-24],[32,30],[47,10],[30,-16],[47,-10],[33,16],[1,-37],[16,-9],[29,12],[18,25],[4,103],[-15,30],[39,18],[17,-18],[58,-26],[39,-33],[34,5],[69,-40]],[[6345,5104],[51,-31],[52,-18],[2,-31],[22,-22],[21,23],[30,-12],[11,-36],[58,-15],[24,-57]],[[2296,1985],[-13,33],[-34,155],[-9,16],[-4,106],[-7,-14],[-26,81],[-30,41],[-10,50],[-18,40],[-8,52],[13,4],[-24,24],[-19,-6],[-17,63],[-20,-1],[-34,26],[11,15],[36,9],[-11,8],[-25,-16],[-13,15]],[[2034,2686],[53,24],[17,78],[-17,19],[20,9],[-22,63],[0,47],[-25,13],[-22,-4]],[[2038,2935],[13,29],[23,14],[26,-14],[30,31],[-6,13],[24,37],[-5,39],[22,5],[-7,48],[-45,12],[-4,28],[17,7],[-37,49],[35,-1],[28,35],[32,-8],[7,-23],[40,17],[7,34],[62,22],[-4,29],[36,29],[33,0],[34,-28],[30,11],[0,18],[62,10],[13,-8],[32,18],[30,-5],[2,27],[-14,21],[4,25],[-24,55],[22,28],[53,-32],[35,13],[23,-30],[54,17],[43,3],[37,-12],[17,9],[-22,37],[2,43],[24,6],[41,44],[30,-2],[26,-19],[28,42],[-5,22],[34,-6],[16,31],[10,63],[59,10],[10,18],[37,22],[13,44],[27,-8],[1,-26],[40,-23],[30,9]],[[3219,3814],[18,-60],[-14,-18],[16,-17],[4,-31],[-36,-27],[6,-29],[-21,-11],[-20,-30],[30,-18],[41,-8],[22,5],[-30,-26],[-76,-87],[19,-29],[11,-41],[-10,-25],[-9,-71],[9,-42],[-60,-48],[12,-15],[69,-9],[19,-15],[-17,-18],[-8,-31],[2,-59],[-13,-16],[-73,7],[-30,-5],[-37,-28],[-4,-38],[21,-31],[-30,-17],[3,-34],[-13,-3],[19,-50],[28,-14],[9,-55],[-31,-45],[-62,12],[-34,16],[-15,-33],[34,-17],[-7,-50],[-21,-52],[7,-23],[26,-28],[30,2],[-20,-29],[19,-27],[-4,-18],[54,-10],[21,38],[46,-2],[38,-33],[-2,31],[34,-13],[1,-32],[-31,-8],[-15,-35],[24,-55],[-24,4],[-11,31],[-19,7],[-45,-6],[-41,20],[-8,35],[-18,6],[-15,-17],[20,-19],[2,-23],[24,-35],[-18,-32],[26,-21],[30,6],[-6,30],[17,17],[49,-19],[30,0],[20,-48],[79,19],[41,41],[0,19],[30,-8],[17,14],[-2,-43],[37,18],[17,-9],[6,-53],[31,-32],[64,-4],[-7,-72],[13,-17],[60,-14],[-4,-30],[-49,-83],[13,-23],[-26,16],[-13,-15],[-32,-5],[-5,-31]],[[3451,1983],[-60,30],[-26,-14],[-17,19],[-43,-2],[-17,-38],[-21,-21],[-28,-1],[-15,-39],[19,-30],[-8,-25],[-46,-42],[9,-19],[60,0],[24,-10],[10,-27],[-42,-47],[-42,-3],[-38,-50],[-47,8],[-43,-5],[-22,-14],[-28,22],[-32,-8],[-28,-57],[-24,6],[-68,-2],[-7,23],[-40,-13]],[[2831,1624],[-13,27],[-24,0],[-53,39],[-20,-3],[-6,33],[-33,-9],[-47,5],[-28,39],[-43,11],[-34,23],[-32,35],[-20,8],[-15,32],[7,27],[-17,-3],[-22,24],[7,20],[-52,8],[-6,18],[-26,2],[-26,28],[-32,-3]],[[1898,2962],[-36,59],[-47,55],[-3,44],[-10,9],[-35,110],[5,37],[-18,65],[7,37],[-26,94],[11,4],[-26,35],[4,30],[-19,28],[-9,76],[-29,52],[-16,81],[3,15],[32,-6],[-5,18],[-27,4],[-24,24],[-4,46],[25,12],[-21,6],[-19,41],[4,38],[21,9],[17,-16],[14,11],[-41,28],[32,34],[-5,55],[-10,-36],[-20,-10],[-25,-42],[-7,29],[11,61],[-15,-3],[-13,101],[47,22],[-34,1],[-22,23],[-23,78],[19,76]],[[1561,4397],[82,18],[17,-29],[34,5],[18,-9],[6,29],[23,3],[13,23],[39,-3],[0,51],[-8,10],[34,55],[-30,40],[23,19],[89,-51],[32,15],[6,21],[32,29],[0,41],[-12,30],[-54,46],[-26,2],[-28,21],[50,-6],[27,16],[11,24],[34,0],[13,29],[33,29],[21,-3],[64,20],[-2,20],[-36,-9],[-63,3],[-60,-16],[-21,39],[24,9],[-7,61],[45,12],[63,26]],[[2047,5017],[34,-9],[56,32],[32,-25],[2,-42],[11,-35],[64,-34],[63,1],[53,-19],[31,-42],[60,-15],[75,-4],[96,4],[22,6],[75,-14],[17,-56],[-15,-7],[15,-20],[48,-11],[51,11],[30,27],[32,4],[13,16],[-8,30],[34,24],[19,26],[3,28],[43,14],[38,24],[47,11],[15,-9],[35,24],[51,0],[30,-25],[9,-48],[-49,-2],[19,-50],[47,3],[26,-8],[32,16],[26,-9],[54,13],[56,38],[75,18],[6,-33],[19,7],[71,-18],[77,13],[1,20],[105,29],[4,16],[84,-16],[24,-39],[70,17],[31,-22],[79,14],[36,23],[42,-20],[32,-33],[6,-29],[28,1],[43,-23],[17,9]],[[4289,4819],[-17,-37],[-54,-27],[-12,-48],[16,-27],[26,-11],[5,-67],[-26,-25],[43,-7],[0,-90],[-34,-21],[-31,-6],[-6,-29],[39,-7],[10,-32],[-8,-35],[-28,2],[-9,-15],[20,-15],[-26,-22],[26,-5],[8,17],[32,-35],[20,-4],[11,-30],[49,-21],[19,-19],[-8,-22],[-22,-5],[9,-23],[-37,-25],[-15,21],[-21,-1],[-13,24],[-60,-47],[-20,-55],[-25,-45],[25,-32],[-28,-32],[3,-13]],[[4150,3948],[-63,-5],[-30,28],[-28,14],[15,13],[-9,62],[-25,-1],[28,40],[-6,19],[14,62],[-58,59],[-21,3],[-41,-13],[-6,-15],[-67,6],[-19,14],[-35,6],[-17,16],[-30,-3],[-43,-21],[-36,22],[-11,30],[-84,29],[-41,-6],[-38,25],[-17,-4],[27,-43],[-30,-48],[-2,-32],[-28,-13],[-17,-25],[2,-33],[-39,-5],[-27,21],[-26,2],[-19,-35],[-7,-34],[-28,-22],[54,-73],[-24,-9],[-21,-34],[-26,-8],[-7,-36],[-27,-4],[-35,-59],[17,-24]],[[2038,2935],[-47,-8],[-18,34],[-29,21],[-11,-14],[-35,-6]],[[8215,5871],[29,78],[-6,32],[12,8],[43,-20],[34,9],[3,21],[-34,25]],[[8296,6024],[61,49],[29,1],[53,24],[-7,42],[-68,47],[34,32],[-32,-3],[-71,59],[-75,-25],[0,42],[18,34],[-11,24],[28,30],[-129,-13],[-22,15],[-26,-14],[-15,-31],[-27,-2],[4,26],[-20,0],[-36,-43],[0,-12],[-45,-8],[-26,-28],[-24,3],[0,35],[-60,-9],[2,20],[-19,15],[-64,-6],[-11,12],[-37,-10],[-9,12],[-30,-19],[7,21],[-19,12],[-39,2],[-19,-11],[-65,-8],[-55,-52],[-12,-32],[18,-43],[-30,-7],[-6,-26],[-27,-12]],[[7414,6167],[9,64],[-19,60],[19,39],[-30,36],[-11,34],[-21,14]],[[7361,6414],[60,46],[20,68],[-11,63]],[[7430,6591],[79,6],[30,29],[71,21],[71,-37],[43,-5],[99,5],[19,8],[86,-9],[26,27],[30,2],[11,-19],[66,-2],[32,16],[28,-16],[5,26],[49,-10],[15,23]],[[8190,6656],[45,-3],[136,32],[32,19],[40,-5],[69,-32],[123,12],[29,-14],[80,19],[48,33],[4,31],[47,41],[88,67],[-8,33],[13,7],[32,-18],[60,3],[28,15],[66,18],[51,22],[125,42],[24,-9],[54,11],[60,29],[85,1],[-23,-42],[-43,-49],[9,-30],[28,-20],[2,-52],[32,14],[11,-25],[-37,-33],[-36,4],[-54,-19],[-32,15],[-17,-6],[-26,-38],[-56,-31],[-28,-5]],[[9251,6693],[-51,-33],[-39,6],[-39,-45],[-38,-24],[-69,-21],[-32,-47],[-22,-18],[-20,24],[-23,-23],[-11,-42],[-56,-57],[-12,-47],[6,-31],[-30,-31],[-39,-7],[7,33],[-19,9],[-26,-13],[11,-18],[-63,-58],[-66,-50],[41,-47],[-1,-31]],[[8660,6122],[-19,-22],[-66,-138],[-26,-2],[-13,-40],[4,-37],[-12,-6],[-16,-54]],[[8512,5823],[-64,-6],[-30,31],[-12,-34],[-27,-24],[-2,-19],[-45,-35],[-19,4],[-7,32],[-41,-1]],[[8265,5771],[-26,9],[14,29],[-13,49],[-25,13]],[[9071,6170],[-15,-17],[-19,-50],[8,-23],[39,-13],[8,-22],[-19,-60],[-24,-46],[-25,-14],[-13,-35],[-22,-17],[-28,-61],[-12,-10],[-37,-111],[-30,-50],[-34,23],[-41,11],[-26,-5],[-21,21],[-44,5],[-14,-14],[-41,-3],[-30,39],[-22,-14]],[[8609,5704],[-26,11],[-41,-8],[-43,20],[13,96]],[[8660,6122],[54,-32],[25,41],[44,39],[-17,17],[15,15],[77,3],[54,-18],[47,4],[86,58],[-13,-53],[39,-26]],[[9275,6566],[-15,7],[-30,-22],[-26,-47],[9,-22],[-9,-35],[17,-61],[17,-24],[-47,-35],[5,-55],[-16,-10],[-64,-73],[-45,-19]],[[9251,6693],[17,-19],[-8,-36],[11,-22],[4,-50]],[[8296,6024],[-28,23],[-104,36],[-92,-5],[-24,-15],[-38,13],[-41,-9],[-67,22],[-142,-21],[-23,10],[-86,0],[-47,-7],[-80,21],[-76,28],[-30,-4],[-4,51]],[[1986,7739],[-19,42],[-17,8],[56,51],[17,7],[9,32],[28,12],[60,79],[23,-1],[39,21],[47,40],[-36,8],[-15,15],[8,49],[26,45],[-19,57],[-22,33],[20,38],[51,40],[30,-2],[15,27],[47,4],[26,20],[45,-3],[41,20],[22,37],[-20,23]],[[2448,8441],[50,2],[19,-12],[39,31],[23,2],[56,38]],[[2180,7655],[-206,10],[-5,19],[24,33],[-7,22]],[[996,5921],[-49,84],[-18,62],[-32,32],[-42,66],[4,66],[-7,23],[-94,-9],[-39,11],[-11,26],[-45,47],[-2,55],[26,52],[4,79],[-11,23],[-27,8],[-82,-2],[-52,32],[-55,19],[-13,24],[15,80],[23,45],[93,74],[58,62],[25,64],[80,68],[64,10],[43,-32],[2,-26],[41,-48],[52,3],[81,34],[56,14],[84,2],[103,27],[13,54],[32,37],[54,42],[17,30],[20,66],[42,45],[179,79],[51,68],[63,102],[47,129],[64,27],[61,13],[72,51]],[[3127,6948],[17,-52],[5,-35],[38,-52],[50,-19],[19,-41],[-24,-24],[-30,-11],[20,-20],[30,3],[25,-14],[-88,-32],[-21,-14],[-2,-25],[84,32],[21,15],[94,-8],[45,14],[41,-4],[-19,-24],[9,-13]],[[3441,6624],[-33,-9],[-8,-37],[-24,4],[-40,-12],[-22,-28],[-39,-23],[-34,-7],[-63,-36],[-29,-4],[-46,-40],[-30,-1],[-105,-72],[-32,-34],[-24,2],[-37,-25],[-21,-36],[22,-92],[28,-23],[51,-19],[48,-9],[60,17],[30,-5],[19,27],[30,7],[22,-98],[-16,-11],[-49,4],[-66,-12],[-50,-18],[8,-38],[-36,-31],[33,-27],[30,-2],[29,-30],[-4,-36],[-40,-14],[-11,20],[-28,0],[2,-65],[28,-39],[-11,-23],[-32,-5],[-39,28],[-2,23],[-23,-9],[-13,-23],[-29,17],[-79,4],[-13,25],[-21,-10],[-3,-62],[-42,-28],[-3,-28],[-72,-27],[-16,10],[-10,-40],[-35,8],[-32,32],[-6,25],[15,18],[26,-15],[42,1],[26,39],[-21,23],[17,41],[-15,9],[-2,42],[36,1],[7,42],[-39,59],[-37,-13],[-68,-12],[-78,6],[-17,14],[11,42],[19,-15],[43,6],[0,13],[-30,-6],[-2,37],[11,21],[-65,-6],[-12,-46],[-41,-13],[-54,23],[6,-45],[46,-3],[-3,-31],[-32,-10],[-34,33],[4,-31],[-21,-55],[43,-22],[-28,-25],[-11,-33],[47,-8],[9,-39],[25,-28],[-21,-45],[-2,-30],[11,-47],[-41,-55],[-58,-22],[-43,-46],[11,-15],[43,-9],[14,-16],[-83,-35],[-30,4],[-22,-13]],[[2115,5374],[-32,40],[-30,1],[-21,37],[-43,29],[-22,-8],[-28,32],[-34,-5],[-28,6],[-4,55],[-18,11],[-23,-9],[4,24],[-51,34],[4,41],[17,11],[-24,54],[-32,-30],[-49,41],[-13,22],[21,44],[26,6],[-43,17],[0,33],[-32,-6],[-24,-42],[-62,6],[-26,27],[-53,16],[-22,-25],[-11,27],[-55,22],[21,19],[-39,-4],[-36,8],[-13,16],[-47,-16],[-15,11],[-24,-17],[-19,14],[-39,-8],[-32,12],[-58,-15],[-48,-3],[-62,19]],[[4083,7283],[54,-29],[40,-37],[48,-15],[8,35],[46,-20],[45,-35],[75,-39],[51,-8],[54,-82],[22,15],[30,-30],[100,-56],[46,-20],[32,23],[24,-4],[75,-48],[60,-31],[71,13],[21,-25],[13,-44],[43,-3],[47,-14],[41,0],[43,-36],[28,7],[15,38],[71,-5],[90,-37]],[[5376,6796],[30,-40],[-2,-20],[32,-39],[15,-40],[26,-16],[32,0],[0,-37],[22,-6],[26,-34],[-97,3],[-18,-30],[-30,-14],[-6,-20],[26,6],[58,-26],[0,-34],[-62,-14],[-7,-14],[28,-36],[28,-11],[45,-46],[32,5],[28,-25],[26,-2],[26,-20],[-2,-17],[-41,-15],[-37,21],[-21,-8],[6,-24],[-37,-3],[-3,23],[-24,2],[-47,-42],[-80,-54],[-137,-72],[-16,-52],[14,-22],[-5,-39],[62,-59],[-4,-58]],[[5262,5867],[-43,-12],[20,-46],[-41,-70]],[[5198,5739],[-43,-65],[-41,-12],[-43,1],[-56,29]],[[5015,5692],[-41,55],[19,16],[11,38],[-11,29],[0,44],[26,5],[-10,31],[-26,21],[-37,-12],[-58,11],[-2,-25],[-39,-4],[7,16],[-22,14],[1,21],[-22,-3],[0,23],[-23,-13],[-61,21],[-26,17],[-17,36],[-27,-4],[-15,15],[-46,6],[-13,38],[-57,-15],[-43,5],[-1,-23],[-21,-24],[-2,-24],[-26,-16],[-34,20],[-82,6],[22,34],[13,38],[-67,-19],[17,-21],[-30,-1],[-17,22],[-13,-13],[-28,4],[19,-25],[-19,-9],[-56,-1],[-10,17],[53,37],[-8,24],[-24,12],[-15,43],[-32,0],[-22,-21],[-38,-6],[-61,-32],[9,-27],[-69,-3],[-34,12],[-20,-20],[-38,5],[0,-20],[-19,23],[30,37],[-56,6],[6,-36],[-58,10],[-28,-7],[7,27],[-17,9],[-37,-36],[-9,15],[22,25],[12,43],[-19,5],[-10,31],[-11,-36],[-15,0],[-7,32],[-19,-9],[7,-20],[-9,-29],[-19,18],[-28,2],[-22,-47],[35,-52],[6,-47],[32,-50],[-4,-53],[47,-5],[41,-56],[-4,-22],[-47,-57],[-54,19],[-61,40],[-29,-33],[-26,11],[6,21],[-43,38],[15,21],[-2,36],[-32,61],[49,36],[18,66],[-37,72],[32,27],[7,22],[64,7],[65,22],[0,53],[21,13],[50,88],[-12,18],[9,33],[39,28],[-11,49],[-22,32],[-12,37],[-30,2],[-45,29],[-50,-13],[-60,22],[-13,11],[-51,-12]],[[3230,7798],[26,4],[32,-23],[67,-32],[-39,-32],[-30,-50],[0,-33],[28,-72],[47,21],[49,-23],[31,31],[-15,58],[13,11],[32,-22],[32,-44],[34,-12],[37,-47],[75,-41],[34,-8],[0,-14],[-64,-35],[50,-22],[17,-36],[47,15],[84,-59],[25,-1],[24,-40],[43,10],[7,-10],[77,9],[8,-23],[18,4],[23,-27],[15,0],[26,28]],[[3673,8101],[14,18],[20,-11],[13,34],[17,3],[43,-32],[9,-35],[26,-35],[27,-10],[7,-19],[28,-7],[39,-25],[51,12],[39,-7],[73,-56],[36,0],[22,-21],[-24,-15],[6,-38],[50,-5],[68,-29],[16,3],[41,-18],[25,-27],[71,-26],[11,-13],[-54,-23],[-45,-44],[-49,-20],[-41,-52],[-28,-12],[6,-42],[-23,-38],[-35,-25],[20,-42],[-15,-56],[-35,-10],[-8,-38],[-20,-15],[-4,-37],[13,-5]],[[6721,6093],[-2,-41],[25,-19],[11,-47],[-13,-34],[18,-55],[-26,-13],[-19,7],[12,-31],[-28,-63],[-34,-19],[13,-24],[-22,-4],[-8,-19],[-28,5],[-11,-37],[-41,-6],[-10,18],[-28,-9],[21,-29],[-15,-30],[-30,10],[4,-23],[-38,5],[-61,28],[-19,-20],[-2,-33],[-122,-37],[-35,-18],[-8,-25],[-31,-22],[-42,20],[4,19],[-37,16],[-10,-32],[-57,-9],[22,-22],[-21,-51],[19,-33],[45,-3],[54,-49],[13,5],[81,-5],[19,-7],[-31,-14],[-7,-51],[65,-36],[8,-24],[26,-4],[26,-24],[-17,-7],[27,-27],[20,-40],[-26,-4],[-30,-22]],[[5415,5211],[30,32],[47,20],[17,32],[38,30],[-8,28],[-62,18],[-11,-9],[-9,29],[-25,32],[8,42],[-8,24],[-24,-4],[3,37],[21,26],[-11,25],[-21,-22],[-58,11],[-7,44],[-13,27],[-47,37],[-13,44],[-23,18],[-41,7]],[[5262,5867],[79,-7],[12,10],[45,2],[43,26],[21,-46],[69,16],[2,-27],[58,-49],[37,30],[23,-6],[15,23],[34,17],[24,-18],[13,-29],[58,13],[6,-16],[26,29],[43,20],[78,3],[19,19],[28,3],[-6,25],[34,42],[30,0],[28,-24],[36,15],[30,-24],[17,-38],[46,-2],[-5,-38],[56,-31],[19,46],[31,27],[27,-7],[31,16],[46,-19],[9,27],[46,-6],[6,60],[19,28],[-2,36],[23,30],[27,3],[10,34],[39,2],[40,47],[26,-19],[59,-9],[4,-8]],[[5376,6796],[-8,29],[68,7],[30,20],[58,-46],[99,-16],[25,-28],[3,-25],[-13,-36],[48,-19],[15,5],[40,-19],[34,-38],[48,2],[12,-29],[31,-7],[107,37],[30,-13],[9,-52],[40,-29],[63,29],[58,-23],[34,8],[73,-26],[75,-38],[37,8],[17,19],[58,28],[13,-49],[18,-13],[30,5],[32,-22],[15,21],[32,8],[47,-17],[58,23],[39,4],[36,-32],[33,30],[4,28]],[[6824,6530],[37,4],[0,-17],[30,-23],[6,-31],[-41,-16],[-33,-31],[-38,-18],[-45,-38],[-13,-49],[37,-36],[45,-29],[9,-62],[-39,15],[-71,-42],[32,-43],[-19,-21]],[[6796,6764],[11,24],[-5,58],[31,47],[17,68],[-22,20],[10,15],[87,11],[41,15],[38,25],[71,-36],[11,-50],[-15,-63],[-20,-32],[9,-49],[39,-31],[-39,-24],[-15,-31]],[[7045,6731],[-73,9],[-51,-31],[-61,21],[-34,2],[-30,32]],[[4534,3648],[-58,1],[-22,10],[-44,-21],[-15,21],[-3,42],[-15,41],[6,22],[-27,-7],[-7,21],[-40,-8],[14,22],[-27,57],[-46,49],[-21,13],[-51,-3],[-18,38],[-10,2]],[[4289,4819],[15,40],[2,78],[26,21],[11,24],[0,35],[34,49],[15,-16],[15,46],[35,40],[2,36],[17,19],[19,-12],[37,18],[30,-19],[37,26],[36,10],[9,20],[32,17],[4,57],[30,15],[28,27],[0,27],[43,19],[19,-2],[20,71],[-29,20],[-19,-2],[-47,46],[-56,13],[-39,-18],[-14,24],[34,41],[-23,49],[21,17],[32,-28],[54,13],[49,-13],[155,-9],[41,23],[6,17],[39,14],[6,20]],[[2047,5017],[6,36],[-28,50],[4,43],[41,-4],[17,21],[-40,5],[-35,23],[13,14],[34,-2],[41,32],[33,11],[28,52],[-33,23],[-13,53]],[[4006,1719],[-13,-42]],[[3993,1677],[-28,3],[-20,44],[33,2],[2,-21],[26,14]],[[2450,1746],[-27,-7]],[[2423,1739],[0,28],[34,14],[19,-5],[-26,-30]],[[4005,1396],[0,-56]],[[4005,1340],[-47,32],[7,26],[40,-2]],[[4147,2218],[22,-13],[8,-26],[-6,-43],[-17,-50],[-6,-77],[-12,-53],[-25,-66],[-101,-150],[-4,-21]],[[3993,1677],[-20,-76],[11,-57],[15,-29],[9,-59],[-3,-60]],[[4005,1340],[5,-141],[-4,-32],[-33,9],[-49,0],[51,-9],[0,-8],[-70,13],[-9,12],[-45,-4],[-43,-30],[-13,-21],[15,-44],[-26,-21],[-38,-56],[-50,-66],[-10,-49],[43,-45],[71,-10],[25,12],[35,-55],[-46,31],[-42,7],[-28,-6],[-33,8],[-43,-9],[-83,-37],[-71,-12],[-59,-45],[-21,-35],[-6,-43],[-17,-24],[10,-20],[-4,-35],[-22,-38],[-89,-48],[-18,-19],[-38,-6],[-45,-26],[-69,19],[-67,50]],[[3069,507],[19,7],[16,37],[-3,21],[24,18],[-30,31],[-3,22],[26,52],[-19,13],[-13,36],[32,39],[37,98],[13,15],[-19,38],[-35,-6],[-19,17],[15,50],[-2,39],[11,27],[-11,32],[17,50],[-30,46],[-39,-15],[-41,-27],[-40,32],[-11,39],[6,65],[18,19],[4,29],[-20,30],[-43,17],[-6,37],[28,5],[-39,53],[-43,-3],[-30,6],[35,38],[-45,34],[-54,13],[-4,42],[34,-4],[26,25]],[[3451,1983],[24,-27],[41,-14],[25,19],[1,16],[30,12],[21,71],[26,21],[73,13],[49,-19],[35,7],[21,27],[22,-3],[40,30],[9,37],[30,0],[15,-18],[30,5],[18,-23],[23,0],[-11,18],[69,29],[2,17],[30,19],[73,-2]],[[2034,2686],[-17,11],[-3,25],[-40,27],[12,27],[-19,60],[-38,22],[53,1],[-47,12],[23,30],[-40,-8],[-20,69]],[[8190,6656],[-9,35],[-21,26],[32,66],[-37,55],[-77,-18],[-53,43],[-5,36],[18,34],[49,1],[30,-11],[50,4],[33,22],[35,-2],[13,20],[20,-25],[111,42],[24,37],[-15,26],[43,30],[13,-6],[94,62],[15,19],[28,70],[28,8],[111,4],[33,8],[49,26],[19,19],[37,10],[-4,36],[42,7],[35,44],[45,23],[43,6],[45,35],[24,-13],[26,-38],[26,1],[47,-15],[-13,15],[94,-36],[59,-10],[40,59],[114,59],[25,2],[48,22],[49,-67],[39,5],[15,-9],[-17,-24],[-36,-9],[-33,-27],[15,-27],[-9,-19],[25,-2],[40,34],[56,14],[-11,-27],[48,-74],[-48,-25],[-2,-17],[-45,-33],[7,-20],[-33,-21],[52,-17],[9,16],[51,18],[26,1],[49,-33],[73,-8],[41,10],[71,-49],[-6,-50],[17,-14],[-9,-43],[-30,5],[-62,-52],[-20,-5],[-48,-45],[6,-51],[87,-107],[-37,-11],[-63,34],[6,17],[-34,32],[-59,5],[-14,-16],[-48,-2],[-90,-14],[-45,-22],[-43,-54],[-37,-10],[-27,-33],[-37,-24],[-36,-4],[-33,-39],[-49,-15]],[[8609,5704],[17,-41],[8,-57],[20,-30],[-11,-64],[3,-35],[-11,-22],[-1,-50],[-19,-31],[-25,-10],[-24,18],[-13,-18],[13,-34],[-33,-42],[-3,-35],[12,-17],[-2,-34],[23,-42],[1,-46],[-9,-21],[-41,3],[1,-26],[-20,-17],[4,-22],[-43,10],[-50,40],[-12,-4],[-7,-38],[-26,-14],[-14,50],[14,12],[-20,115],[-7,59],[-19,23],[-5,36],[-23,18],[-11,94],[7,44],[-16,28],[-17,60],[3,30]],[[8253,5594],[4,45],[17,6],[2,82],[-11,44]],[[8253,5594],[-23,-18],[-14,28],[-52,-28],[-23,25],[-7,-24],[10,-51],[-38,-27],[-30,-47],[17,-63],[-34,-30],[-38,-16],[-27,34],[-14,45],[-18,23],[-19,-8],[6,-54],[-25,27],[-7,53],[-17,54],[-32,53],[11,18],[-9,19],[22,10],[2,41],[21,31],[23,2],[7,35],[68,-4],[22,38],[37,-14],[0,24],[26,-4],[19,-24],[15,37],[-2,25],[24,-7],[-7,19],[54,9],[-1,31],[15,15]],[[6835,4986],[10,4],[5,-56],[-11,-25],[-30,17],[26,60]],[[7361,6414],[-15,11],[-2,-54],[-26,-33],[-13,14],[-47,-1],[-76,46],[-26,69],[-36,31],[-21,-24],[51,-39],[-21,-8],[-26,16],[-26,-15],[-41,28],[-17,34],[-50,24],[-51,34],[-15,-31],[50,-14],[12,-34],[-23,3],[-28,-19],[-13,-32],[-53,-25],[-2,-32],[-26,-41],[19,-44],[34,10],[66,-50],[1,-20],[36,-31],[50,-11],[23,16],[24,-18],[-4,-19],[17,-25],[43,-8],[-18,-44],[-40,9],[-5,-10],[-66,9],[-58,-6],[-2,-41],[-34,-58],[-28,2],[-20,22],[-24,-10],[9,-24],[-30,-29],[-11,-37],[41,-49],[88,-42],[26,-17],[54,-7],[29,7],[11,-34],[-23,-16],[-2,-31],[17,-14],[-2,-28],[-22,-24],[-21,-1],[-15,-31],[-3,-45],[61,-56],[17,0],[-28,-58],[7,-17],[85,-11],[-36,-44],[-4,-36],[36,-39],[-13,-35],[15,-59],[17,-36],[-4,-22],[30,-79],[-13,-20],[7,-49],[-16,-11],[-36,22],[37,-39],[23,-78],[-27,-4],[-41,21],[-41,-37],[-26,46],[15,113],[-17,-33],[-19,6],[10,21],[-6,30],[-24,-86],[0,-26],[20,2],[-11,-54],[-17,-26],[-20,7],[15,33],[-8,27],[9,19],[-18,38],[5,-35],[-14,-22],[7,-25],[-22,-21],[-6,32],[-23,1],[-20,26],[13,-68],[-19,-4],[-24,34],[9,47],[-17,28],[1,34],[22,28],[-8,29],[-59,20],[-14,13],[-20,53],[7,-49],[21,-25],[43,-8],[13,-20],[-41,-43],[-23,-43],[-52,-43],[-45,-23],[-77,-14]],[[6824,6530],[26,55],[-4,52],[-26,43],[-35,36],[11,48]],[[7045,6731],[37,-25],[4,-42],[11,11],[38,-18],[35,-34],[30,-3],[54,13],[34,-18],[36,1],[39,-24],[54,-10],[13,9]],[[7103,4894],[-21,-16],[0,27],[21,-11]],[[7017,5009],[-2,-46],[-17,5],[19,41]],[[3069,507],[-41,28],[-38,50],[-110,122],[24,38],[-32,-21],[-59,127],[-19,55],[-9,115],[26,-8],[11,-45],[-13,-48],[37,-12],[15,12],[-33,12],[3,37],[-20,77],[-28,20],[-10,40],[-22,2],[-26,93],[-19,42],[-39,69],[-36,123],[-54,117],[-21,8],[-37,84],[-67,67],[-2,35]],[[2423,1739],[-7,-3],[-26,66],[-60,108],[-34,75]],[[1561,4397],[15,67],[45,78],[5,71],[15,9],[-35,27],[9,20],[-34,46],[30,4],[-15,27],[-37,-19],[9,25],[-33,-4],[28,18],[-32,19],[-19,45],[60,32],[-54,-22],[13,24],[45,25],[26,26],[21,-1],[78,31],[4,11],[-69,-28],[-66,1],[-67,-5],[9,56],[19,28],[32,19],[-30,-5],[-28,-19],[-13,17],[13,63],[24,19],[47,-16],[22,24],[28,-8],[10,15],[-36,6],[-22,-10],[-54,14],[-45,-18],[-25,7],[2,38],[-24,-35],[-30,9],[22,-21],[0,-48],[-20,-24],[-32,-4],[-43,-19],[43,-4],[2,-24],[-34,15],[15,-21],[-34,8],[-1,-23],[56,2],[17,-28],[20,-7],[8,-24],[-19,-45],[-47,-54],[0,-38],[-60,-23],[-56,-33],[-62,-24],[-5,7],[-36,-31],[-50,-12],[-60,-29],[-47,-8],[-8,-10],[-48,-3],[-103,36],[-94,57],[-71,56],[-103,113],[-43,41],[-71,54],[-11,32],[-19,-5],[-80,71],[-38,41],[-16,31],[13,41],[30,21],[0,-28],[37,10],[9,-10],[-11,-30],[13,-11],[51,18],[37,3],[28,38],[2,-25],[21,-7],[28,16],[11,25],[19,-19],[60,37],[63,4],[60,76],[19,41],[41,23],[9,33],[-13,17],[-26,-12],[-2,-45],[-35,-5],[-23,13],[-33,-15],[-98,-21],[-47,-39],[-43,5],[-86,24],[-46,6],[-55,31],[-60,24],[-61,37],[-28,25],[5,20],[-24,-3],[19,22],[-62,39],[20,23],[-26,-2],[-2,30],[45,26],[47,46],[51,20],[-64,-15],[-15,-19],[-62,-24],[-28,-38],[-58,5],[28,23],[-26,29],[8,28],[24,27],[60,14],[101,-1],[0,107],[24,13],[17,-28],[15,25],[24,-21],[30,10],[34,-10],[45,9],[97,-2],[36,-29],[35,-10],[69,1],[32,19],[15,28],[84,20],[57,20],[14,-46],[21,-15],[45,-3],[36,13],[-2,17],[28,15],[20,-4],[30,17],[-37,24],[-6,34],[34,36]],[[4152,2232],[4,5]],[[4152,2232],[-11,27],[-35,44],[-2,-35],[-15,25],[-13,-25],[26,-42],[45,-8]],[[5692,4081],[-39,-61],[-12,-5],[-29,-47],[-42,-45],[-95,-87],[-22,-34],[-105,-44],[-54,-30],[-49,-47],[-19,-33],[-39,-37],[-30,-18],[9,-14],[-52,-21],[-65,-41],[-62,-20],[-83,-46],[-61,-58],[-15,-49],[39,-24],[-9,-44],[-47,-54],[-90,-42],[-76,-25],[-76,16],[-28,-7],[-5,14],[-47,-16],[-36,-96],[0,-18],[-54,-45],[2,-23],[-39,39],[-28,-59],[-2,41],[-15,17],[-69,-4],[-67,-35],[-33,-33],[-24,-57],[-37,-65],[-11,-96],[18,-103],[28,-43],[-5,-75],[-17,-29],[9,-76],[30,-62],[-7,-47],[24,-56]],[[4358,3000],[37,-22],[-15,-10],[-22,32]],[[8394,2023],[4,28],[18,0],[-18,-55],[-4,27]],[[8688,484],[-8,-28],[10,-24],[-14,-19],[-17,54],[29,17]],[[8399,1535],[-33,-7],[22,43],[11,-36]],[[8356,1332],[4,-29],[-14,-17],[-7,-35],[-48,2],[4,31],[-12,45],[53,43],[20,-40]],[[8560,489],[-31,13],[11,26],[5,-30],[15,-9]],[[8542,1796],[-4,-33],[-10,12],[14,21]],[[8654,398],[10,-14],[-40,-7],[-13,16],[5,22],[23,4],[15,-21]],[[8699,414],[4,-25],[-23,23],[19,2]],[[8431,826],[11,-14],[-11,-27],[-17,1],[-7,28],[24,12]],[[8493,1883],[-39,-6],[23,-32],[-12,-9],[5,-32],[-33,-41],[-15,-5],[-6,-65],[8,21],[13,-25],[-13,-53],[2,-28],[-17,-41],[-32,33],[-6,41],[-14,2],[0,36],[-12,4],[17,27],[15,-18],[6,86],[14,28],[12,-14],[26,10],[-2,32],[-24,19],[2,78],[11,17],[-6,51],[21,18],[13,46],[-9,15],[18,62],[-7,31],[36,70],[22,13],[19,-13],[-7,-60],[-14,-8],[26,-25],[-22,-73],[-27,11],[6,-29],[-17,1],[-11,-22],[30,-17],[10,-54],[0,-61],[-10,-21]],[[8521,1721],[8,-21],[-41,30],[22,15],[11,-24]],[[8744,188],[-23,-21],[-11,21],[34,42],[13,-24],[-13,-18]],[[8821,91],[4,-22],[-10,-45],[-23,-24],[-24,58],[-17,23],[-24,7],[11,56],[47,20],[17,-15],[19,-58]],[[3305,9485],[39,0],[13,22],[54,-6],[17,25],[38,24],[56,22],[37,7],[66,46],[69,-8],[120,27],[37,-5],[13,-35],[37,3],[34,-21],[-11,-15],[19,-34],[43,-12],[15,-18],[26,16],[28,-56],[37,-5],[29,43],[33,-19],[26,1],[2,-25],[-37,-37],[3,-39],[-28,-30],[-3,-68],[-26,-36],[-17,-39],[-68,-10],[-13,-25],[-35,-10],[9,-30],[-24,-12],[-53,2],[13,-54],[-22,-22],[4,-25],[-41,-32],[-83,5],[-24,-10],[-45,4],[-15,-20],[34,-65],[9,-38],[-33,0],[-12,-14],[12,-68],[18,-25],[30,-11],[9,-20],[23,4],[78,-21],[-16,-56],[59,-93],[-11,-22],[-62,-50],[-26,4],[-35,-11],[-13,-34],[-57,-5],[-48,35],[-26,56],[-36,-20],[-48,-1],[-23,-13]],[[2448,8441],[-36,22],[-58,23],[-41,-7],[-22,10],[-40,-5],[-20,12],[-11,30],[18,79],[-24,-20],[-45,-6],[-52,8],[-4,15],[-116,50],[-26,20],[-28,-6],[-68,37],[8,23],[-17,17],[-8,47],[19,21],[2,34],[-21,23],[8,39],[-6,55],[-22,32],[-15,86],[-23,29],[15,67],[53,9],[33,55],[64,19],[45,23],[28,43],[0,43],[-82,21],[-40,2],[-20,33],[13,34],[22,12],[-5,24],[-92,4],[-69,21],[-58,37],[5,40],[-22,15],[-73,-1],[-21,-12],[-52,5],[-49,17],[25,36],[-19,31],[19,50],[33,3],[66,38],[7,26],[30,3],[38,44],[-8,29],[38,13],[45,-5],[35,12],[161,-14],[0,20],[-60,28],[0,12],[54,-7],[27,-14],[50,0],[8,20],[33,1],[62,33],[49,-10],[9,22],[39,7],[40,-12],[26,-36],[13,19],[65,10],[73,-21],[29,-22],[5,-38],[28,-10],[26,16],[55,-15],[50,-34],[34,-51],[60,-12],[30,-35],[52,-3],[13,-23],[47,-17],[35,0],[30,-26],[8,-66],[21,-17],[57,-13],[29,-27],[39,-10],[48,3],[55,-45],[1,-34],[51,-6],[49,12]]],"transform":{"scale":[0.0029221293711354057,0.0030310846019431905],"translate":[68.14346886579557,6.745531724809325]}};

/***/ }),
/* 36 */
/***/ (function(module) {

module.exports = [{"name":"Afghanistan","alpha-2":"AF","alpha-3":"AFG","country-code":"004","iso_3166-2":"ISO 3166-2:AF","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Åland Islands","alpha-2":"AX","alpha-3":"ALA","country-code":248,"iso_3166-2":"ISO 3166-2:AX","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Albania","alpha-2":"AL","alpha-3":"ALB","country-code":"008","iso_3166-2":"ISO 3166-2:AL","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Algeria","alpha-2":"DZ","alpha-3":"DZA","country-code":"012","iso_3166-2":"ISO 3166-2:DZ","region":"Africa","sub-region":"Northern Africa","region-code":"002","sub-region-code":"015"},{"name":"American Samoa","alpha-2":"AS","alpha-3":"ASM","country-code":"016","iso_3166-2":"ISO 3166-2:AS","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Andorra","alpha-2":"AD","alpha-3":"AND","country-code":"020","iso_3166-2":"ISO 3166-2:AD","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Angola","alpha-2":"AO","alpha-3":"AGO","country-code":"024","iso_3166-2":"ISO 3166-2:AO","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Anguilla","alpha-2":"AI","alpha-3":"AIA","country-code":660,"iso_3166-2":"ISO 3166-2:AI","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Antarctica","alpha-2":"AQ","alpha-3":"ATA","country-code":"010","iso_3166-2":"ISO 3166-2:AQ","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Antigua and Barbuda","alpha-2":"AG","alpha-3":"ATG","country-code":"028","iso_3166-2":"ISO 3166-2:AG","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Argentina","alpha-2":"AR","alpha-3":"ARG","country-code":"032","iso_3166-2":"ISO 3166-2:AR","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Armenia","alpha-2":"AM","alpha-3":"ARM","country-code":"051","iso_3166-2":"ISO 3166-2:AM","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Aruba","alpha-2":"AW","alpha-3":"ABW","country-code":533,"iso_3166-2":"ISO 3166-2:AW","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Australia","alpha-2":"AU","alpha-3":"AUS","country-code":"036","iso_3166-2":"ISO 3166-2:AU","region":"Oceania","sub-region":"Australia and New Zealand","region-code":"009","sub-region-code":"053"},{"name":"Austria","alpha-2":"AT","alpha-3":"AUT","country-code":"040","iso_3166-2":"ISO 3166-2:AT","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"Azerbaijan","alpha-2":"AZ","alpha-3":"AZE","country-code":"031","iso_3166-2":"ISO 3166-2:AZ","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Bahamas","alpha-2":"BS","alpha-3":"BHS","country-code":"044","iso_3166-2":"ISO 3166-2:BS","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Bahrain","alpha-2":"BH","alpha-3":"BHR","country-code":"048","iso_3166-2":"ISO 3166-2:BH","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Bangladesh","alpha-2":"BD","alpha-3":"BGD","country-code":"050","iso_3166-2":"ISO 3166-2:BD","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Barbados","alpha-2":"BB","alpha-3":"BRB","country-code":"052","iso_3166-2":"ISO 3166-2:BB","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Belarus","alpha-2":"BY","alpha-3":"BLR","country-code":112,"iso_3166-2":"ISO 3166-2:BY","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Belgium","alpha-2":"BE","alpha-3":"BEL","country-code":"056","iso_3166-2":"ISO 3166-2:BE","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"Belize","alpha-2":"BZ","alpha-3":"BLZ","country-code":"084","iso_3166-2":"ISO 3166-2:BZ","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Benin","alpha-2":"BJ","alpha-3":"BEN","country-code":204,"iso_3166-2":"ISO 3166-2:BJ","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Bermuda","alpha-2":"BM","alpha-3":"BMU","country-code":"060","iso_3166-2":"ISO 3166-2:BM","region":"Americas","sub-region":"Northern America","region-code":"019","sub-region-code":"021"},{"name":"Bhutan","alpha-2":"BT","alpha-3":"BTN","country-code":"064","iso_3166-2":"ISO 3166-2:BT","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Bolivia (Plurinational State of)","alpha-2":"BO","alpha-3":"BOL","country-code":"068","iso_3166-2":"ISO 3166-2:BO","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Bonaire, Sint Eustatius and Saba","alpha-2":"BQ","alpha-3":"BES","country-code":535,"iso_3166-2":"ISO 3166-2:BQ","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Bosnia and Herzegovina","alpha-2":"BA","alpha-3":"BIH","country-code":"070","iso_3166-2":"ISO 3166-2:BA","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Botswana","alpha-2":"BW","alpha-3":"BWA","country-code":"072","iso_3166-2":"ISO 3166-2:BW","region":"Africa","sub-region":"Southern Africa","region-code":"002","sub-region-code":"018"},{"name":"Bouvet Island","alpha-2":"BV","alpha-3":"BVT","country-code":"074","iso_3166-2":"ISO 3166-2:BV","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Brazil","alpha-2":"BR","alpha-3":"BRA","country-code":"076","iso_3166-2":"ISO 3166-2:BR","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"British Indian Ocean Territory","alpha-2":"IO","alpha-3":"IOT","country-code":"086","iso_3166-2":"ISO 3166-2:IO","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Brunei Darussalam","alpha-2":"BN","alpha-3":"BRN","country-code":"096","iso_3166-2":"ISO 3166-2:BN","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Bulgaria","alpha-2":"BG","alpha-3":"BGR","country-code":100,"iso_3166-2":"ISO 3166-2:BG","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Burkina Faso","alpha-2":"BF","alpha-3":"BFA","country-code":854,"iso_3166-2":"ISO 3166-2:BF","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Burundi","alpha-2":"BI","alpha-3":"BDI","country-code":108,"iso_3166-2":"ISO 3166-2:BI","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Cambodia","alpha-2":"KH","alpha-3":"KHM","country-code":116,"iso_3166-2":"ISO 3166-2:KH","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Cameroon","alpha-2":"CM","alpha-3":"CMR","country-code":120,"iso_3166-2":"ISO 3166-2:CM","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Canada","alpha-2":"CA","alpha-3":"CAN","country-code":124,"iso_3166-2":"ISO 3166-2:CA","region":"Americas","sub-region":"Northern America","region-code":"019","sub-region-code":"021"},{"name":"Cabo Verde","alpha-2":"CV","alpha-3":"CPV","country-code":132,"iso_3166-2":"ISO 3166-2:CV","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Cayman Islands","alpha-2":"KY","alpha-3":"CYM","country-code":136,"iso_3166-2":"ISO 3166-2:KY","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Central African Republic","alpha-2":"CF","alpha-3":"CAF","country-code":140,"iso_3166-2":"ISO 3166-2:CF","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Chad","alpha-2":"TD","alpha-3":"TCD","country-code":148,"iso_3166-2":"ISO 3166-2:TD","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Chile","alpha-2":"CL","alpha-3":"CHL","country-code":152,"iso_3166-2":"ISO 3166-2:CL","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"China","alpha-2":"CN","alpha-3":"CHN","country-code":156,"iso_3166-2":"ISO 3166-2:CN","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Christmas Island","alpha-2":"CX","alpha-3":"CXR","country-code":162,"iso_3166-2":"ISO 3166-2:CX","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Cocos (Keeling) Islands","alpha-2":"CC","alpha-3":"CCK","country-code":166,"iso_3166-2":"ISO 3166-2:CC","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Colombia","alpha-2":"CO","alpha-3":"COL","country-code":170,"iso_3166-2":"ISO 3166-2:CO","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Comoros","alpha-2":"KM","alpha-3":"COM","country-code":174,"iso_3166-2":"ISO 3166-2:KM","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Congo","alpha-2":"CG","alpha-3":"COG","country-code":178,"iso_3166-2":"ISO 3166-2:CG","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Congo (Democratic Republic of the)","alpha-2":"CD","alpha-3":"COD","country-code":180,"iso_3166-2":"ISO 3166-2:CD","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Cook Islands","alpha-2":"CK","alpha-3":"COK","country-code":184,"iso_3166-2":"ISO 3166-2:CK","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Costa Rica","alpha-2":"CR","alpha-3":"CRI","country-code":188,"iso_3166-2":"ISO 3166-2:CR","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Côte d'Ivoire","alpha-2":"CI","alpha-3":"CIV","country-code":384,"iso_3166-2":"ISO 3166-2:CI","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Croatia","alpha-2":"HR","alpha-3":"HRV","country-code":191,"iso_3166-2":"ISO 3166-2:HR","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Cuba","alpha-2":"CU","alpha-3":"CUB","country-code":192,"iso_3166-2":"ISO 3166-2:CU","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Curaçao","alpha-2":"CW","alpha-3":"CUW","country-code":531,"iso_3166-2":"ISO 3166-2:CW","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Cyprus","alpha-2":"CY","alpha-3":"CYP","country-code":196,"iso_3166-2":"ISO 3166-2:CY","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Czech Republic","alpha-2":"CZ","alpha-3":"CZE","country-code":203,"iso_3166-2":"ISO 3166-2:CZ","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Denmark","alpha-2":"DK","alpha-3":"DNK","country-code":208,"iso_3166-2":"ISO 3166-2:DK","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Djibouti","alpha-2":"DJ","alpha-3":"DJI","country-code":262,"iso_3166-2":"ISO 3166-2:DJ","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Dominica","alpha-2":"DM","alpha-3":"DMA","country-code":212,"iso_3166-2":"ISO 3166-2:DM","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Dominican Republic","alpha-2":"DO","alpha-3":"DOM","country-code":214,"iso_3166-2":"ISO 3166-2:DO","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Ecuador","alpha-2":"EC","alpha-3":"ECU","country-code":218,"iso_3166-2":"ISO 3166-2:EC","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Egypt","alpha-2":"EG","alpha-3":"EGY","country-code":818,"iso_3166-2":"ISO 3166-2:EG","region":"Africa","sub-region":"Northern Africa","region-code":"002","sub-region-code":"015"},{"name":"El Salvador","alpha-2":"SV","alpha-3":"SLV","country-code":222,"iso_3166-2":"ISO 3166-2:SV","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Equatorial Guinea","alpha-2":"GQ","alpha-3":"GNQ","country-code":226,"iso_3166-2":"ISO 3166-2:GQ","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Eritrea","alpha-2":"ER","alpha-3":"ERI","country-code":232,"iso_3166-2":"ISO 3166-2:ER","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Estonia","alpha-2":"EE","alpha-3":"EST","country-code":233,"iso_3166-2":"ISO 3166-2:EE","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Ethiopia","alpha-2":"ET","alpha-3":"ETH","country-code":231,"iso_3166-2":"ISO 3166-2:ET","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Falkland Islands (Malvinas)","alpha-2":"FK","alpha-3":"FLK","country-code":238,"iso_3166-2":"ISO 3166-2:FK","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Faroe Islands","alpha-2":"FO","alpha-3":"FRO","country-code":234,"iso_3166-2":"ISO 3166-2:FO","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Fiji","alpha-2":"FJ","alpha-3":"FJI","country-code":242,"iso_3166-2":"ISO 3166-2:FJ","region":"Oceania","sub-region":"Melanesia","region-code":"009","sub-region-code":"054"},{"name":"Finland","alpha-2":"FI","alpha-3":"FIN","country-code":246,"iso_3166-2":"ISO 3166-2:FI","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"France","alpha-2":"FR","alpha-3":"FRA","country-code":250,"iso_3166-2":"ISO 3166-2:FR","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"French Guiana","alpha-2":"GF","alpha-3":"GUF","country-code":254,"iso_3166-2":"ISO 3166-2:GF","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"French Polynesia","alpha-2":"PF","alpha-3":"PYF","country-code":258,"iso_3166-2":"ISO 3166-2:PF","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"French Southern Territories","alpha-2":"TF","alpha-3":"ATF","country-code":260,"iso_3166-2":"ISO 3166-2:TF","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Gabon","alpha-2":"GA","alpha-3":"GAB","country-code":266,"iso_3166-2":"ISO 3166-2:GA","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Gambia","alpha-2":"GM","alpha-3":"GMB","country-code":270,"iso_3166-2":"ISO 3166-2:GM","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Georgia","alpha-2":"GE","alpha-3":"GEO","country-code":268,"iso_3166-2":"ISO 3166-2:GE","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Germany","alpha-2":"DE","alpha-3":"DEU","country-code":276,"iso_3166-2":"ISO 3166-2:DE","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"Ghana","alpha-2":"GH","alpha-3":"GHA","country-code":288,"iso_3166-2":"ISO 3166-2:GH","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Gibraltar","alpha-2":"GI","alpha-3":"GIB","country-code":292,"iso_3166-2":"ISO 3166-2:GI","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Greece","alpha-2":"GR","alpha-3":"GRC","country-code":300,"iso_3166-2":"ISO 3166-2:GR","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Greenland","alpha-2":"GL","alpha-3":"GRL","country-code":304,"iso_3166-2":"ISO 3166-2:GL","region":"Americas","sub-region":"Northern America","region-code":"019","sub-region-code":"021"},{"name":"Grenada","alpha-2":"GD","alpha-3":"GRD","country-code":308,"iso_3166-2":"ISO 3166-2:GD","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Guadeloupe","alpha-2":"GP","alpha-3":"GLP","country-code":312,"iso_3166-2":"ISO 3166-2:GP","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Guam","alpha-2":"GU","alpha-3":"GUM","country-code":316,"iso_3166-2":"ISO 3166-2:GU","region":"Oceania","sub-region":"Micronesia","region-code":"009","sub-region-code":"057"},{"name":"Guatemala","alpha-2":"GT","alpha-3":"GTM","country-code":320,"iso_3166-2":"ISO 3166-2:GT","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Guernsey","alpha-2":"GG","alpha-3":"GGY","country-code":831,"iso_3166-2":"ISO 3166-2:GG","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Guinea","alpha-2":"GN","alpha-3":"GIN","country-code":324,"iso_3166-2":"ISO 3166-2:GN","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Guinea-Bissau","alpha-2":"GW","alpha-3":"GNB","country-code":624,"iso_3166-2":"ISO 3166-2:GW","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Guyana","alpha-2":"GY","alpha-3":"GUY","country-code":328,"iso_3166-2":"ISO 3166-2:GY","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Haiti","alpha-2":"HT","alpha-3":"HTI","country-code":332,"iso_3166-2":"ISO 3166-2:HT","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Heard Island and McDonald Islands","alpha-2":"HM","alpha-3":"HMD","country-code":334,"iso_3166-2":"ISO 3166-2:HM","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Holy See","alpha-2":"VA","alpha-3":"VAT","country-code":336,"iso_3166-2":"ISO 3166-2:VA","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Honduras","alpha-2":"HN","alpha-3":"HND","country-code":340,"iso_3166-2":"ISO 3166-2:HN","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Hong Kong","alpha-2":"HK","alpha-3":"HKG","country-code":344,"iso_3166-2":"ISO 3166-2:HK","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Hungary","alpha-2":"HU","alpha-3":"HUN","country-code":348,"iso_3166-2":"ISO 3166-2:HU","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Iceland","alpha-2":"IS","alpha-3":"ISL","country-code":352,"iso_3166-2":"ISO 3166-2:IS","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"India","alpha-2":"IN","alpha-3":"IND","country-code":356,"iso_3166-2":"ISO 3166-2:IN","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Indonesia","alpha-2":"ID","alpha-3":"IDN","country-code":360,"iso_3166-2":"ISO 3166-2:ID","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Iran (Islamic Republic of)","alpha-2":"IR","alpha-3":"IRN","country-code":364,"iso_3166-2":"ISO 3166-2:IR","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Iraq","alpha-2":"IQ","alpha-3":"IRQ","country-code":368,"iso_3166-2":"ISO 3166-2:IQ","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Ireland","alpha-2":"IE","alpha-3":"IRL","country-code":372,"iso_3166-2":"ISO 3166-2:IE","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Isle of Man","alpha-2":"IM","alpha-3":"IMN","country-code":833,"iso_3166-2":"ISO 3166-2:IM","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Israel","alpha-2":"IL","alpha-3":"ISR","country-code":376,"iso_3166-2":"ISO 3166-2:IL","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Italy","alpha-2":"IT","alpha-3":"ITA","country-code":380,"iso_3166-2":"ISO 3166-2:IT","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Jamaica","alpha-2":"JM","alpha-3":"JAM","country-code":388,"iso_3166-2":"ISO 3166-2:JM","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Japan","alpha-2":"JP","alpha-3":"JPN","country-code":392,"iso_3166-2":"ISO 3166-2:JP","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Jersey","alpha-2":"JE","alpha-3":"JEY","country-code":832,"iso_3166-2":"ISO 3166-2:JE","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Jordan","alpha-2":"JO","alpha-3":"JOR","country-code":400,"iso_3166-2":"ISO 3166-2:JO","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Kazakhstan","alpha-2":"KZ","alpha-3":"KAZ","country-code":398,"iso_3166-2":"ISO 3166-2:KZ","region":"Asia","sub-region":"Central Asia","region-code":142,"sub-region-code":143},{"name":"Kenya","alpha-2":"KE","alpha-3":"KEN","country-code":404,"iso_3166-2":"ISO 3166-2:KE","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Kiribati","alpha-2":"KI","alpha-3":"KIR","country-code":296,"iso_3166-2":"ISO 3166-2:KI","region":"Oceania","sub-region":"Micronesia","region-code":"009","sub-region-code":"057"},{"name":"Korea (Democratic People's Republic of)","alpha-2":"KP","alpha-3":"PRK","country-code":408,"iso_3166-2":"ISO 3166-2:KP","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Korea (Republic of)","alpha-2":"KR","alpha-3":"KOR","country-code":410,"iso_3166-2":"ISO 3166-2:KR","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Kuwait","alpha-2":"KW","alpha-3":"KWT","country-code":414,"iso_3166-2":"ISO 3166-2:KW","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Kyrgyzstan","alpha-2":"KG","alpha-3":"KGZ","country-code":417,"iso_3166-2":"ISO 3166-2:KG","region":"Asia","sub-region":"Central Asia","region-code":142,"sub-region-code":143},{"name":"Lao People's Democratic Republic","alpha-2":"LA","alpha-3":"LAO","country-code":418,"iso_3166-2":"ISO 3166-2:LA","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Latvia","alpha-2":"LV","alpha-3":"LVA","country-code":428,"iso_3166-2":"ISO 3166-2:LV","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Lebanon","alpha-2":"LB","alpha-3":"LBN","country-code":422,"iso_3166-2":"ISO 3166-2:LB","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Lesotho","alpha-2":"LS","alpha-3":"LSO","country-code":426,"iso_3166-2":"ISO 3166-2:LS","region":"Africa","sub-region":"Southern Africa","region-code":"002","sub-region-code":"018"},{"name":"Liberia","alpha-2":"LR","alpha-3":"LBR","country-code":430,"iso_3166-2":"ISO 3166-2:LR","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Libya","alpha-2":"LY","alpha-3":"LBY","country-code":434,"iso_3166-2":"ISO 3166-2:LY","region":"Africa","sub-region":"Northern Africa","region-code":"002","sub-region-code":"015"},{"name":"Liechtenstein","alpha-2":"LI","alpha-3":"LIE","country-code":438,"iso_3166-2":"ISO 3166-2:LI","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"Lithuania","alpha-2":"LT","alpha-3":"LTU","country-code":440,"iso_3166-2":"ISO 3166-2:LT","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Luxembourg","alpha-2":"LU","alpha-3":"LUX","country-code":442,"iso_3166-2":"ISO 3166-2:LU","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"Macao","alpha-2":"MO","alpha-3":"MAC","country-code":446,"iso_3166-2":"ISO 3166-2:MO","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Macedonia (the former Yugoslav Republic of)","alpha-2":"MK","alpha-3":"MKD","country-code":807,"iso_3166-2":"ISO 3166-2:MK","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Madagascar","alpha-2":"MG","alpha-3":"MDG","country-code":450,"iso_3166-2":"ISO 3166-2:MG","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Malawi","alpha-2":"MW","alpha-3":"MWI","country-code":454,"iso_3166-2":"ISO 3166-2:MW","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Malaysia","alpha-2":"MY","alpha-3":"MYS","country-code":458,"iso_3166-2":"ISO 3166-2:MY","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Maldives","alpha-2":"MV","alpha-3":"MDV","country-code":462,"iso_3166-2":"ISO 3166-2:MV","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Mali","alpha-2":"ML","alpha-3":"MLI","country-code":466,"iso_3166-2":"ISO 3166-2:ML","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Malta","alpha-2":"MT","alpha-3":"MLT","country-code":470,"iso_3166-2":"ISO 3166-2:MT","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Marshall Islands","alpha-2":"MH","alpha-3":"MHL","country-code":584,"iso_3166-2":"ISO 3166-2:MH","region":"Oceania","sub-region":"Micronesia","region-code":"009","sub-region-code":"057"},{"name":"Martinique","alpha-2":"MQ","alpha-3":"MTQ","country-code":474,"iso_3166-2":"ISO 3166-2:MQ","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Mauritania","alpha-2":"MR","alpha-3":"MRT","country-code":478,"iso_3166-2":"ISO 3166-2:MR","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Mauritius","alpha-2":"MU","alpha-3":"MUS","country-code":480,"iso_3166-2":"ISO 3166-2:MU","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Mayotte","alpha-2":"YT","alpha-3":"MYT","country-code":175,"iso_3166-2":"ISO 3166-2:YT","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Mexico","alpha-2":"MX","alpha-3":"MEX","country-code":484,"iso_3166-2":"ISO 3166-2:MX","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Micronesia (Federated States of)","alpha-2":"FM","alpha-3":"FSM","country-code":583,"iso_3166-2":"ISO 3166-2:FM","region":"Oceania","sub-region":"Micronesia","region-code":"009","sub-region-code":"057"},{"name":"Moldova (Republic of)","alpha-2":"MD","alpha-3":"MDA","country-code":498,"iso_3166-2":"ISO 3166-2:MD","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Monaco","alpha-2":"MC","alpha-3":"MCO","country-code":492,"iso_3166-2":"ISO 3166-2:MC","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"Mongolia","alpha-2":"MN","alpha-3":"MNG","country-code":496,"iso_3166-2":"ISO 3166-2:MN","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Montenegro","alpha-2":"ME","alpha-3":"MNE","country-code":499,"iso_3166-2":"ISO 3166-2:ME","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Montserrat","alpha-2":"MS","alpha-3":"MSR","country-code":500,"iso_3166-2":"ISO 3166-2:MS","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Morocco","alpha-2":"MA","alpha-3":"MAR","country-code":504,"iso_3166-2":"ISO 3166-2:MA","region":"Africa","sub-region":"Northern Africa","region-code":"002","sub-region-code":"015"},{"name":"Mozambique","alpha-2":"MZ","alpha-3":"MOZ","country-code":508,"iso_3166-2":"ISO 3166-2:MZ","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Myanmar","alpha-2":"MM","alpha-3":"MMR","country-code":104,"iso_3166-2":"ISO 3166-2:MM","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Namibia","alpha-2":"NA","alpha-3":"NAM","country-code":516,"iso_3166-2":"ISO 3166-2:NA","region":"Africa","sub-region":"Southern Africa","region-code":"002","sub-region-code":"018"},{"name":"Nauru","alpha-2":"NR","alpha-3":"NRU","country-code":520,"iso_3166-2":"ISO 3166-2:NR","region":"Oceania","sub-region":"Micronesia","region-code":"009","sub-region-code":"057"},{"name":"Nepal","alpha-2":"NP","alpha-3":"NPL","country-code":524,"iso_3166-2":"ISO 3166-2:NP","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Netherlands","alpha-2":"NL","alpha-3":"NLD","country-code":528,"iso_3166-2":"ISO 3166-2:NL","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"New Caledonia","alpha-2":"NC","alpha-3":"NCL","country-code":540,"iso_3166-2":"ISO 3166-2:NC","region":"Oceania","sub-region":"Melanesia","region-code":"009","sub-region-code":"054"},{"name":"New Zealand","alpha-2":"NZ","alpha-3":"NZL","country-code":554,"iso_3166-2":"ISO 3166-2:NZ","region":"Oceania","sub-region":"Australia and New Zealand","region-code":"009","sub-region-code":"053"},{"name":"Nicaragua","alpha-2":"NI","alpha-3":"NIC","country-code":558,"iso_3166-2":"ISO 3166-2:NI","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Niger","alpha-2":"NE","alpha-3":"NER","country-code":562,"iso_3166-2":"ISO 3166-2:NE","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Nigeria","alpha-2":"NG","alpha-3":"NGA","country-code":566,"iso_3166-2":"ISO 3166-2:NG","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Niue","alpha-2":"NU","alpha-3":"NIU","country-code":570,"iso_3166-2":"ISO 3166-2:NU","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Norfolk Island","alpha-2":"NF","alpha-3":"NFK","country-code":574,"iso_3166-2":"ISO 3166-2:NF","region":"Oceania","sub-region":"Australia and New Zealand","region-code":"009","sub-region-code":"053"},{"name":"Northern Mariana Islands","alpha-2":"MP","alpha-3":"MNP","country-code":580,"iso_3166-2":"ISO 3166-2:MP","region":"Oceania","sub-region":"Micronesia","region-code":"009","sub-region-code":"057"},{"name":"Norway","alpha-2":"NO","alpha-3":"NOR","country-code":578,"iso_3166-2":"ISO 3166-2:NO","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Oman","alpha-2":"OM","alpha-3":"OMN","country-code":512,"iso_3166-2":"ISO 3166-2:OM","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Pakistan","alpha-2":"PK","alpha-3":"PAK","country-code":586,"iso_3166-2":"ISO 3166-2:PK","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Palau","alpha-2":"PW","alpha-3":"PLW","country-code":585,"iso_3166-2":"ISO 3166-2:PW","region":"Oceania","sub-region":"Micronesia","region-code":"009","sub-region-code":"057"},{"name":"Palestine, State of","alpha-2":"PS","alpha-3":"PSE","country-code":275,"iso_3166-2":"ISO 3166-2:PS","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Panama","alpha-2":"PA","alpha-3":"PAN","country-code":591,"iso_3166-2":"ISO 3166-2:PA","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Papua New Guinea","alpha-2":"PG","alpha-3":"PNG","country-code":598,"iso_3166-2":"ISO 3166-2:PG","region":"Oceania","sub-region":"Melanesia","region-code":"009","sub-region-code":"054"},{"name":"Paraguay","alpha-2":"PY","alpha-3":"PRY","country-code":600,"iso_3166-2":"ISO 3166-2:PY","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Peru","alpha-2":"PE","alpha-3":"PER","country-code":604,"iso_3166-2":"ISO 3166-2:PE","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Philippines","alpha-2":"PH","alpha-3":"PHL","country-code":608,"iso_3166-2":"ISO 3166-2:PH","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Pitcairn","alpha-2":"PN","alpha-3":"PCN","country-code":612,"iso_3166-2":"ISO 3166-2:PN","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Poland","alpha-2":"PL","alpha-3":"POL","country-code":616,"iso_3166-2":"ISO 3166-2:PL","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Portugal","alpha-2":"PT","alpha-3":"PRT","country-code":620,"iso_3166-2":"ISO 3166-2:PT","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Puerto Rico","alpha-2":"PR","alpha-3":"PRI","country-code":630,"iso_3166-2":"ISO 3166-2:PR","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Qatar","alpha-2":"QA","alpha-3":"QAT","country-code":634,"iso_3166-2":"ISO 3166-2:QA","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Réunion","alpha-2":"RE","alpha-3":"REU","country-code":638,"iso_3166-2":"ISO 3166-2:RE","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Romania","alpha-2":"RO","alpha-3":"ROU","country-code":642,"iso_3166-2":"ISO 3166-2:RO","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Russian Federation","alpha-2":"RU","alpha-3":"RUS","country-code":643,"iso_3166-2":"ISO 3166-2:RU","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Rwanda","alpha-2":"RW","alpha-3":"RWA","country-code":646,"iso_3166-2":"ISO 3166-2:RW","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Saint Barthélemy","alpha-2":"BL","alpha-3":"BLM","country-code":652,"iso_3166-2":"ISO 3166-2:BL","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Saint Helena, Ascension and Tristan da Cunha","alpha-2":"SH","alpha-3":"SHN","country-code":654,"iso_3166-2":"ISO 3166-2:SH","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Saint Kitts and Nevis","alpha-2":"KN","alpha-3":"KNA","country-code":659,"iso_3166-2":"ISO 3166-2:KN","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Saint Lucia","alpha-2":"LC","alpha-3":"LCA","country-code":662,"iso_3166-2":"ISO 3166-2:LC","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Saint Martin (French part)","alpha-2":"MF","alpha-3":"MAF","country-code":663,"iso_3166-2":"ISO 3166-2:MF","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Saint Pierre and Miquelon","alpha-2":"PM","alpha-3":"SPM","country-code":666,"iso_3166-2":"ISO 3166-2:PM","region":"Americas","sub-region":"Northern America","region-code":"019","sub-region-code":"021"},{"name":"Saint Vincent and the Grenadines","alpha-2":"VC","alpha-3":"VCT","country-code":670,"iso_3166-2":"ISO 3166-2:VC","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Samoa","alpha-2":"WS","alpha-3":"WSM","country-code":882,"iso_3166-2":"ISO 3166-2:WS","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"San Marino","alpha-2":"SM","alpha-3":"SMR","country-code":674,"iso_3166-2":"ISO 3166-2:SM","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Sao Tome and Principe","alpha-2":"ST","alpha-3":"STP","country-code":678,"iso_3166-2":"ISO 3166-2:ST","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Saudi Arabia","alpha-2":"SA","alpha-3":"SAU","country-code":682,"iso_3166-2":"ISO 3166-2:SA","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Senegal","alpha-2":"SN","alpha-3":"SEN","country-code":686,"iso_3166-2":"ISO 3166-2:SN","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Serbia","alpha-2":"RS","alpha-3":"SRB","country-code":688,"iso_3166-2":"ISO 3166-2:RS","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Seychelles","alpha-2":"SC","alpha-3":"SYC","country-code":690,"iso_3166-2":"ISO 3166-2:SC","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Sierra Leone","alpha-2":"SL","alpha-3":"SLE","country-code":694,"iso_3166-2":"ISO 3166-2:SL","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Singapore","alpha-2":"SG","alpha-3":"SGP","country-code":702,"iso_3166-2":"ISO 3166-2:SG","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Sint Maarten (Dutch part)","alpha-2":"SX","alpha-3":"SXM","country-code":534,"iso_3166-2":"ISO 3166-2:SX","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Slovakia","alpha-2":"SK","alpha-3":"SVK","country-code":703,"iso_3166-2":"ISO 3166-2:SK","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Slovenia","alpha-2":"SI","alpha-3":"SVN","country-code":705,"iso_3166-2":"ISO 3166-2:SI","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Solomon Islands","alpha-2":"SB","alpha-3":"SLB","country-code":"090","iso_3166-2":"ISO 3166-2:SB","region":"Oceania","sub-region":"Melanesia","region-code":"009","sub-region-code":"054"},{"name":"Somalia","alpha-2":"SO","alpha-3":"SOM","country-code":706,"iso_3166-2":"ISO 3166-2:SO","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"South Africa","alpha-2":"ZA","alpha-3":"ZAF","country-code":710,"iso_3166-2":"ISO 3166-2:ZA","region":"Africa","sub-region":"Southern Africa","region-code":"002","sub-region-code":"018"},{"name":"South Georgia and the South Sandwich Islands","alpha-2":"GS","alpha-3":"SGS","country-code":239,"iso_3166-2":"ISO 3166-2:GS","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"South Sudan","alpha-2":"SS","alpha-3":"SSD","country-code":728,"iso_3166-2":"ISO 3166-2:SS","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Spain","alpha-2":"ES","alpha-3":"ESP","country-code":724,"iso_3166-2":"ISO 3166-2:ES","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Sri Lanka","alpha-2":"LK","alpha-3":"LKA","country-code":144,"iso_3166-2":"ISO 3166-2:LK","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Sudan","alpha-2":"SD","alpha-3":"SDN","country-code":729,"iso_3166-2":"ISO 3166-2:SD","region":"Africa","sub-region":"Northern Africa","region-code":"002","sub-region-code":"015"},{"name":"Suriname","alpha-2":"SR","alpha-3":"SUR","country-code":740,"iso_3166-2":"ISO 3166-2:SR","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Svalbard and Jan Mayen","alpha-2":"SJ","alpha-3":"SJM","country-code":744,"iso_3166-2":"ISO 3166-2:SJ","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Swaziland","alpha-2":"SZ","alpha-3":"SWZ","country-code":748,"iso_3166-2":"ISO 3166-2:SZ","region":"Africa","sub-region":"Southern Africa","region-code":"002","sub-region-code":"018"},{"name":"Sweden","alpha-2":"SE","alpha-3":"SWE","country-code":752,"iso_3166-2":"ISO 3166-2:SE","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Switzerland","alpha-2":"CH","alpha-3":"CHE","country-code":756,"iso_3166-2":"ISO 3166-2:CH","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"Syrian Arab Republic","alpha-2":"SY","alpha-3":"SYR","country-code":760,"iso_3166-2":"ISO 3166-2:SY","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Taiwan, Province of China","alpha-2":"TW","alpha-3":"TWN","country-code":158,"iso_3166-2":"ISO 3166-2:TW","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Tajikistan","alpha-2":"TJ","alpha-3":"TJK","country-code":762,"iso_3166-2":"ISO 3166-2:TJ","region":"Asia","sub-region":"Central Asia","region-code":142,"sub-region-code":143},{"name":"Tanzania, United Republic of","alpha-2":"TZ","alpha-3":"TZA","country-code":834,"iso_3166-2":"ISO 3166-2:TZ","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Thailand","alpha-2":"TH","alpha-3":"THA","country-code":764,"iso_3166-2":"ISO 3166-2:TH","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Timor-Leste","alpha-2":"TL","alpha-3":"TLS","country-code":626,"iso_3166-2":"ISO 3166-2:TL","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Togo","alpha-2":"TG","alpha-3":"TGO","country-code":768,"iso_3166-2":"ISO 3166-2:TG","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Tokelau","alpha-2":"TK","alpha-3":"TKL","country-code":772,"iso_3166-2":"ISO 3166-2:TK","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Tonga","alpha-2":"TO","alpha-3":"TON","country-code":776,"iso_3166-2":"ISO 3166-2:TO","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Trinidad and Tobago","alpha-2":"TT","alpha-3":"TTO","country-code":780,"iso_3166-2":"ISO 3166-2:TT","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Tunisia","alpha-2":"TN","alpha-3":"TUN","country-code":788,"iso_3166-2":"ISO 3166-2:TN","region":"Africa","sub-region":"Northern Africa","region-code":"002","sub-region-code":"015"},{"name":"Turkey","alpha-2":"TR","alpha-3":"TUR","country-code":792,"iso_3166-2":"ISO 3166-2:TR","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Turkmenistan","alpha-2":"TM","alpha-3":"TKM","country-code":795,"iso_3166-2":"ISO 3166-2:TM","region":"Asia","sub-region":"Central Asia","region-code":142,"sub-region-code":143},{"name":"Turks and Caicos Islands","alpha-2":"TC","alpha-3":"TCA","country-code":796,"iso_3166-2":"ISO 3166-2:TC","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Tuvalu","alpha-2":"TV","alpha-3":"TUV","country-code":798,"iso_3166-2":"ISO 3166-2:TV","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Uganda","alpha-2":"UG","alpha-3":"UGA","country-code":800,"iso_3166-2":"ISO 3166-2:UG","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Ukraine","alpha-2":"UA","alpha-3":"UKR","country-code":804,"iso_3166-2":"ISO 3166-2:UA","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"United Arab Emirates","alpha-2":"AE","alpha-3":"ARE","country-code":784,"iso_3166-2":"ISO 3166-2:AE","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"United Kingdom of Great Britain and Northern Ireland","alpha-2":"GB","alpha-3":"GBR","country-code":826,"iso_3166-2":"ISO 3166-2:GB","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"United States of America","alpha-2":"US","alpha-3":"USA","country-code":840,"iso_3166-2":"ISO 3166-2:US","region":"Americas","sub-region":"Northern America","region-code":"019","sub-region-code":"021"},{"name":"United States Minor Outlying Islands","alpha-2":"UM","alpha-3":"UMI","country-code":581,"iso_3166-2":"ISO 3166-2:UM","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Uruguay","alpha-2":"UY","alpha-3":"URY","country-code":858,"iso_3166-2":"ISO 3166-2:UY","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Uzbekistan","alpha-2":"UZ","alpha-3":"UZB","country-code":860,"iso_3166-2":"ISO 3166-2:UZ","region":"Asia","sub-region":"Central Asia","region-code":142,"sub-region-code":143},{"name":"Vanuatu","alpha-2":"VU","alpha-3":"VUT","country-code":548,"iso_3166-2":"ISO 3166-2:VU","region":"Oceania","sub-region":"Melanesia","region-code":"009","sub-region-code":"054"},{"name":"Venezuela (Bolivarian Republic of)","alpha-2":"VE","alpha-3":"VEN","country-code":862,"iso_3166-2":"ISO 3166-2:VE","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Viet Nam","alpha-2":"VN","alpha-3":"VNM","country-code":704,"iso_3166-2":"ISO 3166-2:VN","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Virgin Islands (British)","alpha-2":"VG","alpha-3":"VGB","country-code":"092","iso_3166-2":"ISO 3166-2:VG","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Virgin Islands (U.S.)","alpha-2":"VI","alpha-3":"VIR","country-code":850,"iso_3166-2":"ISO 3166-2:VI","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Wallis and Futuna","alpha-2":"WF","alpha-3":"WLF","country-code":876,"iso_3166-2":"ISO 3166-2:WF","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Western Sahara","alpha-2":"EH","alpha-3":"ESH","country-code":732,"iso_3166-2":"ISO 3166-2:EH","region":"Africa","sub-region":"Northern Africa","region-code":"002","sub-region-code":"015"},{"name":"Yemen","alpha-2":"YE","alpha-3":"YEM","country-code":887,"iso_3166-2":"ISO 3166-2:YE","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Zambia","alpha-2":"ZM","alpha-3":"ZMB","country-code":894,"iso_3166-2":"ISO 3166-2:ZM","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Zimbabwe","alpha-2":"ZW","alpha-3":"ZWE","country-code":716,"iso_3166-2":"ISO 3166-2:ZW","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"}];

/***/ }),
/* 37 */
/***/ (function(module) {

module.exports = {"type":"Topology","objects":{"countries":{"type":"GeometryCollection","geometries":[{"type":"Polygon","id":"004","arcs":[[0,1,2,3,4,5]]},{"type":"MultiPolygon","id":"024","arcs":[[[6,7,8,9]],[[10,11,12]]]},{"type":"Polygon","id":"008","arcs":[[13,14,15,16,17]]},{"type":"Polygon","id":"784","arcs":[[18,19,20,21,22]]},{"type":"MultiPolygon","id":"032","arcs":[[[23,24]],[[25,26,27,28,29,30]]]},{"type":"Polygon","id":"051","arcs":[[31,32,33,34,35]]},{"type":"MultiPolygon","id":"010","arcs":[[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]]]},{"type":"Polygon","id":"260","arcs":[[44]]},{"type":"MultiPolygon","id":"036","arcs":[[[45]],[[46]]]},{"type":"Polygon","id":"040","arcs":[[47,48,49,50,51,52,53]]},{"type":"MultiPolygon","id":"031","arcs":[[[54,-35]],[[55,56,-33,57,58]]]},{"type":"Polygon","id":"108","arcs":[[59,60,61]]},{"type":"Polygon","id":"056","arcs":[[62,63,64,65,66]]},{"type":"Polygon","id":"204","arcs":[[67,68,69,70,71]]},{"type":"Polygon","id":"854","arcs":[[72,73,74,-70,75,76]]},{"type":"Polygon","id":"050","arcs":[[77,78,79]]},{"type":"Polygon","id":"100","arcs":[[80,81,82,83,84,85]]},{"type":"MultiPolygon","id":"044","arcs":[[[86]],[[87]],[[88]]]},{"type":"Polygon","id":"070","arcs":[[89,90,91]]},{"type":"Polygon","id":"112","arcs":[[92,93,94,95,96]]},{"type":"Polygon","id":"084","arcs":[[97,98,99]]},{"type":"Polygon","id":"068","arcs":[[100,101,102,103,-31]]},{"type":"Polygon","id":"076","arcs":[[-27,104,-103,105,106,107,108,109,110,111,112]]},{"type":"Polygon","id":"096","arcs":[[113,114]]},{"type":"Polygon","id":"064","arcs":[[115,116]]},{"type":"Polygon","id":"072","arcs":[[117,118,119,120]]},{"type":"Polygon","id":"140","arcs":[[121,122,123,124,125,126,127]]},{"type":"MultiPolygon","id":"124","arcs":[[[128]],[[129]],[[130]],[[131]],[[132]],[[133]],[[134]],[[135]],[[136]],[[137]],[[138,139,140,141]],[[142]],[[143]],[[144]],[[145]],[[146]],[[147]],[[148]],[[149]],[[150]],[[151]],[[152]],[[153]],[[154]],[[155]],[[156]],[[157]],[[158]],[[159]],[[160]]]},{"type":"Polygon","id":"756","arcs":[[-51,161,162,163]]},{"type":"MultiPolygon","id":"152","arcs":[[[-24,164]],[[-30,165,166,-101]]]},{"type":"MultiPolygon","id":"156","arcs":[[[167]],[[168,169,170,171,172,173,-117,174,175,176,177,-4,178,179,180,181,182,183]]]},{"type":"Polygon","id":"384","arcs":[[184,185,186,187,-73,188]]},{"type":"Polygon","id":"120","arcs":[[189,190,191,192,193,194,-128,195]]},{"type":"Polygon","id":"180","arcs":[[196,197,-60,198,199,200,201,-10,202,-13,203,-126,204]]},{"type":"Polygon","id":"178","arcs":[[-12,205,206,-196,-127,-204]]},{"type":"Polygon","id":"170","arcs":[[207,208,209,210,211,-107,212]]},{"type":"Polygon","id":"188","arcs":[[213,214,215,216]]},{"type":"Polygon","id":"192","arcs":[[217]]},{"type":"Polygon","id":"-99","arcs":[[218,219]]},{"type":"Polygon","id":"196","arcs":[[220,-220]]},{"type":"Polygon","id":"203","arcs":[[-53,221,222,223]]},{"type":"Polygon","id":"276","arcs":[[224,225,-222,-52,-164,226,227,-64,228,229,230]]},{"type":"Polygon","id":"262","arcs":[[231,232,233,234]]},{"type":"MultiPolygon","id":"208","arcs":[[[235]],[[-231,236]]]},{"type":"Polygon","id":"214","arcs":[[237,238]]},{"type":"Polygon","id":"012","arcs":[[239,240,241,242,243,244,245,246]]},{"type":"Polygon","id":"218","arcs":[[247,-208,248]]},{"type":"Polygon","id":"818","arcs":[[249,250,251,252,253]]},{"type":"Polygon","id":"232","arcs":[[254,255,256,-235]]},{"type":"Polygon","id":"724","arcs":[[257,258,259,260]]},{"type":"Polygon","id":"233","arcs":[[261,262,263]]},{"type":"Polygon","id":"231","arcs":[[-234,264,265,266,267,268,269,-255]]},{"type":"Polygon","id":"246","arcs":[[270,271,272,273]]},{"type":"MultiPolygon","id":"242","arcs":[[[274]],[[275]]]},{"type":"Polygon","id":"238","arcs":[[276]]},{"type":"MultiPolygon","id":"250","arcs":[[[277,278,279,-111]],[[280]],[[281,-227,-163,282,283,-259,284,-66]]]},{"type":"Polygon","id":"266","arcs":[[285,286,-190,-207]]},{"type":"MultiPolygon","id":"826","arcs":[[[287,288]],[[289]]]},{"type":"Polygon","id":"268","arcs":[[290,291,-58,-32,292]]},{"type":"Polygon","id":"288","arcs":[[293,-189,-77,294]]},{"type":"Polygon","id":"324","arcs":[[295,296,297,298,299,300,-187]]},{"type":"Polygon","id":"270","arcs":[[301,302]]},{"type":"Polygon","id":"624","arcs":[[303,304,-299]]},{"type":"Polygon","id":"226","arcs":[[305,-191,-287]]},{"type":"MultiPolygon","id":"300","arcs":[[[306]],[[307,-15,308,-84,309]]]},{"type":"Polygon","id":"304","arcs":[[310]]},{"type":"Polygon","id":"320","arcs":[[311,312,-100,313,314,315]]},{"type":"Polygon","id":"328","arcs":[[316,317,-109,318]]},{"type":"Polygon","id":"340","arcs":[[319,320,-315,321,322]]},{"type":"Polygon","id":"191","arcs":[[323,-92,324,325,326,327]]},{"type":"Polygon","id":"332","arcs":[[-239,328]]},{"type":"Polygon","id":"348","arcs":[[-48,329,330,331,332,-328,333]]},{"type":"MultiPolygon","id":"360","arcs":[[[334]],[[335,336]],[[337]],[[338]],[[339]],[[340]],[[341]],[[342]],[[343,344]],[[345]],[[346]],[[347,348]],[[349]]]},{"type":"Polygon","id":"356","arcs":[[-177,350,-175,-116,-174,351,-80,352,353]]},{"type":"Polygon","id":"372","arcs":[[354,-288]]},{"type":"Polygon","id":"364","arcs":[[355,-6,356,357,358,359,-55,-34,-57,360]]},{"type":"Polygon","id":"368","arcs":[[361,362,363,364,365,366,-359]]},{"type":"Polygon","id":"352","arcs":[[367]]},{"type":"Polygon","id":"376","arcs":[[368,369,370,-254,371,372,373]]},{"type":"MultiPolygon","id":"380","arcs":[[[374]],[[375]],[[376,377,-283,-162,-50]]]},{"type":"Polygon","id":"388","arcs":[[378]]},{"type":"Polygon","id":"400","arcs":[[-369,379,-365,380,381,-371,382]]},{"type":"MultiPolygon","id":"392","arcs":[[[383]],[[384]],[[385]]]},{"type":"Polygon","id":"398","arcs":[[386,387,388,389,-181,390]]},{"type":"Polygon","id":"404","arcs":[[391,392,393,394,-267,395]]},{"type":"Polygon","id":"417","arcs":[[-391,-180,396,397]]},{"type":"Polygon","id":"116","arcs":[[398,399,400,401]]},{"type":"Polygon","id":"410","arcs":[[402,403]]},{"type":"Polygon","id":"-99","arcs":[[-18,404,405,406]]},{"type":"Polygon","id":"414","arcs":[[407,408,-363]]},{"type":"Polygon","id":"418","arcs":[[409,410,-172,411,-400]]},{"type":"Polygon","id":"422","arcs":[[-373,412,413]]},{"type":"Polygon","id":"430","arcs":[[414,415,-296,-186]]},{"type":"Polygon","id":"434","arcs":[[416,-247,417,418,-252,419,420]]},{"type":"Polygon","id":"144","arcs":[[421]]},{"type":"Polygon","id":"426","arcs":[[422]]},{"type":"Polygon","id":"440","arcs":[[423,424,425,-93,426]]},{"type":"Polygon","id":"442","arcs":[[-228,-282,-65]]},{"type":"Polygon","id":"428","arcs":[[427,-264,428,-94,-426]]},{"type":"Polygon","id":"504","arcs":[[-244,429,430]]},{"type":"Polygon","id":"498","arcs":[[431,432]]},{"type":"Polygon","id":"450","arcs":[[433]]},{"type":"Polygon","id":"484","arcs":[[434,-98,-313,435,436]]},{"type":"Polygon","id":"807","arcs":[[-407,437,-85,-309,-14]]},{"type":"Polygon","id":"466","arcs":[[438,-241,439,-74,-188,-301,440]]},{"type":"Polygon","id":"104","arcs":[[441,-78,-352,-173,-411,442]]},{"type":"Polygon","id":"499","arcs":[[443,-325,-91,444,-405,-17]]},{"type":"Polygon","id":"496","arcs":[[445,-183]]},{"type":"Polygon","id":"508","arcs":[[446,447,448,449,450,451,452,453]]},{"type":"Polygon","id":"478","arcs":[[454,455,456,-242,-439]]},{"type":"Polygon","id":"454","arcs":[[-454,457,458]]},{"type":"MultiPolygon","id":"458","arcs":[[[459,460]],[[-348,461,-115,462]]]},{"type":"Polygon","id":"516","arcs":[[463,-8,464,-119,465]]},{"type":"Polygon","id":"540","arcs":[[466]]},{"type":"Polygon","id":"562","arcs":[[-75,-440,-240,-417,467,-194,468,-71]]},{"type":"Polygon","id":"566","arcs":[[469,-72,-469,-193]]},{"type":"Polygon","id":"558","arcs":[[470,-323,471,-215]]},{"type":"Polygon","id":"528","arcs":[[-229,-63,472]]},{"type":"MultiPolygon","id":"578","arcs":[[[473,-274,474,475]],[[476]],[[477]],[[478]]]},{"type":"Polygon","id":"524","arcs":[[-351,-176]]},{"type":"MultiPolygon","id":"554","arcs":[[[479]],[[480]]]},{"type":"MultiPolygon","id":"512","arcs":[[[481,482,-22,483]],[[-20,484]]]},{"type":"Polygon","id":"586","arcs":[[-178,-354,485,-357,-5]]},{"type":"Polygon","id":"591","arcs":[[486,-217,487,-210]]},{"type":"Polygon","id":"604","arcs":[[-167,488,-249,-213,-106,-102]]},{"type":"MultiPolygon","id":"608","arcs":[[[489]],[[490]],[[491]],[[492]],[[493]],[[494]],[[495]]]},{"type":"MultiPolygon","id":"598","arcs":[[[496]],[[497]],[[-344,498]],[[499]]]},{"type":"Polygon","id":"616","arcs":[[-226,500,501,-427,-97,502,503,-223]]},{"type":"Polygon","id":"630","arcs":[[504]]},{"type":"Polygon","id":"408","arcs":[[505,506,-404,507,-169]]},{"type":"Polygon","id":"620","arcs":[[-261,508]]},{"type":"Polygon","id":"600","arcs":[[-104,-105,-26]]},{"type":"Polygon","id":"275","arcs":[[-383,-370]]},{"type":"Polygon","id":"634","arcs":[[509,510]]},{"type":"Polygon","id":"642","arcs":[[511,-433,512,513,-81,514,-332]]},{"type":"MultiPolygon","id":"643","arcs":[[[515]],[[-502,516,-424]],[[517]],[[518]],[[519]],[[520]],[[521]],[[-506,-184,-446,-182,-390,522,-59,-292,523,524,-95,-429,-263,525,-271,-474,526]],[[527]],[[528]],[[529]]]},{"type":"Polygon","id":"646","arcs":[[530,-61,-198,531]]},{"type":"Polygon","id":"732","arcs":[[-243,-457,532,-430]]},{"type":"Polygon","id":"682","arcs":[[533,-381,-364,-409,534,-511,535,-23,-483,536]]},{"type":"Polygon","id":"729","arcs":[[537,538,-123,539,-420,-251,540,-256,-270,541]]},{"type":"Polygon","id":"728","arcs":[[542,-268,-395,543,-205,-125,544,-538]]},{"type":"Polygon","id":"686","arcs":[[545,-455,-441,-300,-305,546,-303]]},{"type":"MultiPolygon","id":"090","arcs":[[[547]],[[548]],[[549]],[[550]],[[551]]]},{"type":"Polygon","id":"694","arcs":[[552,-297,-416]]},{"type":"Polygon","id":"222","arcs":[[553,-316,-321]]},{"type":"Polygon","id":"-99","arcs":[[-265,-233,554,555]]},{"type":"Polygon","id":"706","arcs":[[-396,-266,-556,556]]},{"type":"Polygon","id":"688","arcs":[[-86,-438,-406,-445,-90,-324,-333,-515]]},{"type":"Polygon","id":"740","arcs":[[557,-279,558,-110,-318]]},{"type":"Polygon","id":"703","arcs":[[-504,559,-330,-54,-224]]},{"type":"Polygon","id":"705","arcs":[[-49,-334,-327,560,-377]]},{"type":"Polygon","id":"752","arcs":[[-475,-273,561]]},{"type":"Polygon","id":"748","arcs":[[562,-450]]},{"type":"Polygon","id":"760","arcs":[[-380,-374,-414,563,564,-366]]},{"type":"Polygon","id":"148","arcs":[[-468,-421,-540,-122,-195]]},{"type":"Polygon","id":"768","arcs":[[565,-295,-76,-69]]},{"type":"Polygon","id":"764","arcs":[[566,-461,567,-443,-410,-399]]},{"type":"Polygon","id":"762","arcs":[[-397,-179,-3,568]]},{"type":"Polygon","id":"795","arcs":[[-356,569,-388,570,-1]]},{"type":"Polygon","id":"626","arcs":[[571,-336]]},{"type":"Polygon","id":"780","arcs":[[572]]},{"type":"Polygon","id":"788","arcs":[[-246,573,-418]]},{"type":"MultiPolygon","id":"792","arcs":[[[-293,-36,-360,-367,-565,574]],[[-310,-83,575]]]},{"type":"Polygon","id":"158","arcs":[[576]]},{"type":"Polygon","id":"834","arcs":[[-393,577,-447,-459,578,-201,579,-199,-62,-531,580]]},{"type":"Polygon","id":"800","arcs":[[-532,-197,-544,-394,-581]]},{"type":"Polygon","id":"804","arcs":[[-525,581,-513,-432,-512,-331,-560,-503,-96]]},{"type":"Polygon","id":"858","arcs":[[-113,582,-28]]},{"type":"MultiPolygon","id":"840","arcs":[[[583]],[[584]],[[585]],[[586]],[[587]],[[588,-437,589,-139]],[[590]],[[591]],[[592]],[[-141,593]]]},{"type":"Polygon","id":"860","arcs":[[-571,-387,-398,-569,-2]]},{"type":"Polygon","id":"862","arcs":[[594,-319,-108,-212]]},{"type":"Polygon","id":"704","arcs":[[595,-401,-412,-171]]},{"type":"MultiPolygon","id":"548","arcs":[[[596]],[[597]]]},{"type":"Polygon","id":"887","arcs":[[598,-537,-482]]},{"type":"Polygon","id":"710","arcs":[[-466,-118,599,-451,-563,-449,600],[-423]]},{"type":"Polygon","id":"894","arcs":[[-458,-453,601,-120,-465,-7,-202,-579]]},{"type":"Polygon","id":"716","arcs":[[-600,-121,-602,-452]]}]},"land":{"type":"GeometryCollection","geometries":[{"type":"MultiPolygon","arcs":[[[595,401,566,459,567,441,78,352,485,357,361,407,534,509,535,18,484,20,483,598,533,381,249,540,256,231,554,556,391,577,447,600,463,8,202,10,205,285,305,191,469,67,565,293,184,414,552,297,303,546,301,545,455,532,430,244,573,418,252,371,412,563,574,290,523,581,513,81,575,307,15,443,325,560,377,283,259,508,257,284,66,472,229,236,224,500,516,424,427,261,525,271,561,475,526,506,402,507,169],[123,544,538],[199,579],[542,268,541],[388,522,55,360,569]],[[24,164]],[[582,28,165,488,247,208,486,213,470,319,553,311,435,589,139,593,141,588,434,98,313,321,471,215,487,210,594,316,557,279,111],[558,277]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[86]],[[87]],[[88]],[[461,113,462,348]],[[128]],[[129]],[[130]],[[131]],[[132]],[[133]],[[134]],[[135]],[[136]],[[137]],[[142]],[[143]],[[144]],[[145]],[[146]],[[147]],[[148]],[[149]],[[150]],[[151]],[[152]],[[153]],[[154]],[[155]],[[156]],[[157]],[[158]],[[159]],[[160]],[[167]],[[217]],[[218,220]],[[235]],[[237,328]],[[274]],[[275]],[[276]],[[280]],[[288,354]],[[289]],[[306]],[[310]],[[334]],[[336,571]],[[337]],[[338]],[[339]],[[340]],[[341]],[[342]],[[344,498]],[[345]],[[346]],[[349]],[[367]],[[374]],[[375]],[[378]],[[383]],[[384]],[[385]],[[421]],[[433]],[[466]],[[476]],[[477]],[[478]],[[479]],[[480]],[[489]],[[490]],[[491]],[[492]],[[493]],[[494]],[[495]],[[496]],[[497]],[[499]],[[504]],[[515]],[[517]],[[518]],[[519]],[[520]],[[521]],[[527]],[[528]],[[529]],[[547]],[[548]],[[549]],[[550]],[[551]],[[572]],[[576]],[[583]],[[584]],[[585]],[[586]],[[587]],[[590]],[[591]],[[592]],[[596]],[[597]]]}]}},"arcs":[[[67002,71642],[284,-224],[209,79],[58,268],[219,89],[157,180],[55,472],[234,114],[44,211],[131,-158],[84,-19]],[[68477,72654],[154,-4],[210,-124]],[[68841,72526],[85,-72],[201,189],[93,-114],[90,271],[166,-12],[43,86],[29,239],[120,205],[150,-134],[-30,-181],[84,-28],[-26,-496],[110,-194],[97,125],[123,58],[173,265],[192,-44],[286,-1]],[[70827,72688],[50,-169]],[[70877,72519],[-162,-67],[-141,-109],[-319,-68],[-298,-124],[-163,-258],[66,-250],[32,-294],[-139,-248],[12,-227],[-76,-213],[-265,18],[110,-390],[-177,-150],[-118,-356],[15,-355],[-108,-166],[-103,55],[-212,-77],[-31,-166],[-207,1],[-154,-334],[-10,-503],[-361,-246],[-194,52],[-56,-129],[-166,75],[-278,-88],[-465,301]],[[66909,68203],[252,536],[-23,380],[-210,100],[-22,375],[-91,472],[119,323],[-121,87],[76,430],[113,736]],[[56642,44124],[29,-184],[-32,-286],[49,-277],[-41,-222],[24,-203],[-579,7],[-13,-1880],[188,-483],[181,-369]],[[56448,40227],[-510,-241],[-673,83],[-192,284],[-1126,-26],[-42,-41],[-166,267],[-180,17],[-166,-100],[-134,-113]],[[53259,40357],[-26,372],[38,519],[96,541],[15,254],[90,532],[66,243],[159,386],[90,263],[29,438],[-15,335],[-83,211],[-74,358],[-68,355],[15,122],[85,235],[-84,570],[-57,396],[-139,374],[26,115]],[[53422,46976],[115,79],[80,-11],[98,71],[820,-8],[68,-440],[80,-354],[64,-191],[106,-309],[184,47],[91,83],[154,-83],[42,148],[69,344],[172,23],[15,103],[142,2],[-24,-213],[337,5],[5,-372],[56,-228],[-41,-356],[21,-363],[93,-219],[-15,-703],[68,54],[121,-15],[172,89],[127,-35]],[[53383,47159],[-74,444]],[[53309,47603],[112,255],[84,100],[104,-203]],[[53609,47755],[-101,-124],[-45,-152],[-9,-258],[-71,-62]],[[55719,75309],[-35,-201],[39,-254],[115,-144]],[[55838,74710],[-5,-155],[-91,-85],[-16,-192],[-129,-287]],[[55597,73991],[-48,41],[-5,130],[-154,199],[-24,281],[23,403],[38,184],[-47,93]],[[55380,75322],[-18,188],[120,291],[18,-111],[75,52]],[[55575,75742],[59,-159],[66,-60],[19,-214]],[[64327,64904],[49,29],[11,-162],[217,93],[230,-15],[168,-18],[190,400],[207,379],[176,364]],[[65575,65974],[52,-202]],[[65627,65772],[38,-466]],[[65665,65306],[-142,-3],[-23,-384],[50,-82],[-126,-117],[-1,-241],[-81,-245],[-7,-238]],[[65335,63996],[-56,-125],[-835,298],[-106,599],[-11,136]],[[31400,18145],[-168,16],[-297,1],[0,1319]],[[30935,19481],[106,-274],[139,-443],[361,-355],[389,-147],[-125,-296],[-264,-29],[-141,208]],[[32587,37434],[511,-964],[227,-89],[339,-437],[286,-231],[40,-261],[-273,-898],[280,-160],[312,-91],[220,95],[252,453],[45,521]],[[34826,35372],[138,114],[139,-341],[-6,-472],[-234,-326],[-186,-241],[-314,-573],[-370,-806]],[[33993,32727],[-70,-473],[-74,-607],[3,-588],[-61,-132],[-21,-382]],[[33770,30545],[-19,-308],[353,-506],[-38,-408],[173,-257],[-14,-289],[-267,-757],[-412,-317],[-557,-123],[-305,59],[59,-352],[-57,-442],[51,-298],[-167,-208],[-284,-82],[-267,216],[-108,-155],[39,-587],[188,-178],[152,186],[82,-307],[-255,-183],[-223,-367],[-41,-595],[-66,-316],[-262,-2],[-218,-302],[-80,-443],[273,-433],[266,-119],[-96,-531],[-328,-333],[-180,-692],[-254,-234],[-113,-276],[89,-614],[185,-342],[-117,30]],[[30952,19680],[-257,93],[-672,79],[-115,344],[6,443],[-185,-38],[-98,214],[-24,626],[213,260],[88,375],[-33,299],[148,504],[101,782],[-30,347],[122,112],[-30,223],[-129,118],[92,248],[-126,224],[-65,682],[112,120],[-47,720],[65,605],[75,527],[166,215],[-84,576],[-1,543],[210,386],[-7,494],[159,576],[1,544],[-72,108],[-128,1020],[171,607],[-27,572],[100,537],[182,555],[196,367],[-83,232],[58,190],[-9,985],[302,291],[96,614],[-34,148]],[[31359,37147],[231,534],[364,-144],[163,-427],[109,475],[316,-24],[45,-127]],[[62106,74858],[386,92]],[[62492,74950],[57,-155],[106,-103],[-56,-148],[148,-202],[-78,-189],[118,-160],[124,-97],[7,-410]],[[62918,73486],[-101,-17]],[[62817,73469],[-113,342],[1,91],[-123,-2],[-82,159],[-58,-16]],[[62442,74043],[-109,172],[-207,147],[27,288],[-47,208]],[[33452,3290],[-82,-301],[-81,-266],[-582,81],[-621,-35],[-348,197],[0,23],[-152,174],[625,-23],[599,-58],[207,243],[147,208],[288,-243]],[[5775,3611],[-533,-81],[-364,208],[-163,209],[-11,35],[-180,162],[169,220],[517,-93],[277,-185],[212,-209],[76,-266]],[[37457,4468],[342,-255],[120,-359],[33,-254],[11,-301],[-430,-186],[-452,-150],[-522,-139],[-582,-116],[-658,35],[-365,197],[49,243],[593,162],[239,197],[174,254],[126,220],[168,209],[180,243],[141,0],[414,127],[419,-127]],[[16330,7154],[359,-93],[332,104],[-158,-208],[-261,-151],[-386,47],[-278,208],[60,197],[332,-104]],[[15122,7165],[425,-231],[-164,23],[-359,58],[-381,162],[202,127],[277,-139]],[[22505,8080],[305,-81],[304,69],[163,-335],[-217,46],[-337,-23],[-343,23],[-376,-35],[-283,116],[-146,243],[174,104],[353,-81],[403,-46]],[[30985,8657],[33,-266],[-49,-231],[-76,-220],[-326,-81],[-311,-116],[-364,11],[136,232],[-327,-81],[-310,-81],[-212,174],[-16,243],[305,231],[190,70],[321,-23],[82,301],[16,219],[-6,475],[158,278],[256,93],[147,-220],[65,-220],[120,-267],[92,-254],[76,-267]],[[0,529],[16,-5],[245,344],[501,-185],[32,21],[294,188],[38,-7],[32,-4],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[-99520,-142]],[[69148,21851],[179,-186],[263,-74],[9,-112],[-77,-269],[-427,-38],[-7,314],[41,244],[19,121]],[[90387,26479],[269,-204],[151,81],[217,113],[166,-39],[20,-702],[-95,-203],[-29,-476],[-97,162],[-193,-412],[-57,32],[-171,19],[-171,505],[-38,390],[-160,515],[7,271],[181,-52]],[[89877,42448],[100,-464],[179,223],[92,-250],[133,-231],[-29,-262],[60,-506],[42,-295],[70,-72],[75,-505],[-27,-307],[90,-400],[301,-309],[197,-281],[186,-257],[-37,-143],[159,-371],[108,-639],[111,130],[113,-256],[68,91],[48,-626],[197,-363],[129,-226],[217,-478],[78,-475],[7,-337],[-19,-365],[132,-502],[-16,-523],[-48,-274],[-75,-527],[6,-339],[-55,-423],[-123,-538],[-205,-290],[-102,-458],[-93,-292],[-82,-510],[-107,-294],[-70,-442],[-36,-407],[14,-187],[-159,-205],[-311,-22],[-257,-242],[-127,-229],[-168,-254],[-230,262],[-170,104],[43,308],[-152,-112],[-243,-428],[-240,160],[-158,94],[-159,42],[-269,171],[-179,364],[-52,449],[-64,298],[-137,240],[-267,71],[91,287],[-67,438],[-136,-408],[-247,-109],[146,327],[42,341],[107,289],[-22,438],[-226,-504],[-174,-202],[-106,-470],[-217,243],[9,313],[-174,429],[-147,221],[52,137],[-356,358],[-195,17],[-267,287],[-498,-56],[-359,-211],[-317,-197],[-265,39],[-294,-303],[-241,-137],[-53,-309],[-103,-240],[-236,-15],[-174,-52],[-246,107],[-199,-64],[-191,-27],[-165,-315],[-81,26],[-140,-167],[-133,-187],[-203,23],[-186,0],[-295,377],[-149,113],[6,338],[138,81],[47,134],[-10,212],[34,411],[-31,350],[-147,598],[-45,337],[12,336],[-111,385],[-7,174],[-123,235],[-35,463],[-158,467],[-39,252],[122,-255],[-93,548],[137,-171],[83,-229],[-5,303],[-138,465],[-26,186],[-65,177],[31,341],[56,146],[38,295],[-29,346],[114,425],[21,-450],[118,406],[225,198],[136,252],[212,217],[126,46],[77,-73],[219,220],[168,66],[42,129],[74,54],[153,-14],[292,173],[151,262],[71,316],[163,300],[13,236],[7,321],[194,502],[117,-510],[119,118],[-99,279],[87,287],[122,-128],[34,449],[152,291],[67,233],[140,101],[4,165],[122,-69],[5,148],[122,85],[134,80],[205,-271],[155,-350],[173,-4],[177,-56],[-59,325],[133,473],[126,155],[-44,147],[121,338],[168,208],[142,-70],[234,111],[-5,302],[-204,195],[148,86],[184,-147],[148,-242],[234,-151],[79,60],[172,-182],[162,169],[105,-51],[65,113],[127,-292],[-74,-316],[-105,-239],[-96,-20],[32,-236],[-81,-295],[-99,-291],[20,-166],[221,-327],[214,-189],[143,-204],[201,-350],[78,1],[145,-151],[43,-183],[265,-200],[183,202],[55,317],[56,262],[34,324],[85,470],[-39,286],[20,171],[-32,339],[37,445],[53,120],[-43,197],[67,313],[52,325],[7,168],[104,222],[78,-289],[19,-371],[70,-71],[11,-249],[101,-300],[21,-335],[-10,-214]],[[54716,79012],[-21,-241],[-156,-2],[53,-128],[-92,-380]],[[54500,78261],[-53,-100],[-243,-14],[-140,-134],[-229,45]],[[53835,78058],[-398,153],[-62,205],[-274,-102],[-32,-113],[-169,84]],[[52900,78285],[-142,16],[-125,108],[42,145],[-10,104]],[[52665,78658],[83,33],[141,-164],[39,156],[245,-25],[199,106],[133,-18],[87,-121],[26,100],[-40,385],[100,75],[98,272]],[[53776,79457],[206,-190],[157,242],[98,44],[215,-180],[131,30],[128,-111]],[[54711,79292],[-23,-75],[28,-205]],[[62817,73469],[-190,78],[-141,273],[-44,223]],[[63495,75281],[146,-311],[141,-419],[130,-28],[85,-159],[-228,-47],[-49,-459],[-48,-207],[-101,-138],[7,-293]],[[63578,73220],[-69,-29],[-173,309],[95,292],[-82,174],[-104,-44],[-327,-436]],[[62492,74950],[68,96],[207,-169],[149,-36],[38,70],[-136,319],[72,82]],[[62890,75312],[78,-20],[191,-359],[122,-40],[48,150],[166,238]],[[58149,47921],[-17,713],[-70,268]],[[58062,48902],[169,-46],[85,336],[147,-38]],[[58463,49154],[16,-233],[60,-134],[3,-192],[-69,-124],[-108,-308],[-101,-214],[-115,-28]],[[50920,80916],[204,-47],[257,123],[176,-258],[153,-138]],[[51710,80596],[-32,-400]],[[51678,80196],[-72,-22],[-30,-331]],[[51576,79843],[-243,269],[-143,-46],[-194,279],[-129,237],[-129,10],[-40,207]],[[50698,80799],[222,117]],[[50747,54278],[-229,-69]],[[50518,54209],[-69,407],[13,1357],[-56,122],[-11,290],[-96,207],[-85,174],[35,311]],[[50249,57077],[96,67],[56,258],[136,56],[61,176]],[[50598,57634],[93,173],[100,2],[212,-340]],[[51003,57469],[-11,-197],[62,-350],[-54,-238],[29,-159],[-135,-366],[-86,-181],[-52,-372],[7,-376],[-16,-952]],[[49214,56277],[-190,152],[-130,-22],[-97,-149],[-125,125],[-49,195],[-125,129]],[[48498,56707],[-18,343],[76,250],[-7,200],[221,490],[41,405],[76,144],[134,-79],[116,120],[38,152],[216,265],[53,184],[259,246],[153,84],[70,-114],[178,3]],[[50104,59400],[-22,-286],[37,-269],[156,-386],[9,-286],[320,-134],[-6,-405]],[[50249,57077],[-243,13]],[[50006,57090],[-128,47],[-90,-96],[-123,43],[-482,-27],[-7,-336],[38,-444]],[[75742,63602],[-6,-424],[-97,90],[18,-476]],[[75657,62792],[-79,308],[-16,301],[-53,285],[-116,344],[-256,23],[25,-243],[-87,-329],[-118,120],[-41,-108],[-78,65],[-108,53]],[[74730,63611],[-43,486],[-96,444],[47,356],[-171,159],[62,215],[173,220],[-200,313],[98,401],[220,-255],[133,-30],[24,-410],[265,-81],[257,8],[160,-101],[-128,-500],[-124,-34],[-86,-336],[152,-306],[46,377],[76,2],[147,-937]],[[56293,76715],[80,-243],[108,43],[213,-92],[408,-31],[138,150],[327,138],[202,-215],[163,-62]],[[57932,76403],[-144,-245],[-101,-422],[89,-337]],[[57776,75399],[-239,79],[-283,-186]],[[57254,75292],[-3,-294],[-252,-56],[-196,206],[-222,-162],[-206,17]],[[56375,75003],[-20,391],[-139,189]],[[56216,75583],[46,84],[-30,70],[47,188],[105,185],[-135,255],[-24,216],[68,134]],[[28462,64617],[-68,-29],[-70,340],[-104,171],[60,375],[84,-23],[97,-491],[1,-343]],[[28383,66284],[-303,-95],[-19,219],[130,47],[184,-18],[8,-153]],[[28611,66290],[-48,-420],[-51,75],[4,309],[-124,234],[-1,67],[220,-265]],[[55279,77084],[100,2],[-69,-260],[134,-227],[-41,-278],[-65,-27]],[[55338,76294],[-52,-53],[-90,-138],[-41,-325]],[[55155,75778],[-246,224],[-105,247],[-106,130],[-127,221],[-61,183],[-136,277],[59,245],[99,-136],[60,123],[130,13],[239,-98],[192,8],[126,-131]],[[56523,82432],[268,-4],[302,223],[64,333],[228,190],[-26,264]],[[57359,83438],[169,100],[298,228]],[[57826,83766],[293,-149],[39,-146],[146,70],[272,-141],[27,-277],[-60,-159],[174,-387],[113,-108],[-16,-107],[187,-104],[80,-157],[-108,-129],[-224,20],[-54,-55],[66,-196],[68,-379]],[[58829,81362],[-239,-35],[-85,-129],[-18,-298],[-111,57],[-250,-28],[-73,138],[-104,-103],[-105,86],[-218,12],[-310,141],[-281,47],[-215,-14],[-152,-160],[-133,-23]],[[56535,81053],[-6,263],[-85,274],[166,121],[2,235],[-77,225],[-12,261]],[[25238,61101],[-2,87],[33,27],[51,-70],[99,357],[53,8]],[[25472,61510],[1,-87],[53,-3],[-5,-160],[-45,-256],[24,-91],[-29,-212],[18,-56],[-32,-299],[-55,-156],[-50,-19],[-55,-205]],[[25297,59966],[-83,0],[22,667],[2,468]],[[31359,37147],[-200,-81],[-109,814],[-150,663],[88,572],[-146,250],[-37,426],[-136,402]],[[30669,40193],[175,638],[-119,496],[63,199],[-49,219],[108,295],[6,503],[13,415],[60,200],[-240,951]],[[30686,44109],[206,-50],[143,13],[62,179],[243,239],[147,222],[363,100],[-29,-443],[34,-227],[-23,-396],[302,-529],[311,-98],[109,-220],[188,-117],[115,-172],[175,6],[161,-175],[12,-342],[55,-172],[3,-255],[-81,-10],[107,-688],[533,-24],[-41,-342],[30,-233],[151,-166],[66,-367],[-49,-465],[-77,-259],[27,-337],[-87,-122]],[[33842,38659],[-4,182],[-259,302],[-258,9],[-484,-172],[-133,-520],[-7,-318],[-110,-708]],[[34826,35372],[54,341],[38,350],[0,325],[-100,107],[-104,-96],[-103,26],[-33,228],[-26,541],[-52,177],[-187,160],[-114,-116],[-293,113],[18,802],[-82,329]],[[30686,44109],[-157,-102],[-126,68],[18,898],[-228,-348],[-245,15],[-105,315],[-184,34],[59,254],[-155,359],[-115,532],[73,108],[0,250],[168,171],[-28,319],[71,206],[20,275],[318,402],[227,114],[37,89],[251,-28]],[[30585,48040],[125,1620],[6,256],[-43,339],[-123,215],[1,430],[156,97],[56,-61],[9,226],[-162,61],[-4,370],[541,-13],[92,203],[77,-187],[55,-349],[52,73]],[[31423,51320],[153,-312],[216,38],[54,181],[206,138],[115,97],[32,250],[198,168],[-15,124],[-235,51],[-39,372],[12,396],[-125,153],[52,55],[206,-76],[221,-148],[80,140],[200,92],[310,221],[102,225],[-37,167]],[[33129,53652],[145,26],[64,-136],[-36,-259],[96,-90],[63,-274],[-77,-209],[-44,-502],[71,-299],[20,-274],[171,-277],[137,-29],[30,116],[88,25],[126,104],[90,157],[154,-50],[67,21]],[[34294,51702],[151,-48],[25,120],[-46,118],[28,171],[112,-53],[131,61],[159,-125]],[[34854,51946],[121,-122],[86,160],[62,-25],[38,-166],[133,42],[107,224],[85,436],[164,540]],[[35650,53035],[95,28],[69,-327],[155,-1033],[149,-97],[7,-408],[-208,-487],[86,-178],[491,-92],[10,-593],[211,388],[349,-212],[462,-361],[135,-346],[-45,-327],[323,182],[540,-313],[415,23],[411,-489],[355,-662],[214,-170],[237,-24],[101,-186],[94,-752],[46,-358],[-110,-977],[-142,-385],[-391,-822],[-177,-668],[-206,-513],[-69,-11],[-78,-435],[20,-1107],[-77,-910],[-30,-390],[-88,-233],[-49,-790],[-282,-771],[-47,-610],[-225,-256],[-65,-355],[-302,2],[-437,-227],[-195,-263],[-311,-173],[-327,-470],[-235,-586],[-41,-441],[46,-326],[-51,-597],[-63,-289],[-195,-325],[-308,-1040],[-244,-468],[-189,-277],[-127,-562],[-183,-337]],[[35174,30629],[-77,334],[122,280],[-160,402],[-218,327],[-286,379],[-103,-18],[-279,457],[-180,-63]],[[81723,53254],[110,221],[236,323]],[[82069,53798],[-13,-291],[-16,-377],[-133,19],[-58,-202],[-126,307]],[[75471,66988],[113,-189],[-20,-363],[-227,-17],[-234,39],[-175,-92],[-252,224],[-6,119]],[[74670,66709],[184,439],[150,150],[198,-137],[147,-14],[122,-159]],[[58175,37528],[-393,-435],[-249,-442],[-93,-393],[-83,-222],[-152,-47],[-48,-283],[-28,-184],[-178,-138],[-226,29],[-133,166],[-117,71],[-135,-137],[-68,-283],[-132,-177],[-139,-264],[-199,-60],[-62,207],[26,360],[-165,562],[-75,88]],[[55526,35946],[0,1725],[274,20],[8,2105],[207,19],[428,207],[106,-243],[177,231],[85,2],[156,133]],[[56967,40145],[50,-44]],[[57017,40101],[107,-473],[56,-105],[87,-342],[315,-649],[119,-64],[0,-208],[82,-375],[215,-90],[177,-267]],[[54244,54965],[229,44],[52,152],[46,-11],[69,-134],[350,226],[118,230],[145,207],[-28,208],[78,54],[269,-36],[261,273],[201,645],[141,239],[176,101]],[[56351,57163],[31,-253],[160,-369],[1,-241],[-45,-246],[18,-184],[96,-170]],[[56612,55700],[212,-258]],[[56824,55442],[152,-239],[2,-192],[187,-308],[116,-255],[70,-355],[208,-234],[44,-187]],[[57603,53672],[-91,-63],[-178,14],[-209,62],[-104,-51],[-41,-143],[-90,-18],[-110,125],[-309,-295],[-127,60],[-38,-46],[-83,-357],[-207,115],[-203,59],[-177,218],[-229,200],[-149,-190],[-108,-300],[-25,-412]],[[55125,52650],[-178,33],[-188,99],[-166,-313],[-146,-550]],[[54447,51919],[-29,172],[-12,269],[-127,190],[-103,305],[-23,212],[-132,309],[23,176],[-28,249],[21,458],[67,107],[140,599]],[[32315,78082],[202,-79],[257,16],[-137,-242],[-102,-38],[-353,250],[-69,198],[105,183],[97,-288]],[[32831,79592],[-135,-11],[-360,186],[-258,279],[96,49],[365,-148],[284,-247],[8,-108]],[[15692,79240],[-140,-82],[-456,269],[-84,209],[-248,207],[-50,168],[-286,107],[-107,321],[24,137],[291,-129],[171,-89],[261,-63],[94,-204],[138,-280],[277,-244],[115,-327]],[[34407,80527],[-184,-517],[181,199],[187,-126],[-98,-206],[247,-162],[128,144],[277,-182],[-86,-433],[194,101],[36,-313],[86,-367],[-117,-520],[-125,-22],[-183,111],[60,484],[-77,75],[-322,-513],[-166,21],[196,277],[-267,144],[-298,-35],[-539,18],[-43,175],[173,208],[-121,160],[234,356],[287,941],[172,336],[241,204],[129,-26],[-54,-160],[-148,-372]],[[13005,82584],[131,-76],[267,47],[-84,-671],[242,-475],[-111,1],[-167,270],[-103,272],[-140,184],[-51,260],[16,188]],[[27981,87304],[-108,-310],[-123,50],[-73,176],[13,41],[107,177],[114,-13],[70,-121]],[[27250,87631],[-325,-326],[-196,13],[-61,160],[207,273],[381,-6],[-6,-114]],[[26344,89371],[51,-259],[143,91],[161,-155],[304,-203],[318,-184],[25,-281],[204,46],[199,-196],[-247,-186],[-432,142],[-156,266],[-275,-314],[-396,-306],[-95,346],[-377,-57],[242,292],[35,465],[95,542],[201,-49]],[[28926,90253],[-312,-30],[-69,289],[118,331],[255,82],[217,-163],[3,-253],[-32,-82],[-180,-174]],[[23431,91410],[-173,-207],[-374,179],[-226,-65],[-380,266],[245,183],[194,256],[295,-168],[166,-106],[84,-112],[169,-226]],[[31350,77248],[-181,334],[0,805],[-123,171],[-187,-100],[-92,155],[-212,-446],[-84,-460],[-99,-269],[-118,-91],[-89,-30],[-28,-146],[-512,0],[-422,-4],[-125,-109],[-294,-425],[-34,-46],[-89,-231],[-255,1],[-273,-3],[-125,-93],[44,-116],[25,-181],[-5,-60],[-363,-293],[-286,-93],[-323,-316],[-70,0],[-94,93],[-31,85],[6,61],[61,207],[131,325],[81,349],[-56,514],[-59,536],[-290,277],[35,105],[-41,73],[-76,0],[-56,93],[-14,140],[-54,-61],[-75,18],[17,59],[-65,58],[-27,155],[-216,189],[-224,197],[-272,229],[-261,214],[-248,-167],[-91,-6],[-342,154],[-225,-77],[-269,183],[-284,94],[-194,36],[-86,100],[-49,325],[-94,-3],[-1,-227],[-575,0],[-951,0],[-944,0],[-833,0],[-834,0],[-819,0],[-847,0],[-273,0],[-825,0],[-788,0]],[[15878,79530],[-38,1],[-537,581],[-199,255],[-503,244],[-155,523],[40,363],[-356,252],[-48,476],[-336,429],[-6,304]],[[13740,82958],[154,285],[-7,373],[-473,376],[-284,674],[-173,424],[-255,266],[-187,242],[-147,306],[-279,-192],[-270,-330],[-247,388],[-194,259],[-271,164],[-273,17],[1,3364],[2,2193]],[[10837,91767],[518,-142],[438,-285],[289,-54],[244,247],[336,184],[413,-72],[416,259],[455,148],[191,-245],[207,138],[62,278],[192,-63],[470,-530],[369,401],[38,-449],[341,97],[105,173],[337,-34],[424,-248],[650,-217],[383,-100],[272,38],[374,-300],[-390,-293],[502,-127],[750,70],[236,103],[296,-354],[302,299],[-283,251],[179,202],[338,27],[223,59],[224,-141],[279,-321],[310,47],[491,-266],[431,94],[405,-14],[-32,367],[247,103],[431,-200],[-2,-559],[177,471],[223,-16],[126,594],[-298,364],[-324,239],[22,653],[329,429],[366,-95],[281,-261],[378,-666],[-247,-290],[517,-120],[-1,-604],[371,463],[332,-380],[-83,-438],[269,-399],[290,427],[202,510],[16,649],[394,-46],[411,-87],[373,-293],[17,-293],[-207,-315],[196,-316],[-36,-288],[-544,-413],[-386,-91],[-287,178],[-83,-297],[-268,-498],[-81,-259],[-322,-399],[-397,-39],[-220,-250],[-18,-384],[-323,-74],[-340,-479],[-301,-665],[-108,-466],[-16,-686],[409,-99],[125,-553],[130,-448],[388,117],[517,-256],[277,-225],[199,-279],[348,-163],[294,-248],[459,-34],[302,-58],[-45,-511],[86,-594],[201,-661],[414,-561],[214,192],[150,607],[-145,934],[-196,311],[445,276],[314,415],[154,411],[-23,395],[-188,502],[-338,445],[328,619],[-121,535],[-93,922],[194,137],[476,-161],[286,-57],[230,155],[258,-200],[342,-343],[85,-229],[495,-45],[-8,-496],[92,-747],[254,-92],[201,-348],[402,328],[266,652],[184,274],[216,-527],[362,-754],[307,-709],[-112,-371],[370,-333],[250,-338],[442,-152],[179,-189],[110,-500],[216,-78],[112,-223],[20,-664],[-202,-222],[-199,-207],[-458,-210],[-349,-486],[-470,-96],[-594,125],[-417,4],[-287,-41],[-233,-424],[-354,-262],[-401,-782],[-320,-545],[236,97],[446,776],[583,493],[415,58],[246,-289],[-262,-397],[88,-637],[91,-446],[361,-295],[459,86],[278,664],[19,-429],[180,-214],[-344,-387],[-615,-351],[-276,-239],[-310,-426],[-211,44],[-11,500],[483,488],[-445,-19],[-309,-72]],[[18287,93781],[-139,-277],[618,179],[386,-298],[314,302],[254,-194],[227,-580],[140,244],[-197,606],[244,86],[276,-94],[311,-239],[175,-575],[86,-417],[466,-293],[502,-279],[-31,-260],[-456,-48],[178,-227],[-94,-217],[-503,93],[-478,160],[-322,-36],[-522,-201],[-704,-88],[-494,-56],[-151,279],[-379,161],[-246,-66],[-343,468],[185,62],[429,101],[392,-26],[362,103],[-537,138],[-594,-47],[-394,12],[-146,217],[644,237],[-428,-9],[-485,156],[233,443],[193,235],[744,359],[284,-114]],[[20972,93958],[-244,-390],[-434,413],[95,83],[372,24],[211,-130]],[[28794,93770],[25,-163],[-296,17],[-299,13],[-304,-80],[-80,36],[-306,313],[12,213],[133,39],[636,-63],[479,-325]],[[25955,93803],[219,-369],[256,477],[704,242],[477,-611],[-42,-387],[550,172],[263,235],[616,-299],[383,-282],[36,-258],[515,134],[290,-376],[670,-234],[242,-238],[263,-553],[-510,-275],[654,-386],[441,-130],[400,-543],[437,-39],[-87,-414],[-487,-687],[-342,253],[-437,568],[-359,-74],[-35,-338],[292,-344],[377,-272],[114,-157],[181,-584],[-96,-425],[-350,160],[-697,473],[393,-509],[289,-357],[45,-206],[-753,236],[-596,343],[-337,287],[97,167],[-414,304],[-405,286],[5,-171],[-803,-94],[-235,203],[183,435],[522,10],[571,76],[-92,211],[96,294],[360,576],[-77,261],[-107,203],[-425,286],[-563,201],[178,150],[-294,367],[-245,34],[-219,201],[-149,-175],[-503,-76],[-1011,132],[-588,174],[-450,89],[-231,207],[290,270],[-394,2],[-88,599],[213,528],[286,241],[717,158],[-204,-382]],[[22123,94208],[331,-124],[496,75],[72,-172],[-259,-283],[420,-254],[-50,-532],[-455,-229],[-268,50],[-192,225],[-690,456],[5,189],[567,-73],[-306,386],[329,286]],[[24112,93575],[-298,-442],[-317,22],[-173,519],[4,294],[145,251],[276,161],[579,-20],[530,-144],[-415,-526],[-331,-115]],[[16539,92755],[-731,-285],[-147,259],[-641,312],[119,250],[192,432],[241,388],[-272,362],[939,93],[397,-123],[709,-33],[270,-171],[298,-249],[-349,-149],[-681,-415],[-344,-414],[0,-257]],[[23996,94879],[-151,-229],[-403,44],[-337,155],[148,266],[399,159],[243,-208],[101,-187]],[[22639,95907],[212,-273],[9,-303],[-127,-440],[-458,-60],[-298,94],[5,345],[-455,-46],[-18,457],[299,-18],[419,201],[390,-34],[22,77]],[[19941,95601],[109,-210],[247,99],[291,-26],[49,-289],[-169,-281],[-940,-91],[-701,-256],[-423,-14],[-35,193],[577,261],[-1255,-70],[-389,106],[379,577],[262,165],[782,-199],[493,-350],[485,-45],[-397,565],[255,215],[286,-68],[94,-282]],[[23699,96131],[308,-190],[547,1],[240,-194],[-64,-222],[319,-134],[177,-140],[374,-26],[406,-50],[441,128],[566,51],[451,-42],[298,-223],[62,-244],[-174,-157],[-414,-127],[-355,72],[-797,-91],[-570,-11],[-449,73],[-738,190],[-96,325],[-34,293],[-279,258],[-574,72],[-322,183],[104,242],[573,-37]],[[17722,96454],[-38,-454],[-214,-205],[-259,-29],[-517,-252],[-444,-91],[-377,128],[472,442],[570,383],[426,-9],[381,87]],[[23933,96380],[-126,-17],[-521,38],[-74,165],[559,-9],[195,-109],[-33,-68]],[[19392,96485],[-518,-170],[-411,191],[224,188],[406,60],[392,-92],[-93,-177]],[[19538,97019],[-339,-115],[-461,1],[5,84],[285,177],[149,-27],[361,-120]],[[23380,96697],[-411,-122],[-226,138],[-119,221],[-22,245],[360,-24],[162,-39],[332,-205],[-76,-214]],[[22205,96856],[108,-247],[-453,66],[-457,192],[-619,21],[268,176],[-335,142],[-21,227],[546,-81],[751,-215],[212,-281]],[[25828,97644],[334,-190],[-381,-176],[-513,-445],[-492,-42],[-575,76],[-299,240],[4,215],[220,157],[-508,-4],[-306,196],[-176,268],[193,262],[192,180],[285,42],[-122,135],[646,30],[355,-315],[468,-127],[455,-112],[220,-390]],[[30972,99681],[742,-47],[597,-75],[508,-161],[-12,-157],[-678,-257],[-672,-119],[-251,-133],[605,3],[-656,-358],[-452,-167],[-476,-483],[-573,-98],[-177,-120],[-841,-64],[383,-74],[-192,-105],[230,-292],[-264,-202],[-429,-167],[-132,-232],[-388,-176],[39,-134],[475,23],[6,-144],[-742,-355],[-726,163],[-816,-91],[-414,71],[-525,31],[-35,284],[514,133],[-137,427],[170,41],[742,-255],[-379,379],[-450,113],[225,229],[492,141],[79,206],[-392,231],[-118,304],[759,-26],[220,-64],[433,216],[-625,68],[-972,-38],[-491,201],[-232,239],[-324,173],[-61,202],[413,112],[324,19],[545,96],[409,220],[344,-30],[300,-166],[211,319],[367,95],[498,65],[849,24],[148,-63],[802,100],[601,-38],[602,-37]],[[52900,78285],[-22,-242],[-122,-100],[-206,75],[-60,-239],[-132,-19],[-48,94],[-156,-200],[-134,-28],[-120,126]],[[51900,77752],[-95,259],[-133,-92],[5,267],[203,332],[-9,150],[126,-54],[77,101]],[[52074,78715],[236,-4],[57,128],[298,-181]],[[31400,18145],[-92,-239],[-238,-183],[-137,19],[-164,48],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70]],[[30952,19680],[-247,4],[-134,-145],[-250,-213],[-45,-552],[-118,-14],[-313,192],[-318,412],[-346,338],[-87,374],[79,346],[-140,393],[-36,1007],[119,568],[293,457],[-422,172],[265,522],[94,982],[309,-208],[145,1224],[-186,157],[-87,-738],[-175,83],[87,845],[95,1095],[127,404],[-80,576],[-22,666],[117,19],[170,954],[192,945],[118,881],[-64,885],[83,487],[-34,730],[163,721],[50,1143],[89,1227],[87,1321],[-20,967],[-58,832]],[[30452,39739],[143,151],[74,303]],[[80649,61615],[-240,-284],[-228,183],[-8,509],[137,267],[304,166],[159,-14],[62,-226],[-122,-260],[-64,-341]],[[86288,75628],[-179,348],[-111,-331],[-429,-254],[44,-312],[-241,22],[-131,185],[-191,-419],[-306,-318],[-227,-379]],[[84517,74170],[-388,-171],[-204,-277],[-300,-161],[148,274],[-58,230],[220,397],[-147,310],[-242,-209],[-314,-411],[-171,-381],[-272,-29],[-142,-275],[147,-400],[227,-97],[9,-265],[220,-173],[311,422],[247,-230],[179,-15],[45,-310],[-393,-165],[-130,-319],[-270,-296],[-142,-414],[299,-325],[109,-581],[169,-541],[189,-454],[-5,-439],[-174,-161],[66,-315],[164,-184],[-43,-481],[-71,-468],[-155,-53],[-203,-640],[-225,-775],[-258,-705],[-382,-545],[-386,-498],[-313,-68],[-170,-262],[-96,192],[-157,-294],[-388,-296],[-294,-90],[-95,-624],[-154,-35],[-73,429],[66,228],[-373,189],[-131,-96]],[[80013,63313],[-280,154],[-132,240],[44,340],[-254,108],[-134,222],[-236,-315],[-271,-68],[-221,3],[-149,-145]],[[78380,63852],[-144,-86],[42,-676],[-148,16],[-25,139]],[[78105,63245],[-9,244],[-203,-172],[-121,109],[-206,222],[81,490],[-176,115],[-66,544],[-293,-98],[33,701],[263,493],[11,487],[-8,452],[-121,141],[-93,348],[-162,-44]],[[77035,67277],[-300,89],[94,248],[-130,367],[-198,-249],[-233,145],[-321,-376],[-252,-439],[-224,-74]],[[74670,66709],[-23,465],[-170,-124]],[[74477,67050],[-324,57],[-314,136],[-225,259],[-216,117],[-93,284],[-157,84],[-280,385],[-223,182],[-115,-141]],[[72530,68413],[-386,413],[-273,374],[-78,651],[200,-79],[9,301],[-111,303],[28,482],[-298,692]],[[71621,71550],[-457,239],[-82,454],[-205,276]],[[70827,72688],[-42,337],[10,230],[-169,134],[-91,-59],[-70,546]],[[70465,73876],[79,136],[-39,138],[266,279],[192,116],[294,-80],[105,378],[356,70],[99,234],[438,320],[39,134]],[[72294,75601],[-22,337],[190,154],[-250,1026],[550,236],[143,131],[200,1058],[551,-194],[155,267],[13,592],[230,56],[212,393]],[[74266,79657],[109,49]],[[74375,79706],[73,-413],[233,-313],[396,-222],[192,-476],[-107,-690],[100,-256],[330,-101],[374,-83],[336,-368],[171,-66],[127,-544],[163,-351],[306,14],[574,-133],[369,82],[274,-88],[411,-359],[336,1],[123,-184],[324,318],[448,205],[417,22],[324,208],[200,316],[194,199],[-45,195],[-89,227],[146,381],[156,-53],[286,-120],[277,313],[423,229],[204,391],[195,168],[404,78],[219,-66],[30,210],[-251,413],[-223,189],[-214,-219],[-274,92],[-157,-74],[-72,241],[197,590],[135,446]],[[82410,80055],[333,-223],[392,373],[-3,260],[251,627],[155,189],[-4,326],[-152,141],[229,294],[345,106],[369,16],[415,-176],[244,-217],[172,-596],[104,-254],[97,-363],[103,-579],[483,-189],[329,-420],[112,-555],[423,-1],[240,233],[459,175],[-146,-532],[-107,-216],[-96,-647],[-186,-575],[-338,104],[-238,-208],[73,-506],[-40,-698],[-142,-16],[2,-300]],[[49206,53531],[-126,-7],[-194,116],[-178,-7],[-329,-103],[-193,-170],[-275,-217],[-54,15]],[[47857,53158],[22,487],[26,74],[-8,233],[-118,247],[-88,40],[-81,162],[60,262],[-28,286],[13,172]],[[47655,55121],[44,0],[17,258],[-22,114],[27,82],[103,71],[-69,473],[-64,245],[23,200],[55,46]],[[47769,56610],[36,54],[77,-89],[215,-5],[51,172],[48,-11],[80,67],[43,-253],[65,74],[114,88]],[[49214,56277],[74,-841],[-117,-496],[-73,-667],[121,-509],[-13,-233]],[[53632,51919],[-35,32],[-164,-76],[-169,79],[-132,-38]],[[53132,51916],[-452,13]],[[52680,51929],[40,466],[-108,391],[-127,100],[-56,265],[-72,85],[4,163]],[[52361,53399],[71,418],[132,570],[81,6],[165,345],[105,10],[156,-243],[191,199],[26,246],[63,238],[43,299],[148,243],[56,414],[59,132],[39,307],[74,377],[234,457],[14,196],[31,107],[-110,235]],[[53939,57955],[9,188],[78,34]],[[54026,58177],[111,-378],[18,-392],[-10,-393],[151,-537],[-155,6],[-78,-42],[-127,60],[-60,-279],[164,-345],[121,-100],[39,-245],[87,-407],[-43,-160]],[[54447,51919],[-20,-319],[-220,140],[-225,156],[-350,23]],[[58564,52653],[-16,-691],[111,-80],[-89,-210],[-107,-157],[-106,-308],[-59,-274],[-15,-475],[-65,-225],[-2,-446]],[[58216,49787],[-80,-165],[-10,-351],[-38,-46],[-26,-323]],[[58149,47921],[50,-544],[-27,-307]],[[58172,47070],[55,-343],[161,-330]],[[58388,46397],[150,-745]],[[58538,45652],[-109,60],[-373,-99],[-75,-71],[-79,-377],[62,-261],[-49,-699],[-34,-593],[75,-105],[194,-230],[76,107],[23,-637],[-212,5],[-114,325],[-103,252],[-213,82],[-62,310],[-170,-187],[-222,83],[-93,268],[-176,55],[-131,-15],[-15,184],[-96,15]],[[53422,46976],[-39,183]],[[53609,47755],[73,-60],[95,226],[152,-6],[17,-167],[104,-105],[164,370],[161,289],[71,189],[-10,486],[121,574],[127,304],[183,285],[32,189],[7,216],[45,205],[-14,335],[34,524],[55,368],[83,316],[16,357]],[[57603,53672],[169,-488],[124,-71],[75,99],[128,-39],[155,125],[66,-252],[244,-393]],[[53309,47603],[-228,626]],[[53081,48229],[212,326],[-105,391],[95,148],[187,73],[23,261],[148,-283],[245,-25],[85,279],[36,393],[-31,461],[-131,350],[120,684],[-69,117],[-207,-48],[-78,305],[21,258]],[[29063,50490],[-119,140],[-137,195],[-79,-94],[-235,82],[-68,255],[-52,-10],[-278,338]],[[28095,51396],[-37,183],[103,44],[-12,296],[65,214],[138,40],[117,371],[106,310],[-102,141],[52,343],[-62,540],[59,155],[-44,500],[-112,315]],[[28366,54848],[36,287],[89,-43],[52,176],[-64,348],[34,86]],[[28513,55702],[143,-18],[209,412],[114,63],[3,195],[51,500],[159,274],[175,11],[22,123],[218,-49],[218,298],[109,132],[134,285],[98,-36],[73,-156],[-54,-199]],[[30185,57537],[-178,-99],[-71,-295],[-107,-169],[-81,-220],[-34,-422],[-77,-345],[144,-40],[35,-271],[62,-130],[21,-238],[-33,-219],[10,-123],[69,-49],[66,-207],[357,57],[161,-75],[196,-508],[112,63],[200,-32],[158,68],[99,-102],[-50,-318],[-62,-199],[-22,-423],[56,-393],[79,-175],[9,-133],[-140,-294],[100,-130],[74,-207],[85,-589]],[[30585,48040],[-139,314],[-83,14],[179,602],[-213,276],[-166,-51],[-101,103],[-153,-157],[-207,74],[-163,620],[-129,152],[-89,279],[-184,280],[-74,-56]],[[26954,55439],[-151,131],[-56,124],[32,103],[-11,130],[-77,142],[-109,116],[-95,76],[-19,173],[-73,105],[18,-172],[-55,-141],[-64,164],[-89,58],[-38,120],[2,179],[36,187],[-78,83],[64,114]],[[26191,57131],[42,76],[183,-156],[63,77],[89,-50],[46,-121],[82,-40],[66,126]],[[26762,57043],[70,-321],[108,-238],[130,-252]],[[27070,56232],[-107,-53],[1,-238],[58,-88],[-41,-70],[10,-107],[-23,-120],[-14,-117]],[[27147,64280],[240,-42],[219,-7],[261,-201],[110,-216],[260,66],[98,-138],[235,-366],[173,-267],[92,8],[165,-120],[-20,-167],[205,-24],[210,-242],[-33,-138],[-185,-75],[-187,-29],[-191,46],[-398,-57],[186,329],[-113,154],[-179,39],[-96,171],[-66,336],[-157,-23],[-259,159],[-83,124],[-362,91],[-97,115],[104,148],[-273,30],[-199,-307],[-115,-8],[-40,-144],[-138,-65],[-118,56],[146,183],[60,213],[126,131],[142,116],[210,56],[67,65]],[[59092,71341],[19,3],[40,143],[200,-8],[253,176],[-188,-251],[21,-111]],[[59437,71293],[-30,21],[-53,-45],[-42,12],[-14,-22],[-5,59],[-20,37],[-54,6],[-75,-51],[-52,31]],[[59437,71293],[8,-48],[-285,-240],[-136,77],[-64,237],[132,22]],[[53776,79457],[-157,254],[-141,142],[-30,249],[-49,176],[202,129],[103,147],[200,114],[70,113],[73,-68],[124,62]],[[54171,80775],[132,-191],[207,-51],[-17,-163],[151,-122],[41,153],[191,-66],[26,-185],[207,-36],[127,-291]],[[55236,79823],[-82,-1],[-43,-106],[-64,-26],[-18,-134],[-54,-28],[-7,-55],[-95,-61],[-123,10],[-39,-130]],[[52756,83065],[4,-228],[281,-138],[-3,-210],[283,111],[156,162],[313,-233],[132,-189]],[[53922,82340],[64,-300],[-77,-158],[101,-210],[69,-316],[-22,-204],[114,-377]],[[52074,78715],[35,421],[140,404],[-400,109],[-131,155]],[[51718,79804],[16,259],[-56,133]],[[51710,80596],[-47,619],[167,0],[70,222],[69,541],[-51,200]],[[51918,82178],[54,125],[232,32],[52,-130],[188,291],[-63,222],[-13,335]],[[52368,83053],[210,-78],[178,90]],[[61966,58083],[66,-183],[-9,-245],[-158,-142],[119,-161]],[[61984,57352],[-102,-317]],[[61882,57035],[-62,106],[-67,-42],[-155,10],[-4,180],[-22,163],[94,277],[98,261]],[[61764,57990],[119,-51],[83,144]],[[53524,83435],[-166,-478],[-291,333],[-39,246],[408,195],[88,-296]],[[52368,83053],[-113,328],[-8,604],[46,159],[80,177],[244,37],[98,163],[223,167],[-9,-304],[-82,-192],[33,-166],[151,-89],[-68,-223],[-83,64],[-200,-425],[76,-288]],[[30080,62227],[34,101],[217,-3],[165,-152],[73,15],[50,-209],[152,11],[-9,-176],[124,-21],[136,-217],[-103,-240],[-132,128],[-127,-25],[-92,28],[-50,-107],[-106,-37],[-43,144],[-92,-85],[-111,-405],[-71,94],[-14,170]],[[30081,61241],[5,161],[-71,177],[68,99],[21,228],[-24,321]],[[53333,64447],[-952,-1126],[-804,-1161],[-392,-263]],[[51185,61897],[-308,-58],[-3,376],[-129,96],[-173,169],[-66,277],[-937,1289],[-937,1289]],[[48632,65335],[-1045,1431]],[[47587,66766],[6,114],[-1,40]],[[47592,66920],[-2,700],[449,436],[277,90],[227,159],[107,295],[324,234],[12,438],[161,51],[126,219],[363,99],[51,230],[-73,125],[-96,624],[-17,359],[-104,379]],[[49397,71358],[267,323],[300,102],[175,244],[268,180],[471,105],[459,48],[140,-87],[262,232],[297,5],[113,-137],[190,35]],[[52339,72408],[-57,-303],[44,-563],[-65,-487],[-171,-330],[24,-445],[227,-352],[3,-143],[171,-238],[118,-1061]],[[52633,68486],[90,-522],[15,-274],[-49,-482],[21,-270],[-36,-323],[24,-371],[-110,-247],[164,-431],[11,-253],[99,-330],[130,109],[219,-275],[122,-370]],[[27693,48568],[148,442],[-60,258],[-106,-275],[-166,259],[56,167],[-47,536],[97,89],[52,368],[105,381],[-20,241],[153,126],[190,236]],[[29063,50490],[38,-449],[-86,-384],[-303,-619],[-334,-233],[-170,-514],[-53,-398],[-157,-243],[-116,298],[-113,64],[-114,-47],[-8,216],[79,141],[-33,246]],[[59700,68010],[-78,-238],[-60,-446],[-75,-308],[-65,-103],[-93,191],[-125,263],[-198,847],[-29,-53],[115,-624],[171,-594],[210,-920],[102,-321],[90,-334],[249,-654],[-55,-103],[9,-384],[323,-530],[49,-121]],[[60240,63578],[-1102,0],[-1077,0],[-1117,0]],[[56944,63578],[0,2175],[0,2101],[-83,476],[71,365],[-43,253],[101,283]],[[56990,69231],[369,10],[268,-156],[275,-175],[129,-92],[214,188],[114,169],[245,49],[198,-75],[75,-293],[65,193],[222,-140],[217,-33],[137,149]],[[59518,69025],[182,-1015]],[[61764,57990],[-95,191],[-114,346],[-124,190],[-71,204],[-242,237],[-191,7],[-67,124],[-163,-139],[-168,268],[-87,-441],[-323,124]],[[60119,59101],[-30,236],[120,868],[27,393],[88,181],[204,97],[141,337]],[[60669,61213],[161,-684],[77,-542],[152,-288],[379,-558],[154,-336],[151,-341],[87,-203],[136,-178]],[[47490,75324],[14,420],[-114,257],[393,426],[340,-106],[373,3],[296,-101],[230,31],[449,-19]],[[49471,76235],[111,-230],[511,-268],[101,127],[313,-267],[322,77]],[[50829,75674],[15,-344],[-263,-393],[-356,-125],[-25,-199],[-171,-327],[-107,-481],[108,-338],[-160,-263],[-60,-384],[-210,-118],[-197,-454],[-352,-9],[-265,11],[-174,-209],[-106,-223],[-136,49],[-103,199],[-79,340],[-259,92]],[[47929,72498],[-23,195],[103,222],[38,161],[-96,175],[77,388],[-111,355],[120,48],[11,280],[45,86],[3,461],[129,160],[-78,296],[-162,21],[-47,-75],[-164,0],[-70,289],[-113,-86],[-101,-150]],[[56753,84725],[32,349],[-102,-75],[-176,210],[-24,340],[351,164],[350,86],[301,-97],[287,17]],[[57772,85719],[42,-103],[-198,-341],[83,-551],[-120,-187]],[[57579,84537],[-229,1],[-239,219],[-121,73],[-237,-105]],[[61882,57035],[-61,-209],[103,-325],[102,-285],[106,-210],[909,-702],[233,4]],[[63274,55308],[-785,-1773],[-362,-26],[-247,-417],[-178,-11],[-76,-186]],[[61626,52895],[-190,0],[-112,200],[-254,-247],[-82,-247],[-185,47],[-62,68],[-65,-16],[-87,6],[-352,502],[-193,0],[-95,194],[0,332],[-145,99]],[[59804,53833],[-164,643],[-127,137],[-48,236],[-141,288],[-171,42],[95,337],[147,14],[42,181]],[[59437,55711],[-4,531]],[[59433,56242],[82,618],[132,166],[28,241],[119,451],[168,293],[112,582],[45,508]],[[57942,91385],[-41,-414],[425,-394],[-256,-445],[323,-673],[-187,-506],[250,-440],[-113,-385],[411,-405],[-105,-301],[-258,-341],[-594,-755]],[[57797,86326],[-504,-47],[-489,-216],[-452,-125],[-161,323],[-269,193],[62,582],[-135,533],[133,345],[252,371],[635,640],[185,124],[-28,250],[-387,279]],[[56639,89578],[-93,230],[-8,910],[-433,402],[-371,289]],[[55734,91409],[167,156],[309,-312],[362,29],[298,-143],[265,262],[137,433],[431,200],[356,-235],[-117,-414]],[[99547,40335],[96,-171],[-46,-308],[-172,-81],[-153,73],[-27,260],[107,203],[126,-74],[69,98]],[[0,41087],[57,27],[-34,-284],[-23,-32],[99822,-145],[-177,-124],[-36,220],[139,121],[88,33],[-99836,184]],[[33000,19946],[333,354],[236,-148],[167,237],[222,-266],[-83,-207],[-375,-177],[-125,207],[-236,-266],[-139,266]],[[34854,51946],[70,252],[24,269],[48,253],[-107,349]],[[34889,53069],[-22,404],[144,508]],[[35011,53981],[95,-65],[204,-140],[294,-499],[46,-242]],[[52655,75484],[-92,-456],[-126,120],[-64,398],[56,219],[179,226],[47,-507]],[[51576,79843],[62,-52],[80,13]],[[51900,77752],[-11,-167],[82,-222],[-97,-180],[72,-457],[151,-75],[-32,-256]],[[52065,76395],[-252,-334],[-548,160],[-404,-192],[-32,-355]],[[49471,76235],[144,354],[53,1177],[-287,620],[-205,299],[-424,227],[-28,431],[360,129],[466,-152],[-88,669],[263,-254],[646,461],[84,484],[243,119]],[[53081,48229],[-285,596],[-184,488],[-169,610],[9,196],[61,189],[67,430],[56,438]],[[52636,51176],[94,35],[404,-6],[-2,711]],[[48278,82406],[-210,122],[-172,-9],[57,317],[-57,317]],[[47896,83153],[233,24],[298,-365],[-149,-406]],[[49165,85222],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38],[22,-62],[248,-697],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226],[-148,118],[407,621],[249,127],[-2,1],[-434,98],[-79,235],[291,183],[-152,319],[52,387],[413,-54],[1,0],[40,343],[-186,364],[-4,8],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49]],[[61542,75120],[42,252],[-70,403],[-160,218],[-154,68],[-102,181]],[[61098,76242],[34,70],[235,-101],[409,-96],[378,-283],[48,-110],[169,93],[259,-124],[85,-242],[175,-137]],[[62106,74858],[-268,290],[-296,-28]],[[50294,54083],[-436,-346],[-154,-203],[-250,-171],[-248,168]],[[50006,57090],[-20,-184],[116,-305],[-1,-429],[27,-466],[69,-215],[-61,-532],[22,-294],[74,-375],[62,-207]],[[47655,55121],[-78,15],[-57,-238],[-78,3],[-55,126],[19,237],[-116,362],[-73,-67],[-59,-13]],[[47158,55546],[-77,-34],[3,217],[-44,155],[9,171],[-60,249],[-78,211],[-222,1],[-65,-112],[-76,-13],[-48,-128],[-32,-163],[-148,-260]],[[46320,55840],[-122,349],[-108,232],[-71,76],[-69,118],[-32,261],[-41,130],[-80,97]],[[45797,57103],[123,288],[84,-11],[73,99],[61,1],[44,78],[-24,196],[31,62],[5,200]],[[46194,58016],[134,-6],[200,-144],[61,13],[21,66],[151,-47],[40,33]],[[46801,57931],[16,-216],[44,1],[73,78],[46,-19],[77,-150],[119,-48],[76,128],[90,79],[67,83],[55,-15],[62,-130],[33,-163],[114,-248],[-57,-152],[-11,-192],[59,58],[35,-69],[-15,-176],[85,-170]],[[45321,58350],[36,262]],[[45357,58612],[302,17],[63,140],[88,9],[110,-145],[86,-3],[92,99],[56,-170],[-120,-133],[-121,11],[-119,124],[-103,-136],[-50,-5],[-67,-83],[-253,13]],[[45797,57103],[-149,247],[-117,39],[-63,166],[1,90],[-84,125],[-18,127]],[[45367,57897],[147,96],[92,-19],[75,67],[513,-25]],[[52636,51176],[-52,90],[96,663]],[[56583,71675],[152,-199],[216,34],[207,-42],[-7,-103],[151,71],[-35,-175],[-400,-50],[3,98],[-339,115],[52,251]],[[57237,74699],[-169,17],[-145,56],[-336,-154],[192,-332],[-141,-96],[-154,-1],[-147,305],[-52,-130],[62,-353],[139,-277],[-105,-129],[155,-273],[137,-171],[4,-334],[-257,157],[82,-302],[-176,-62],[105,-521],[-184,-8],[-228,257],[-104,473],[-49,393],[-108,272],[-143,337],[-18,168]],[[55838,74710],[182,53],[106,129],[150,-12],[46,103],[53,20]],[[57254,75292],[135,-157],[-86,-369],[-66,-67]],[[37010,99398],[932,353],[975,-27],[354,218],[982,57],[2219,-74],[1737,-469],[-513,-227],[-1062,-26],[-1496,-58],[140,-105],[984,65],[836,-204],[540,181],[231,-212],[-305,-344],[707,220],[1348,229],[833,-114],[156,-253],[-1132,-420],[-157,-136],[-888,-102],[643,-28],[-324,-431],[-224,-383],[9,-658],[333,-386],[-434,-24],[-457,-187],[513,-313],[65,-502],[-297,-55],[360,-508],[-617,-42],[322,-241],[-91,-208],[-391,-91],[-388,-2],[348,-400],[4,-263],[-549,244],[-143,-158],[375,-148],[364,-361],[105,-476],[-495,-114],[-214,228],[-344,340],[95,-401],[-322,-311],[732,-25],[383,-32],[-745,-515],[-755,-466],[-813,-204],[-306,-2],[-288,-228],[-386,-624],[-597,-414],[-192,-24],[-370,-145],[-399,-138],[-238,-365],[-4,-415],[-141,-388],[-453,-472],[112,-462],[-125,-488],[-142,-577],[-391,-36],[-410,482],[-556,3],[-269,324],[-186,577],[-481,735],[-141,385],[-38,530],[-384,546],[100,435],[-186,208],[275,691],[418,220],[110,247],[58,461],[-318,-209],[-151,-88],[-249,-84],[-341,193],[-19,401],[109,314],[258,9],[567,-157],[-478,375],[-249,202],[-276,-83],[-232,147],[310,550],[-169,220],[-220,409],[-335,626],[-353,230],[3,247],[-745,346],[-590,43],[-743,-24],[-677,-44],[-323,188],[-482,372],[729,186],[559,31],[-1188,154],[-627,241],[39,229],[1051,285],[1018,284],[107,214],[-750,213],[243,235],[961,413],[404,63],[-115,265],[658,156],[854,93],[853,5],[303,-184],[737,325],[663,-221],[390,-46],[577,-192],[-660,318],[38,253]],[[24973,58695],[-142,103],[-174,11],[-127,117],[-149,244]],[[24381,59170],[7,172],[32,138],[-39,111],[133,481],[357,2],[7,201],[-45,36],[-31,128],[-103,136],[-103,198],[125,1],[1,333],[259,1],[257,-7]],[[25297,59966],[90,-107],[24,88],[82,-75]],[[25493,59872],[-127,-225],[-131,-166],[-20,-113],[22,-116],[-58,-150]],[[25179,59102],[-65,-37],[15,-69],[-52,-66],[-95,-149],[-9,-86]],[[33400,55523],[183,-217],[171,-385],[8,-304],[105,-14],[149,-289],[109,-205]],[[34125,54109],[-44,-532],[-169,-154],[15,-139],[-51,-305],[123,-429],[89,-1],[37,-333],[169,-514]],[[33129,53652],[-188,448],[75,163],[-5,273],[171,95],[69,110],[-95,220],[24,215],[220,347]],[[25745,58251],[-48,185],[-84,51]],[[25613,58487],[19,237],[-38,64],[-57,42],[-122,-70],[-10,79],[-84,95],[-60,118],[-82,50]],[[25493,59872],[29,-23],[61,104],[79,8],[26,-48],[43,29],[129,-53],[128,15],[90,66],[32,66],[89,-31],[66,-40],[73,14],[55,51],[127,-82],[44,-13],[85,-110],[80,-132],[101,-91],[73,-162]],[[26903,59440],[-95,12],[-38,-81],[-97,-77],[-70,0],[-61,-76],[-56,27],[-47,90],[-29,-17],[-36,-141],[-27,5],[-4,-121],[-97,-163],[-51,-70],[-29,-74],[-82,120],[-60,-158],[-58,4],[-65,-14],[6,-290],[-41,-5],[-35,-135],[-86,-25]],[[55230,77704],[67,-229],[89,-169],[-107,-222]],[[55155,75778],[-31,-100]],[[55124,75678],[-261,218],[-161,213],[-254,176],[-233,434],[56,45],[-127,248],[-5,200],[-179,93],[-85,-255],[-82,198],[6,205],[10,9]],[[53809,77462],[194,-20],[51,100],[94,-97],[109,-11],[-1,165],[97,60],[27,239],[221,157]],[[54601,78055],[88,-73],[208,-253],[229,-114],[104,89]],[[30081,61241],[-185,100],[-131,-41],[-169,43],[-130,-110],[-149,184],[24,190],[256,-82],[210,-47],[100,131],[-127,256],[2,226],[-175,92],[62,163],[170,-26],[241,-93]],[[54716,79012],[141,-151],[103,-65],[233,73],[22,118],[111,18],[135,92],[30,-38],[130,74],[66,139],[91,36],[297,-180],[59,61]],[[56134,79189],[155,-161],[19,-159]],[[56308,78869],[-170,-123],[-131,-401],[-168,-401],[-223,-111]],[[55616,77833],[-173,26],[-213,-155]],[[54601,78055],[-54,200],[-47,6]],[[83531,44530],[-117,-11],[-368,414],[259,116],[146,-180],[97,-180],[-17,-159]],[[84713,45326],[28,-117],[5,-179]],[[84746,45030],[-181,-441],[-238,-130],[-33,71],[25,201],[119,360],[275,235]],[[82749,45797],[100,-158],[172,48],[69,-251],[-321,-119],[-193,-79],[-149,5],[95,340],[153,5],[74,209]],[[84139,45797],[-41,-328],[-417,-168],[-370,73],[0,216],[220,123],[174,-177],[185,45],[249,216]],[[80172,46575],[533,-59],[61,244],[515,-284],[101,-383],[417,-108],[341,-351],[-317,-225],[-306,238],[-251,-16],[-288,44],[-260,106],[-322,225],[-204,59],[-116,-74],[-506,243],[-48,254],[-255,44],[191,564],[337,-35],[224,-231],[115,-45],[38,-210]],[[87423,46908],[-143,-402],[-27,445],[49,212],[58,200],[63,-173],[0,-282]],[[85346,48536],[-104,-196],[-192,108],[-54,254],[281,29],[69,-195]],[[86241,48752],[101,-452],[-234,244],[-232,49],[-157,-39],[-192,21],[65,325],[344,24],[305,-172]],[[89166,49043],[5,-1925],[4,-1925]],[[89175,45193],[-247,485],[-282,118],[-69,-168],[-352,-18],[118,481],[175,164],[-72,642],[-134,496],[-538,500],[-229,50],[-417,546],[-82,-287],[-107,-52],[-63,216],[-1,257],[-212,290],[299,213],[198,-11],[-23,156],[-407,1],[-110,352],[-248,109],[-117,293],[374,143],[142,192],[446,-242],[44,-220],[78,-955],[287,-354],[232,627],[319,356],[247,1],[238,-206],[206,-212],[298,-113]],[[84788,51419],[-223,-587],[-209,-113],[-267,115],[-463,-29],[-243,-85],[-39,-447],[248,-526],[150,268],[518,201],[-22,-272],[-121,86],[-121,-347],[-245,-229],[263,-757],[-50,-203],[249,-682],[-2,-388],[-148,-173],[-109,207],[134,484],[-273,-229],[-69,164],[36,228],[-200,346],[21,576],[-186,-179],[24,-689],[11,-846],[-176,-85],[-119,173],[79,544],[-43,570],[-117,4],[-86,405],[115,387],[40,469],[139,891],[58,243],[237,439],[217,-174],[350,-82],[319,25],[275,429],[48,-132]],[[85746,51249],[-15,-517],[-143,58],[-42,-359],[114,-312],[-78,-71],[-112,374],[-82,755],[56,472],[92,215],[20,-322],[164,-52],[26,-241]],[[80461,51765],[47,-395],[190,-334],[179,121],[177,-43],[162,299],[133,52],[263,-166],[226,126],[143,822],[107,205],[96,672],[319,0],[241,-100]],[[82744,53024],[-158,-533],[204,-560],[-48,-272],[312,-546],[-329,-70],[-93,-403],[12,-535],[-267,-404],[-7,-589],[-107,-903],[-41,210],[-316,-266],[-110,361],[-198,34],[-139,189],[-330,-212],[-101,285],[-182,-32],[-229,68],[-43,793],[-138,164],[-134,505],[-38,517],[32,548],[165,392]],[[79393,47122],[-308,-12],[-234,494],[-356,482],[-119,358],[-210,481],[-138,443],[-212,827],[-244,493],[-81,508],[-103,461],[-250,372],[-145,506],[-209,330],[-290,652],[-24,300],[178,-24],[430,-114],[246,-577],[215,-401],[153,-246],[263,-635],[283,-9],[233,-405],[161,-495],[211,-270],[-111,-482],[159,-205],[100,-15],[47,-412],[97,-330],[204,-52],[135,-374],[-70,-735],[-11,-914]],[[72530,68413],[-176,-268],[-108,-553],[269,-224],[262,-289],[362,-332],[381,-76],[160,-301],[215,-56],[334,-138],[231,10],[32,234],[-36,375],[21,255]],[[77035,67277],[20,-224],[-97,-108],[23,-364],[-199,107],[-359,-408],[8,-338],[-153,-496],[-14,-288],[-124,-487],[-217,135],[-11,-612],[-63,-201],[30,-251],[-137,-140]],[[74730,63611],[-39,-216],[-189,7],[-343,-122],[16,-445],[-148,-349],[-400,-398],[-311,-695],[-209,-373],[-276,-387],[-1,-271],[-138,-146],[-251,-212],[-129,-31],[-84,-450],[58,-769],[15,-490],[-118,-561],[-1,-1004],[-144,-29],[-126,-450],[84,-195],[-253,-168],[-93,-401],[-112,-170],[-263,552],[-128,827],[-107,596],[-97,279],[-148,568],[-69,739],[-48,369],[-253,811],[-115,1145],[-83,756],[1,716],[-54,553],[-404,-353],[-196,70],[-362,716],[133,214],[-82,232],[-326,501]],[[68937,64577],[185,395],[612,-2],[-56,507],[-156,300],[-31,455],[-182,265],[306,619],[323,-45],[290,620],[174,599],[270,593],[-4,421],[236,342],[-224,292],[-96,400],[-99,517],[137,255],[421,-144],[310,88],[268,496]],[[48278,82406],[46,-422],[-210,-528],[-493,-349],[-393,89],[225,617],[-145,601],[378,463],[210,276]],[[64978,72558],[244,114],[197,338],[186,-17],[122,110],[197,-55],[308,-299],[221,-65],[318,-523],[207,-21],[24,-498]],[[66909,68203],[137,-310],[112,-357],[266,-260],[7,-520],[133,-96],[23,-272],[-400,-305],[-105,-687]],[[67082,65396],[-523,179],[-303,136],[-313,76],[-118,725],[-133,105],[-214,-106],[-280,-286],[-339,196],[-281,454],[-267,168],[-186,561],[-205,788],[-149,-96],[-177,196],[-104,-231]],[[63490,68261],[-153,311],[-3,314],[-89,0],[46,428],[-143,449],[-340,324],[-193,562],[65,461],[139,204],[-21,345],[-182,177],[-180,705]],[[62436,72541],[-152,473],[55,183],[-87,678],[190,168]],[[63578,73220],[88,-436],[263,-123],[193,-296],[395,-102],[434,156],[27,139]],[[63490,68261],[-164,29]],[[63326,68290],[-187,49],[-204,-567]],[[62935,67772],[-516,47],[-784,1188],[-413,414],[-335,160]],[[60887,69581],[-112,720]],[[60775,70301],[615,614],[105,715],[-26,431],[152,146],[142,369]],[[61763,72576],[119,92],[324,-77],[97,-150],[133,100]],[[45969,89843],[-64,-382],[314,-403],[-361,-451],[-801,-405],[-240,-107],[-365,87],[-775,187],[273,261],[-605,289],[492,114],[-12,174],[-583,137],[188,385],[421,87],[433,-400],[422,321],[349,-167],[453,315],[461,-42]],[[59922,69905],[-49,-186]],[[59873,69719],[-100,82],[-58,-394],[69,-66],[-71,-81],[-12,-156],[131,80]],[[59832,69184],[7,-230],[-139,-944]],[[59518,69025],[80,194],[-19,34],[74,276],[56,446],[40,149],[8,6]],[[59757,70130],[93,-1],[25,104],[75,8]],[[59950,70241],[4,-242],[-38,-90],[6,-4]],[[54311,73167],[-100,-465],[41,-183],[-58,-303],[-213,222],[-141,64],[-387,300],[38,304],[325,-54],[284,64],[211,51]],[[52558,74927],[166,-419],[-39,-782],[-126,38],[-113,-197],[-105,156],[-11,713],[-64,338],[153,-30],[139,183]],[[53835,78058],[-31,-291],[67,-251]],[[53871,77516],[-221,86],[-226,-210],[15,-293],[-34,-168],[91,-301],[261,-298],[140,-488],[309,-476],[217,3],[68,-130],[-78,-118],[249,-214],[204,-178],[238,-308],[29,-111],[-52,-211],[-154,276],[-242,97],[-116,-382],[200,-219],[-33,-309],[-116,-35],[-148,-506],[-116,-46],[1,181],[57,317],[60,126],[-108,342],[-85,298],[-115,74],[-82,255],[-179,107],[-120,238],[-206,38],[-217,267],[-254,384],[-189,340],[-86,585],[-138,68],[-226,195],[-128,-80],[-161,-274],[-115,-43]],[[28453,61504],[187,-53],[147,-142],[46,-161],[-195,-11],[-84,-99],[-156,95],[-159,215],[34,135],[116,41],[64,-20]],[[59922,69905],[309,-234],[544,630]],[[60887,69581],[-53,-89],[-556,-296],[277,-591],[-92,-101],[-46,-197],[-212,-82],[-66,-213],[-120,-182],[-310,94]],[[59709,67924],[-9,86]],[[59832,69184],[41,173],[0,362]],[[87399,70756],[35,-203],[-156,-357],[-114,189],[-143,-137],[-73,-346],[-181,168],[2,281],[154,352],[158,-68],[114,248],[204,-127]],[[89159,72524],[-104,-472],[48,-296],[-145,-416],[-355,-278],[-488,-36],[-396,-675],[-186,227],[-12,442],[-483,-130],[-329,-279],[-325,-11],[282,-435],[-186,-1004],[-179,-248],[-135,229],[69,533],[-176,172],[-113,405],[263,182],[145,371],[280,306],[203,403],[553,177],[297,-121],[291,1050],[185,-282],[408,591],[158,229],[174,723],[-47,664],[117,374],[295,108],[152,-819],[-9,-479],[-256,-595],[4,-610]],[[89974,76679],[195,-126],[197,250],[62,-663],[-412,-162],[-244,-587],[-436,404],[-152,-646],[-308,-9],[-39,587],[138,455],[296,33],[81,817],[83,460],[326,-615],[213,-198]],[[69711,75551],[-159,-109],[-367,-412],[-121,-422],[-104,-4],[-76,280],[-353,19],[-57,484],[-135,4],[21,593],[-333,431],[-476,-46],[-326,-86],[-265,533],[-227,223],[-431,423],[-52,51],[-715,-349],[11,-2178]],[[65546,74986],[-142,-29],[-195,463],[-188,166],[-315,-123],[-123,-197]],[[64583,75266],[-15,144],[68,246],[-53,206],[-322,202],[-125,530],[-154,150],[-9,192],[270,-56],[11,432],[236,96],[243,-88],[50,576],[-50,365],[-278,-28],[-236,144],[-321,-260],[-259,-124]],[[63639,77993],[-142,96],[29,304],[-177,395],[-207,-17],[-235,401],[160,448],[-81,120],[222,649],[285,-342],[35,431],[573,643],[434,15],[612,-409],[329,-239],[295,249],[440,12],[356,-306],[80,175],[391,-25],[69,280],[-450,406],[267,288],[-52,161],[266,153],[-200,405],[127,202],[1039,205],[136,146],[695,218],[250,245],[499,-127],[88,-612],[290,144],[356,-202],[-23,-322],[267,33],[696,558],[-102,-185],[355,-457],[620,-1500],[148,309],[383,-340],[399,151],[154,-106],[133,-341],[194,-115],[119,-251],[358,79],[147,-361]],[[72294,75601],[-171,87],[-140,212],[-412,62],[-461,16],[-100,-65],[-396,248],[-158,-122],[-43,-349],[-457,204],[-183,-84],[-62,-259]],[[61551,49585],[-195,-236],[-68,-246],[-104,-44],[-40,-416],[-89,-238],[-54,-393],[-112,-195]],[[60889,47817],[-399,590],[-19,343],[-1007,1203],[-47,65]],[[59417,50018],[-3,627],[80,239],[137,391],[101,431],[-123,678],[-32,296],[-132,411]],[[59445,53091],[171,352],[188,390]],[[61626,52895],[-243,-670],[3,-2152],[165,-488]],[[70465,73876],[-526,-89],[-343,192],[-301,-46],[26,340],[303,-98],[101,182]],[[69725,74357],[212,-58],[355,425],[-329,311],[-198,-147],[-205,223],[234,382],[-83,58]],[[78495,57780],[-66,713],[178,492],[359,112],[261,-84]],[[79227,59013],[229,-232],[126,407],[246,-217]],[[79828,58971],[64,-394],[-34,-708],[-467,-455],[122,-358],[-292,-43],[-240,-238]],[[78981,56775],[-233,87],[-112,307],[-141,611]],[[85652,73393],[240,-697],[68,-383],[3,-681],[-105,-325],[-252,-113],[-222,-245],[-250,-51],[-31,322],[51,443],[-122,615],[206,99],[-190,506]],[[85048,72883],[17,54],[124,-21],[108,266],[197,29],[118,39],[40,143]],[[55575,75742],[52,132]],[[55627,75874],[66,43],[38,196],[50,33],[40,-84],[52,-36],[36,-94],[46,-28],[54,-110],[39,4],[-31,-144],[-33,-71],[9,-44]],[[55993,75539],[-62,-23],[-164,-91],[-13,-121],[-35,5]],[[63326,68290],[58,-261],[-25,-135],[89,-445]],[[63448,67449],[-196,-16],[-69,282],[-248,57]],[[79227,59013],[90,266],[12,500],[-224,515],[-18,583],[-211,480],[-210,40],[-56,-205],[-163,-17],[-83,104],[-293,-353],[-6,530],[68,623],[-188,27],[-16,355],[-120,182]],[[77809,62643],[59,218],[237,384]],[[78380,63852],[162,-466],[125,-537],[342,-5],[108,-515],[-178,-155],[-80,-212],[333,-353],[231,-699],[175,-520],[210,-411],[70,-418],[-50,-590]],[[59757,70130],[99,482],[138,416],[5,21]],[[59999,71049],[125,-31],[45,-231],[-151,-223],[-68,-323]],[[47857,53158],[-73,-5],[-286,282],[-252,449],[-237,324],[-187,381]],[[46822,54589],[66,189],[15,172],[126,320],[129,276]],[[54125,64088],[-197,-220],[-156,324],[-439,255]],[[52633,68486],[136,137],[24,250],[-30,244],[191,228],[86,189],[135,170],[16,454]],[[53191,70158],[326,-204],[117,51],[232,-98],[368,-264],[130,-526],[250,-114],[391,-248],[296,-293],[136,153],[133,272],[-65,452],[87,288],[200,277],[192,80],[375,-121],[95,-264],[104,-2],[88,-101],[276,-70],[68,-195]],[[56944,63578],[0,-1180],[-320,-2],[-3,-248]],[[56621,62148],[-1108,1131],[-1108,1132],[-280,-323]],[[72718,55024],[-42,-615],[-116,-168],[-242,-135],[-132,470],[-49,849],[126,959],[192,-328],[129,-416],[134,-616]],[[58049,33472],[96,-178],[-85,-288],[-47,-192],[-155,-93],[-51,-188],[-99,-59],[-209,454],[148,374],[151,232],[130,120],[121,-182]],[[56314,82678],[-23,150],[30,162],[-123,94],[-291,103]],[[55907,83187],[-59,497]],[[55848,83684],[318,181],[466,-38],[273,59],[39,-123],[148,-38],[267,-287]],[[56523,82432],[-67,182],[-142,64]],[[55848,83684],[10,445],[136,371],[262,202],[221,-442],[223,12],[53,453]],[[57579,84537],[134,-136],[24,-287],[89,-348]],[[47592,66920],[-42,0],[7,-317],[-172,-19],[-90,-134],[-126,0],[-100,76],[-234,-63],[-91,-460],[-86,-44],[-131,-745],[-386,-637],[-92,-816],[-114,-265],[-33,-213],[-625,-48],[-5,1]],[[45272,63236],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603],[5,8],[139,227],[259,65],[218,404],[140,158],[232,493],[-70,735],[106,508],[37,312],[179,399],[278,270],[206,244],[186,612],[87,362],[205,-2],[167,-251],[264,41],[288,-131],[121,-6]],[[57394,79070],[66,87],[185,58],[204,-184],[115,-22],[125,-159],[-20,-200],[101,-97],[40,-247],[97,-150],[-19,-88],[52,-60],[-74,-44],[-164,18],[-27,81],[-58,-47],[20,-106],[-76,-188],[-49,-203],[-70,-64]],[[57842,77455],[-50,270],[30,252],[-9,259],[-160,352],[-89,249],[-86,175],[-84,58]],[[63761,43212],[74,-251],[69,-390],[45,-711],[72,-276],[-28,-284],[-49,-174],[-94,347],[-53,-175],[53,-438],[-24,-250],[-77,-137],[-18,-500],[-109,-689],[-137,-814],[-172,-1120],[-106,-821],[-125,-685],[-226,-140],[-243,-250],[-160,151],[-220,211],[-77,312],[-18,524],[-98,471],[-26,425],[50,426],[128,102],[1,197],[133,447],[25,377],[-65,280],[-52,372],[-23,544],[97,331],[38,375],[138,22],[155,121],[103,107],[122,7],[158,337],[229,364],[83,297],[-38,253],[118,-71],[153,410],[6,356],[92,264],[96,-254]],[[23016,65864],[-107,-518],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10]],[[24381,59170],[-314,636],[-144,191],[-226,155],[-156,-43],[-223,-223],[-140,-58],[-196,156],[-208,112],[-260,271],[-208,83],[-314,275],[-233,282],[-70,158],[-155,35],[-284,187],[-116,270],[-299,335],[-139,373],[-66,288],[93,57],[-29,169],[64,153],[1,204],[-93,266],[-25,235],[-94,298],[-244,587],[-280,462],[-135,368],[-238,241],[-51,145],[42,365],[-142,138],[-164,287],[-69,412],[-149,48],[-162,311],[-130,288],[-12,184],[-149,446],[-99,452],[5,227],[-201,234],[-93,-25],[-159,163],[-44,-240],[46,-284],[27,-444],[95,-243],[206,-407],[46,-139],[42,-42],[37,-203],[49,8],[56,-381],[85,-150],[59,-210],[174,-300],[92,-550],[83,-259],[77,-277],[15,-311],[134,-20],[112,-268],[100,-264],[-6,-106],[-117,-217],[-49,3],[-74,359],[-181,337],[-201,286],[-142,150],[9,432],[-42,320],[-132,183],[-191,264],[-37,-76],[-70,154],[-171,143],[-164,343],[20,44],[115,-33],[103,221],[10,266],[-214,422],[-163,163],[-102,369],[-103,388],[-129,472],[-113,531]],[[17464,69802],[316,46],[353,64],[-26,-116],[419,-287],[634,-416],[552,4],[221,0],[0,244],[481,0],[102,-210],[142,-186],[165,-260],[92,-309],[69,-325],[144,-178],[230,-177],[175,467],[227,11],[196,-236],[139,-404],[96,-346],[164,-337],[61,-414],[78,-277],[217,-184],[197,-130],[108,18]],[[55993,75539],[95,35],[128,9]],[[46619,59216],[93,107],[47,348],[88,14],[194,-165],[157,117],[107,-39],[42,131],[1114,9],[62,414],[-48,73],[-134,2550],[-134,2550],[425,10]],[[51185,61897],[1,-1361],[-152,-394],[-24,-364],[-247,-94],[-379,-51],[-102,-210],[-178,-23]],[[46801,57931],[13,184],[-24,229],[-104,166],[-54,338],[-13,368]],[[77375,56448],[-27,439],[86,452],[-94,350],[23,644],[-113,306],[-90,707],[-50,746],[-121,490],[-183,-297],[-315,-421],[-156,53],[-172,138],[96,732],[-58,554],[-218,681],[34,213],[-163,76],[-197,481]],[[77809,62643],[-159,-137],[-162,-256],[-196,-26],[-127,-639],[-117,-107],[134,-519],[177,-431],[113,-390],[-101,-514],[-96,-109],[66,-296],[185,-470],[32,-330],[-4,-274],[108,-539],[-152,-551],[-135,-607]],[[55380,75322],[-58,46],[-78,192],[-120,118]],[[55338,76294],[74,-101],[40,-82],[91,-63],[106,-123],[-22,-51]],[[74375,79706],[292,102],[530,509],[423,278],[242,-182],[289,-8],[186,-276],[277,-22],[402,-148],[270,411],[-113,348],[288,612],[311,-244],[252,-69],[327,-152],[53,-443],[394,-248],[263,109],[351,78],[279,-78],[272,-284],[168,-302],[258,6],[350,-96],[255,146],[366,98],[407,416],[166,-63],[146,-198],[331,49]],[[59599,43773],[209,48],[334,-166],[73,74],[193,16],[99,177],[167,-10],[303,230],[221,342]],[[61198,44484],[45,-265],[-11,-588],[34,-519],[11,-923],[49,-290],[-83,-422],[-108,-410],[-177,-366],[-254,-225],[-313,-287],[-313,-634],[-107,-108],[-194,-420],[-115,-136],[-23,-421],[132,-448],[54,-346],[4,-177],[49,29],[-8,-579],[-45,-275],[65,-101],[-41,-245],[-116,-211],[-229,-199],[-334,-320],[-122,-219],[24,-248],[71,-40],[-24,-311]],[[59119,34780],[-211,5]],[[58908,34785],[-24,261],[-41,265]],[[58843,35311],[-23,212],[49,659],[-72,419],[-133,832]],[[58664,37433],[292,671],[74,426],[42,53],[31,348],[-45,175],[12,442],[54,409],[0,748],[-145,190],[-132,43],[-60,146],[-128,125],[-232,-12],[-18,220]],[[58409,41417],[-26,421],[843,487]],[[59226,42325],[159,-284],[77,54],[110,-149],[16,-237],[-59,-274],[21,-417],[181,-365],[85,410],[120,124],[-24,760],[-116,427],[-100,191],[-97,-9],[-77,768],[77,449]],[[46619,59216],[-184,405],[-168,435],[-184,157],[-133,173],[-155,-6],[-135,-129],[-138,51],[-96,-189]],[[45426,60113],[-24,318],[78,291],[34,557],[-30,583],[-34,294],[28,295],[-72,281],[-146,255]],[[45260,62987],[60,197],[1088,-4],[-53,853],[68,304],[261,53],[-9,1512],[911,-31],[1,895]],[[59226,42325],[-147,153],[85,549],[87,205],[-53,490],[56,479],[47,160],[-71,501],[-131,264]],[[59099,45126],[273,-110],[55,-164],[95,-275],[77,-804]],[[78372,54256],[64,-56],[164,-356],[116,-396],[16,-398],[-29,-269],[27,-203],[20,-349],[98,-163],[109,-523],[-5,-199],[-197,-40],[-263,438],[-329,469],[-32,301],[-161,395],[-38,489],[-100,322],[30,431],[-61,250]],[[77801,54399],[48,105],[227,-258],[22,-304],[183,71],[91,243]],[[80461,51765],[204,-202],[214,110],[56,500],[119,112],[333,128],[199,467],[137,374]],[[82069,53798],[214,411],[140,462],[112,2],[143,-299],[13,-257],[183,-165],[231,-177],[-20,-232],[-186,-29],[50,-289],[-205,-201]],[[54540,33696],[-207,446],[-108,432],[-62,575],[-68,428],[-93,910],[-7,707],[-35,322],[-108,243],[-144,489],[-146,708],[-60,371],[-226,577],[-17,453]],[[56448,40227],[228,134],[180,-34],[109,-133],[2,-49]],[[55526,35946],[0,-2182],[-248,-302],[-149,-43],[-175,112],[-125,43],[-47,252],[-109,162],[-133,-292]],[[96049,38125],[228,-366],[144,-272],[-105,-142],[-153,160],[-199,266],[-179,313],[-184,416],[-38,201],[119,-9],[156,-201],[122,-200],[89,-166]],[[54125,64088],[68,-919],[104,-153],[4,-188],[116,-203],[-60,-254],[-107,-1199],[-15,-769],[-354,-557],[-120,-778],[115,-219],[0,-380],[178,-13],[-28,-279]],[[53939,57955],[-52,-13],[-188,647],[-65,24],[-217,-331],[-215,173],[-150,34],[-80,-83],[-163,18],[-164,-252],[-141,-14],[-337,305],[-131,-145],[-142,10],[-104,223],[-279,221],[-298,-70],[-72,-128],[-39,-340],[-80,-238],[-19,-527]],[[52361,53399],[-289,-213],[-105,31],[-107,-132],[-222,13],[-149,370],[-91,427],[-197,389],[-209,-7],[-245,1]],[[26191,57131],[-96,186],[-130,238],[-61,200],[-117,185],[-140,267],[31,91],[46,-88],[21,41]],[[26903,59440],[-24,-57],[-14,-132],[29,-216],[-64,-202],[-30,-237],[-9,-261],[15,-152],[7,-266],[-43,-58],[-26,-253],[19,-156],[-56,-151],[12,-159],[43,-97]],[[50920,80916],[143,162],[244,869],[380,248],[231,-17]],[[58639,91676],[-473,-237],[-224,-54]],[[55734,91409],[-172,-24],[-41,-389],[-523,95],[-74,-329],[-267,2],[-183,-421],[-278,-655],[-431,-831],[101,-202],[-97,-234],[-275,10],[-180,-554],[17,-784],[177,-300],[-92,-694],[-231,-405],[-122,-341]],[[53063,85353],[-187,363],[-548,-684],[-371,-138],[-384,301],[-99,635],[-88,1363],[256,381],[733,496],[549,609],[508,824],[668,1141],[465,444],[763,741],[610,259],[457,-31],[423,489],[506,-26],[499,118],[869,-433],[-358,-158],[305,-371]],[[56867,96577],[-620,-241],[-490,137],[191,152],[-167,189],[575,119],[110,-222],[401,-134]],[[55069,97669],[915,-440],[-699,-233],[-155,-435],[-243,-111],[-132,-490],[-335,-23],[-598,361],[252,210],[-416,170],[-541,499],[-216,463],[757,212],[152,-207],[396,8],[105,202],[408,20],[350,-206]],[[57068,98086],[545,-207],[-412,-318],[-806,-70],[-819,98],[-50,163],[-398,11],[-304,271],[858,165],[403,-142],[281,177],[702,-148]],[[98060,26404],[63,-244],[198,239],[80,-249],[0,-249],[-103,-274],[-182,-435],[-142,-238],[103,-284],[-214,-7],[-238,-223],[-75,-387],[-157,-597],[-219,-264],[-138,-169],[-256,13],[-180,194],[-302,42],[-46,217],[149,438],[349,583],[179,111],[200,225],[238,310],[167,306],[123,441],[106,149],[41,330],[195,273],[61,-251]],[[98502,29218],[202,-622],[5,403],[126,-161],[41,-447],[224,-192],[188,-48],[158,226],[141,-69],[-67,-524],[-85,-345],[-212,12],[-74,-179],[26,-254],[-41,-110],[-105,-319],[-138,-404],[-214,-236],[-48,155],[-116,85],[160,486],[-91,326],[-299,236],[8,214],[201,206],[47,455],[-13,382],[-113,396],[8,104],[-133,244],[-218,523],[-117,418],[104,46],[151,-328],[216,-153],[78,-526]],[[64752,60417],[-91,413],[-217,975]],[[64444,61805],[833,591],[185,1182],[-127,418]],[[65665,65306],[125,-404],[155,-214],[203,-78],[165,-107],[125,-339],[75,-196],[100,-75],[-1,-132],[-101,-352],[-44,-166],[-117,-189],[-104,-404],[-126,31],[-58,-141],[-44,-300],[34,-395],[-26,-72],[-128,2],[-174,-221],[-27,-288],[-63,-125],[-173,5],[-109,-149],[1,-238],[-134,-165],[-153,56],[-186,-199],[-128,-34]],[[65575,65974],[80,201],[35,-51],[-26,-244],[-37,-108]],[[68937,64577],[-203,150],[-83,424],[-215,450],[-512,-111],[-451,-11],[-391,-83]],[[28366,54848],[-93,170],[-59,319],[68,158],[-70,40],[-52,196],[-138,164],[-122,-38],[-56,-205],[-112,-149],[-61,-20],[-27,-123],[132,-321],[-75,-76],[-40,-87],[-130,-30],[-48,353],[-36,-101],[-92,35],[-56,238],[-114,39],[-72,69],[-119,-1],[-8,-128],[-32,89]],[[27070,56232],[100,-212],[-6,-126],[111,-26],[26,48],[77,-145],[136,42],[119,150],[168,119],[95,176],[153,-34],[-10,-58],[155,-21],[124,-102],[90,-177],[105,-164]],[[30452,39739],[-279,340],[-24,242],[-551,593],[-498,646],[-214,365],[-115,488],[46,170],[-236,775],[-274,1090],[-262,1177],[-114,269],[-87,435],[-216,386],[-198,239],[90,264],[-134,563],[86,414],[221,373]],[[85104,55551],[28,-392],[16,-332],[-94,-540],[-102,602],[-130,-300],[89,-435],[-79,-277],[-327,343],[-78,428],[84,280],[-176,280],[-87,-245],[-131,23],[-205,-330],[-46,173],[109,498],[175,166],[151,223],[98,-268],[212,162],[45,264],[196,15],[-16,457],[225,-280],[23,-297],[20,-218]],[[84439,56653],[-100,-195],[-87,-373],[-87,-175],[-171,409],[57,158],[70,165],[30,367],[153,35],[-44,-398],[205,570],[-26,-563]],[[82917,56084],[-369,-561],[136,414],[200,364],[167,409],[146,587],[49,-482],[-183,-325],[-146,-406]],[[83856,57606],[166,-183],[177,1],[-5,-247],[-129,-251],[-176,-178],[-10,275],[20,301],[-43,282]],[[84861,57766],[78,-660],[-214,157],[5,-199],[68,-364],[-132,-133],[-11,416],[-84,31],[-43,357],[163,-47],[-4,224],[-169,451],[266,-13],[77,-220]],[[83757,58301],[-74,-510],[-119,295],[-142,450],[238,-22],[97,-213]],[[83700,61512],[171,-168],[85,153],[26,-150],[-46,-245],[95,-423],[-73,-491],[-164,-196],[-43,-476],[62,-471],[147,-65],[123,70],[347,-328],[-27,-321],[91,-142],[-29,-272],[-216,290],[-103,310],[-71,-217],[-177,354],[-253,-87],[-138,130],[14,244],[87,151],[-83,136],[-36,-213],[-137,340],[-41,257],[-11,566],[112,-195],[29,925],[90,535],[169,-1]],[[93299,46550],[-78,-59],[-120,227],[-122,375],[-59,450],[38,57],[30,-175],[84,-134],[135,-375],[131,-200],[-39,-166]],[[92217,47343],[-146,-48],[-44,-166],[-152,-144],[-142,-138],[-148,1],[-228,171],[-158,165],[23,183],[249,-86],[152,46],[42,283],[40,15],[27,-314],[158,45],[78,202],[155,211],[-30,348],[166,11],[56,-97],[-5,-327],[-93,-361]],[[89166,49043],[482,-407],[513,-338],[192,-302],[154,-297],[43,-349],[462,-365],[68,-313],[-256,-64],[62,-393],[248,-388],[180,-627],[159,20],[-11,-262],[215,-100],[-84,-111],[295,-249],[-30,-171],[-184,-41],[-69,153],[-238,66],[-281,89],[-216,377],[-158,325],[-144,517],[-362,259],[-235,-169],[-170,-195],[35,-436],[-218,-203],[-155,99],[-288,25]],[[92538,47921],[-87,-157],[-52,348],[-65,229],[-126,193],[-158,252],[-200,174],[77,143],[150,-166],[94,-130],[117,-142],[111,-248],[106,-189],[33,-307]],[[53922,82340],[189,174],[434,273],[350,200],[277,-100],[21,-144],[268,-7]],[[55461,82736],[342,-67],[511,9]],[[56535,81053],[139,-515],[-29,-166],[-138,-69],[-252,-491],[71,-266],[-60,35]],[[56266,79581],[-264,227],[-200,-84],[-131,61],[-165,-127],[-140,210],[-114,-81],[-16,36]],[[31588,61519],[142,-52],[50,-118],[-71,-149],[-209,4],[-163,-21],[-16,253],[40,86],[227,-3]],[[86288,75628],[39,-104]],[[86327,75524],[-106,36],[-120,-200],[-83,-202],[10,-424],[-143,-130],[-50,-105],[-104,-174],[-185,-97],[-121,-159],[-9,-256],[-32,-65],[111,-96],[157,-259]],[[85048,72883],[-135,112],[-34,-111],[-81,-49],[-10,112],[-72,54],[-75,94],[76,260],[66,69],[-25,108],[71,319],[-18,96],[-163,65],[-131,158]],[[47929,72498],[-112,-153],[-146,83],[-143,-65],[42,462],[-26,363],[-124,55],[-67,224],[22,386],[111,215],[20,239],[58,355],[-6,250],[-56,212],[-12,200]],[[64113,65205],[-18,430],[75,310],[76,64],[84,-185],[5,-346],[-61,-348]],[[64274,65130],[-77,-42],[-84,117]],[[56308,78869],[120,127],[172,-65],[178,-3],[129,-144],[95,91],[205,56],[69,139],[118,0]],[[57842,77455],[124,-109],[131,95],[126,-101]],[[58223,77340],[6,-152],[-135,-128],[-84,56],[-78,-713]],[[56293,76715],[-51,103],[65,99],[-69,74],[-87,-133],[-162,172],[-22,244],[-169,139],[-31,188],[-151,232]],[[89901,80562],[280,-1046],[-411,195],[-171,-854],[271,-605],[-8,-413],[-211,356],[-182,-457],[-51,496],[31,575],[-32,638],[64,446],[13,790],[-163,581],[24,808],[257,271],[-110,274],[123,83],[73,-391],[96,-569],[-7,-581],[114,-597]],[[55461,82736],[63,260],[383,191]],[[99999,92429],[-305,-30],[-49,187],[-99645,247],[36,24],[235,-1],[402,-169],[-24,-81],[-286,-141],[-363,-36],[99999,0]],[[89889,93835],[-421,-4],[-569,66],[-49,31],[263,234],[348,54],[394,-226],[34,-155]],[[91869,94941],[-321,-234],[-444,53],[-516,233],[66,192],[518,-89],[697,-155]],[[90301,95224],[-219,-439],[-1023,16],[-461,-139],[-550,384],[149,406],[366,111],[734,-26],[1004,-313]],[[65981,92363],[-164,-52],[-907,77],[-74,262],[-503,158],[-40,320],[284,126],[-10,323],[551,503],[-255,73],[665,518],[-75,268],[621,312],[917,380],[925,110],[475,220],[541,76],[193,-233],[-187,-184],[-984,-293],[-848,-282],[-863,-562],[-414,-577],[-435,-568],[56,-491],[531,-484]],[[63639,77993],[-127,-350],[-269,-97],[-276,-610],[252,-561],[-27,-398],[303,-696]],[[61098,76242],[-354,499],[-317,223],[-240,347],[202,95],[231,494],[-156,234],[410,241],[-8,129],[-249,-95]],[[60617,78409],[9,262],[143,165],[269,43],[44,197],[-62,326],[113,310],[-3,173],[-410,192],[-162,-6],[-172,277],[-213,-94],[-352,208],[6,116],[-99,256],[-222,29],[-23,183],[70,120],[-178,334],[-288,-57],[-84,30],[-70,-134],[-104,23]],[[57772,85719],[316,327],[-291,280]],[[58639,91676],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433],[18,-274],[18,-604],[358,-180],[217,-153],[36,286],[-168,254],[177,224],[672,-368],[233,144],[-186,433],[647,578],[256,-34],[260,-206],[161,406],[-231,352],[136,353],[-204,367],[777,-190],[158,-331],[-351,-73],[1,-328],[219,-203],[429,128],[68,377],[580,282],[970,507],[209,-29],[-273,-359],[344,-61],[199,202],[521,16],[412,245],[317,-356],[315,391],[-291,343],[145,195],[820,-179],[385,-185],[1006,-675],[186,309],[-282,313],[-8,125],[-335,58],[92,280],[-149,461],[-8,189],[512,535],[183,537],[206,116],[736,-156],[57,-328],[-263,-479],[173,-189],[89,-413],[-63,-809],[307,-362],[-120,-395],[-544,-839],[318,-87],[110,213],[306,151],[74,293],[240,281],[-162,336],[130,390],[-304,49],[-67,328],[222,593],[-361,482],[497,398],[-64,421],[139,13],[145,-328],[-109,-570],[297,-108],[-127,426],[465,233],[577,31],[513,-337],[-247,492],[-28,630],[483,119],[669,-26],[602,77],[-226,309],[321,388],[319,16],[540,293],[734,79],[93,162],[729,55],[227,-133],[624,314],[510,-10],[77,255],[265,252],[656,242],[476,-191],[-378,-146],[629,-90],[75,-292],[254,143],[812,-7],[626,-289],[223,-221],[-69,-307],[-307,-175],[-730,-328],[-209,-175],[345,-83],[410,-149],[251,112],[141,-379],[122,153],[444,93],[892,-97],[67,-276],[1162,-88],[15,451],[590,-104],[443,4],[449,-312],[128,-378],[-165,-247],[349,-465],[437,-240],[268,620],[446,-266],[473,159],[538,-182],[204,166],[455,-83],[-201,549],[367,256],[2509,-384],[236,-351],[727,-451],[1122,112],[553,-98],[231,-244],[-33,-432],[342,-168],[372,121],[492,15],[525,-116],[526,66],[484,-526],[344,189],[-224,378],[123,262],[886,-165],[578,36],[799,-282],[-99610,-258],[681,-451],[728,-588],[-24,-367],[187,-147],[-64,429],[754,-88],[544,-553],[-276,-257],[-455,-61],[-7,-578],[-111,-122],[-260,17],[-212,206],[-369,172],[-62,257],[-283,96],[-315,-76],[-151,207],[60,219],[-333,-140],[126,-278],[-158,-251],[99997,-3],[-357,-260],[-360,44],[250,-315],[166,-487],[128,-159],[32,-244],[-71,-157],[-518,129],[-777,-445],[-247,-69],[-425,-415],[-403,-362],[-102,-269],[-397,409],[-724,-464],[-126,219],[-268,-253],[-371,81],[-90,-388],[-333,-572],[10,-239],[316,-132],[-37,-860],[-258,-22],[-119,-494],[116,-255],[-486,-302],[-96,-674],[-415,-144],[-83,-600],[-400,-551],[-103,407],[-119,862],[-155,1313],[134,819],[234,353],[14,276],[432,132],[496,744],[479,608],[499,471],[223,833],[-337,-50],[-167,-487],[-705,-649],[-227,727],[-717,-201],[-696,-990],[230,-362],[-620,-154],[-430,-61],[20,427],[-431,90],[-344,-291],[-850,102],[-914,-175],[-899,-1153],[-1065,-1394],[438,-74],[136,-370],[270,-132],[178,295],[305,-38],[401,-650],[9,-503],[-217,-590],[-23,-705],[-126,-945],[-418,-855],[-94,-409],[-377,-688],[-374,-682],[-179,-349],[-370,-346],[-175,-8],[-175,287],[-373,-432],[-43,-197]],[[79187,96845],[-1566,-228],[507,776],[229,66],[208,-38],[704,-336],[-82,-240]],[[64204,98169],[-373,-78],[-250,-45],[-39,-97],[-324,-98],[-301,140],[158,185],[-618,18],[542,107],[422,8],[57,-160],[159,142],[262,97],[412,-129],[-107,-90]],[[77760,97184],[-606,-73],[-773,170],[-462,226],[-213,423],[-379,117],[722,404],[600,133],[540,-297],[640,-572],[-69,-531]],[[58449,49909],[110,-333],[-16,-348],[-80,-74]],[[58216,49787],[67,-60],[166,182]],[[45260,62987],[12,249]],[[61883,60238],[-37,252],[-83,178],[-22,236],[-143,212],[-148,495],[-79,482],[-192,406],[-124,97],[-184,563],[-32,411],[12,350],[-159,655],[-130,231],[-150,122],[-92,339],[15,133],[-77,306],[-81,132],[-108,440],[-170,476],[-141,406],[-139,-3],[44,325],[12,206],[34,236]],[[63448,67449],[109,-510],[137,-135],[47,-207],[190,-249],[16,-243],[-27,-197],[35,-199],[80,-165],[37,-194],[41,-145]],[[64274,65130],[53,-226]],[[64444,61805],[-801,-226],[-259,-266],[-199,-620],[-130,-99],[-70,197],[-106,-30],[-269,60],[-50,59],[-321,-14],[-75,-53],[-114,153],[-74,-290],[28,-249],[-121,-189]],[[59434,56171],[-39,12],[5,294],[-33,203],[-143,233],[-34,426],[34,436],[-129,41],[-19,-132],[-167,-30],[67,-173],[23,-355],[-152,-324],[-138,-426],[-144,-61],[-233,345],[-105,-122],[-29,-172],[-143,-112],[-9,-122],[-277,0],[-38,122],[-200,20],[-100,-101],[-77,51],[-143,344],[-48,163],[-200,-81],[-76,-274],[-72,-528],[-95,-111],[-85,-65]],[[56635,55672],[-23,28]],[[56351,57163],[3,143],[-102,174],[-3,343],[-58,228],[-98,-34],[28,217],[72,246],[-32,245],[92,181],[-58,138],[73,365],[127,435],[240,-41],[-14,2345]],[[60240,63578],[90,-580],[-61,-107],[40,-608],[102,-706],[106,-145],[152,-219]],[[59433,56242],[1,-71]],[[59434,56171],[3,-460]],[[59445,53091],[-171,-272],[-195,1],[-224,-138],[-176,132],[-115,-161]],[[56824,55442],[-189,230]],[[45357,58612],[-115,460],[-138,210],[122,112],[134,415],[66,304]],[[45367,57897],[-46,453]],[[95032,44386],[78,-203],[-194,4],[-106,363],[166,-142],[56,-22]],[[94680,44747],[-108,-14],[-170,60],[-58,91],[17,235],[183,-93],[91,-124],[45,-155]],[[94910,44908],[-42,-109],[-206,512],[-57,353],[94,0],[100,-473],[111,-283]],[[94409,45654],[12,-119],[-218,251],[-152,212],[-104,197],[41,60],[128,-142],[228,-272],[65,-187]],[[93760,46238],[-56,-33],[-121,134],[-114,243],[14,99],[166,-250],[111,-193]],[[46822,54589],[-75,44],[-200,238],[-144,316],[-49,216],[-34,437]],[[25613,58487],[-31,-139],[-161,9],[-100,57],[-115,117],[-154,37],[-79,127]],[[61984,57352],[91,-109],[54,-245],[125,-247],[138,-2],[262,151],[302,70],[245,184],[138,39],[99,108],[158,20]],[[63596,57321],[-2,-9],[-1,-244],[0,-596],[0,-308],[-125,-363],[-194,-493]],[[63596,57321],[89,12],[128,88],[147,59],[132,202],[105,2],[6,-163],[-25,-344],[1,-310],[-59,-214],[-78,-639],[-134,-659],[-172,-755],[-238,-866],[-237,-661],[-327,-806],[-278,-479],[-415,-586],[-259,-450],[-304,-715],[-64,-312],[-63,-140]],[[34125,54109],[333,-119],[30,107],[225,43],[298,-159]],[[34889,53069],[109,-351],[-49,-254],[-24,-270],[-71,-248]],[[56266,79581],[-77,-154],[-55,-238]],[[53809,77462],[62,54]],[[56639,89578],[-478,-167],[-269,-413],[43,-361],[-441,-475],[-537,-509],[-202,-832],[198,-416],[265,-328],[-255,-666],[-289,-138],[-106,-992],[-157,-554],[-337,57],[-158,-468],[-321,-27],[-89,558],[-232,671],[-211,835]],[[58908,34785],[-56,-263],[-163,-63],[-166,320],[-2,204],[76,222],[26,172],[80,42],[140,-108]],[[59999,71049],[-26,452],[68,243]],[[60041,71744],[74,129],[75,130],[15,329],[91,-115],[306,165],[147,-112],[229,2],[320,222],[149,-10],[316,92]],[[50518,54209],[-224,-126]],[[78495,57780],[-249,271],[-238,-11],[41,464],[-245,-3],[-22,-650],[-150,-863],[-90,-522],[19,-428],[181,-18],[113,-539],[50,-512],[155,-338],[168,-69],[144,-306]],[[77801,54399],[-110,227],[-47,292],[-148,334],[-135,280],[-45,-347],[-53,328],[30,369],[82,566]],[[68841,72526],[156,598],[-60,440],[-204,140],[72,261],[232,-28],[132,326],[89,380],[371,137],[-58,-274],[40,-164],[114,15]],[[64978,72558],[-52,417],[40,618],[-216,200],[71,405],[-184,34],[61,498],[262,-145],[244,189],[-202,355],[-80,338],[-224,-151],[-28,-433],[-87,383]],[[65546,74986],[313,8],[-45,297],[237,204],[234,343],[374,-312],[30,-471],[106,-121],[301,27],[93,-108],[137,-609],[317,-408],[181,-278],[291,-289],[369,-253],[-7,-362]],[[84713,45326],[32,139],[239,133],[194,20],[87,74],[105,-74],[-102,-160],[-289,-258],[-233,-170]],[[32866,56937],[160,77],[58,-21],[-11,-440],[-232,-65],[-50,53],[81,163],[-6,233]],[[52339,72408],[302,239],[195,-71],[-9,-299],[236,217],[20,-113],[-139,-290],[-2,-273],[96,-147],[-36,-511],[-183,-297],[53,-322],[143,-10],[70,-281],[106,-92]],[[60041,71744],[-102,268],[105,222],[-169,-51],[-233,136],[-191,-340],[-421,-66],[-225,317],[-300,20],[-64,-245],[-192,-70],[-268,314],[-303,-11],[-165,588],[-203,328],[135,459],[-176,283],[308,565],[428,23],[117,449],[529,-78],[334,383],[324,167],[459,13],[485,-417],[399,-228],[323,91],[239,-53],[328,309]],[[57776,75399],[33,-228],[243,-190],[-51,-145],[-330,-33],[-118,-182],[-232,-319],[-87,276],[3,121]],[[83826,64992],[-167,-947],[-119,-485],[-146,499],[-32,438],[163,581],[223,447],[127,-176],[-49,-357]],[[60889,47817],[-128,-728],[16,-335],[178,-216],[8,-153],[-76,-357],[16,-180],[-18,-282],[97,-370],[115,-583],[101,-129]],[[59099,45126],[-157,177],[-177,100],[-111,99],[-116,150]],[[58388,46397],[-161,331],[-55,342]],[[58449,49909],[98,71],[304,-7],[566,45]],[[60617,78409],[-222,-48],[-185,-191],[-260,-31],[-239,-220],[16,-368],[136,-142],[284,35],[-55,-210],[-304,-103],[-377,-342],[-154,121],[61,277],[-304,173],[50,113],[265,197],[-80,135],[-432,149],[-19,221],[-257,-73],[-103,-325],[-215,-437]],[[35174,30629],[-121,-372],[-313,-328],[-205,118],[-151,-63],[-256,253],[-189,-19],[-169,327]],[[6794,61855],[-41,-99],[-69,84],[8,165],[-46,216],[14,65],[48,97],[-19,116],[16,55],[21,-11],[107,-100],[49,-51],[45,-79],[71,-207],[-7,-33],[-108,-126],[-89,-92]],[[6645,62777],[-94,-43],[-47,125],[-32,48],[-3,37],[27,50],[99,-56],[73,-90],[-23,-71]],[[6456,63091],[-9,-63],[-149,17],[21,72],[137,-26]],[[6207,63177],[-15,-34],[-19,8],[-97,21],[-35,133],[-11,24],[74,82],[23,-38],[80,-196]],[[5737,63567],[-33,-58],[-93,107],[14,43],[43,58],[64,-12],[5,-138]],[[31350,77248],[48,-194],[-296,-286],[-286,-204],[-293,-175],[-147,-351],[-47,-133],[-3,-313],[92,-313],[115,-15],[-29,216],[83,-131],[-22,-169],[-188,-96],[-133,11],[-205,-103],[-121,-29],[-162,-29],[-231,-171],[408,111],[82,-112],[-389,-177],[-177,-1],[8,72],[-84,-164],[82,-27],[-60,-424],[-203,-455],[-20,152],[-61,30],[-91,148],[57,-318],[69,-105],[5,-223],[-89,-230],[-157,-472],[-25,24],[86,402],[-142,225],[-33,491],[-53,-255],[59,-375],[-183,93],[191,-191],[12,-562],[79,-41],[29,-204],[39,-591],[-176,-439],[-288,-175],[-182,-346],[-139,-38],[-141,-217],[-39,-199],[-305,-383],[-157,-281],[-131,-351],[-43,-419],[50,-411],[92,-505],[124,-418],[1,-256],[132,-685],[-9,-398],[-12,-230],[-69,-361],[-83,-75],[-137,72],[-44,259],[-105,136],[-148,508],[-129,452],[-42,231],[57,393],[-77,325],[-217,494],[-108,90],[-281,-268],[-49,30],[-135,275],[-174,147],[-314,-75],[-247,66],[-212,-41],[-114,-92],[50,-157],[-5,-240],[59,-117],[-53,-77],[-103,87],[-104,-112],[-202,18],[-207,312],[-242,-73],[-202,137],[-173,-42],[-234,-138],[-253,-438],[-276,-255],[-152,-282],[-63,-266],[-3,-407],[14,-284],[52,-201]],[[17464,69802],[-46,302],[-180,340],[-130,71],[-30,169],[-156,30],[-100,159],[-258,59],[-71,95],[-33,324],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557],[34,536],[33,536],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558],[69,156],[-45,484],[-94,485]],[[7498,84325],[-277,-225],[-142,152],[-43,277],[252,210],[148,90],[185,-40],[117,-183],[-240,-281]],[[4006,85976],[-171,-92],[-182,110],[-168,161],[274,101],[220,-54],[27,-226]],[[2297,88264],[171,-113],[173,61],[225,-156],[276,-79],[-23,-64],[-211,-125],[-211,128],[-106,107],[-245,-34],[-66,52],[17,223]],[[13740,82958],[-153,223],[-245,188],[-78,515],[-358,478],[-150,558],[-267,38],[-441,15],[-326,170],[-574,613],[-266,112],[-486,211],[-385,-51],[-546,272],[-330,252],[-309,-125],[58,-411],[-154,-38],[-321,-123],[-245,-199],[-308,-126],[-39,348],[125,580],[295,182],[-76,148],[-354,-329],[-190,-394],[-400,-420],[203,-287],[-262,-424],[-299,-248],[-278,-180],[-69,-261],[-434,-305],[-87,-278],[-325,-252],[-191,45],[-259,-165],[-282,-201],[-231,-197],[-477,-169],[-43,99],[304,276],[271,182],[296,324],[345,66],[137,243],[385,353],[62,119],[205,208],[48,448],[141,349],[-320,-179],[-90,102],[-150,-215],[-181,300],[-75,-212],[-104,294],[-278,-236],[-170,0],[-24,352],[50,216],[-179,211],[-361,-113],[-235,277],[-190,142],[-1,334],[-214,252],[108,340],[226,330],[99,303],[225,43],[191,-94],[224,285],[201,-51],[212,183],[-52,270],[-155,106],[205,228],[-170,-7],[-295,-128],[-85,-131],[-219,131],[-392,-67],[-407,142],[-117,238],[-351,343],[390,247],[620,289],[228,0],[-38,-296],[586,23],[-225,366],[-342,225],[-197,296],[-267,252],[-381,187],[155,309],[493,19],[350,270],[66,287],[284,281],[271,68],[526,262],[256,-40],[427,315],[421,-124],[201,-266],[123,114],[469,-35],[-16,-136],[425,-101],[283,59],[585,-186],[534,-56],[214,-77],[370,96],[421,-177],[302,-83]],[[30185,57537],[-8,-139],[-163,-69],[91,-268],[-3,-309],[-123,-344],[105,-468],[120,38],[62,427],[-86,208],[-14,447],[346,241],[-38,278],[97,186],[100,-415],[195,-9],[180,-330],[11,-195],[249,-6],[297,61],[159,-264],[213,-74],[155,185],[4,149],[344,35],[333,9],[-236,-175],[95,-279],[222,-44],[210,-291],[45,-473],[144,13],[109,-139]],[[80013,63313],[-371,-505],[-231,-558],[-61,-410],[212,-623],[260,-772],[252,-365],[169,-475],[127,-1093],[-37,-1039],[-232,-389],[-318,-381],[-227,-492],[-346,-550],[-101,378],[78,401],[-206,335]],[[96623,40851],[-92,-78],[-93,259],[10,158],[175,-339]],[[96418,41756],[45,-476],[-75,74],[-58,-32],[-39,163],[-6,453],[133,-182]],[[64752,60417],[-201,-158],[-54,-263],[-6,-201],[-277,-249],[-444,-276],[-249,-417],[-122,-33],[-83,35],[-163,-245],[-177,-114],[-233,-30],[-70,-34],[-61,-156],[-73,-43],[-43,-150],[-137,13],[-89,-80],[-192,30],[-72,345],[8,323],[-46,174],[-54,437],[-80,243],[56,29],[-29,270],[34,114],[-12,257]],[[58175,37528],[113,-7],[134,-100],[94,71],[148,-59]],[[59119,34780],[-70,-430],[-32,-491],[-72,-267],[-190,-298],[-54,-86],[-118,-300],[-77,-303],[-158,-424],[-314,-609],[-196,-355],[-210,-269],[-290,-229],[-141,-31],[-36,-164],[-169,88],[-138,-113],[-301,114],[-168,-72],[-115,31],[-286,-233],[-238,-94],[-171,-223],[-127,-14],[-117,210],[-94,11],[-120,264],[-13,-82],[-37,159],[2,346],[-90,396],[89,108],[-7,453],[-182,553],[-139,501],[-1,1],[-199,768]],[[58409,41417],[-210,-81],[-159,-235],[-33,-205],[-100,-46],[-241,-486],[-154,-383],[-94,-13],[-90,68],[-311,65]]],"bbox":[-180,-85.60903777459767,180,83.64513000000001],"transform":{"scale":[0.0036000360003600037,0.00169255860333201],"translate":[-180,-85.60903777459767]}};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

(function (global) {
    'use strict';

    var util = newUtil();
    var inliner = newInliner();
    var fontFaces = newFontFaces();
    var images = newImages();

    // Default impl options
    var defaultOptions = {
        // Default is to fail on error, no placeholder
        imagePlaceholder: undefined,
        // Default cache bust is false, it will use the cache
        cacheBust: false
    };

    var domtoimage = {
        toSvg: toSvg,
        toPng: toPng,
        toJpeg: toJpeg,
        toBlob: toBlob,
        toPixelData: toPixelData,
        impl: {
            fontFaces: fontFaces,
            images: images,
            util: util,
            inliner: inliner,
            options: {}
        }
    };

    if (true)
        module.exports = domtoimage;
    else
        {}


    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options
     * @param {Function} options.filter - Should return true if passed node should be included in the output
     *          (excluding node means excluding it's children as well). Not called on the root node.
     * @param {String} options.bgcolor - color for the background, any valid CSS color value.
     * @param {Number} options.width - width to be applied to node before rendering.
     * @param {Number} options.height - height to be applied to node before rendering.
     * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
     * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
                defaults to 1.0.
     * @param {String} options.imagePlaceholder - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
     * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
     * @return {Promise} - A promise that is fulfilled with a SVG image data URL
     * */
    function toSvg(node, options) {
        options = options || {};
        copyOptions(options);
        return Promise.resolve(node)
            .then(function (node) {
                return cloneNode(node, options.filter, true);
            })
            .then(embedFonts)
            .then(inlineImages)
            .then(applyOptions)
            .then(function (clone) {
                return makeSvgDataUri(clone,
                    options.width || util.width(node),
                    options.height || util.height(node)
                );
            });

        function applyOptions(clone) {
            if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;

            if (options.width) clone.style.width = options.width + 'px';
            if (options.height) clone.style.height = options.height + 'px';

            if (options.style)
                Object.keys(options.style).forEach(function (property) {
                    clone.style[property] = options.style[property];
                });

            return clone;
        }
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
     * */
    function toPixelData(node, options) {
        return draw(node, options || {})
            .then(function (canvas) {
                return canvas.getContext('2d').getImageData(
                    0,
                    0,
                    util.width(node),
                    util.height(node)
                ).data;
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image data URL
     * */
    function toPng(node, options) {
        return draw(node, options || {})
            .then(function (canvas) {
                return canvas.toDataURL();
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
     * */
    function toJpeg(node, options) {
        options = options || {};
        return draw(node, options)
            .then(function (canvas) {
                return canvas.toDataURL('image/jpeg', options.quality || 1.0);
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image blob
     * */
    function toBlob(node, options) {
        return draw(node, options || {})
            .then(util.canvasToBlob);
    }

    function copyOptions(options) {
        // Copy options to impl options for use in impl
        if(typeof(options.imagePlaceholder) === 'undefined') {
            domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
        } else {
            domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
        }

        if(typeof(options.cacheBust) === 'undefined') {
            domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
        } else {
            domtoimage.impl.options.cacheBust = options.cacheBust;
        }
    }

    function draw(domNode, options) {
        return toSvg(domNode, options)
            .then(util.makeImage)
            .then(util.delay(100))
            .then(function (image) {
                var canvas = newCanvas(domNode);
                canvas.getContext('2d').drawImage(image, 0, 0);
                return canvas;
            });

        function newCanvas(domNode) {
            var canvas = document.createElement('canvas');
            canvas.width = options.width || util.width(domNode);
            canvas.height = options.height || util.height(domNode);

            if (options.bgcolor) {
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = options.bgcolor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            return canvas;
        }
    }

    function cloneNode(node, filter, root) {
        if (!root && filter && !filter(node)) return Promise.resolve();

        return Promise.resolve(node)
            .then(makeNodeCopy)
            .then(function (clone) {
                return cloneChildren(node, clone, filter);
            })
            .then(function (clone) {
                return processClone(node, clone);
            });

        function makeNodeCopy(node) {
            if (node instanceof HTMLCanvasElement) return util.makeImage(node.toDataURL());
            return node.cloneNode(false);
        }

        function cloneChildren(original, clone, filter) {
            var children = original.childNodes;
            if (children.length === 0) return Promise.resolve(clone);

            return cloneChildrenInOrder(clone, util.asArray(children), filter)
                .then(function () {
                    return clone;
                });

            function cloneChildrenInOrder(parent, children, filter) {
                var done = Promise.resolve();
                children.forEach(function (child) {
                    done = done
                        .then(function () {
                            return cloneNode(child, filter);
                        })
                        .then(function (childClone) {
                            if (childClone) parent.appendChild(childClone);
                        });
                });
                return done;
            }
        }

        function processClone(original, clone) {
            if (!(clone instanceof Element)) return clone;

            return Promise.resolve()
                .then(cloneStyle)
                .then(clonePseudoElements)
                .then(copyUserInput)
                .then(fixSvg)
                .then(function () {
                    return clone;
                });

            function cloneStyle() {
                copyStyle(window.getComputedStyle(original), clone.style);

                function copyStyle(source, target) {
                    if (source.cssText) target.cssText = source.cssText;
                    else copyProperties(source, target);

                    function copyProperties(source, target) {
                        util.asArray(source).forEach(function (name) {
                            target.setProperty(
                                name,
                                source.getPropertyValue(name),
                                source.getPropertyPriority(name)
                            );
                        });
                    }
                }
            }

            function clonePseudoElements() {
                [':before', ':after'].forEach(function (element) {
                    clonePseudoElement(element);
                });

                function clonePseudoElement(element) {
                    var style = window.getComputedStyle(original, element);
                    var content = style.getPropertyValue('content');

                    if (content === '' || content === 'none') return;

                    var className = util.uid();
                    clone.className = clone.className + ' ' + className;
                    var styleElement = document.createElement('style');
                    styleElement.appendChild(formatPseudoElementStyle(className, element, style));
                    clone.appendChild(styleElement);

                    function formatPseudoElementStyle(className, element, style) {
                        var selector = '.' + className + ':' + element;
                        var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
                        return document.createTextNode(selector + '{' + cssText + '}');

                        function formatCssText(style) {
                            var content = style.getPropertyValue('content');
                            return style.cssText + ' content: ' + content + ';';
                        }

                        function formatCssProperties(style) {

                            return util.asArray(style)
                                .map(formatProperty)
                                .join('; ') + ';';

                            function formatProperty(name) {
                                return name + ': ' +
                                    style.getPropertyValue(name) +
                                    (style.getPropertyPriority(name) ? ' !important' : '');
                            }
                        }
                    }
                }
            }

            function copyUserInput() {
                if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
                if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
            }

            function fixSvg() {
                if (!(clone instanceof SVGElement)) return;
                clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

                if (!(clone instanceof SVGRectElement)) return;
                ['width', 'height'].forEach(function (attribute) {
                    var value = clone.getAttribute(attribute);
                    if (!value) return;

                    clone.style.setProperty(attribute, value);
                });
            }
        }
    }

    function embedFonts(node) {
        return fontFaces.resolveAll()
            .then(function (cssText) {
                var styleNode = document.createElement('style');
                node.appendChild(styleNode);
                styleNode.appendChild(document.createTextNode(cssText));
                return node;
            });
    }

    function inlineImages(node) {
        return images.inlineAll(node)
            .then(function () {
                return node;
            });
    }

    function makeSvgDataUri(node, width, height) {
        return Promise.resolve(node)
            .then(function (node) {
                node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
                return new XMLSerializer().serializeToString(node);
            })
            .then(util.escapeXhtml)
            .then(function (xhtml) {
                return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + '</foreignObject>';
            })
            .then(function (foreignObject) {
                return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' +
                    foreignObject + '</svg>';
            })
            .then(function (svg) {
                return 'data:image/svg+xml;charset=utf-8,' + svg;
            });
    }

    function newUtil() {
        return {
            escape: escape,
            parseExtension: parseExtension,
            mimeType: mimeType,
            dataAsUrl: dataAsUrl,
            isDataUrl: isDataUrl,
            canvasToBlob: canvasToBlob,
            resolveUrl: resolveUrl,
            getAndEncode: getAndEncode,
            uid: uid(),
            delay: delay,
            asArray: asArray,
            escapeXhtml: escapeXhtml,
            makeImage: makeImage,
            width: width,
            height: height
        };

        function mimes() {
            /*
             * Only WOFF and EOT mime types for fonts are 'real'
             * see http://www.iana.org/assignments/media-types/media-types.xhtml
             */
            var WOFF = 'application/font-woff';
            var JPEG = 'image/jpeg';

            return {
                'woff': WOFF,
                'woff2': WOFF,
                'ttf': 'application/font-truetype',
                'eot': 'application/vnd.ms-fontobject',
                'png': 'image/png',
                'jpg': JPEG,
                'jpeg': JPEG,
                'gif': 'image/gif',
                'tiff': 'image/tiff',
                'svg': 'image/svg+xml'
            };
        }

        function parseExtension(url) {
            var match = /\.([^\.\/]*?)$/g.exec(url);
            if (match) return match[1];
            else return '';
        }

        function mimeType(url) {
            var extension = parseExtension(url).toLowerCase();
            return mimes()[extension] || '';
        }

        function isDataUrl(url) {
            return url.search(/^(data:)/) !== -1;
        }

        function toBlob(canvas) {
            return new Promise(function (resolve) {
                var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
                var length = binaryString.length;
                var binaryArray = new Uint8Array(length);

                for (var i = 0; i < length; i++)
                    binaryArray[i] = binaryString.charCodeAt(i);

                resolve(new Blob([binaryArray], {
                    type: 'image/png'
                }));
            });
        }

        function canvasToBlob(canvas) {
            if (canvas.toBlob)
                return new Promise(function (resolve) {
                    canvas.toBlob(resolve);
                });

            return toBlob(canvas);
        }

        function resolveUrl(url, baseUrl) {
            var doc = document.implementation.createHTMLDocument();
            var base = doc.createElement('base');
            doc.head.appendChild(base);
            var a = doc.createElement('a');
            doc.body.appendChild(a);
            base.href = baseUrl;
            a.href = url;
            return a.href;
        }

        function uid() {
            var index = 0;

            return function () {
                return 'u' + fourRandomChars() + index++;

                function fourRandomChars() {
                    /* see http://stackoverflow.com/a/6248722/2519373 */
                    return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
                }
            };
        }

        function makeImage(uri) {
            return new Promise(function (resolve, reject) {
                var image = new Image();
                image.onload = function () {
                    resolve(image);
                };
                image.onerror = reject;
                image.src = uri;
            });
        }

        function getAndEncode(url) {
            var TIMEOUT = 30000;
            if(domtoimage.impl.options.cacheBust) {
                // Cache bypass so we dont have CORS issues with cached images
                // Source: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
                url += ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime();
            }

            return new Promise(function (resolve) {
                var request = new XMLHttpRequest();

                request.onreadystatechange = done;
                request.ontimeout = timeout;
                request.responseType = 'blob';
                request.timeout = TIMEOUT;
                request.open('GET', url, true);
                request.send();

                var placeholder;
                if(domtoimage.impl.options.imagePlaceholder) {
                    var split = domtoimage.impl.options.imagePlaceholder.split(/,/);
                    if(split && split[1]) {
                        placeholder = split[1];
                    }
                }

                function done() {
                    if (request.readyState !== 4) return;

                    if (request.status !== 200) {
                        if(placeholder) {
                            resolve(placeholder);
                        } else {
                            fail('cannot fetch resource: ' + url + ', status: ' + request.status);
                        }

                        return;
                    }

                    var encoder = new FileReader();
                    encoder.onloadend = function () {
                        var content = encoder.result.split(/,/)[1];
                        resolve(content);
                    };
                    encoder.readAsDataURL(request.response);
                }

                function timeout() {
                    if(placeholder) {
                        resolve(placeholder);
                    } else {
                        fail('timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url);
                    }
                }

                function fail(message) {
                    console.error(message);
                    resolve('');
                }
            });
        }

        function dataAsUrl(content, type) {
            return 'data:' + type + ';base64,' + content;
        }

        function escape(string) {
            return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
        }

        function delay(ms) {
            return function (arg) {
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve(arg);
                    }, ms);
                });
            };
        }

        function asArray(arrayLike) {
            var array = [];
            var length = arrayLike.length;
            for (var i = 0; i < length; i++) array.push(arrayLike[i]);
            return array;
        }

        function escapeXhtml(string) {
            return string.replace(/#/g, '%23').replace(/\n/g, '%0A');
        }

        function width(node) {
            var leftBorder = px(node, 'border-left-width');
            var rightBorder = px(node, 'border-right-width');
            return node.scrollWidth + leftBorder + rightBorder;
        }

        function height(node) {
            var topBorder = px(node, 'border-top-width');
            var bottomBorder = px(node, 'border-bottom-width');
            return node.scrollHeight + topBorder + bottomBorder;
        }

        function px(node, styleProperty) {
            var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
            return parseFloat(value.replace('px', ''));
        }
    }

    function newInliner() {
        var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;

        return {
            inlineAll: inlineAll,
            shouldProcess: shouldProcess,
            impl: {
                readUrls: readUrls,
                inline: inline
            }
        };

        function shouldProcess(string) {
            return string.search(URL_REGEX) !== -1;
        }

        function readUrls(string) {
            var result = [];
            var match;
            while ((match = URL_REGEX.exec(string)) !== null) {
                result.push(match[1]);
            }
            return result.filter(function (url) {
                return !util.isDataUrl(url);
            });
        }

        function inline(string, url, baseUrl, get) {
            return Promise.resolve(url)
                .then(function (url) {
                    return baseUrl ? util.resolveUrl(url, baseUrl) : url;
                })
                .then(get || util.getAndEncode)
                .then(function (data) {
                    return util.dataAsUrl(data, util.mimeType(url));
                })
                .then(function (dataUrl) {
                    return string.replace(urlAsRegex(url), '$1' + dataUrl + '$3');
                });

            function urlAsRegex(url) {
                return new RegExp('(url\\([\'"]?)(' + util.escape(url) + ')([\'"]?\\))', 'g');
            }
        }

        function inlineAll(string, baseUrl, get) {
            if (nothingToInline()) return Promise.resolve(string);

            return Promise.resolve(string)
                .then(readUrls)
                .then(function (urls) {
                    var done = Promise.resolve(string);
                    urls.forEach(function (url) {
                        done = done.then(function (string) {
                            return inline(string, url, baseUrl, get);
                        });
                    });
                    return done;
                });

            function nothingToInline() {
                return !shouldProcess(string);
            }
        }
    }

    function newFontFaces() {
        return {
            resolveAll: resolveAll,
            impl: {
                readAll: readAll
            }
        };

        function resolveAll() {
            return readAll(document)
                .then(function (webFonts) {
                    return Promise.all(
                        webFonts.map(function (webFont) {
                            return webFont.resolve();
                        })
                    );
                })
                .then(function (cssStrings) {
                    return cssStrings.join('\n');
                });
        }

        function readAll() {
            return Promise.resolve(util.asArray(document.styleSheets))
                .then(getCssRules)
                .then(selectWebFontRules)
                .then(function (rules) {
                    return rules.map(newWebFont);
                });

            function selectWebFontRules(cssRules) {
                return cssRules
                    .filter(function (rule) {
                        return rule.type === CSSRule.FONT_FACE_RULE;
                    })
                    .filter(function (rule) {
                        return inliner.shouldProcess(rule.style.getPropertyValue('src'));
                    });
            }

            function getCssRules(styleSheets) {
                var cssRules = [];
                styleSheets.forEach(function (sheet) {
                    try {
                        util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
                    } catch (e) {
                        console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
                    }
                });
                return cssRules;
            }

            function newWebFont(webFontRule) {
                return {
                    resolve: function resolve() {
                        var baseUrl = (webFontRule.parentStyleSheet || {}).href;
                        return inliner.inlineAll(webFontRule.cssText, baseUrl);
                    },
                    src: function () {
                        return webFontRule.style.getPropertyValue('src');
                    }
                };
            }
        }
    }

    function newImages() {
        return {
            inlineAll: inlineAll,
            impl: {
                newImage: newImage
            }
        };

        function newImage(element) {
            return {
                inline: inline
            };

            function inline(get) {
                if (util.isDataUrl(element.src)) return Promise.resolve();

                return Promise.resolve(element.src)
                    .then(get || util.getAndEncode)
                    .then(function (data) {
                        return util.dataAsUrl(data, util.mimeType(element.src));
                    })
                    .then(function (dataUrl) {
                        return new Promise(function (resolve, reject) {
                            element.onload = resolve;
                            element.onerror = reject;
                            element.src = dataUrl;
                        });
                    });
            }
        }

        function inlineAll(node) {
            if (!(node instanceof Element)) return Promise.resolve(node);

            return inlineBackground(node)
                .then(function () {
                    if (node instanceof HTMLImageElement)
                        return newImage(node).inline();
                    else
                        return Promise.all(
                            util.asArray(node.childNodes).map(function (child) {
                                return inlineAll(child);
                            })
                        );
                });

            function inlineBackground(node) {
                var background = node.style.getPropertyValue('background');

                if (!background) return Promise.resolve(node);

                return inliner.inlineAll(background)
                    .then(function (inlined) {
                        node.style.setProperty(
                            'background',
                            inlined,
                            node.style.getPropertyPriority('background')
                        );
                    })
                    .then(function () {
                        return node;
                    });
            }
        }
    }
})(this);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__(40) !== null) && (__webpack_require__(41) !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return saveAs;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(5);

var _indexWorld = __webpack_require__(11);

var _continent = __webpack_require__(43);

var _continent2 = _interopRequireDefault(_continent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
	return {
		continents: state.continentReducer.continents
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleContinent: function toggleContinent(name) {
			return dispatch((0, _indexWorld.toggleContinent)(name));
		},
		toggleCountry: function toggleCountry(name) {
			return dispatch((0, _indexWorld.toggleCountry)(name));
		},
		toggleCity: function toggleCity(name) {
			return dispatch((0, _indexWorld.toggleCity)(name));
		}
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_continent2.default);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _item = __webpack_require__(13);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  continents: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 20
  },
  countries: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 20
  },
  cities: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 20
  },
  button: {
    borderColor: 'gray',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10
  }
};

var ContinentList = function (_React$Component) {
  _inherits(ContinentList, _React$Component);

  function ContinentList(props) {
    _classCallCheck(this, ContinentList);

    return _possibleConstructorReturn(this, (ContinentList.__proto__ || Object.getPrototypeOf(ContinentList)).call(this, props));
  }

  _createClass(ContinentList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var continentList = this.props.continents;

      //filter continents
      var continents = [];
      continents = continentList.map(function (continent, index) {
        return _react2.default.createElement(_item2.default, { key: "Continent" + index, id: "Continent" + index, name: continent.name, highlight: continent.countries.some(function (country) {
            return country.cities.some(function (city) {
              return city.select === 1;
            });
          }), toggleContinent: _this2.props.toggleContinent });
      });

      //filter countries and cities
      var countries = [];
      var cities = [];

      var selectedContinent = continentList.filter(function (continent) {
        return continent.select === 1;
      });
      if (selectedContinent.length === 1) {
        countries = selectedContinent[0].countries.map(function (country, index) {
          return _react2.default.createElement(_item2.default, { key: "Country" + index, id: "Country" + index, name: country.name, highlight: country.cities.some(function (city) {
              return city.select === 1;
            }), toggleCountry: _this2.props.toggleCountry });
        });

        var selectedCountries = selectedContinent[0].countries.filter(function (country) {
          return country.select === 1;
        });
        if (selectedCountries.length === 1) {
          cities = selectedCountries[0].cities.map(function (city, index) {

            return _react2.default.createElement(_item2.default, { key: "City" + index, id: "City" + index, name: city.name, highlight: city.select, toggleCity: _this2.props.toggleCity });
          });
        }
      }

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          'div',
          { style: styles.continents },
          continents
        ),
        _react2.default.createElement(
          'div',
          { style: styles.countries },
          countries
        ),
        _react2.default.createElement(
          'div',
          { style: styles.cities },
          cities
        )
      );
    }
  }]);

  return ContinentList;
}(_react2.default.Component);

exports.default = ContinentList;


ContinentList.propTypes = {
  continents: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    select: _propTypes2.default.Number,
    name: _propTypes2.default.string,
    countries: _propTypes2.default.array,
    cities: _propTypes2.default.array
  })),
  toggleContinent: _propTypes2.default.func,
  toggleCountry: _propTypes2.default.func,
  toggleCity: _propTypes2.default.func
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(5);

var _indexCountry = __webpack_require__(12);

var _country = __webpack_require__(45);

var _country2 = _interopRequireDefault(_country);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
	return {
		states: state.countryReducer.states
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleState: function toggleState(name) {
			return dispatch((0, _indexCountry.toggleState)(name));
		},
		toggleCiity: function toggleCiity(name) {
			return dispatch((0, _indexCountry.toggleCiity)(name));
		}
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_country2.default);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _item = __webpack_require__(13);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  states: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 350,
    marginLeft: 20
  },
  cities: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 20
  },
  button: {
    borderColor: 'gray',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10
  }
};

var CountryList = function (_React$Component) {
  _inherits(CountryList, _React$Component);

  function CountryList(props) {
    _classCallCheck(this, CountryList);

    return _possibleConstructorReturn(this, (CountryList.__proto__ || Object.getPrototypeOf(CountryList)).call(this, props));
  }

  _createClass(CountryList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var stateList = this.props.states;

      //filter continents
      var states = [];
      states = stateList.map(function (state, index) {
        return _react2.default.createElement(_item2.default, { key: "State" + index, id: "State" + index, name: state.name, highlight: state.cities.some(function (city) {
            return city.select === 1;
          }), toggleState: _this2.props.toggleState });
      });

      //filter cities
      var cities = [];

      var selectedState = stateList.filter(function (state) {
        return state.select === 1;
      });
      if (selectedState.length === 1) {
        cities = selectedState[0].cities.map(function (city, index) {
          return _react2.default.createElement(_item2.default, { key: "Ciity" + index, id: "Ciity" + index, name: city.name, highlight: city.select, toggleCiity: _this2.props.toggleCiity });
        });
      }

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          'div',
          { style: styles.states },
          states
        ),
        _react2.default.createElement(
          'div',
          { style: styles.cities },
          cities
        )
      );
    }
  }]);

  return CountryList;
}(_react2.default.Component);

exports.default = CountryList;


CountryList.propTypes = {
  states: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    select: _propTypes2.default.Number,
    name: _propTypes2.default.string,
    cities: _propTypes2.default.array
  })),
  toggleState: _propTypes2.default.func,
  toggleCiity: _propTypes2.default.func
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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KpgnA5qQdKBFvzexIGad530qt60KTjr3pAWhMD1xxS+b6fzqsCd3WkBOW5NAFppqQ3G3nGfrVfc2RyfzpwJyeTQBK17IB8qr+VRPf3HHCfkf8ajJPqetRMT696AJX1G6PARMepH/ANelS/ulGCI+vXB/xqhk46n73+FTgnIosBcXUbjA+WM/gf8AGnrqM5PIQ/QGqgJwOTQSdvU0WC5dku55B1UHvgVEJX7tUTEhlGafk5HNAEhmIHfPtSeceozionJDjBNJISF4OKYEol/2jikM2ATyag6HAoloAkaYlsgtx2xUbT56Hg1G3Son4IA45oAl84Hnd/So3lA6k469c5qKQkMuCeppjfdcUAKZwTyx/KimRgFcnnmigD//2f/hCcpodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24geG1sbnM6eG1wTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPgogIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6QzUwRUUyMzhGMTVGRTQxMUE5OUJCNDFENTg0MEM4RDI8L3htcE1NOkluc3RhbmNlSUQ+CiAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4yRjM1NkIzNTU5NDM4NTRCREQ3QzFEQTBDRTBEMjI3QTwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogIDx4bXBNTTpEb2N1bWVudElEIHJkZjpyZXNvdXJjZT0nMkYzNTZCMzU1OTQzODU0QkREN0MxREEwQ0UwRDIyN0EnIC8+CiAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDpDNTBFRTIzOEYxNUZFNDExQTk5QkI0MUQ1ODQwQzhEMjwveG1wTU06SW5zdGFuY2VJRD4KICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPjJGMzU2QjM1NTk0Mzg1NEJERDdDMURBMENFMEQyMjdBPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgPHhtcE1NOkhpc3Rvcnk+CiAgIDxyZGY6U2VxPgogICA8L3JkZjpTZXE+CiAgPC94bXBNTTpIaXN0b3J5PgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nPgogIDxkYzpmb3JtYXQ+aW1hZ2UvanBlZzwvZGM6Zm9ybWF0PgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiB4bWxuczpwaG90b3Nob3A9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8nPgogIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24geG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0ZURhdGU+MjAxNC0xMC0yOVQyMzozMzoyMSswNjowMDwveG1wOkNyZWF0ZURhdGU+CiAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMTAtMzBUMTA6NTk6NTcrMDY6MDA8L3htcDpNb2RpZnlEYXRlPgogIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTQtMTAtMzBUMTA6NTk6NTcrMDY6MDA8L3htcDpNZXRhZGF0YURhdGU+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHhtbG5zOmV4aWY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvJz4KICA8ZXhpZjpJbWFnZVdpZHRoPjE2MDA8L2V4aWY6SW1hZ2VXaWR0aD4KICA8ZXhpZjpJbWFnZUxlbmd0aD4xMjAwPC9leGlmOkltYWdlTGVuZ3RoPgogIDxleGlmOkJpdHNQZXJTYW1wbGU+OCwgOCwgODwvZXhpZjpCaXRzUGVyU2FtcGxlPgogIDxleGlmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+UkdCPC9leGlmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgPGV4aWY6T3JpZW50YXRpb24+VG9wLWxlZnQ8L2V4aWY6T3JpZW50YXRpb24+CiAgPGV4aWY6U2FtcGxlc1BlclBpeGVsPjM8L2V4aWY6U2FtcGxlc1BlclBpeGVsPgogIDxleGlmOlhSZXNvbHV0aW9uPjcyLjAwMDA8L2V4aWY6WFJlc29sdXRpb24+CiAgPGV4aWY6WVJlc29sdXRpb24+NzIuMDAwMDwvZXhpZjpZUmVzb2x1dGlvbj4KICA8ZXhpZjpSZXNvbHV0aW9uVW5pdD5JbmNoPC9leGlmOlJlc29sdXRpb25Vbml0PgogIDxleGlmOlNvZnR3YXJlPkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9leGlmOlNvZnR3YXJlPgogIDxleGlmOkRhdGVUaW1lPjIwMTQ6MTA6MzAgMTA6NTk6NTc8L2V4aWY6RGF0ZVRpbWU+CiAgPGV4aWY6Q29tcHJlc3Npb24+SlBFRyBjb21wcmVzc2lvbjwvZXhpZjpDb21wcmVzc2lvbj4KICA8ZXhpZjpYUmVzb2x1dGlvbj43MjwvZXhpZjpYUmVzb2x1dGlvbj4KICA8ZXhpZjpZUmVzb2x1dGlvbj43MjwvZXhpZjpZUmVzb2x1dGlvbj4KICA8ZXhpZjpSZXNvbHV0aW9uVW5pdD5JbmNoPC9leGlmOlJlc29sdXRpb25Vbml0PgogIDxleGlmOkV4aWZWZXJzaW9uPkV4aWYgVmVyc2lvbiAyLjIxPC9leGlmOkV4aWZWZXJzaW9uPgogIDxleGlmOkZsYXNoUGl4VmVyc2lvbj5GbGFzaFBpeCBWZXJzaW9uIDEuMDwvZXhpZjpGbGFzaFBpeFZlcnNpb24+CiAgPGV4aWY6Q29sb3JTcGFjZT5JbnRlcm5hbCBlcnJvciAodW5rbm93biB2YWx1ZSA2NTUzNSk8L2V4aWY6Q29sb3JTcGFjZT4KICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTkyMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgPGV4aWY6UGl4ZWxZRGltZW5zaW9u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Lt9vt/j9vNt95v2f99n+192kmkAG3mQ2iEwkk02mCSC21W20wm+zVvvJf3vJP9d5/wD67bvT7dbtZNJpJt/NEKTj7X6e7b3p+fW/f/8Au+/3+9/3/wAt3tt/pt5Zd/8A/hu2/bf1O63Zr7b9fLfflNJN9pfNJMNP7PtpZtNNNJLbhPovdppfJslXoBNFpMpttr5Z9pJtNLdLtN/Nt5bb7Tf838N77/7f7b8/f7/fb3bX377zfebaT/77zu+W/be37/bdPxL57rbZltff9pBJJrZp9J5t/wDrT/2+22byf+X+23uyKba/z2/bf2/ae2+6SabTTtz3yP3XzS/dwF+/23/T33//ANt/v/vtNvtdtt5PtJZJJ952tvvv/rWn9/8ALdJfb/7bNp/bzPZtrf8ATaS3beTST/8A995v/wDb/wCn83+/uSH8n2/+X+333/23T+Saa2/3sTl9jT3993/20/2X223++2t32+2+3t31u++93sks8vT2lvn2/wBv/pOvv/tt/pfv9u0Dkkm/vmvy9Rv9t9/v9vvtv4/v/wDz7bab22/pvX5b7za3f7yf/ZNP/fbfbSS7baXdfff/AP7633v3/wDp/L//APTf7777byT+Sf7X/wCAu092+2f32/25X23+/wB99v8A/bb7b7b7/wD/AP8A/wCn+z/237K7STfa+/3++/8ALftvtut99/1rt9/p909/t/v9/wDd/f77/wD2222/+/3u/wBvvvtt/f8Azfbz7y/3SbW9/fvb7Xf/AP8Av9/vnP8A/wB22/222+33/wDv9v8A7777Zfb7Pb/ZMNNP55t7fffef/lP9tfL7Jr5bp7be5Nfyb//AOSb+f8Atttvvttv/wDb/rfb77b/AO232/2/138u/wBZ9t2/vv8Af/8A3/zvf/21++yTX6X6X3T+222+3/33lje+2yyb+SSbbX3bX232nRW/7STfru6T3aSf227bT/zT2SSD/eb++22/8v1n23z332/2/m31+3/33X333k93z+n334JBLTaCRgSDBBJADzCJBBbSbRJIbDLRIBSRIHzaBIAFAyIaTbTaILWSaSXJTfbbRTJDQI1sRAK6BybDaABZBABKSRKaJSJYKadkK2vgTbRaAIFskAVqQYW2oP/EACQRAAMBAQACAwEBAQEBAQEAAAABERAgITAxQEFQYHBRgGFx/9oACAED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"

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/d3-geo/src/adder.js
// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/

/* harmony default export */ var adder = (function() {
  return new Adder;
});

function Adder() {
  this.reset();
}

Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0; // exact error
  },
  add: function(y) {
    add(temp, y, this.t);
    add(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};

var temp = new Adder;

function add(adder, a, b) {
  var x = adder.s = a + b,
      bv = x - a,
      av = x - bv;
  adder.t = (a - av) + (b - bv);
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/math.js
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;

var degrees = 180 / pi;
var radians = pi / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var math_sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function haversin(x) {
  return (x = sin(x / 2)) * x;
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/noop.js
function noop() {}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/stream.js
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

/* harmony default export */ var src_stream = (function(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/area.js





var areaRingSum = adder();

var areaSum = adder(),
    area_lambda00,
    phi00,
    area_lambda0,
    area_cosPhi0,
    area_sinPhi0;

var areaStream = {
  point: noop,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: function() {
    areaRingSum.reset();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? tau + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = noop;
  },
  sphere: function() {
    areaSum.add(tau);
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaRingEnd() {
  areaPoint(area_lambda00, phi00);
}

function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  area_lambda00 = lambda, phi00 = phi;
  lambda *= radians, phi *= radians;
  area_lambda0 = lambda, area_cosPhi0 = cos(phi = phi / 2 + quarterPi), area_sinPhi0 = sin(phi);
}

function areaPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  phi = phi / 2 + quarterPi; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - area_lambda0,
      sdLambda = dLambda >= 0 ? 1 : -1,
      adLambda = sdLambda * dLambda,
      cosPhi = cos(phi),
      sinPhi = sin(phi),
      k = area_sinPhi0 * sinPhi,
      u = area_cosPhi0 * cosPhi + k * cos(adLambda),
      v = k * sdLambda * sin(adLambda);
  areaRingSum.add(atan2(v, u));

  // Advance the previous points.
  area_lambda0 = lambda, area_cosPhi0 = cosPhi, area_sinPhi0 = sinPhi;
}

/* harmony default export */ var src_area = (function(object) {
  areaSum.reset();
  src_stream(object, areaStream);
  return areaSum * 2;
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/cartesian.js


function cartesian_spherical(cartesian) {
  return [atan2(cartesian[1], cartesian[0]), asin(cartesian[2])];
}

function cartesian_cartesian(spherical) {
  var lambda = spherical[0], phi = spherical[1], cosPhi = cos(phi);
  return [cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi)];
}

function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/bounds.js






var bounds_lambda0, bounds_phi0, bounds_lambda1, bounds_phi1, // bounds
    bounds_lambda2, // previous lambda-coordinate
    bounds_lambda00, bounds_phi00, // first point
    bounds_p0, // previous 3D point
    deltaSum = adder(),
    ranges,
    range;

var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum.reset();
    areaStream.polygonStart();
  },
  polygonEnd: function() {
    areaStream.polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (areaRingSum < 0) bounds_lambda0 = -(bounds_lambda1 = 180), bounds_phi0 = -(bounds_phi1 = 90);
    else if (deltaSum > epsilon) bounds_phi1 = 90;
    else if (deltaSum < -epsilon) bounds_phi0 = -90;
    range[0] = bounds_lambda0, range[1] = bounds_lambda1;
  }
};

function boundsPoint(lambda, phi) {
  ranges.push(range = [bounds_lambda0 = lambda, bounds_lambda1 = lambda]);
  if (phi < bounds_phi0) bounds_phi0 = phi;
  if (phi > bounds_phi1) bounds_phi1 = phi;
}

function bounds_linePoint(lambda, phi) {
  var p = cartesian_cartesian([lambda * radians, phi * radians]);
  if (bounds_p0) {
    var normal = cartesianCross(bounds_p0, p),
        equatorial = [normal[1], -normal[0], 0],
        inflection = cartesianCross(equatorial, normal);
    cartesianNormalizeInPlace(inflection);
    inflection = cartesian_spherical(inflection);
    var delta = lambda - bounds_lambda2,
        sign = delta > 0 ? 1 : -1,
        lambdai = inflection[0] * degrees * sign,
        phii,
        antimeridian = abs(delta) > 180;
    if (antimeridian ^ (sign * bounds_lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = inflection[1] * degrees;
      if (phii > bounds_phi1) bounds_phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * bounds_lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = -inflection[1] * degrees;
      if (phii < bounds_phi0) bounds_phi0 = phii;
    } else {
      if (phi < bounds_phi0) bounds_phi0 = phi;
      if (phi > bounds_phi1) bounds_phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < bounds_lambda2) {
        if (bounds_angle(bounds_lambda0, lambda) > bounds_angle(bounds_lambda0, bounds_lambda1)) bounds_lambda1 = lambda;
      } else {
        if (bounds_angle(lambda, bounds_lambda1) > bounds_angle(bounds_lambda0, bounds_lambda1)) bounds_lambda0 = lambda;
      }
    } else {
      if (bounds_lambda1 >= bounds_lambda0) {
        if (lambda < bounds_lambda0) bounds_lambda0 = lambda;
        if (lambda > bounds_lambda1) bounds_lambda1 = lambda;
      } else {
        if (lambda > bounds_lambda2) {
          if (bounds_angle(bounds_lambda0, lambda) > bounds_angle(bounds_lambda0, bounds_lambda1)) bounds_lambda1 = lambda;
        } else {
          if (bounds_angle(lambda, bounds_lambda1) > bounds_angle(bounds_lambda0, bounds_lambda1)) bounds_lambda0 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [bounds_lambda0 = lambda, bounds_lambda1 = lambda]);
  }
  if (phi < bounds_phi0) bounds_phi0 = phi;
  if (phi > bounds_phi1) bounds_phi1 = phi;
  bounds_p0 = p, bounds_lambda2 = lambda;
}

function boundsLineStart() {
  boundsStream.point = bounds_linePoint;
}

function boundsLineEnd() {
  range[0] = bounds_lambda0, range[1] = bounds_lambda1;
  boundsStream.point = boundsPoint;
  bounds_p0 = null;
}

function boundsRingPoint(lambda, phi) {
  if (bounds_p0) {
    var delta = lambda - bounds_lambda2;
    deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    bounds_lambda00 = lambda, bounds_phi00 = phi;
  }
  areaStream.point(lambda, phi);
  bounds_linePoint(lambda, phi);
}

function boundsRingStart() {
  areaStream.lineStart();
}

function boundsRingEnd() {
  boundsRingPoint(bounds_lambda00, bounds_phi00);
  areaStream.lineEnd();
  if (abs(deltaSum) > epsilon) bounds_lambda0 = -(bounds_lambda1 = 180);
  range[0] = bounds_lambda0, range[1] = bounds_lambda1;
  bounds_p0 = null;
}

// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function bounds_angle(lambda0, lambda1) {
  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}

function rangeCompare(a, b) {
  return a[0] - b[0];
}

function rangeContains(range, x) {
  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}

/* harmony default export */ var bounds = (function(feature) {
  var i, n, a, b, merged, deltaMax, delta;

  bounds_phi1 = bounds_lambda1 = -(bounds_lambda0 = bounds_phi0 = Infinity);
  ranges = [];
  src_stream(feature, boundsStream);

  // First, sort ranges by their minimum longitudes.
  if (n = ranges.length) {
    ranges.sort(rangeCompare);

    // Then, merge any ranges that overlap.
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (bounds_angle(a[0], b[1]) > bounds_angle(a[0], a[1])) a[1] = b[1];
        if (bounds_angle(b[0], a[1]) > bounds_angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }

    // Finally, find the largest gap between the merged ranges.
    // The final bounding box will be the inverse of this gap.
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = bounds_angle(a[1], b[0])) > deltaMax) deltaMax = delta, bounds_lambda0 = b[0], bounds_lambda1 = a[1];
    }
  }

  ranges = range = null;

  return bounds_lambda0 === Infinity || bounds_phi0 === Infinity
      ? [[NaN, NaN], [NaN, NaN]]
      : [[bounds_lambda0, bounds_phi0], [bounds_lambda1, bounds_phi1]];
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/centroid.js




var W0, W1,
    centroid_X0, centroid_Y0, Z0,
    centroid_X1, centroid_Y1, Z1,
    X2, Y2, Z2,
    centroid_lambda00, centroid_phi00, // first point
    centroid_x0, centroid_y0, z0; // previous point

var centroidStream = {
  sphere: noop,
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};

// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos(phi);
  centroidPointCartesian(cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi));
}

function centroidPointCartesian(x, y, z) {
  ++W0;
  centroid_X0 += (x - centroid_X0) / W0;
  centroid_Y0 += (y - centroid_Y0) / W0;
  Z0 += (z - Z0) / W0;
}

function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}

function centroidLinePointFirst(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos(phi);
  centroid_x0 = cosPhi * cos(lambda);
  centroid_y0 = cosPhi * sin(lambda);
  z0 = sin(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(centroid_x0, centroid_y0, z0);
}

function centroidLinePoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos(phi),
      x = cosPhi * cos(lambda),
      y = cosPhi * sin(lambda),
      z = sin(phi),
      w = atan2(sqrt((w = centroid_y0 * z - z0 * y) * w + (w = z0 * x - centroid_x0 * z) * w + (w = centroid_x0 * y - centroid_y0 * x) * w), centroid_x0 * x + centroid_y0 * y + z0 * z);
  W1 += w;
  centroid_X1 += w * (centroid_x0 + (centroid_x0 = x));
  centroid_Y1 += w * (centroid_y0 + (centroid_y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(centroid_x0, centroid_y0, z0);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}

function centroidRingEnd() {
  centroidRingPoint(centroid_lambda00, centroid_phi00);
  centroidStream.point = centroidPoint;
}

function centroidRingPointFirst(lambda, phi) {
  centroid_lambda00 = lambda, centroid_phi00 = phi;
  lambda *= radians, phi *= radians;
  centroidStream.point = centroidRingPoint;
  var cosPhi = cos(phi);
  centroid_x0 = cosPhi * cos(lambda);
  centroid_y0 = cosPhi * sin(lambda);
  z0 = sin(phi);
  centroidPointCartesian(centroid_x0, centroid_y0, z0);
}

function centroidRingPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos(phi),
      x = cosPhi * cos(lambda),
      y = cosPhi * sin(lambda),
      z = sin(phi),
      cx = centroid_y0 * z - z0 * y,
      cy = z0 * x - centroid_x0 * z,
      cz = centroid_x0 * y - centroid_y0 * x,
      m = sqrt(cx * cx + cy * cy + cz * cz),
      w = asin(m), // line weight = angle
      v = m && -w / m; // area weight multiplier
  X2 += v * cx;
  Y2 += v * cy;
  Z2 += v * cz;
  W1 += w;
  centroid_X1 += w * (centroid_x0 + (centroid_x0 = x));
  centroid_Y1 += w * (centroid_y0 + (centroid_y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(centroid_x0, centroid_y0, z0);
}

/* harmony default export */ var centroid = (function(object) {
  W0 = W1 =
  centroid_X0 = centroid_Y0 = Z0 =
  centroid_X1 = centroid_Y1 = Z1 =
  X2 = Y2 = Z2 = 0;
  src_stream(object, centroidStream);

  var x = X2,
      y = Y2,
      z = Z2,
      m = x * x + y * y + z * z;

  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
  if (m < epsilon2) {
    x = centroid_X1, y = centroid_Y1, z = Z1;
    // If the feature has zero length, fall back to arithmetic mean of point vectors.
    if (W1 < epsilon) x = centroid_X0, y = centroid_Y0, z = Z0;
    m = x * x + y * y + z * z;
    // If the feature still has an undefined ccentroid, then return.
    if (m < epsilon2) return [NaN, NaN];
  }

  return [atan2(y, x) * degrees, asin(z / sqrt(m)) * degrees];
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/constant.js
/* harmony default export */ var constant = (function(x) {
  return function() {
    return x;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/compose.js
/* harmony default export */ var compose = (function(a, b) {

  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }

  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };

  return compose;
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/rotation.js



function rotationIdentity(lambda, phi) {
  return [lambda > pi ? lambda - tau : lambda < -pi ? lambda + tau : lambda, phi];
}

rotationIdentity.invert = rotationIdentity;

function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= tau) ? (deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
    : rotationLambda(deltaLambda))
    : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
    : rotationIdentity);
}

function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > pi ? lambda - tau : lambda < -pi ? lambda + tau : lambda, phi];
  };
}

function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}

function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = cos(deltaPhi),
      sinDeltaPhi = sin(deltaPhi),
      cosDeltaGamma = cos(deltaGamma),
      sinDeltaGamma = sin(deltaGamma);

  function rotation(lambda, phi) {
    var cosPhi = cos(phi),
        x = cos(lambda) * cosPhi,
        y = sin(lambda) * cosPhi,
        z = sin(phi),
        k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      asin(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }

  rotation.invert = function(lambda, phi) {
    var cosPhi = cos(phi),
        x = cos(lambda) * cosPhi,
        y = sin(lambda) * cosPhi,
        z = sin(phi),
        k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      asin(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };

  return rotation;
}

/* harmony default export */ var src_rotation = (function(rotate) {
  rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0);

  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * radians, coordinates[1] * radians);
    return coordinates[0] *= degrees, coordinates[1] *= degrees, coordinates;
  }

  forward.invert = function(coordinates) {
    coordinates = rotate.invert(coordinates[0] * radians, coordinates[1] * radians);
    return coordinates[0] *= degrees, coordinates[1] *= degrees, coordinates;
  };

  return forward;
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/circle.js





// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = cos(radius),
      sinRadius = sin(radius),
      step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * tau;
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau;
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = cartesian_spherical([cosRadius, -sinRadius * cos(t), -sinRadius * sin(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = cartesian_cartesian(point), point[0] -= cosRadius;
  cartesianNormalizeInPlace(point);
  var radius = acos(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + tau - epsilon) % tau;
}

/* harmony default export */ var src_circle = (function() {
  var center = constant([0, 0]),
      radius = constant(90),
      precision = constant(6),
      ring,
      rotate,
      stream = {point: point};

  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= degrees, x[1] *= degrees;
  }

  function circle() {
    var c = center.apply(this, arguments),
        r = radius.apply(this, arguments) * radians,
        p = precision.apply(this, arguments) * radians;
    ring = [];
    rotate = rotateRadians(-c[0] * radians, -c[1] * radians, 0).invert;
    circleStream(stream, r, p, 1);
    c = {type: "Polygon", coordinates: [ring]};
    ring = rotate = null;
    return c;
  }

  circle.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : constant([+_[0], +_[1]]), circle) : center;
  };

  circle.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant(+_), circle) : radius;
  };

  circle.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : constant(+_), circle) : precision;
  };

  return circle;
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/clip/buffer.js


/* harmony default export */ var buffer = (function() {
  var lines = [],
      line;
  return {
    point: function(x, y) {
      line.push([x, y]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: noop,
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/pointEqual.js


/* harmony default export */ var pointEqual = (function(a, b) {
  return abs(a[0] - b[0]) < epsilon && abs(a[1] - b[1]) < epsilon;
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/clip/rejoin.js


function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
/* harmony default export */ var rejoin = (function(segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;

  segments.forEach(function(segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n, p0 = segment[0], p1 = segment[n], x;

    // If the first and last points of a segment are coincident, then treat as a
    // closed ring. TODO if all rings are closed, then the winding order of the
    // exterior ring should be checked.
    if (pointEqual(p0, p1)) {
      stream.lineStart();
      for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
      stream.lineEnd();
      return;
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });

  if (!subject.length) return;

  clip.sort(compareIntersection);
  rejoin_link(subject);
  rejoin_link(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
});

function rejoin_link(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/polygonContains.js




var polygonContains_sum = adder();

/* harmony default export */ var polygonContains = (function(polygon, point) {
  var lambda = point[0],
      phi = point[1],
      sinPhi = sin(phi),
      normal = [sin(lambda), -cos(lambda), 0],
      angle = 0,
      winding = 0;

  polygonContains_sum.reset();

  if (sinPhi === 1) phi = halfPi + epsilon;
  else if (sinPhi === -1) phi = -halfPi - epsilon;

  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
        m,
        point0 = ring[m - 1],
        lambda0 = point0[0],
        phi0 = point0[1] / 2 + quarterPi,
        sinPhi0 = sin(phi0),
        cosPhi0 = cos(phi0);

    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
          lambda1 = point1[0],
          phi1 = point1[1] / 2 + quarterPi,
          sinPhi1 = sin(phi1),
          cosPhi1 = cos(phi1),
          delta = lambda1 - lambda0,
          sign = delta >= 0 ? 1 : -1,
          absDelta = sign * delta,
          antimeridian = absDelta > pi,
          k = sinPhi0 * sinPhi1;

      polygonContains_sum.add(atan2(k * sign * sin(absDelta), cosPhi0 * cosPhi1 + k * cos(absDelta)));
      angle += antimeridian ? delta + sign * tau : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = cartesianCross(cartesian_cartesian(point0), cartesian_cartesian(point1));
        cartesianNormalizeInPlace(arc);
        var intersection = cartesianCross(normal, arc);
        cartesianNormalizeInPlace(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -epsilon || angle < epsilon && polygonContains_sum < -epsilon) ^ (winding & 1);
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/ascending.js
/* harmony default export */ var ascending = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/bisector.js


/* harmony default export */ var bisector = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/bisect.js



var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ var bisect = (bisectRight);

// CONCATENATED MODULE: ./node_modules/d3-array/src/pairs.js
/* harmony default export */ var pairs = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/cross.js


/* harmony default export */ var cross = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = pair;

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/descending.js
/* harmony default export */ var descending = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/number.js
/* harmony default export */ var number = (function(x) {
  return x === null ? NaN : +x;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/variance.js


/* harmony default export */ var variance = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = number(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/deviation.js


/* harmony default export */ var deviation = (function(array, f) {
  var v = variance(array, f);
  return v ? Math.sqrt(v) : v;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/extent.js
/* harmony default export */ var src_extent = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/array.js
var array_array = Array.prototype;

var slice = array_array.slice;
var map = array_array.map;

// CONCATENATED MODULE: ./node_modules/d3-array/src/constant.js
/* harmony default export */ var src_constant = (function(x) {
  return function() {
    return x;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/identity.js
/* harmony default export */ var identity = (function(x) {
  return x;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/range.js
/* harmony default export */ var src_range = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ var ticks = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/threshold/sturges.js
/* harmony default export */ var sturges = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/histogram.js









/* harmony default export */ var src_histogram = (function() {
  var value = identity,
      domain = src_extent,
      threshold = sturges;

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = tickStep(x0, x1, tz);
      tz = src_range(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[bisect(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : src_constant(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : src_constant([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? src_constant(slice.call(_)) : src_constant(_), histogram) : threshold;
  };

  return histogram;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/quantile.js


/* harmony default export */ var quantile = (function(values, p, valueof) {
  if (valueof == null) valueof = number;
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/threshold/freedmanDiaconis.js





/* harmony default export */ var freedmanDiaconis = (function(values, min, max) {
  values = map.call(values, number).sort(ascending);
  return Math.ceil((max - min) / (2 * (quantile(values, 0.75) - quantile(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/threshold/scott.js


/* harmony default export */ var scott = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(values.length, -1 / 3)));
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/max.js
/* harmony default export */ var src_max = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/mean.js


/* harmony default export */ var src_mean = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = number(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/median.js




/* harmony default export */ var median = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = number(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return quantile(numbers.sort(ascending), 0.5);
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/merge.js
/* harmony default export */ var merge = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/min.js
/* harmony default export */ var src_min = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/permute.js
/* harmony default export */ var permute = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/scan.js


/* harmony default export */ var scan = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = ascending;

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/shuffle.js
/* harmony default export */ var shuffle = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/sum.js
/* harmony default export */ var src_sum = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/transpose.js


/* harmony default export */ var src_transpose = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = src_min(matrix, transpose_length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function transpose_length(d) {
  return d.length;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/zip.js


/* harmony default export */ var zip = (function() {
  return src_transpose(arguments);
});

// CONCATENATED MODULE: ./node_modules/d3-array/index.js




























// CONCATENATED MODULE: ./node_modules/d3-geo/src/clip/index.js






/* harmony default export */ var src_clip = (function(pointVisible, clipLine, interpolate, start) {
  return function(sink) {
    var line = clipLine(sink),
        ringBuffer = buffer(),
        ringSink = clipLine(ringBuffer),
        polygonStarted = false,
        polygon,
        segments,
        ring;

    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = merge(segments);
        var startInside = polygonContains(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          rejoin(segments, clip_compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };

    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }

    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }

    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }

    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }

    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }

    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }

    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();

      var clean = ringSink.clean(),
          ringSegments = ringBuffer.result(),
          i, n = ringSegments.length, m,
          segment,
          point;

      ring.pop();
      polygon.push(ring);
      ring = null;

      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

      segments.push(ringSegments.filter(validSegment));
    }

    return clip;
  };
});

function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function clip_compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - halfPi - epsilon : halfPi - a[1])
       - ((b = b.x)[0] < 0 ? b[1] - halfPi - epsilon : halfPi - b[1]);
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/clip/antimeridian.js



/* harmony default export */ var clip_antimeridian = (src_clip(
  function() { return true; },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-pi, -halfPi]
));

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
      phi0 = NaN,
      sign0 = NaN,
      clean; // no intersections

  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? pi : -pi,
          delta = abs(lambda1 - lambda0);
      if (abs(delta - pi) < epsilon) { // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi : -halfPi);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= pi) { // line crosses antimeridian
        if (abs(lambda0 - sign0) < epsilon) lambda0 -= sign0 * epsilon; // handle degeneracies
        if (abs(lambda1 - sign1) < epsilon) lambda1 -= sign1 * epsilon;
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
      cosPhi1,
      sinLambda0Lambda1 = sin(lambda0 - lambda1);
  return abs(sinLambda0Lambda1) > epsilon
      ? atan((sin(phi0) * (cosPhi1 = cos(phi1)) * sin(lambda1)
          - sin(phi1) * (cosPhi0 = cos(phi0)) * sin(lambda0))
          / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
      : (phi0 + phi1) / 2;
}

function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * halfPi;
    stream.point(-pi, phi);
    stream.point(0, phi);
    stream.point(pi, phi);
    stream.point(pi, 0);
    stream.point(pi, -phi);
    stream.point(0, -phi);
    stream.point(-pi, -phi);
    stream.point(-pi, 0);
    stream.point(-pi, phi);
  } else if (abs(from[0] - to[0]) > epsilon) {
    var lambda = from[0] < to[0] ? pi : -pi;
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/clip/circle.js






/* harmony default export */ var clip_circle = (function(radius) {
  var cr = cos(radius),
      delta = 6 * radians,
      smallRadius = cr > 0,
      notHemisphere = abs(cr) > epsilon; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    circleStream(stream, radius, delta, direction, from, to);
  }

  function visible(lambda, phi) {
    return cos(lambda) * cos(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0, // previous point
        c0, // code for previous point
        v0, // visibility of previous point
        v00, // visibility of first point
        clean; // no intersections
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi],
            point2,
            v = visible(lambda, phi),
            c = smallRadius
              ? v ? 0 : code(lambda, phi)
              : v ? code(lambda + (lambda < 0 ? pi : -pi), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        // Handle degeneracies.
        // TODO ignore if not clipping polygons.
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || pointEqual(point0, point2) || pointEqual(point1, point2)) {
            point1[0] += epsilon;
            point1[1] += epsilon;
            v = visible(point1[0], point1[1]);
          }
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1]);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
            }
          }
        }
        if (v && (!point0 || !pointEqual(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | ((v00 && v0) << 1);
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = cartesian_cartesian(a),
        pb = cartesian_cartesian(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0], // normal
        n2 = cartesianCross(pa, pb),
        n2n2 = cartesianDot(n2, n2),
        n1n2 = n2[0], // cartesianDot(n1, n2),
        determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;

    var c1 =  cr * n2n2 / determinant,
        c2 = -cr * n1n2 / determinant,
        n1xn2 = cartesianCross(n1, n2),
        A = cartesianScale(n1, c1),
        B = cartesianScale(n2, c2);
    cartesianAddInPlace(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
        w = cartesianDot(A, u),
        uu = cartesianDot(u, u),
        t2 = w * w - uu * (cartesianDot(A, A) - 1);

    if (t2 < 0) return;

    var t = sqrt(t2),
        q = cartesianScale(u, (-w - t) / uu);
    cartesianAddInPlace(q, A);
    q = cartesian_spherical(q);

    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
        lambda1 = b[0],
        phi0 = a[1],
        phi1 = b[1],
        z;

    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

    var delta = lambda1 - lambda0,
        polar = abs(delta - pi) < epsilon,
        meridian = polar || delta < epsilon;

    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian
        ? polar
          ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda0) < epsilon ? phi0 : phi1)
          : phi0 <= q[1] && q[1] <= phi1
        : delta > pi ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = cartesianScale(u, (-w + t) / uu);
      cartesianAddInPlace(q1, A);
      return [q, cartesian_spherical(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : pi - radius,
        code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }

  return src_clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi, radius - pi]);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/clip/line.js
/* harmony default export */ var clip_line = (function(a, b, x0, y0, x1, y1) {
  var ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/clip/rectangle.js






var clipMax = 1e9, clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipRectangle(x0, y0, x1, y1) {

  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null
        || (a = corner(from, direction)) !== (a1 = corner(to, direction))
        || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return abs(p[0] - x0) < epsilon ? direction > 0 ? 0 : 3
        : abs(p[0] - x1) < epsilon ? direction > 0 ? 2 : 1
        : abs(p[1] - y0) < epsilon ? direction > 0 ? 1 : 0
        : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb
        : ca === 0 ? b[1] - a[1]
        : ca === 1 ? a[0] - b[0]
        : ca === 2 ? a[1] - b[1]
        : b[0] - a[0];
  }

  return function(stream) {
    var activeStream = stream,
        bufferStream = buffer(),
        segments,
        polygon,
        ring,
        x__, y__, v__, // first point
        x_, y_, v_, // previous point
        first,
        clean;

    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
          else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
        }
      }

      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = merge(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          rejoin(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (clip_line(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/clip/extent.js


/* harmony default export */ var clip_extent = (function() {
  var x0 = 0,
      y0 = 0,
      x1 = 960,
      y1 = 500,
      cache,
      cacheStream,
      clip;

  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = clipRectangle(x0, y0, x1, y1)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
    }
  };
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/length.js





var lengthSum = adder(),
    length_lambda0,
    length_sinPhi0,
    length_cosPhi0;

var lengthStream = {
  sphere: noop,
  point: noop,
  lineStart: lengthLineStart,
  lineEnd: noop,
  polygonStart: noop,
  polygonEnd: noop
};

function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}

function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = noop;
}

function lengthPointFirst(lambda, phi) {
  lambda *= radians, phi *= radians;
  length_lambda0 = lambda, length_sinPhi0 = sin(phi), length_cosPhi0 = cos(phi);
  lengthStream.point = lengthPoint;
}

function lengthPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var sinPhi = sin(phi),
      cosPhi = cos(phi),
      delta = abs(lambda - length_lambda0),
      cosDelta = cos(delta),
      sinDelta = sin(delta),
      x = cosPhi * sinDelta,
      y = length_cosPhi0 * sinPhi - length_sinPhi0 * cosPhi * cosDelta,
      z = length_sinPhi0 * sinPhi + length_cosPhi0 * cosPhi * cosDelta;
  lengthSum.add(atan2(sqrt(x * x + y * y), z));
  length_lambda0 = lambda, length_sinPhi0 = sinPhi, length_cosPhi0 = cosPhi;
}

/* harmony default export */ var src_length = (function(object) {
  lengthSum.reset();
  src_stream(object, lengthStream);
  return +lengthSum;
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/distance.js


var distance_coordinates = [null, null],
    distance_object = {type: "LineString", coordinates: distance_coordinates};

/* harmony default export */ var distance = (function(a, b) {
  distance_coordinates[0] = a;
  distance_coordinates[1] = b;
  return src_length(distance_object);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/contains.js




var containsObjectType = {
  Feature: function(object, point) {
    return containsGeometry(object.geometry, point);
  },
  FeatureCollection: function(object, point) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
    return false;
  }
};

var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object, point) {
    return containsPoint(object.coordinates, point);
  },
  MultiPoint: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPoint(coordinates[i], point)) return true;
    return false;
  },
  LineString: function(object, point) {
    return containsLine(object.coordinates, point);
  },
  MultiLineString: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsLine(coordinates[i], point)) return true;
    return false;
  },
  Polygon: function(object, point) {
    return containsPolygon(object.coordinates, point);
  },
  MultiPolygon: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
    return false;
  },
  GeometryCollection: function(object, point) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
    return false;
  }
};

function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type)
      ? containsGeometryType[geometry.type](geometry, point)
      : false;
}

function containsPoint(coordinates, point) {
  return distance(coordinates, point) === 0;
}

function containsLine(coordinates, point) {
  var ab = distance(coordinates[0], coordinates[1]),
      ao = distance(coordinates[0], point),
      ob = distance(point, coordinates[1]);
  return ao + ob <= ab + epsilon;
}

function containsPolygon(coordinates, point) {
  return !!polygonContains(coordinates.map(ringRadians), pointRadians(point));
}

function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}

function pointRadians(point) {
  return [point[0] * radians, point[1] * radians];
}

/* harmony default export */ var contains = (function(object, point) {
  return (object && containsObjectType.hasOwnProperty(object.type)
      ? containsObjectType[object.type]
      : containsGeometry)(object, point);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/graticule.js



function graticuleX(y0, y1, dy) {
  var y = src_range(y0, y1 - epsilon, dy).concat(y1);
  return function(x) { return y.map(function(y) { return [x, y]; }); };
}

function graticuleY(x0, x1, dx) {
  var x = src_range(x0, x1 - epsilon, dx).concat(x1);
  return function(y) { return x.map(function(x) { return [x, y]; }); };
}

function graticule_graticule() {
  var x1, x0, X1, X0,
      y1, y0, Y1, Y0,
      dx = 10, dy = dx, DX = 90, DY = 360,
      x, y, X, Y,
      precision = 2.5;

  function graticule() {
    return {type: "MultiLineString", coordinates: lines()};
  }

  function lines() {
    return src_range(ceil(X0 / DX) * DX, X1, DX).map(X)
        .concat(src_range(ceil(Y0 / DY) * DY, Y1, DY).map(Y))
        .concat(src_range(ceil(x0 / dx) * dx, x1, dx).filter(function(x) { return abs(x % DX) > epsilon; }).map(x))
        .concat(src_range(ceil(y0 / dy) * dy, y1, dy).filter(function(y) { return abs(y % DY) > epsilon; }).map(y));
  }

  graticule.lines = function() {
    return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
  };

  graticule.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X(X0).concat(
        Y(Y1).slice(1),
        X(X1).reverse().slice(1),
        Y(Y0).reverse().slice(1))
      ]
    };
  };

  graticule.extent = function(_) {
    if (!arguments.length) return graticule.extentMinor();
    return graticule.extentMajor(_).extentMinor(_);
  };

  graticule.extentMajor = function(_) {
    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
    X0 = +_[0][0], X1 = +_[1][0];
    Y0 = +_[0][1], Y1 = +_[1][1];
    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
    return graticule.precision(precision);
  };

  graticule.extentMinor = function(_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };

  graticule.step = function(_) {
    if (!arguments.length) return graticule.stepMinor();
    return graticule.stepMajor(_).stepMinor(_);
  };

  graticule.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule;
  };

  graticule.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };

  graticule.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y0, y1, 90);
    y = graticuleY(x0, x1, precision);
    X = graticuleX(Y0, Y1, 90);
    Y = graticuleY(X0, X1, precision);
    return graticule;
  };

  return graticule
      .extentMajor([[-180, -90 + epsilon], [180, 90 - epsilon]])
      .extentMinor([[-180, -80 - epsilon], [180, 80 + epsilon]]);
}

function graticule10() {
  return graticule_graticule()();
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/interpolate.js


/* harmony default export */ var src_interpolate = (function(a, b) {
  var x0 = a[0] * radians,
      y0 = a[1] * radians,
      x1 = b[0] * radians,
      y1 = b[1] * radians,
      cy0 = cos(y0),
      sy0 = sin(y0),
      cy1 = cos(y1),
      sy1 = sin(y1),
      kx0 = cy0 * cos(x0),
      ky0 = cy0 * sin(x0),
      kx1 = cy1 * cos(x1),
      ky1 = cy1 * sin(x1),
      d = 2 * asin(sqrt(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))),
      k = sin(d);

  var interpolate = d ? function(t) {
    var B = sin(t *= d) / k,
        A = sin(d - t) / k,
        x = A * kx0 + B * kx1,
        y = A * ky0 + B * ky1,
        z = A * sy0 + B * sy1;
    return [
      atan2(y, x) * degrees,
      atan2(z, sqrt(x * x + y * y)) * degrees
    ];
  } : function() {
    return [x0 * degrees, y0 * degrees];
  };

  interpolate.distance = d;

  return interpolate;
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/identity.js
/* harmony default export */ var src_identity = (function(x) {
  return x;
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/path/area.js




var area_areaSum = adder(),
    area_areaRingSum = adder(),
    area_x00,
    area_y00,
    area_x0,
    area_y0;

var area_areaStream = {
  point: noop,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: function() {
    area_areaStream.lineStart = area_areaRingStart;
    area_areaStream.lineEnd = area_areaRingEnd;
  },
  polygonEnd: function() {
    area_areaStream.lineStart = area_areaStream.lineEnd = area_areaStream.point = noop;
    area_areaSum.add(abs(area_areaRingSum));
    area_areaRingSum.reset();
  },
  result: function() {
    var area = area_areaSum / 2;
    area_areaSum.reset();
    return area;
  }
};

function area_areaRingStart() {
  area_areaStream.point = area_areaPointFirst;
}

function area_areaPointFirst(x, y) {
  area_areaStream.point = area_areaPoint;
  area_x00 = area_x0 = x, area_y00 = area_y0 = y;
}

function area_areaPoint(x, y) {
  area_areaRingSum.add(area_y0 * x - area_x0 * y);
  area_x0 = x, area_y0 = y;
}

function area_areaRingEnd() {
  area_areaPoint(area_x00, area_y00);
}

/* harmony default export */ var path_area = (area_areaStream);

// CONCATENATED MODULE: ./node_modules/d3-geo/src/path/bounds.js


var bounds_x0 = Infinity,
    bounds_y0 = bounds_x0,
    bounds_x1 = -bounds_x0,
    bounds_y1 = bounds_x1;

var bounds_boundsStream = {
  point: bounds_boundsPoint,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: noop,
  polygonEnd: noop,
  result: function() {
    var bounds = [[bounds_x0, bounds_y0], [bounds_x1, bounds_y1]];
    bounds_x1 = bounds_y1 = -(bounds_y0 = bounds_x0 = Infinity);
    return bounds;
  }
};

function bounds_boundsPoint(x, y) {
  if (x < bounds_x0) bounds_x0 = x;
  if (x > bounds_x1) bounds_x1 = x;
  if (y < bounds_y0) bounds_y0 = y;
  if (y > bounds_y1) bounds_y1 = y;
}

/* harmony default export */ var path_bounds = (bounds_boundsStream);

// CONCATENATED MODULE: ./node_modules/d3-geo/src/path/centroid.js


// TODO Enforce positive area for exterior, negative area for interior?

var path_centroid_X0 = 0,
    path_centroid_Y0 = 0,
    centroid_Z0 = 0,
    path_centroid_X1 = 0,
    path_centroid_Y1 = 0,
    centroid_Z1 = 0,
    centroid_X2 = 0,
    centroid_Y2 = 0,
    centroid_Z2 = 0,
    centroid_x00,
    centroid_y00,
    path_centroid_x0,
    path_centroid_y0;

var centroid_centroidStream = {
  point: centroid_centroidPoint,
  lineStart: centroid_centroidLineStart,
  lineEnd: centroid_centroidLineEnd,
  polygonStart: function() {
    centroid_centroidStream.lineStart = centroid_centroidRingStart;
    centroid_centroidStream.lineEnd = centroid_centroidRingEnd;
  },
  polygonEnd: function() {
    centroid_centroidStream.point = centroid_centroidPoint;
    centroid_centroidStream.lineStart = centroid_centroidLineStart;
    centroid_centroidStream.lineEnd = centroid_centroidLineEnd;
  },
  result: function() {
    var centroid = centroid_Z2 ? [centroid_X2 / centroid_Z2, centroid_Y2 / centroid_Z2]
        : centroid_Z1 ? [path_centroid_X1 / centroid_Z1, path_centroid_Y1 / centroid_Z1]
        : centroid_Z0 ? [path_centroid_X0 / centroid_Z0, path_centroid_Y0 / centroid_Z0]
        : [NaN, NaN];
    path_centroid_X0 = path_centroid_Y0 = centroid_Z0 =
    path_centroid_X1 = path_centroid_Y1 = centroid_Z1 =
    centroid_X2 = centroid_Y2 = centroid_Z2 = 0;
    return centroid;
  }
};

function centroid_centroidPoint(x, y) {
  path_centroid_X0 += x;
  path_centroid_Y0 += y;
  ++centroid_Z0;
}

function centroid_centroidLineStart() {
  centroid_centroidStream.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroid_centroidStream.point = centroidPointLine;
  centroid_centroidPoint(path_centroid_x0 = x, path_centroid_y0 = y);
}

function centroidPointLine(x, y) {
  var dx = x - path_centroid_x0, dy = y - path_centroid_y0, z = sqrt(dx * dx + dy * dy);
  path_centroid_X1 += z * (path_centroid_x0 + x) / 2;
  path_centroid_Y1 += z * (path_centroid_y0 + y) / 2;
  centroid_Z1 += z;
  centroid_centroidPoint(path_centroid_x0 = x, path_centroid_y0 = y);
}

function centroid_centroidLineEnd() {
  centroid_centroidStream.point = centroid_centroidPoint;
}

function centroid_centroidRingStart() {
  centroid_centroidStream.point = centroidPointFirstRing;
}

function centroid_centroidRingEnd() {
  centroidPointRing(centroid_x00, centroid_y00);
}

function centroidPointFirstRing(x, y) {
  centroid_centroidStream.point = centroidPointRing;
  centroid_centroidPoint(centroid_x00 = path_centroid_x0 = x, centroid_y00 = path_centroid_y0 = y);
}

function centroidPointRing(x, y) {
  var dx = x - path_centroid_x0,
      dy = y - path_centroid_y0,
      z = sqrt(dx * dx + dy * dy);

  path_centroid_X1 += z * (path_centroid_x0 + x) / 2;
  path_centroid_Y1 += z * (path_centroid_y0 + y) / 2;
  centroid_Z1 += z;

  z = path_centroid_y0 * x - path_centroid_x0 * y;
  centroid_X2 += z * (path_centroid_x0 + x);
  centroid_Y2 += z * (path_centroid_y0 + y);
  centroid_Z2 += z * 3;
  centroid_centroidPoint(path_centroid_x0 = x, path_centroid_y0 = y);
}

/* harmony default export */ var path_centroid = (centroid_centroidStream);

// CONCATENATED MODULE: ./node_modules/d3-geo/src/path/context.js



function PathContext(context) {
  this._context = context;
}

PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y);
        this._context.arc(x, y, this._radius, 0, tau);
        break;
      }
    }
  },
  result: noop
};

// CONCATENATED MODULE: ./node_modules/d3-geo/src/path/measure.js




var measure_lengthSum = adder(),
    lengthRing,
    measure_x00,
    measure_y00,
    measure_x0,
    measure_y0;

var measure_lengthStream = {
  point: noop,
  lineStart: function() {
    measure_lengthStream.point = measure_lengthPointFirst;
  },
  lineEnd: function() {
    if (lengthRing) measure_lengthPoint(measure_x00, measure_y00);
    measure_lengthStream.point = noop;
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +measure_lengthSum;
    measure_lengthSum.reset();
    return length;
  }
};

function measure_lengthPointFirst(x, y) {
  measure_lengthStream.point = measure_lengthPoint;
  measure_x00 = measure_x0 = x, measure_y00 = measure_y0 = y;
}

function measure_lengthPoint(x, y) {
  measure_x0 -= x, measure_y0 -= y;
  measure_lengthSum.add(sqrt(measure_x0 * measure_x0 + measure_y0 * measure_y0));
  measure_x0 = x, measure_y0 = y;
}

/* harmony default export */ var measure = (measure_lengthStream);

// CONCATENATED MODULE: ./node_modules/d3-geo/src/path/string.js
function PathString() {
  this._string = [];
}

PathString.prototype = {
  _radius: 4.5,
  _circle: string_circle(4.5),
  pointRadius: function(_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x, ",", y);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x, ",", y);
        break;
      }
      default: {
        if (this._circle == null) this._circle = string_circle(this._radius);
        this._string.push("M", x, ",", y, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};

function string_circle(radius) {
  return "m0," + radius
      + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
      + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
      + "z";
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/path/index.js









/* harmony default export */ var src_path = (function(projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      src_stream(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function(object) {
    src_stream(object, projectionStream(path_area));
    return path_area.result();
  };

  path.measure = function(object) {
    src_stream(object, projectionStream(measure));
    return measure.result();
  };

  path.bounds = function(object) {
    src_stream(object, projectionStream(path_bounds));
    return path_bounds.result();
  };

  path.centroid = function(object) {
    src_stream(object, projectionStream(path_centroid));
    return path_centroid.result();
  };

  path.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, src_identity) : (projection = _).stream, path) : projection;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new PathString) : new PathContext(context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/transform.js
/* harmony default export */ var src_transform = (function(methods) {
  return {
    stream: transformer(methods)
  };
});

function transformer(methods) {
  return function(stream) {
    var s = new TransformStream;
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y) { this.stream.point(x, y); },
  sphere: function() { this.stream.sphere(); },
  lineStart: function() { this.stream.lineStart(); },
  lineEnd: function() { this.stream.lineEnd(); },
  polygonStart: function() { this.stream.polygonStart(); },
  polygonEnd: function() { this.stream.polygonEnd(); }
};

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/fit.js



function fit(projection, fitBounds, object) {
  var clip = projection.clipExtent && projection.clipExtent();
  projection.scale(150).translate([0, 0]);
  if (clip != null) projection.clipExtent(null);
  src_stream(object, projection.stream(path_bounds));
  fitBounds(path_bounds.result());
  if (clip != null) projection.clipExtent(clip);
  return projection;
}

function fitExtent(projection, extent, object) {
  return fit(projection, function(b) {
    var w = extent[1][0] - extent[0][0],
        h = extent[1][1] - extent[0][1],
        k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
        x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
        y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}

function fitWidth(projection, width, object) {
  return fit(projection, function(b) {
    var w = +width,
        k = w / (b[1][0] - b[0][0]),
        x = (w - k * (b[1][0] + b[0][0])) / 2,
        y = -k * b[0][1];
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitHeight(projection, height, object) {
  return fit(projection, function(b) {
    var h = +height,
        k = h / (b[1][1] - b[0][1]),
        x = -k * b[0][0],
        y = (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/resample.js




var maxDepth = 16, // maximum depth of subdivision
    cosMinDistance = cos(30 * radians); // cos(minimum angular distance)

/* harmony default export */ var resample = (function(project, delta2) {
  return +delta2 ? resample_resample(project, delta2) : resampleNone(project);
});

function resampleNone(project) {
  return transformer({
    point: function(x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}

function resample_resample(project, delta2) {

  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
        dy = y1 - y0,
        d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
          b = b0 + b1,
          c = c0 + c1,
          m = sqrt(a * a + b * b + c * c),
          phi2 = asin(c /= m),
          lambda2 = abs(abs(c) - 1) < epsilon || abs(lambda0 - lambda1) < epsilon ? (lambda0 + lambda1) / 2 : atan2(b, a),
          p = project(lambda2, phi2),
          x2 = p[0],
          y2 = p[1],
          dx2 = x2 - x0,
          dy2 = y2 - y0,
          dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
          || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
          || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x00, y00, a00, b00, c00, // first point
        lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
      polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
    };

    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }

    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }

    function linePoint(lambda, phi) {
      var c = cartesian_cartesian([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }

    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }

    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }

    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }

    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }

    return resampleStream;
  };
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/index.js











var transformRadians = transformer({
  point: function(x, y) {
    this.stream.point(x * radians, y * radians);
  }
});

function transformRotate(rotate) {
  return transformer({
    point: function(x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}

function scaleTranslate(k, dx, dy) {
  function transform(x, y) {
    return [dx + k * x, dy - k * y];
  }
  transform.invert = function(x, y) {
    return [(x - dx) / k, (dy - y) / k];
  };
  return transform;
}

function scaleTranslateRotate(k, dx, dy, alpha) {
  var cosAlpha = cos(alpha),
      sinAlpha = sin(alpha),
      a = cosAlpha * k,
      b = sinAlpha * k,
      ai = cosAlpha / k,
      bi = sinAlpha / k,
      ci = (sinAlpha * dy - cosAlpha * dx) / k,
      fi = (sinAlpha * dx + cosAlpha * dy) / k;
  function transform(x, y) {
    return [a * x - b * y + dx, dy - b * x - a * y];
  }
  transform.invert = function(x, y) {
    return [ai * x - bi * y + ci, fi - bi * x - ai * y];
  };
  return transform;
}

function projection_projection(project) {
  return projectionMutator(function() { return project; })();
}

function projectionMutator(projectAt) {
  var project,
      k = 150, // scale
      x = 480, y = 250, // translate
      lambda = 0, phi = 0, // center
      deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, // pre-rotate
      alpha = 0, // post-rotate
      theta = null, preclip = clip_antimeridian, // pre-clip angle
      x0 = null, y0, x1, y1, postclip = src_identity, // post-clip extent
      delta2 = 0.5, // precision
      projectResample,
      projectTransform,
      projectRotateTransform,
      cache,
      cacheStream;

  function projection(point) {
    return projectRotateTransform(point[0] * radians, point[1] * radians);
  }

  function invert(point) {
    point = projectRotateTransform.invert(point[0], point[1]);
    return point && [point[0] * degrees, point[1] * degrees];
  }

  projection.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };

  projection.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
  };

  projection.postclip = function(_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };

  projection.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? clip_circle(theta = _ * radians) : (theta = null, clip_antimeridian), reset()) : theta * degrees;
  };

  projection.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, src_identity) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };

  projection.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };

  projection.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * radians, phi = _[1] % 360 * radians, recenter()) : [lambda * degrees, phi * degrees];
  };

  projection.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees, deltaPhi * degrees, deltaGamma * degrees];
  };

  projection.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * radians, recenter()) : alpha * degrees;
  };

  projection.precision = function(_) {
    return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), reset()) : sqrt(delta2);
  };

  projection.fitExtent = function(extent, object) {
    return fitExtent(projection, extent, object);
  };

  projection.fitSize = function(size, object) {
    return fitSize(projection, size, object);
  };

  projection.fitWidth = function(width, object) {
    return fitWidth(projection, width, object);
  };

  projection.fitHeight = function(height, object) {
    return fitHeight(projection, height, object);
  };

  function recenter() {
    var center = scaleTranslateRotate(k, 0, 0, alpha).apply(null, project(lambda, phi)),
        transform = (alpha ? scaleTranslateRotate : scaleTranslate)(k, x - center[0], y - center[1], alpha);
    rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = compose(project, transform);
    projectRotateTransform = compose(rotate, projectTransform);
    projectResample = resample(projectTransform, delta2);
    return reset();
  }

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return function() {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/conic.js



function conicProjection(projectAt) {
  var phi0 = 0,
      phi1 = pi / 3,
      m = projectionMutator(projectAt),
      p = m(phi0, phi1);

  p.parallels = function(_) {
    return arguments.length ? m(phi0 = _[0] * radians, phi1 = _[1] * radians) : [phi0 * degrees, phi1 * degrees];
  };

  return p;
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/cylindricalEqualArea.js


function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = cos(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, sin(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, asin(y * cosPhi0)];
  };

  return forward;
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/conicEqualArea.js




function conicEqualAreaRaw(y0, y1) {
  var sy0 = sin(y0), n = (sy0 + sin(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (abs(n) < epsilon) return cylindricalEqualAreaRaw(y0);

  var c = 1 + sy0 * (2 * n - sy0), r0 = sqrt(c) / n;

  function project(x, y) {
    var r = sqrt(c - 2 * n * sin(y)) / n;
    return [r * sin(x *= n), r0 - r * cos(x)];
  }

  project.invert = function(x, y) {
    var r0y = r0 - y;
    return [atan2(x, abs(r0y)) / n * math_sign(r0y), asin((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };

  return project;
}

/* harmony default export */ var conicEqualArea = (function() {
  return conicProjection(conicEqualAreaRaw)
      .scale(155.424)
      .center([0, 33.6442]);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/albers.js


/* harmony default export */ var albers = (function() {
  return conicEqualArea()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/albersUsa.js





// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
    sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
    lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
    lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
    polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
    polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
/* harmony default export */ var projection_albersUsa = (function() {
  var cache,
      cacheStream,
      lower48 = albers(), lower48Point,
      alaska = conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
      hawaii = conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
      point, pointStream = {point: function(x, y) { point = [x, y]; }};

  function albersUsa(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    return point = null,
        (lower48Point.point(x, y), point)
        || (alaskaPoint.point(x, y), point)
        || (hawaiiPoint.point(x, y), point);
  }

  albersUsa.invert = function(coordinates) {
    var k = lower48.scale(),
        t = lower48.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
        : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
        : lower48).invert(coordinates);
  };

  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };

  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };

  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };

  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];

    lower48Point = lower48
        .translate(_)
        .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
        .stream(pointStream);

    alaskaPoint = alaska
        .translate([x - 0.307 * k, y + 0.201 * k])
        .clipExtent([[x - 0.425 * k + epsilon, y + 0.120 * k + epsilon], [x - 0.214 * k - epsilon, y + 0.234 * k - epsilon]])
        .stream(pointStream);

    hawaiiPoint = hawaii
        .translate([x - 0.205 * k, y + 0.212 * k])
        .clipExtent([[x - 0.214 * k + epsilon, y + 0.166 * k + epsilon], [x - 0.115 * k - epsilon, y + 0.234 * k - epsilon]])
        .stream(pointStream);

    return reset();
  };

  albersUsa.fitExtent = function(extent, object) {
    return fitExtent(albersUsa, extent, object);
  };

  albersUsa.fitSize = function(size, object) {
    return fitSize(albersUsa, size, object);
  };

  albersUsa.fitWidth = function(width, object) {
    return fitWidth(albersUsa, width, object);
  };

  albersUsa.fitHeight = function(height, object) {
    return fitHeight(albersUsa, height, object);
  };

  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }

  return albersUsa.scale(1070);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/azimuthal.js


function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = cos(x),
        cy = cos(y),
        k = scale(cx * cy);
    return [
      k * cy * sin(x),
      k * sin(y)
    ];
  }
}

function azimuthalInvert(angle) {
  return function(x, y) {
    var z = sqrt(x * x + y * y),
        c = angle(z),
        sc = sin(c),
        cc = cos(c);
    return [
      atan2(x * sc, z * cc),
      asin(z && y * sc / z)
    ];
  }
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/azimuthalEqualArea.js




var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
  return sqrt(2 / (1 + cxcy));
});

azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
  return 2 * asin(z / 2);
});

/* harmony default export */ var azimuthalEqualArea = (function() {
  return projection_projection(azimuthalEqualAreaRaw)
      .scale(124.75)
      .clipAngle(180 - 1e-3);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/azimuthalEquidistant.js




var azimuthalEquidistantRaw = azimuthalRaw(function(c) {
  return (c = acos(c)) && c / sin(c);
});

azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
  return z;
});

/* harmony default export */ var azimuthalEquidistant = (function() {
  return projection_projection(azimuthalEquidistantRaw)
      .scale(79.4188)
      .clipAngle(180 - 1e-3);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/mercator.js




function mercatorRaw(lambda, phi) {
  return [lambda, log(tan((halfPi + phi) / 2))];
}

mercatorRaw.invert = function(x, y) {
  return [x, 2 * atan(exp(y)) - halfPi];
};

/* harmony default export */ var mercator = (function() {
  return mercatorProjection(mercatorRaw)
      .scale(961 / tau);
});

function mercatorProjection(project) {
  var m = projection_projection(project),
      center = m.center,
      scale = m.scale,
      translate = m.translate,
      clipExtent = m.clipExtent,
      x0 = null, y0, x1, y1; // clip extent

  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };

  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };

  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };

  m.clipExtent = function(_) {
    return arguments.length ? ((_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1])), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  function reclip() {
    var k = pi * scale(),
        t = m(src_rotation(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null
        ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
        ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
        : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }

  return reclip();
}

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/conicConformal.js




function tany(y) {
  return tan((halfPi + y) / 2);
}

function conicConformalRaw(y0, y1) {
  var cy0 = cos(y0),
      n = y0 === y1 ? sin(y0) : log(cy0 / cos(y1)) / log(tany(y1) / tany(y0)),
      f = cy0 * pow(tany(y0), n) / n;

  if (!n) return mercatorRaw;

  function project(x, y) {
    if (f > 0) { if (y < -halfPi + epsilon) y = -halfPi + epsilon; }
    else { if (y > halfPi - epsilon) y = halfPi - epsilon; }
    var r = f / pow(tany(y), n);
    return [r * sin(n * x), f - r * cos(n * x)];
  }

  project.invert = function(x, y) {
    var fy = f - y, r = math_sign(n) * sqrt(x * x + fy * fy);
    return [atan2(x, abs(fy)) / n * math_sign(fy), 2 * atan(pow(f / r, 1 / n)) - halfPi];
  };

  return project;
}

/* harmony default export */ var conicConformal = (function() {
  return conicProjection(conicConformalRaw)
      .scale(109.5)
      .parallels([30, 30]);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/equirectangular.js


function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

/* harmony default export */ var equirectangular = (function() {
  return projection_projection(equirectangularRaw)
      .scale(152.63);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/conicEquidistant.js




function conicEquidistantRaw(y0, y1) {
  var cy0 = cos(y0),
      n = y0 === y1 ? sin(y0) : (cy0 - cos(y1)) / (y1 - y0),
      g = cy0 / n + y0;

  if (abs(n) < epsilon) return equirectangularRaw;

  function project(x, y) {
    var gy = g - y, nx = n * x;
    return [gy * sin(nx), g - gy * cos(nx)];
  }

  project.invert = function(x, y) {
    var gy = g - y;
    return [atan2(x, abs(gy)) / n * math_sign(gy), g - math_sign(n) * sqrt(x * x + gy * gy)];
  };

  return project;
}

/* harmony default export */ var conicEquidistant = (function() {
  return conicProjection(conicEquidistantRaw)
      .scale(131.154)
      .center([0, 13.9389]);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/gnomonic.js




function gnomonicRaw(x, y) {
  var cy = cos(y), k = cos(x) * cy;
  return [cy * sin(x) / k, sin(y) / k];
}

gnomonicRaw.invert = azimuthalInvert(atan);

/* harmony default export */ var gnomonic = (function() {
  return projection_projection(gnomonicRaw)
      .scale(144.049)
      .clipAngle(60);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/identity.js





function identity_scaleTranslate(kx, ky, tx, ty) {
  return kx === 1 && ky === 1 && tx === 0 && ty === 0 ? src_identity : transformer({
    point: function(x, y) {
      this.stream.point(x * kx + tx, y * ky + ty);
    }
  });
}

/* harmony default export */ var projection_identity = (function() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform = src_identity, // scale, translate and reflect
      x0 = null, y0, x1, y1, // clip extent
      postclip = src_identity,
      cache,
      cacheStream,
      projection;

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return projection = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
    },
    postclip: function(_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    },
    clipExtent: function(_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, src_identity) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    },
    scale: function(_) {
      return arguments.length ? (transform = identity_scaleTranslate((k = +_) * sx, k * sy, tx, ty), reset()) : k;
    },
    translate: function(_) {
      return arguments.length ? (transform = identity_scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), reset()) : [tx, ty];
    },
    reflectX: function(_) {
      return arguments.length ? (transform = identity_scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), reset()) : sx < 0;
    },
    reflectY: function(_) {
      return arguments.length ? (transform = identity_scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), reset()) : sy < 0;
    },
    fitExtent: function(extent, object) {
      return fitExtent(projection, extent, object);
    },
    fitSize: function(size, object) {
      return fitSize(projection, size, object);
    },
    fitWidth: function(width, object) {
      return fitWidth(projection, width, object);
    },
    fitHeight: function(height, object) {
      return fitHeight(projection, height, object);
    }
  };
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/naturalEarth1.js



function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
  ];
}

naturalEarth1Raw.invert = function(x, y) {
  var phi = y, i = 25, delta;
  do {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) /
        (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
  } while (abs(delta) > epsilon && --i > 0);
  return [
    x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
    phi
  ];
};

/* harmony default export */ var naturalEarth1 = (function() {
  return projection_projection(naturalEarth1Raw)
      .scale(175.295);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/orthographic.js




function orthographicRaw(x, y) {
  return [cos(y) * sin(x), sin(y)];
}

orthographicRaw.invert = azimuthalInvert(asin);

/* harmony default export */ var orthographic = (function() {
  return projection_projection(orthographicRaw)
      .scale(249.5)
      .clipAngle(90 + epsilon);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/stereographic.js




function stereographicRaw(x, y) {
  var cy = cos(y), k = 1 + cos(x) * cy;
  return [cy * sin(x) / k, sin(y) / k];
}

stereographicRaw.invert = azimuthalInvert(function(z) {
  return 2 * atan(z);
});

/* harmony default export */ var stereographic = (function() {
  return projection_projection(stereographicRaw)
      .scale(250)
      .clipAngle(142);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/src/projection/transverseMercator.js



function transverseMercatorRaw(lambda, phi) {
  return [log(tan((halfPi + phi) / 2)), -lambda];
}

transverseMercatorRaw.invert = function(x, y) {
  return [-y, 2 * atan(exp(x)) - halfPi];
};

/* harmony default export */ var transverseMercator = (function() {
  var m = mercatorProjection(transverseMercatorRaw),
      center = m.center,
      rotate = m.rotate;

  m.center = function(_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };

  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };

  return rotate([0, 0, 90])
      .scale(159.155);
});

// CONCATENATED MODULE: ./node_modules/d3-geo/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoArea", function() { return src_area; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoBounds", function() { return bounds; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoCentroid", function() { return centroid; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoCircle", function() { return src_circle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoClipAntimeridian", function() { return clip_antimeridian; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoClipCircle", function() { return clip_circle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoClipExtent", function() { return clip_extent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoClipRectangle", function() { return clipRectangle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoContains", function() { return contains; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoDistance", function() { return distance; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoGraticule", function() { return graticule_graticule; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoGraticule10", function() { return graticule10; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoInterpolate", function() { return src_interpolate; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoLength", function() { return src_length; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoPath", function() { return src_path; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoAlbers", function() { return albers; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoAlbersUsa", function() { return projection_albersUsa; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualArea", function() { return azimuthalEqualArea; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualAreaRaw", function() { return azimuthalEqualAreaRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistant", function() { return azimuthalEquidistant; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistantRaw", function() { return azimuthalEquidistantRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoConicConformal", function() { return conicConformal; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoConicConformalRaw", function() { return conicConformalRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoConicEqualArea", function() { return conicEqualArea; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoConicEqualAreaRaw", function() { return conicEqualAreaRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoConicEquidistant", function() { return conicEquidistant; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoConicEquidistantRaw", function() { return conicEquidistantRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoEquirectangular", function() { return equirectangular; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoEquirectangularRaw", function() { return equirectangularRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoGnomonic", function() { return gnomonic; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoGnomonicRaw", function() { return gnomonicRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoIdentity", function() { return projection_identity; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoProjection", function() { return projection_projection; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoProjectionMutator", function() { return projectionMutator; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoMercator", function() { return mercator; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoMercatorRaw", function() { return mercatorRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoNaturalEarth1", function() { return naturalEarth1; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoNaturalEarth1Raw", function() { return naturalEarth1Raw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoOrthographic", function() { return orthographic; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoOrthographicRaw", function() { return orthographicRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoStereographic", function() { return stereographic; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoStereographicRaw", function() { return stereographicRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoTransverseMercator", function() { return transverseMercator; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoTransverseMercatorRaw", function() { return transverseMercatorRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoRotation", function() { return src_rotation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoStream", function() { return src_stream; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoTransform", function() { return src_transform; });






 // DEPRECATED! Use d3.geoIdentity().clipExtent(…).




























/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/topojson-client/src/identity.js
/* harmony default export */ var identity = (function(x) {
  return x;
});

// CONCATENATED MODULE: ./node_modules/topojson-client/src/transform.js


/* harmony default export */ var src_transform = (function(transform) {
  if (transform == null) return identity;
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(input, i) {
    if (!i) x0 = y0 = 0;
    var j = 2, n = input.length, output = new Array(n);
    output[0] = (x0 += input[0]) * kx + dx;
    output[1] = (y0 += input[1]) * ky + dy;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
});

// CONCATENATED MODULE: ./node_modules/topojson-client/src/bbox.js


/* harmony default export */ var bbox = (function(topology) {
  var t = src_transform(topology.transform), key,
      x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;

  function bboxPoint(p) {
    p = t(p);
    if (p[0] < x0) x0 = p[0];
    if (p[0] > x1) x1 = p[0];
    if (p[1] < y0) y0 = p[1];
    if (p[1] > y1) y1 = p[1];
  }

  function bboxGeometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(bboxGeometry); break;
      case "Point": bboxPoint(o.coordinates); break;
      case "MultiPoint": o.coordinates.forEach(bboxPoint); break;
    }
  }

  topology.arcs.forEach(function(arc) {
    var i = -1, n = arc.length, p;
    while (++i < n) {
      p = t(arc[i], i);
      if (p[0] < x0) x0 = p[0];
      if (p[0] > x1) x1 = p[0];
      if (p[1] < y0) y0 = p[1];
      if (p[1] > y1) y1 = p[1];
    }
  });

  for (key in topology.objects) {
    bboxGeometry(topology.objects[key]);
  }

  return [x0, y0, x1, y1];
});

// CONCATENATED MODULE: ./node_modules/topojson-client/src/reverse.js
/* harmony default export */ var reverse = (function(array, n) {
  var t, j = array.length, i = j - n;
  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
});

// CONCATENATED MODULE: ./node_modules/topojson-client/src/feature.js



/* harmony default export */ var feature = (function(topology, o) {
  return o.type === "GeometryCollection"
      ? {type: "FeatureCollection", features: o.geometries.map(function(o) { return feature_feature(topology, o); })}
      : feature_feature(topology, o);
});

function feature_feature(topology, o) {
  var id = o.id,
      bbox = o.bbox,
      properties = o.properties == null ? {} : o.properties,
      geometry = feature_object(topology, o);
  return id == null && bbox == null ? {type: "Feature", properties: properties, geometry: geometry}
      : bbox == null ? {type: "Feature", id: id, properties: properties, geometry: geometry}
      : {type: "Feature", id: id, bbox: bbox, properties: properties, geometry: geometry};
}

function feature_object(topology, o) {
  var transformPoint = src_transform(topology.transform),
      arcs = topology.arcs;

  function arc(i, points) {
    if (points.length) points.pop();
    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
      points.push(transformPoint(a[k], k));
    }
    if (i < 0) reverse(points, n);
  }

  function point(p) {
    return transformPoint(p);
  }

  function line(arcs) {
    var points = [];
    for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
    if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
    return points;
  }

  function ring(arcs) {
    var points = line(arcs);
    while (points.length < 4) points.push(points[0]); // This may happen if an arc has only two points.
    return points;
  }

  function polygon(arcs) {
    return arcs.map(ring);
  }

  function geometry(o) {
    var type = o.type, coordinates;
    switch (type) {
      case "GeometryCollection": return {type: type, geometries: o.geometries.map(geometry)};
      case "Point": coordinates = point(o.coordinates); break;
      case "MultiPoint": coordinates = o.coordinates.map(point); break;
      case "LineString": coordinates = line(o.arcs); break;
      case "MultiLineString": coordinates = o.arcs.map(line); break;
      case "Polygon": coordinates = polygon(o.arcs); break;
      case "MultiPolygon": coordinates = o.arcs.map(polygon); break;
      default: return null;
    }
    return {type: type, coordinates: coordinates};
  }

  return geometry(o);
}

// CONCATENATED MODULE: ./node_modules/topojson-client/src/stitch.js
/* harmony default export */ var stitch = (function(topology, arcs) {
  var stitchedArcs = {},
      fragmentByStart = {},
      fragmentByEnd = {},
      fragments = [],
      emptyIndex = -1;

  // Stitch empty arcs first, since they may be subsumed by other arcs.
  arcs.forEach(function(i, j) {
    var arc = topology.arcs[i < 0 ? ~i : i], t;
    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    }
  });

  arcs.forEach(function(i) {
    var e = ends(i),
        start = e[0],
        end = e[1],
        f, g;

    if (f = fragmentByEnd[start]) {
      delete fragmentByEnd[f.end];
      f.push(i);
      f.end = end;
      if (g = fragmentByStart[end]) {
        delete fragmentByStart[g.start];
        var fg = g === f ? f : f.concat(g);
        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else if (f = fragmentByStart[end]) {
      delete fragmentByStart[f.start];
      f.unshift(i);
      f.start = start;
      if (g = fragmentByEnd[start]) {
        delete fragmentByEnd[g.end];
        var gf = g === f ? f : g.concat(f);
        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else {
      f = [i];
      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
    }
  });

  function ends(i) {
    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
    if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
    else p1 = arc[arc.length - 1];
    return i < 0 ? [p1, p0] : [p0, p1];
  }

  function flush(fragmentByEnd, fragmentByStart) {
    for (var k in fragmentByEnd) {
      var f = fragmentByEnd[k];
      delete fragmentByStart[f.start];
      delete f.start;
      delete f.end;
      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
      fragments.push(f);
    }
  }

  flush(fragmentByEnd, fragmentByStart);
  flush(fragmentByStart, fragmentByEnd);
  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });

  return fragments;
});

// CONCATENATED MODULE: ./node_modules/topojson-client/src/mesh.js



/* harmony default export */ var mesh = (function(topology) {
  return feature_object(topology, meshArcs.apply(this, arguments));
});

function meshArcs(topology, object, filter) {
  var arcs, i, n;
  if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
  else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
  return {type: "MultiLineString", arcs: stitch(topology, arcs)};
}

function extractArcs(topology, object, filter) {
  var arcs = [],
      geomsByArc = [],
      geom;

  function extract0(i) {
    var j = i < 0 ? ~i : i;
    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
  }

  function extract1(arcs) {
    arcs.forEach(extract0);
  }

  function extract2(arcs) {
    arcs.forEach(extract1);
  }

  function extract3(arcs) {
    arcs.forEach(extract2);
  }

  function geometry(o) {
    switch (geom = o, o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "LineString": extract1(o.arcs); break;
      case "MultiLineString": case "Polygon": extract2(o.arcs); break;
      case "MultiPolygon": extract3(o.arcs); break;
    }
  }

  geometry(object);

  geomsByArc.forEach(filter == null
      ? function(geoms) { arcs.push(geoms[0].i); }
      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });

  return arcs;
}

// CONCATENATED MODULE: ./node_modules/topojson-client/src/merge.js



function planarRingArea(ring) {
  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
  while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
  return Math.abs(area); // Note: doubled area!
}

/* harmony default export */ var merge = (function(topology) {
  return feature_object(topology, mergeArcs.apply(this, arguments));
});

function mergeArcs(topology, objects) {
  var polygonsByArc = {},
      polygons = [],
      groups = [];

  objects.forEach(geometry);

  function geometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "Polygon": extract(o.arcs); break;
      case "MultiPolygon": o.arcs.forEach(extract); break;
    }
  }

  function extract(polygon) {
    polygon.forEach(function(ring) {
      ring.forEach(function(arc) {
        (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
      });
    });
    polygons.push(polygon);
  }

  function area(ring) {
    return planarRingArea(feature_object(topology, {type: "Polygon", arcs: [ring]}).coordinates[0]);
  }

  polygons.forEach(function(polygon) {
    if (!polygon._) {
      var group = [],
          neighbors = [polygon];
      polygon._ = 1;
      groups.push(group);
      while (polygon = neighbors.pop()) {
        group.push(polygon);
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
              if (!polygon._) {
                polygon._ = 1;
                neighbors.push(polygon);
              }
            });
          });
        });
      }
    }
  });

  polygons.forEach(function(polygon) {
    delete polygon._;
  });

  return {
    type: "MultiPolygon",
    arcs: groups.map(function(polygons) {
      var arcs = [], n;

      // Extract the exterior (unique) arcs.
      polygons.forEach(function(polygon) {
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
              arcs.push(arc);
            }
          });
        });
      });

      // Stitch the arcs into one or more rings.
      arcs = stitch(topology, arcs);

      // If more than one ring is returned,
      // at most one of these rings can be the exterior;
      // choose the one with the greatest absolute area.
      if ((n = arcs.length) > 1) {
        for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {
          if ((ki = area(arcs[i])) > k) {
            t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
          }
        }
      }

      return arcs;
    })
  };
}

// CONCATENATED MODULE: ./node_modules/topojson-client/src/bisect.js
/* harmony default export */ var bisect = (function(a, x) {
  var lo = 0, hi = a.length;
  while (lo < hi) {
    var mid = lo + hi >>> 1;
    if (a[mid] < x) lo = mid + 1;
    else hi = mid;
  }
  return lo;
});

// CONCATENATED MODULE: ./node_modules/topojson-client/src/neighbors.js


/* harmony default export */ var src_neighbors = (function(objects) {
  var indexesByArc = {}, // arc index -> array of object indexes
      neighbors = objects.map(function() { return []; });

  function line(arcs, i) {
    arcs.forEach(function(a) {
      if (a < 0) a = ~a;
      var o = indexesByArc[a];
      if (o) o.push(i);
      else indexesByArc[a] = [i];
    });
  }

  function polygon(arcs, i) {
    arcs.forEach(function(arc) { line(arc, i); });
  }

  function geometry(o, i) {
    if (o.type === "GeometryCollection") o.geometries.forEach(function(o) { geometry(o, i); });
    else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
  }

  var geometryType = {
    LineString: line,
    MultiLineString: polygon,
    Polygon: polygon,
    MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }
  };

  objects.forEach(geometry);

  for (var i in indexesByArc) {
    for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
      for (var k = j + 1; k < m; ++k) {
        var ij = indexes[j], ik = indexes[k], n;
        if ((n = neighbors[ij])[i = bisect(n, ik)] !== ik) n.splice(i, 0, ik);
        if ((n = neighbors[ik])[i = bisect(n, ij)] !== ij) n.splice(i, 0, ij);
      }
    }
  }

  return neighbors;
});

// CONCATENATED MODULE: ./node_modules/topojson-client/src/untransform.js


/* harmony default export */ var untransform = (function(transform) {
  if (transform == null) return identity;
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(input, i) {
    if (!i) x0 = y0 = 0;
    var j = 2,
        n = input.length,
        output = new Array(n),
        x1 = Math.round((input[0] - dx) / kx),
        y1 = Math.round((input[1] - dy) / ky);
    output[0] = x1 - x0, x0 = x1;
    output[1] = y1 - y0, y0 = y1;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
});

// CONCATENATED MODULE: ./node_modules/topojson-client/src/quantize.js



/* harmony default export */ var quantize = (function(topology, transform) {
  if (topology.transform) throw new Error("already quantized");

  if (!transform || !transform.scale) {
    if (!((n = Math.floor(transform)) >= 2)) throw new Error("n must be ≥2");
    box = topology.bbox || bbox(topology);
    var x0 = box[0], y0 = box[1], x1 = box[2], y1 = box[3], n;
    transform = {scale: [x1 - x0 ? (x1 - x0) / (n - 1) : 1, y1 - y0 ? (y1 - y0) / (n - 1) : 1], translate: [x0, y0]};
  } else {
    box = topology.bbox;
  }

  var t = untransform(transform), box, key, inputs = topology.objects, outputs = {};

  function quantizePoint(point) {
    return t(point);
  }

  function quantizeGeometry(input) {
    var output;
    switch (input.type) {
      case "GeometryCollection": output = {type: "GeometryCollection", geometries: input.geometries.map(quantizeGeometry)}; break;
      case "Point": output = {type: "Point", coordinates: quantizePoint(input.coordinates)}; break;
      case "MultiPoint": output = {type: "MultiPoint", coordinates: input.coordinates.map(quantizePoint)}; break;
      default: return input;
    }
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    if (input.properties != null) output.properties = input.properties;
    return output;
  }

  function quantizeArc(input) {
    var i = 0, j = 1, n = input.length, p, output = new Array(n); // pessimistic
    output[0] = t(input[0], 0);
    while (++i < n) if ((p = t(input[i], i))[0] || p[1]) output[j++] = p; // non-coincident points
    if (j === 1) output[j++] = [0, 0]; // an arc must have at least two points
    output.length = j;
    return output;
  }

  for (key in inputs) outputs[key] = quantizeGeometry(inputs[key]);

  return {
    type: "Topology",
    bbox: box,
    transform: transform,
    objects: outputs,
    arcs: topology.arcs.map(quantizeArc)
  };
});

// CONCATENATED MODULE: ./node_modules/topojson-client/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "bbox", function() { return bbox; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "feature", function() { return feature; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "mesh", function() { return mesh; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "meshArcs", function() { return meshArcs; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "mergeArcs", function() { return mergeArcs; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "neighbors", function() { return src_neighbors; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "quantize", function() { return quantize; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "transform", function() { return src_transform; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "untransform", function() { return untransform; });










/***/ })
/******/ ]);