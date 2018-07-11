/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([19,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d3Geo = __webpack_require__(50);

var _topojsonClient = __webpack_require__(51);

var _domToImage = __webpack_require__(40);

var _domToImage2 = _interopRequireDefault(_domToImage);

var _fileSaver = __webpack_require__(41);

var _fileSaver2 = _interopRequireDefault(_fileSaver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(9);

var _reactRedux = __webpack_require__(8);

var _indexWorld = __webpack_require__(31);

var _indexWorld2 = _interopRequireDefault(_indexWorld);

var _indexCountry = __webpack_require__(33);

var _indexCountry2 = _interopRequireDefault(_indexCountry);

var _continent = __webpack_require__(35);

var _continent2 = _interopRequireDefault(_continent);

var _country = __webpack_require__(37);

var _country2 = _interopRequireDefault(_country);

var _indiaMap = __webpack_require__(39);

var _indiaMap2 = _interopRequireDefault(_indiaMap);

var _worldMap = __webpack_require__(45);

var _worldMap2 = _interopRequireDefault(_worldMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _redux.createStore)((0, _redux.combineReducers)({ continentReducer: _indexWorld2.default, countryReducer: _indexCountry2.default }));

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = { value: 'india' };

    _this.handleChange = _this.handleChange.bind(_this);

    return _this;
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
        null,
        _react2.default.createElement(
          'label',
          { style: { "display": "block", "textAlign": "center", "fontSize": 24 } },
          'Where all have you been? in INDIA!'
        ),
        _react2.default.createElement(
          'label',
          { style: window.navigator.userAgent.toLowerCase().includes("mobi") ? { "display": "block", "textAlign": "center", "fontSize": 36 } : { "display": "none" } },
          'Sorry, this webpage may not be as responsive as it must. I will appreciate if you view this webpage on desktop or laptop! :)'
        ),
        _react2.default.createElement(
          'div',
          { style: this.state.value === 'india' ? { "display": "block" } : { "display": "none" } },
          _react2.default.createElement(
            'label',
            { style: { "display": "block", "marginLeft": 20, "textAlign": "left" } },
            'Select the State/City...'
          ),
          _react2.default.createElement(_country2.default, null),
          _react2.default.createElement(_indiaMap2.default, null)
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
          _react2.default.createElement(_worldMap2.default, null)
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
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = continentReducer;

var _indexWorld = __webpack_require__(12);

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

var _indexCountry = __webpack_require__(13);

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(8);

var _indexWorld = __webpack_require__(12);

var _continent = __webpack_require__(36);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _item = __webpack_require__(14);

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(8);

var _indexCountry = __webpack_require__(13);

var _country = __webpack_require__(38);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _item = __webpack_require__(14);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndiaMap = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(15);

var _indiaStates = __webpack_require__(44);

var _indiaStates2 = _interopRequireDefault(_indiaStates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stateCount = 0;
var ciityCount = 0;

var IndiaMap = exports.IndiaMap = function (_React$Component) {
  _inherits(IndiaMap, _React$Component);

  function IndiaMap() {
    _classCallCheck(this, IndiaMap);

    var _this = _possibleConstructorReturn(this, (IndiaMap.__proto__ || Object.getPrototypeOf(IndiaMap)).call(this));

    _this.onSaveMap = function () {
      domtoimage.toBlob(_this.refs.saveImage, { width: 1280, height: 960, style: { "background": 'url(' + imgWorldUrl + ') no-repeat center' } }).then(function (blob) {
        fileSaver.saveAs(blob, 'mytravelmap.png');
      });
    };

    _this.state = {
      indiadata: feature(_indiaStates2.default, _indiaStates2.default.objects.states).features,
      renderState: []
    };
    return _this;
  }

  _createClass(IndiaMap, [{
    key: 'projection',
    value: function projection() {
      return geoMercator().scale(1000).translate([-780, 800]);
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
                d: geoPath().projection(_this3.projection())(d)
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

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module) {

module.exports = {"type":"Topology","objects":{"states":{"type":"GeometryCollection","geometries":[{"type":"Polygon","properties":{"OBJECTID":2626,"NAME_0":"India","NAME_1":"Chandigarh","HASC_1":"IN.CH","ENGTYPE_1":"Union Territory"},"arcs":[[0,1]]},{"type":"Polygon","properties":{"OBJECTID":2627,"NAME_0":"India","NAME_1":"Delhi","HASC_1":"IN.DL","ENGTYPE_1":"Union Territory"},"arcs":[[2,3]]},{"type":"Polygon","properties":{"OBJECTID":2628,"NAME_0":"India","NAME_1":"Himachal Pradesh","HASC_1":"IN.HP","ENGTYPE_1":"Union Territory"},"arcs":[[4,5,6,7,8]]},{"type":"Polygon","properties":{"OBJECTID":2629,"NAME_0":"India","NAME_1":"Haryana","HASC_1":"IN.HR","ENGTYPE_1":"State"},"arcs":[[9,10,-2,11,-7,12,-4,13]]},{"type":"Polygon","properties":{"OBJECTID":2649,"NAME_0":"India","NAME_1":"Orissa","HASC_1":"IN.OR","ENGTYPE_1":"State"},"arcs":[[14,15,16,17,18]]},{"type":"Polygon","properties":{"OBJECTID":2660,"NAME_0":"India","NAME_1":"Karnataka","HASC_1":"IN.KA","ENGTYPE_1":"State"},"arcs":[[19,20,21,22,23,24]]},{"type":"Polygon","properties":{"OBJECTID":2661,"NAME_0":"India","NAME_1":"Maharashtra","HASC_1":"IN.MH","ENGTYPE_1":"State"},"arcs":[[25,26,27,28,29,-22,30]]},{"type":"Polygon","properties":{"OBJECTID":2712,"NAME_0":"India","NAME_1":"Assam","HASC_1":"IN.AS","ENGTYPE_1":"State"},"arcs":[[31,32,33,34,35,36,37,38,39,40]]},{"type":"Polygon","properties":{"OBJECTID":2713,"NAME_0":"India","NAME_1":"Manipur","HASC_1":"IN.MN","ENGTYPE_1":"State"},"arcs":[[41,42,-39,43]]},{"type":"Polygon","properties":{"OBJECTID":2714,"NAME_0":"India","NAME_1":"Nagaland","HASC_1":"IN.NL","ENGTYPE_1":"State"},"arcs":[[44,-44,-38,45]]},{"type":"Polygon","properties":{"OBJECTID":2724,"NAME_0":"India","NAME_1":"Meghalaya","HASC_1":"IN.ML","ENGTYPE_1":"State"},"arcs":[[46,-33]]},{"type":"Polygon","properties":{"OBJECTID":3546,"NAME_0":"India","NAME_1":"Punjab","HASC_1":"IN.PB","ENGTYPE_1":"State"},"arcs":[[47,48,-8,-12,-1,-11,49]]},{"type":"Polygon","properties":{"OBJECTID":3547,"NAME_0":"India","NAME_1":"Rajasthan","HASC_1":"IN.RJ","ENGTYPE_1":"State"},"arcs":[[50,-50,-10,51,52,53]]},{"type":"Polygon","properties":{"OBJECTID":3551,"NAME_0":"India","NAME_1":"Uttar Pradesh","HASC_1":"IN.UP","ENGTYPE_1":"State"},"arcs":[[54,55,56,57,58,-52,-14,-3,-13,59]]},{"type":"Polygon","properties":{"OBJECTID":3552,"NAME_0":"India","NAME_1":"Uttarakhand","HASC_1":"IN.UT","ENGTYPE_1":"State"},"arcs":[[60,-60,-6]]},{"type":"Polygon","properties":{"OBJECTID":3554,"NAME_0":"India","NAME_1":"Jharkhand","HASC_1":"IN.JH","ENGTYPE_1":"State"},"arcs":[[61,-18,62,-57,63]]},{"type":"Polygon","properties":{"OBJECTID":3556,"NAME_0":"India","NAME_1":"Bihar","HASC_1":"IN.BR","ENGTYPE_1":"State"},"arcs":[[64,65,-64,-56]]},{"type":"Polygon","properties":{"OBJECTID":3557,"NAME_0":"India","NAME_1":"Sikkim","HASC_1":"IN.SK","ENGTYPE_1":"State"},"arcs":[[66,67]]},{"type":"Polygon","properties":{"OBJECTID":3558,"NAME_0":"India","NAME_1":"Chhattisgarh","HASC_1":"IN.CT","ENGTYPE_1":"State"},"arcs":[[-17,68,-29,69,-58,-63]]},{"type":"Polygon","properties":{"OBJECTID":3559,"NAME_0":"India","NAME_1":"Madhya Pradesh","HASC_1":"IN.MP","ENGTYPE_1":"State"},"arcs":[[-28,70,-53,-59,-70]]},{"type":"MultiPolygon","properties":{"OBJECTID":3560,"NAME_0":"India","NAME_1":"Puducherry","HASC_1":"IN.PY","ENGTYPE_1":"Union Territory"},"arcs":[[[71,72]],[[73,74]],[[75,76]]]},{"type":"MultiPolygon","properties":{"OBJECTID":3561,"NAME_0":"India","NAME_1":"Tamil Nadu","HASC_1":null,"ENGTYPE_1":"State"},"arcs":[[[77,-73,78,-77,79,80,-24,81]]]},{"type":"Polygon","properties":{"OBJECTID":3563,"NAME_0":"India","NAME_1":"Goa","HASC_1":"IN.GA","ENGTYPE_1":"State"},"arcs":[[82,-31,-21]]},{"type":"Polygon","properties":{"OBJECTID":3604,"NAME_0":"India","NAME_1":"Arunachal Pradesh","HASC_1":"IN.AR","ENGTYPE_1":"State"},"arcs":[[-46,-37,83]]},{"type":"Polygon","properties":{"OBJECTID":3605,"NAME_0":"India","NAME_1":"Mizoram","HASC_1":"IN.MZ","ENGTYPE_1":"State"},"arcs":[[84,85,-40,-43]]},{"type":"Polygon","properties":{"OBJECTID":3606,"NAME_0":"India","NAME_1":"Tripura","HASC_1":"IN.TR","ENGTYPE_1":"State"},"arcs":[[86,-41,-86]]},{"type":"MultiPolygon","properties":{"OBJECTID":2634,"NAME_0":"India","NAME_1":"West Bengal","HASC_1":"IN.WB","ENGTYPE_1":"Division"},"arcs":[[[87]],[[88,-19,-62,-66,89,-68,90,-35]],[[91]],[[92]]]},{"type":"MultiPolygon","properties":{"OBJECTID":2646,"NAME_0":"India","NAME_1":"Kerala","HASC_1":"IN.KL","ENGTYPE_1":"State"},"arcs":[[[93,-75,94,-25,-81]]]},{"type":"Polygon","properties":{"OBJECTID":2659,"NAME_0":"India","NAME_1":"Gujarat","HASC_1":"IN.GJ","ENGTYPE_1":"State"},"arcs":[[95,-54,-71,-27]]},{"type":"MultiPolygon","properties":{"OBJECTID":2644,"NAME_0":"India","NAME_1":"Andhra Pradesh","HASC_1":"IN.AP","ENGTYPE_1":"State"},"arcs":[[[-97,97,-82,-23,-30,-69,-16,98]],[[99]]]},{"type":"MultiPolygon","properties":{"OBJECTID":2691,"NAME_0":"India","NAME_1":"Andaman and Nicobar","HASC_1":"IN.AN","ENGTYPE_1":"Union Territory"},"arcs":[[[100]],[[101]],[[102]],[[103]],[[104]],[[105]],[[106]],[[107]],[[108]],[[109]],[[110]],[[111]],[[112]]]},{"type":"MultiPolygon","properties":{"OBJECTID":2630,"NAME_0":"India","NAME_1":"Jammu and Kashmir","HASC_1":"IN.JK","ENGTYPE_1":"State"},"arcs":[[[113,-9,-49,114]]]}]}},"arcs":[[[2972,7897],[-19,-2],[-28,32],[41,5]],[[2966,7932],[6,-35]],[[3099,7301],[9,-31],[28,-20],[10,-33],[-4,-33]],[[3142,7184],[-34,-12],[-11,-17],[-32,14],[-11,18],[-67,-3],[-14,17],[40,41],[-4,39],[45,22],[45,-2]],[[3503,8506],[24,-33],[2,-65],[19,-8],[47,-56],[33,-24],[-26,-64],[21,-34],[30,-20],[-41,-32],[22,-21],[-9,-42],[48,-6]],[[3673,8101],[40,-45],[0,-11],[-42,-3],[-33,29],[-58,6],[-36,-4],[-41,24],[-28,2],[-92,-41],[-30,1],[-50,-43],[-4,-56],[-28,-27],[24,-51],[-11,-12],[25,-26],[-85,-35],[6,-11]],[[3230,7798],[-23,14],[-41,2],[-67,22],[-25,24],[8,36],[-52,32],[-32,41],[-30,11],[-17,-9]],[[2951,7971],[-43,31],[-15,44],[11,28],[-22,20],[-43,7],[-28,43],[-28,-40],[-27,-1],[-18,16],[-25,69],[-52,80],[17,11],[-32,44],[-43,20],[-58,14],[28,37],[-17,21],[34,9],[69,46],[-24,32]],[[2635,8502],[26,33],[-4,51],[-37,47],[15,10],[34,-15],[54,38],[39,13],[26,32],[36,16],[56,11],[22,-14],[40,3],[67,-54],[52,-28],[88,-27],[70,18],[58,30],[69,-79],[5,-27],[25,-27],[35,19],[45,7],[45,21],[0,-34],[-24,-17],[-11,-31],[13,-11],[24,19]],[[3127,6948],[-82,0],[9,-21],[-54,-24],[-4,25],[15,40],[-8,55],[4,41],[-26,24],[-67,-44],[0,-26],[-42,-11],[-30,24],[12,21],[-13,16],[-51,8],[17,-39],[-56,0],[-8,-10],[19,-67],[-73,0],[-24,25],[33,55],[-28,14],[30,20],[-2,25],[-48,46],[-36,8],[-60,64],[-41,103],[10,21],[-23,8],[-26,49],[4,29],[-19,13],[-79,-20],[-44,15],[-15,28],[-36,12],[-75,-21],[-22,34],[20,8],[-7,35],[7,63],[-37,-9],[-2,30],[21,9],[-10,31]],[[2180,7655],[47,-11],[19,18],[39,5],[37,-14],[23,-23],[37,15],[0,-32],[30,4],[15,-28],[-22,-20],[22,-42],[23,7],[48,74],[55,-15],[39,6],[26,17],[32,-27],[54,2],[58,34],[-13,29],[17,64],[49,-8],[16,22],[15,-28],[23,-4],[33,19],[6,20],[-32,16],[56,28],[14,31],[30,-2],[14,-22],[8,16],[-4,73],[-22,18]],[[2966,7932],[7,18],[-22,21]],[[3230,7798],[-4,-34],[-56,-45],[-64,-60],[-13,-52],[-15,-12],[-26,-65],[0,-48],[24,1],[2,-98],[25,-64],[-4,-20]],[[3142,7184],[58,-42],[-11,-27],[22,-19],[4,-24],[-23,-23],[-2,-22],[21,-31],[-19,-21],[-65,-27]],[[6616,4905],[-46,-17],[-49,-3],[-46,-26],[-51,-48],[-28,-52],[4,-29],[41,-91],[-29,-9],[34,-9],[-13,-19],[27,-5],[-85,-55],[-19,-48],[26,4],[-26,-31],[-76,-33],[-10,-30],[-24,-37],[-41,28],[-23,0],[56,-34],[-35,-18],[-65,-22],[-8,5],[-107,-31],[-99,-33],[-11,11],[47,19],[3,40],[-45,7],[-74,-54],[-38,-64],[6,-17],[26,10],[-3,18],[18,28],[20,-5],[29,16],[5,-15],[-24,-23],[-54,-33],[-105,-85],[-32,-34]],[[5692,4081],[-7,15],[-25,-2],[-15,-19],[-56,-21],[-4,-29],[-50,-46],[-54,-8],[-30,11],[-58,-4],[-17,18],[-17,47],[-21,-23],[-44,66],[-32,-40],[-19,21],[-11,-37],[-45,10],[32,-41],[-47,-34],[-51,-8],[-28,-34],[19,-37],[-18,-24],[3,-20],[-47,-13],[-5,15],[-36,7],[-7,-28],[-34,-18],[-6,-16],[-22,9],[4,27],[-27,27],[-3,27],[-19,6],[-28,-35],[-5,-50],[-14,-23],[17,-15],[-9,-32],[-28,-18],[-55,17],[-57,-16],[-118,-68],[-23,10],[-11,-13],[-30,6]],[[4534,3648],[2,27],[15,-3],[35,129],[34,7],[30,19],[21,31],[52,42],[-15,17],[23,22],[57,20],[10,39],[22,23],[-2,30],[-20,30],[-6,35],[8,54],[-49,44],[4,78],[-77,56],[15,37],[32,22],[30,-30],[20,13],[38,-24],[28,-47],[24,16],[73,-12],[0,-27],[47,27],[-8,51],[-26,-5],[-67,26],[7,42],[-9,44],[2,44],[-26,31],[9,38],[-8,65],[38,-7],[52,59],[15,41],[45,-1],[62,10],[37,-20],[40,12],[32,68],[35,-4],[-19,35],[6,36],[34,51],[9,30],[30,9],[2,31],[-17,30],[30,57],[45,23],[37,29],[36,7],[15,15],[-8,41]],[[5415,5211],[34,-13],[28,-38],[56,-20],[32,1],[32,14],[6,17],[74,2],[28,7],[32,-9],[54,27],[11,-36],[-1,-35],[-36,-61],[41,1],[41,-24],[32,30],[47,10],[30,-16],[47,-10],[33,16],[1,-37],[16,-9],[29,12],[18,25],[4,103],[-15,30],[39,18],[17,-18],[58,-26],[39,-33],[34,5],[69,-40]],[[6345,5104],[51,-31],[52,-18],[2,-31],[22,-22],[21,23],[30,-12],[11,-36],[58,-15],[24,-57]],[[2296,1985],[-13,33],[-34,155],[-9,16],[-4,106],[-7,-14],[-26,81],[-30,41],[-10,50],[-18,40],[-8,52],[13,4],[-24,24],[-19,-6],[-17,63],[-20,-1],[-34,26],[11,15],[36,9],[-11,8],[-25,-16],[-13,15]],[[2034,2686],[53,24],[17,78],[-17,19],[20,9],[-22,63],[0,47],[-25,13],[-22,-4]],[[2038,2935],[13,29],[23,14],[26,-14],[30,31],[-6,13],[24,37],[-5,39],[22,5],[-7,48],[-45,12],[-4,28],[17,7],[-37,49],[35,-1],[28,35],[32,-8],[7,-23],[40,17],[7,34],[62,22],[-4,29],[36,29],[33,0],[34,-28],[30,11],[0,18],[62,10],[13,-8],[32,18],[30,-5],[2,27],[-14,21],[4,25],[-24,55],[22,28],[53,-32],[35,13],[23,-30],[54,17],[43,3],[37,-12],[17,9],[-22,37],[2,43],[24,6],[41,44],[30,-2],[26,-19],[28,42],[-5,22],[34,-6],[16,31],[10,63],[59,10],[10,18],[37,22],[13,44],[27,-8],[1,-26],[40,-23],[30,9]],[[3219,3814],[18,-60],[-14,-18],[16,-17],[4,-31],[-36,-27],[6,-29],[-21,-11],[-20,-30],[30,-18],[41,-8],[22,5],[-30,-26],[-76,-87],[19,-29],[11,-41],[-10,-25],[-9,-71],[9,-42],[-60,-48],[12,-15],[69,-9],[19,-15],[-17,-18],[-8,-31],[2,-59],[-13,-16],[-73,7],[-30,-5],[-37,-28],[-4,-38],[21,-31],[-30,-17],[3,-34],[-13,-3],[19,-50],[28,-14],[9,-55],[-31,-45],[-62,12],[-34,16],[-15,-33],[34,-17],[-7,-50],[-21,-52],[7,-23],[26,-28],[30,2],[-20,-29],[19,-27],[-4,-18],[54,-10],[21,38],[46,-2],[38,-33],[-2,31],[34,-13],[1,-32],[-31,-8],[-15,-35],[24,-55],[-24,4],[-11,31],[-19,7],[-45,-6],[-41,20],[-8,35],[-18,6],[-15,-17],[20,-19],[2,-23],[24,-35],[-18,-32],[26,-21],[30,6],[-6,30],[17,17],[49,-19],[30,0],[20,-48],[79,19],[41,41],[0,19],[30,-8],[17,14],[-2,-43],[37,18],[17,-9],[6,-53],[31,-32],[64,-4],[-7,-72],[13,-17],[60,-14],[-4,-30],[-49,-83],[13,-23],[-26,16],[-13,-15],[-32,-5],[-5,-31]],[[3451,1983],[-60,30],[-26,-14],[-17,19],[-43,-2],[-17,-38],[-21,-21],[-28,-1],[-15,-39],[19,-30],[-8,-25],[-46,-42],[9,-19],[60,0],[24,-10],[10,-27],[-42,-47],[-42,-3],[-38,-50],[-47,8],[-43,-5],[-22,-14],[-28,22],[-32,-8],[-28,-57],[-24,6],[-68,-2],[-7,23],[-40,-13]],[[2831,1624],[-13,27],[-24,0],[-53,39],[-20,-3],[-6,33],[-33,-9],[-47,5],[-28,39],[-43,11],[-34,23],[-32,35],[-20,8],[-15,32],[7,27],[-17,-3],[-22,24],[7,20],[-52,8],[-6,18],[-26,2],[-26,28],[-32,-3]],[[1898,2962],[-36,59],[-47,55],[-3,44],[-10,9],[-35,110],[5,37],[-18,65],[7,37],[-26,94],[11,4],[-26,35],[4,30],[-19,28],[-9,76],[-29,52],[-16,81],[3,15],[32,-6],[-5,18],[-27,4],[-24,24],[-4,46],[25,12],[-21,6],[-19,41],[4,38],[21,9],[17,-16],[14,11],[-41,28],[32,34],[-5,55],[-10,-36],[-20,-10],[-25,-42],[-7,29],[11,61],[-15,-3],[-13,101],[47,22],[-34,1],[-22,23],[-23,78],[19,76]],[[1561,4397],[82,18],[17,-29],[34,5],[18,-9],[6,29],[23,3],[13,23],[39,-3],[0,51],[-8,10],[34,55],[-30,40],[23,19],[89,-51],[32,15],[6,21],[32,29],[0,41],[-12,30],[-54,46],[-26,2],[-28,21],[50,-6],[27,16],[11,24],[34,0],[13,29],[33,29],[21,-3],[64,20],[-2,20],[-36,-9],[-63,3],[-60,-16],[-21,39],[24,9],[-7,61],[45,12],[63,26]],[[2047,5017],[34,-9],[56,32],[32,-25],[2,-42],[11,-35],[64,-34],[63,1],[53,-19],[31,-42],[60,-15],[75,-4],[96,4],[22,6],[75,-14],[17,-56],[-15,-7],[15,-20],[48,-11],[51,11],[30,27],[32,4],[13,16],[-8,30],[34,24],[19,26],[3,28],[43,14],[38,24],[47,11],[15,-9],[35,24],[51,0],[30,-25],[9,-48],[-49,-2],[19,-50],[47,3],[26,-8],[32,16],[26,-9],[54,13],[56,38],[75,18],[6,-33],[19,7],[71,-18],[77,13],[1,20],[105,29],[4,16],[84,-16],[24,-39],[70,17],[31,-22],[79,14],[36,23],[42,-20],[32,-33],[6,-29],[28,1],[43,-23],[17,9]],[[4289,4819],[-17,-37],[-54,-27],[-12,-48],[16,-27],[26,-11],[5,-67],[-26,-25],[43,-7],[0,-90],[-34,-21],[-31,-6],[-6,-29],[39,-7],[10,-32],[-8,-35],[-28,2],[-9,-15],[20,-15],[-26,-22],[26,-5],[8,17],[32,-35],[20,-4],[11,-30],[49,-21],[19,-19],[-8,-22],[-22,-5],[9,-23],[-37,-25],[-15,21],[-21,-1],[-13,24],[-60,-47],[-20,-55],[-25,-45],[25,-32],[-28,-32],[3,-13]],[[4150,3948],[-63,-5],[-30,28],[-28,14],[15,13],[-9,62],[-25,-1],[28,40],[-6,19],[14,62],[-58,59],[-21,3],[-41,-13],[-6,-15],[-67,6],[-19,14],[-35,6],[-17,16],[-30,-3],[-43,-21],[-36,22],[-11,30],[-84,29],[-41,-6],[-38,25],[-17,-4],[27,-43],[-30,-48],[-2,-32],[-28,-13],[-17,-25],[2,-33],[-39,-5],[-27,21],[-26,2],[-19,-35],[-7,-34],[-28,-22],[54,-73],[-24,-9],[-21,-34],[-26,-8],[-7,-36],[-27,-4],[-35,-59],[17,-24]],[[2038,2935],[-47,-8],[-18,34],[-29,21],[-11,-14],[-35,-6]],[[8215,5871],[29,78],[-6,32],[12,8],[43,-20],[34,9],[3,21],[-34,25]],[[8296,6024],[61,49],[29,1],[53,24],[-7,42],[-68,47],[34,32],[-32,-3],[-71,59],[-75,-25],[0,42],[18,34],[-11,24],[28,30],[-129,-13],[-22,15],[-26,-14],[-15,-31],[-27,-2],[4,26],[-20,0],[-36,-43],[0,-12],[-45,-8],[-26,-28],[-24,3],[0,35],[-60,-9],[2,20],[-19,15],[-64,-6],[-11,12],[-37,-10],[-9,12],[-30,-19],[7,21],[-19,12],[-39,2],[-19,-11],[-65,-8],[-55,-52],[-12,-32],[18,-43],[-30,-7],[-6,-26],[-27,-12]],[[7414,6167],[9,64],[-19,60],[19,39],[-30,36],[-11,34],[-21,14]],[[7361,6414],[60,46],[20,68],[-11,63]],[[7430,6591],[79,6],[30,29],[71,21],[71,-37],[43,-5],[99,5],[19,8],[86,-9],[26,27],[30,2],[11,-19],[66,-2],[32,16],[28,-16],[5,26],[49,-10],[15,23]],[[8190,6656],[45,-3],[136,32],[32,19],[40,-5],[69,-32],[123,12],[29,-14],[80,19],[48,33],[4,31],[47,41],[88,67],[-8,33],[13,7],[32,-18],[60,3],[28,15],[66,18],[51,22],[125,42],[24,-9],[54,11],[60,29],[85,1],[-23,-42],[-43,-49],[9,-30],[28,-20],[2,-52],[32,14],[11,-25],[-37,-33],[-36,4],[-54,-19],[-32,15],[-17,-6],[-26,-38],[-56,-31],[-28,-5]],[[9251,6693],[-51,-33],[-39,6],[-39,-45],[-38,-24],[-69,-21],[-32,-47],[-22,-18],[-20,24],[-23,-23],[-11,-42],[-56,-57],[-12,-47],[6,-31],[-30,-31],[-39,-7],[7,33],[-19,9],[-26,-13],[11,-18],[-63,-58],[-66,-50],[41,-47],[-1,-31]],[[8660,6122],[-19,-22],[-66,-138],[-26,-2],[-13,-40],[4,-37],[-12,-6],[-16,-54]],[[8512,5823],[-64,-6],[-30,31],[-12,-34],[-27,-24],[-2,-19],[-45,-35],[-19,4],[-7,32],[-41,-1]],[[8265,5771],[-26,9],[14,29],[-13,49],[-25,13]],[[9071,6170],[-15,-17],[-19,-50],[8,-23],[39,-13],[8,-22],[-19,-60],[-24,-46],[-25,-14],[-13,-35],[-22,-17],[-28,-61],[-12,-10],[-37,-111],[-30,-50],[-34,23],[-41,11],[-26,-5],[-21,21],[-44,5],[-14,-14],[-41,-3],[-30,39],[-22,-14]],[[8609,5704],[-26,11],[-41,-8],[-43,20],[13,96]],[[8660,6122],[54,-32],[25,41],[44,39],[-17,17],[15,15],[77,3],[54,-18],[47,4],[86,58],[-13,-53],[39,-26]],[[9275,6566],[-15,7],[-30,-22],[-26,-47],[9,-22],[-9,-35],[17,-61],[17,-24],[-47,-35],[5,-55],[-16,-10],[-64,-73],[-45,-19]],[[9251,6693],[17,-19],[-8,-36],[11,-22],[4,-50]],[[8296,6024],[-28,23],[-104,36],[-92,-5],[-24,-15],[-38,13],[-41,-9],[-67,22],[-142,-21],[-23,10],[-86,0],[-47,-7],[-80,21],[-76,28],[-30,-4],[-4,51]],[[1986,7739],[-19,42],[-17,8],[56,51],[17,7],[9,32],[28,12],[60,79],[23,-1],[39,21],[47,40],[-36,8],[-15,15],[8,49],[26,45],[-19,57],[-22,33],[20,38],[51,40],[30,-2],[15,27],[47,4],[26,20],[45,-3],[41,20],[22,37],[-20,23]],[[2448,8441],[50,2],[19,-12],[39,31],[23,2],[56,38]],[[2180,7655],[-206,10],[-5,19],[24,33],[-7,22]],[[996,5921],[-49,84],[-18,62],[-32,32],[-42,66],[4,66],[-7,23],[-94,-9],[-39,11],[-11,26],[-45,47],[-2,55],[26,52],[4,79],[-11,23],[-27,8],[-82,-2],[-52,32],[-55,19],[-13,24],[15,80],[23,45],[93,74],[58,62],[25,64],[80,68],[64,10],[43,-32],[2,-26],[41,-48],[52,3],[81,34],[56,14],[84,2],[103,27],[13,54],[32,37],[54,42],[17,30],[20,66],[42,45],[179,79],[51,68],[63,102],[47,129],[64,27],[61,13],[72,51]],[[3127,6948],[17,-52],[5,-35],[38,-52],[50,-19],[19,-41],[-24,-24],[-30,-11],[20,-20],[30,3],[25,-14],[-88,-32],[-21,-14],[-2,-25],[84,32],[21,15],[94,-8],[45,14],[41,-4],[-19,-24],[9,-13]],[[3441,6624],[-33,-9],[-8,-37],[-24,4],[-40,-12],[-22,-28],[-39,-23],[-34,-7],[-63,-36],[-29,-4],[-46,-40],[-30,-1],[-105,-72],[-32,-34],[-24,2],[-37,-25],[-21,-36],[22,-92],[28,-23],[51,-19],[48,-9],[60,17],[30,-5],[19,27],[30,7],[22,-98],[-16,-11],[-49,4],[-66,-12],[-50,-18],[8,-38],[-36,-31],[33,-27],[30,-2],[29,-30],[-4,-36],[-40,-14],[-11,20],[-28,0],[2,-65],[28,-39],[-11,-23],[-32,-5],[-39,28],[-2,23],[-23,-9],[-13,-23],[-29,17],[-79,4],[-13,25],[-21,-10],[-3,-62],[-42,-28],[-3,-28],[-72,-27],[-16,10],[-10,-40],[-35,8],[-32,32],[-6,25],[15,18],[26,-15],[42,1],[26,39],[-21,23],[17,41],[-15,9],[-2,42],[36,1],[7,42],[-39,59],[-37,-13],[-68,-12],[-78,6],[-17,14],[11,42],[19,-15],[43,6],[0,13],[-30,-6],[-2,37],[11,21],[-65,-6],[-12,-46],[-41,-13],[-54,23],[6,-45],[46,-3],[-3,-31],[-32,-10],[-34,33],[4,-31],[-21,-55],[43,-22],[-28,-25],[-11,-33],[47,-8],[9,-39],[25,-28],[-21,-45],[-2,-30],[11,-47],[-41,-55],[-58,-22],[-43,-46],[11,-15],[43,-9],[14,-16],[-83,-35],[-30,4],[-22,-13]],[[2115,5374],[-32,40],[-30,1],[-21,37],[-43,29],[-22,-8],[-28,32],[-34,-5],[-28,6],[-4,55],[-18,11],[-23,-9],[4,24],[-51,34],[4,41],[17,11],[-24,54],[-32,-30],[-49,41],[-13,22],[21,44],[26,6],[-43,17],[0,33],[-32,-6],[-24,-42],[-62,6],[-26,27],[-53,16],[-22,-25],[-11,27],[-55,22],[21,19],[-39,-4],[-36,8],[-13,16],[-47,-16],[-15,11],[-24,-17],[-19,14],[-39,-8],[-32,12],[-58,-15],[-48,-3],[-62,19]],[[4083,7283],[54,-29],[40,-37],[48,-15],[8,35],[46,-20],[45,-35],[75,-39],[51,-8],[54,-82],[22,15],[30,-30],[100,-56],[46,-20],[32,23],[24,-4],[75,-48],[60,-31],[71,13],[21,-25],[13,-44],[43,-3],[47,-14],[41,0],[43,-36],[28,7],[15,38],[71,-5],[90,-37]],[[5376,6796],[30,-40],[-2,-20],[32,-39],[15,-40],[26,-16],[32,0],[0,-37],[22,-6],[26,-34],[-97,3],[-18,-30],[-30,-14],[-6,-20],[26,6],[58,-26],[0,-34],[-62,-14],[-7,-14],[28,-36],[28,-11],[45,-46],[32,5],[28,-25],[26,-2],[26,-20],[-2,-17],[-41,-15],[-37,21],[-21,-8],[6,-24],[-37,-3],[-3,23],[-24,2],[-47,-42],[-80,-54],[-137,-72],[-16,-52],[14,-22],[-5,-39],[62,-59],[-4,-58]],[[5262,5867],[-43,-12],[20,-46],[-41,-70]],[[5198,5739],[-43,-65],[-41,-12],[-43,1],[-56,29]],[[5015,5692],[-41,55],[19,16],[11,38],[-11,29],[0,44],[26,5],[-10,31],[-26,21],[-37,-12],[-58,11],[-2,-25],[-39,-4],[7,16],[-22,14],[1,21],[-22,-3],[0,23],[-23,-13],[-61,21],[-26,17],[-17,36],[-27,-4],[-15,15],[-46,6],[-13,38],[-57,-15],[-43,5],[-1,-23],[-21,-24],[-2,-24],[-26,-16],[-34,20],[-82,6],[22,34],[13,38],[-67,-19],[17,-21],[-30,-1],[-17,22],[-13,-13],[-28,4],[19,-25],[-19,-9],[-56,-1],[-10,17],[53,37],[-8,24],[-24,12],[-15,43],[-32,0],[-22,-21],[-38,-6],[-61,-32],[9,-27],[-69,-3],[-34,12],[-20,-20],[-38,5],[0,-20],[-19,23],[30,37],[-56,6],[6,-36],[-58,10],[-28,-7],[7,27],[-17,9],[-37,-36],[-9,15],[22,25],[12,43],[-19,5],[-10,31],[-11,-36],[-15,0],[-7,32],[-19,-9],[7,-20],[-9,-29],[-19,18],[-28,2],[-22,-47],[35,-52],[6,-47],[32,-50],[-4,-53],[47,-5],[41,-56],[-4,-22],[-47,-57],[-54,19],[-61,40],[-29,-33],[-26,11],[6,21],[-43,38],[15,21],[-2,36],[-32,61],[49,36],[18,66],[-37,72],[32,27],[7,22],[64,7],[65,22],[0,53],[21,13],[50,88],[-12,18],[9,33],[39,28],[-11,49],[-22,32],[-12,37],[-30,2],[-45,29],[-50,-13],[-60,22],[-13,11],[-51,-12]],[[3230,7798],[26,4],[32,-23],[67,-32],[-39,-32],[-30,-50],[0,-33],[28,-72],[47,21],[49,-23],[31,31],[-15,58],[13,11],[32,-22],[32,-44],[34,-12],[37,-47],[75,-41],[34,-8],[0,-14],[-64,-35],[50,-22],[17,-36],[47,15],[84,-59],[25,-1],[24,-40],[43,10],[7,-10],[77,9],[8,-23],[18,4],[23,-27],[15,0],[26,28]],[[3673,8101],[14,18],[20,-11],[13,34],[17,3],[43,-32],[9,-35],[26,-35],[27,-10],[7,-19],[28,-7],[39,-25],[51,12],[39,-7],[73,-56],[36,0],[22,-21],[-24,-15],[6,-38],[50,-5],[68,-29],[16,3],[41,-18],[25,-27],[71,-26],[11,-13],[-54,-23],[-45,-44],[-49,-20],[-41,-52],[-28,-12],[6,-42],[-23,-38],[-35,-25],[20,-42],[-15,-56],[-35,-10],[-8,-38],[-20,-15],[-4,-37],[13,-5]],[[6721,6093],[-2,-41],[25,-19],[11,-47],[-13,-34],[18,-55],[-26,-13],[-19,7],[12,-31],[-28,-63],[-34,-19],[13,-24],[-22,-4],[-8,-19],[-28,5],[-11,-37],[-41,-6],[-10,18],[-28,-9],[21,-29],[-15,-30],[-30,10],[4,-23],[-38,5],[-61,28],[-19,-20],[-2,-33],[-122,-37],[-35,-18],[-8,-25],[-31,-22],[-42,20],[4,19],[-37,16],[-10,-32],[-57,-9],[22,-22],[-21,-51],[19,-33],[45,-3],[54,-49],[13,5],[81,-5],[19,-7],[-31,-14],[-7,-51],[65,-36],[8,-24],[26,-4],[26,-24],[-17,-7],[27,-27],[20,-40],[-26,-4],[-30,-22]],[[5415,5211],[30,32],[47,20],[17,32],[38,30],[-8,28],[-62,18],[-11,-9],[-9,29],[-25,32],[8,42],[-8,24],[-24,-4],[3,37],[21,26],[-11,25],[-21,-22],[-58,11],[-7,44],[-13,27],[-47,37],[-13,44],[-23,18],[-41,7]],[[5262,5867],[79,-7],[12,10],[45,2],[43,26],[21,-46],[69,16],[2,-27],[58,-49],[37,30],[23,-6],[15,23],[34,17],[24,-18],[13,-29],[58,13],[6,-16],[26,29],[43,20],[78,3],[19,19],[28,3],[-6,25],[34,42],[30,0],[28,-24],[36,15],[30,-24],[17,-38],[46,-2],[-5,-38],[56,-31],[19,46],[31,27],[27,-7],[31,16],[46,-19],[9,27],[46,-6],[6,60],[19,28],[-2,36],[23,30],[27,3],[10,34],[39,2],[40,47],[26,-19],[59,-9],[4,-8]],[[5376,6796],[-8,29],[68,7],[30,20],[58,-46],[99,-16],[25,-28],[3,-25],[-13,-36],[48,-19],[15,5],[40,-19],[34,-38],[48,2],[12,-29],[31,-7],[107,37],[30,-13],[9,-52],[40,-29],[63,29],[58,-23],[34,8],[73,-26],[75,-38],[37,8],[17,19],[58,28],[13,-49],[18,-13],[30,5],[32,-22],[15,21],[32,8],[47,-17],[58,23],[39,4],[36,-32],[33,30],[4,28]],[[6824,6530],[37,4],[0,-17],[30,-23],[6,-31],[-41,-16],[-33,-31],[-38,-18],[-45,-38],[-13,-49],[37,-36],[45,-29],[9,-62],[-39,15],[-71,-42],[32,-43],[-19,-21]],[[6796,6764],[11,24],[-5,58],[31,47],[17,68],[-22,20],[10,15],[87,11],[41,15],[38,25],[71,-36],[11,-50],[-15,-63],[-20,-32],[9,-49],[39,-31],[-39,-24],[-15,-31]],[[7045,6731],[-73,9],[-51,-31],[-61,21],[-34,2],[-30,32]],[[4534,3648],[-58,1],[-22,10],[-44,-21],[-15,21],[-3,42],[-15,41],[6,22],[-27,-7],[-7,21],[-40,-8],[14,22],[-27,57],[-46,49],[-21,13],[-51,-3],[-18,38],[-10,2]],[[4289,4819],[15,40],[2,78],[26,21],[11,24],[0,35],[34,49],[15,-16],[15,46],[35,40],[2,36],[17,19],[19,-12],[37,18],[30,-19],[37,26],[36,10],[9,20],[32,17],[4,57],[30,15],[28,27],[0,27],[43,19],[19,-2],[20,71],[-29,20],[-19,-2],[-47,46],[-56,13],[-39,-18],[-14,24],[34,41],[-23,49],[21,17],[32,-28],[54,13],[49,-13],[155,-9],[41,23],[6,17],[39,14],[6,20]],[[2047,5017],[6,36],[-28,50],[4,43],[41,-4],[17,21],[-40,5],[-35,23],[13,14],[34,-2],[41,32],[33,11],[28,52],[-33,23],[-13,53]],[[4006,1719],[-13,-42]],[[3993,1677],[-28,3],[-20,44],[33,2],[2,-21],[26,14]],[[2450,1746],[-27,-7]],[[2423,1739],[0,28],[34,14],[19,-5],[-26,-30]],[[4005,1396],[0,-56]],[[4005,1340],[-47,32],[7,26],[40,-2]],[[4147,2218],[22,-13],[8,-26],[-6,-43],[-17,-50],[-6,-77],[-12,-53],[-25,-66],[-101,-150],[-4,-21]],[[3993,1677],[-20,-76],[11,-57],[15,-29],[9,-59],[-3,-60]],[[4005,1340],[5,-141],[-4,-32],[-33,9],[-49,0],[51,-9],[0,-8],[-70,13],[-9,12],[-45,-4],[-43,-30],[-13,-21],[15,-44],[-26,-21],[-38,-56],[-50,-66],[-10,-49],[43,-45],[71,-10],[25,12],[35,-55],[-46,31],[-42,7],[-28,-6],[-33,8],[-43,-9],[-83,-37],[-71,-12],[-59,-45],[-21,-35],[-6,-43],[-17,-24],[10,-20],[-4,-35],[-22,-38],[-89,-48],[-18,-19],[-38,-6],[-45,-26],[-69,19],[-67,50]],[[3069,507],[19,7],[16,37],[-3,21],[24,18],[-30,31],[-3,22],[26,52],[-19,13],[-13,36],[32,39],[37,98],[13,15],[-19,38],[-35,-6],[-19,17],[15,50],[-2,39],[11,27],[-11,32],[17,50],[-30,46],[-39,-15],[-41,-27],[-40,32],[-11,39],[6,65],[18,19],[4,29],[-20,30],[-43,17],[-6,37],[28,5],[-39,53],[-43,-3],[-30,6],[35,38],[-45,34],[-54,13],[-4,42],[34,-4],[26,25]],[[3451,1983],[24,-27],[41,-14],[25,19],[1,16],[30,12],[21,71],[26,21],[73,13],[49,-19],[35,7],[21,27],[22,-3],[40,30],[9,37],[30,0],[15,-18],[30,5],[18,-23],[23,0],[-11,18],[69,29],[2,17],[30,19],[73,-2]],[[2034,2686],[-17,11],[-3,25],[-40,27],[12,27],[-19,60],[-38,22],[53,1],[-47,12],[23,30],[-40,-8],[-20,69]],[[8190,6656],[-9,35],[-21,26],[32,66],[-37,55],[-77,-18],[-53,43],[-5,36],[18,34],[49,1],[30,-11],[50,4],[33,22],[35,-2],[13,20],[20,-25],[111,42],[24,37],[-15,26],[43,30],[13,-6],[94,62],[15,19],[28,70],[28,8],[111,4],[33,8],[49,26],[19,19],[37,10],[-4,36],[42,7],[35,44],[45,23],[43,6],[45,35],[24,-13],[26,-38],[26,1],[47,-15],[-13,15],[94,-36],[59,-10],[40,59],[114,59],[25,2],[48,22],[49,-67],[39,5],[15,-9],[-17,-24],[-36,-9],[-33,-27],[15,-27],[-9,-19],[25,-2],[40,34],[56,14],[-11,-27],[48,-74],[-48,-25],[-2,-17],[-45,-33],[7,-20],[-33,-21],[52,-17],[9,16],[51,18],[26,1],[49,-33],[73,-8],[41,10],[71,-49],[-6,-50],[17,-14],[-9,-43],[-30,5],[-62,-52],[-20,-5],[-48,-45],[6,-51],[87,-107],[-37,-11],[-63,34],[6,17],[-34,32],[-59,5],[-14,-16],[-48,-2],[-90,-14],[-45,-22],[-43,-54],[-37,-10],[-27,-33],[-37,-24],[-36,-4],[-33,-39],[-49,-15]],[[8609,5704],[17,-41],[8,-57],[20,-30],[-11,-64],[3,-35],[-11,-22],[-1,-50],[-19,-31],[-25,-10],[-24,18],[-13,-18],[13,-34],[-33,-42],[-3,-35],[12,-17],[-2,-34],[23,-42],[1,-46],[-9,-21],[-41,3],[1,-26],[-20,-17],[4,-22],[-43,10],[-50,40],[-12,-4],[-7,-38],[-26,-14],[-14,50],[14,12],[-20,115],[-7,59],[-19,23],[-5,36],[-23,18],[-11,94],[7,44],[-16,28],[-17,60],[3,30]],[[8253,5594],[4,45],[17,6],[2,82],[-11,44]],[[8253,5594],[-23,-18],[-14,28],[-52,-28],[-23,25],[-7,-24],[10,-51],[-38,-27],[-30,-47],[17,-63],[-34,-30],[-38,-16],[-27,34],[-14,45],[-18,23],[-19,-8],[6,-54],[-25,27],[-7,53],[-17,54],[-32,53],[11,18],[-9,19],[22,10],[2,41],[21,31],[23,2],[7,35],[68,-4],[22,38],[37,-14],[0,24],[26,-4],[19,-24],[15,37],[-2,25],[24,-7],[-7,19],[54,9],[-1,31],[15,15]],[[6835,4986],[10,4],[5,-56],[-11,-25],[-30,17],[26,60]],[[7361,6414],[-15,11],[-2,-54],[-26,-33],[-13,14],[-47,-1],[-76,46],[-26,69],[-36,31],[-21,-24],[51,-39],[-21,-8],[-26,16],[-26,-15],[-41,28],[-17,34],[-50,24],[-51,34],[-15,-31],[50,-14],[12,-34],[-23,3],[-28,-19],[-13,-32],[-53,-25],[-2,-32],[-26,-41],[19,-44],[34,10],[66,-50],[1,-20],[36,-31],[50,-11],[23,16],[24,-18],[-4,-19],[17,-25],[43,-8],[-18,-44],[-40,9],[-5,-10],[-66,9],[-58,-6],[-2,-41],[-34,-58],[-28,2],[-20,22],[-24,-10],[9,-24],[-30,-29],[-11,-37],[41,-49],[88,-42],[26,-17],[54,-7],[29,7],[11,-34],[-23,-16],[-2,-31],[17,-14],[-2,-28],[-22,-24],[-21,-1],[-15,-31],[-3,-45],[61,-56],[17,0],[-28,-58],[7,-17],[85,-11],[-36,-44],[-4,-36],[36,-39],[-13,-35],[15,-59],[17,-36],[-4,-22],[30,-79],[-13,-20],[7,-49],[-16,-11],[-36,22],[37,-39],[23,-78],[-27,-4],[-41,21],[-41,-37],[-26,46],[15,113],[-17,-33],[-19,6],[10,21],[-6,30],[-24,-86],[0,-26],[20,2],[-11,-54],[-17,-26],[-20,7],[15,33],[-8,27],[9,19],[-18,38],[5,-35],[-14,-22],[7,-25],[-22,-21],[-6,32],[-23,1],[-20,26],[13,-68],[-19,-4],[-24,34],[9,47],[-17,28],[1,34],[22,28],[-8,29],[-59,20],[-14,13],[-20,53],[7,-49],[21,-25],[43,-8],[13,-20],[-41,-43],[-23,-43],[-52,-43],[-45,-23],[-77,-14]],[[6824,6530],[26,55],[-4,52],[-26,43],[-35,36],[11,48]],[[7045,6731],[37,-25],[4,-42],[11,11],[38,-18],[35,-34],[30,-3],[54,13],[34,-18],[36,1],[39,-24],[54,-10],[13,9]],[[7103,4894],[-21,-16],[0,27],[21,-11]],[[7017,5009],[-2,-46],[-17,5],[19,41]],[[3069,507],[-41,28],[-38,50],[-110,122],[24,38],[-32,-21],[-59,127],[-19,55],[-9,115],[26,-8],[11,-45],[-13,-48],[37,-12],[15,12],[-33,12],[3,37],[-20,77],[-28,20],[-10,40],[-22,2],[-26,93],[-19,42],[-39,69],[-36,123],[-54,117],[-21,8],[-37,84],[-67,67],[-2,35]],[[2423,1739],[-7,-3],[-26,66],[-60,108],[-34,75]],[[1561,4397],[15,67],[45,78],[5,71],[15,9],[-35,27],[9,20],[-34,46],[30,4],[-15,27],[-37,-19],[9,25],[-33,-4],[28,18],[-32,19],[-19,45],[60,32],[-54,-22],[13,24],[45,25],[26,26],[21,-1],[78,31],[4,11],[-69,-28],[-66,1],[-67,-5],[9,56],[19,28],[32,19],[-30,-5],[-28,-19],[-13,17],[13,63],[24,19],[47,-16],[22,24],[28,-8],[10,15],[-36,6],[-22,-10],[-54,14],[-45,-18],[-25,7],[2,38],[-24,-35],[-30,9],[22,-21],[0,-48],[-20,-24],[-32,-4],[-43,-19],[43,-4],[2,-24],[-34,15],[15,-21],[-34,8],[-1,-23],[56,2],[17,-28],[20,-7],[8,-24],[-19,-45],[-47,-54],[0,-38],[-60,-23],[-56,-33],[-62,-24],[-5,7],[-36,-31],[-50,-12],[-60,-29],[-47,-8],[-8,-10],[-48,-3],[-103,36],[-94,57],[-71,56],[-103,113],[-43,41],[-71,54],[-11,32],[-19,-5],[-80,71],[-38,41],[-16,31],[13,41],[30,21],[0,-28],[37,10],[9,-10],[-11,-30],[13,-11],[51,18],[37,3],[28,38],[2,-25],[21,-7],[28,16],[11,25],[19,-19],[60,37],[63,4],[60,76],[19,41],[41,23],[9,33],[-13,17],[-26,-12],[-2,-45],[-35,-5],[-23,13],[-33,-15],[-98,-21],[-47,-39],[-43,5],[-86,24],[-46,6],[-55,31],[-60,24],[-61,37],[-28,25],[5,20],[-24,-3],[19,22],[-62,39],[20,23],[-26,-2],[-2,30],[45,26],[47,46],[51,20],[-64,-15],[-15,-19],[-62,-24],[-28,-38],[-58,5],[28,23],[-26,29],[8,28],[24,27],[60,14],[101,-1],[0,107],[24,13],[17,-28],[15,25],[24,-21],[30,10],[34,-10],[45,9],[97,-2],[36,-29],[35,-10],[69,1],[32,19],[15,28],[84,20],[57,20],[14,-46],[21,-15],[45,-3],[36,13],[-2,17],[28,15],[20,-4],[30,17],[-37,24],[-6,34],[34,36]],[[4152,2232],[4,5]],[[4152,2232],[-11,27],[-35,44],[-2,-35],[-15,25],[-13,-25],[26,-42],[45,-8]],[[5692,4081],[-39,-61],[-12,-5],[-29,-47],[-42,-45],[-95,-87],[-22,-34],[-105,-44],[-54,-30],[-49,-47],[-19,-33],[-39,-37],[-30,-18],[9,-14],[-52,-21],[-65,-41],[-62,-20],[-83,-46],[-61,-58],[-15,-49],[39,-24],[-9,-44],[-47,-54],[-90,-42],[-76,-25],[-76,16],[-28,-7],[-5,14],[-47,-16],[-36,-96],[0,-18],[-54,-45],[2,-23],[-39,39],[-28,-59],[-2,41],[-15,17],[-69,-4],[-67,-35],[-33,-33],[-24,-57],[-37,-65],[-11,-96],[18,-103],[28,-43],[-5,-75],[-17,-29],[9,-76],[30,-62],[-7,-47],[24,-56]],[[4358,3000],[37,-22],[-15,-10],[-22,32]],[[8394,2023],[4,28],[18,0],[-18,-55],[-4,27]],[[8688,484],[-8,-28],[10,-24],[-14,-19],[-17,54],[29,17]],[[8399,1535],[-33,-7],[22,43],[11,-36]],[[8356,1332],[4,-29],[-14,-17],[-7,-35],[-48,2],[4,31],[-12,45],[53,43],[20,-40]],[[8560,489],[-31,13],[11,26],[5,-30],[15,-9]],[[8542,1796],[-4,-33],[-10,12],[14,21]],[[8654,398],[10,-14],[-40,-7],[-13,16],[5,22],[23,4],[15,-21]],[[8699,414],[4,-25],[-23,23],[19,2]],[[8431,826],[11,-14],[-11,-27],[-17,1],[-7,28],[24,12]],[[8493,1883],[-39,-6],[23,-32],[-12,-9],[5,-32],[-33,-41],[-15,-5],[-6,-65],[8,21],[13,-25],[-13,-53],[2,-28],[-17,-41],[-32,33],[-6,41],[-14,2],[0,36],[-12,4],[17,27],[15,-18],[6,86],[14,28],[12,-14],[26,10],[-2,32],[-24,19],[2,78],[11,17],[-6,51],[21,18],[13,46],[-9,15],[18,62],[-7,31],[36,70],[22,13],[19,-13],[-7,-60],[-14,-8],[26,-25],[-22,-73],[-27,11],[6,-29],[-17,1],[-11,-22],[30,-17],[10,-54],[0,-61],[-10,-21]],[[8521,1721],[8,-21],[-41,30],[22,15],[11,-24]],[[8744,188],[-23,-21],[-11,21],[34,42],[13,-24],[-13,-18]],[[8821,91],[4,-22],[-10,-45],[-23,-24],[-24,58],[-17,23],[-24,7],[11,56],[47,20],[17,-15],[19,-58]],[[3305,9485],[39,0],[13,22],[54,-6],[17,25],[38,24],[56,22],[37,7],[66,46],[69,-8],[120,27],[37,-5],[13,-35],[37,3],[34,-21],[-11,-15],[19,-34],[43,-12],[15,-18],[26,16],[28,-56],[37,-5],[29,43],[33,-19],[26,1],[2,-25],[-37,-37],[3,-39],[-28,-30],[-3,-68],[-26,-36],[-17,-39],[-68,-10],[-13,-25],[-35,-10],[9,-30],[-24,-12],[-53,2],[13,-54],[-22,-22],[4,-25],[-41,-32],[-83,5],[-24,-10],[-45,4],[-15,-20],[34,-65],[9,-38],[-33,0],[-12,-14],[12,-68],[18,-25],[30,-11],[9,-20],[23,4],[78,-21],[-16,-56],[59,-93],[-11,-22],[-62,-50],[-26,4],[-35,-11],[-13,-34],[-57,-5],[-48,35],[-26,56],[-36,-20],[-48,-1],[-23,-13]],[[2448,8441],[-36,22],[-58,23],[-41,-7],[-22,10],[-40,-5],[-20,12],[-11,30],[18,79],[-24,-20],[-45,-6],[-52,8],[-4,15],[-116,50],[-26,20],[-28,-6],[-68,37],[8,23],[-17,17],[-8,47],[19,21],[2,34],[-21,23],[8,39],[-6,55],[-22,32],[-15,86],[-23,29],[15,67],[53,9],[33,55],[64,19],[45,23],[28,43],[0,43],[-82,21],[-40,2],[-20,33],[13,34],[22,12],[-5,24],[-92,4],[-69,21],[-58,37],[5,40],[-22,15],[-73,-1],[-21,-12],[-52,5],[-49,17],[25,36],[-19,31],[19,50],[33,3],[66,38],[7,26],[30,3],[38,44],[-8,29],[38,13],[45,-5],[35,12],[161,-14],[0,20],[-60,28],[0,12],[54,-7],[27,-14],[50,0],[8,20],[33,1],[62,33],[49,-10],[9,22],[39,7],[40,-12],[26,-36],[13,19],[65,10],[73,-21],[29,-22],[5,-38],[28,-10],[26,16],[55,-15],[50,-34],[34,-51],[60,-12],[30,-35],[52,-3],[13,-23],[47,-17],[35,0],[30,-26],[8,-66],[21,-17],[57,-13],[29,-27],[39,-10],[48,3],[55,-45],[1,-34],[51,-6],[49,12]]],"transform":{"scale":[0.0029221293711354057,0.0030310846019431905],"translate":[68.14346886579557,6.745531724809325]}};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(15);

var _country = __webpack_require__(46);

var _country2 = _interopRequireDefault(_country);

var _world110m = __webpack_require__(47);

var _world110m2 = _interopRequireDefault(_world110m);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var continentCount = 0;
var countryCount = 0;
var cityCount = 0;

var WorldMap = function (_React$Component) {
  _inherits(WorldMap, _React$Component);

  function WorldMap() {
    _classCallCheck(this, WorldMap);

    var _this = _possibleConstructorReturn(this, (WorldMap.__proto__ || Object.getPrototypeOf(WorldMap)).call(this));

    _this.state = {
      worlddata: feature(_world110m2.default, _world110m2.default.objects.countries).features,
      renderState: [],
      imageURL: null
    };
    return _this;
  }

  _createClass(WorldMap, [{
    key: 'projection',
    value: function projection() {
      return geoMercator().scale(120).translate([1280 / 2, 720 / 2]);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

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

          _this2.setState({
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
      var _this3 = this;

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
                fill: _this3.state.renderState[i] ? 'forestgreen' : 'honeydew',
                key: 'path-' + i,
                d: geoPath().projection(_this3.projection())(d)
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

exports.default = WorldMap;

/***/ }),
/* 46 */
/***/ (function(module) {

module.exports = [{"name":"Afghanistan","alpha-2":"AF","alpha-3":"AFG","country-code":"004","iso_3166-2":"ISO 3166-2:AF","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Åland Islands","alpha-2":"AX","alpha-3":"ALA","country-code":248,"iso_3166-2":"ISO 3166-2:AX","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Albania","alpha-2":"AL","alpha-3":"ALB","country-code":"008","iso_3166-2":"ISO 3166-2:AL","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Algeria","alpha-2":"DZ","alpha-3":"DZA","country-code":"012","iso_3166-2":"ISO 3166-2:DZ","region":"Africa","sub-region":"Northern Africa","region-code":"002","sub-region-code":"015"},{"name":"American Samoa","alpha-2":"AS","alpha-3":"ASM","country-code":"016","iso_3166-2":"ISO 3166-2:AS","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Andorra","alpha-2":"AD","alpha-3":"AND","country-code":"020","iso_3166-2":"ISO 3166-2:AD","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Angola","alpha-2":"AO","alpha-3":"AGO","country-code":"024","iso_3166-2":"ISO 3166-2:AO","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Anguilla","alpha-2":"AI","alpha-3":"AIA","country-code":660,"iso_3166-2":"ISO 3166-2:AI","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Antarctica","alpha-2":"AQ","alpha-3":"ATA","country-code":"010","iso_3166-2":"ISO 3166-2:AQ","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Antigua and Barbuda","alpha-2":"AG","alpha-3":"ATG","country-code":"028","iso_3166-2":"ISO 3166-2:AG","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Argentina","alpha-2":"AR","alpha-3":"ARG","country-code":"032","iso_3166-2":"ISO 3166-2:AR","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Armenia","alpha-2":"AM","alpha-3":"ARM","country-code":"051","iso_3166-2":"ISO 3166-2:AM","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Aruba","alpha-2":"AW","alpha-3":"ABW","country-code":533,"iso_3166-2":"ISO 3166-2:AW","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Australia","alpha-2":"AU","alpha-3":"AUS","country-code":"036","iso_3166-2":"ISO 3166-2:AU","region":"Oceania","sub-region":"Australia and New Zealand","region-code":"009","sub-region-code":"053"},{"name":"Austria","alpha-2":"AT","alpha-3":"AUT","country-code":"040","iso_3166-2":"ISO 3166-2:AT","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"Azerbaijan","alpha-2":"AZ","alpha-3":"AZE","country-code":"031","iso_3166-2":"ISO 3166-2:AZ","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Bahamas","alpha-2":"BS","alpha-3":"BHS","country-code":"044","iso_3166-2":"ISO 3166-2:BS","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Bahrain","alpha-2":"BH","alpha-3":"BHR","country-code":"048","iso_3166-2":"ISO 3166-2:BH","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Bangladesh","alpha-2":"BD","alpha-3":"BGD","country-code":"050","iso_3166-2":"ISO 3166-2:BD","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Barbados","alpha-2":"BB","alpha-3":"BRB","country-code":"052","iso_3166-2":"ISO 3166-2:BB","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Belarus","alpha-2":"BY","alpha-3":"BLR","country-code":112,"iso_3166-2":"ISO 3166-2:BY","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Belgium","alpha-2":"BE","alpha-3":"BEL","country-code":"056","iso_3166-2":"ISO 3166-2:BE","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"Belize","alpha-2":"BZ","alpha-3":"BLZ","country-code":"084","iso_3166-2":"ISO 3166-2:BZ","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Benin","alpha-2":"BJ","alpha-3":"BEN","country-code":204,"iso_3166-2":"ISO 3166-2:BJ","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Bermuda","alpha-2":"BM","alpha-3":"BMU","country-code":"060","iso_3166-2":"ISO 3166-2:BM","region":"Americas","sub-region":"Northern America","region-code":"019","sub-region-code":"021"},{"name":"Bhutan","alpha-2":"BT","alpha-3":"BTN","country-code":"064","iso_3166-2":"ISO 3166-2:BT","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Bolivia (Plurinational State of)","alpha-2":"BO","alpha-3":"BOL","country-code":"068","iso_3166-2":"ISO 3166-2:BO","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Bonaire, Sint Eustatius and Saba","alpha-2":"BQ","alpha-3":"BES","country-code":535,"iso_3166-2":"ISO 3166-2:BQ","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Bosnia and Herzegovina","alpha-2":"BA","alpha-3":"BIH","country-code":"070","iso_3166-2":"ISO 3166-2:BA","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Botswana","alpha-2":"BW","alpha-3":"BWA","country-code":"072","iso_3166-2":"ISO 3166-2:BW","region":"Africa","sub-region":"Southern Africa","region-code":"002","sub-region-code":"018"},{"name":"Bouvet Island","alpha-2":"BV","alpha-3":"BVT","country-code":"074","iso_3166-2":"ISO 3166-2:BV","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Brazil","alpha-2":"BR","alpha-3":"BRA","country-code":"076","iso_3166-2":"ISO 3166-2:BR","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"British Indian Ocean Territory","alpha-2":"IO","alpha-3":"IOT","country-code":"086","iso_3166-2":"ISO 3166-2:IO","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Brunei Darussalam","alpha-2":"BN","alpha-3":"BRN","country-code":"096","iso_3166-2":"ISO 3166-2:BN","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Bulgaria","alpha-2":"BG","alpha-3":"BGR","country-code":100,"iso_3166-2":"ISO 3166-2:BG","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Burkina Faso","alpha-2":"BF","alpha-3":"BFA","country-code":854,"iso_3166-2":"ISO 3166-2:BF","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Burundi","alpha-2":"BI","alpha-3":"BDI","country-code":108,"iso_3166-2":"ISO 3166-2:BI","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Cambodia","alpha-2":"KH","alpha-3":"KHM","country-code":116,"iso_3166-2":"ISO 3166-2:KH","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Cameroon","alpha-2":"CM","alpha-3":"CMR","country-code":120,"iso_3166-2":"ISO 3166-2:CM","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Canada","alpha-2":"CA","alpha-3":"CAN","country-code":124,"iso_3166-2":"ISO 3166-2:CA","region":"Americas","sub-region":"Northern America","region-code":"019","sub-region-code":"021"},{"name":"Cabo Verde","alpha-2":"CV","alpha-3":"CPV","country-code":132,"iso_3166-2":"ISO 3166-2:CV","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Cayman Islands","alpha-2":"KY","alpha-3":"CYM","country-code":136,"iso_3166-2":"ISO 3166-2:KY","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Central African Republic","alpha-2":"CF","alpha-3":"CAF","country-code":140,"iso_3166-2":"ISO 3166-2:CF","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Chad","alpha-2":"TD","alpha-3":"TCD","country-code":148,"iso_3166-2":"ISO 3166-2:TD","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Chile","alpha-2":"CL","alpha-3":"CHL","country-code":152,"iso_3166-2":"ISO 3166-2:CL","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"China","alpha-2":"CN","alpha-3":"CHN","country-code":156,"iso_3166-2":"ISO 3166-2:CN","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Christmas Island","alpha-2":"CX","alpha-3":"CXR","country-code":162,"iso_3166-2":"ISO 3166-2:CX","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Cocos (Keeling) Islands","alpha-2":"CC","alpha-3":"CCK","country-code":166,"iso_3166-2":"ISO 3166-2:CC","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Colombia","alpha-2":"CO","alpha-3":"COL","country-code":170,"iso_3166-2":"ISO 3166-2:CO","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Comoros","alpha-2":"KM","alpha-3":"COM","country-code":174,"iso_3166-2":"ISO 3166-2:KM","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Congo","alpha-2":"CG","alpha-3":"COG","country-code":178,"iso_3166-2":"ISO 3166-2:CG","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Congo (Democratic Republic of the)","alpha-2":"CD","alpha-3":"COD","country-code":180,"iso_3166-2":"ISO 3166-2:CD","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Cook Islands","alpha-2":"CK","alpha-3":"COK","country-code":184,"iso_3166-2":"ISO 3166-2:CK","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Costa Rica","alpha-2":"CR","alpha-3":"CRI","country-code":188,"iso_3166-2":"ISO 3166-2:CR","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Côte d'Ivoire","alpha-2":"CI","alpha-3":"CIV","country-code":384,"iso_3166-2":"ISO 3166-2:CI","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Croatia","alpha-2":"HR","alpha-3":"HRV","country-code":191,"iso_3166-2":"ISO 3166-2:HR","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Cuba","alpha-2":"CU","alpha-3":"CUB","country-code":192,"iso_3166-2":"ISO 3166-2:CU","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Curaçao","alpha-2":"CW","alpha-3":"CUW","country-code":531,"iso_3166-2":"ISO 3166-2:CW","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Cyprus","alpha-2":"CY","alpha-3":"CYP","country-code":196,"iso_3166-2":"ISO 3166-2:CY","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Czech Republic","alpha-2":"CZ","alpha-3":"CZE","country-code":203,"iso_3166-2":"ISO 3166-2:CZ","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Denmark","alpha-2":"DK","alpha-3":"DNK","country-code":208,"iso_3166-2":"ISO 3166-2:DK","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Djibouti","alpha-2":"DJ","alpha-3":"DJI","country-code":262,"iso_3166-2":"ISO 3166-2:DJ","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Dominica","alpha-2":"DM","alpha-3":"DMA","country-code":212,"iso_3166-2":"ISO 3166-2:DM","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Dominican Republic","alpha-2":"DO","alpha-3":"DOM","country-code":214,"iso_3166-2":"ISO 3166-2:DO","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Ecuador","alpha-2":"EC","alpha-3":"ECU","country-code":218,"iso_3166-2":"ISO 3166-2:EC","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Egypt","alpha-2":"EG","alpha-3":"EGY","country-code":818,"iso_3166-2":"ISO 3166-2:EG","region":"Africa","sub-region":"Northern Africa","region-code":"002","sub-region-code":"015"},{"name":"El Salvador","alpha-2":"SV","alpha-3":"SLV","country-code":222,"iso_3166-2":"ISO 3166-2:SV","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Equatorial Guinea","alpha-2":"GQ","alpha-3":"GNQ","country-code":226,"iso_3166-2":"ISO 3166-2:GQ","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Eritrea","alpha-2":"ER","alpha-3":"ERI","country-code":232,"iso_3166-2":"ISO 3166-2:ER","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Estonia","alpha-2":"EE","alpha-3":"EST","country-code":233,"iso_3166-2":"ISO 3166-2:EE","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Ethiopia","alpha-2":"ET","alpha-3":"ETH","country-code":231,"iso_3166-2":"ISO 3166-2:ET","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Falkland Islands (Malvinas)","alpha-2":"FK","alpha-3":"FLK","country-code":238,"iso_3166-2":"ISO 3166-2:FK","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Faroe Islands","alpha-2":"FO","alpha-3":"FRO","country-code":234,"iso_3166-2":"ISO 3166-2:FO","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Fiji","alpha-2":"FJ","alpha-3":"FJI","country-code":242,"iso_3166-2":"ISO 3166-2:FJ","region":"Oceania","sub-region":"Melanesia","region-code":"009","sub-region-code":"054"},{"name":"Finland","alpha-2":"FI","alpha-3":"FIN","country-code":246,"iso_3166-2":"ISO 3166-2:FI","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"France","alpha-2":"FR","alpha-3":"FRA","country-code":250,"iso_3166-2":"ISO 3166-2:FR","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"French Guiana","alpha-2":"GF","alpha-3":"GUF","country-code":254,"iso_3166-2":"ISO 3166-2:GF","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"French Polynesia","alpha-2":"PF","alpha-3":"PYF","country-code":258,"iso_3166-2":"ISO 3166-2:PF","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"French Southern Territories","alpha-2":"TF","alpha-3":"ATF","country-code":260,"iso_3166-2":"ISO 3166-2:TF","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Gabon","alpha-2":"GA","alpha-3":"GAB","country-code":266,"iso_3166-2":"ISO 3166-2:GA","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Gambia","alpha-2":"GM","alpha-3":"GMB","country-code":270,"iso_3166-2":"ISO 3166-2:GM","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Georgia","alpha-2":"GE","alpha-3":"GEO","country-code":268,"iso_3166-2":"ISO 3166-2:GE","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Germany","alpha-2":"DE","alpha-3":"DEU","country-code":276,"iso_3166-2":"ISO 3166-2:DE","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"Ghana","alpha-2":"GH","alpha-3":"GHA","country-code":288,"iso_3166-2":"ISO 3166-2:GH","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Gibraltar","alpha-2":"GI","alpha-3":"GIB","country-code":292,"iso_3166-2":"ISO 3166-2:GI","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Greece","alpha-2":"GR","alpha-3":"GRC","country-code":300,"iso_3166-2":"ISO 3166-2:GR","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Greenland","alpha-2":"GL","alpha-3":"GRL","country-code":304,"iso_3166-2":"ISO 3166-2:GL","region":"Americas","sub-region":"Northern America","region-code":"019","sub-region-code":"021"},{"name":"Grenada","alpha-2":"GD","alpha-3":"GRD","country-code":308,"iso_3166-2":"ISO 3166-2:GD","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Guadeloupe","alpha-2":"GP","alpha-3":"GLP","country-code":312,"iso_3166-2":"ISO 3166-2:GP","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Guam","alpha-2":"GU","alpha-3":"GUM","country-code":316,"iso_3166-2":"ISO 3166-2:GU","region":"Oceania","sub-region":"Micronesia","region-code":"009","sub-region-code":"057"},{"name":"Guatemala","alpha-2":"GT","alpha-3":"GTM","country-code":320,"iso_3166-2":"ISO 3166-2:GT","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Guernsey","alpha-2":"GG","alpha-3":"GGY","country-code":831,"iso_3166-2":"ISO 3166-2:GG","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Guinea","alpha-2":"GN","alpha-3":"GIN","country-code":324,"iso_3166-2":"ISO 3166-2:GN","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Guinea-Bissau","alpha-2":"GW","alpha-3":"GNB","country-code":624,"iso_3166-2":"ISO 3166-2:GW","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Guyana","alpha-2":"GY","alpha-3":"GUY","country-code":328,"iso_3166-2":"ISO 3166-2:GY","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Haiti","alpha-2":"HT","alpha-3":"HTI","country-code":332,"iso_3166-2":"ISO 3166-2:HT","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Heard Island and McDonald Islands","alpha-2":"HM","alpha-3":"HMD","country-code":334,"iso_3166-2":"ISO 3166-2:HM","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Holy See","alpha-2":"VA","alpha-3":"VAT","country-code":336,"iso_3166-2":"ISO 3166-2:VA","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Honduras","alpha-2":"HN","alpha-3":"HND","country-code":340,"iso_3166-2":"ISO 3166-2:HN","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Hong Kong","alpha-2":"HK","alpha-3":"HKG","country-code":344,"iso_3166-2":"ISO 3166-2:HK","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Hungary","alpha-2":"HU","alpha-3":"HUN","country-code":348,"iso_3166-2":"ISO 3166-2:HU","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Iceland","alpha-2":"IS","alpha-3":"ISL","country-code":352,"iso_3166-2":"ISO 3166-2:IS","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"India","alpha-2":"IN","alpha-3":"IND","country-code":356,"iso_3166-2":"ISO 3166-2:IN","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Indonesia","alpha-2":"ID","alpha-3":"IDN","country-code":360,"iso_3166-2":"ISO 3166-2:ID","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Iran (Islamic Republic of)","alpha-2":"IR","alpha-3":"IRN","country-code":364,"iso_3166-2":"ISO 3166-2:IR","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Iraq","alpha-2":"IQ","alpha-3":"IRQ","country-code":368,"iso_3166-2":"ISO 3166-2:IQ","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Ireland","alpha-2":"IE","alpha-3":"IRL","country-code":372,"iso_3166-2":"ISO 3166-2:IE","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Isle of Man","alpha-2":"IM","alpha-3":"IMN","country-code":833,"iso_3166-2":"ISO 3166-2:IM","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Israel","alpha-2":"IL","alpha-3":"ISR","country-code":376,"iso_3166-2":"ISO 3166-2:IL","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Italy","alpha-2":"IT","alpha-3":"ITA","country-code":380,"iso_3166-2":"ISO 3166-2:IT","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Jamaica","alpha-2":"JM","alpha-3":"JAM","country-code":388,"iso_3166-2":"ISO 3166-2:JM","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Japan","alpha-2":"JP","alpha-3":"JPN","country-code":392,"iso_3166-2":"ISO 3166-2:JP","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Jersey","alpha-2":"JE","alpha-3":"JEY","country-code":832,"iso_3166-2":"ISO 3166-2:JE","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Jordan","alpha-2":"JO","alpha-3":"JOR","country-code":400,"iso_3166-2":"ISO 3166-2:JO","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Kazakhstan","alpha-2":"KZ","alpha-3":"KAZ","country-code":398,"iso_3166-2":"ISO 3166-2:KZ","region":"Asia","sub-region":"Central Asia","region-code":142,"sub-region-code":143},{"name":"Kenya","alpha-2":"KE","alpha-3":"KEN","country-code":404,"iso_3166-2":"ISO 3166-2:KE","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Kiribati","alpha-2":"KI","alpha-3":"KIR","country-code":296,"iso_3166-2":"ISO 3166-2:KI","region":"Oceania","sub-region":"Micronesia","region-code":"009","sub-region-code":"057"},{"name":"Korea (Democratic People's Republic of)","alpha-2":"KP","alpha-3":"PRK","country-code":408,"iso_3166-2":"ISO 3166-2:KP","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Korea (Republic of)","alpha-2":"KR","alpha-3":"KOR","country-code":410,"iso_3166-2":"ISO 3166-2:KR","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Kuwait","alpha-2":"KW","alpha-3":"KWT","country-code":414,"iso_3166-2":"ISO 3166-2:KW","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Kyrgyzstan","alpha-2":"KG","alpha-3":"KGZ","country-code":417,"iso_3166-2":"ISO 3166-2:KG","region":"Asia","sub-region":"Central Asia","region-code":142,"sub-region-code":143},{"name":"Lao People's Democratic Republic","alpha-2":"LA","alpha-3":"LAO","country-code":418,"iso_3166-2":"ISO 3166-2:LA","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Latvia","alpha-2":"LV","alpha-3":"LVA","country-code":428,"iso_3166-2":"ISO 3166-2:LV","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Lebanon","alpha-2":"LB","alpha-3":"LBN","country-code":422,"iso_3166-2":"ISO 3166-2:LB","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Lesotho","alpha-2":"LS","alpha-3":"LSO","country-code":426,"iso_3166-2":"ISO 3166-2:LS","region":"Africa","sub-region":"Southern Africa","region-code":"002","sub-region-code":"018"},{"name":"Liberia","alpha-2":"LR","alpha-3":"LBR","country-code":430,"iso_3166-2":"ISO 3166-2:LR","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Libya","alpha-2":"LY","alpha-3":"LBY","country-code":434,"iso_3166-2":"ISO 3166-2:LY","region":"Africa","sub-region":"Northern Africa","region-code":"002","sub-region-code":"015"},{"name":"Liechtenstein","alpha-2":"LI","alpha-3":"LIE","country-code":438,"iso_3166-2":"ISO 3166-2:LI","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"Lithuania","alpha-2":"LT","alpha-3":"LTU","country-code":440,"iso_3166-2":"ISO 3166-2:LT","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Luxembourg","alpha-2":"LU","alpha-3":"LUX","country-code":442,"iso_3166-2":"ISO 3166-2:LU","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"Macao","alpha-2":"MO","alpha-3":"MAC","country-code":446,"iso_3166-2":"ISO 3166-2:MO","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Macedonia (the former Yugoslav Republic of)","alpha-2":"MK","alpha-3":"MKD","country-code":807,"iso_3166-2":"ISO 3166-2:MK","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Madagascar","alpha-2":"MG","alpha-3":"MDG","country-code":450,"iso_3166-2":"ISO 3166-2:MG","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Malawi","alpha-2":"MW","alpha-3":"MWI","country-code":454,"iso_3166-2":"ISO 3166-2:MW","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Malaysia","alpha-2":"MY","alpha-3":"MYS","country-code":458,"iso_3166-2":"ISO 3166-2:MY","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Maldives","alpha-2":"MV","alpha-3":"MDV","country-code":462,"iso_3166-2":"ISO 3166-2:MV","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Mali","alpha-2":"ML","alpha-3":"MLI","country-code":466,"iso_3166-2":"ISO 3166-2:ML","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Malta","alpha-2":"MT","alpha-3":"MLT","country-code":470,"iso_3166-2":"ISO 3166-2:MT","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Marshall Islands","alpha-2":"MH","alpha-3":"MHL","country-code":584,"iso_3166-2":"ISO 3166-2:MH","region":"Oceania","sub-region":"Micronesia","region-code":"009","sub-region-code":"057"},{"name":"Martinique","alpha-2":"MQ","alpha-3":"MTQ","country-code":474,"iso_3166-2":"ISO 3166-2:MQ","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Mauritania","alpha-2":"MR","alpha-3":"MRT","country-code":478,"iso_3166-2":"ISO 3166-2:MR","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Mauritius","alpha-2":"MU","alpha-3":"MUS","country-code":480,"iso_3166-2":"ISO 3166-2:MU","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Mayotte","alpha-2":"YT","alpha-3":"MYT","country-code":175,"iso_3166-2":"ISO 3166-2:YT","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Mexico","alpha-2":"MX","alpha-3":"MEX","country-code":484,"iso_3166-2":"ISO 3166-2:MX","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Micronesia (Federated States of)","alpha-2":"FM","alpha-3":"FSM","country-code":583,"iso_3166-2":"ISO 3166-2:FM","region":"Oceania","sub-region":"Micronesia","region-code":"009","sub-region-code":"057"},{"name":"Moldova (Republic of)","alpha-2":"MD","alpha-3":"MDA","country-code":498,"iso_3166-2":"ISO 3166-2:MD","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Monaco","alpha-2":"MC","alpha-3":"MCO","country-code":492,"iso_3166-2":"ISO 3166-2:MC","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"Mongolia","alpha-2":"MN","alpha-3":"MNG","country-code":496,"iso_3166-2":"ISO 3166-2:MN","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Montenegro","alpha-2":"ME","alpha-3":"MNE","country-code":499,"iso_3166-2":"ISO 3166-2:ME","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Montserrat","alpha-2":"MS","alpha-3":"MSR","country-code":500,"iso_3166-2":"ISO 3166-2:MS","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Morocco","alpha-2":"MA","alpha-3":"MAR","country-code":504,"iso_3166-2":"ISO 3166-2:MA","region":"Africa","sub-region":"Northern Africa","region-code":"002","sub-region-code":"015"},{"name":"Mozambique","alpha-2":"MZ","alpha-3":"MOZ","country-code":508,"iso_3166-2":"ISO 3166-2:MZ","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Myanmar","alpha-2":"MM","alpha-3":"MMR","country-code":104,"iso_3166-2":"ISO 3166-2:MM","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Namibia","alpha-2":"NA","alpha-3":"NAM","country-code":516,"iso_3166-2":"ISO 3166-2:NA","region":"Africa","sub-region":"Southern Africa","region-code":"002","sub-region-code":"018"},{"name":"Nauru","alpha-2":"NR","alpha-3":"NRU","country-code":520,"iso_3166-2":"ISO 3166-2:NR","region":"Oceania","sub-region":"Micronesia","region-code":"009","sub-region-code":"057"},{"name":"Nepal","alpha-2":"NP","alpha-3":"NPL","country-code":524,"iso_3166-2":"ISO 3166-2:NP","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Netherlands","alpha-2":"NL","alpha-3":"NLD","country-code":528,"iso_3166-2":"ISO 3166-2:NL","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"New Caledonia","alpha-2":"NC","alpha-3":"NCL","country-code":540,"iso_3166-2":"ISO 3166-2:NC","region":"Oceania","sub-region":"Melanesia","region-code":"009","sub-region-code":"054"},{"name":"New Zealand","alpha-2":"NZ","alpha-3":"NZL","country-code":554,"iso_3166-2":"ISO 3166-2:NZ","region":"Oceania","sub-region":"Australia and New Zealand","region-code":"009","sub-region-code":"053"},{"name":"Nicaragua","alpha-2":"NI","alpha-3":"NIC","country-code":558,"iso_3166-2":"ISO 3166-2:NI","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Niger","alpha-2":"NE","alpha-3":"NER","country-code":562,"iso_3166-2":"ISO 3166-2:NE","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Nigeria","alpha-2":"NG","alpha-3":"NGA","country-code":566,"iso_3166-2":"ISO 3166-2:NG","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Niue","alpha-2":"NU","alpha-3":"NIU","country-code":570,"iso_3166-2":"ISO 3166-2:NU","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Norfolk Island","alpha-2":"NF","alpha-3":"NFK","country-code":574,"iso_3166-2":"ISO 3166-2:NF","region":"Oceania","sub-region":"Australia and New Zealand","region-code":"009","sub-region-code":"053"},{"name":"Northern Mariana Islands","alpha-2":"MP","alpha-3":"MNP","country-code":580,"iso_3166-2":"ISO 3166-2:MP","region":"Oceania","sub-region":"Micronesia","region-code":"009","sub-region-code":"057"},{"name":"Norway","alpha-2":"NO","alpha-3":"NOR","country-code":578,"iso_3166-2":"ISO 3166-2:NO","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Oman","alpha-2":"OM","alpha-3":"OMN","country-code":512,"iso_3166-2":"ISO 3166-2:OM","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Pakistan","alpha-2":"PK","alpha-3":"PAK","country-code":586,"iso_3166-2":"ISO 3166-2:PK","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Palau","alpha-2":"PW","alpha-3":"PLW","country-code":585,"iso_3166-2":"ISO 3166-2:PW","region":"Oceania","sub-region":"Micronesia","region-code":"009","sub-region-code":"057"},{"name":"Palestine, State of","alpha-2":"PS","alpha-3":"PSE","country-code":275,"iso_3166-2":"ISO 3166-2:PS","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Panama","alpha-2":"PA","alpha-3":"PAN","country-code":591,"iso_3166-2":"ISO 3166-2:PA","region":"Americas","sub-region":"Central America","region-code":"019","sub-region-code":"013"},{"name":"Papua New Guinea","alpha-2":"PG","alpha-3":"PNG","country-code":598,"iso_3166-2":"ISO 3166-2:PG","region":"Oceania","sub-region":"Melanesia","region-code":"009","sub-region-code":"054"},{"name":"Paraguay","alpha-2":"PY","alpha-3":"PRY","country-code":600,"iso_3166-2":"ISO 3166-2:PY","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Peru","alpha-2":"PE","alpha-3":"PER","country-code":604,"iso_3166-2":"ISO 3166-2:PE","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Philippines","alpha-2":"PH","alpha-3":"PHL","country-code":608,"iso_3166-2":"ISO 3166-2:PH","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Pitcairn","alpha-2":"PN","alpha-3":"PCN","country-code":612,"iso_3166-2":"ISO 3166-2:PN","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Poland","alpha-2":"PL","alpha-3":"POL","country-code":616,"iso_3166-2":"ISO 3166-2:PL","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Portugal","alpha-2":"PT","alpha-3":"PRT","country-code":620,"iso_3166-2":"ISO 3166-2:PT","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Puerto Rico","alpha-2":"PR","alpha-3":"PRI","country-code":630,"iso_3166-2":"ISO 3166-2:PR","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Qatar","alpha-2":"QA","alpha-3":"QAT","country-code":634,"iso_3166-2":"ISO 3166-2:QA","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Réunion","alpha-2":"RE","alpha-3":"REU","country-code":638,"iso_3166-2":"ISO 3166-2:RE","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Romania","alpha-2":"RO","alpha-3":"ROU","country-code":642,"iso_3166-2":"ISO 3166-2:RO","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Russian Federation","alpha-2":"RU","alpha-3":"RUS","country-code":643,"iso_3166-2":"ISO 3166-2:RU","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Rwanda","alpha-2":"RW","alpha-3":"RWA","country-code":646,"iso_3166-2":"ISO 3166-2:RW","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Saint Barthélemy","alpha-2":"BL","alpha-3":"BLM","country-code":652,"iso_3166-2":"ISO 3166-2:BL","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Saint Helena, Ascension and Tristan da Cunha","alpha-2":"SH","alpha-3":"SHN","country-code":654,"iso_3166-2":"ISO 3166-2:SH","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Saint Kitts and Nevis","alpha-2":"KN","alpha-3":"KNA","country-code":659,"iso_3166-2":"ISO 3166-2:KN","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Saint Lucia","alpha-2":"LC","alpha-3":"LCA","country-code":662,"iso_3166-2":"ISO 3166-2:LC","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Saint Martin (French part)","alpha-2":"MF","alpha-3":"MAF","country-code":663,"iso_3166-2":"ISO 3166-2:MF","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Saint Pierre and Miquelon","alpha-2":"PM","alpha-3":"SPM","country-code":666,"iso_3166-2":"ISO 3166-2:PM","region":"Americas","sub-region":"Northern America","region-code":"019","sub-region-code":"021"},{"name":"Saint Vincent and the Grenadines","alpha-2":"VC","alpha-3":"VCT","country-code":670,"iso_3166-2":"ISO 3166-2:VC","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Samoa","alpha-2":"WS","alpha-3":"WSM","country-code":882,"iso_3166-2":"ISO 3166-2:WS","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"San Marino","alpha-2":"SM","alpha-3":"SMR","country-code":674,"iso_3166-2":"ISO 3166-2:SM","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Sao Tome and Principe","alpha-2":"ST","alpha-3":"STP","country-code":678,"iso_3166-2":"ISO 3166-2:ST","region":"Africa","sub-region":"Middle Africa","region-code":"002","sub-region-code":"017"},{"name":"Saudi Arabia","alpha-2":"SA","alpha-3":"SAU","country-code":682,"iso_3166-2":"ISO 3166-2:SA","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Senegal","alpha-2":"SN","alpha-3":"SEN","country-code":686,"iso_3166-2":"ISO 3166-2:SN","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Serbia","alpha-2":"RS","alpha-3":"SRB","country-code":688,"iso_3166-2":"ISO 3166-2:RS","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Seychelles","alpha-2":"SC","alpha-3":"SYC","country-code":690,"iso_3166-2":"ISO 3166-2:SC","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Sierra Leone","alpha-2":"SL","alpha-3":"SLE","country-code":694,"iso_3166-2":"ISO 3166-2:SL","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Singapore","alpha-2":"SG","alpha-3":"SGP","country-code":702,"iso_3166-2":"ISO 3166-2:SG","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Sint Maarten (Dutch part)","alpha-2":"SX","alpha-3":"SXM","country-code":534,"iso_3166-2":"ISO 3166-2:SX","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Slovakia","alpha-2":"SK","alpha-3":"SVK","country-code":703,"iso_3166-2":"ISO 3166-2:SK","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"Slovenia","alpha-2":"SI","alpha-3":"SVN","country-code":705,"iso_3166-2":"ISO 3166-2:SI","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Solomon Islands","alpha-2":"SB","alpha-3":"SLB","country-code":"090","iso_3166-2":"ISO 3166-2:SB","region":"Oceania","sub-region":"Melanesia","region-code":"009","sub-region-code":"054"},{"name":"Somalia","alpha-2":"SO","alpha-3":"SOM","country-code":706,"iso_3166-2":"ISO 3166-2:SO","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"South Africa","alpha-2":"ZA","alpha-3":"ZAF","country-code":710,"iso_3166-2":"ISO 3166-2:ZA","region":"Africa","sub-region":"Southern Africa","region-code":"002","sub-region-code":"018"},{"name":"South Georgia and the South Sandwich Islands","alpha-2":"GS","alpha-3":"SGS","country-code":239,"iso_3166-2":"ISO 3166-2:GS","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"South Sudan","alpha-2":"SS","alpha-3":"SSD","country-code":728,"iso_3166-2":"ISO 3166-2:SS","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Spain","alpha-2":"ES","alpha-3":"ESP","country-code":724,"iso_3166-2":"ISO 3166-2:ES","region":"Europe","sub-region":"Southern Europe","region-code":150,"sub-region-code":"039"},{"name":"Sri Lanka","alpha-2":"LK","alpha-3":"LKA","country-code":144,"iso_3166-2":"ISO 3166-2:LK","region":"Asia","sub-region":"Southern Asia","region-code":142,"sub-region-code":"034"},{"name":"Sudan","alpha-2":"SD","alpha-3":"SDN","country-code":729,"iso_3166-2":"ISO 3166-2:SD","region":"Africa","sub-region":"Northern Africa","region-code":"002","sub-region-code":"015"},{"name":"Suriname","alpha-2":"SR","alpha-3":"SUR","country-code":740,"iso_3166-2":"ISO 3166-2:SR","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Svalbard and Jan Mayen","alpha-2":"SJ","alpha-3":"SJM","country-code":744,"iso_3166-2":"ISO 3166-2:SJ","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Swaziland","alpha-2":"SZ","alpha-3":"SWZ","country-code":748,"iso_3166-2":"ISO 3166-2:SZ","region":"Africa","sub-region":"Southern Africa","region-code":"002","sub-region-code":"018"},{"name":"Sweden","alpha-2":"SE","alpha-3":"SWE","country-code":752,"iso_3166-2":"ISO 3166-2:SE","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"Switzerland","alpha-2":"CH","alpha-3":"CHE","country-code":756,"iso_3166-2":"ISO 3166-2:CH","region":"Europe","sub-region":"Western Europe","region-code":150,"sub-region-code":155},{"name":"Syrian Arab Republic","alpha-2":"SY","alpha-3":"SYR","country-code":760,"iso_3166-2":"ISO 3166-2:SY","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Taiwan, Province of China","alpha-2":"TW","alpha-3":"TWN","country-code":158,"iso_3166-2":"ISO 3166-2:TW","region":"Asia","sub-region":"Eastern Asia","region-code":142,"sub-region-code":"030"},{"name":"Tajikistan","alpha-2":"TJ","alpha-3":"TJK","country-code":762,"iso_3166-2":"ISO 3166-2:TJ","region":"Asia","sub-region":"Central Asia","region-code":142,"sub-region-code":143},{"name":"Tanzania, United Republic of","alpha-2":"TZ","alpha-3":"TZA","country-code":834,"iso_3166-2":"ISO 3166-2:TZ","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Thailand","alpha-2":"TH","alpha-3":"THA","country-code":764,"iso_3166-2":"ISO 3166-2:TH","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Timor-Leste","alpha-2":"TL","alpha-3":"TLS","country-code":626,"iso_3166-2":"ISO 3166-2:TL","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Togo","alpha-2":"TG","alpha-3":"TGO","country-code":768,"iso_3166-2":"ISO 3166-2:TG","region":"Africa","sub-region":"Western Africa","region-code":"002","sub-region-code":"011"},{"name":"Tokelau","alpha-2":"TK","alpha-3":"TKL","country-code":772,"iso_3166-2":"ISO 3166-2:TK","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Tonga","alpha-2":"TO","alpha-3":"TON","country-code":776,"iso_3166-2":"ISO 3166-2:TO","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Trinidad and Tobago","alpha-2":"TT","alpha-3":"TTO","country-code":780,"iso_3166-2":"ISO 3166-2:TT","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Tunisia","alpha-2":"TN","alpha-3":"TUN","country-code":788,"iso_3166-2":"ISO 3166-2:TN","region":"Africa","sub-region":"Northern Africa","region-code":"002","sub-region-code":"015"},{"name":"Turkey","alpha-2":"TR","alpha-3":"TUR","country-code":792,"iso_3166-2":"ISO 3166-2:TR","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Turkmenistan","alpha-2":"TM","alpha-3":"TKM","country-code":795,"iso_3166-2":"ISO 3166-2:TM","region":"Asia","sub-region":"Central Asia","region-code":142,"sub-region-code":143},{"name":"Turks and Caicos Islands","alpha-2":"TC","alpha-3":"TCA","country-code":796,"iso_3166-2":"ISO 3166-2:TC","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Tuvalu","alpha-2":"TV","alpha-3":"TUV","country-code":798,"iso_3166-2":"ISO 3166-2:TV","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Uganda","alpha-2":"UG","alpha-3":"UGA","country-code":800,"iso_3166-2":"ISO 3166-2:UG","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Ukraine","alpha-2":"UA","alpha-3":"UKR","country-code":804,"iso_3166-2":"ISO 3166-2:UA","region":"Europe","sub-region":"Eastern Europe","region-code":150,"sub-region-code":151},{"name":"United Arab Emirates","alpha-2":"AE","alpha-3":"ARE","country-code":784,"iso_3166-2":"ISO 3166-2:AE","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"United Kingdom of Great Britain and Northern Ireland","alpha-2":"GB","alpha-3":"GBR","country-code":826,"iso_3166-2":"ISO 3166-2:GB","region":"Europe","sub-region":"Northern Europe","region-code":150,"sub-region-code":154},{"name":"United States of America","alpha-2":"US","alpha-3":"USA","country-code":840,"iso_3166-2":"ISO 3166-2:US","region":"Americas","sub-region":"Northern America","region-code":"019","sub-region-code":"021"},{"name":"United States Minor Outlying Islands","alpha-2":"UM","alpha-3":"UMI","country-code":581,"iso_3166-2":"ISO 3166-2:UM","region":"","sub-region":"","region-code":"","sub-region-code":""},{"name":"Uruguay","alpha-2":"UY","alpha-3":"URY","country-code":858,"iso_3166-2":"ISO 3166-2:UY","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Uzbekistan","alpha-2":"UZ","alpha-3":"UZB","country-code":860,"iso_3166-2":"ISO 3166-2:UZ","region":"Asia","sub-region":"Central Asia","region-code":142,"sub-region-code":143},{"name":"Vanuatu","alpha-2":"VU","alpha-3":"VUT","country-code":548,"iso_3166-2":"ISO 3166-2:VU","region":"Oceania","sub-region":"Melanesia","region-code":"009","sub-region-code":"054"},{"name":"Venezuela (Bolivarian Republic of)","alpha-2":"VE","alpha-3":"VEN","country-code":862,"iso_3166-2":"ISO 3166-2:VE","region":"Americas","sub-region":"South America","region-code":"019","sub-region-code":"005"},{"name":"Viet Nam","alpha-2":"VN","alpha-3":"VNM","country-code":704,"iso_3166-2":"ISO 3166-2:VN","region":"Asia","sub-region":"South-Eastern Asia","region-code":142,"sub-region-code":"035"},{"name":"Virgin Islands (British)","alpha-2":"VG","alpha-3":"VGB","country-code":"092","iso_3166-2":"ISO 3166-2:VG","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Virgin Islands (U.S.)","alpha-2":"VI","alpha-3":"VIR","country-code":850,"iso_3166-2":"ISO 3166-2:VI","region":"Americas","sub-region":"Caribbean","region-code":"019","sub-region-code":"029"},{"name":"Wallis and Futuna","alpha-2":"WF","alpha-3":"WLF","country-code":876,"iso_3166-2":"ISO 3166-2:WF","region":"Oceania","sub-region":"Polynesia","region-code":"009","sub-region-code":"061"},{"name":"Western Sahara","alpha-2":"EH","alpha-3":"ESH","country-code":732,"iso_3166-2":"ISO 3166-2:EH","region":"Africa","sub-region":"Northern Africa","region-code":"002","sub-region-code":"015"},{"name":"Yemen","alpha-2":"YE","alpha-3":"YEM","country-code":887,"iso_3166-2":"ISO 3166-2:YE","region":"Asia","sub-region":"Western Asia","region-code":142,"sub-region-code":145},{"name":"Zambia","alpha-2":"ZM","alpha-3":"ZMB","country-code":894,"iso_3166-2":"ISO 3166-2:ZM","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"},{"name":"Zimbabwe","alpha-2":"ZW","alpha-3":"ZWE","country-code":716,"iso_3166-2":"ISO 3166-2:ZW","region":"Africa","sub-region":"Eastern Africa","region-code":"002","sub-region-code":"014"}];

/***/ }),
/* 47 */
/***/ (function(module) {

module.exports = {"type":"Topology","objects":{"countries":{"type":"GeometryCollection","geometries":[{"type":"Polygon","id":"004","arcs":[[0,1,2,3,4,5]]},{"type":"MultiPolygon","id":"024","arcs":[[[6,7,8,9]],[[10,11,12]]]},{"type":"Polygon","id":"008","arcs":[[13,14,15,16,17]]},{"type":"Polygon","id":"784","arcs":[[18,19,20,21,22]]},{"type":"MultiPolygon","id":"032","arcs":[[[23,24]],[[25,26,27,28,29,30]]]},{"type":"Polygon","id":"051","arcs":[[31,32,33,34,35]]},{"type":"MultiPolygon","id":"010","arcs":[[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]]]},{"type":"Polygon","id":"260","arcs":[[44]]},{"type":"MultiPolygon","id":"036","arcs":[[[45]],[[46]]]},{"type":"Polygon","id":"040","arcs":[[47,48,49,50,51,52,53]]},{"type":"MultiPolygon","id":"031","arcs":[[[54,-35]],[[55,56,-33,57,58]]]},{"type":"Polygon","id":"108","arcs":[[59,60,61]]},{"type":"Polygon","id":"056","arcs":[[62,63,64,65,66]]},{"type":"Polygon","id":"204","arcs":[[67,68,69,70,71]]},{"type":"Polygon","id":"854","arcs":[[72,73,74,-70,75,76]]},{"type":"Polygon","id":"050","arcs":[[77,78,79]]},{"type":"Polygon","id":"100","arcs":[[80,81,82,83,84,85]]},{"type":"MultiPolygon","id":"044","arcs":[[[86]],[[87]],[[88]]]},{"type":"Polygon","id":"070","arcs":[[89,90,91]]},{"type":"Polygon","id":"112","arcs":[[92,93,94,95,96]]},{"type":"Polygon","id":"084","arcs":[[97,98,99]]},{"type":"Polygon","id":"068","arcs":[[100,101,102,103,-31]]},{"type":"Polygon","id":"076","arcs":[[-27,104,-103,105,106,107,108,109,110,111,112]]},{"type":"Polygon","id":"096","arcs":[[113,114]]},{"type":"Polygon","id":"064","arcs":[[115,116]]},{"type":"Polygon","id":"072","arcs":[[117,118,119,120]]},{"type":"Polygon","id":"140","arcs":[[121,122,123,124,125,126,127]]},{"type":"MultiPolygon","id":"124","arcs":[[[128]],[[129]],[[130]],[[131]],[[132]],[[133]],[[134]],[[135]],[[136]],[[137]],[[138,139,140,141]],[[142]],[[143]],[[144]],[[145]],[[146]],[[147]],[[148]],[[149]],[[150]],[[151]],[[152]],[[153]],[[154]],[[155]],[[156]],[[157]],[[158]],[[159]],[[160]]]},{"type":"Polygon","id":"756","arcs":[[-51,161,162,163]]},{"type":"MultiPolygon","id":"152","arcs":[[[-24,164]],[[-30,165,166,-101]]]},{"type":"MultiPolygon","id":"156","arcs":[[[167]],[[168,169,170,171,172,173,-117,174,175,176,177,-4,178,179,180,181,182,183]]]},{"type":"Polygon","id":"384","arcs":[[184,185,186,187,-73,188]]},{"type":"Polygon","id":"120","arcs":[[189,190,191,192,193,194,-128,195]]},{"type":"Polygon","id":"180","arcs":[[196,197,-60,198,199,200,201,-10,202,-13,203,-126,204]]},{"type":"Polygon","id":"178","arcs":[[-12,205,206,-196,-127,-204]]},{"type":"Polygon","id":"170","arcs":[[207,208,209,210,211,-107,212]]},{"type":"Polygon","id":"188","arcs":[[213,214,215,216]]},{"type":"Polygon","id":"192","arcs":[[217]]},{"type":"Polygon","id":"-99","arcs":[[218,219]]},{"type":"Polygon","id":"196","arcs":[[220,-220]]},{"type":"Polygon","id":"203","arcs":[[-53,221,222,223]]},{"type":"Polygon","id":"276","arcs":[[224,225,-222,-52,-164,226,227,-64,228,229,230]]},{"type":"Polygon","id":"262","arcs":[[231,232,233,234]]},{"type":"MultiPolygon","id":"208","arcs":[[[235]],[[-231,236]]]},{"type":"Polygon","id":"214","arcs":[[237,238]]},{"type":"Polygon","id":"012","arcs":[[239,240,241,242,243,244,245,246]]},{"type":"Polygon","id":"218","arcs":[[247,-208,248]]},{"type":"Polygon","id":"818","arcs":[[249,250,251,252,253]]},{"type":"Polygon","id":"232","arcs":[[254,255,256,-235]]},{"type":"Polygon","id":"724","arcs":[[257,258,259,260]]},{"type":"Polygon","id":"233","arcs":[[261,262,263]]},{"type":"Polygon","id":"231","arcs":[[-234,264,265,266,267,268,269,-255]]},{"type":"Polygon","id":"246","arcs":[[270,271,272,273]]},{"type":"MultiPolygon","id":"242","arcs":[[[274]],[[275]]]},{"type":"Polygon","id":"238","arcs":[[276]]},{"type":"MultiPolygon","id":"250","arcs":[[[277,278,279,-111]],[[280]],[[281,-227,-163,282,283,-259,284,-66]]]},{"type":"Polygon","id":"266","arcs":[[285,286,-190,-207]]},{"type":"MultiPolygon","id":"826","arcs":[[[287,288]],[[289]]]},{"type":"Polygon","id":"268","arcs":[[290,291,-58,-32,292]]},{"type":"Polygon","id":"288","arcs":[[293,-189,-77,294]]},{"type":"Polygon","id":"324","arcs":[[295,296,297,298,299,300,-187]]},{"type":"Polygon","id":"270","arcs":[[301,302]]},{"type":"Polygon","id":"624","arcs":[[303,304,-299]]},{"type":"Polygon","id":"226","arcs":[[305,-191,-287]]},{"type":"MultiPolygon","id":"300","arcs":[[[306]],[[307,-15,308,-84,309]]]},{"type":"Polygon","id":"304","arcs":[[310]]},{"type":"Polygon","id":"320","arcs":[[311,312,-100,313,314,315]]},{"type":"Polygon","id":"328","arcs":[[316,317,-109,318]]},{"type":"Polygon","id":"340","arcs":[[319,320,-315,321,322]]},{"type":"Polygon","id":"191","arcs":[[323,-92,324,325,326,327]]},{"type":"Polygon","id":"332","arcs":[[-239,328]]},{"type":"Polygon","id":"348","arcs":[[-48,329,330,331,332,-328,333]]},{"type":"MultiPolygon","id":"360","arcs":[[[334]],[[335,336]],[[337]],[[338]],[[339]],[[340]],[[341]],[[342]],[[343,344]],[[345]],[[346]],[[347,348]],[[349]]]},{"type":"Polygon","id":"356","arcs":[[-177,350,-175,-116,-174,351,-80,352,353]]},{"type":"Polygon","id":"372","arcs":[[354,-288]]},{"type":"Polygon","id":"364","arcs":[[355,-6,356,357,358,359,-55,-34,-57,360]]},{"type":"Polygon","id":"368","arcs":[[361,362,363,364,365,366,-359]]},{"type":"Polygon","id":"352","arcs":[[367]]},{"type":"Polygon","id":"376","arcs":[[368,369,370,-254,371,372,373]]},{"type":"MultiPolygon","id":"380","arcs":[[[374]],[[375]],[[376,377,-283,-162,-50]]]},{"type":"Polygon","id":"388","arcs":[[378]]},{"type":"Polygon","id":"400","arcs":[[-369,379,-365,380,381,-371,382]]},{"type":"MultiPolygon","id":"392","arcs":[[[383]],[[384]],[[385]]]},{"type":"Polygon","id":"398","arcs":[[386,387,388,389,-181,390]]},{"type":"Polygon","id":"404","arcs":[[391,392,393,394,-267,395]]},{"type":"Polygon","id":"417","arcs":[[-391,-180,396,397]]},{"type":"Polygon","id":"116","arcs":[[398,399,400,401]]},{"type":"Polygon","id":"410","arcs":[[402,403]]},{"type":"Polygon","id":"-99","arcs":[[-18,404,405,406]]},{"type":"Polygon","id":"414","arcs":[[407,408,-363]]},{"type":"Polygon","id":"418","arcs":[[409,410,-172,411,-400]]},{"type":"Polygon","id":"422","arcs":[[-373,412,413]]},{"type":"Polygon","id":"430","arcs":[[414,415,-296,-186]]},{"type":"Polygon","id":"434","arcs":[[416,-247,417,418,-252,419,420]]},{"type":"Polygon","id":"144","arcs":[[421]]},{"type":"Polygon","id":"426","arcs":[[422]]},{"type":"Polygon","id":"440","arcs":[[423,424,425,-93,426]]},{"type":"Polygon","id":"442","arcs":[[-228,-282,-65]]},{"type":"Polygon","id":"428","arcs":[[427,-264,428,-94,-426]]},{"type":"Polygon","id":"504","arcs":[[-244,429,430]]},{"type":"Polygon","id":"498","arcs":[[431,432]]},{"type":"Polygon","id":"450","arcs":[[433]]},{"type":"Polygon","id":"484","arcs":[[434,-98,-313,435,436]]},{"type":"Polygon","id":"807","arcs":[[-407,437,-85,-309,-14]]},{"type":"Polygon","id":"466","arcs":[[438,-241,439,-74,-188,-301,440]]},{"type":"Polygon","id":"104","arcs":[[441,-78,-352,-173,-411,442]]},{"type":"Polygon","id":"499","arcs":[[443,-325,-91,444,-405,-17]]},{"type":"Polygon","id":"496","arcs":[[445,-183]]},{"type":"Polygon","id":"508","arcs":[[446,447,448,449,450,451,452,453]]},{"type":"Polygon","id":"478","arcs":[[454,455,456,-242,-439]]},{"type":"Polygon","id":"454","arcs":[[-454,457,458]]},{"type":"MultiPolygon","id":"458","arcs":[[[459,460]],[[-348,461,-115,462]]]},{"type":"Polygon","id":"516","arcs":[[463,-8,464,-119,465]]},{"type":"Polygon","id":"540","arcs":[[466]]},{"type":"Polygon","id":"562","arcs":[[-75,-440,-240,-417,467,-194,468,-71]]},{"type":"Polygon","id":"566","arcs":[[469,-72,-469,-193]]},{"type":"Polygon","id":"558","arcs":[[470,-323,471,-215]]},{"type":"Polygon","id":"528","arcs":[[-229,-63,472]]},{"type":"MultiPolygon","id":"578","arcs":[[[473,-274,474,475]],[[476]],[[477]],[[478]]]},{"type":"Polygon","id":"524","arcs":[[-351,-176]]},{"type":"MultiPolygon","id":"554","arcs":[[[479]],[[480]]]},{"type":"MultiPolygon","id":"512","arcs":[[[481,482,-22,483]],[[-20,484]]]},{"type":"Polygon","id":"586","arcs":[[-178,-354,485,-357,-5]]},{"type":"Polygon","id":"591","arcs":[[486,-217,487,-210]]},{"type":"Polygon","id":"604","arcs":[[-167,488,-249,-213,-106,-102]]},{"type":"MultiPolygon","id":"608","arcs":[[[489]],[[490]],[[491]],[[492]],[[493]],[[494]],[[495]]]},{"type":"MultiPolygon","id":"598","arcs":[[[496]],[[497]],[[-344,498]],[[499]]]},{"type":"Polygon","id":"616","arcs":[[-226,500,501,-427,-97,502,503,-223]]},{"type":"Polygon","id":"630","arcs":[[504]]},{"type":"Polygon","id":"408","arcs":[[505,506,-404,507,-169]]},{"type":"Polygon","id":"620","arcs":[[-261,508]]},{"type":"Polygon","id":"600","arcs":[[-104,-105,-26]]},{"type":"Polygon","id":"275","arcs":[[-383,-370]]},{"type":"Polygon","id":"634","arcs":[[509,510]]},{"type":"Polygon","id":"642","arcs":[[511,-433,512,513,-81,514,-332]]},{"type":"MultiPolygon","id":"643","arcs":[[[515]],[[-502,516,-424]],[[517]],[[518]],[[519]],[[520]],[[521]],[[-506,-184,-446,-182,-390,522,-59,-292,523,524,-95,-429,-263,525,-271,-474,526]],[[527]],[[528]],[[529]]]},{"type":"Polygon","id":"646","arcs":[[530,-61,-198,531]]},{"type":"Polygon","id":"732","arcs":[[-243,-457,532,-430]]},{"type":"Polygon","id":"682","arcs":[[533,-381,-364,-409,534,-511,535,-23,-483,536]]},{"type":"Polygon","id":"729","arcs":[[537,538,-123,539,-420,-251,540,-256,-270,541]]},{"type":"Polygon","id":"728","arcs":[[542,-268,-395,543,-205,-125,544,-538]]},{"type":"Polygon","id":"686","arcs":[[545,-455,-441,-300,-305,546,-303]]},{"type":"MultiPolygon","id":"090","arcs":[[[547]],[[548]],[[549]],[[550]],[[551]]]},{"type":"Polygon","id":"694","arcs":[[552,-297,-416]]},{"type":"Polygon","id":"222","arcs":[[553,-316,-321]]},{"type":"Polygon","id":"-99","arcs":[[-265,-233,554,555]]},{"type":"Polygon","id":"706","arcs":[[-396,-266,-556,556]]},{"type":"Polygon","id":"688","arcs":[[-86,-438,-406,-445,-90,-324,-333,-515]]},{"type":"Polygon","id":"740","arcs":[[557,-279,558,-110,-318]]},{"type":"Polygon","id":"703","arcs":[[-504,559,-330,-54,-224]]},{"type":"Polygon","id":"705","arcs":[[-49,-334,-327,560,-377]]},{"type":"Polygon","id":"752","arcs":[[-475,-273,561]]},{"type":"Polygon","id":"748","arcs":[[562,-450]]},{"type":"Polygon","id":"760","arcs":[[-380,-374,-414,563,564,-366]]},{"type":"Polygon","id":"148","arcs":[[-468,-421,-540,-122,-195]]},{"type":"Polygon","id":"768","arcs":[[565,-295,-76,-69]]},{"type":"Polygon","id":"764","arcs":[[566,-461,567,-443,-410,-399]]},{"type":"Polygon","id":"762","arcs":[[-397,-179,-3,568]]},{"type":"Polygon","id":"795","arcs":[[-356,569,-388,570,-1]]},{"type":"Polygon","id":"626","arcs":[[571,-336]]},{"type":"Polygon","id":"780","arcs":[[572]]},{"type":"Polygon","id":"788","arcs":[[-246,573,-418]]},{"type":"MultiPolygon","id":"792","arcs":[[[-293,-36,-360,-367,-565,574]],[[-310,-83,575]]]},{"type":"Polygon","id":"158","arcs":[[576]]},{"type":"Polygon","id":"834","arcs":[[-393,577,-447,-459,578,-201,579,-199,-62,-531,580]]},{"type":"Polygon","id":"800","arcs":[[-532,-197,-544,-394,-581]]},{"type":"Polygon","id":"804","arcs":[[-525,581,-513,-432,-512,-331,-560,-503,-96]]},{"type":"Polygon","id":"858","arcs":[[-113,582,-28]]},{"type":"MultiPolygon","id":"840","arcs":[[[583]],[[584]],[[585]],[[586]],[[587]],[[588,-437,589,-139]],[[590]],[[591]],[[592]],[[-141,593]]]},{"type":"Polygon","id":"860","arcs":[[-571,-387,-398,-569,-2]]},{"type":"Polygon","id":"862","arcs":[[594,-319,-108,-212]]},{"type":"Polygon","id":"704","arcs":[[595,-401,-412,-171]]},{"type":"MultiPolygon","id":"548","arcs":[[[596]],[[597]]]},{"type":"Polygon","id":"887","arcs":[[598,-537,-482]]},{"type":"Polygon","id":"710","arcs":[[-466,-118,599,-451,-563,-449,600],[-423]]},{"type":"Polygon","id":"894","arcs":[[-458,-453,601,-120,-465,-7,-202,-579]]},{"type":"Polygon","id":"716","arcs":[[-600,-121,-602,-452]]}]},"land":{"type":"GeometryCollection","geometries":[{"type":"MultiPolygon","arcs":[[[595,401,566,459,567,441,78,352,485,357,361,407,534,509,535,18,484,20,483,598,533,381,249,540,256,231,554,556,391,577,447,600,463,8,202,10,205,285,305,191,469,67,565,293,184,414,552,297,303,546,301,545,455,532,430,244,573,418,252,371,412,563,574,290,523,581,513,81,575,307,15,443,325,560,377,283,259,508,257,284,66,472,229,236,224,500,516,424,427,261,525,271,561,475,526,506,402,507,169],[123,544,538],[199,579],[542,268,541],[388,522,55,360,569]],[[24,164]],[[582,28,165,488,247,208,486,213,470,319,553,311,435,589,139,593,141,588,434,98,313,321,471,215,487,210,594,316,557,279,111],[558,277]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[86]],[[87]],[[88]],[[461,113,462,348]],[[128]],[[129]],[[130]],[[131]],[[132]],[[133]],[[134]],[[135]],[[136]],[[137]],[[142]],[[143]],[[144]],[[145]],[[146]],[[147]],[[148]],[[149]],[[150]],[[151]],[[152]],[[153]],[[154]],[[155]],[[156]],[[157]],[[158]],[[159]],[[160]],[[167]],[[217]],[[218,220]],[[235]],[[237,328]],[[274]],[[275]],[[276]],[[280]],[[288,354]],[[289]],[[306]],[[310]],[[334]],[[336,571]],[[337]],[[338]],[[339]],[[340]],[[341]],[[342]],[[344,498]],[[345]],[[346]],[[349]],[[367]],[[374]],[[375]],[[378]],[[383]],[[384]],[[385]],[[421]],[[433]],[[466]],[[476]],[[477]],[[478]],[[479]],[[480]],[[489]],[[490]],[[491]],[[492]],[[493]],[[494]],[[495]],[[496]],[[497]],[[499]],[[504]],[[515]],[[517]],[[518]],[[519]],[[520]],[[521]],[[527]],[[528]],[[529]],[[547]],[[548]],[[549]],[[550]],[[551]],[[572]],[[576]],[[583]],[[584]],[[585]],[[586]],[[587]],[[590]],[[591]],[[592]],[[596]],[[597]]]}]}},"arcs":[[[67002,71642],[284,-224],[209,79],[58,268],[219,89],[157,180],[55,472],[234,114],[44,211],[131,-158],[84,-19]],[[68477,72654],[154,-4],[210,-124]],[[68841,72526],[85,-72],[201,189],[93,-114],[90,271],[166,-12],[43,86],[29,239],[120,205],[150,-134],[-30,-181],[84,-28],[-26,-496],[110,-194],[97,125],[123,58],[173,265],[192,-44],[286,-1]],[[70827,72688],[50,-169]],[[70877,72519],[-162,-67],[-141,-109],[-319,-68],[-298,-124],[-163,-258],[66,-250],[32,-294],[-139,-248],[12,-227],[-76,-213],[-265,18],[110,-390],[-177,-150],[-118,-356],[15,-355],[-108,-166],[-103,55],[-212,-77],[-31,-166],[-207,1],[-154,-334],[-10,-503],[-361,-246],[-194,52],[-56,-129],[-166,75],[-278,-88],[-465,301]],[[66909,68203],[252,536],[-23,380],[-210,100],[-22,375],[-91,472],[119,323],[-121,87],[76,430],[113,736]],[[56642,44124],[29,-184],[-32,-286],[49,-277],[-41,-222],[24,-203],[-579,7],[-13,-1880],[188,-483],[181,-369]],[[56448,40227],[-510,-241],[-673,83],[-192,284],[-1126,-26],[-42,-41],[-166,267],[-180,17],[-166,-100],[-134,-113]],[[53259,40357],[-26,372],[38,519],[96,541],[15,254],[90,532],[66,243],[159,386],[90,263],[29,438],[-15,335],[-83,211],[-74,358],[-68,355],[15,122],[85,235],[-84,570],[-57,396],[-139,374],[26,115]],[[53422,46976],[115,79],[80,-11],[98,71],[820,-8],[68,-440],[80,-354],[64,-191],[106,-309],[184,47],[91,83],[154,-83],[42,148],[69,344],[172,23],[15,103],[142,2],[-24,-213],[337,5],[5,-372],[56,-228],[-41,-356],[21,-363],[93,-219],[-15,-703],[68,54],[121,-15],[172,89],[127,-35]],[[53383,47159],[-74,444]],[[53309,47603],[112,255],[84,100],[104,-203]],[[53609,47755],[-101,-124],[-45,-152],[-9,-258],[-71,-62]],[[55719,75309],[-35,-201],[39,-254],[115,-144]],[[55838,74710],[-5,-155],[-91,-85],[-16,-192],[-129,-287]],[[55597,73991],[-48,41],[-5,130],[-154,199],[-24,281],[23,403],[38,184],[-47,93]],[[55380,75322],[-18,188],[120,291],[18,-111],[75,52]],[[55575,75742],[59,-159],[66,-60],[19,-214]],[[64327,64904],[49,29],[11,-162],[217,93],[230,-15],[168,-18],[190,400],[207,379],[176,364]],[[65575,65974],[52,-202]],[[65627,65772],[38,-466]],[[65665,65306],[-142,-3],[-23,-384],[50,-82],[-126,-117],[-1,-241],[-81,-245],[-7,-238]],[[65335,63996],[-56,-125],[-835,298],[-106,599],[-11,136]],[[31400,18145],[-168,16],[-297,1],[0,1319]],[[30935,19481],[106,-274],[139,-443],[361,-355],[389,-147],[-125,-296],[-264,-29],[-141,208]],[[32587,37434],[511,-964],[227,-89],[339,-437],[286,-231],[40,-261],[-273,-898],[280,-160],[312,-91],[220,95],[252,453],[45,521]],[[34826,35372],[138,114],[139,-341],[-6,-472],[-234,-326],[-186,-241],[-314,-573],[-370,-806]],[[33993,32727],[-70,-473],[-74,-607],[3,-588],[-61,-132],[-21,-382]],[[33770,30545],[-19,-308],[353,-506],[-38,-408],[173,-257],[-14,-289],[-267,-757],[-412,-317],[-557,-123],[-305,59],[59,-352],[-57,-442],[51,-298],[-167,-208],[-284,-82],[-267,216],[-108,-155],[39,-587],[188,-178],[152,186],[82,-307],[-255,-183],[-223,-367],[-41,-595],[-66,-316],[-262,-2],[-218,-302],[-80,-443],[273,-433],[266,-119],[-96,-531],[-328,-333],[-180,-692],[-254,-234],[-113,-276],[89,-614],[185,-342],[-117,30]],[[30952,19680],[-257,93],[-672,79],[-115,344],[6,443],[-185,-38],[-98,214],[-24,626],[213,260],[88,375],[-33,299],[148,504],[101,782],[-30,347],[122,112],[-30,223],[-129,118],[92,248],[-126,224],[-65,682],[112,120],[-47,720],[65,605],[75,527],[166,215],[-84,576],[-1,543],[210,386],[-7,494],[159,576],[1,544],[-72,108],[-128,1020],[171,607],[-27,572],[100,537],[182,555],[196,367],[-83,232],[58,190],[-9,985],[302,291],[96,614],[-34,148]],[[31359,37147],[231,534],[364,-144],[163,-427],[109,475],[316,-24],[45,-127]],[[62106,74858],[386,92]],[[62492,74950],[57,-155],[106,-103],[-56,-148],[148,-202],[-78,-189],[118,-160],[124,-97],[7,-410]],[[62918,73486],[-101,-17]],[[62817,73469],[-113,342],[1,91],[-123,-2],[-82,159],[-58,-16]],[[62442,74043],[-109,172],[-207,147],[27,288],[-47,208]],[[33452,3290],[-82,-301],[-81,-266],[-582,81],[-621,-35],[-348,197],[0,23],[-152,174],[625,-23],[599,-58],[207,243],[147,208],[288,-243]],[[5775,3611],[-533,-81],[-364,208],[-163,209],[-11,35],[-180,162],[169,220],[517,-93],[277,-185],[212,-209],[76,-266]],[[37457,4468],[342,-255],[120,-359],[33,-254],[11,-301],[-430,-186],[-452,-150],[-522,-139],[-582,-116],[-658,35],[-365,197],[49,243],[593,162],[239,197],[174,254],[126,220],[168,209],[180,243],[141,0],[414,127],[419,-127]],[[16330,7154],[359,-93],[332,104],[-158,-208],[-261,-151],[-386,47],[-278,208],[60,197],[332,-104]],[[15122,7165],[425,-231],[-164,23],[-359,58],[-381,162],[202,127],[277,-139]],[[22505,8080],[305,-81],[304,69],[163,-335],[-217,46],[-337,-23],[-343,23],[-376,-35],[-283,116],[-146,243],[174,104],[353,-81],[403,-46]],[[30985,8657],[33,-266],[-49,-231],[-76,-220],[-326,-81],[-311,-116],[-364,11],[136,232],[-327,-81],[-310,-81],[-212,174],[-16,243],[305,231],[190,70],[321,-23],[82,301],[16,219],[-6,475],[158,278],[256,93],[147,-220],[65,-220],[120,-267],[92,-254],[76,-267]],[[0,529],[16,-5],[245,344],[501,-185],[32,21],[294,188],[38,-7],[32,-4],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[-99520,-142]],[[69148,21851],[179,-186],[263,-74],[9,-112],[-77,-269],[-427,-38],[-7,314],[41,244],[19,121]],[[90387,26479],[269,-204],[151,81],[217,113],[166,-39],[20,-702],[-95,-203],[-29,-476],[-97,162],[-193,-412],[-57,32],[-171,19],[-171,505],[-38,390],[-160,515],[7,271],[181,-52]],[[89877,42448],[100,-464],[179,223],[92,-250],[133,-231],[-29,-262],[60,-506],[42,-295],[70,-72],[75,-505],[-27,-307],[90,-400],[301,-309],[197,-281],[186,-257],[-37,-143],[159,-371],[108,-639],[111,130],[113,-256],[68,91],[48,-626],[197,-363],[129,-226],[217,-478],[78,-475],[7,-337],[-19,-365],[132,-502],[-16,-523],[-48,-274],[-75,-527],[6,-339],[-55,-423],[-123,-538],[-205,-290],[-102,-458],[-93,-292],[-82,-510],[-107,-294],[-70,-442],[-36,-407],[14,-187],[-159,-205],[-311,-22],[-257,-242],[-127,-229],[-168,-254],[-230,262],[-170,104],[43,308],[-152,-112],[-243,-428],[-240,160],[-158,94],[-159,42],[-269,171],[-179,364],[-52,449],[-64,298],[-137,240],[-267,71],[91,287],[-67,438],[-136,-408],[-247,-109],[146,327],[42,341],[107,289],[-22,438],[-226,-504],[-174,-202],[-106,-470],[-217,243],[9,313],[-174,429],[-147,221],[52,137],[-356,358],[-195,17],[-267,287],[-498,-56],[-359,-211],[-317,-197],[-265,39],[-294,-303],[-241,-137],[-53,-309],[-103,-240],[-236,-15],[-174,-52],[-246,107],[-199,-64],[-191,-27],[-165,-315],[-81,26],[-140,-167],[-133,-187],[-203,23],[-186,0],[-295,377],[-149,113],[6,338],[138,81],[47,134],[-10,212],[34,411],[-31,350],[-147,598],[-45,337],[12,336],[-111,385],[-7,174],[-123,235],[-35,463],[-158,467],[-39,252],[122,-255],[-93,548],[137,-171],[83,-229],[-5,303],[-138,465],[-26,186],[-65,177],[31,341],[56,146],[38,295],[-29,346],[114,425],[21,-450],[118,406],[225,198],[136,252],[212,217],[126,46],[77,-73],[219,220],[168,66],[42,129],[74,54],[153,-14],[292,173],[151,262],[71,316],[163,300],[13,236],[7,321],[194,502],[117,-510],[119,118],[-99,279],[87,287],[122,-128],[34,449],[152,291],[67,233],[140,101],[4,165],[122,-69],[5,148],[122,85],[134,80],[205,-271],[155,-350],[173,-4],[177,-56],[-59,325],[133,473],[126,155],[-44,147],[121,338],[168,208],[142,-70],[234,111],[-5,302],[-204,195],[148,86],[184,-147],[148,-242],[234,-151],[79,60],[172,-182],[162,169],[105,-51],[65,113],[127,-292],[-74,-316],[-105,-239],[-96,-20],[32,-236],[-81,-295],[-99,-291],[20,-166],[221,-327],[214,-189],[143,-204],[201,-350],[78,1],[145,-151],[43,-183],[265,-200],[183,202],[55,317],[56,262],[34,324],[85,470],[-39,286],[20,171],[-32,339],[37,445],[53,120],[-43,197],[67,313],[52,325],[7,168],[104,222],[78,-289],[19,-371],[70,-71],[11,-249],[101,-300],[21,-335],[-10,-214]],[[54716,79012],[-21,-241],[-156,-2],[53,-128],[-92,-380]],[[54500,78261],[-53,-100],[-243,-14],[-140,-134],[-229,45]],[[53835,78058],[-398,153],[-62,205],[-274,-102],[-32,-113],[-169,84]],[[52900,78285],[-142,16],[-125,108],[42,145],[-10,104]],[[52665,78658],[83,33],[141,-164],[39,156],[245,-25],[199,106],[133,-18],[87,-121],[26,100],[-40,385],[100,75],[98,272]],[[53776,79457],[206,-190],[157,242],[98,44],[215,-180],[131,30],[128,-111]],[[54711,79292],[-23,-75],[28,-205]],[[62817,73469],[-190,78],[-141,273],[-44,223]],[[63495,75281],[146,-311],[141,-419],[130,-28],[85,-159],[-228,-47],[-49,-459],[-48,-207],[-101,-138],[7,-293]],[[63578,73220],[-69,-29],[-173,309],[95,292],[-82,174],[-104,-44],[-327,-436]],[[62492,74950],[68,96],[207,-169],[149,-36],[38,70],[-136,319],[72,82]],[[62890,75312],[78,-20],[191,-359],[122,-40],[48,150],[166,238]],[[58149,47921],[-17,713],[-70,268]],[[58062,48902],[169,-46],[85,336],[147,-38]],[[58463,49154],[16,-233],[60,-134],[3,-192],[-69,-124],[-108,-308],[-101,-214],[-115,-28]],[[50920,80916],[204,-47],[257,123],[176,-258],[153,-138]],[[51710,80596],[-32,-400]],[[51678,80196],[-72,-22],[-30,-331]],[[51576,79843],[-243,269],[-143,-46],[-194,279],[-129,237],[-129,10],[-40,207]],[[50698,80799],[222,117]],[[50747,54278],[-229,-69]],[[50518,54209],[-69,407],[13,1357],[-56,122],[-11,290],[-96,207],[-85,174],[35,311]],[[50249,57077],[96,67],[56,258],[136,56],[61,176]],[[50598,57634],[93,173],[100,2],[212,-340]],[[51003,57469],[-11,-197],[62,-350],[-54,-238],[29,-159],[-135,-366],[-86,-181],[-52,-372],[7,-376],[-16,-952]],[[49214,56277],[-190,152],[-130,-22],[-97,-149],[-125,125],[-49,195],[-125,129]],[[48498,56707],[-18,343],[76,250],[-7,200],[221,490],[41,405],[76,144],[134,-79],[116,120],[38,152],[216,265],[53,184],[259,246],[153,84],[70,-114],[178,3]],[[50104,59400],[-22,-286],[37,-269],[156,-386],[9,-286],[320,-134],[-6,-405]],[[50249,57077],[-243,13]],[[50006,57090],[-128,47],[-90,-96],[-123,43],[-482,-27],[-7,-336],[38,-444]],[[75742,63602],[-6,-424],[-97,90],[18,-476]],[[75657,62792],[-79,308],[-16,301],[-53,285],[-116,344],[-256,23],[25,-243],[-87,-329],[-118,120],[-41,-108],[-78,65],[-108,53]],[[74730,63611],[-43,486],[-96,444],[47,356],[-171,159],[62,215],[173,220],[-200,313],[98,401],[220,-255],[133,-30],[24,-410],[265,-81],[257,8],[160,-101],[-128,-500],[-124,-34],[-86,-336],[152,-306],[46,377],[76,2],[147,-937]],[[56293,76715],[80,-243],[108,43],[213,-92],[408,-31],[138,150],[327,138],[202,-215],[163,-62]],[[57932,76403],[-144,-245],[-101,-422],[89,-337]],[[57776,75399],[-239,79],[-283,-186]],[[57254,75292],[-3,-294],[-252,-56],[-196,206],[-222,-162],[-206,17]],[[56375,75003],[-20,391],[-139,189]],[[56216,75583],[46,84],[-30,70],[47,188],[105,185],[-135,255],[-24,216],[68,134]],[[28462,64617],[-68,-29],[-70,340],[-104,171],[60,375],[84,-23],[97,-491],[1,-343]],[[28383,66284],[-303,-95],[-19,219],[130,47],[184,-18],[8,-153]],[[28611,66290],[-48,-420],[-51,75],[4,309],[-124,234],[-1,67],[220,-265]],[[55279,77084],[100,2],[-69,-260],[134,-227],[-41,-278],[-65,-27]],[[55338,76294],[-52,-53],[-90,-138],[-41,-325]],[[55155,75778],[-246,224],[-105,247],[-106,130],[-127,221],[-61,183],[-136,277],[59,245],[99,-136],[60,123],[130,13],[239,-98],[192,8],[126,-131]],[[56523,82432],[268,-4],[302,223],[64,333],[228,190],[-26,264]],[[57359,83438],[169,100],[298,228]],[[57826,83766],[293,-149],[39,-146],[146,70],[272,-141],[27,-277],[-60,-159],[174,-387],[113,-108],[-16,-107],[187,-104],[80,-157],[-108,-129],[-224,20],[-54,-55],[66,-196],[68,-379]],[[58829,81362],[-239,-35],[-85,-129],[-18,-298],[-111,57],[-250,-28],[-73,138],[-104,-103],[-105,86],[-218,12],[-310,141],[-281,47],[-215,-14],[-152,-160],[-133,-23]],[[56535,81053],[-6,263],[-85,274],[166,121],[2,235],[-77,225],[-12,261]],[[25238,61101],[-2,87],[33,27],[51,-70],[99,357],[53,8]],[[25472,61510],[1,-87],[53,-3],[-5,-160],[-45,-256],[24,-91],[-29,-212],[18,-56],[-32,-299],[-55,-156],[-50,-19],[-55,-205]],[[25297,59966],[-83,0],[22,667],[2,468]],[[31359,37147],[-200,-81],[-109,814],[-150,663],[88,572],[-146,250],[-37,426],[-136,402]],[[30669,40193],[175,638],[-119,496],[63,199],[-49,219],[108,295],[6,503],[13,415],[60,200],[-240,951]],[[30686,44109],[206,-50],[143,13],[62,179],[243,239],[147,222],[363,100],[-29,-443],[34,-227],[-23,-396],[302,-529],[311,-98],[109,-220],[188,-117],[115,-172],[175,6],[161,-175],[12,-342],[55,-172],[3,-255],[-81,-10],[107,-688],[533,-24],[-41,-342],[30,-233],[151,-166],[66,-367],[-49,-465],[-77,-259],[27,-337],[-87,-122]],[[33842,38659],[-4,182],[-259,302],[-258,9],[-484,-172],[-133,-520],[-7,-318],[-110,-708]],[[34826,35372],[54,341],[38,350],[0,325],[-100,107],[-104,-96],[-103,26],[-33,228],[-26,541],[-52,177],[-187,160],[-114,-116],[-293,113],[18,802],[-82,329]],[[30686,44109],[-157,-102],[-126,68],[18,898],[-228,-348],[-245,15],[-105,315],[-184,34],[59,254],[-155,359],[-115,532],[73,108],[0,250],[168,171],[-28,319],[71,206],[20,275],[318,402],[227,114],[37,89],[251,-28]],[[30585,48040],[125,1620],[6,256],[-43,339],[-123,215],[1,430],[156,97],[56,-61],[9,226],[-162,61],[-4,370],[541,-13],[92,203],[77,-187],[55,-349],[52,73]],[[31423,51320],[153,-312],[216,38],[54,181],[206,138],[115,97],[32,250],[198,168],[-15,124],[-235,51],[-39,372],[12,396],[-125,153],[52,55],[206,-76],[221,-148],[80,140],[200,92],[310,221],[102,225],[-37,167]],[[33129,53652],[145,26],[64,-136],[-36,-259],[96,-90],[63,-274],[-77,-209],[-44,-502],[71,-299],[20,-274],[171,-277],[137,-29],[30,116],[88,25],[126,104],[90,157],[154,-50],[67,21]],[[34294,51702],[151,-48],[25,120],[-46,118],[28,171],[112,-53],[131,61],[159,-125]],[[34854,51946],[121,-122],[86,160],[62,-25],[38,-166],[133,42],[107,224],[85,436],[164,540]],[[35650,53035],[95,28],[69,-327],[155,-1033],[149,-97],[7,-408],[-208,-487],[86,-178],[491,-92],[10,-593],[211,388],[349,-212],[462,-361],[135,-346],[-45,-327],[323,182],[540,-313],[415,23],[411,-489],[355,-662],[214,-170],[237,-24],[101,-186],[94,-752],[46,-358],[-110,-977],[-142,-385],[-391,-822],[-177,-668],[-206,-513],[-69,-11],[-78,-435],[20,-1107],[-77,-910],[-30,-390],[-88,-233],[-49,-790],[-282,-771],[-47,-610],[-225,-256],[-65,-355],[-302,2],[-437,-227],[-195,-263],[-311,-173],[-327,-470],[-235,-586],[-41,-441],[46,-326],[-51,-597],[-63,-289],[-195,-325],[-308,-1040],[-244,-468],[-189,-277],[-127,-562],[-183,-337]],[[35174,30629],[-77,334],[122,280],[-160,402],[-218,327],[-286,379],[-103,-18],[-279,457],[-180,-63]],[[81723,53254],[110,221],[236,323]],[[82069,53798],[-13,-291],[-16,-377],[-133,19],[-58,-202],[-126,307]],[[75471,66988],[113,-189],[-20,-363],[-227,-17],[-234,39],[-175,-92],[-252,224],[-6,119]],[[74670,66709],[184,439],[150,150],[198,-137],[147,-14],[122,-159]],[[58175,37528],[-393,-435],[-249,-442],[-93,-393],[-83,-222],[-152,-47],[-48,-283],[-28,-184],[-178,-138],[-226,29],[-133,166],[-117,71],[-135,-137],[-68,-283],[-132,-177],[-139,-264],[-199,-60],[-62,207],[26,360],[-165,562],[-75,88]],[[55526,35946],[0,1725],[274,20],[8,2105],[207,19],[428,207],[106,-243],[177,231],[85,2],[156,133]],[[56967,40145],[50,-44]],[[57017,40101],[107,-473],[56,-105],[87,-342],[315,-649],[119,-64],[0,-208],[82,-375],[215,-90],[177,-267]],[[54244,54965],[229,44],[52,152],[46,-11],[69,-134],[350,226],[118,230],[145,207],[-28,208],[78,54],[269,-36],[261,273],[201,645],[141,239],[176,101]],[[56351,57163],[31,-253],[160,-369],[1,-241],[-45,-246],[18,-184],[96,-170]],[[56612,55700],[212,-258]],[[56824,55442],[152,-239],[2,-192],[187,-308],[116,-255],[70,-355],[208,-234],[44,-187]],[[57603,53672],[-91,-63],[-178,14],[-209,62],[-104,-51],[-41,-143],[-90,-18],[-110,125],[-309,-295],[-127,60],[-38,-46],[-83,-357],[-207,115],[-203,59],[-177,218],[-229,200],[-149,-190],[-108,-300],[-25,-412]],[[55125,52650],[-178,33],[-188,99],[-166,-313],[-146,-550]],[[54447,51919],[-29,172],[-12,269],[-127,190],[-103,305],[-23,212],[-132,309],[23,176],[-28,249],[21,458],[67,107],[140,599]],[[32315,78082],[202,-79],[257,16],[-137,-242],[-102,-38],[-353,250],[-69,198],[105,183],[97,-288]],[[32831,79592],[-135,-11],[-360,186],[-258,279],[96,49],[365,-148],[284,-247],[8,-108]],[[15692,79240],[-140,-82],[-456,269],[-84,209],[-248,207],[-50,168],[-286,107],[-107,321],[24,137],[291,-129],[171,-89],[261,-63],[94,-204],[138,-280],[277,-244],[115,-327]],[[34407,80527],[-184,-517],[181,199],[187,-126],[-98,-206],[247,-162],[128,144],[277,-182],[-86,-433],[194,101],[36,-313],[86,-367],[-117,-520],[-125,-22],[-183,111],[60,484],[-77,75],[-322,-513],[-166,21],[196,277],[-267,144],[-298,-35],[-539,18],[-43,175],[173,208],[-121,160],[234,356],[287,941],[172,336],[241,204],[129,-26],[-54,-160],[-148,-372]],[[13005,82584],[131,-76],[267,47],[-84,-671],[242,-475],[-111,1],[-167,270],[-103,272],[-140,184],[-51,260],[16,188]],[[27981,87304],[-108,-310],[-123,50],[-73,176],[13,41],[107,177],[114,-13],[70,-121]],[[27250,87631],[-325,-326],[-196,13],[-61,160],[207,273],[381,-6],[-6,-114]],[[26344,89371],[51,-259],[143,91],[161,-155],[304,-203],[318,-184],[25,-281],[204,46],[199,-196],[-247,-186],[-432,142],[-156,266],[-275,-314],[-396,-306],[-95,346],[-377,-57],[242,292],[35,465],[95,542],[201,-49]],[[28926,90253],[-312,-30],[-69,289],[118,331],[255,82],[217,-163],[3,-253],[-32,-82],[-180,-174]],[[23431,91410],[-173,-207],[-374,179],[-226,-65],[-380,266],[245,183],[194,256],[295,-168],[166,-106],[84,-112],[169,-226]],[[31350,77248],[-181,334],[0,805],[-123,171],[-187,-100],[-92,155],[-212,-446],[-84,-460],[-99,-269],[-118,-91],[-89,-30],[-28,-146],[-512,0],[-422,-4],[-125,-109],[-294,-425],[-34,-46],[-89,-231],[-255,1],[-273,-3],[-125,-93],[44,-116],[25,-181],[-5,-60],[-363,-293],[-286,-93],[-323,-316],[-70,0],[-94,93],[-31,85],[6,61],[61,207],[131,325],[81,349],[-56,514],[-59,536],[-290,277],[35,105],[-41,73],[-76,0],[-56,93],[-14,140],[-54,-61],[-75,18],[17,59],[-65,58],[-27,155],[-216,189],[-224,197],[-272,229],[-261,214],[-248,-167],[-91,-6],[-342,154],[-225,-77],[-269,183],[-284,94],[-194,36],[-86,100],[-49,325],[-94,-3],[-1,-227],[-575,0],[-951,0],[-944,0],[-833,0],[-834,0],[-819,0],[-847,0],[-273,0],[-825,0],[-788,0]],[[15878,79530],[-38,1],[-537,581],[-199,255],[-503,244],[-155,523],[40,363],[-356,252],[-48,476],[-336,429],[-6,304]],[[13740,82958],[154,285],[-7,373],[-473,376],[-284,674],[-173,424],[-255,266],[-187,242],[-147,306],[-279,-192],[-270,-330],[-247,388],[-194,259],[-271,164],[-273,17],[1,3364],[2,2193]],[[10837,91767],[518,-142],[438,-285],[289,-54],[244,247],[336,184],[413,-72],[416,259],[455,148],[191,-245],[207,138],[62,278],[192,-63],[470,-530],[369,401],[38,-449],[341,97],[105,173],[337,-34],[424,-248],[650,-217],[383,-100],[272,38],[374,-300],[-390,-293],[502,-127],[750,70],[236,103],[296,-354],[302,299],[-283,251],[179,202],[338,27],[223,59],[224,-141],[279,-321],[310,47],[491,-266],[431,94],[405,-14],[-32,367],[247,103],[431,-200],[-2,-559],[177,471],[223,-16],[126,594],[-298,364],[-324,239],[22,653],[329,429],[366,-95],[281,-261],[378,-666],[-247,-290],[517,-120],[-1,-604],[371,463],[332,-380],[-83,-438],[269,-399],[290,427],[202,510],[16,649],[394,-46],[411,-87],[373,-293],[17,-293],[-207,-315],[196,-316],[-36,-288],[-544,-413],[-386,-91],[-287,178],[-83,-297],[-268,-498],[-81,-259],[-322,-399],[-397,-39],[-220,-250],[-18,-384],[-323,-74],[-340,-479],[-301,-665],[-108,-466],[-16,-686],[409,-99],[125,-553],[130,-448],[388,117],[517,-256],[277,-225],[199,-279],[348,-163],[294,-248],[459,-34],[302,-58],[-45,-511],[86,-594],[201,-661],[414,-561],[214,192],[150,607],[-145,934],[-196,311],[445,276],[314,415],[154,411],[-23,395],[-188,502],[-338,445],[328,619],[-121,535],[-93,922],[194,137],[476,-161],[286,-57],[230,155],[258,-200],[342,-343],[85,-229],[495,-45],[-8,-496],[92,-747],[254,-92],[201,-348],[402,328],[266,652],[184,274],[216,-527],[362,-754],[307,-709],[-112,-371],[370,-333],[250,-338],[442,-152],[179,-189],[110,-500],[216,-78],[112,-223],[20,-664],[-202,-222],[-199,-207],[-458,-210],[-349,-486],[-470,-96],[-594,125],[-417,4],[-287,-41],[-233,-424],[-354,-262],[-401,-782],[-320,-545],[236,97],[446,776],[583,493],[415,58],[246,-289],[-262,-397],[88,-637],[91,-446],[361,-295],[459,86],[278,664],[19,-429],[180,-214],[-344,-387],[-615,-351],[-276,-239],[-310,-426],[-211,44],[-11,500],[483,488],[-445,-19],[-309,-72]],[[18287,93781],[-139,-277],[618,179],[386,-298],[314,302],[254,-194],[227,-580],[140,244],[-197,606],[244,86],[276,-94],[311,-239],[175,-575],[86,-417],[466,-293],[502,-279],[-31,-260],[-456,-48],[178,-227],[-94,-217],[-503,93],[-478,160],[-322,-36],[-522,-201],[-704,-88],[-494,-56],[-151,279],[-379,161],[-246,-66],[-343,468],[185,62],[429,101],[392,-26],[362,103],[-537,138],[-594,-47],[-394,12],[-146,217],[644,237],[-428,-9],[-485,156],[233,443],[193,235],[744,359],[284,-114]],[[20972,93958],[-244,-390],[-434,413],[95,83],[372,24],[211,-130]],[[28794,93770],[25,-163],[-296,17],[-299,13],[-304,-80],[-80,36],[-306,313],[12,213],[133,39],[636,-63],[479,-325]],[[25955,93803],[219,-369],[256,477],[704,242],[477,-611],[-42,-387],[550,172],[263,235],[616,-299],[383,-282],[36,-258],[515,134],[290,-376],[670,-234],[242,-238],[263,-553],[-510,-275],[654,-386],[441,-130],[400,-543],[437,-39],[-87,-414],[-487,-687],[-342,253],[-437,568],[-359,-74],[-35,-338],[292,-344],[377,-272],[114,-157],[181,-584],[-96,-425],[-350,160],[-697,473],[393,-509],[289,-357],[45,-206],[-753,236],[-596,343],[-337,287],[97,167],[-414,304],[-405,286],[5,-171],[-803,-94],[-235,203],[183,435],[522,10],[571,76],[-92,211],[96,294],[360,576],[-77,261],[-107,203],[-425,286],[-563,201],[178,150],[-294,367],[-245,34],[-219,201],[-149,-175],[-503,-76],[-1011,132],[-588,174],[-450,89],[-231,207],[290,270],[-394,2],[-88,599],[213,528],[286,241],[717,158],[-204,-382]],[[22123,94208],[331,-124],[496,75],[72,-172],[-259,-283],[420,-254],[-50,-532],[-455,-229],[-268,50],[-192,225],[-690,456],[5,189],[567,-73],[-306,386],[329,286]],[[24112,93575],[-298,-442],[-317,22],[-173,519],[4,294],[145,251],[276,161],[579,-20],[530,-144],[-415,-526],[-331,-115]],[[16539,92755],[-731,-285],[-147,259],[-641,312],[119,250],[192,432],[241,388],[-272,362],[939,93],[397,-123],[709,-33],[270,-171],[298,-249],[-349,-149],[-681,-415],[-344,-414],[0,-257]],[[23996,94879],[-151,-229],[-403,44],[-337,155],[148,266],[399,159],[243,-208],[101,-187]],[[22639,95907],[212,-273],[9,-303],[-127,-440],[-458,-60],[-298,94],[5,345],[-455,-46],[-18,457],[299,-18],[419,201],[390,-34],[22,77]],[[19941,95601],[109,-210],[247,99],[291,-26],[49,-289],[-169,-281],[-940,-91],[-701,-256],[-423,-14],[-35,193],[577,261],[-1255,-70],[-389,106],[379,577],[262,165],[782,-199],[493,-350],[485,-45],[-397,565],[255,215],[286,-68],[94,-282]],[[23699,96131],[308,-190],[547,1],[240,-194],[-64,-222],[319,-134],[177,-140],[374,-26],[406,-50],[441,128],[566,51],[451,-42],[298,-223],[62,-244],[-174,-157],[-414,-127],[-355,72],[-797,-91],[-570,-11],[-449,73],[-738,190],[-96,325],[-34,293],[-279,258],[-574,72],[-322,183],[104,242],[573,-37]],[[17722,96454],[-38,-454],[-214,-205],[-259,-29],[-517,-252],[-444,-91],[-377,128],[472,442],[570,383],[426,-9],[381,87]],[[23933,96380],[-126,-17],[-521,38],[-74,165],[559,-9],[195,-109],[-33,-68]],[[19392,96485],[-518,-170],[-411,191],[224,188],[406,60],[392,-92],[-93,-177]],[[19538,97019],[-339,-115],[-461,1],[5,84],[285,177],[149,-27],[361,-120]],[[23380,96697],[-411,-122],[-226,138],[-119,221],[-22,245],[360,-24],[162,-39],[332,-205],[-76,-214]],[[22205,96856],[108,-247],[-453,66],[-457,192],[-619,21],[268,176],[-335,142],[-21,227],[546,-81],[751,-215],[212,-281]],[[25828,97644],[334,-190],[-381,-176],[-513,-445],[-492,-42],[-575,76],[-299,240],[4,215],[220,157],[-508,-4],[-306,196],[-176,268],[193,262],[192,180],[285,42],[-122,135],[646,30],[355,-315],[468,-127],[455,-112],[220,-390]],[[30972,99681],[742,-47],[597,-75],[508,-161],[-12,-157],[-678,-257],[-672,-119],[-251,-133],[605,3],[-656,-358],[-452,-167],[-476,-483],[-573,-98],[-177,-120],[-841,-64],[383,-74],[-192,-105],[230,-292],[-264,-202],[-429,-167],[-132,-232],[-388,-176],[39,-134],[475,23],[6,-144],[-742,-355],[-726,163],[-816,-91],[-414,71],[-525,31],[-35,284],[514,133],[-137,427],[170,41],[742,-255],[-379,379],[-450,113],[225,229],[492,141],[79,206],[-392,231],[-118,304],[759,-26],[220,-64],[433,216],[-625,68],[-972,-38],[-491,201],[-232,239],[-324,173],[-61,202],[413,112],[324,19],[545,96],[409,220],[344,-30],[300,-166],[211,319],[367,95],[498,65],[849,24],[148,-63],[802,100],[601,-38],[602,-37]],[[52900,78285],[-22,-242],[-122,-100],[-206,75],[-60,-239],[-132,-19],[-48,94],[-156,-200],[-134,-28],[-120,126]],[[51900,77752],[-95,259],[-133,-92],[5,267],[203,332],[-9,150],[126,-54],[77,101]],[[52074,78715],[236,-4],[57,128],[298,-181]],[[31400,18145],[-92,-239],[-238,-183],[-137,19],[-164,48],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70]],[[30952,19680],[-247,4],[-134,-145],[-250,-213],[-45,-552],[-118,-14],[-313,192],[-318,412],[-346,338],[-87,374],[79,346],[-140,393],[-36,1007],[119,568],[293,457],[-422,172],[265,522],[94,982],[309,-208],[145,1224],[-186,157],[-87,-738],[-175,83],[87,845],[95,1095],[127,404],[-80,576],[-22,666],[117,19],[170,954],[192,945],[118,881],[-64,885],[83,487],[-34,730],[163,721],[50,1143],[89,1227],[87,1321],[-20,967],[-58,832]],[[30452,39739],[143,151],[74,303]],[[80649,61615],[-240,-284],[-228,183],[-8,509],[137,267],[304,166],[159,-14],[62,-226],[-122,-260],[-64,-341]],[[86288,75628],[-179,348],[-111,-331],[-429,-254],[44,-312],[-241,22],[-131,185],[-191,-419],[-306,-318],[-227,-379]],[[84517,74170],[-388,-171],[-204,-277],[-300,-161],[148,274],[-58,230],[220,397],[-147,310],[-242,-209],[-314,-411],[-171,-381],[-272,-29],[-142,-275],[147,-400],[227,-97],[9,-265],[220,-173],[311,422],[247,-230],[179,-15],[45,-310],[-393,-165],[-130,-319],[-270,-296],[-142,-414],[299,-325],[109,-581],[169,-541],[189,-454],[-5,-439],[-174,-161],[66,-315],[164,-184],[-43,-481],[-71,-468],[-155,-53],[-203,-640],[-225,-775],[-258,-705],[-382,-545],[-386,-498],[-313,-68],[-170,-262],[-96,192],[-157,-294],[-388,-296],[-294,-90],[-95,-624],[-154,-35],[-73,429],[66,228],[-373,189],[-131,-96]],[[80013,63313],[-280,154],[-132,240],[44,340],[-254,108],[-134,222],[-236,-315],[-271,-68],[-221,3],[-149,-145]],[[78380,63852],[-144,-86],[42,-676],[-148,16],[-25,139]],[[78105,63245],[-9,244],[-203,-172],[-121,109],[-206,222],[81,490],[-176,115],[-66,544],[-293,-98],[33,701],[263,493],[11,487],[-8,452],[-121,141],[-93,348],[-162,-44]],[[77035,67277],[-300,89],[94,248],[-130,367],[-198,-249],[-233,145],[-321,-376],[-252,-439],[-224,-74]],[[74670,66709],[-23,465],[-170,-124]],[[74477,67050],[-324,57],[-314,136],[-225,259],[-216,117],[-93,284],[-157,84],[-280,385],[-223,182],[-115,-141]],[[72530,68413],[-386,413],[-273,374],[-78,651],[200,-79],[9,301],[-111,303],[28,482],[-298,692]],[[71621,71550],[-457,239],[-82,454],[-205,276]],[[70827,72688],[-42,337],[10,230],[-169,134],[-91,-59],[-70,546]],[[70465,73876],[79,136],[-39,138],[266,279],[192,116],[294,-80],[105,378],[356,70],[99,234],[438,320],[39,134]],[[72294,75601],[-22,337],[190,154],[-250,1026],[550,236],[143,131],[200,1058],[551,-194],[155,267],[13,592],[230,56],[212,393]],[[74266,79657],[109,49]],[[74375,79706],[73,-413],[233,-313],[396,-222],[192,-476],[-107,-690],[100,-256],[330,-101],[374,-83],[336,-368],[171,-66],[127,-544],[163,-351],[306,14],[574,-133],[369,82],[274,-88],[411,-359],[336,1],[123,-184],[324,318],[448,205],[417,22],[324,208],[200,316],[194,199],[-45,195],[-89,227],[146,381],[156,-53],[286,-120],[277,313],[423,229],[204,391],[195,168],[404,78],[219,-66],[30,210],[-251,413],[-223,189],[-214,-219],[-274,92],[-157,-74],[-72,241],[197,590],[135,446]],[[82410,80055],[333,-223],[392,373],[-3,260],[251,627],[155,189],[-4,326],[-152,141],[229,294],[345,106],[369,16],[415,-176],[244,-217],[172,-596],[104,-254],[97,-363],[103,-579],[483,-189],[329,-420],[112,-555],[423,-1],[240,233],[459,175],[-146,-532],[-107,-216],[-96,-647],[-186,-575],[-338,104],[-238,-208],[73,-506],[-40,-698],[-142,-16],[2,-300]],[[49206,53531],[-126,-7],[-194,116],[-178,-7],[-329,-103],[-193,-170],[-275,-217],[-54,15]],[[47857,53158],[22,487],[26,74],[-8,233],[-118,247],[-88,40],[-81,162],[60,262],[-28,286],[13,172]],[[47655,55121],[44,0],[17,258],[-22,114],[27,82],[103,71],[-69,473],[-64,245],[23,200],[55,46]],[[47769,56610],[36,54],[77,-89],[215,-5],[51,172],[48,-11],[80,67],[43,-253],[65,74],[114,88]],[[49214,56277],[74,-841],[-117,-496],[-73,-667],[121,-509],[-13,-233]],[[53632,51919],[-35,32],[-164,-76],[-169,79],[-132,-38]],[[53132,51916],[-452,13]],[[52680,51929],[40,466],[-108,391],[-127,100],[-56,265],[-72,85],[4,163]],[[52361,53399],[71,418],[132,570],[81,6],[165,345],[105,10],[156,-243],[191,199],[26,246],[63,238],[43,299],[148,243],[56,414],[59,132],[39,307],[74,377],[234,457],[14,196],[31,107],[-110,235]],[[53939,57955],[9,188],[78,34]],[[54026,58177],[111,-378],[18,-392],[-10,-393],[151,-537],[-155,6],[-78,-42],[-127,60],[-60,-279],[164,-345],[121,-100],[39,-245],[87,-407],[-43,-160]],[[54447,51919],[-20,-319],[-220,140],[-225,156],[-350,23]],[[58564,52653],[-16,-691],[111,-80],[-89,-210],[-107,-157],[-106,-308],[-59,-274],[-15,-475],[-65,-225],[-2,-446]],[[58216,49787],[-80,-165],[-10,-351],[-38,-46],[-26,-323]],[[58149,47921],[50,-544],[-27,-307]],[[58172,47070],[55,-343],[161,-330]],[[58388,46397],[150,-745]],[[58538,45652],[-109,60],[-373,-99],[-75,-71],[-79,-377],[62,-261],[-49,-699],[-34,-593],[75,-105],[194,-230],[76,107],[23,-637],[-212,5],[-114,325],[-103,252],[-213,82],[-62,310],[-170,-187],[-222,83],[-93,268],[-176,55],[-131,-15],[-15,184],[-96,15]],[[53422,46976],[-39,183]],[[53609,47755],[73,-60],[95,226],[152,-6],[17,-167],[104,-105],[164,370],[161,289],[71,189],[-10,486],[121,574],[127,304],[183,285],[32,189],[7,216],[45,205],[-14,335],[34,524],[55,368],[83,316],[16,357]],[[57603,53672],[169,-488],[124,-71],[75,99],[128,-39],[155,125],[66,-252],[244,-393]],[[53309,47603],[-228,626]],[[53081,48229],[212,326],[-105,391],[95,148],[187,73],[23,261],[148,-283],[245,-25],[85,279],[36,393],[-31,461],[-131,350],[120,684],[-69,117],[-207,-48],[-78,305],[21,258]],[[29063,50490],[-119,140],[-137,195],[-79,-94],[-235,82],[-68,255],[-52,-10],[-278,338]],[[28095,51396],[-37,183],[103,44],[-12,296],[65,214],[138,40],[117,371],[106,310],[-102,141],[52,343],[-62,540],[59,155],[-44,500],[-112,315]],[[28366,54848],[36,287],[89,-43],[52,176],[-64,348],[34,86]],[[28513,55702],[143,-18],[209,412],[114,63],[3,195],[51,500],[159,274],[175,11],[22,123],[218,-49],[218,298],[109,132],[134,285],[98,-36],[73,-156],[-54,-199]],[[30185,57537],[-178,-99],[-71,-295],[-107,-169],[-81,-220],[-34,-422],[-77,-345],[144,-40],[35,-271],[62,-130],[21,-238],[-33,-219],[10,-123],[69,-49],[66,-207],[357,57],[161,-75],[196,-508],[112,63],[200,-32],[158,68],[99,-102],[-50,-318],[-62,-199],[-22,-423],[56,-393],[79,-175],[9,-133],[-140,-294],[100,-130],[74,-207],[85,-589]],[[30585,48040],[-139,314],[-83,14],[179,602],[-213,276],[-166,-51],[-101,103],[-153,-157],[-207,74],[-163,620],[-129,152],[-89,279],[-184,280],[-74,-56]],[[26954,55439],[-151,131],[-56,124],[32,103],[-11,130],[-77,142],[-109,116],[-95,76],[-19,173],[-73,105],[18,-172],[-55,-141],[-64,164],[-89,58],[-38,120],[2,179],[36,187],[-78,83],[64,114]],[[26191,57131],[42,76],[183,-156],[63,77],[89,-50],[46,-121],[82,-40],[66,126]],[[26762,57043],[70,-321],[108,-238],[130,-252]],[[27070,56232],[-107,-53],[1,-238],[58,-88],[-41,-70],[10,-107],[-23,-120],[-14,-117]],[[27147,64280],[240,-42],[219,-7],[261,-201],[110,-216],[260,66],[98,-138],[235,-366],[173,-267],[92,8],[165,-120],[-20,-167],[205,-24],[210,-242],[-33,-138],[-185,-75],[-187,-29],[-191,46],[-398,-57],[186,329],[-113,154],[-179,39],[-96,171],[-66,336],[-157,-23],[-259,159],[-83,124],[-362,91],[-97,115],[104,148],[-273,30],[-199,-307],[-115,-8],[-40,-144],[-138,-65],[-118,56],[146,183],[60,213],[126,131],[142,116],[210,56],[67,65]],[[59092,71341],[19,3],[40,143],[200,-8],[253,176],[-188,-251],[21,-111]],[[59437,71293],[-30,21],[-53,-45],[-42,12],[-14,-22],[-5,59],[-20,37],[-54,6],[-75,-51],[-52,31]],[[59437,71293],[8,-48],[-285,-240],[-136,77],[-64,237],[132,22]],[[53776,79457],[-157,254],[-141,142],[-30,249],[-49,176],[202,129],[103,147],[200,114],[70,113],[73,-68],[124,62]],[[54171,80775],[132,-191],[207,-51],[-17,-163],[151,-122],[41,153],[191,-66],[26,-185],[207,-36],[127,-291]],[[55236,79823],[-82,-1],[-43,-106],[-64,-26],[-18,-134],[-54,-28],[-7,-55],[-95,-61],[-123,10],[-39,-130]],[[52756,83065],[4,-228],[281,-138],[-3,-210],[283,111],[156,162],[313,-233],[132,-189]],[[53922,82340],[64,-300],[-77,-158],[101,-210],[69,-316],[-22,-204],[114,-377]],[[52074,78715],[35,421],[140,404],[-400,109],[-131,155]],[[51718,79804],[16,259],[-56,133]],[[51710,80596],[-47,619],[167,0],[70,222],[69,541],[-51,200]],[[51918,82178],[54,125],[232,32],[52,-130],[188,291],[-63,222],[-13,335]],[[52368,83053],[210,-78],[178,90]],[[61966,58083],[66,-183],[-9,-245],[-158,-142],[119,-161]],[[61984,57352],[-102,-317]],[[61882,57035],[-62,106],[-67,-42],[-155,10],[-4,180],[-22,163],[94,277],[98,261]],[[61764,57990],[119,-51],[83,144]],[[53524,83435],[-166,-478],[-291,333],[-39,246],[408,195],[88,-296]],[[52368,83053],[-113,328],[-8,604],[46,159],[80,177],[244,37],[98,163],[223,167],[-9,-304],[-82,-192],[33,-166],[151,-89],[-68,-223],[-83,64],[-200,-425],[76,-288]],[[30080,62227],[34,101],[217,-3],[165,-152],[73,15],[50,-209],[152,11],[-9,-176],[124,-21],[136,-217],[-103,-240],[-132,128],[-127,-25],[-92,28],[-50,-107],[-106,-37],[-43,144],[-92,-85],[-111,-405],[-71,94],[-14,170]],[[30081,61241],[5,161],[-71,177],[68,99],[21,228],[-24,321]],[[53333,64447],[-952,-1126],[-804,-1161],[-392,-263]],[[51185,61897],[-308,-58],[-3,376],[-129,96],[-173,169],[-66,277],[-937,1289],[-937,1289]],[[48632,65335],[-1045,1431]],[[47587,66766],[6,114],[-1,40]],[[47592,66920],[-2,700],[449,436],[277,90],[227,159],[107,295],[324,234],[12,438],[161,51],[126,219],[363,99],[51,230],[-73,125],[-96,624],[-17,359],[-104,379]],[[49397,71358],[267,323],[300,102],[175,244],[268,180],[471,105],[459,48],[140,-87],[262,232],[297,5],[113,-137],[190,35]],[[52339,72408],[-57,-303],[44,-563],[-65,-487],[-171,-330],[24,-445],[227,-352],[3,-143],[171,-238],[118,-1061]],[[52633,68486],[90,-522],[15,-274],[-49,-482],[21,-270],[-36,-323],[24,-371],[-110,-247],[164,-431],[11,-253],[99,-330],[130,109],[219,-275],[122,-370]],[[27693,48568],[148,442],[-60,258],[-106,-275],[-166,259],[56,167],[-47,536],[97,89],[52,368],[105,381],[-20,241],[153,126],[190,236]],[[29063,50490],[38,-449],[-86,-384],[-303,-619],[-334,-233],[-170,-514],[-53,-398],[-157,-243],[-116,298],[-113,64],[-114,-47],[-8,216],[79,141],[-33,246]],[[59700,68010],[-78,-238],[-60,-446],[-75,-308],[-65,-103],[-93,191],[-125,263],[-198,847],[-29,-53],[115,-624],[171,-594],[210,-920],[102,-321],[90,-334],[249,-654],[-55,-103],[9,-384],[323,-530],[49,-121]],[[60240,63578],[-1102,0],[-1077,0],[-1117,0]],[[56944,63578],[0,2175],[0,2101],[-83,476],[71,365],[-43,253],[101,283]],[[56990,69231],[369,10],[268,-156],[275,-175],[129,-92],[214,188],[114,169],[245,49],[198,-75],[75,-293],[65,193],[222,-140],[217,-33],[137,149]],[[59518,69025],[182,-1015]],[[61764,57990],[-95,191],[-114,346],[-124,190],[-71,204],[-242,237],[-191,7],[-67,124],[-163,-139],[-168,268],[-87,-441],[-323,124]],[[60119,59101],[-30,236],[120,868],[27,393],[88,181],[204,97],[141,337]],[[60669,61213],[161,-684],[77,-542],[152,-288],[379,-558],[154,-336],[151,-341],[87,-203],[136,-178]],[[47490,75324],[14,420],[-114,257],[393,426],[340,-106],[373,3],[296,-101],[230,31],[449,-19]],[[49471,76235],[111,-230],[511,-268],[101,127],[313,-267],[322,77]],[[50829,75674],[15,-344],[-263,-393],[-356,-125],[-25,-199],[-171,-327],[-107,-481],[108,-338],[-160,-263],[-60,-384],[-210,-118],[-197,-454],[-352,-9],[-265,11],[-174,-209],[-106,-223],[-136,49],[-103,199],[-79,340],[-259,92]],[[47929,72498],[-23,195],[103,222],[38,161],[-96,175],[77,388],[-111,355],[120,48],[11,280],[45,86],[3,461],[129,160],[-78,296],[-162,21],[-47,-75],[-164,0],[-70,289],[-113,-86],[-101,-150]],[[56753,84725],[32,349],[-102,-75],[-176,210],[-24,340],[351,164],[350,86],[301,-97],[287,17]],[[57772,85719],[42,-103],[-198,-341],[83,-551],[-120,-187]],[[57579,84537],[-229,1],[-239,219],[-121,73],[-237,-105]],[[61882,57035],[-61,-209],[103,-325],[102,-285],[106,-210],[909,-702],[233,4]],[[63274,55308],[-785,-1773],[-362,-26],[-247,-417],[-178,-11],[-76,-186]],[[61626,52895],[-190,0],[-112,200],[-254,-247],[-82,-247],[-185,47],[-62,68],[-65,-16],[-87,6],[-352,502],[-193,0],[-95,194],[0,332],[-145,99]],[[59804,53833],[-164,643],[-127,137],[-48,236],[-141,288],[-171,42],[95,337],[147,14],[42,181]],[[59437,55711],[-4,531]],[[59433,56242],[82,618],[132,166],[28,241],[119,451],[168,293],[112,582],[45,508]],[[57942,91385],[-41,-414],[425,-394],[-256,-445],[323,-673],[-187,-506],[250,-440],[-113,-385],[411,-405],[-105,-301],[-258,-341],[-594,-755]],[[57797,86326],[-504,-47],[-489,-216],[-452,-125],[-161,323],[-269,193],[62,582],[-135,533],[133,345],[252,371],[635,640],[185,124],[-28,250],[-387,279]],[[56639,89578],[-93,230],[-8,910],[-433,402],[-371,289]],[[55734,91409],[167,156],[309,-312],[362,29],[298,-143],[265,262],[137,433],[431,200],[356,-235],[-117,-414]],[[99547,40335],[96,-171],[-46,-308],[-172,-81],[-153,73],[-27,260],[107,203],[126,-74],[69,98]],[[0,41087],[57,27],[-34,-284],[-23,-32],[99822,-145],[-177,-124],[-36,220],[139,121],[88,33],[-99836,184]],[[33000,19946],[333,354],[236,-148],[167,237],[222,-266],[-83,-207],[-375,-177],[-125,207],[-236,-266],[-139,266]],[[34854,51946],[70,252],[24,269],[48,253],[-107,349]],[[34889,53069],[-22,404],[144,508]],[[35011,53981],[95,-65],[204,-140],[294,-499],[46,-242]],[[52655,75484],[-92,-456],[-126,120],[-64,398],[56,219],[179,226],[47,-507]],[[51576,79843],[62,-52],[80,13]],[[51900,77752],[-11,-167],[82,-222],[-97,-180],[72,-457],[151,-75],[-32,-256]],[[52065,76395],[-252,-334],[-548,160],[-404,-192],[-32,-355]],[[49471,76235],[144,354],[53,1177],[-287,620],[-205,299],[-424,227],[-28,431],[360,129],[466,-152],[-88,669],[263,-254],[646,461],[84,484],[243,119]],[[53081,48229],[-285,596],[-184,488],[-169,610],[9,196],[61,189],[67,430],[56,438]],[[52636,51176],[94,35],[404,-6],[-2,711]],[[48278,82406],[-210,122],[-172,-9],[57,317],[-57,317]],[[47896,83153],[233,24],[298,-365],[-149,-406]],[[49165,85222],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38],[22,-62],[248,-697],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226],[-148,118],[407,621],[249,127],[-2,1],[-434,98],[-79,235],[291,183],[-152,319],[52,387],[413,-54],[1,0],[40,343],[-186,364],[-4,8],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49]],[[61542,75120],[42,252],[-70,403],[-160,218],[-154,68],[-102,181]],[[61098,76242],[34,70],[235,-101],[409,-96],[378,-283],[48,-110],[169,93],[259,-124],[85,-242],[175,-137]],[[62106,74858],[-268,290],[-296,-28]],[[50294,54083],[-436,-346],[-154,-203],[-250,-171],[-248,168]],[[50006,57090],[-20,-184],[116,-305],[-1,-429],[27,-466],[69,-215],[-61,-532],[22,-294],[74,-375],[62,-207]],[[47655,55121],[-78,15],[-57,-238],[-78,3],[-55,126],[19,237],[-116,362],[-73,-67],[-59,-13]],[[47158,55546],[-77,-34],[3,217],[-44,155],[9,171],[-60,249],[-78,211],[-222,1],[-65,-112],[-76,-13],[-48,-128],[-32,-163],[-148,-260]],[[46320,55840],[-122,349],[-108,232],[-71,76],[-69,118],[-32,261],[-41,130],[-80,97]],[[45797,57103],[123,288],[84,-11],[73,99],[61,1],[44,78],[-24,196],[31,62],[5,200]],[[46194,58016],[134,-6],[200,-144],[61,13],[21,66],[151,-47],[40,33]],[[46801,57931],[16,-216],[44,1],[73,78],[46,-19],[77,-150],[119,-48],[76,128],[90,79],[67,83],[55,-15],[62,-130],[33,-163],[114,-248],[-57,-152],[-11,-192],[59,58],[35,-69],[-15,-176],[85,-170]],[[45321,58350],[36,262]],[[45357,58612],[302,17],[63,140],[88,9],[110,-145],[86,-3],[92,99],[56,-170],[-120,-133],[-121,11],[-119,124],[-103,-136],[-50,-5],[-67,-83],[-253,13]],[[45797,57103],[-149,247],[-117,39],[-63,166],[1,90],[-84,125],[-18,127]],[[45367,57897],[147,96],[92,-19],[75,67],[513,-25]],[[52636,51176],[-52,90],[96,663]],[[56583,71675],[152,-199],[216,34],[207,-42],[-7,-103],[151,71],[-35,-175],[-400,-50],[3,98],[-339,115],[52,251]],[[57237,74699],[-169,17],[-145,56],[-336,-154],[192,-332],[-141,-96],[-154,-1],[-147,305],[-52,-130],[62,-353],[139,-277],[-105,-129],[155,-273],[137,-171],[4,-334],[-257,157],[82,-302],[-176,-62],[105,-521],[-184,-8],[-228,257],[-104,473],[-49,393],[-108,272],[-143,337],[-18,168]],[[55838,74710],[182,53],[106,129],[150,-12],[46,103],[53,20]],[[57254,75292],[135,-157],[-86,-369],[-66,-67]],[[37010,99398],[932,353],[975,-27],[354,218],[982,57],[2219,-74],[1737,-469],[-513,-227],[-1062,-26],[-1496,-58],[140,-105],[984,65],[836,-204],[540,181],[231,-212],[-305,-344],[707,220],[1348,229],[833,-114],[156,-253],[-1132,-420],[-157,-136],[-888,-102],[643,-28],[-324,-431],[-224,-383],[9,-658],[333,-386],[-434,-24],[-457,-187],[513,-313],[65,-502],[-297,-55],[360,-508],[-617,-42],[322,-241],[-91,-208],[-391,-91],[-388,-2],[348,-400],[4,-263],[-549,244],[-143,-158],[375,-148],[364,-361],[105,-476],[-495,-114],[-214,228],[-344,340],[95,-401],[-322,-311],[732,-25],[383,-32],[-745,-515],[-755,-466],[-813,-204],[-306,-2],[-288,-228],[-386,-624],[-597,-414],[-192,-24],[-370,-145],[-399,-138],[-238,-365],[-4,-415],[-141,-388],[-453,-472],[112,-462],[-125,-488],[-142,-577],[-391,-36],[-410,482],[-556,3],[-269,324],[-186,577],[-481,735],[-141,385],[-38,530],[-384,546],[100,435],[-186,208],[275,691],[418,220],[110,247],[58,461],[-318,-209],[-151,-88],[-249,-84],[-341,193],[-19,401],[109,314],[258,9],[567,-157],[-478,375],[-249,202],[-276,-83],[-232,147],[310,550],[-169,220],[-220,409],[-335,626],[-353,230],[3,247],[-745,346],[-590,43],[-743,-24],[-677,-44],[-323,188],[-482,372],[729,186],[559,31],[-1188,154],[-627,241],[39,229],[1051,285],[1018,284],[107,214],[-750,213],[243,235],[961,413],[404,63],[-115,265],[658,156],[854,93],[853,5],[303,-184],[737,325],[663,-221],[390,-46],[577,-192],[-660,318],[38,253]],[[24973,58695],[-142,103],[-174,11],[-127,117],[-149,244]],[[24381,59170],[7,172],[32,138],[-39,111],[133,481],[357,2],[7,201],[-45,36],[-31,128],[-103,136],[-103,198],[125,1],[1,333],[259,1],[257,-7]],[[25297,59966],[90,-107],[24,88],[82,-75]],[[25493,59872],[-127,-225],[-131,-166],[-20,-113],[22,-116],[-58,-150]],[[25179,59102],[-65,-37],[15,-69],[-52,-66],[-95,-149],[-9,-86]],[[33400,55523],[183,-217],[171,-385],[8,-304],[105,-14],[149,-289],[109,-205]],[[34125,54109],[-44,-532],[-169,-154],[15,-139],[-51,-305],[123,-429],[89,-1],[37,-333],[169,-514]],[[33129,53652],[-188,448],[75,163],[-5,273],[171,95],[69,110],[-95,220],[24,215],[220,347]],[[25745,58251],[-48,185],[-84,51]],[[25613,58487],[19,237],[-38,64],[-57,42],[-122,-70],[-10,79],[-84,95],[-60,118],[-82,50]],[[25493,59872],[29,-23],[61,104],[79,8],[26,-48],[43,29],[129,-53],[128,15],[90,66],[32,66],[89,-31],[66,-40],[73,14],[55,51],[127,-82],[44,-13],[85,-110],[80,-132],[101,-91],[73,-162]],[[26903,59440],[-95,12],[-38,-81],[-97,-77],[-70,0],[-61,-76],[-56,27],[-47,90],[-29,-17],[-36,-141],[-27,5],[-4,-121],[-97,-163],[-51,-70],[-29,-74],[-82,120],[-60,-158],[-58,4],[-65,-14],[6,-290],[-41,-5],[-35,-135],[-86,-25]],[[55230,77704],[67,-229],[89,-169],[-107,-222]],[[55155,75778],[-31,-100]],[[55124,75678],[-261,218],[-161,213],[-254,176],[-233,434],[56,45],[-127,248],[-5,200],[-179,93],[-85,-255],[-82,198],[6,205],[10,9]],[[53809,77462],[194,-20],[51,100],[94,-97],[109,-11],[-1,165],[97,60],[27,239],[221,157]],[[54601,78055],[88,-73],[208,-253],[229,-114],[104,89]],[[30081,61241],[-185,100],[-131,-41],[-169,43],[-130,-110],[-149,184],[24,190],[256,-82],[210,-47],[100,131],[-127,256],[2,226],[-175,92],[62,163],[170,-26],[241,-93]],[[54716,79012],[141,-151],[103,-65],[233,73],[22,118],[111,18],[135,92],[30,-38],[130,74],[66,139],[91,36],[297,-180],[59,61]],[[56134,79189],[155,-161],[19,-159]],[[56308,78869],[-170,-123],[-131,-401],[-168,-401],[-223,-111]],[[55616,77833],[-173,26],[-213,-155]],[[54601,78055],[-54,200],[-47,6]],[[83531,44530],[-117,-11],[-368,414],[259,116],[146,-180],[97,-180],[-17,-159]],[[84713,45326],[28,-117],[5,-179]],[[84746,45030],[-181,-441],[-238,-130],[-33,71],[25,201],[119,360],[275,235]],[[82749,45797],[100,-158],[172,48],[69,-251],[-321,-119],[-193,-79],[-149,5],[95,340],[153,5],[74,209]],[[84139,45797],[-41,-328],[-417,-168],[-370,73],[0,216],[220,123],[174,-177],[185,45],[249,216]],[[80172,46575],[533,-59],[61,244],[515,-284],[101,-383],[417,-108],[341,-351],[-317,-225],[-306,238],[-251,-16],[-288,44],[-260,106],[-322,225],[-204,59],[-116,-74],[-506,243],[-48,254],[-255,44],[191,564],[337,-35],[224,-231],[115,-45],[38,-210]],[[87423,46908],[-143,-402],[-27,445],[49,212],[58,200],[63,-173],[0,-282]],[[85346,48536],[-104,-196],[-192,108],[-54,254],[281,29],[69,-195]],[[86241,48752],[101,-452],[-234,244],[-232,49],[-157,-39],[-192,21],[65,325],[344,24],[305,-172]],[[89166,49043],[5,-1925],[4,-1925]],[[89175,45193],[-247,485],[-282,118],[-69,-168],[-352,-18],[118,481],[175,164],[-72,642],[-134,496],[-538,500],[-229,50],[-417,546],[-82,-287],[-107,-52],[-63,216],[-1,257],[-212,290],[299,213],[198,-11],[-23,156],[-407,1],[-110,352],[-248,109],[-117,293],[374,143],[142,192],[446,-242],[44,-220],[78,-955],[287,-354],[232,627],[319,356],[247,1],[238,-206],[206,-212],[298,-113]],[[84788,51419],[-223,-587],[-209,-113],[-267,115],[-463,-29],[-243,-85],[-39,-447],[248,-526],[150,268],[518,201],[-22,-272],[-121,86],[-121,-347],[-245,-229],[263,-757],[-50,-203],[249,-682],[-2,-388],[-148,-173],[-109,207],[134,484],[-273,-229],[-69,164],[36,228],[-200,346],[21,576],[-186,-179],[24,-689],[11,-846],[-176,-85],[-119,173],[79,544],[-43,570],[-117,4],[-86,405],[115,387],[40,469],[139,891],[58,243],[237,439],[217,-174],[350,-82],[319,25],[275,429],[48,-132]],[[85746,51249],[-15,-517],[-143,58],[-42,-359],[114,-312],[-78,-71],[-112,374],[-82,755],[56,472],[92,215],[20,-322],[164,-52],[26,-241]],[[80461,51765],[47,-395],[190,-334],[179,121],[177,-43],[162,299],[133,52],[263,-166],[226,126],[143,822],[107,205],[96,672],[319,0],[241,-100]],[[82744,53024],[-158,-533],[204,-560],[-48,-272],[312,-546],[-329,-70],[-93,-403],[12,-535],[-267,-404],[-7,-589],[-107,-903],[-41,210],[-316,-266],[-110,361],[-198,34],[-139,189],[-330,-212],[-101,285],[-182,-32],[-229,68],[-43,793],[-138,164],[-134,505],[-38,517],[32,548],[165,392]],[[79393,47122],[-308,-12],[-234,494],[-356,482],[-119,358],[-210,481],[-138,443],[-212,827],[-244,493],[-81,508],[-103,461],[-250,372],[-145,506],[-209,330],[-290,652],[-24,300],[178,-24],[430,-114],[246,-577],[215,-401],[153,-246],[263,-635],[283,-9],[233,-405],[161,-495],[211,-270],[-111,-482],[159,-205],[100,-15],[47,-412],[97,-330],[204,-52],[135,-374],[-70,-735],[-11,-914]],[[72530,68413],[-176,-268],[-108,-553],[269,-224],[262,-289],[362,-332],[381,-76],[160,-301],[215,-56],[334,-138],[231,10],[32,234],[-36,375],[21,255]],[[77035,67277],[20,-224],[-97,-108],[23,-364],[-199,107],[-359,-408],[8,-338],[-153,-496],[-14,-288],[-124,-487],[-217,135],[-11,-612],[-63,-201],[30,-251],[-137,-140]],[[74730,63611],[-39,-216],[-189,7],[-343,-122],[16,-445],[-148,-349],[-400,-398],[-311,-695],[-209,-373],[-276,-387],[-1,-271],[-138,-146],[-251,-212],[-129,-31],[-84,-450],[58,-769],[15,-490],[-118,-561],[-1,-1004],[-144,-29],[-126,-450],[84,-195],[-253,-168],[-93,-401],[-112,-170],[-263,552],[-128,827],[-107,596],[-97,279],[-148,568],[-69,739],[-48,369],[-253,811],[-115,1145],[-83,756],[1,716],[-54,553],[-404,-353],[-196,70],[-362,716],[133,214],[-82,232],[-326,501]],[[68937,64577],[185,395],[612,-2],[-56,507],[-156,300],[-31,455],[-182,265],[306,619],[323,-45],[290,620],[174,599],[270,593],[-4,421],[236,342],[-224,292],[-96,400],[-99,517],[137,255],[421,-144],[310,88],[268,496]],[[48278,82406],[46,-422],[-210,-528],[-493,-349],[-393,89],[225,617],[-145,601],[378,463],[210,276]],[[64978,72558],[244,114],[197,338],[186,-17],[122,110],[197,-55],[308,-299],[221,-65],[318,-523],[207,-21],[24,-498]],[[66909,68203],[137,-310],[112,-357],[266,-260],[7,-520],[133,-96],[23,-272],[-400,-305],[-105,-687]],[[67082,65396],[-523,179],[-303,136],[-313,76],[-118,725],[-133,105],[-214,-106],[-280,-286],[-339,196],[-281,454],[-267,168],[-186,561],[-205,788],[-149,-96],[-177,196],[-104,-231]],[[63490,68261],[-153,311],[-3,314],[-89,0],[46,428],[-143,449],[-340,324],[-193,562],[65,461],[139,204],[-21,345],[-182,177],[-180,705]],[[62436,72541],[-152,473],[55,183],[-87,678],[190,168]],[[63578,73220],[88,-436],[263,-123],[193,-296],[395,-102],[434,156],[27,139]],[[63490,68261],[-164,29]],[[63326,68290],[-187,49],[-204,-567]],[[62935,67772],[-516,47],[-784,1188],[-413,414],[-335,160]],[[60887,69581],[-112,720]],[[60775,70301],[615,614],[105,715],[-26,431],[152,146],[142,369]],[[61763,72576],[119,92],[324,-77],[97,-150],[133,100]],[[45969,89843],[-64,-382],[314,-403],[-361,-451],[-801,-405],[-240,-107],[-365,87],[-775,187],[273,261],[-605,289],[492,114],[-12,174],[-583,137],[188,385],[421,87],[433,-400],[422,321],[349,-167],[453,315],[461,-42]],[[59922,69905],[-49,-186]],[[59873,69719],[-100,82],[-58,-394],[69,-66],[-71,-81],[-12,-156],[131,80]],[[59832,69184],[7,-230],[-139,-944]],[[59518,69025],[80,194],[-19,34],[74,276],[56,446],[40,149],[8,6]],[[59757,70130],[93,-1],[25,104],[75,8]],[[59950,70241],[4,-242],[-38,-90],[6,-4]],[[54311,73167],[-100,-465],[41,-183],[-58,-303],[-213,222],[-141,64],[-387,300],[38,304],[325,-54],[284,64],[211,51]],[[52558,74927],[166,-419],[-39,-782],[-126,38],[-113,-197],[-105,156],[-11,713],[-64,338],[153,-30],[139,183]],[[53835,78058],[-31,-291],[67,-251]],[[53871,77516],[-221,86],[-226,-210],[15,-293],[-34,-168],[91,-301],[261,-298],[140,-488],[309,-476],[217,3],[68,-130],[-78,-118],[249,-214],[204,-178],[238,-308],[29,-111],[-52,-211],[-154,276],[-242,97],[-116,-382],[200,-219],[-33,-309],[-116,-35],[-148,-506],[-116,-46],[1,181],[57,317],[60,126],[-108,342],[-85,298],[-115,74],[-82,255],[-179,107],[-120,238],[-206,38],[-217,267],[-254,384],[-189,340],[-86,585],[-138,68],[-226,195],[-128,-80],[-161,-274],[-115,-43]],[[28453,61504],[187,-53],[147,-142],[46,-161],[-195,-11],[-84,-99],[-156,95],[-159,215],[34,135],[116,41],[64,-20]],[[59922,69905],[309,-234],[544,630]],[[60887,69581],[-53,-89],[-556,-296],[277,-591],[-92,-101],[-46,-197],[-212,-82],[-66,-213],[-120,-182],[-310,94]],[[59709,67924],[-9,86]],[[59832,69184],[41,173],[0,362]],[[87399,70756],[35,-203],[-156,-357],[-114,189],[-143,-137],[-73,-346],[-181,168],[2,281],[154,352],[158,-68],[114,248],[204,-127]],[[89159,72524],[-104,-472],[48,-296],[-145,-416],[-355,-278],[-488,-36],[-396,-675],[-186,227],[-12,442],[-483,-130],[-329,-279],[-325,-11],[282,-435],[-186,-1004],[-179,-248],[-135,229],[69,533],[-176,172],[-113,405],[263,182],[145,371],[280,306],[203,403],[553,177],[297,-121],[291,1050],[185,-282],[408,591],[158,229],[174,723],[-47,664],[117,374],[295,108],[152,-819],[-9,-479],[-256,-595],[4,-610]],[[89974,76679],[195,-126],[197,250],[62,-663],[-412,-162],[-244,-587],[-436,404],[-152,-646],[-308,-9],[-39,587],[138,455],[296,33],[81,817],[83,460],[326,-615],[213,-198]],[[69711,75551],[-159,-109],[-367,-412],[-121,-422],[-104,-4],[-76,280],[-353,19],[-57,484],[-135,4],[21,593],[-333,431],[-476,-46],[-326,-86],[-265,533],[-227,223],[-431,423],[-52,51],[-715,-349],[11,-2178]],[[65546,74986],[-142,-29],[-195,463],[-188,166],[-315,-123],[-123,-197]],[[64583,75266],[-15,144],[68,246],[-53,206],[-322,202],[-125,530],[-154,150],[-9,192],[270,-56],[11,432],[236,96],[243,-88],[50,576],[-50,365],[-278,-28],[-236,144],[-321,-260],[-259,-124]],[[63639,77993],[-142,96],[29,304],[-177,395],[-207,-17],[-235,401],[160,448],[-81,120],[222,649],[285,-342],[35,431],[573,643],[434,15],[612,-409],[329,-239],[295,249],[440,12],[356,-306],[80,175],[391,-25],[69,280],[-450,406],[267,288],[-52,161],[266,153],[-200,405],[127,202],[1039,205],[136,146],[695,218],[250,245],[499,-127],[88,-612],[290,144],[356,-202],[-23,-322],[267,33],[696,558],[-102,-185],[355,-457],[620,-1500],[148,309],[383,-340],[399,151],[154,-106],[133,-341],[194,-115],[119,-251],[358,79],[147,-361]],[[72294,75601],[-171,87],[-140,212],[-412,62],[-461,16],[-100,-65],[-396,248],[-158,-122],[-43,-349],[-457,204],[-183,-84],[-62,-259]],[[61551,49585],[-195,-236],[-68,-246],[-104,-44],[-40,-416],[-89,-238],[-54,-393],[-112,-195]],[[60889,47817],[-399,590],[-19,343],[-1007,1203],[-47,65]],[[59417,50018],[-3,627],[80,239],[137,391],[101,431],[-123,678],[-32,296],[-132,411]],[[59445,53091],[171,352],[188,390]],[[61626,52895],[-243,-670],[3,-2152],[165,-488]],[[70465,73876],[-526,-89],[-343,192],[-301,-46],[26,340],[303,-98],[101,182]],[[69725,74357],[212,-58],[355,425],[-329,311],[-198,-147],[-205,223],[234,382],[-83,58]],[[78495,57780],[-66,713],[178,492],[359,112],[261,-84]],[[79227,59013],[229,-232],[126,407],[246,-217]],[[79828,58971],[64,-394],[-34,-708],[-467,-455],[122,-358],[-292,-43],[-240,-238]],[[78981,56775],[-233,87],[-112,307],[-141,611]],[[85652,73393],[240,-697],[68,-383],[3,-681],[-105,-325],[-252,-113],[-222,-245],[-250,-51],[-31,322],[51,443],[-122,615],[206,99],[-190,506]],[[85048,72883],[17,54],[124,-21],[108,266],[197,29],[118,39],[40,143]],[[55575,75742],[52,132]],[[55627,75874],[66,43],[38,196],[50,33],[40,-84],[52,-36],[36,-94],[46,-28],[54,-110],[39,4],[-31,-144],[-33,-71],[9,-44]],[[55993,75539],[-62,-23],[-164,-91],[-13,-121],[-35,5]],[[63326,68290],[58,-261],[-25,-135],[89,-445]],[[63448,67449],[-196,-16],[-69,282],[-248,57]],[[79227,59013],[90,266],[12,500],[-224,515],[-18,583],[-211,480],[-210,40],[-56,-205],[-163,-17],[-83,104],[-293,-353],[-6,530],[68,623],[-188,27],[-16,355],[-120,182]],[[77809,62643],[59,218],[237,384]],[[78380,63852],[162,-466],[125,-537],[342,-5],[108,-515],[-178,-155],[-80,-212],[333,-353],[231,-699],[175,-520],[210,-411],[70,-418],[-50,-590]],[[59757,70130],[99,482],[138,416],[5,21]],[[59999,71049],[125,-31],[45,-231],[-151,-223],[-68,-323]],[[47857,53158],[-73,-5],[-286,282],[-252,449],[-237,324],[-187,381]],[[46822,54589],[66,189],[15,172],[126,320],[129,276]],[[54125,64088],[-197,-220],[-156,324],[-439,255]],[[52633,68486],[136,137],[24,250],[-30,244],[191,228],[86,189],[135,170],[16,454]],[[53191,70158],[326,-204],[117,51],[232,-98],[368,-264],[130,-526],[250,-114],[391,-248],[296,-293],[136,153],[133,272],[-65,452],[87,288],[200,277],[192,80],[375,-121],[95,-264],[104,-2],[88,-101],[276,-70],[68,-195]],[[56944,63578],[0,-1180],[-320,-2],[-3,-248]],[[56621,62148],[-1108,1131],[-1108,1132],[-280,-323]],[[72718,55024],[-42,-615],[-116,-168],[-242,-135],[-132,470],[-49,849],[126,959],[192,-328],[129,-416],[134,-616]],[[58049,33472],[96,-178],[-85,-288],[-47,-192],[-155,-93],[-51,-188],[-99,-59],[-209,454],[148,374],[151,232],[130,120],[121,-182]],[[56314,82678],[-23,150],[30,162],[-123,94],[-291,103]],[[55907,83187],[-59,497]],[[55848,83684],[318,181],[466,-38],[273,59],[39,-123],[148,-38],[267,-287]],[[56523,82432],[-67,182],[-142,64]],[[55848,83684],[10,445],[136,371],[262,202],[221,-442],[223,12],[53,453]],[[57579,84537],[134,-136],[24,-287],[89,-348]],[[47592,66920],[-42,0],[7,-317],[-172,-19],[-90,-134],[-126,0],[-100,76],[-234,-63],[-91,-460],[-86,-44],[-131,-745],[-386,-637],[-92,-816],[-114,-265],[-33,-213],[-625,-48],[-5,1]],[[45272,63236],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603],[5,8],[139,227],[259,65],[218,404],[140,158],[232,493],[-70,735],[106,508],[37,312],[179,399],[278,270],[206,244],[186,612],[87,362],[205,-2],[167,-251],[264,41],[288,-131],[121,-6]],[[57394,79070],[66,87],[185,58],[204,-184],[115,-22],[125,-159],[-20,-200],[101,-97],[40,-247],[97,-150],[-19,-88],[52,-60],[-74,-44],[-164,18],[-27,81],[-58,-47],[20,-106],[-76,-188],[-49,-203],[-70,-64]],[[57842,77455],[-50,270],[30,252],[-9,259],[-160,352],[-89,249],[-86,175],[-84,58]],[[63761,43212],[74,-251],[69,-390],[45,-711],[72,-276],[-28,-284],[-49,-174],[-94,347],[-53,-175],[53,-438],[-24,-250],[-77,-137],[-18,-500],[-109,-689],[-137,-814],[-172,-1120],[-106,-821],[-125,-685],[-226,-140],[-243,-250],[-160,151],[-220,211],[-77,312],[-18,524],[-98,471],[-26,425],[50,426],[128,102],[1,197],[133,447],[25,377],[-65,280],[-52,372],[-23,544],[97,331],[38,375],[138,22],[155,121],[103,107],[122,7],[158,337],[229,364],[83,297],[-38,253],[118,-71],[153,410],[6,356],[92,264],[96,-254]],[[23016,65864],[-107,-518],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10]],[[24381,59170],[-314,636],[-144,191],[-226,155],[-156,-43],[-223,-223],[-140,-58],[-196,156],[-208,112],[-260,271],[-208,83],[-314,275],[-233,282],[-70,158],[-155,35],[-284,187],[-116,270],[-299,335],[-139,373],[-66,288],[93,57],[-29,169],[64,153],[1,204],[-93,266],[-25,235],[-94,298],[-244,587],[-280,462],[-135,368],[-238,241],[-51,145],[42,365],[-142,138],[-164,287],[-69,412],[-149,48],[-162,311],[-130,288],[-12,184],[-149,446],[-99,452],[5,227],[-201,234],[-93,-25],[-159,163],[-44,-240],[46,-284],[27,-444],[95,-243],[206,-407],[46,-139],[42,-42],[37,-203],[49,8],[56,-381],[85,-150],[59,-210],[174,-300],[92,-550],[83,-259],[77,-277],[15,-311],[134,-20],[112,-268],[100,-264],[-6,-106],[-117,-217],[-49,3],[-74,359],[-181,337],[-201,286],[-142,150],[9,432],[-42,320],[-132,183],[-191,264],[-37,-76],[-70,154],[-171,143],[-164,343],[20,44],[115,-33],[103,221],[10,266],[-214,422],[-163,163],[-102,369],[-103,388],[-129,472],[-113,531]],[[17464,69802],[316,46],[353,64],[-26,-116],[419,-287],[634,-416],[552,4],[221,0],[0,244],[481,0],[102,-210],[142,-186],[165,-260],[92,-309],[69,-325],[144,-178],[230,-177],[175,467],[227,11],[196,-236],[139,-404],[96,-346],[164,-337],[61,-414],[78,-277],[217,-184],[197,-130],[108,18]],[[55993,75539],[95,35],[128,9]],[[46619,59216],[93,107],[47,348],[88,14],[194,-165],[157,117],[107,-39],[42,131],[1114,9],[62,414],[-48,73],[-134,2550],[-134,2550],[425,10]],[[51185,61897],[1,-1361],[-152,-394],[-24,-364],[-247,-94],[-379,-51],[-102,-210],[-178,-23]],[[46801,57931],[13,184],[-24,229],[-104,166],[-54,338],[-13,368]],[[77375,56448],[-27,439],[86,452],[-94,350],[23,644],[-113,306],[-90,707],[-50,746],[-121,490],[-183,-297],[-315,-421],[-156,53],[-172,138],[96,732],[-58,554],[-218,681],[34,213],[-163,76],[-197,481]],[[77809,62643],[-159,-137],[-162,-256],[-196,-26],[-127,-639],[-117,-107],[134,-519],[177,-431],[113,-390],[-101,-514],[-96,-109],[66,-296],[185,-470],[32,-330],[-4,-274],[108,-539],[-152,-551],[-135,-607]],[[55380,75322],[-58,46],[-78,192],[-120,118]],[[55338,76294],[74,-101],[40,-82],[91,-63],[106,-123],[-22,-51]],[[74375,79706],[292,102],[530,509],[423,278],[242,-182],[289,-8],[186,-276],[277,-22],[402,-148],[270,411],[-113,348],[288,612],[311,-244],[252,-69],[327,-152],[53,-443],[394,-248],[263,109],[351,78],[279,-78],[272,-284],[168,-302],[258,6],[350,-96],[255,146],[366,98],[407,416],[166,-63],[146,-198],[331,49]],[[59599,43773],[209,48],[334,-166],[73,74],[193,16],[99,177],[167,-10],[303,230],[221,342]],[[61198,44484],[45,-265],[-11,-588],[34,-519],[11,-923],[49,-290],[-83,-422],[-108,-410],[-177,-366],[-254,-225],[-313,-287],[-313,-634],[-107,-108],[-194,-420],[-115,-136],[-23,-421],[132,-448],[54,-346],[4,-177],[49,29],[-8,-579],[-45,-275],[65,-101],[-41,-245],[-116,-211],[-229,-199],[-334,-320],[-122,-219],[24,-248],[71,-40],[-24,-311]],[[59119,34780],[-211,5]],[[58908,34785],[-24,261],[-41,265]],[[58843,35311],[-23,212],[49,659],[-72,419],[-133,832]],[[58664,37433],[292,671],[74,426],[42,53],[31,348],[-45,175],[12,442],[54,409],[0,748],[-145,190],[-132,43],[-60,146],[-128,125],[-232,-12],[-18,220]],[[58409,41417],[-26,421],[843,487]],[[59226,42325],[159,-284],[77,54],[110,-149],[16,-237],[-59,-274],[21,-417],[181,-365],[85,410],[120,124],[-24,760],[-116,427],[-100,191],[-97,-9],[-77,768],[77,449]],[[46619,59216],[-184,405],[-168,435],[-184,157],[-133,173],[-155,-6],[-135,-129],[-138,51],[-96,-189]],[[45426,60113],[-24,318],[78,291],[34,557],[-30,583],[-34,294],[28,295],[-72,281],[-146,255]],[[45260,62987],[60,197],[1088,-4],[-53,853],[68,304],[261,53],[-9,1512],[911,-31],[1,895]],[[59226,42325],[-147,153],[85,549],[87,205],[-53,490],[56,479],[47,160],[-71,501],[-131,264]],[[59099,45126],[273,-110],[55,-164],[95,-275],[77,-804]],[[78372,54256],[64,-56],[164,-356],[116,-396],[16,-398],[-29,-269],[27,-203],[20,-349],[98,-163],[109,-523],[-5,-199],[-197,-40],[-263,438],[-329,469],[-32,301],[-161,395],[-38,489],[-100,322],[30,431],[-61,250]],[[77801,54399],[48,105],[227,-258],[22,-304],[183,71],[91,243]],[[80461,51765],[204,-202],[214,110],[56,500],[119,112],[333,128],[199,467],[137,374]],[[82069,53798],[214,411],[140,462],[112,2],[143,-299],[13,-257],[183,-165],[231,-177],[-20,-232],[-186,-29],[50,-289],[-205,-201]],[[54540,33696],[-207,446],[-108,432],[-62,575],[-68,428],[-93,910],[-7,707],[-35,322],[-108,243],[-144,489],[-146,708],[-60,371],[-226,577],[-17,453]],[[56448,40227],[228,134],[180,-34],[109,-133],[2,-49]],[[55526,35946],[0,-2182],[-248,-302],[-149,-43],[-175,112],[-125,43],[-47,252],[-109,162],[-133,-292]],[[96049,38125],[228,-366],[144,-272],[-105,-142],[-153,160],[-199,266],[-179,313],[-184,416],[-38,201],[119,-9],[156,-201],[122,-200],[89,-166]],[[54125,64088],[68,-919],[104,-153],[4,-188],[116,-203],[-60,-254],[-107,-1199],[-15,-769],[-354,-557],[-120,-778],[115,-219],[0,-380],[178,-13],[-28,-279]],[[53939,57955],[-52,-13],[-188,647],[-65,24],[-217,-331],[-215,173],[-150,34],[-80,-83],[-163,18],[-164,-252],[-141,-14],[-337,305],[-131,-145],[-142,10],[-104,223],[-279,221],[-298,-70],[-72,-128],[-39,-340],[-80,-238],[-19,-527]],[[52361,53399],[-289,-213],[-105,31],[-107,-132],[-222,13],[-149,370],[-91,427],[-197,389],[-209,-7],[-245,1]],[[26191,57131],[-96,186],[-130,238],[-61,200],[-117,185],[-140,267],[31,91],[46,-88],[21,41]],[[26903,59440],[-24,-57],[-14,-132],[29,-216],[-64,-202],[-30,-237],[-9,-261],[15,-152],[7,-266],[-43,-58],[-26,-253],[19,-156],[-56,-151],[12,-159],[43,-97]],[[50920,80916],[143,162],[244,869],[380,248],[231,-17]],[[58639,91676],[-473,-237],[-224,-54]],[[55734,91409],[-172,-24],[-41,-389],[-523,95],[-74,-329],[-267,2],[-183,-421],[-278,-655],[-431,-831],[101,-202],[-97,-234],[-275,10],[-180,-554],[17,-784],[177,-300],[-92,-694],[-231,-405],[-122,-341]],[[53063,85353],[-187,363],[-548,-684],[-371,-138],[-384,301],[-99,635],[-88,1363],[256,381],[733,496],[549,609],[508,824],[668,1141],[465,444],[763,741],[610,259],[457,-31],[423,489],[506,-26],[499,118],[869,-433],[-358,-158],[305,-371]],[[56867,96577],[-620,-241],[-490,137],[191,152],[-167,189],[575,119],[110,-222],[401,-134]],[[55069,97669],[915,-440],[-699,-233],[-155,-435],[-243,-111],[-132,-490],[-335,-23],[-598,361],[252,210],[-416,170],[-541,499],[-216,463],[757,212],[152,-207],[396,8],[105,202],[408,20],[350,-206]],[[57068,98086],[545,-207],[-412,-318],[-806,-70],[-819,98],[-50,163],[-398,11],[-304,271],[858,165],[403,-142],[281,177],[702,-148]],[[98060,26404],[63,-244],[198,239],[80,-249],[0,-249],[-103,-274],[-182,-435],[-142,-238],[103,-284],[-214,-7],[-238,-223],[-75,-387],[-157,-597],[-219,-264],[-138,-169],[-256,13],[-180,194],[-302,42],[-46,217],[149,438],[349,583],[179,111],[200,225],[238,310],[167,306],[123,441],[106,149],[41,330],[195,273],[61,-251]],[[98502,29218],[202,-622],[5,403],[126,-161],[41,-447],[224,-192],[188,-48],[158,226],[141,-69],[-67,-524],[-85,-345],[-212,12],[-74,-179],[26,-254],[-41,-110],[-105,-319],[-138,-404],[-214,-236],[-48,155],[-116,85],[160,486],[-91,326],[-299,236],[8,214],[201,206],[47,455],[-13,382],[-113,396],[8,104],[-133,244],[-218,523],[-117,418],[104,46],[151,-328],[216,-153],[78,-526]],[[64752,60417],[-91,413],[-217,975]],[[64444,61805],[833,591],[185,1182],[-127,418]],[[65665,65306],[125,-404],[155,-214],[203,-78],[165,-107],[125,-339],[75,-196],[100,-75],[-1,-132],[-101,-352],[-44,-166],[-117,-189],[-104,-404],[-126,31],[-58,-141],[-44,-300],[34,-395],[-26,-72],[-128,2],[-174,-221],[-27,-288],[-63,-125],[-173,5],[-109,-149],[1,-238],[-134,-165],[-153,56],[-186,-199],[-128,-34]],[[65575,65974],[80,201],[35,-51],[-26,-244],[-37,-108]],[[68937,64577],[-203,150],[-83,424],[-215,450],[-512,-111],[-451,-11],[-391,-83]],[[28366,54848],[-93,170],[-59,319],[68,158],[-70,40],[-52,196],[-138,164],[-122,-38],[-56,-205],[-112,-149],[-61,-20],[-27,-123],[132,-321],[-75,-76],[-40,-87],[-130,-30],[-48,353],[-36,-101],[-92,35],[-56,238],[-114,39],[-72,69],[-119,-1],[-8,-128],[-32,89]],[[27070,56232],[100,-212],[-6,-126],[111,-26],[26,48],[77,-145],[136,42],[119,150],[168,119],[95,176],[153,-34],[-10,-58],[155,-21],[124,-102],[90,-177],[105,-164]],[[30452,39739],[-279,340],[-24,242],[-551,593],[-498,646],[-214,365],[-115,488],[46,170],[-236,775],[-274,1090],[-262,1177],[-114,269],[-87,435],[-216,386],[-198,239],[90,264],[-134,563],[86,414],[221,373]],[[85104,55551],[28,-392],[16,-332],[-94,-540],[-102,602],[-130,-300],[89,-435],[-79,-277],[-327,343],[-78,428],[84,280],[-176,280],[-87,-245],[-131,23],[-205,-330],[-46,173],[109,498],[175,166],[151,223],[98,-268],[212,162],[45,264],[196,15],[-16,457],[225,-280],[23,-297],[20,-218]],[[84439,56653],[-100,-195],[-87,-373],[-87,-175],[-171,409],[57,158],[70,165],[30,367],[153,35],[-44,-398],[205,570],[-26,-563]],[[82917,56084],[-369,-561],[136,414],[200,364],[167,409],[146,587],[49,-482],[-183,-325],[-146,-406]],[[83856,57606],[166,-183],[177,1],[-5,-247],[-129,-251],[-176,-178],[-10,275],[20,301],[-43,282]],[[84861,57766],[78,-660],[-214,157],[5,-199],[68,-364],[-132,-133],[-11,416],[-84,31],[-43,357],[163,-47],[-4,224],[-169,451],[266,-13],[77,-220]],[[83757,58301],[-74,-510],[-119,295],[-142,450],[238,-22],[97,-213]],[[83700,61512],[171,-168],[85,153],[26,-150],[-46,-245],[95,-423],[-73,-491],[-164,-196],[-43,-476],[62,-471],[147,-65],[123,70],[347,-328],[-27,-321],[91,-142],[-29,-272],[-216,290],[-103,310],[-71,-217],[-177,354],[-253,-87],[-138,130],[14,244],[87,151],[-83,136],[-36,-213],[-137,340],[-41,257],[-11,566],[112,-195],[29,925],[90,535],[169,-1]],[[93299,46550],[-78,-59],[-120,227],[-122,375],[-59,450],[38,57],[30,-175],[84,-134],[135,-375],[131,-200],[-39,-166]],[[92217,47343],[-146,-48],[-44,-166],[-152,-144],[-142,-138],[-148,1],[-228,171],[-158,165],[23,183],[249,-86],[152,46],[42,283],[40,15],[27,-314],[158,45],[78,202],[155,211],[-30,348],[166,11],[56,-97],[-5,-327],[-93,-361]],[[89166,49043],[482,-407],[513,-338],[192,-302],[154,-297],[43,-349],[462,-365],[68,-313],[-256,-64],[62,-393],[248,-388],[180,-627],[159,20],[-11,-262],[215,-100],[-84,-111],[295,-249],[-30,-171],[-184,-41],[-69,153],[-238,66],[-281,89],[-216,377],[-158,325],[-144,517],[-362,259],[-235,-169],[-170,-195],[35,-436],[-218,-203],[-155,99],[-288,25]],[[92538,47921],[-87,-157],[-52,348],[-65,229],[-126,193],[-158,252],[-200,174],[77,143],[150,-166],[94,-130],[117,-142],[111,-248],[106,-189],[33,-307]],[[53922,82340],[189,174],[434,273],[350,200],[277,-100],[21,-144],[268,-7]],[[55461,82736],[342,-67],[511,9]],[[56535,81053],[139,-515],[-29,-166],[-138,-69],[-252,-491],[71,-266],[-60,35]],[[56266,79581],[-264,227],[-200,-84],[-131,61],[-165,-127],[-140,210],[-114,-81],[-16,36]],[[31588,61519],[142,-52],[50,-118],[-71,-149],[-209,4],[-163,-21],[-16,253],[40,86],[227,-3]],[[86288,75628],[39,-104]],[[86327,75524],[-106,36],[-120,-200],[-83,-202],[10,-424],[-143,-130],[-50,-105],[-104,-174],[-185,-97],[-121,-159],[-9,-256],[-32,-65],[111,-96],[157,-259]],[[85048,72883],[-135,112],[-34,-111],[-81,-49],[-10,112],[-72,54],[-75,94],[76,260],[66,69],[-25,108],[71,319],[-18,96],[-163,65],[-131,158]],[[47929,72498],[-112,-153],[-146,83],[-143,-65],[42,462],[-26,363],[-124,55],[-67,224],[22,386],[111,215],[20,239],[58,355],[-6,250],[-56,212],[-12,200]],[[64113,65205],[-18,430],[75,310],[76,64],[84,-185],[5,-346],[-61,-348]],[[64274,65130],[-77,-42],[-84,117]],[[56308,78869],[120,127],[172,-65],[178,-3],[129,-144],[95,91],[205,56],[69,139],[118,0]],[[57842,77455],[124,-109],[131,95],[126,-101]],[[58223,77340],[6,-152],[-135,-128],[-84,56],[-78,-713]],[[56293,76715],[-51,103],[65,99],[-69,74],[-87,-133],[-162,172],[-22,244],[-169,139],[-31,188],[-151,232]],[[89901,80562],[280,-1046],[-411,195],[-171,-854],[271,-605],[-8,-413],[-211,356],[-182,-457],[-51,496],[31,575],[-32,638],[64,446],[13,790],[-163,581],[24,808],[257,271],[-110,274],[123,83],[73,-391],[96,-569],[-7,-581],[114,-597]],[[55461,82736],[63,260],[383,191]],[[99999,92429],[-305,-30],[-49,187],[-99645,247],[36,24],[235,-1],[402,-169],[-24,-81],[-286,-141],[-363,-36],[99999,0]],[[89889,93835],[-421,-4],[-569,66],[-49,31],[263,234],[348,54],[394,-226],[34,-155]],[[91869,94941],[-321,-234],[-444,53],[-516,233],[66,192],[518,-89],[697,-155]],[[90301,95224],[-219,-439],[-1023,16],[-461,-139],[-550,384],[149,406],[366,111],[734,-26],[1004,-313]],[[65981,92363],[-164,-52],[-907,77],[-74,262],[-503,158],[-40,320],[284,126],[-10,323],[551,503],[-255,73],[665,518],[-75,268],[621,312],[917,380],[925,110],[475,220],[541,76],[193,-233],[-187,-184],[-984,-293],[-848,-282],[-863,-562],[-414,-577],[-435,-568],[56,-491],[531,-484]],[[63639,77993],[-127,-350],[-269,-97],[-276,-610],[252,-561],[-27,-398],[303,-696]],[[61098,76242],[-354,499],[-317,223],[-240,347],[202,95],[231,494],[-156,234],[410,241],[-8,129],[-249,-95]],[[60617,78409],[9,262],[143,165],[269,43],[44,197],[-62,326],[113,310],[-3,173],[-410,192],[-162,-6],[-172,277],[-213,-94],[-352,208],[6,116],[-99,256],[-222,29],[-23,183],[70,120],[-178,334],[-288,-57],[-84,30],[-70,-134],[-104,23]],[[57772,85719],[316,327],[-291,280]],[[58639,91676],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433],[18,-274],[18,-604],[358,-180],[217,-153],[36,286],[-168,254],[177,224],[672,-368],[233,144],[-186,433],[647,578],[256,-34],[260,-206],[161,406],[-231,352],[136,353],[-204,367],[777,-190],[158,-331],[-351,-73],[1,-328],[219,-203],[429,128],[68,377],[580,282],[970,507],[209,-29],[-273,-359],[344,-61],[199,202],[521,16],[412,245],[317,-356],[315,391],[-291,343],[145,195],[820,-179],[385,-185],[1006,-675],[186,309],[-282,313],[-8,125],[-335,58],[92,280],[-149,461],[-8,189],[512,535],[183,537],[206,116],[736,-156],[57,-328],[-263,-479],[173,-189],[89,-413],[-63,-809],[307,-362],[-120,-395],[-544,-839],[318,-87],[110,213],[306,151],[74,293],[240,281],[-162,336],[130,390],[-304,49],[-67,328],[222,593],[-361,482],[497,398],[-64,421],[139,13],[145,-328],[-109,-570],[297,-108],[-127,426],[465,233],[577,31],[513,-337],[-247,492],[-28,630],[483,119],[669,-26],[602,77],[-226,309],[321,388],[319,16],[540,293],[734,79],[93,162],[729,55],[227,-133],[624,314],[510,-10],[77,255],[265,252],[656,242],[476,-191],[-378,-146],[629,-90],[75,-292],[254,143],[812,-7],[626,-289],[223,-221],[-69,-307],[-307,-175],[-730,-328],[-209,-175],[345,-83],[410,-149],[251,112],[141,-379],[122,153],[444,93],[892,-97],[67,-276],[1162,-88],[15,451],[590,-104],[443,4],[449,-312],[128,-378],[-165,-247],[349,-465],[437,-240],[268,620],[446,-266],[473,159],[538,-182],[204,166],[455,-83],[-201,549],[367,256],[2509,-384],[236,-351],[727,-451],[1122,112],[553,-98],[231,-244],[-33,-432],[342,-168],[372,121],[492,15],[525,-116],[526,66],[484,-526],[344,189],[-224,378],[123,262],[886,-165],[578,36],[799,-282],[-99610,-258],[681,-451],[728,-588],[-24,-367],[187,-147],[-64,429],[754,-88],[544,-553],[-276,-257],[-455,-61],[-7,-578],[-111,-122],[-260,17],[-212,206],[-369,172],[-62,257],[-283,96],[-315,-76],[-151,207],[60,219],[-333,-140],[126,-278],[-158,-251],[99997,-3],[-357,-260],[-360,44],[250,-315],[166,-487],[128,-159],[32,-244],[-71,-157],[-518,129],[-777,-445],[-247,-69],[-425,-415],[-403,-362],[-102,-269],[-397,409],[-724,-464],[-126,219],[-268,-253],[-371,81],[-90,-388],[-333,-572],[10,-239],[316,-132],[-37,-860],[-258,-22],[-119,-494],[116,-255],[-486,-302],[-96,-674],[-415,-144],[-83,-600],[-400,-551],[-103,407],[-119,862],[-155,1313],[134,819],[234,353],[14,276],[432,132],[496,744],[479,608],[499,471],[223,833],[-337,-50],[-167,-487],[-705,-649],[-227,727],[-717,-201],[-696,-990],[230,-362],[-620,-154],[-430,-61],[20,427],[-431,90],[-344,-291],[-850,102],[-914,-175],[-899,-1153],[-1065,-1394],[438,-74],[136,-370],[270,-132],[178,295],[305,-38],[401,-650],[9,-503],[-217,-590],[-23,-705],[-126,-945],[-418,-855],[-94,-409],[-377,-688],[-374,-682],[-179,-349],[-370,-346],[-175,-8],[-175,287],[-373,-432],[-43,-197]],[[79187,96845],[-1566,-228],[507,776],[229,66],[208,-38],[704,-336],[-82,-240]],[[64204,98169],[-373,-78],[-250,-45],[-39,-97],[-324,-98],[-301,140],[158,185],[-618,18],[542,107],[422,8],[57,-160],[159,142],[262,97],[412,-129],[-107,-90]],[[77760,97184],[-606,-73],[-773,170],[-462,226],[-213,423],[-379,117],[722,404],[600,133],[540,-297],[640,-572],[-69,-531]],[[58449,49909],[110,-333],[-16,-348],[-80,-74]],[[58216,49787],[67,-60],[166,182]],[[45260,62987],[12,249]],[[61883,60238],[-37,252],[-83,178],[-22,236],[-143,212],[-148,495],[-79,482],[-192,406],[-124,97],[-184,563],[-32,411],[12,350],[-159,655],[-130,231],[-150,122],[-92,339],[15,133],[-77,306],[-81,132],[-108,440],[-170,476],[-141,406],[-139,-3],[44,325],[12,206],[34,236]],[[63448,67449],[109,-510],[137,-135],[47,-207],[190,-249],[16,-243],[-27,-197],[35,-199],[80,-165],[37,-194],[41,-145]],[[64274,65130],[53,-226]],[[64444,61805],[-801,-226],[-259,-266],[-199,-620],[-130,-99],[-70,197],[-106,-30],[-269,60],[-50,59],[-321,-14],[-75,-53],[-114,153],[-74,-290],[28,-249],[-121,-189]],[[59434,56171],[-39,12],[5,294],[-33,203],[-143,233],[-34,426],[34,436],[-129,41],[-19,-132],[-167,-30],[67,-173],[23,-355],[-152,-324],[-138,-426],[-144,-61],[-233,345],[-105,-122],[-29,-172],[-143,-112],[-9,-122],[-277,0],[-38,122],[-200,20],[-100,-101],[-77,51],[-143,344],[-48,163],[-200,-81],[-76,-274],[-72,-528],[-95,-111],[-85,-65]],[[56635,55672],[-23,28]],[[56351,57163],[3,143],[-102,174],[-3,343],[-58,228],[-98,-34],[28,217],[72,246],[-32,245],[92,181],[-58,138],[73,365],[127,435],[240,-41],[-14,2345]],[[60240,63578],[90,-580],[-61,-107],[40,-608],[102,-706],[106,-145],[152,-219]],[[59433,56242],[1,-71]],[[59434,56171],[3,-460]],[[59445,53091],[-171,-272],[-195,1],[-224,-138],[-176,132],[-115,-161]],[[56824,55442],[-189,230]],[[45357,58612],[-115,460],[-138,210],[122,112],[134,415],[66,304]],[[45367,57897],[-46,453]],[[95032,44386],[78,-203],[-194,4],[-106,363],[166,-142],[56,-22]],[[94680,44747],[-108,-14],[-170,60],[-58,91],[17,235],[183,-93],[91,-124],[45,-155]],[[94910,44908],[-42,-109],[-206,512],[-57,353],[94,0],[100,-473],[111,-283]],[[94409,45654],[12,-119],[-218,251],[-152,212],[-104,197],[41,60],[128,-142],[228,-272],[65,-187]],[[93760,46238],[-56,-33],[-121,134],[-114,243],[14,99],[166,-250],[111,-193]],[[46822,54589],[-75,44],[-200,238],[-144,316],[-49,216],[-34,437]],[[25613,58487],[-31,-139],[-161,9],[-100,57],[-115,117],[-154,37],[-79,127]],[[61984,57352],[91,-109],[54,-245],[125,-247],[138,-2],[262,151],[302,70],[245,184],[138,39],[99,108],[158,20]],[[63596,57321],[-2,-9],[-1,-244],[0,-596],[0,-308],[-125,-363],[-194,-493]],[[63596,57321],[89,12],[128,88],[147,59],[132,202],[105,2],[6,-163],[-25,-344],[1,-310],[-59,-214],[-78,-639],[-134,-659],[-172,-755],[-238,-866],[-237,-661],[-327,-806],[-278,-479],[-415,-586],[-259,-450],[-304,-715],[-64,-312],[-63,-140]],[[34125,54109],[333,-119],[30,107],[225,43],[298,-159]],[[34889,53069],[109,-351],[-49,-254],[-24,-270],[-71,-248]],[[56266,79581],[-77,-154],[-55,-238]],[[53809,77462],[62,54]],[[56639,89578],[-478,-167],[-269,-413],[43,-361],[-441,-475],[-537,-509],[-202,-832],[198,-416],[265,-328],[-255,-666],[-289,-138],[-106,-992],[-157,-554],[-337,57],[-158,-468],[-321,-27],[-89,558],[-232,671],[-211,835]],[[58908,34785],[-56,-263],[-163,-63],[-166,320],[-2,204],[76,222],[26,172],[80,42],[140,-108]],[[59999,71049],[-26,452],[68,243]],[[60041,71744],[74,129],[75,130],[15,329],[91,-115],[306,165],[147,-112],[229,2],[320,222],[149,-10],[316,92]],[[50518,54209],[-224,-126]],[[78495,57780],[-249,271],[-238,-11],[41,464],[-245,-3],[-22,-650],[-150,-863],[-90,-522],[19,-428],[181,-18],[113,-539],[50,-512],[155,-338],[168,-69],[144,-306]],[[77801,54399],[-110,227],[-47,292],[-148,334],[-135,280],[-45,-347],[-53,328],[30,369],[82,566]],[[68841,72526],[156,598],[-60,440],[-204,140],[72,261],[232,-28],[132,326],[89,380],[371,137],[-58,-274],[40,-164],[114,15]],[[64978,72558],[-52,417],[40,618],[-216,200],[71,405],[-184,34],[61,498],[262,-145],[244,189],[-202,355],[-80,338],[-224,-151],[-28,-433],[-87,383]],[[65546,74986],[313,8],[-45,297],[237,204],[234,343],[374,-312],[30,-471],[106,-121],[301,27],[93,-108],[137,-609],[317,-408],[181,-278],[291,-289],[369,-253],[-7,-362]],[[84713,45326],[32,139],[239,133],[194,20],[87,74],[105,-74],[-102,-160],[-289,-258],[-233,-170]],[[32866,56937],[160,77],[58,-21],[-11,-440],[-232,-65],[-50,53],[81,163],[-6,233]],[[52339,72408],[302,239],[195,-71],[-9,-299],[236,217],[20,-113],[-139,-290],[-2,-273],[96,-147],[-36,-511],[-183,-297],[53,-322],[143,-10],[70,-281],[106,-92]],[[60041,71744],[-102,268],[105,222],[-169,-51],[-233,136],[-191,-340],[-421,-66],[-225,317],[-300,20],[-64,-245],[-192,-70],[-268,314],[-303,-11],[-165,588],[-203,328],[135,459],[-176,283],[308,565],[428,23],[117,449],[529,-78],[334,383],[324,167],[459,13],[485,-417],[399,-228],[323,91],[239,-53],[328,309]],[[57776,75399],[33,-228],[243,-190],[-51,-145],[-330,-33],[-118,-182],[-232,-319],[-87,276],[3,121]],[[83826,64992],[-167,-947],[-119,-485],[-146,499],[-32,438],[163,581],[223,447],[127,-176],[-49,-357]],[[60889,47817],[-128,-728],[16,-335],[178,-216],[8,-153],[-76,-357],[16,-180],[-18,-282],[97,-370],[115,-583],[101,-129]],[[59099,45126],[-157,177],[-177,100],[-111,99],[-116,150]],[[58388,46397],[-161,331],[-55,342]],[[58449,49909],[98,71],[304,-7],[566,45]],[[60617,78409],[-222,-48],[-185,-191],[-260,-31],[-239,-220],[16,-368],[136,-142],[284,35],[-55,-210],[-304,-103],[-377,-342],[-154,121],[61,277],[-304,173],[50,113],[265,197],[-80,135],[-432,149],[-19,221],[-257,-73],[-103,-325],[-215,-437]],[[35174,30629],[-121,-372],[-313,-328],[-205,118],[-151,-63],[-256,253],[-189,-19],[-169,327]],[[6794,61855],[-41,-99],[-69,84],[8,165],[-46,216],[14,65],[48,97],[-19,116],[16,55],[21,-11],[107,-100],[49,-51],[45,-79],[71,-207],[-7,-33],[-108,-126],[-89,-92]],[[6645,62777],[-94,-43],[-47,125],[-32,48],[-3,37],[27,50],[99,-56],[73,-90],[-23,-71]],[[6456,63091],[-9,-63],[-149,17],[21,72],[137,-26]],[[6207,63177],[-15,-34],[-19,8],[-97,21],[-35,133],[-11,24],[74,82],[23,-38],[80,-196]],[[5737,63567],[-33,-58],[-93,107],[14,43],[43,58],[64,-12],[5,-138]],[[31350,77248],[48,-194],[-296,-286],[-286,-204],[-293,-175],[-147,-351],[-47,-133],[-3,-313],[92,-313],[115,-15],[-29,216],[83,-131],[-22,-169],[-188,-96],[-133,11],[-205,-103],[-121,-29],[-162,-29],[-231,-171],[408,111],[82,-112],[-389,-177],[-177,-1],[8,72],[-84,-164],[82,-27],[-60,-424],[-203,-455],[-20,152],[-61,30],[-91,148],[57,-318],[69,-105],[5,-223],[-89,-230],[-157,-472],[-25,24],[86,402],[-142,225],[-33,491],[-53,-255],[59,-375],[-183,93],[191,-191],[12,-562],[79,-41],[29,-204],[39,-591],[-176,-439],[-288,-175],[-182,-346],[-139,-38],[-141,-217],[-39,-199],[-305,-383],[-157,-281],[-131,-351],[-43,-419],[50,-411],[92,-505],[124,-418],[1,-256],[132,-685],[-9,-398],[-12,-230],[-69,-361],[-83,-75],[-137,72],[-44,259],[-105,136],[-148,508],[-129,452],[-42,231],[57,393],[-77,325],[-217,494],[-108,90],[-281,-268],[-49,30],[-135,275],[-174,147],[-314,-75],[-247,66],[-212,-41],[-114,-92],[50,-157],[-5,-240],[59,-117],[-53,-77],[-103,87],[-104,-112],[-202,18],[-207,312],[-242,-73],[-202,137],[-173,-42],[-234,-138],[-253,-438],[-276,-255],[-152,-282],[-63,-266],[-3,-407],[14,-284],[52,-201]],[[17464,69802],[-46,302],[-180,340],[-130,71],[-30,169],[-156,30],[-100,159],[-258,59],[-71,95],[-33,324],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557],[34,536],[33,536],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558],[69,156],[-45,484],[-94,485]],[[7498,84325],[-277,-225],[-142,152],[-43,277],[252,210],[148,90],[185,-40],[117,-183],[-240,-281]],[[4006,85976],[-171,-92],[-182,110],[-168,161],[274,101],[220,-54],[27,-226]],[[2297,88264],[171,-113],[173,61],[225,-156],[276,-79],[-23,-64],[-211,-125],[-211,128],[-106,107],[-245,-34],[-66,52],[17,223]],[[13740,82958],[-153,223],[-245,188],[-78,515],[-358,478],[-150,558],[-267,38],[-441,15],[-326,170],[-574,613],[-266,112],[-486,211],[-385,-51],[-546,272],[-330,252],[-309,-125],[58,-411],[-154,-38],[-321,-123],[-245,-199],[-308,-126],[-39,348],[125,580],[295,182],[-76,148],[-354,-329],[-190,-394],[-400,-420],[203,-287],[-262,-424],[-299,-248],[-278,-180],[-69,-261],[-434,-305],[-87,-278],[-325,-252],[-191,45],[-259,-165],[-282,-201],[-231,-197],[-477,-169],[-43,99],[304,276],[271,182],[296,324],[345,66],[137,243],[385,353],[62,119],[205,208],[48,448],[141,349],[-320,-179],[-90,102],[-150,-215],[-181,300],[-75,-212],[-104,294],[-278,-236],[-170,0],[-24,352],[50,216],[-179,211],[-361,-113],[-235,277],[-190,142],[-1,334],[-214,252],[108,340],[226,330],[99,303],[225,43],[191,-94],[224,285],[201,-51],[212,183],[-52,270],[-155,106],[205,228],[-170,-7],[-295,-128],[-85,-131],[-219,131],[-392,-67],[-407,142],[-117,238],[-351,343],[390,247],[620,289],[228,0],[-38,-296],[586,23],[-225,366],[-342,225],[-197,296],[-267,252],[-381,187],[155,309],[493,19],[350,270],[66,287],[284,281],[271,68],[526,262],[256,-40],[427,315],[421,-124],[201,-266],[123,114],[469,-35],[-16,-136],[425,-101],[283,59],[585,-186],[534,-56],[214,-77],[370,96],[421,-177],[302,-83]],[[30185,57537],[-8,-139],[-163,-69],[91,-268],[-3,-309],[-123,-344],[105,-468],[120,38],[62,427],[-86,208],[-14,447],[346,241],[-38,278],[97,186],[100,-415],[195,-9],[180,-330],[11,-195],[249,-6],[297,61],[159,-264],[213,-74],[155,185],[4,149],[344,35],[333,9],[-236,-175],[95,-279],[222,-44],[210,-291],[45,-473],[144,13],[109,-139]],[[80013,63313],[-371,-505],[-231,-558],[-61,-410],[212,-623],[260,-772],[252,-365],[169,-475],[127,-1093],[-37,-1039],[-232,-389],[-318,-381],[-227,-492],[-346,-550],[-101,378],[78,401],[-206,335]],[[96623,40851],[-92,-78],[-93,259],[10,158],[175,-339]],[[96418,41756],[45,-476],[-75,74],[-58,-32],[-39,163],[-6,453],[133,-182]],[[64752,60417],[-201,-158],[-54,-263],[-6,-201],[-277,-249],[-444,-276],[-249,-417],[-122,-33],[-83,35],[-163,-245],[-177,-114],[-233,-30],[-70,-34],[-61,-156],[-73,-43],[-43,-150],[-137,13],[-89,-80],[-192,30],[-72,345],[8,323],[-46,174],[-54,437],[-80,243],[56,29],[-29,270],[34,114],[-12,257]],[[58175,37528],[113,-7],[134,-100],[94,71],[148,-59]],[[59119,34780],[-70,-430],[-32,-491],[-72,-267],[-190,-298],[-54,-86],[-118,-300],[-77,-303],[-158,-424],[-314,-609],[-196,-355],[-210,-269],[-290,-229],[-141,-31],[-36,-164],[-169,88],[-138,-113],[-301,114],[-168,-72],[-115,31],[-286,-233],[-238,-94],[-171,-223],[-127,-14],[-117,210],[-94,11],[-120,264],[-13,-82],[-37,159],[2,346],[-90,396],[89,108],[-7,453],[-182,553],[-139,501],[-1,1],[-199,768]],[[58409,41417],[-210,-81],[-159,-235],[-33,-205],[-100,-46],[-241,-486],[-154,-383],[-94,-13],[-90,68],[-311,65]]],"bbox":[-180,-85.60903777459767,180,83.64513000000001],"transform":{"scale":[0.0036000360003600037,0.00169255860333201],"translate":[-180,-85.60903777459767]}};

/***/ })
/******/ ]);