(this["webpackJsonpluminescence"] = this["webpackJsonpluminescence"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* If the screen size is 768px wide or less, hide the element */\n@media only screen and (max-width: 200px) {\n  div.horizontal-container {\n    display: none;\n  }\n  div.coming-soon {\n    display: flex;\n  }\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  overflow-y: hidden;\n  height: 100%;\n  font-family: \"Poppins\", sans-serif;\n}\n\n#root {\n  width: 100%;\n  height: 100%;\n}\n\nh2 {\n  font-weight: bold;\n  font-size: 24px;\n  margin: 0px;\n}\n\n.coming-soon {\n  display: none;\n  width: 100%;\n  height: 100%;\n  margin-top: 50px;\n  text-align: center;\n  justify-content: space-evenly;\n  background-color: #dc3545;\n  color: #fff;\n}\n\n.coming-soon-heading {\n  font-weight: 600;\n  font-size: 2rem;\n  margin: auto auto;\n}\n\n.horizontal-flex {\n  display: flex;\n  flex-direction: row;\n  width: max-content;\n  height: 100%;\n}\n\n.vertical-centre {\n  margin: auto 0px;\n}\n\n.horizontal-container {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n}\n\n/*\n * Sidebar\n */\n\n.sidebar {\n  z-index: 1;\n  width: 50px;\n  min-width: 50px;\n  display: flex;\n  flex-direction: column;\n  color: #5a6268;\n  background-color: #ffffff;\n  font-weight: bold;\n  font-size: 1.75rem;\n  justify-content: space-between;\n  padding-bottom: 4rem;\n\n  overflow-y: scroll;\n  -ms-overflow-style: none; /* Internet Explorer 10+ */\n  scrollbar-width: none; /* Firefox */\n}\n::-webkit-scrollbar {\n  width: 0px;\n}\n\n.vertical-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.nav-sidebar {\n  width: 100%;\n  z-index: 1;\n}\n\n.nav-sidebar > li > div {\n  position: relative;\n  display: inline-block;\n  padding: 0.3rem 0 0.5rem 0.6rem;\n  width: 100%;\n  z-index: 1;\n}\n.nav-sidebar > li > div:hover {\n  cursor: pointer;\n  background-color: #aaaaaa;\n  color: #fff;\n}\n\n.nav-sidebar > .active > div {\n  background-color: #dc3545;\n  color: #ffffff;\n}\n\nhr {\n  border-color: #dc3545;\n  border-width: 2px;\n  border-style: solid;\n  width: 25%;\n  text-align: left;\n  margin: 0px 0px 10px 30px;\n  border-radius: 2px;\n}\n\n.small-underline {\n  width: 40px;\n  margin: 5px 0;\n}\n\n.small-underline-right {\n  width: 40px;\n  margin: 0 20px 10px auto;\n  text-align: right;\n}\n\n#context-menu {\n  display: none;\n  margin: 0px 20px;\n  padding-bottom: 50px;\n  font-weight: normal;\n  font-size: 16px;\n  color: #5a6268;\n  background-color: #ffffff;\n}\n::-webkit-scrollbar {\n  width: 0px;\n}\n\n.panel {\n  margin-top: 10px;\n  margin-bottom: 5px;\n  font-weight: 600;\n  border-color: #5a6268;\n  border-width: 2px;\n  border-style: solid;\n  padding: 5px 30px;\n  color: #5a6268;\n}\n\n.lead {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #5a6268;\n  width: 100%;\n  padding: 2px 20px;\n}\n\n.outline-button {\n  border-radius: 0;\n}\n\n.form-group {\n  margin-bottom: 0.5rem;\n  color: #5a6268;\n}\n\nsmall {\n  color: #5a6268;\n}\n\n.control-label {\n  font-size: 14px;\n}\n\n.form-control {\n  width: 100px;\n  height: max-content;\n  padding: 0.2rem 0.75rem;\n}\n\n/* [type=\"checkbox\"]:not(:checked),\n[type=\"checkbox\"]:checked {\n  position: absolute;\n  left: -9999px;\n}\n[type=\"checkbox\"]:not(:checked) + label,\n[type=\"checkbox\"]:checked + label {\n  position: relative;\n  padding-left: 1.95em;\n  cursor: pointer;\n}\n\n/* checkbox aspect \n[type=\"checkbox\"]:not(:checked) + label:before,\n[type=\"checkbox\"]:checked + label:before {\n  content: \"\";\n  position: absolute;\n  left: 0.3rem;\n  top: 0.1rem;\n  width: 1.1em;\n  height: 1.1em;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n/* checked mark aspect \n[type=\"checkbox\"]:not(:checked) + label:after,\n[type=\"checkbox\"]:checked + label:after {\n  content: \"\\2713\\0020\";\n  position: absolute;\n  top: 0.13em;\n  left: 0.4em;\n  font-size: 1.2em;\n  line-height: 0.8;\n  color: #5A6268;\n  transition: all 0.2s;\n  font-family: \"Lucida Sans Unicode\", \"Arial Unicode MS\", Arial;\n}\n/* checked mark aspect changes \n[type=\"checkbox\"]:not(:checked) + label:after {\n  opacity: 0;\n  transform: scale(0);\n}\n[type=\"checkbox\"]:checked + label:after {\n  opacity: 1;\n  transform: scale(1);\n} */\n\n.texture-tiles {\n  width: 100%;\n}\n\n#texture-context-container {\n  position: absolute;\n  top: 50px;\n  left: 50px;\n  z-index: 2;\n  width: max-content;\n  max-width: 240px;\n  background-color: #ffffff;\n\n  overflow-y: scroll;\n  -ms-overflow-style: none; /* Internet Explorer 10+ */\n  scrollbar-width: none; /* Firefox */\n}\n::-webkit-scrollbar {\n  width: 0px;\n}\n\n#floorTexturesDiv {\n  margin: 0;\n  padding-bottom: 50px;\n  height: 100%;\n  background-color: #ffffff;\n}\n\n#wallTextures {\n  margin: 0;\n  padding-bottom: 50px;\n  height: 100%;\n  background-color: #ffffff;\n}\n\n.texture-panel {\n  margin-bottom: 5px;\n  font-weight: 600;\n  padding: 5px 20px;\n  color: #5a6268;\n}\n\n.texture-panel-heading {\n  font-size: 16px;\n}\n\n.texture-select-thumbnail {\n  display: inline-block;\n  width: 5rem;\n  min-width: 100px;\n  margin: auto;\n}\n\n.texture-select-thumbnail:hover {\n  cursor: pointer;\n}\n\n.thumbnail {\n  width: 100%;\n  height: 5rem;\n  border-radius: 10px;\n  padding: 2px;\n  object-fit: cover;\n}\n\n/*\n * Main content\n */\n\n#loading-modal {\n  position: absolute;\n  z-index: 10;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: rgba(50, 50, 50, 0.9);\n}\n\n#loading-modal h1 {\n  text-align: center;\n  margin-top: 30%;\n  color: #fff;\n}\n\n.right-container {\n  z-index: 1;\n  flex: 1 1 auto;\n}\n\n#camera-controls {\n  position: absolute;\n  bottom: 20px;\n  right: 0;\n  padding: 0 20px;\n  text-align: right;\n}\n\n.basic-button {\n  padding: 3px 8px 6px 8px;\n  text-align: center;\n  margin: 1px;\n}\n\n.lean-button {\n  padding: 0px;\n  text-align: center;\n  margin: 1px;\n}\n\n.file-button {\n  display: inline-block;\n  cursor: pointer;\n  padding: 3px 8px 6px 8px;\n}\n\nlabel {\n  margin-bottom: 0px;\n}\n\n.vertical-controls-container {\n  display: inline-flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-basis: fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  vertical-align: middle;\n}\n\n#floorplanner {\n  display: none;\n}\n\n#floorplanner-controls {\n  position: absolute;\n  right: 0;\n  top: 40px;\n  margin: 50px 0;\n  padding: 0 20px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n#draw-walls-hint {\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #ffffff;\n  padding: 5px 10px;\n  z-index: 10;\n  display: none;\n}\n\n.icon-text-button {\n  display: inline-flex;\n  padding: 1px 8px 3px 8px;\n  align-content: center;\n  margin: 1px;\n}\n\n.icon-centre {\n  margin: 2px 1px 1px 1px;\n}\n\n.text-centre {\n  margin: 1px;\n  padding-top: 2px;\n  padding-left: 2px;\n}\n\n/* ADD ITEMS */\n#add-items {\n  justify-content: start;\n  padding-bottom: 100px;\n  height: 100%;\n  margin: 10px;\n  display: none;\n  flex: 1 1 auto;\n  overflow-y: scroll;\n  -ms-overflow-style: none; /* Internet Explorer 10+ */\n  scrollbar-width: none; /* Firefox */\n}\n::-webkit-scrollbar {\n  width: 0px;\n}\n\n.item-card {\n  width: 16rem;\n  min-width: 15rem;\n  margin: 20px;\n  display: inline-block;\n  border: 4px solid #fff;\n  border-radius: 0;\n  box-shadow: 10px 10px 5px #aaaaaa;\n  transition: 0.1s all ease-in-out;\n}\n\n.item-card:hover {\n  transform: scale(1.05);\n  box-shadow: 15px 15px 10px #aaaaaa;\n  cursor: pointer;\n}\n\n.item-card-img {\n  width: 100%;\n  height: 15rem;\n  object-fit: cover;\n}\n\n.item-card-title-outer {\n  padding: 6px;\n  background-color: #000000;\n  width: max-content;\n  margin: auto 0 auto auto;\n}\n\n.item-card-title {\n  width: max-content;\n  font-size: 1.2rem;\n  background-color: #000000;\n  padding: 0.1rem 1rem;\n  border-color: #fff;\n  border-width: 2px;\n  border-style: dashed;\n  margin: auto 0 auto auto;\n}\n\n.active-title {\n  border-style: solid;\n}\n\n.item-card-title:hover {\n  border-style: solid;\n}\n\n.item-card-body {\n  padding: 0;\n}\n\n/*\n * Top Bar\n */\n.top-bar {\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  padding: 0 20px;\n  width: 100%;\n  height: 50px;\n  justify-content: space-between;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.company-name {\n  display: inline-flex;\n  color: #dc3545;\n  margin: auto 10px;\n  border-color: #dc3545;\n  border-width: 2px;\n  border-style: solid;\n  padding: 5px 10px;\n}\n\n.top-bar-logo {\n  width: 3rem;\n  height: 100%;\n  padding: 0.4rem;\n}\n\n.top-bar-login-button {\n  margin-top: 10px;\n  margin-right: 30px;\n  border-style: none;\n  font-weight: 600;\n  padding: 0.25rem 0.75rem;\n  color: #5a6268;\n}\n\n.top-bar-login-button:active,\n.top-bar-login-button:focus {\n  border-style: none;\n  outline: none;\n  box-shadow: none;\n}\n\n.name-display {\n  margin: auto 30px;\n  border-color: #5a6268;\n  border-width: 2px;\n  border-style: dashed;\n  font-weight: 600;\n  padding: 0.25rem 0.75rem;\n  color: #5a6268;\n}\n\n.custom-light-button {\n  background-color: #fff;\n  font-size: 1.5rem;\n\n  border-style: none;\n  outline: none;\n  box-shadow: none;\n}\n\n.custom-light-button:hover {\n  border-style: none;\n  outline: none;\n  box-shadow: none;\n}\n\n.custom-light-button:focus,\n.custom-light-button:focus {\n  border-style: none;\n  outline: none;\n  box-shadow: none;\n}\n\n.login-modal {\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  min-width: 400px;\n}\n\n.login-modal-heading {\n  margin: 1px;\n  padding-top: 5px;\n  padding-left: 2px;\n}\n\n.login-form-space {\n  display: flex;\n  flex-direction: column;\n  margin: 50px auto;\n  padding: 10px 10px;\n  color: #5a6268;\n  width: 100%;\n  justify-content: space-around;\n}\n\n.login-modal-tab {\n  width: 40%;\n  text-align: center;\n  margin: auto;\n}\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  margin: 20px auto;\n  width: 100%;\n}\n\n.login-form-input-space {\n  display: flex;\n  flex-direction: row;\n  margin: auto 5px;\n  width: 100%;\n}\n\n.login-form-icon {\n  display: flex;\n  padding: 0.55rem 0.7rem;\n  margin: auto;\n  border-width: 1px;\n  border-style: solid;\n  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));\n}\n\n.login-form-input {\n  margin: 5px 10px 5px 1px;\n  padding: 4px;\n  flex: 1 1 auto;\n}\n\n.modal-plain-text {\n  margin: 5px;\n  font-weight: 600;\n}\n\n.small-alert {\n  font-size: 0.7rem;\n  margin: 5px 5px 0 5px;\n  padding: 2px;\n  padding-left: 0.4rem;\n}\n\n.large-alert {\n  font-size: 0.9rem;\n  margin: 5px 5px 0 5px;\n  padding: 2px;\n  padding-left: 0.4rem;\n}\n\n.login-submit-button {\n  margin: 5px;\n  border-radius: 0%;\n  font-weight: 600;\n}\n\n.nav-pills .nav-link {\n  background-color: #ffffff;\n  color: #5a6268;\n  font-weight: 600;\n  padding-bottom: 5px;\n}\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  background-color: #ffffff;\n  color: #5a6268;\n  font-weight: 600;\n  border-bottom: 4px #dc3545 solid;\n  border-radius: 0;\n}\n\n.save-file-space {\n  display: flex;\n  flex-direction: row;\n}\n\n.save-file-text {\n  margin: auto 5px;\n}\n\n.save-file-input {\n  flex: 1 1 auto;\n  margin: auto 5px;\n}\n\n.save-file-container {\n  width: 100%;\n}\n\n.save-file-list-block {\n  display: inline-block;\n}\n\n.save-file-list-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  min-width: 200px;\n  max-width: 400px;\n  margin: 5px;\n  padding: 0.4rem;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #fff;\n}\n\n.save-file-list-item:hover {\n  border-width: 1px;\n  border-style: solid;\n  border-color: #5a6268;\n  cursor: pointer;\n}\n\n.save-file-name {\n  margin: auto 1px;\n}\n\n.info-text {\n  margin-top: 0.6rem;\n  font-size: 0.8rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Homepage_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Homepage.jsx */ "./src/Components/Homepage.jsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/App.js";





let App = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class = class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/view/:viewKey",
      component: _Components_Homepage_jsx__WEBPACK_IMPORTED_MODULE_1__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Homepage_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }))));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/AddItems/CardList.jsx":
/*!**********************************************!*\
  !*** ./src/Components/AddItems/CardList.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Constants.js */ "./src/Constants.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/AddItems/CardList.jsx";







let CardList = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class = class CardList extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()("#add-items").find(".add-item").hover(function (e) {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()(".item-card-title").removeClass("active-title");
      jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).find(".item-card-title").addClass("active-title");
    });
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.itemList !== prevProps.itemList) {
      this.props.store.setClickListener(true);
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, this.props.itemList.map((item, iterator) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      "model-url": _Constants_js__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_3__["ASSETS"] + item.url,
      "model-type": item.type,
      "model-name": item.name,
      onClick: () => {
        this.props.store.setClickListener(true);
      },
      key: iterator,
      className: "bg-dark text-white item-card add-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Img, {
      src: _Constants_js__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_3__["ASSETS"] + item.imgUrl,
      className: "item-card-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].ImgOverlay, {
      className: "item-card-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      className: "item-card-title-outer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item-card-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, item.name))))));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (CardList);

/***/ }),

/***/ "./src/Components/AddItems/CardListArch.jsx":
/*!**************************************************!*\
  !*** ./src/Components/AddItems/CardListArch.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardList.jsx */ "./src/Components/AddItems/CardList.jsx");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants.js */ "./src/Constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/AddItems/CardListArch.jsx";






let CardListArch = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class = class CardListArch extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      itemList: []
    };
    this.getUserList = this.getUserList.bind(this);
    this.getFreeList = this.getFreeList.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  clearList() {
    if (this.state.isLoggedIn === false) {
      this.setState({
        itemList: []
      });
    }
  }

  getUserList() {
    if (this.state.isLoggedIn) {
      let furnitureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["ARCH_CATEGORY"]
      };
      let token = this.props.store.getAccessToken;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], furnitureCategory, config).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  getFreeList() {
    if (!this.state.isLoggedIn) {
      let furnitureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["ARCH_CATEGORY"]
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], furnitureCategory).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  componentDidMount() {
    this.getFreeList();
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.store.getLoggedIn && prevState.isLoggedIn === false) {
      this.setState({
        isLoggedIn: true
      });
      this.clearList();
      this.getUserList();
    }

    if (this.props.store.getLoggedIn === false && prevState.isLoggedIn) {
      this.setState({
        isLoggedIn: false
      });
      this.clearList();
      this.getFreeList();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      itemList: this.state.itemList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    }));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (CardListArch);

/***/ }),

/***/ "./src/Components/AddItems/CardListBath.jsx":
/*!**************************************************!*\
  !*** ./src/Components/AddItems/CardListBath.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardList.jsx */ "./src/Components/AddItems/CardList.jsx");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants.js */ "./src/Constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/AddItems/CardListBath.jsx";






let CardListBath = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class = class CardListBath extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      itemList: []
    };
    this.getUserList = this.getUserList.bind(this);
    this.getFreeList = this.getFreeList.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  clearList() {
    if (this.state.isLoggedIn === false) {
      this.setState({
        itemList: []
      });
    }
  }

  getUserList() {
    if (this.state.isLoggedIn) {
      let bathCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["BATH_CATEGORY"]
      };
      let token = this.props.store.getAccessToken;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], bathCategory, config).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  getFreeList() {
    if (!this.state.isLoggedIn) {
      let bathCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["BATH_CATEGORY"]
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], bathCategory).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  componentDidMount() {
    this.getFreeList();
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.store.getLoggedIn && prevState.isLoggedIn === false) {
      this.setState({
        isLoggedIn: true
      });
      this.clearList();
      this.getUserList();
    }

    if (this.props.store.getLoggedIn === false && prevState.isLoggedIn) {
      this.setState({
        isLoggedIn: false
      });
      this.clearList();
      this.getFreeList();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      itemList: this.state.itemList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (CardListBath);

/***/ }),

/***/ "./src/Components/AddItems/CardListBed.jsx":
/*!*************************************************!*\
  !*** ./src/Components/AddItems/CardListBed.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardList.jsx */ "./src/Components/AddItems/CardList.jsx");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants.js */ "./src/Constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/AddItems/CardListBed.jsx";






let CardListBed = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class = class CardListBed extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      itemList: []
    };
    this.getUserList = this.getUserList.bind(this);
    this.getFreeList = this.getFreeList.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  clearList() {
    if (this.state.isLoggedIn === false) {
      this.setState({
        itemList: []
      });
    }
  }

  getUserList() {
    if (this.state.isLoggedIn) {
      let furnitureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["BED_CATEGORY"]
      };
      let token = this.props.store.getAccessToken;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], furnitureCategory, config).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  getFreeList() {
    if (!this.state.isLoggedIn) {
      let furnitureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["BED_CATEGORY"]
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], furnitureCategory).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  componentDidMount() {
    this.getFreeList();
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.store.getLoggedIn && prevState.isLoggedIn === false) {
      this.setState({
        isLoggedIn: true
      });
      this.clearList();
      this.getUserList();
    }

    if (this.props.store.getLoggedIn === false && prevState.isLoggedIn) {
      this.setState({
        isLoggedIn: false
      });
      this.clearList();
      this.getFreeList();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      itemList: this.state.itemList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    }));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (CardListBed);

/***/ }),

/***/ "./src/Components/AddItems/CardListChair.jsx":
/*!***************************************************!*\
  !*** ./src/Components/AddItems/CardListChair.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardList.jsx */ "./src/Components/AddItems/CardList.jsx");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants.js */ "./src/Constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/AddItems/CardListChair.jsx";






let CardListChair = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class = class CardListChair extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      itemList: []
    };
    this.getUserList = this.getUserList.bind(this);
    this.getFreeList = this.getFreeList.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  clearList() {
    if (this.state.isLoggedIn === false) {
      this.setState({
        itemList: []
      });
    }
  }

  getUserList() {
    if (this.state.isLoggedIn) {
      let furnitureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["CHAIR_CATEGORY"]
      };
      let token = this.props.store.getAccessToken;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], furnitureCategory, config).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  getFreeList() {
    if (!this.state.isLoggedIn) {
      let furnitureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["CHAIR_CATEGORY"]
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], furnitureCategory).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  componentDidMount() {
    this.getFreeList();
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.store.getLoggedIn && prevState.isLoggedIn === false) {
      this.setState({
        isLoggedIn: true
      });
      this.clearList();
      this.getUserList();
    }

    if (this.props.store.getLoggedIn === false && prevState.isLoggedIn) {
      this.setState({
        isLoggedIn: false
      });
      this.clearList();
      this.getFreeList();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      itemList: this.state.itemList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    }));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (CardListChair);

/***/ }),

/***/ "./src/Components/AddItems/CardListKitchen.jsx":
/*!*****************************************************!*\
  !*** ./src/Components/AddItems/CardListKitchen.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardList.jsx */ "./src/Components/AddItems/CardList.jsx");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants.js */ "./src/Constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/AddItems/CardListKitchen.jsx";






let CardListKitchen = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class = class CardListKitchen extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      itemList: []
    };
    this.getUserList = this.getUserList.bind(this);
    this.getFreeList = this.getFreeList.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  clearList() {
    if (this.state.isLoggedIn === false) {
      this.setState({
        itemList: []
      });
    }
  }

  getUserList() {
    if (this.state.isLoggedIn) {
      let furnitureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["KITCHEN_CATEGORY"]
      };
      let token = this.props.store.getAccessToken;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], furnitureCategory, config).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  getFreeList() {
    if (!this.state.isLoggedIn) {
      let furnitureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["KITCHEN_CATEGORY"]
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], furnitureCategory).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  componentDidMount() {
    this.getFreeList();
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.store.getLoggedIn && prevState.isLoggedIn === false) {
      this.setState({
        isLoggedIn: true
      });
      this.clearList();
      this.getUserList();
    }

    if (this.props.store.getLoggedIn === false && prevState.isLoggedIn) {
      this.setState({
        isLoggedIn: false
      });
      this.clearList();
      this.getFreeList();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      itemList: this.state.itemList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    }));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (CardListKitchen);

/***/ }),

/***/ "./src/Components/AddItems/CardListLight.jsx":
/*!***************************************************!*\
  !*** ./src/Components/AddItems/CardListLight.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardList.jsx */ "./src/Components/AddItems/CardList.jsx");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants.js */ "./src/Constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/AddItems/CardListLight.jsx";






let CardListLight = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class = class CardListLight extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      itemList: []
    };
    this.getUserList = this.getUserList.bind(this);
    this.getFreeList = this.getFreeList.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  clearList() {
    if (this.state.isLoggedIn === false) {
      this.setState({
        itemList: []
      });
    }
  }

  getUserList() {
    if (this.state.isLoggedIn) {
      let lightCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["LIGHT_CATEGORY"]
      };
      let token = this.props.store.getAccessToken;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], lightCategory, config).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  getFreeList() {
    if (!this.state.isLoggedIn) {
      let lightCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["LIGHT_CATEGORY"]
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], lightCategory).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  componentDidMount() {
    this.getFreeList();
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.store.getLoggedIn && prevState.isLoggedIn === false) {
      this.setState({
        isLoggedIn: true
      });
      this.clearList();
      this.getUserList();
    }

    if (this.props.store.getLoggedIn === false && prevState.isLoggedIn) {
      this.setState({
        isLoggedIn: false
      });
      this.clearList();
      this.getFreeList();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      itemList: this.state.itemList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (CardListLight);

/***/ }),

/***/ "./src/Components/AddItems/CardListMisc.jsx":
/*!**************************************************!*\
  !*** ./src/Components/AddItems/CardListMisc.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardList.jsx */ "./src/Components/AddItems/CardList.jsx");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants.js */ "./src/Constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/AddItems/CardListMisc.jsx";






let CardListMisc = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class = class CardListMisc extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      itemList: []
    };
    this.getUserList = this.getUserList.bind(this);
    this.getFreeList = this.getFreeList.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  clearList() {
    if (this.state.isLoggedIn === false) {
      this.setState({
        itemList: []
      });
    }
  }

  getUserList() {
    if (this.state.isLoggedIn) {
      let furnitureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MISC_CATEGORY"]
      };
      let tableCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["TABLE_CATEGORY"]
      };
      let cabinetCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["CABINET_CATEGORY"]
      };
      let curtainCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["CURTAIN_CATEGORY"]
      };
      let token = this.props.store.getAccessToken;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], furnitureCategory, config).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], tableCategory, config).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], cabinetCategory, config).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], curtainCategory, config).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  getFreeList() {
    if (!this.state.isLoggedIn) {
      let furnitureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MISC_CATEGORY"]
      };
      let tableCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["TABLE_CATEGORY"]
      };
      let cabinetCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["CABINET_CATEGORY"]
      };
      let curtainCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["CURTAIN_CATEGORY"]
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], furnitureCategory).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], tableCategory).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], cabinetCategory).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], curtainCategory).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  componentDidMount() {
    this.getFreeList();
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.store.getLoggedIn && prevState.isLoggedIn === false) {
      this.setState({
        isLoggedIn: true
      });
      this.clearList();
      this.getUserList();
    }

    if (this.props.store.getLoggedIn === false && prevState.isLoggedIn) {
      this.setState({
        isLoggedIn: false
      });
      this.clearList();
      this.getFreeList();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      itemList: this.state.itemList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }
    }));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (CardListMisc);

/***/ }),

/***/ "./src/Components/AddItems/CardListRug.jsx":
/*!*************************************************!*\
  !*** ./src/Components/AddItems/CardListRug.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardList.jsx */ "./src/Components/AddItems/CardList.jsx");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants.js */ "./src/Constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/AddItems/CardListRug.jsx";






let CardListRug = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class = class CardListRug extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      itemList: []
    };
    this.getUserList = this.getUserList.bind(this);
    this.getFreeList = this.getFreeList.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  clearList() {
    if (this.state.isLoggedIn === false) {
      this.setState({
        itemList: []
      });
    }
  }

  getUserList() {
    if (this.state.isLoggedIn) {
      let furnitureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RUG_CATEGORY"]
      };
      let token = this.props.store.getAccessToken;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], furnitureCategory, config).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  getFreeList() {
    if (!this.state.isLoggedIn) {
      let furnitureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RUG_CATEGORY"]
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], furnitureCategory).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  componentDidMount() {
    this.getFreeList();
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.store.getLoggedIn && prevState.isLoggedIn === false) {
      this.setState({
        isLoggedIn: true
      });
      this.clearList();
      this.getUserList();
    }

    if (this.props.store.getLoggedIn === false && prevState.isLoggedIn) {
      this.setState({
        isLoggedIn: false
      });
      this.clearList();
      this.getFreeList();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      itemList: this.state.itemList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    }));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (CardListRug);

/***/ }),

/***/ "./src/Components/AddItems/CardListSofa.jsx":
/*!**************************************************!*\
  !*** ./src/Components/AddItems/CardListSofa.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardList.jsx */ "./src/Components/AddItems/CardList.jsx");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants.js */ "./src/Constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/AddItems/CardListSofa.jsx";






let CardListSofa = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class = class CardListSofa extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      itemList: []
    };
    this.getUserList = this.getUserList.bind(this);
    this.getFreeList = this.getFreeList.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  clearList() {
    if (this.state.isLoggedIn === false) {
      this.setState({
        itemList: []
      });
    }
  }

  getUserList() {
    if (this.state.isLoggedIn) {
      let furnitureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["SOFA_CATEGORY"]
      };
      let token = this.props.store.getAccessToken;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], furnitureCategory, config).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  getFreeList() {
    if (!this.state.isLoggedIn) {
      let furnitureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["SOFA_CATEGORY"]
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], furnitureCategory).then(res => {
        let itemListTemp = res.data;
        Promise.all(itemListTemp.map(async modelId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + modelId);
          let temp = [...this.state.itemList];
          temp.push(res.data);
          this.setState({
            itemList: temp
          });
          return res.data;
        }));
      });
    }
  }

  componentDidMount() {
    this.getFreeList();
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.store.getLoggedIn && prevState.isLoggedIn === false) {
      this.setState({
        isLoggedIn: true
      });
      this.clearList();
      this.getUserList();
    }

    if (this.props.store.getLoggedIn === false && prevState.isLoggedIn) {
      this.setState({
        isLoggedIn: false
      });
      this.clearList();
      this.getFreeList();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      itemList: this.state.itemList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (CardListSofa);

/***/ }),

/***/ "./src/Components/BlueprintPage.jsx":
/*!******************************************!*\
  !*** ./src/Components/BlueprintPage.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _engine_blueprint3d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../engine/blueprint3d.js */ "./src/engine/blueprint3d.js");
/* harmony import */ var _Structures_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Structures.js */ "./src/Structures.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Constants.js */ "./src/Constants.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _AddItems_CardListSofa_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AddItems/CardListSofa.jsx */ "./src/Components/AddItems/CardListSofa.jsx");
/* harmony import */ var _AddItems_CardListChair_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AddItems/CardListChair.jsx */ "./src/Components/AddItems/CardListChair.jsx");
/* harmony import */ var _AddItems_CardListBed_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AddItems/CardListBed.jsx */ "./src/Components/AddItems/CardListBed.jsx");
/* harmony import */ var _AddItems_CardListRug_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AddItems/CardListRug.jsx */ "./src/Components/AddItems/CardListRug.jsx");
/* harmony import */ var _AddItems_CardListMisc_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AddItems/CardListMisc.jsx */ "./src/Components/AddItems/CardListMisc.jsx");
/* harmony import */ var _AddItems_CardListKitchen_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AddItems/CardListKitchen.jsx */ "./src/Components/AddItems/CardListKitchen.jsx");
/* harmony import */ var _AddItems_CardListArch_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AddItems/CardListArch.jsx */ "./src/Components/AddItems/CardListArch.jsx");
/* harmony import */ var _AddItems_CardListBath_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AddItems/CardListBath.jsx */ "./src/Components/AddItems/CardListBath.jsx");
/* harmony import */ var _AddItems_CardListLight_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AddItems/CardListLight.jsx */ "./src/Components/AddItems/CardListLight.jsx");
/* harmony import */ var _TextureList_FloorTextureList_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TextureList/FloorTextureList.jsx */ "./src/Components/TextureList/FloorTextureList.jsx");
/* harmony import */ var _TextureList_WallTextureList_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./TextureList/WallTextureList.jsx */ "./src/Components/TextureList/WallTextureList.jsx");
/* harmony import */ var _ContextMenu_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ContextMenu.jsx */ "./src/Components/ContextMenu.jsx");
/* harmony import */ var _SaveLoadModal_SaveFile_SaveButton_jsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SaveLoadModal/SaveFile/SaveButton.jsx */ "./src/Components/SaveLoadModal/SaveFile/SaveButton.jsx");
/* harmony import */ var _SaveLoadModal_LoadFile_LoadButton_jsx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SaveLoadModal/LoadFile/LoadButton.jsx */ "./src/Components/SaveLoadModal/LoadFile/LoadButton.jsx");
/* harmony import */ var _SaveLoadModal_SaveFile_SaveModal_jsx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SaveLoadModal/SaveFile/SaveModal.jsx */ "./src/Components/SaveLoadModal/SaveFile/SaveModal.jsx");
/* harmony import */ var _SaveLoadModal_LoadFile_LoadModal_jsx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SaveLoadModal/LoadFile/LoadModal.jsx */ "./src/Components/SaveLoadModal/LoadFile/LoadModal.jsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var _dec,
    _class,
    _temp,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/BlueprintPage.jsx";




























let BlueprintPage = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_26__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_26__["observer"])(_class = (_temp = class BlueprintPage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    this.sideMenu = function (blueprint3d, floorplanControls, modalEffects) {
      // var modalEffects = modalEffectsArg;
      var ACTIVE_CLASS = "active";
      var tabs = {
        FLOORPLAN: jquery__WEBPACK_IMPORTED_MODULE_2___default()("#floorplan_tab"),
        SHOP: jquery__WEBPACK_IMPORTED_MODULE_2___default()("#items_tab"),
        DESIGN: jquery__WEBPACK_IMPORTED_MODULE_2___default()("#design_tab")
      }; // var scope = this;

      var stateChangeCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
      var states = {
        DEFAULT: {
          div: jquery__WEBPACK_IMPORTED_MODULE_2___default()("#viewer"),
          tab: tabs.DESIGN,
          name: "Design"
        },
        FLOORPLAN: {
          div: jquery__WEBPACK_IMPORTED_MODULE_2___default()("#floorplanner"),
          tab: tabs.FLOORPLAN,
          name: "Floorplan"
        },
        SHOP: {
          div: jquery__WEBPACK_IMPORTED_MODULE_2___default()("#add-items"),
          tab: tabs.SHOP,
          name: "Shop"
        }
      }; // sidebar state

      var currentState = states.FLOORPLAN;

      function init() {
        for (var tab in tabs) {
          var elem = tabs[tab];
          elem.click(tabClicked(elem));
        }

        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#update-floorplan").click(floorplanUpdate);

        function reset() {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()("texture-context-container").hide();
          jquery__WEBPACK_IMPORTED_MODULE_2___default()("#wallTextures").hide();
          jquery__WEBPACK_IMPORTED_MODULE_2___default()("#floorTexturesDiv").hide();
        }

        stateChangeCallbacks.add(reset);
        initLeftMenu();
        blueprint3d.three.updateWindowSize();
        handleWindowResize();
        initItems();
        setCurrentState(states.DEFAULT, true);
      }

      function floorplanUpdate() {
        setCurrentState(states.DEFAULT);
      }

      function tabClicked(tab) {
        return function () {
          // Stop three from spinning
          initItems();
          blueprint3d.three.stopSpin(); // Selected a new tab

          for (var key in states) {
            var state = states[key];

            if (state.tab === tab) {
              setCurrentState(state);
              break;
            }
          }
        };
      }

      var getCurrentState = () => {
        if (this.state.currentStateName === "Design") {
          return states.DEFAULT;
        }

        if (this.state.currentStateName === "Floorplan") {
          return states.FLOORPLAN;
        }

        if (this.state.currentStateName === "Shop") {
          return states.SHOP;
        }

        return null;
      };

      var updateState = newState => {
        this.setState({
          currentStateName: newState.name
        });
      };

      function setCurrentState(newState, firstTime) {
        currentState = getCurrentState();
        firstTime = firstTime || false;

        if (!firstTime && currentState.name === newState.name) {
          return;
        } // show the right tab as active


        if (currentState.name !== newState.name) {
          if (currentState.tab != null) {
            currentState.tab.removeClass(ACTIVE_CLASS);
          }

          if (newState.tab != null) {
            newState.tab.addClass(ACTIVE_CLASS);
          }
        }

        if (currentState.name === newState.name) {
          newState.tab.addClass(ACTIVE_CLASS);
        } // set item unselected


        if (firstTime || newState.name !== "Design") {
          blueprint3d.three.getController().setSelectedObject(null);
        } // show and hide the right divs


        currentState.div.hide();
        newState.div.show(); // custom actions

        if (newState === states.FLOORPLAN) {
          floorplanControls.handleWindowResize();
          floorplanControls.updateFloorplanView();
        }

        if (currentState === states.FLOORPLAN) {
          blueprint3d.model.floorplan.update();
        }

        if (newState === states.DEFAULT) {
          blueprint3d.three.updateWindowSize();
        } // set new state


        handleWindowResize();
        currentState = newState;
        updateState(newState);
        stateChangeCallbacks.fire(newState); //change mobx state-active-tab
      }

      function initLeftMenu() {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).resize(handleWindowResize);
        handleWindowResize();
      }

      function handleWindowResize() {// $(".sidebar").height(window.innerHeight);
        // $("#add-items").height(window.innerHeight);
      }

      var initItems = () => {
        this.initItems(blueprint3d, setCurrentState);
      };

      init();
      this.setState({
        blueprint3d: blueprint3d
      });
    };

    this.state = {
      key: "sofa",
      blueprint3d: {},
      addClickListener: false,
      currentStateName: "Design",
      blob: ""
    };
    this.engine = this.engine.bind(this);
    this.setDesignState = this.setDesignState.bind(this);
    this.cameraButtons = this.cameraButtons.bind(this);
    this.contextMenu = this.contextMenu.bind(this);
    this.modalEffects = this.modalEffects.bind(this);
    this.sideMenu = this.sideMenu.bind(this);
    this.textureSelector = this.textureSelector.bind(this);
    this.initItems = this.initItems.bind(this);
    this.saveFile = this.saveFile.bind(this);
    this.loadFile = this.loadFile.bind(this);
  }

  saveFile() {
    if (this.state.blueprint3d.model !== undefined) {
      var data = this.state.blueprint3d.model.exportSerialized(); // var a = window.document.createElement("a");

      var blob = new Blob([data], {
        type: "text"
      });
      this.setState({
        blob: blob
      }); // a.href = window.URL.createObjectURL(blob);
      // a.download = "design.blueprint3d";
      // document.body.appendChild(a);
      // a.click();
      // document.body.removeChild(a);
    }
  }

  async loadFile(uri) {
    try {
      // console.log("uri: " + uri);
      if (uri !== null && uri !== "") {
        let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_6__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_6__["ASSETS"] + uri);
        this.state.blueprint3d.model.loadSerialized(JSON.stringify(res.data));
      } else {
        console.log("uri is null");
      }
    } catch (e) {
      console.log(e);
    }
  }
  /*
   * Camera Buttons
   */


  cameraButtons(blueprint3d) {
    var orbitControls = blueprint3d.three.controls;
    var three = blueprint3d.three;
    var panSpeed = 30;
    var directions = {
      UP: 1,
      DOWN: 2,
      LEFT: 3,
      RIGHT: 4
    };

    function init() {
      // Camera controls
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#zoom-in").click(zoomIn);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#zoom-in").on("touchend", zoomIn);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#zoom-out").click(zoomOut);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#zoom-out").on("touchend", zoomOut);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#zoom-in").dblclick(preventDefault);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#zoom-out").dblclick(preventDefault);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#reset-view").click(three.centerCamera);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#reset-view").on("touchend", three.centerCamera);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#move-left").click(function () {
        pan(directions.LEFT);
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#move-left").on("touchend", function () {
        pan(directions.LEFT);
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#move-right").click(function () {
        pan(directions.RIGHT);
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#move-right").on("touchend", function () {
        pan(directions.RIGHT);
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#move-up").click(function () {
        pan(directions.UP);
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#move-up").on("touchend", function () {
        pan(directions.UP);
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#move-down").click(function () {
        pan(directions.DOWN);
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#move-down").on("touchend", function () {
        pan(directions.DOWN);
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#move-left").dblclick(preventDefault);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#move-right").dblclick(preventDefault);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#move-up").dblclick(preventDefault);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#move-down").dblclick(preventDefault);
    }

    function preventDefault(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    function pan(direction) {
      switch (direction) {
        case directions.UP:
          orbitControls.panXY(0, panSpeed);
          break;

        case directions.DOWN:
          orbitControls.panXY(0, -panSpeed);
          break;

        case directions.LEFT:
          orbitControls.panXY(panSpeed, 0);
          break;

        case directions.RIGHT:
          orbitControls.panXY(-panSpeed, 0);
          break;

        default:
          break;
      }
    }

    function zoomIn(e) {
      e.preventDefault();
      orbitControls.dollyIn(1.1);
      orbitControls.update();
    }

    function zoomOut(e) {
      // eslint-disable-next-line no-unused-expressions
      e.preventDefault;
      orbitControls.dollyOut(1.1);
      orbitControls.update();
    }

    init();
    this.setState({
      blueprint3d: blueprint3d
    });
  }
  /*
   * Context menu for selected item
   */


  contextMenu(blueprint3d) {
    // var scope = this;
    var selectedItem;
    var three = blueprint3d.three;

    function init() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#context-menu-delete").click(function (event) {
        selectedItem.remove();
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#context-menu-delete").on("touchend", function (event) {
        selectedItem.remove();
      });
      three.itemSelectedCallbacks.add(itemSelected);
      three.itemUnselectedCallbacks.add(itemUnselected);
      initResize();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#fixed").click(function () {
        var checked = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop("checked");
        selectedItem.setFixed(checked);
      });
    }

    function cmToIn(cm) {
      return cm / 2.54;
    }

    function inToCm(inches) {
      return inches * 2.54;
    }

    function itemSelected(item) {
      selectedItem = item;
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#context-menu-name").text(item.metadata.itemName);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#item-width").val(cmToIn(selectedItem.getWidth()).toFixed(0));
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#item-height").val(cmToIn(selectedItem.getHeight()).toFixed(0));
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#item-depth").val(cmToIn(selectedItem.getDepth()).toFixed(0));
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#item-elevation").val(cmToIn(selectedItem.getElevation()).toFixed(0));
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("texture-context-container").show();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#context-menu").show();

      if (selectedItem.isElevationAdjustable()) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#item-elevation-div").show();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#item-elevation-div").hide();
      }

      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#fixed").prop("checked", item.fixed);
    }

    function resize() {
      selectedItem.resize(inToCm(jquery__WEBPACK_IMPORTED_MODULE_2___default()("#item-height").val()), inToCm(jquery__WEBPACK_IMPORTED_MODULE_2___default()("#item-width").val()), inToCm(jquery__WEBPACK_IMPORTED_MODULE_2___default()("#item-depth").val()));
    }

    function elevate() {
      selectedItem.elevate(inToCm(jquery__WEBPACK_IMPORTED_MODULE_2___default()("#item-elevation").val()));
    }

    function initResize() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#item-height").change(resize);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#item-width").change(resize);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#item-depth").change(resize);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#item-elevation").change(elevate);
    }

    function itemUnselected() {
      selectedItem = null;
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("texture-context-container").hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#context-menu").hide();
    }

    init();
    this.setState({
      blueprint3d: blueprint3d
    });
  }
  /*
   * Loading modal for items
   */


  modalEffects(blueprint3d) {
    // var scope = this;
    var itemsLoading = 0;

    this.setActiveItem = function (active) {
      // eslint-disable-next-line no-undef
      itemSelected = active;
      update();
    };

    function update() {
      if (itemsLoading > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#loading-modal").show();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#loading-modal").hide();
      }
    }

    function init() {
      blueprint3d.model.scene.itemLoadingCallbacks.add(function () {
        itemsLoading += 1;
        update();
      });
      blueprint3d.model.scene.itemLoadedCallbacks.add(function () {
        itemsLoading -= 1;
        update();
      });
      update();
    }

    init();
    this.setState({
      blueprint3d: blueprint3d
    });
  }
  /*
   * Side menu
   */


  initItems(blueprint3d, setCurrentState) {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()("#add-items").find(".add-item").off("click");
    jquery__WEBPACK_IMPORTED_MODULE_2___default()("#add-items").find(".add-item").click(function (e) {
      var modelUrl = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("model-url");
      var itemType = parseInt(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("model-type"));
      var metadata = {
        itemName: jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("model-name"),
        resizable: true,
        modelUrl: modelUrl,
        itemType: itemType
      };
      blueprint3d.model.scene.addItem(itemType, modelUrl, metadata);
      setCurrentState({
        div: jquery__WEBPACK_IMPORTED_MODULE_2___default()("#viewer"),
        tab: jquery__WEBPACK_IMPORTED_MODULE_2___default()("#design_tab"),
        name: "Design"
      }, false);
    });
  }
  /*
   * Change floor and wall textures
   */


  textureSelector(blueprint3d, sideMenu) {
    // var scope = this;
    var three = blueprint3d.three; // var isAdmin = isAdmin;

    var currentTarget = null;

    function initTextureSelectors() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(".texture-select-thumbnail").off("click");
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(".texture-select-thumbnail").click(function (e) {
        var textureUrl = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("texture-url");
        var textureStretch = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("texture-stretch") === "true";
        var textureScale = parseInt(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("texture-scale"));
        currentTarget.setTexture(textureUrl, textureStretch, textureScale);
        e.preventDefault();
      });
    }

    function init() {
      three.wallClicked.add(wallClicked);
      three.wallClicked.add(initTextureSelectors);
      three.floorClicked.add(floorClicked);
      three.wallClicked.add(initTextureSelectors);
      three.itemSelectedCallbacks.add(reset);
      three.wallClicked.add(initTextureSelectors);
      three.nothingClicked.add(reset);
      three.wallClicked.add(initTextureSelectors); // sideMenu.stateChangeCallbacks.add(reset);

      three.wallClicked.add(initTextureSelectors);
      initTextureSelectors();
    }

    function wallClicked(halfEdge) {
      if (currentTarget !== undefined && currentTarget !== null) {
        currentTarget.removeOutline();
      }

      currentTarget = halfEdge;
      currentTarget.drawOutline();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#floorTexturesDiv").hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("texture-context-container").show();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#wallTextures").show();
      initTextureSelectors();
    }

    function floorClicked(room) {
      if (currentTarget !== undefined && currentTarget !== null) {
        currentTarget.removeOutline();
      }

      currentTarget = room;
      currentTarget.drawOutline();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#wallTextures").hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("texture-context-container").show();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#floorTexturesDiv").show();
      initTextureSelectors();
    }

    function reset() {
      if (currentTarget !== undefined && currentTarget !== null) {
        currentTarget.removeOutline();
      }

      jquery__WEBPACK_IMPORTED_MODULE_2___default()("texture-context-container").hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#wallTextures").hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#floorTexturesDiv").hide();
      initTextureSelectors();
    }

    init();
  }

  async engine(viewKey) {
    /*
     * Floorplanner controls
     */
    var ViewerFloorplanner = function (blueprint3d) {
      var canvasWrapper = "#floorplanner"; // buttons

      var move = "#move";
      var remove = "#delete";
      var draw = "#draw";
      var activeStlye = "btn-primary disabled";
      this.floorplanner = blueprint3d.floorplanner;
      var scope = this;

      function init() {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).resize(scope.handleWindowResize);
        scope.handleWindowResize(); // mode buttons

        scope.floorplanner.modeResetCallbacks.add(function (mode) {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(draw).removeClass(activeStlye);
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(remove).removeClass(activeStlye);
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(move).removeClass(activeStlye);

          if (mode === _engine_blueprint3d_js__WEBPACK_IMPORTED_MODULE_4__["BP3D"].Floorplanner.floorplannerModes.MOVE) {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(move).addClass(activeStlye);
          } else if (mode === _engine_blueprint3d_js__WEBPACK_IMPORTED_MODULE_4__["BP3D"].Floorplanner.floorplannerModes.DRAW) {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(draw).addClass(activeStlye);
          } else if (mode === _engine_blueprint3d_js__WEBPACK_IMPORTED_MODULE_4__["BP3D"].Floorplanner.floorplannerModes.DELETE) {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(remove).addClass(activeStlye);
          }

          if (mode === _engine_blueprint3d_js__WEBPACK_IMPORTED_MODULE_4__["BP3D"].Floorplanner.floorplannerModes.DRAW) {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()("#draw-walls-hint").show();
            scope.handleWindowResize();
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()("#draw-walls-hint").hide();
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(move).click(function () {
          scope.floorplanner.setMode(_engine_blueprint3d_js__WEBPACK_IMPORTED_MODULE_4__["BP3D"].Floorplanner.floorplannerModes.MOVE);
        }); // $(move).on("touchend", function () {
        //   scope.floorplanner.setMode(BP3D.Floorplanner.floorplannerModes.MOVE);
        // });

        jquery__WEBPACK_IMPORTED_MODULE_2___default()(draw).click(function () {
          scope.floorplanner.setMode(_engine_blueprint3d_js__WEBPACK_IMPORTED_MODULE_4__["BP3D"].Floorplanner.floorplannerModes.DRAW);
        }); // $(draw).on("touchend", function () {
        //   scope.floorplanner.setMode(BP3D.Floorplanner.floorplannerModes.DRAW);
        // });

        jquery__WEBPACK_IMPORTED_MODULE_2___default()(remove).click(function () {
          scope.floorplanner.setMode(_engine_blueprint3d_js__WEBPACK_IMPORTED_MODULE_4__["BP3D"].Floorplanner.floorplannerModes.DELETE);
        }); // $(remove).on("touchend", function () {
        //   scope.floorplanner.setMode(
        //     BP3D.Floorplanner.floorplannerModes.DELETE
        //   );
        // });
      }

      this.updateFloorplanView = function () {
        scope.floorplanner.reset();
      };

      this.handleWindowResize = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(canvasWrapper).height(window.innerHeight - jquery__WEBPACK_IMPORTED_MODULE_2___default()(canvasWrapper).offset().top);
        scope.floorplanner.resizeView();
      };

      init();
    };

    var mainControls = function (blueprint3d) {
      function newDesign() {
        blueprint3d.model.loadSerialized(_Structures_js__WEBPACK_IMPORTED_MODULE_5__["NEW_STRUCTURE"]);
      } // var loadDesign = async (event) => {
      //   let name = $("#loadFile").attr('name');
      //   let file1 = await axios.get(
      //     "http://localhost:8001/assets/" + name
      //   );
      //   // var file1 = event.target.files[0];
      //   var reader = new FileReader();
      //   reader.onload = function () {
      //     var data = reader.result;
      //     blueprint3d.model.loadSerialized(data);
      //   };
      //   reader.readAsText(file1);
      //   $("#loadFile").replaceWith($("#loadFile").val("").clone(true));
      //   try {
      //     let uri = $("#loadFile").attr("uri");
      //     console.log("uri: " + uri);
      //     if (uri !== "") {
      //       let res = await axios.get("http://localhost:8001/assets/" + uri);
      //       blueprint3d.model.loadSerialized(JSON.stringify(res.data));
      //     }
      //   } catch (e) {
      //     console.log(e);
      //   }
      // };
      // function saveDesign() {
      //   var data = blueprint3d.model.exportSerialized();
      //   var a = window.document.createElement("a");
      //   var blob = new Blob([data], {
      //     type: "text",
      //   });
      //   // setBlob(blob);
      //   a.href = window.URL.createObjectURL(blob);
      //   a.download = "design";
      //   document.body.appendChild(a);
      //   a.click();
      //   document.body.removeChild(a);
      // }
      // function setBlob(blob) {
      //   setNewBlob(blob);
      // }


      function init() {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#new").click(newDesign); // $("#new").on("touchend", newDesign);
        // $("#loadFile").click(loadDesign);
        // $("#loadFileLabel").on("touchend", function () {
        //   $("#loadFile").trigger("click");
        // });
        // $("#saveFile").click(saveDesign);
        // $("#saveFile").on("touchend", saveDesign);
      }

      init();
    };
    /*
     * Initialize!
     */


    var modalEffects = this.modalEffects(this.state.blueprint3d);
    var viewerFloorplanner = new ViewerFloorplanner(this.state.blueprint3d); // eslint-disable-next-line no-unused-vars

    var contextMenu = this.contextMenu(this.state.blueprint3d);
    var sideMenu = this.sideMenu(this.state.blueprint3d, viewerFloorplanner, modalEffects); // eslint-disable-next-line no-unused-vars

    var textureSelector = this.textureSelector(this.state.blueprint3d, sideMenu); // eslint-disable-next-line no-unused-vars

    var cameraButtons = this.cameraButtons(this.state.blueprint3d);
    mainControls(this.state.blueprint3d); // This serialization format needs work
    // Load a simple rectangle room

    if (viewKey === "") {
      this.state.blueprint3d.model.loadSerialized(_Structures_js__WEBPACK_IMPORTED_MODULE_5__["INIT_STRUCTURE"]);
    } else {
      try {
        let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_6__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_6__["ASSETS"] + viewKey); // let file1 = new Blob(res)
        // var blueprint3d = this.state.blueprint3d;
        // var reader = new FileReader();
        //   reader.onload = function () {
        //     var data = reader.result;
        //     blueprint3d.model.loadSerialized(data);
        //   };
        //   reader.readAsText(file1);

        this.state.blueprint3d.model.loadSerialized(JSON.stringify(res.data));
      } catch (e) {
        console.log(e);
        this.state.blueprint3d.model.loadSerialized(_Structures_js__WEBPACK_IMPORTED_MODULE_5__["INIT_STRUCTURE"]);
      }
    }
  }

  componentDidMount() {
    // const { store } = this.props;
    var opts = {
      floorplannerElement: "floorplanner-canvas",
      threeElement: "#viewer",
      threeCanvasElement: "three-canvas",
      textureDir: "rooms/textures/",
      widget: false
    };
    this.setState({
      blueprint3d: new _engine_blueprint3d_js__WEBPACK_IMPORTED_MODULE_4__["BP3D"].Blueprint3d(opts)
    }, () => {
      if (this.props.viewKey !== undefined && this.props.viewKey !== null && this.props.viewKey !== "") {
        this.engine(this.props.viewKey);
      } else {
        this.engine("");
      }
    });
  }

  setDesignState(newState, firstTime) {
    firstTime = firstTime || false;
    var ACTIVE_CLASS = "active";
    jquery__WEBPACK_IMPORTED_MODULE_2___default()("#items_tab").removeClass(ACTIVE_CLASS);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()("#design_tab").addClass(ACTIVE_CLASS); // show and hide the right divs

    jquery__WEBPACK_IMPORTED_MODULE_2___default()("#add-items").hide();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()("#viewer").show();
    this.state.blueprint3d.three.updateWindowSize(); // set new state

    function handleWindowResize() {// $(".sidebar").height(window.innerHeight);
      // $("#add-items").height(window.innerHeight);
    }

    handleWindowResize();

    function reset() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("texture-context-container").hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#wallTextures").hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#floorTexturesDiv").hide();
    }

    reset();
    this.setState({
      currentStateName: "Design"
    }); //change mobx state-active-tab
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.addClickListener) {
      // this.setState({ addClickListener: true });
      this.props.store.setClickListener(false);
      this.initItems(this.state.blueprint3d, this.setDesignState);
    }

    if (this.props.addClickListener === false && prevProps.addClickListener) {
      this.setState({
        addClickListener: false
      });
    }
  }

  render() {
    const {
      store
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "horizontal-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 862,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "sidebar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 864,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 866,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "nav nav-sidebar vertical-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 867,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      id: "floorplan_tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 868,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["OverlayTrigger"], {
      placement: "right",
      overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 871,
          columnNumber: 28
        }
      }, "Edit Floorplan"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 869,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 873,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaPencilRuler"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 874,
        columnNumber: 21
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      id: "design_tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 878,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["OverlayTrigger"], {
      placement: "right",
      overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 881,
          columnNumber: 28
        }
      }, "Design"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 879,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 883,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaDraftingCompass"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 884,
        columnNumber: 21
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      id: "items_tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 888,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["OverlayTrigger"], {
      placement: "right",
      overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 891,
          columnNumber: 28
        }
      }, "Add Items"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 889,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 893,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaPlus"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 894,
        columnNumber: 21
      }
    })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 900,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "nav nav-sidebar vertical-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 901,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 902,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["OverlayTrigger"], {
      placement: "right",
      overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 905,
          columnNumber: 28
        }
      }, "New Plan"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 903,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "new",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 907,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaRedo"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 908,
        columnNumber: 21
      }
    })))), store.getLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 913,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["OverlayTrigger"], {
      placement: "right",
      overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 916,
          columnNumber: 30
        }
      }, "Save"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 914,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 918,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SaveLoadModal_SaveFile_SaveButton_jsx__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 919,
        columnNumber: 23
      }
    })))), store.getLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 925,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["OverlayTrigger"], {
      placement: "right",
      overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 928,
          columnNumber: 30
        }
      }, "Load"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 926,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 930,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SaveLoadModal_LoadFile_LoadButton_jsx__WEBPACK_IMPORTED_MODULE_23__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 931,
        columnNumber: 23
      }
    })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SaveLoadModal_SaveFile_SaveModal_jsx__WEBPACK_IMPORTED_MODULE_24__["default"], {
      blob: this.state.blob,
      clickFunc: this.saveFile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 938,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SaveLoadModal_LoadFile_LoadModal_jsx__WEBPACK_IMPORTED_MODULE_25__["default"], {
      clickFunc: this.loadFile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 939,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "texture-context-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 942,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "context-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 944,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContextMenu_jsx__WEBPACK_IMPORTED_MODULE_21__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 945,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "floorTexturesDiv",
      style: {
        display: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 948,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TextureList_FloorTextureList_jsx__WEBPACK_IMPORTED_MODULE_19__["default"], {
      loggedIn: store.getLoggedIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 949,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "wallTextures",
      style: {
        display: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 953,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TextureList_WallTextureList_jsx__WEBPACK_IMPORTED_MODULE_20__["default"], {
      loggedIn: store.getLoggedIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 954,
        columnNumber: 13
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "right-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 960,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "viewer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 962,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "camera-controls",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 963,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "danger",
      size: "sm",
      id: "zoom-out",
      className: "basic-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 964,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaSearchMinus"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 970,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "danger",
      size: "sm",
      id: "reset-view",
      className: "basic-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 972,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaHome"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 978,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "danger",
      size: "sm",
      id: "zoom-in",
      className: "basic-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 980,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaSearchPlus"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 986,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "danger",
      size: "sm",
      id: "move-left",
      className: "basic-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 989,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaArrowLeft"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 995,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "vertical-controls-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 997,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "danger",
      size: "sm",
      id: "move-up",
      className: "basic-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 998,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaArrowUp"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1004,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "danger",
      size: "sm",
      id: "move-down",
      className: "basic-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1006,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaArrowDown"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1012,
        columnNumber: 19
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "danger",
      size: "sm",
      id: "move-right",
      className: "basic-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1015,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaArrowRight"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1021,
        columnNumber: 17
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "loading-modal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1025,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1026,
        columnNumber: 15
      }
    }, "Loading..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "floorplanner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1031,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
      id: "floorplanner-canvas",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1032,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "floorplanner-controls",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1033,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "secondary",
      size: "sm",
      className: "icon-text-button",
      id: "move",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1034,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon-centre",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1040,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaArrowsAlt"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1041,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text-centre",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1043,
        columnNumber: 17
      }
    }, "Move Walls")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "secondary",
      size: "sm",
      className: "icon-text-button",
      id: "draw",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1045,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon-centre",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1051,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaPencilAlt"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1052,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text-centre",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1054,
        columnNumber: 17
      }
    }, "Draw Walls")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "secondary",
      size: "sm",
      className: "icon-text-button",
      id: "delete",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1056,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon-centre",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1062,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaTrashAlt"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1063,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text-centre",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1065,
        columnNumber: 17
      }
    }, "Delete Walls")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "danger",
      size: "sm",
      className: "icon-text-button",
      id: "update-floorplan",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1068,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text-centre",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1074,
        columnNumber: 17
      }
    }, "Done"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon-centre",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1075,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaChevronRight"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1076,
        columnNumber: 19
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "draw-walls-hint",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1080,
        columnNumber: 13
      }
    }, "Press the \"Esc\" key to stop drawing walls")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "add-items",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1085,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tabs"], {
      variant: "pills",
      id: "controlled-tab-example",
      activeKey: this.state.key,
      onSelect: k => {
        this.setState({
          key: k
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1086,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
      eventKey: "sofa",
      title: "Sofas",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1094,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddItems_CardListSofa_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
      loggedIn: store.getLoggedIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1095,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
      eventKey: "chair",
      title: "Chairs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1097,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddItems_CardListChair_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
      loggedIn: store.getLoggedIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1098,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
      eventKey: "bed",
      title: "Beds",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1100,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddItems_CardListBed_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
      loggedIn: store.getLoggedIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1101,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
      eventKey: "rug",
      title: "Rugs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1103,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddItems_CardListRug_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
      loggedIn: store.getLoggedIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1104,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
      eventKey: "misc",
      title: "Misc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1106,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddItems_CardListMisc_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], {
      loggedIn: store.getLoggedIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1107,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
      eventKey: "bath",
      title: "Bath",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1109,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddItems_CardListBath_jsx__WEBPACK_IMPORTED_MODULE_17__["default"], {
      loggedIn: store.getLoggedIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1110,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
      eventKey: "light",
      title: "Lights",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1112,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddItems_CardListLight_jsx__WEBPACK_IMPORTED_MODULE_18__["default"], {
      loggedIn: store.getLoggedIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1113,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
      eventKey: "kitchen",
      title: "Kitchen",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1115,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddItems_CardListKitchen_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], {
      loggedIn: store.getLoggedIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1116,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
      eventKey: "arch",
      title: "Architectural",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1118,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddItems_CardListArch_jsx__WEBPACK_IMPORTED_MODULE_16__["default"], {
      loggedIn: store.getLoggedIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1119,
        columnNumber: 17
      }
    }))))));
  }

}, _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (BlueprintPage);

/***/ }),

/***/ "./src/Components/ContextMenu.jsx":
/*!****************************************!*\
  !*** ./src/Components/ContextMenu.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContextMenu; });
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/ContextMenu.jsx";




class ContextMenu extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      id: "context-menu-name",
      className: "lead",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "danger",
      size: "sm",
      block: true,
      id: "context-menu-delete",
      className: "outline-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon-centre",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTrashAlt"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text-centre",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, "Delete Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "panel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "panel-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, "Adjust Size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "small-underline",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "panel-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "control-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, "Width"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "number",
      className: "form-control",
      id: "item-width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "control-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, "Depth"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "number",
      className: "form-control",
      id: "item-depth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "control-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, "Height"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "number",
      className: "form-control",
      id: "item-height",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group",
      id: "item-elevation-div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "control-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, "Elevation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "number",
      className: "form-control",
      id: "item-elevation",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, "Measurements in inches.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      id: "fixed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "fixed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }
    }, "Lock in place"));
  }

}

/***/ }),

/***/ "./src/Components/Homepage.jsx":
/*!*************************************!*\
  !*** ./src/Components/Homepage.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlueprintPage_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlueprintPage.jsx */ "./src/Components/BlueprintPage.jsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/Homepage.jsx";




let Homepage = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class = class Homepage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      store
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "100%",
        height: "100%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, this.props.match && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlueprintPage_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      viewKey: this.props.match.params.viewKey,
      addClickListener: store.getClickListener,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }), !this.props.match && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlueprintPage_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      viewKey: "",
      addClickListener: store.getClickListener,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ "./src/Components/LargeAlert.jsx":
/*!***************************************!*\
  !*** ./src/Components/LargeAlert.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/LargeAlert.jsx";




class LargeAlert extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
      className: "large-alert",
      variant: this.props.variant,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, this.props.message);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LargeAlert);

/***/ }),

/***/ "./src/Components/ModalHeading.jsx":
/*!*****************************************!*\
  !*** ./src/Components/ModalHeading.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalHeading; });
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/ModalHeading.jsx";



class ModalHeading extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "company-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon-centre",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, this.props.icon === "signIn" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaSignInAlt"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 44
      }
    }), this.props.icon === "signOut" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaSignOutAlt"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 45
      }
    }), this.props.icon === "saveFile" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaSignOutAlt"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 46
      }
    }), this.props.icon === "loadFile" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaSignOutAlt"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 46
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "login-modal-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, this.props.message));
  }

}

/***/ }),

/***/ "./src/Components/SaveLoadModal/LoadFile/LoadButton.jsx":
/*!**************************************************************!*\
  !*** ./src/Components/SaveLoadModal/LoadFile/LoadButton.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/SaveLoadModal/LoadFile/LoadButton.jsx";





let LoadButton = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class = class LoadButton extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.handleLoadFileShow = this.handleLoadFileShow.bind(this);
  }

  handleLoadFileShow(e) {
    e.preventDefault();
    this.props.store.setLoadFileModal(true);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.handleLoadFileShow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaUpload"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    })));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (LoadButton);

/***/ }),

/***/ "./src/Components/SaveLoadModal/LoadFile/LoadModal.jsx":
/*!*************************************************************!*\
  !*** ./src/Components/SaveLoadModal/LoadFile/LoadModal.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Constants.js */ "./src/Constants.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _ModalHeading_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ModalHeading.jsx */ "./src/Components/ModalHeading.jsx");
/* harmony import */ var _SaveFileList_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SaveFileList.jsx */ "./src/Components/SaveLoadModal/SaveFileList.jsx");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LargeAlert_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../LargeAlert.jsx */ "./src/Components/LargeAlert.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/SaveLoadModal/LoadFile/LoadModal.jsx";












let LoadModal = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class = class LoadModal extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
      isError: false,
      fileName: "",
      fileUri: "",
      saveFileList: [],
      showModal: false,
      copied: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.updateSaveFileList = this.updateSaveFileList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleShare = this.handleShare.bind(this);
  }

  handleButtonClick() {
    if (this.state.fileUri !== null && this.state.fileUri !== "") {
      this.props.clickFunc(this.state.fileUri);
      this.handleClose();
    }
  }

  handleClose() {
    this.props.store.setLoadFileModal(false);
    this.setState({
      fileName: "",
      fileUri: "",
      showModal: false,
      isError: false
    });
  }

  handleShare() {
    this.setState({
      copied: true,
      isError: false
    });
  }

  async handleRemove(id) {
    let token = this.props.store.getAccessToken;
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    let body = {
      _id: id
    };

    try {
      await axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_3__["FLOOR_MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_3__["REMOVE_MODEL"], body, config);
      this.updateSaveFileList();
    } catch (e) {
      console.log(e);
      this.setState({
        isError: true
      });
    }
  }

  handleClick(name, uri, event) {
    // console.log(uri);
    this.setState({
      fileName: name,
      fileUri: uri,
      isError: false
    });
    jquery__WEBPACK_IMPORTED_MODULE_10___default()(".save-file-list-item").css("border-color", "#ffffff");
    event.currentTarget.style.borderColor = "#5a6268";
  }

  async updateSaveFileList() {
    let token = this.props.store.getAccessToken;
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    try {
      let res = await axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_3__["FLOOR_MODELS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_3__["RETRIEVE_MODEL"], {}, config);
      this.setState({
        saveFileList: res.data,
        isError: false
      });
    } catch (e) {
      console.log(e);
      this.setState({
        isError: true
      });
    }
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.store.showLoadFileModal && !prevState.showModal) {
      this.setState({
        showModal: true,
        isError: false
      });
      this.updateSaveFileList();
    }
  }

  render() {
    const {
      store
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: true,
      show: store.showLoadFileModal,
      onHide: () => this.handleClose(),
      id: "loadModal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__["default"].Header, {
      closeButton: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__["default"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ModalHeading_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      icon: "loadFile",
      message: "Load Project",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__["default"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "login-form-space",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SaveFileList_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      clickFunc: this.handleClick,
      removeFunc: this.handleRemove,
      shareFunc: this.handleShare,
      fileList: this.state.saveFileList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "danger",
      className: "login-submit-button",
      disabled: this.state.isDisabled,
      onClick: this.handleButtonClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    }, "Load"), this.state.copied && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LargeAlert_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "success",
      message: "Link Copied to Clipboard",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 15
      }
    }), this.state.isError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LargeAlert_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "danger",
      message: "Some Error Occurred",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 15
      }
    }))));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (LoadModal);

/***/ }),

/***/ "./src/Components/SaveLoadModal/SaveFile/SaveButton.jsx":
/*!**************************************************************!*\
  !*** ./src/Components/SaveLoadModal/SaveFile/SaveButton.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/SaveLoadModal/SaveFile/SaveButton.jsx";





let SaveButton = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class = class SaveButton extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.handleSaveFileShow = this.handleSaveFileShow.bind(this);
  }

  handleSaveFileShow(e) {
    e.preventDefault();
    this.props.store.setSaveFileModal(true);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: e => this.handleSaveFileShow(e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaRegSave"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (SaveButton);

/***/ }),

/***/ "./src/Components/SaveLoadModal/SaveFile/SaveModal.jsx":
/*!*************************************************************!*\
  !*** ./src/Components/SaveLoadModal/SaveFile/SaveModal.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _ModalHeading_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ModalHeading.jsx */ "./src/Components/ModalHeading.jsx");
/* harmony import */ var _SaveFileList_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SaveFileList.jsx */ "./src/Components/SaveLoadModal/SaveFileList.jsx");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Constants */ "./src/Constants.js");
/* harmony import */ var _LargeAlert_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../LargeAlert.jsx */ "./src/Components/LargeAlert.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/SaveLoadModal/SaveFile/SaveModal.jsx";












let SaveModal = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class = class SaveModal extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
      isError: false,
      fileName: "",
      fileNameTemp: "",
      fileUri: "",
      stateBlob: {},
      saveFileList: [],
      showModal: false,
      copied: false,
      overwrite: "Save"
    };
    this.handleClose = this.handleClose.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.updateSaveFileList = this.updateSaveFileList.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleShare = this.handleShare.bind(this);
  }

  handleClose() {
    this.props.store.setSaveFileModal(false);
    this.setState({
      fileName: "",
      fileUri: "",
      showModal: false,
      isError: false
    });
  }

  handleShare() {
    this.setState({
      copied: true,
      isError: false
    });
  }

  async handleRemove(id) {
    let token = this.props.store.getAccessToken;
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    let body = {
      _id: id
    };

    try {
      await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(_Constants__WEBPACK_IMPORTED_MODULE_8__["BASE_URL"] + _Constants__WEBPACK_IMPORTED_MODULE_8__["FLOOR_MODELS"] + _Constants__WEBPACK_IMPORTED_MODULE_8__["REMOVE_MODEL"], body, config);
      this.updateSaveFileList();
    } catch (e) {
      console.log(e);
      this.setState({
        isError: true
      });
    }
  }

  handleClick(name, uri, event) {
    this.setState({
      fileName: name,
      fileUri: uri,
      isError: false,
      overwrite: "Overwrite"
    });
    jquery__WEBPACK_IMPORTED_MODULE_10___default()(".save-file-list-item").css("border-color", "#ffffff");
    event.currentTarget.style.borderColor = "#5a6268";
  }

  handleInputChange(event) {
    jquery__WEBPACK_IMPORTED_MODULE_10___default()(".save-file-list-item").css("border-color", "#ffffff");
    this.setState({
      fileName: event.target.value,
      fileNameTemp: event.target.value,
      isError: false,
      overwrite: "Save"
    });
  }

  async updateSaveFileList() {
    let token = this.props.store.getAccessToken;
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    try {
      let res = await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(_Constants__WEBPACK_IMPORTED_MODULE_8__["BASE_URL"] + _Constants__WEBPACK_IMPORTED_MODULE_8__["FLOOR_MODELS"] + _Constants__WEBPACK_IMPORTED_MODULE_8__["RETRIEVE_MODEL"], {}, config);
      this.setState({
        saveFileList: res.data,
        isError: false
      });
    } catch (e) {
      console.log(e);
      this.setState({
        isError: true
      });
    }
  }

  async uploadFile(blob) {
    if (!this.state.isDisabled && this.state.fileName !== "") {
      const data = new FormData();
      data.append("file", blob);
      let token = this.props.store.getAccessToken;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      try {
        let resFileId = await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(_Constants__WEBPACK_IMPORTED_MODULE_8__["BASE_URL"] + _Constants__WEBPACK_IMPORTED_MODULE_8__["UPLOAD_ASSET"], data, config);
        let updateBody = {
          _id: resFileId.data,
          fileType: "floorModel",
          extension: "blueprint3d"
        };
        await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(_Constants__WEBPACK_IMPORTED_MODULE_8__["BASE_URL"] + _Constants__WEBPACK_IMPORTED_MODULE_8__["UPDATE_ASSET_ENTRY"], updateBody, config);
        let modelBody = {
          name: this.state.fileName,
          url: resFileId.data
        };
        await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(_Constants__WEBPACK_IMPORTED_MODULE_8__["BASE_URL"] + _Constants__WEBPACK_IMPORTED_MODULE_8__["FLOOR_MODELS"] + _Constants__WEBPACK_IMPORTED_MODULE_8__["UPDATE_MODEL"], modelBody, config);
        this.setState({
          fileName: "",
          isDisabled: false,
          isError: false
        });
        this.updateSaveFileList();
        this.handleClose();
      } catch (e) {
        console.log(e);
        this.setState({
          isDisabled: false,
          isError: true
        });
      }
    } else {
      this.setState({
        isDisabled: false,
        isError: false
      });
    }
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevState.stateBlob !== this.props.blob && this.props.blob !== null && this.props.blob !== "" && this.state.isDisabled === false) {
      this.setState({
        stateBlob: this.props.blob,
        isDisabled: true,
        isError: false,
        overwrite: "Save"
      });
      this.uploadFile(this.props.blob);
    }

    if (this.props.store.showSaveFileModal && !prevState.showModal) {
      this.setState({
        showModal: true,
        isError: false,
        overwrite: "Save"
      });
      this.updateSaveFileList();
    }
  }

  render() {
    const {
      store
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: true,
      show: store.showSaveFileModal,
      onHide: () => this.handleClose(),
      id: "saveModal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
      closeButton: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__["default"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ModalHeading_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      icon: "saveFile",
      message: "Save Project",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__["default"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "login-form-space",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SaveFileList_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      clickFunc: this.handleClick,
      removeFunc: this.handleRemove,
      shareFunc: this.handleShare,
      fileList: this.state.saveFileList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "save-file-space",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "save-file-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 15
      }
    }, "Save As: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "name",
      value: this.state.fileNameTemp,
      className: "save-file-input",
      onChange: this.handleInputChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 15
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "danger",
      className: "login-submit-button",
      disabled: this.state.isDisabled,
      onClick: this.props.clickFunc,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 13
      }
    }, this.state.overwrite), this.state.copied && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LargeAlert_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "success",
      message: "Link Copied to Clipboard",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 15
      }
    }), this.state.isError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LargeAlert_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "danger",
      message: "Some Error Occurred",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 15
      }
    }))));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (SaveModal);

/***/ }),

/***/ "./src/Components/SaveLoadModal/SaveFileList.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/SaveLoadModal/SaveFileList.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Constants */ "./src/Constants.js");
var _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/SaveLoadModal/SaveFileList.jsx";







class CardList extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleShare = this.handleShare.bind(this);
  }

  handleShare() {
    this.props.shareFunc();
  }

  handleRemove(event) {
    this.props.removeFunc(event.target.getAttribute("_id"));
  }

  handleClick(event) {
    this.props.clickFunc(event.currentTarget.getAttribute("file-name"), event.currentTarget.getAttribute("floor-model-url"), event);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "save-file-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, this.props.fileList.map((item, iterator) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "save-file-list-block",
      key: iterator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      "floor-model-url": item.url,
      "file-name": item.name,
      email: item.email,
      _id: item._id,
      onClick: e => this.handleClick(e),
      className: "save-file-list-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "save-file-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__["CopyToClipboard"], {
      text: _Constants__WEBPACK_IMPORTED_MODULE_5__["HOST_URL"] + _Constants__WEBPACK_IMPORTED_MODULE_5__["VIEW_MODEL"] + item.url,
      onCopy: this.handleShare,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaLink"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      _id: item._id,
      onClick: this.handleRemove,
      variant: "light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaMinusCircle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 19
      }
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CardList);

/***/ }),

/***/ "./src/Components/TextureList/FloorTextureList.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/TextureList/FloorTextureList.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextureList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextureList.jsx */ "./src/Components/TextureList/TextureList.jsx");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants.js */ "./src/Constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/TextureList/FloorTextureList.jsx";






let FloorTextureList = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class = class FloorTextureList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      textureListWood: [],
      textureListMarble: [],
      textureListTile: []
    };
    this.getUserList = this.getUserList.bind(this);
    this.getFreeList = this.getFreeList.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  clearList() {
    if (this.state.isLoggedIn === false) {
      this.setState({
        textureListWood: [],
        textureListMarble: [],
        textureListTile: []
      });
    }
  }

  getUserList() {
    if (this.state.isLoggedIn) {
      let textureCategoryFloorWood = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FLOOR_WOOD_CATEGORY"]
      };
      let textureCategoryFloorMarble = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FLOOR_MARBLE_CATEGORY"]
      };
      let textureCategoryFloorTile = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FLOOR_TILE_CATEGORY"]
      };
      let token = this.props.store.getAccessToken;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], textureCategoryFloorWood, config).then(res => {
        let textureListTemp = res.data;
        Promise.all(textureListTemp.map(async textureId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + textureId);
          let temp = [...this.state.textureListWood];
          temp.push(res.data);
          this.setState({
            textureListWood: temp
          });
          return res.data;
        }));
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], textureCategoryFloorMarble, config).then(res => {
        let textureListTemp = res.data;
        Promise.all(textureListTemp.map(async textureId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + textureId);
          let temp = [...this.state.textureListMarble];
          temp.push(res.data);
          this.setState({
            textureListMarble: temp
          });
          return res.data;
        }));
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], textureCategoryFloorTile, config).then(res => {
        let textureListTemp = res.data;
        Promise.all(textureListTemp.map(async textureId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + textureId);
          let temp = [...this.state.textureListTile];
          temp.push(res.data);
          this.setState({
            textureListTile: temp
          });
          return res.data;
        }));
      });
    }
  }

  getFreeList() {
    if (!this.state.isLoggedIn) {
      let textureCategoryFloorWood = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FLOOR_WOOD_CATEGORY"]
      };
      let textureCategoryFloorMarble = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FLOOR_MARBLE_CATEGORY"]
      };
      let textureCategoryFloorTile = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FLOOR_TILE_CATEGORY"]
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], textureCategoryFloorWood).then(res => {
        let textureListTemp = res.data;
        Promise.all(textureListTemp.map(async textureId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + textureId);
          let temp = [...this.state.textureListWood];
          temp.push(res.data);
          this.setState({
            textureListWood: temp
          });
          return res.data;
        }));
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], textureCategoryFloorMarble).then(res => {
        let textureListTemp = res.data;
        Promise.all(textureListTemp.map(async textureId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + textureId);
          let temp = [...this.state.textureListMarble];
          temp.push(res.data);
          this.setState({
            textureListMarble: temp
          });
          return res.data;
        }));
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], textureCategoryFloorTile).then(res => {
        let textureListTemp = res.data;
        Promise.all(textureListTemp.map(async textureId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + textureId);
          let temp = [...this.state.textureListTile];
          temp.push(res.data);
          this.setState({
            textureListTile: temp
          });
          return res.data;
        }));
      });
    }
  }

  componentDidMount() {
    this.getFreeList();
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.store.getLoggedIn && prevState.isLoggedIn === false) {
      this.setState({
        isLoggedIn: true
      });
      this.clearList();
      this.getUserList();
    }

    if (this.props.store.getLoggedIn === false && prevState.isLoggedIn) {
      this.setState({
        isLoggedIn: false
      });
      this.clearList();
      this.getFreeList();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "texture-panel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "panel-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }
    }, "Adjust Floor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "small-underline",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "texture-panel-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }
    }, "Woods"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextureList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      textureList: this.state.textureListWood.reverse(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "texture-panel-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }
    }, "Marbles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextureList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      textureList: this.state.textureListMarble.reverse(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "texture-panel-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }
    }, "Tiles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextureList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      textureList: this.state.textureListTile.reverse(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }
    }));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (FloorTextureList);

/***/ }),

/***/ "./src/Components/TextureList/TextureList.jsx":
/*!****************************************************!*\
  !*** ./src/Components/TextureList/TextureList.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextureList; });
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants.js */ "./src/Constants.js");
var _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/TextureList/TextureList.jsx";



class TextureList extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "texture-tiles",
      style: {
        color: "#333333"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, this.props.textureList.map((texture, iterator) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: iterator,
      className: "texture-select-thumbnail",
      "texture-url": _Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["ASSETS"] + texture.url,
      "texture-stretch": texture.stretch.toString(),
      "texture-scale": texture.scale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "thumbnail",
      alt: "Thumbnail light fine wood",
      src: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["ASSETS"] + texture.thumbnailUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }))));
  }

}

/***/ }),

/***/ "./src/Components/TextureList/WallTextureList.jsx":
/*!********************************************************!*\
  !*** ./src/Components/TextureList/WallTextureList.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextureList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextureList.jsx */ "./src/Components/TextureList/TextureList.jsx");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants.js */ "./src/Constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var _dec,
    _class,
    _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/Components/TextureList/WallTextureList.jsx";






let WallTextureList = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class = class WallTextureList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      textureList: [],
      textureListSolid: [],
      textureListTile: []
    };
    this.getUserList = this.getUserList.bind(this);
    this.getFreeList = this.getFreeList.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  clearList() {
    if (this.state.isLoggedIn === false) {
      this.setState({
        textureList: [],
        textureListSolid: [],
        textureListTile: []
      });
    }
  }

  getUserList() {
    if (this.state.isLoggedIn) {
      let textureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["WALL_CATEGORY"]
      };
      let textureCategorySolid = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["WALL_SOLID_CATEGORY"]
      };
      let textureCategoryTile = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["WALL_TILE_CATEGORY"]
      };
      let token = this.props.store.getAccessToken;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], textureCategory, config).then(res => {
        let textureListTemp = res.data;
        Promise.all(textureListTemp.map(async textureId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + textureId);
          let temp = [...this.state.textureList];
          temp.push(res.data);
          this.setState({
            textureList: temp
          });
          return res.data;
        }));
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], textureCategorySolid, config).then(res => {
        let textureListTemp = res.data;
        Promise.all(textureListTemp.map(async textureId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + textureId);
          let temp = [...this.state.textureListSolid];
          temp.push(res.data);
          this.setState({
            textureListSolid: temp
          });
          return res.data;
        }));
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCES"], textureCategoryTile, config).then(res => {
        let textureListTemp = res.data;
        Promise.all(textureListTemp.map(async textureId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + textureId);
          let temp = [...this.state.textureListTile];
          temp.push(res.data);
          this.setState({
            textureListTile: temp
          });
          return res.data;
        }));
      });
    }
  }

  getFreeList() {
    if (!this.state.isLoggedIn) {
      let textureCategory = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["WALL_CATEGORY"]
      };
      let textureCategorySolid = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["WALL_SOLID_CATEGORY"]
      };
      let textureCategoryTile = {
        category: _Constants_js__WEBPACK_IMPORTED_MODULE_2__["WALL_TILE_CATEGORY"]
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], textureCategory).then(res => {
        let textureListTemp = res.data;
        Promise.all(textureListTemp.map(async textureId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + textureId);
          let temp = [...this.state.textureList];
          temp.push(res.data);
          this.setState({
            textureList: temp
          });
          return res.data;
        }));
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], textureCategorySolid).then(res => {
        let textureListTemp = res.data;
        Promise.all(textureListTemp.map(async textureId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + textureId);
          let temp = [...this.state.textureListSolid];
          temp.push(res.data);
          this.setState({
            textureListSolid: temp
          });
          return res.data;
        }));
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["RESOURCES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["GET_FREE_RESOURCES"], textureCategoryTile).then(res => {
        let textureListTemp = res.data;
        Promise.all(textureListTemp.map(async textureId => {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_Constants_js__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURES"] + _Constants_js__WEBPACK_IMPORTED_MODULE_2__["FIND"] + textureId);
          let temp = [...this.state.textureListTile];
          temp.push(res.data);
          this.setState({
            textureListTile: temp
          });
          return res.data;
        }));
      });
    }
  }

  componentDidMount() {
    this.getFreeList();
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.store.getLoggedIn && prevState.isLoggedIn === false) {
      this.setState({
        isLoggedIn: true
      });
      this.clearList();
      this.getUserList();
    }

    if (this.props.store.getLoggedIn === false && prevState.isLoggedIn) {
      this.setState({
        isLoggedIn: false
      });
      this.clearList();
      this.getFreeList();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "texture-panel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "panel-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }
    }, "Adjust Wall"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "small-underline",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "texture-panel-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }
    }, "Patterns"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextureList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      textureList: this.state.textureList.reverse(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "texture-panel-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }
    }, "Solids"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextureList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      textureList: this.state.textureListSolid.reverse(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "texture-panel-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }
    }, "Tiles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextureList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      textureList: this.state.textureListTile.reverse(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }
    }));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (WallTextureList);

/***/ }),

/***/ "./src/Constants.js":
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/*! exports provided: HOST_URL, BASE_URL, BASE_URL_AUTH, DEFAULT_WALL_MAP, DEFAULT_FLOOR_MAP, ASSETS, MODELS, FLOOR_MODELS, TEXTURES, RETRIEVE, USERS, RESOURCES, FIND, VIEW_MODEL, REGISTER, LOGIN, LOGOUT, UPLOAD_ASSET, UPDATE_ASSET_ENTRY, SOFA_CATEGORY, CHAIR_CATEGORY, BED_CATEGORY, ARCH_CATEGORY, MISC_CATEGORY, KITCHEN_CATEGORY, RUG_CATEGORY, TABLE_CATEGORY, CABINET_CATEGORY, CURTAIN_CATEGORY, LIGHT_CATEGORY, BATH_CATEGORY, FLOOR_CATEGORY, FLOOR_WOOD_CATEGORY, FLOOR_MARBLE_CATEGORY, FLOOR_TILE_CATEGORY, WALL_CATEGORY, WALL_SOLID_CATEGORY, WALL_TILE_CATEGORY, GET_FREE_RESOURCES, GET_RESOURCES, REMOVE_MODEL, RETRIEVE_MODEL, UPDATE_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOST_URL", function() { return HOST_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL_AUTH", function() { return BASE_URL_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WALL_MAP", function() { return DEFAULT_WALL_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_FLOOR_MAP", function() { return DEFAULT_FLOOR_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSETS", function() { return ASSETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODELS", function() { return MODELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLOOR_MODELS", function() { return FLOOR_MODELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURES", function() { return TEXTURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETRIEVE", function() { return RETRIEVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCES", function() { return RESOURCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND", function() { return FIND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_MODEL", function() { return VIEW_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_ASSET", function() { return UPLOAD_ASSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ASSET_ENTRY", function() { return UPDATE_ASSET_ENTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOFA_CATEGORY", function() { return SOFA_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAIR_CATEGORY", function() { return CHAIR_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BED_CATEGORY", function() { return BED_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARCH_CATEGORY", function() { return ARCH_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MISC_CATEGORY", function() { return MISC_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KITCHEN_CATEGORY", function() { return KITCHEN_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUG_CATEGORY", function() { return RUG_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_CATEGORY", function() { return TABLE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CABINET_CATEGORY", function() { return CABINET_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURTAIN_CATEGORY", function() { return CURTAIN_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_CATEGORY", function() { return LIGHT_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BATH_CATEGORY", function() { return BATH_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLOOR_CATEGORY", function() { return FLOOR_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLOOR_WOOD_CATEGORY", function() { return FLOOR_WOOD_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLOOR_MARBLE_CATEGORY", function() { return FLOOR_MARBLE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLOOR_TILE_CATEGORY", function() { return FLOOR_TILE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WALL_CATEGORY", function() { return WALL_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WALL_SOLID_CATEGORY", function() { return WALL_SOLID_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WALL_TILE_CATEGORY", function() { return WALL_TILE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FREE_RESOURCES", function() { return GET_FREE_RESOURCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RESOURCES", function() { return GET_RESOURCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_MODEL", function() { return REMOVE_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETRIEVE_MODEL", function() { return RETRIEVE_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MODEL", function() { return UPDATE_MODEL; });
// SERVER
const HOST_URL = "https://www.feldsparhomes.com/";
const BASE_URL = "https://www.feldsparhomes.com:8001/";
const BASE_URL_AUTH = "https://www.feldsparhomes.com:8000/";
const DEFAULT_WALL_MAP = "5f0dde8ee5148d0ef82ff069";
const DEFAULT_FLOOR_MAP = "5f0dddf4e5148d0ef82ff066"; // DEV-LOCAL
// export const HOST_URL = "http://localhost:3000/";
// export const BASE_URL = "http://localhost:8001/";
// export const BASE_URL_AUTH = "http://localhost:8000/";
// export const DEFAULT_WALL_MAP = "5f07f740b5991623548246d7"
// export const DEFAULT_FLOOR_MAP = "5ef849c28188602a98c95524"
// COMMON-----------------------------------------------------------

const ASSETS = "assets/";
const MODELS = "models/";
const FLOOR_MODELS = "floorModel/";
const TEXTURES = "textures/";
const RETRIEVE = "retrieve/";
const USERS = "users/";
const RESOURCES = "resources/";
const FIND = "find/";
const VIEW_MODEL = "view/";
const REGISTER = "register";
const LOGIN = "login";
const LOGOUT = "logout";
const UPLOAD_ASSET = "uploadAsset";
const UPDATE_ASSET_ENTRY = "updateAssetEntry";
const SOFA_CATEGORY = "sofa";
const CHAIR_CATEGORY = "chair";
const BED_CATEGORY = "bed";
const ARCH_CATEGORY = "architectural";
const MISC_CATEGORY = "misc";
const KITCHEN_CATEGORY = "kitchen";
const RUG_CATEGORY = "rug";
const TABLE_CATEGORY = "table";
const CABINET_CATEGORY = "cabinet";
const CURTAIN_CATEGORY = "curtain";
const LIGHT_CATEGORY = "light";
const BATH_CATEGORY = "bath";
const FLOOR_CATEGORY = "floor";
const FLOOR_WOOD_CATEGORY = "floorWood";
const FLOOR_MARBLE_CATEGORY = "floorMarble";
const FLOOR_TILE_CATEGORY = "floorTile";
const WALL_CATEGORY = "wall";
const WALL_SOLID_CATEGORY = "solid";
const WALL_TILE_CATEGORY = "wallTile";
const GET_FREE_RESOURCES = "getFreeResources";
const GET_RESOURCES = "getResources";
const REMOVE_MODEL = "removeModel";
const RETRIEVE_MODEL = "retrieve";
const UPDATE_MODEL = "update";

/***/ }),

/***/ "./src/LuminescenceStore.js":
/*!**********************************!*\
  !*** ./src/LuminescenceStore.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");




var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _temp;


let LuminescenceStore = (_class = (_temp = class LuminescenceStore {
  constructor() {
    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loggedIn", _descriptor, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "username", _descriptor2, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "accessToken", _descriptor3, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "refreshToken", _descriptor4, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loginModal", _descriptor5, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "logoutModal", _descriptor6, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "infoModal", _descriptor7, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "addClickListener", _descriptor8, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "saveFileModal", _descriptor9, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loadFileModal", _descriptor10, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setLoggedIn", _descriptor11, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setUsername", _descriptor12, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setAccessToken", _descriptor13, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setRefreshToken", _descriptor14, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setLoginModal", _descriptor15, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setLogoutModal", _descriptor16, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setInfoModal", _descriptor17, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setClickListener", _descriptor18, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setSaveFileModal", _descriptor19, this);

    Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setLoadFileModal", _descriptor20, this);
  }

  get getLoggedIn() {
    return this.loggedIn;
  } //Username--------------------------------------------


  get getUsername() {
    return this.username;
  } //AccessToken--------------------------------------------


  get getAccessToken() {
    return this.accessToken;
  } //RefreshToken--------------------------------------------


  get getRefreshToken() {
    return this.refreshToken;
  } //LoginModal---------------------------------------------


  get showLoginModal() {
    return this.loginModal;
  } //LogoutModal---------------------------------------------


  get showLogoutModal() {
    return this.logoutModal;
  } //InfoModal---------------------------------------------


  get showInfoModal() {
    return this.infoModal;
  } //AddClickListener---------------------------------------------


  get getClickListener() {
    return this.addClickListener;
  } //Save File Modal---------------------------------------------


  get showSaveFileModal() {
    return this.saveFileModal;
  } //Load File Modal---------------------------------------------


  get showLoadFileModal() {
    return this.loadFileModal;
  }

}, _temp), (_descriptor = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "loggedIn", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor2 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "username", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor3 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "accessToken", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor4 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "refreshToken", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor5 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "loginModal", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor6 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "logoutModal", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor7 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "infoModal", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor8 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "addClickListener", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor9 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "saveFileModal", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor10 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "loadFileModal", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor11 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "setLoggedIn", [mobx__WEBPACK_IMPORTED_MODULE_3__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return login => {
      this.loggedIn = login;
    };
  }
}), Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "getLoggedIn", [mobx__WEBPACK_IMPORTED_MODULE_3__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "getLoggedIn"), _class.prototype), _descriptor12 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "setUsername", [mobx__WEBPACK_IMPORTED_MODULE_3__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return name => {
      this.username = name;
    };
  }
}), Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "getUsername", [mobx__WEBPACK_IMPORTED_MODULE_3__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "getUsername"), _class.prototype), _descriptor13 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "setAccessToken", [mobx__WEBPACK_IMPORTED_MODULE_3__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return accessToken => {
      this.accessToken = accessToken;
    };
  }
}), Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "getAccessToken", [mobx__WEBPACK_IMPORTED_MODULE_3__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "getAccessToken"), _class.prototype), _descriptor14 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "setRefreshToken", [mobx__WEBPACK_IMPORTED_MODULE_3__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return token => {
      this.refreshToken = token;
    };
  }
}), Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "getRefreshToken", [mobx__WEBPACK_IMPORTED_MODULE_3__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "getRefreshToken"), _class.prototype), _descriptor15 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "setLoginModal", [mobx__WEBPACK_IMPORTED_MODULE_3__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return show => {
      this.loginModal = show;
    };
  }
}), Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "showLoginModal", [mobx__WEBPACK_IMPORTED_MODULE_3__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "showLoginModal"), _class.prototype), _descriptor16 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "setLogoutModal", [mobx__WEBPACK_IMPORTED_MODULE_3__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return show => {
      this.logoutModal = show;
    };
  }
}), Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "showLogoutModal", [mobx__WEBPACK_IMPORTED_MODULE_3__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "showLogoutModal"), _class.prototype), _descriptor17 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "setInfoModal", [mobx__WEBPACK_IMPORTED_MODULE_3__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return show => {
      this.infoModal = show;
    };
  }
}), Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "showInfoModal", [mobx__WEBPACK_IMPORTED_MODULE_3__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "showInfoModal"), _class.prototype), _descriptor18 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "setClickListener", [mobx__WEBPACK_IMPORTED_MODULE_3__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return bool => {
      this.addClickListener = bool;
    };
  }
}), Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "getClickListener", [mobx__WEBPACK_IMPORTED_MODULE_3__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "getClickListener"), _class.prototype), _descriptor19 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "setSaveFileModal", [mobx__WEBPACK_IMPORTED_MODULE_3__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return bool => {
      this.saveFileModal = bool;
    };
  }
}), Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "showSaveFileModal", [mobx__WEBPACK_IMPORTED_MODULE_3__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "showSaveFileModal"), _class.prototype), _descriptor20 = Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "setLoadFileModal", [mobx__WEBPACK_IMPORTED_MODULE_3__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return bool => {
      this.loadFileModal = bool;
    };
  }
}), Object(_Users_cynthiadu_Github_roomdesign_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "showLoadFileModal", [mobx__WEBPACK_IMPORTED_MODULE_3__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "showLoadFileModal"), _class.prototype)), _class);
var store = new LuminescenceStore();
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/Structures.js":
/*!***************************!*\
  !*** ./src/Structures.js ***!
  \***************************/
/*! exports provided: INIT_STRUCTURE, NEW_STRUCTURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_STRUCTURE", function() { return INIT_STRUCTURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_STRUCTURE", function() { return NEW_STRUCTURE; });
// SERVER
const INIT_STRUCTURE = '{"floorplan":{"corners":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"x":204.85099999999989,"y":289.052},"da026c08-d76a-a944-8e7b-096b752da9ed":{"x":672.2109999999999,"y":289.052},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":672.2109999999999,"y":-178.308},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{"x":204.85099999999989,"y":-178.308}},"walls":[{"corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"da026c08-d76a-a944-8e7b-096b752da9ed","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{}},"items":[]}'; // export const INIT_STRUCTURE = '{"floorplan":{"corners":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"x":-528.7010000000001,"y":289.052},"da026c08-d76a-a944-8e7b-096b752da9ed":{"x":962.7869999999997,"y":289.052},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":962.7869999999997,"y":-808.228},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{"x":-528.7010000000001,"y":-808.228},"f7665531-d4a6-5c98-262d-fd5dce99ffe6":{"x":-528.7010000000001,"y":-808.228},"b7c7c88e-7eba-3a36-2b15-2ea11db4954e":{"x":-528.7010000000001,"y":-16.764000000000124},"f8616cfb-3398-76b6-1de7-fd7bdf79d846":{"x":-182.75300000000004,"y":-16.764000000000124},"12b82b6a-1b32-6ca7-902b-e165be829aee":{"x":-182.75300000000004,"y":289.052},"a7a1f70a-a8d5-b277-b638-43f217f13162":{"x":962.7869999999997,"y":-356.10800000000006},"fb31dc94-8219-8d5b-07b7-39d3d9f5e174":{"x":-528.7010000000001,"y":-356.10800000000006},"520d5340-0e6e-dbb4-1c95-67450828709b":{"x":126.11099999999988,"y":-808.228},"b52938e9-2cbc-2b5a-63a5-f4deee851573":{"x":126.11099999999988,"y":-356.10800000000006},"5e7e053a-50e9-0705-17dd-525289c593b4":{"x":-182.75300000000004,"y":-16.764000000000124},"ff84ba5e-db38-2c88-4544-30d5a9916e74":{"x":-182.7530000000001,"y":-356.10800000000006},"845b64fe-33b0-6939-6db5-3deae66e2df3":{"x":557.9109999999998,"y":-356.10800000000006},"255e0537-c4db-7a42-da82-0b5932162def":{"x":557.9109999999997,"y":289.052}},"walls":[{"corner1":"da026c08-d76a-a944-8e7b-096b752da9ed","corner2":"a7a1f70a-a8d5-b277-b638-43f217f13162","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"520d5340-0e6e-dbb4-1c95-67450828709b","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"f7665531-d4a6-5c98-262d-fd5dce99ffe6","corner2":"fb31dc94-8219-8d5b-07b7-39d3d9f5e174","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0ddfbee5148d0ef82ff06b","stretch":true,"scale":0}},{"corner1":"b7c7c88e-7eba-3a36-2b15-2ea11db4954e","corner2":"5e7e053a-50e9-0705-17dd-525289c593b4","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0de04be5148d0ef82ff06f","stretch":false,"scale":300}},{"corner1":"5e7e053a-50e9-0705-17dd-525289c593b4","corner2":"12b82b6a-1b32-6ca7-902b-e165be829aee","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"12b82b6a-1b32-6ca7-902b-e165be829aee","corner2":"255e0537-c4db-7a42-da82-0b5932162def","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"a7a1f70a-a8d5-b277-b638-43f217f13162","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"a7a1f70a-a8d5-b277-b638-43f217f13162","corner2":"845b64fe-33b0-6939-6db5-3deae66e2df3","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"fb31dc94-8219-8d5b-07b7-39d3d9f5e174","corner2":"b7c7c88e-7eba-3a36-2b15-2ea11db4954e","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0de04be5148d0ef82ff06f","stretch":false,"scale":300}},{"corner1":"520d5340-0e6e-dbb4-1c95-67450828709b","corner2":"f7665531-d4a6-5c98-262d-fd5dce99ffe6","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"520d5340-0e6e-dbb4-1c95-67450828709b","corner2":"b52938e9-2cbc-2b5a-63a5-f4deee851573","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"b52938e9-2cbc-2b5a-63a5-f4deee851573","corner2":"ff84ba5e-db38-2c88-4544-30d5a9916e74","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"5e7e053a-50e9-0705-17dd-525289c593b4","corner2":"ff84ba5e-db38-2c88-4544-30d5a9916e74","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0de04be5148d0ef82ff06f","stretch":false,"scale":300}},{"corner1":"ff84ba5e-db38-2c88-4544-30d5a9916e74","corner2":"fb31dc94-8219-8d5b-07b7-39d3d9f5e174","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0de04be5148d0ef82ff06f","stretch":false,"scale":300}},{"corner1":"845b64fe-33b0-6939-6db5-3deae66e2df3","corner2":"b52938e9-2cbc-2b5a-63a5-f4deee851573","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"845b64fe-33b0-6939-6db5-3deae66e2df3","corner2":"255e0537-c4db-7a42-da82-0b5932162def","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"255e0537-c4db-7a42-da82-0b5932162def","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0de017e5148d0ef82ff06d","stretch":false,"scale":100}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{"5e7e053a-50e9-0705-17dd-525289c593b4,b7c7c88e-7eba-3a36-2b15-2ea11db4954e,fb31dc94-8219-8d5b-07b7-39d3d9f5e174,ff84ba5e-db38-2c88-4544-30d5a9916e74":{"url":"https://www.feldsparhomes.com:8001/assets/5f23cf9dfcad4510794b74a5","scale":100},"12b82b6a-1b32-6ca7-902b-e165be829aee,255e0537-c4db-7a42-da82-0b5932162def,5e7e053a-50e9-0705-17dd-525289c593b4,845b64fe-33b0-6939-6db5-3deae66e2df3,b52938e9-2cbc-2b5a-63a5-f4deee851573,ff84ba5e-db38-2c88-4544-30d5a9916e74":{"url":"https://www.feldsparhomes.com:8001/assets/5f23cc88fcad4510794b74a2","scale":300},"255e0537-c4db-7a42-da82-0b5932162def,845b64fe-33b0-6939-6db5-3deae66e2df3,a7a1f70a-a8d5-b277-b638-43f217f13162,da026c08-d76a-a944-8e7b-096b752da9ed":{"url":"https://www.feldsparhomes.com:8001/assets/5f23cc88fcad4510794b74a2","scale":300},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571,520d5340-0e6e-dbb4-1c95-67450828709b,845b64fe-33b0-6939-6db5-3deae66e2df3,a7a1f70a-a8d5-b277-b638-43f217f13162,b52938e9-2cbc-2b5a-63a5-f4deee851573":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde3de5148d0ef82ff067","scale":300}}},"items":[{"item_name":"Closed Door","item_type":7,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0de67be5148d0ef82ff07a","xpos":-182.25300000000007,"ypos":97.60766674041749,"zpos":-265.87148810916824,"rotation":1.5707963267948968,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Closed Door","item_type":7,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0de67be5148d0ef82ff07a","xpos":-6.1306987337970895,"ypos":97.60766674041749,"zpos":-355.60800000000006,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Closed Door","item_type":7,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0de67be5148d0ef82ff07a","xpos":272.2625751168787,"ypos":97.60766674041749,"zpos":-355.60800000000006,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Closed Door","item_type":7,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0de67be5148d0ef82ff07a","xpos":153.56208865739586,"ypos":97.60766674041749,"zpos":288.5520000000001,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Doorway","item_type":7,"model_url":"https://www.feldsparhomes.com:8001/assets/5f216b874e8d78085923bd44","xpos":557.4109999999997,"ypos":92.72000000000001,"zpos":-11.91533072205965,"rotation":-1.570796326794897,"scale_x":1.761920640332288,"scale_y":0.9941075285389964,"scale_z":0.970743817546422,"fixed":false},{"item_name":"Settie Sofa","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0de6afe5148d0ef82ff07c","xpos":50.70396867893675,"ypos":49.05269806087017,"zpos":-77.44931275367043,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Window","item_type":3,"model_url":"https://www.feldsparhomes.com:8001/assets/5f216403a74cef2244723701","xpos":781.2734516519781,"ypos":168.7433133914559,"zpos":288.552,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Window","item_type":3,"model_url":"https://www.feldsparhomes.com:8001/assets/5f216403a74cef2244723701","xpos":962.2869999999997,"ypos":131.5549263034968,"zpos":-620.1865612051206,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Window","item_type":3,"model_url":"https://www.feldsparhomes.com:8001/assets/5f216403a74cef2244723701","xpos":-127.61975820877899,"ypos":127.16808289206278,"zpos":-807.728,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Window","item_type":3,"model_url":"https://www.feldsparhomes.com:8001/assets/5f216403a74cef2244723701","xpos":-182.25300000000004,"ypos":118.46564241683905,"zpos":145.5197198724038,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Window","item_type":3,"model_url":"https://www.feldsparhomes.com:8001/assets/5f216403a74cef2244723701","xpos":962.2869999999997,"ypos":152.37988558392658,"zpos":-122.10436124106286,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Book Shelf","item_type":2,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0de624e5148d0ef82ff078","xpos":-254.91727737995598,"ypos":170.2369020890104,"zpos":-375.0520937042237,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Book Shelf","item_type":2,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0de624e5148d0ef82ff078","xpos":746.442535901746,"ypos":167.78415349989893,"zpos":-375.0520937042237,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Worktable","item_type":2,"model_url":"https://www.feldsparhomes.com:8001/assets/5f216efe4e8d78085923bd4b","xpos":862.1289618851855,"ypos":120.1812758620382,"zpos":-383.9679996566773,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Curtain","item_type":2,"model_url":"https://www.feldsparhomes.com:8001/assets/5f225ee3fcad4510794b748d","xpos":-129.20848504790854,"ypos":142.90845286994022,"zpos":-799.4204650669097,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Laptop","item_type":10,"model_url":"https://www.feldsparhomes.com:8001/assets/5f1a728d7cbac2049d013bf5","xpos":861.1654942293095,"ypos":140.67379584792263,"zpos":-378.0816363260415,"rotation":-3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Laptop","item_type":10,"model_url":"https://www.feldsparhomes.com:8001/assets/5f1a728d7cbac2049d013bf5","xpos":805.7870061005033,"ypos":84.87253154441714,"zpos":-86.24273988775894,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Water Closet","item_type":9,"model_url":"https://www.feldsparhomes.com:8001/assets/5f226662fcad4510794b7493","xpos":-449.58311152508054,"ypos":53.35000197112982,"zpos":-304.90743275451666,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Arc Double Bed","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f1ec30c030a8d1a29aedfa5","xpos":-407.42308427999365,"ypos":47.83466703093957,"zpos":-598.4885425994423,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Yellow Chair","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0f133d7822271f6f0864fc","xpos":217.71303803418232,"ypos":41.93527768057811,"zpos":10.432812003378046,"rotation":-1.050498297625705,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Yellow Chair","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0f133d7822271f6f0864fc","xpos":806.5620135398937,"ypos":41.93527768057811,"zpos":-164.64456256584063,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Yellow Chair","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0f133d7822271f6f0864fc","xpos":803.4878884562156,"ypos":41.93527768057811,"zpos":-4.207523806425556,"rotation":-3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Yellow Chair","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0f133d7822271f6f0864fc","xpos":722.770898653723,"ypos":41.93527768057811,"zpos":-90.16447173515321,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Yellow Chair","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0f133d7822271f6f0864fc","xpos":882.2071415216299,"ypos":41.93527768057811,"zpos":-82.05979543542013,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Yellow Chair","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0f133d7822271f6f0864fc","xpos":868.4671681463515,"ypos":41.93527768057811,"zpos":-455.6166420487589,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Yellow Chair","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0f133d7822271f6f0864fc","xpos":216.31979430882333,"ypos":41.93527768057811,"zpos":105.2170652813835,"rotation":-1.7711326516201638,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Nightstand","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f216d844e8d78085923bd47","xpos":-89.64125683907253,"ypos":22.048551559448242,"zpos":-88.17455045218605,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Persian Rug","item_type":8,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0de698e5148d0ef82ff07b","xpos":71.693878557821,"ypos":1.1165102943778038,"zpos":56.628711686234396,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Persian Rug","item_type":8,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0de698e5148d0ef82ff07b","xpos":570.5371990031961,"ypos":1.1165102943778038,"zpos":-649.5813980888961,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Shower","item_type":2,"model_url":"https://www.feldsparhomes.com:8001/assets/5f227e99fcad4510794b7497","xpos":-441.92590901651556,"ypos":136.53263236735302,"zpos":-25.210174144744965,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Kitchen Cabinet","item_type":9,"model_url":"https://www.feldsparhomes.com:8001/assets/5f0e9e9ce5148d0ef82ff086","xpos":831.0954423409167,"ypos":50.2979763169285,"zpos":251.9840597638497,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Wooden Bath Tub","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f227e47fcad4510794b7495","xpos":-422.550565881539,"ypos":32.36403846740723,"zpos":-66.410954808044,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Poltrona Double Bed","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f1ec364030a8d1a29aedfa7","xpos":567.811270524633,"ypos":54.15303039550781,"zpos":-687.4185274326252,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Wash Basin","item_type":2,"model_url":"https://www.feldsparhomes.com:8001/assets/5f228056fcad4510794b7499","xpos":-338.68263229136375,"ypos":91.72768494165075,"zpos":-322.5352203445435,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Ceiling Light","item_type":11,"model_url":"https://www.feldsparhomes.com:8001/assets/5f1545957822271f6f0864fe","xpos":180.7661334480298,"ypos":202.91876154294073,"zpos":-82.8831976304781,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Bullet Lights","item_type":11,"model_url":"https://www.feldsparhomes.com:8001/assets/5f226907fcad4510794b7494","xpos":443.471916697149,"ypos":186.60159301757812,"zpos":-798.1940719649623,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Round Table","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f216e704e8d78085923bd49","xpos":801.9198232441325,"ypos":36.0000057220459,"zpos":-83.55715684892766,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Side Table","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f2259514e8d78085923bd54","xpos":-491.9934050188872,"ypos":22.13325023651123,"zpos":-474.5436371067384,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Side Table","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f2259514e8d78085923bd54","xpos":-492.5004410790948,"ypos":22.13325023651123,"zpos":-725.4845214892434,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Side Table","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f2259514e8d78085923bd54","xpos":434.20113439740135,"ypos":22.13325023651123,"zpos":-783.8546166946444,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Side Table","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f2259514e8d78085923bd54","xpos":706.074558332665,"ypos":22.13325023651123,"zpos":-783.611586735301,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Sofa","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f1ec3c0030a8d1a29aedfa9","xpos":-90.26166484928666,"ypos":43.7550350550863,"zpos":60.841459030315605,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Cabinet","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f216b604e8d78085923bd43","xpos":154.47078892836169,"ypos":82.00786590576172,"zpos":-705.9898964266602,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Cabinet","item_type":1,"model_url":"https://www.feldsparhomes.com:8001/assets/5f216b604e8d78085923bd43","xpos":47.41964654087849,"ypos":82.00786590576172,"zpos":-781.6212900969574,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false}]}'

const NEW_STRUCTURE = '{"floorplan":{"corners":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"x":204.85099999999989,"y":289.052},"da026c08-d76a-a944-8e7b-096b752da9ed":{"x":672.2109999999999,"y":289.052},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":672.2109999999999,"y":-178.308},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{"x":204.85099999999989,"y":-178.308}},"walls":[{"corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"da026c08-d76a-a944-8e7b-096b752da9ed","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","frontTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0},"backTexture":{"url":"https://www.feldsparhomes.com:8001/assets/5f0dde8ee5148d0ef82ff069","stretch":true,"scale":0}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{}},"items":[]}'; // // DEV-LOCAL
// export const INIT_STRUCTURE = '{"floorplan":{"corners":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"x":204.85099999999989,"y":289.052},"da026c08-d76a-a944-8e7b-096b752da9ed":{"x":672.2109999999999,"y":289.052},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":672.2109999999999,"y":-178.308},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{"x":204.85099999999989,"y":-178.308}},"walls":[{"corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0},"backTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0}},{"corner1":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0},"backTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0}},{"corner1":"da026c08-d76a-a944-8e7b-096b752da9ed","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0},"backTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","frontTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0},"backTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{}},"items":[]}'
// export const NEW_STRUCTURE = '{"floorplan":{"corners":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"x":204.85099999999989,"y":289.052},"da026c08-d76a-a944-8e7b-096b752da9ed":{"x":672.2109999999999,"y":289.052},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":672.2109999999999,"y":-178.308},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{"x":204.85099999999989,"y":-178.308}},"walls":[{"corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0},"backTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0}},{"corner1":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0},"backTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0}},{"corner1":"da026c08-d76a-a944-8e7b-096b752da9ed","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0},"backTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","frontTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0},"backTexture":{"url":"http://localhost:8001/assets/5f07f740b5991623548246d7","stretch":true,"scale":0}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{}},"items":[]}'

/***/ }),

/***/ "./src/engine/blueprint3d.js":
/*!***********************************!*\
  !*** ./src/engine/blueprint3d.js ***!
  \***********************************/
/*! exports provided: BP3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BP3D", function() { return BP3D; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Constants.js */ "./src/Constants.js");




var BP3D;

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Core;

  (function (Core) {
    /** Collection of utility functions. */
    var Utils = function () {
      function Utils() {}
      /** Determines the distance of a point from a line.
       * @param x Point's x coordinate.
       * @param y Point's y coordinate.
       * @param x1 Line-Point 1's x coordinate.
       * @param y1 Line-Point 1's y coordinate.
       * @param x2 Line-Point 2's x coordinate.
       * @param y2 Line-Point 2's y coordinate.
       * @returns The distance.
       */


      Utils.pointDistanceFromLine = function (x, y, x1, y1, x2, y2) {
        var tPoint = Utils.closestPointOnLine(x, y, x1, y1, x2, y2);
        var tDx = x - tPoint.x;
        var tDy = y - tPoint.y;
        return Math.sqrt(tDx * tDx + tDy * tDy);
      };
      /** Gets the projection of a point onto a line.
       * @param x Point's x coordinate.
       * @param y Point's y coordinate.
       * @param x1 Line-Point 1's x coordinate.
       * @param y1 Line-Point 1's y coordinate.
       * @param x2 Line-Point 2's x coordinate.
       * @param y2 Line-Point 2's y coordinate.
       * @returns The point.
       */


      Utils.closestPointOnLine = function (x, y, x1, y1, x2, y2) {
        // Inspired by: http://stackoverflow.com/a/6853926
        var tA = x - x1;
        var tB = y - y1;
        var tC = x2 - x1;
        var tD = y2 - y1;
        var tDot = tA * tC + tB * tD;
        var tLenSq = tC * tC + tD * tD;
        var tParam = tDot / tLenSq;
        var tXx, tYy;

        if (tParam < 0 || x1 === x2 && y1 === y2) {
          tXx = x1;
          tYy = y1;
        } else if (tParam > 1) {
          tXx = x2;
          tYy = y2;
        } else {
          tXx = x1 + tParam * tC;
          tYy = y1 + tParam * tD;
        }

        return {
          x: tXx,
          y: tYy
        };
      };
      /** Gets the distance of two points.
       * @param x1 X part of first point.
       * @param y1 Y part of first point.
       * @param x2 X part of second point.
       * @param y2 Y part of second point.
       * @returns The distance.
       */


      Utils.distance = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      };
      /**  Gets the angle between 0,0 -> x1,y1 and 0,0 -> x2,y2 (-pi to pi)
       * @returns The angle.
       */


      Utils.angle = function (x1, y1, x2, y2) {
        var tDot = x1 * x2 + y1 * y2;
        var tDet = x1 * y2 - y1 * x2;
        var tAngle = -Math.atan2(tDet, tDot);
        return tAngle;
      };
      /** shifts angle to be 0 to 2pi */


      Utils.angle2pi = function (x1, y1, x2, y2) {
        var tTheta = Utils.angle(x1, y1, x2, y2);

        if (tTheta < 0) {
          tTheta += 2 * Math.PI;
        }

        return tTheta;
      };
      /** Checks if an array of points is clockwise.
       * @param points Is array of points with x,y attributes
       * @returns True if clockwise.
       */


      Utils.isClockwise = function (points) {
        // make positive
        var tSubX = Math.min(0, Math.min.apply(null, Utils.map(points, function (p) {
          return p.x;
        })));
        var tSubY = Math.min(0, Math.min.apply(null, Utils.map(points, function (p) {
          return p.x;
        })));
        var tNewPoints = Utils.map(points, function (p) {
          return {
            x: p.x - tSubX,
            y: p.y - tSubY
          };
        }); // determine CW/CCW, based on:
        // http://stackoverflow.com/questions/1165647

        var tSum = 0;

        for (var tI = 0; tI < tNewPoints.length; tI++) {
          var tC1 = tNewPoints[tI];
          var tC2;

          if (tI === tNewPoints.length - 1) {
            tC2 = tNewPoints[0];
          } else {
            tC2 = tNewPoints[tI + 1];
          }

          tSum += (tC2.x - tC1.x) * (tC2.y + tC1.y);
        }

        return tSum >= 0;
      };
      /** Creates a Guid.
       * @returns A new Guid.
       */


      Utils.guid = function () {
        var tS4 = function () {
          return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        };

        return tS4() + tS4() + '-' + tS4() + '-' + tS4() + '-' + tS4() + '-' + tS4() + tS4() + tS4();
      };
      /** both arguments are arrays of corners with x,y attributes */


      Utils.polygonPolygonIntersect = function (firstCorners, secondCorners) {
        for (var tI = 0; tI < firstCorners.length; tI++) {
          var tFirstCorner = firstCorners[tI],
              tSecondCorner;

          if (tI === firstCorners.length - 1) {
            tSecondCorner = firstCorners[0];
          } else {
            tSecondCorner = firstCorners[tI + 1];
          }

          if (Utils.linePolygonIntersect(tFirstCorner.x, tFirstCorner.y, tSecondCorner.x, tSecondCorner.y, secondCorners)) {
            return true;
          }
        }

        return false;
      };
      /** Corners is an array of points with x,y attributes */


      Utils.linePolygonIntersect = function (x1, y1, x2, y2, corners) {
        for (var tI = 0; tI < corners.length; tI++) {
          var tFirstCorner = corners[tI],
              tSecondCorner;

          if (tI === corners.length - 1) {
            tSecondCorner = corners[0];
          } else {
            tSecondCorner = corners[tI + 1];
          }

          if (Utils.lineLineIntersect(x1, y1, x2, y2, tFirstCorner.x, tFirstCorner.y, tSecondCorner.x, tSecondCorner.y)) {
            return true;
          }
        }

        return false;
      };
      /** */


      Utils.lineLineIntersect = function (x1, y1, x2, y2, x3, y3, x4, y4) {
        function tCCW(p1, p2, p3) {
          var tA = p1.x,
              tB = p1.y,
              tC = p2.x,
              tD = p2.y,
              tE = p3.x,
              tF = p3.y;
          return (tF - tB) * (tC - tA) > (tD - tB) * (tE - tA);
        }

        var tP1 = {
          x: x1,
          y: y1
        },
            tP2 = {
          x: x2,
          y: y2
        },
            tP3 = {
          x: x3,
          y: y3
        },
            tP4 = {
          x: x4,
          y: y4
        };
        return tCCW(tP1, tP3, tP4) !== tCCW(tP2, tP3, tP4) && tCCW(tP1, tP2, tP3) !== tCCW(tP1, tP2, tP4);
      };
      /**
       @param corners Is an array of points with x,y attributes
        @param startX X start coord for raycast
        @param startY Y start coord for raycast
      */


      Utils.pointInPolygon = function (x, y, corners, startX, startY) {
        startX = startX || 0;
        startY = startY || 0; //ensure that point(startX, startY) is outside the polygon consists of corners

        var tMinX = 0,
            tMinY = 0; // if (startX === undefined || startY === undefined) {

        for (let tI = 0; tI < corners.length; tI++) {
          tMinX = Math.min(tMinX, corners[tI].x);
          tMinY = Math.min(tMinX, corners[tI].y);
        }

        startX = tMinX - 10;
        startY = tMinY - 10; // }

        var tIntersects = 0;

        for (let tI = 0; tI < corners.length; tI++) {
          var tFirstCorner = corners[tI],
              tSecondCorner;

          if (tI === corners.length - 1) {
            tSecondCorner = corners[0];
          } else {
            tSecondCorner = corners[tI + 1];
          }

          if (Utils.lineLineIntersect(startX, startY, x, y, tFirstCorner.x, tFirstCorner.y, tSecondCorner.x, tSecondCorner.y)) {
            tIntersects++;
          }
        } // odd intersections means the point is in the polygon


        return tIntersects % 2 === 1;
      };
      /** Checks if all corners of insideCorners are inside the polygon described by outsideCorners */


      Utils.polygonInsidePolygon = function (insideCorners, outsideCorners, startX, startY) {
        startX = startX || 0;
        startY = startY || 0;

        for (var tI = 0; tI < insideCorners.length; tI++) {
          if (!Utils.pointInPolygon(insideCorners[tI].x, insideCorners[tI].y, outsideCorners, startX, startY)) {
            return false;
          }
        }

        return true;
      };
      /** Checks if any corners of firstCorners is inside the polygon described by secondCorners */


      Utils.polygonOutsidePolygon = function (insideCorners, outsideCorners, startX, startY) {
        startX = startX || 0;
        startY = startY || 0;

        for (var tI = 0; tI < insideCorners.length; tI++) {
          if (Utils.pointInPolygon(insideCorners[tI].x, insideCorners[tI].y, outsideCorners, startX, startY)) {
            return false;
          }
        }

        return true;
      }; // arrays


      Utils.forEach = function (array, action) {
        for (var tI = 0; tI < array.length; tI++) {
          action(array[tI]);
        }
      };

      Utils.forEachIndexed = function (array, action) {
        for (var tI = 0; tI < array.length; tI++) {
          action(tI, array[tI]);
        }
      };

      Utils.map = function (array, func) {
        var tResult = [];
        array.forEach(function (element) {
          tResult.push(func(element));
        });
        return tResult;
      };
      /** Remove elements in array if func(element) returns true */


      Utils.removeIf = function (array, func) {
        var tResult = [];
        array.forEach(function (element) {
          if (!func(element)) {
            tResult.push(element);
          }
        });
        return tResult;
      };
      /** Shift the items in an array by shift (positive integer) */


      Utils.cycle = function (arr, shift) {
        var tReturn = arr.slice(0);

        for (var tI = 0; tI < shift; tI++) {
          var tmp = tReturn.shift();
          tReturn.push(tmp);
        }

        return tReturn;
      };
      /** Returns in the unique elemnts in arr */


      Utils.unique = function (arr, hashFunc) {
        var tResults = [];
        var tMap = {};

        for (var tI = 0; tI < arr.length; tI++) {
          if (!tMap.hasOwnProperty(arr[tI])) {
            tResults.push(arr[tI]);
            tMap[hashFunc(arr[tI])] = true;
          }
        }

        return tResults;
      };
      /** Remove value from array, if it is present */


      Utils.removeValue = function (array, value) {
        for (var tI = array.length - 1; tI >= 0; tI--) {
          if (array[tI] === value) {
            array.splice(tI, 1);
          }
        }
      };
      /** Subtracts the elements in subArray from array */


      Utils.subtract = function (array, subArray) {
        return Utils.removeIf(array, function (el) {
          return Utils.hasValue(subArray, el);
        });
      };
      /** Checks if value is in array */


      Utils.hasValue = function (array, value) {
        for (var tI = 0; tI < array.length; tI++) {
          if (array[tI] === value) {
            return true;
          }
        }

        return false;
      };

      return Utils;
    }();

    Core.Utils = Utils;
  })(Core = BP3D.Core || (BP3D.Core = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Core;

  (function (Core) {
    /** Dimensioning in Inch. */
    Core.dimInch = "inch";
    /** Dimensioning in Meter. */

    Core.dimMeter = "m";
    /** Dimensioning in Centi Meter. */

    Core.dimCentiMeter = "cm";
    /** Dimensioning in Milli Meter. */

    Core.dimMilliMeter = "mm";
    /** Dimensioning functions. */

    var Dimensioning = function () {
      function Dimensioning() {}
      /** Converts cm to dimensioning string.
       * @param cm Centi meter value to be converted.
       * @returns String representation.
       */


      Dimensioning.cmToMeasure = function (cm) {
        switch (Core.Configuration.getStringValue(Core.configDimUnit)) {
          case Core.dimInch:
            var realFeet = cm * 0.393700 / 12;
            var feet = Math.floor(realFeet);
            var inches = Math.round((realFeet - feet) * 12);
            return feet + "'" + inches + '"';

          case Core.dimMilliMeter:
            return "" + Math.round(10 * cm) + " mm";

          case Core.dimCentiMeter:
            return "" + Math.round(10 * cm) / 10 + " cm";

          case Core.dimMeter:
          default:
            return "" + Math.round(10 * cm) / 1000 + " m";
        }
      };

      return Dimensioning;
    }();

    Core.Dimensioning = Dimensioning;
  })(Core = BP3D.Core || (BP3D.Core = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Core;

  (function (Core) {
    // GENERAL:

    /** The dimensioning unit for 2D floorplan measurements. */
    Core.configDimUnit = "dimUnit"; // WALL:

    /** The initial wall height in cm. */

    Core.configWallHeight = "wallHeight";
    /** The initial wall thickness in cm. */

    Core.configWallThickness = "wallThickness";
    /** Global configuration to customize the whole system.  */

    var Configuration = function () {
      function Configuration() {}
      /** Set a configuration parameter. */


      Configuration.setValue = function (key, value) {
        this.data[key] = value;
      };
      /** Get a string configuration parameter. */


      Configuration.getStringValue = function (key) {
        switch (key) {
          case Core.configDimUnit:
            return this.data[key];

          default:
            throw new Error("Invalid string configuration parameter: " + key);
        }
      };
      /** Get a numeric configuration parameter. */


      Configuration.getNumericValue = function (key) {
        switch (key) {
          case Core.configWallHeight:
          case Core.configWallThickness:
            return this.data[key];

          default:
            throw new Error("Invalid numeric configuration parameter: " + key);
        }
      };
      /** Configuration data loaded from/stored to extern. */


      Configuration.data = {
        dimUnit: Core.dimInch,
        wallHeight: 250,
        wallThickness: 10
      };
      return Configuration;
    }();

    Core.Configuration = Configuration;
  })(Core = BP3D.Core || (BP3D.Core = {}));
})(BP3D || (BP3D = {}));

var __extends = undefined && undefined.__extends || function (d, b) {
  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Items;

  (function (Items) {
    /**
     * An Item is an abstract entity for all things placed in the scene,
     * e.g. at walls or on the floor.
     */
    var Item = function (_super) {
      __extends(Item, _super);
      /** Constructs an item.
       * @param model TODO
       * @param metadata TODO
       * @param geometry TODO
       * @param material TODO
       * @param position TODO
       * @param rotation TODO
       * @param scale TODO
       */


      function Item(model, metadata, geometry, material, position, rotation, scale) {
        _super.call(this);

        this.model = model;
        this.metadata = metadata;
        /** */

        this.errorGlow = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"]();
        /** */

        this.hover = false;
        /** */

        this.selected = false;
        /** */

        this.highlighted = false;
        /** */

        this.error = false;
        /** */

        this.emissiveColor = 0x444444;
        /** */

        this.errorColor = 0xff0000;
        /** Does this object affect other floor items */

        this.obstructFloorMoves = true;
        /** Does this object affect other in wall items */

        this.obstructInWallMoves = false;
        /** Does this object affect other on floor items */

        this.obstructOnFloorMoves = false;
        /** Does this object affect other on ceiling items */

        this.obstructCeilingMoves = false;
        /** Show rotate option in context menu */

        this.allowRotate = true;
        /** */

        this.fixed = false;
        /** dragging */

        this.dragOffset = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        /** */

        this.getHeight = function () {
          return this.halfSize.y * 2.0;
        };
        /** */


        this.getWidth = function () {
          return this.halfSize.x * 2.0;
        };
        /** */


        this.getDepth = function () {
          return this.halfSize.z * 2.0;
        };
        /** */


        this.getElevation = function () {
          return this.position.y - this.halfSize.y;
        };
        /** */


        this.initObject = function (position) {
          this.placeInRoom(position); // select and stuff

          this.scene.needsUpdate = true;
        };

        this.scene = this.model.scene;
        this.geometry = geometry;
        this.material = material;
        this.errorColor = 0xff0000;
        this.resizable = metadata.resizable;
        this.castShadow = true;
        this.receiveShadow = true;
        this.geometry = geometry;
        this.material = material;

        if (position) {
          this.position.copy(position);
          this.position_set = true;
        } else {
          this.position_set = false;
        } // center in its boundingbox


        this.geometry.computeBoundingBox();
        this.geometry.applyMatrix4(new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]().makeTranslation(-0.5 * (this.geometry.boundingBox.max.x + this.geometry.boundingBox.min.x), -0.5 * (this.geometry.boundingBox.max.y + this.geometry.boundingBox.min.y), -0.5 * (this.geometry.boundingBox.max.z + this.geometry.boundingBox.min.z)));
        this.geometry.computeBoundingBox();
        this.halfSize = this.objectHalfSize();

        if (rotation) {
          this.rotation.y = rotation;
        }

        if (scale != null) {
          this.setScale(scale.x, scale.y, scale.z);
        }
      }

      ;
      /** */

      Item.prototype.remove = function () {
        this.scene.removeItem(this);
      };
      /** */


      Item.prototype.isElevationAdjustable = function () {
        return false;
      };
      /** */


      Item.prototype.elevate = function (elevation) {
        if (elevation > 0 && elevation < BP3D.Core.Configuration.getNumericValue(BP3D.Core.configWallHeight) - 0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y)) {
          this.position.y = this.halfSize.y + elevation;
        }
      };
      /** */


      Item.prototype.resize = function (height, width, depth) {
        if (height > 0 && width > 0 && depth > 0) {
          var x = width / this.getWidth();
          var y = height / this.getHeight();
          var z = depth / this.getDepth();
          this.setScale(x, y, z);
        }
      };
      /** */


      Item.prototype.setScale = function (x, y, z) {
        var scaleVec = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](x, y, z);
        this.halfSize.multiply(scaleVec);
        scaleVec.multiply(this.scale);
        this.scale.set(scaleVec.x, scaleVec.y, scaleVec.z);
        this.resized();
        this.scene.needsUpdate = true;
      };

      ;
      /** */

      Item.prototype.setFixed = function (fixed) {
        this.fixed = fixed;
      };
      /** */


      Item.prototype.removed = function () {};
      /** on is a bool */


      Item.prototype.updateHighlight = function () {
        var on = this.hover || this.selected;
        this.highlighted = on; // eslint-disable-next-line no-unused-vars

        var hex = on ? this.emissiveColor : 0x000000; // eslint-disable-next-line no-unused-vars

        var materials = this.material.materials; // if (materials) {
        //   (<THREE.MeshFaceMaterial>this.material).materials.forEach((material) => {
        //     // TODO_Ekki emissive doesn't exist anymore?
        //     if (material) {
        //       if (material.emissive) {
        //         (<any>material).emissive.setHex(hex);
        //       }
        //     }
        //   });
        // }
      };
      /** */


      Item.prototype.mouseOver = function () {
        this.hover = true;
        this.updateHighlight();
      };

      ;
      /** */

      Item.prototype.mouseOff = function () {
        this.hover = false;
        this.updateHighlight();
      };

      ;
      /** */

      Item.prototype.setSelected = function () {
        this.selected = true;
        this.updateHighlight();
      };

      ;
      /** */

      Item.prototype.setUnselected = function () {
        this.selected = false;
        this.updateHighlight();
      };

      ;
      /** intersection has attributes point (vec3) and object (THREE.Mesh) */

      Item.prototype.clickPressed = function (intersection) {
        this.dragOffset.copy(intersection.point).sub(this.position);
      };

      ;
      /** */

      Item.prototype.clickDragged = function (intersection) {
        if (intersection) {
          this.moveToPosition(intersection.point.sub(this.dragOffset), intersection);
        }
      };

      ;
      /** */

      Item.prototype.rotate = function (intersection) {
        if (intersection) {
          var angle = BP3D.Core.Utils.angle(0, 1, intersection.point.x - this.position.x, intersection.point.z - this.position.z);
          var snapTolerance = Math.PI / 16.0; // snap to intervals near Math.PI/2

          for (var i = -4; i <= 4; i++) {
            if (Math.abs(angle - i * (Math.PI / 2)) < snapTolerance) {
              angle = i * (Math.PI / 2);
              break;
            }
          }

          this.rotation.y = angle;
        }
      };
      /** */


      Item.prototype.moveToPosition = function (vec3, intersection) {
        this.position.copy(vec3);
      };
      /** */


      Item.prototype.clickReleased = function () {
        if (this.error) {
          this.hideError();
        }
      };

      ;
      /**
       * Returns an array of planes to use other than the ground plane
       * for passing intersection to clickPressed and clickDragged
       */

      Item.prototype.customIntersectionPlanes = function () {
        return [];
      };
      /**
       * returns the 2d corners of the bounding polygon
       *
       * offset is Vector3 (used for getting corners of object at a new position)
       *
       * TODO: handle rotated objects better!
       */


      Item.prototype.getCorners = function (xDim, yDim, position) {
        position = position || this.position;
        var halfSize = this.halfSize.clone();
        var c1 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-halfSize.x, 0, -halfSize.z);
        var c2 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](halfSize.x, 0, -halfSize.z);
        var c3 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](halfSize.x, 0, halfSize.z);
        var c4 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-halfSize.x, 0, halfSize.z);
        var transform = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"](); //console.log(this.rotation.y);

        transform.makeRotationY(this.rotation.y); //  + Math.PI/2)

        c1.applyMatrix4(transform);
        c2.applyMatrix4(transform);
        c3.applyMatrix4(transform);
        c4.applyMatrix4(transform);
        c1.add(position);
        c2.add(position);
        c3.add(position);
        c4.add(position); //halfSize.applyMatrix4(transform);
        //var min = position.clone().sub(halfSize);
        //var max = position.clone().add(halfSize);

        var corners = [{
          x: c1.x,
          y: c1.z
        }, {
          x: c2.x,
          y: c2.z
        }, {
          x: c3.x,
          y: c3.z
        }, {
          x: c4.x,
          y: c4.z
        }];
        return corners;
      };
      /**
       * returns the 2d corners of the bounding polygon
       *
       * offset is Vector3 (used for getting corners of object at a new position)
       *
       * TODO: handle rotated objects better!
       */


      Item.prototype.getCornersXZ = function (xDim, yDim, position) {
        position = position || this.position;
        var halfSize = this.halfSize.clone();
        let wallTol = 15;
        var c1 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-(halfSize.x + wallTol), 0, -(halfSize.z + wallTol));
        var c2 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](halfSize.x + wallTol, 0, -(halfSize.z + wallTol));
        var c3 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](halfSize.x + wallTol, 0, halfSize.z + wallTol);
        var c4 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-(halfSize.x + wallTol), 0, halfSize.z + wallTol);
        var transform = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"](); //console.log(this.rotation.y);

        transform.makeRotationY(this.rotation.y); //  + Math.PI/2)

        c1.applyMatrix4(transform);
        c2.applyMatrix4(transform);
        c3.applyMatrix4(transform);
        c4.applyMatrix4(transform);
        c1.add(position);
        c2.add(position);
        c3.add(position);
        c4.add(position); //halfSize.applyMatrix4(transform);
        //var min = position.clone().sub(halfSize);
        //var max = position.clone().add(halfSize);

        var corners = [{
          x: c1.x,
          y: c1.z
        }, {
          x: c2.x,
          y: c2.z
        }, {
          x: c3.x,
          y: c3.z
        }, {
          x: c4.x,
          y: c4.z
        }];
        return corners;
      };
      /**
       * returns the 2d corners of the bounding polygon
       *
       * offset is Vector3 (used for getting corners of object at a new position)
       *
       * TODO: handle rotated objects better!
       */


      Item.prototype.getCornersXZBIG = function (xDim, yDim, position) {
        position = position || this.position;
        var halfSize = this.halfSize.clone();
        let maxSize = Math.max(halfSize.x, halfSize.z);
        let wallTol = 15;
        var c1 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-(maxSize + wallTol), 0, -(maxSize + wallTol));
        var c2 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](maxSize + wallTol, 0, -(maxSize + wallTol));
        var c3 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](maxSize + wallTol, 0, maxSize + wallTol);
        var c4 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-(maxSize + wallTol), 0, maxSize + wallTol);
        var transform = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"](); //console.log(this.rotation.y);

        transform.makeRotationY(this.rotation.y); //  + Math.PI/2)

        c1.applyMatrix4(transform);
        c2.applyMatrix4(transform);
        c3.applyMatrix4(transform);
        c4.applyMatrix4(transform);
        c1.add(position);
        c2.add(position);
        c3.add(position);
        c4.add(position); //halfSize.applyMatrix4(transform);
        //var min = position.clone().sub(halfSize);
        //var max = position.clone().add(halfSize);

        var corners = [{
          x: c1.x,
          y: c1.z
        }, {
          x: c2.x,
          y: c2.z
        }, {
          x: c3.x,
          y: c3.z
        }, {
          x: c4.x,
          y: c4.z
        }];
        return corners;
      };
      /**
       * returns the 2d corners of the bounding polygon
       *
       * offset is Vector3 (used for getting corners of object at a new position)
       *
       * TODO: handle rotated objects better!
       */


      Item.prototype.getCornersXY = function (xDim, yDim, position) {
        position = position || this.position;
        var halfSize = this.halfSize.clone();
        var c1 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-halfSize.x, -halfSize.y, 0);
        var c2 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](halfSize.x, -halfSize.y, 0);
        var c3 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](halfSize.x, halfSize.y, 0);
        var c4 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-halfSize.x, halfSize.y, 0);
        var transform = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"](); //console.log(this.rotation.y);

        transform.makeRotationY(this.rotation.z); //  + Math.PI/2)

        c1.applyMatrix4(transform);
        c2.applyMatrix4(transform);
        c3.applyMatrix4(transform);
        c4.applyMatrix4(transform);
        c1.add(position);
        c2.add(position);
        c3.add(position);
        c4.add(position); //halfSize.applyMatrix4(transform);
        //var min = position.clone().sub(halfSize);
        //var max = position.clone().add(halfSize);

        var corners = [{
          x: c1.x,
          y: c1.y
        }, {
          x: c2.x,
          y: c2.y
        }, {
          x: c3.x,
          y: c3.y
        }, {
          x: c4.x,
          y: c4.y
        }];
        return corners;
      };
      /**
       * returns the 2d corners of the bounding polygon
       *
       * offset is Vector3 (used for getting corners of object at a new position)
       *
       * TODO: handle rotated objects better!
       */


      Item.prototype.getCornersYZ = function (xDim, yDim, position) {
        position = position || this.position;
        var halfSize = this.halfSize.clone();
        var c1 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, -halfSize.y, -halfSize.z);
        var c2 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, halfSize.y, -halfSize.z);
        var c3 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, halfSize.y, halfSize.z);
        var c4 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, -halfSize.y, halfSize.z);
        var transform = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"](); //console.log(this.rotation.y);

        transform.makeRotationY(this.rotation.x); //  + Math.PI/2)

        c1.applyMatrix4(transform);
        c2.applyMatrix4(transform);
        c3.applyMatrix4(transform);
        c4.applyMatrix4(transform);
        c1.add(position);
        c2.add(position);
        c3.add(position);
        c4.add(position); //halfSize.applyMatrix4(transform);
        //var min = position.clone().sub(halfSize);
        //var max = position.clone().add(halfSize);

        var corners = [{
          x: c1.y,
          y: c1.z
        }, {
          x: c2.y,
          y: c2.z
        }, {
          x: c3.y,
          y: c3.z
        }, {
          x: c4.y,
          y: c4.z
        }];
        return corners;
      };
      /** */


      Item.prototype.showError = function (vec3) {
        vec3 = vec3 || this.position;

        if (!this.error) {
          this.error = true;
          this.errorGlow = this.createGlow(this.errorColor, 0.8, true);
          this.scene.add(this.errorGlow);
        }

        this.errorGlow.position.copy(vec3);
      };
      /** */


      Item.prototype.hideError = function () {
        if (this.error) {
          this.error = false;
          this.scene.remove(this.errorGlow);
        }
      };
      /** */


      Item.prototype.objectHalfSize = function () {
        var objectBox = new three__WEBPACK_IMPORTED_MODULE_0__["Box3"]();
        objectBox.setFromObject(this);
        return objectBox.max.clone().sub(objectBox.min).divideScalar(2);
      };
      /** */


      Item.prototype.createGlow = function (color, opacity, ignoreDepth) {
        ignoreDepth = ignoreDepth || false;
        opacity = opacity || 0.2;
        var glowMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
          color: color,
          blending: three__WEBPACK_IMPORTED_MODULE_0__["AdditiveBlending"],
          opacity: 0.2,
          transparent: true,
          depthTest: !ignoreDepth
        });
        var glow = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](this.geometry.clone(), glowMaterial);
        glow.position.copy(this.position);
        glow.rotation.copy(this.rotation);
        glow.scale.copy(this.scale);
        return glow;
      };

      ;
      return Item;
    }(three__WEBPACK_IMPORTED_MODULE_0__["Mesh"]);

    Items.Item = Item;
  })(Items = BP3D.Items || (BP3D.Items = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Model;

  (function (Model) {
    /** */
    var cornerTolerance = 20;
    /**
     * Corners are used to define Walls.
     */

    var Corner = function () {
      /** Constructs a corner.
       * @param floorplan The associated floorplan.
       * @param x X coordinate.
       * @param y Y coordinate.
       * @param id An optional unique id. If not set, created internally.
       */
      function Corner(floorplan, x, y, id) {
        this.floorplan = floorplan;
        this.x = x;
        this.y = y;
        this.id = id;
        /** Array of start walls. */

        this.wallStarts = [];
        /** Array of end walls. */

        this.wallEnds = [];
        /** Callbacks to be fired on movement. */

        this.moved_callbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /** Callbacks to be fired on removal. */

        this.deleted_callbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /** Callbacks to be fired in case of action. */

        this.action_callbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        this.id = id || BP3D.Core.Utils.guid();
      }
      /** Add function to moved callbacks.
       * @param func The function to be added.
       */


      Corner.prototype.fireOnMove = function (func) {
        this.moved_callbacks.add(func);
      };
      /** Add function to deleted callbacks.
       * @param func The function to be added.
       */


      Corner.prototype.fireOnDelete = function (func) {
        this.deleted_callbacks.add(func);
      };
      /** Add function to action callbacks.
       * @param func The function to be added.
       */


      Corner.prototype.fireOnAction = function (func) {
        this.action_callbacks.add(func);
      };
      /**
       * @returns
       * @deprecated
       */


      Corner.prototype.getX = function () {
        return this.x;
      };
      /**
       * @returns
       * @deprecated
       */


      Corner.prototype.getY = function () {
        return this.y;
      };
      /**
       *
       */


      Corner.prototype.snapToAxis = function (tolerance) {
        // try to snap this corner to an axis
        var snapped = {
          x: false,
          y: false
        };
        var scope = this;
        this.adjacentCorners().forEach(function (corner) {
          if (Math.abs(corner.x - scope.x) < tolerance) {
            scope.x = corner.x;
            snapped.x = true;
          }

          if (Math.abs(corner.y - scope.y) < tolerance) {
            scope.y = corner.y;
            snapped.y = true;
          }
        });
        return snapped;
      };
      /** Moves corner relatively to new position.
       * @param dx The delta x.
       * @param dy The delta y.
       */


      Corner.prototype.relativeMove = function (dx, dy) {
        this.move(this.x + dx, this.y + dy);
      };

      Corner.prototype.fireAction = function (action) {
        this.action_callbacks.fire(action);
      };
      /** Remove callback. Fires the delete callbacks. */


      Corner.prototype.remove = function () {
        this.deleted_callbacks.fire(this);
      };
      /** Removes all walls. */


      Corner.prototype.removeAll = function () {
        for (let i = 0; i < this.wallStarts.length; i++) {
          this.wallStarts[i].remove();
        }

        for (let i = 0; i < this.wallEnds.length; i++) {
          this.wallEnds[i].remove();
        }

        this.remove();
      };
      /** Moves corner to new position.
       * @param newX The new x position.
       * @param newY The new y position.
       */


      Corner.prototype.move = function (newX, newY) {
        this.x = newX;
        this.y = newY;
        this.mergeWithIntersected();
        this.moved_callbacks.fire(this.x, this.y);
        this.wallStarts.forEach(function (wall) {
          wall.fireMoved();
        });
        this.wallEnds.forEach(function (wall) {
          wall.fireMoved();
        });
      };
      /** Gets the adjacent corners.
       * @returns Array of corners.
       */


      Corner.prototype.adjacentCorners = function () {
        var retArray = [];

        for (let i = 0; i < this.wallStarts.length; i++) {
          retArray.push(this.wallStarts[i].getEnd());
        }

        for (let i = 0; i < this.wallEnds.length; i++) {
          retArray.push(this.wallEnds[i].getStart());
        }

        return retArray;
      };
      /** Checks if a wall is connected.
       * @param wall A wall.
       * @returns True in case of connection.
       */


      Corner.prototype.isWallConnected = function (wall) {
        for (let i = 0; i < this.wallStarts.length; i++) {
          if (this.wallStarts[i] === wall) {
            return true;
          }
        }

        for (let i = 0; i < this.wallEnds.length; i++) {
          if (this.wallEnds[i] === wall) {
            return true;
          }
        }

        return false;
      };
      /**
       *
       */


      Corner.prototype.distanceFrom = function (x, y) {
        var distance = BP3D.Core.Utils.distance(x, y, this.x, this.y); //console.log('x,y ' + x + ',' + y + ' to ' + this.getX() + ',' + this.getY() + ' is ' + distance);

        return distance;
      };
      /** Gets the distance from a wall.
       * @param wall A wall.
       * @returns The distance.
       */


      Corner.prototype.distanceFromWall = function (wall) {
        return wall.distanceFrom(this.x, this.y);
      };
      /** Gets the distance from a corner.
       * @param corner A corner.
       * @returns The distance.
       */


      Corner.prototype.distanceFromCorner = function (corner) {
        return this.distanceFrom(corner.x, corner.y);
      };
      /** Detaches a wall.
       * @param wall A wall.
       */


      Corner.prototype.detachWall = function (wall) {
        BP3D.Core.Utils.removeValue(this.wallStarts, wall);
        BP3D.Core.Utils.removeValue(this.wallEnds, wall);

        if (this.wallStarts.length === 0 && this.wallEnds.length === 0) {
          this.remove();
        }
      };
      /** Attaches a start wall.
       * @param wall A wall.
       */


      Corner.prototype.attachStart = function (wall) {
        this.wallStarts.push(wall);
      };
      /** Attaches an end wall.
       * @param wall A wall.
       */


      Corner.prototype.attachEnd = function (wall) {
        this.wallEnds.push(wall);
      };
      /** Get wall to corner.
       * @param corner A corner.
       * @return The associated wall or null.
       */


      Corner.prototype.wallTo = function (corner) {
        for (var i = 0; i < this.wallStarts.length; i++) {
          if (this.wallStarts[i].getEnd() === corner) {
            return this.wallStarts[i];
          }
        }

        return null;
      };
      /** Get wall from corner.
       * @param corner A corner.
       * @return The associated wall or null.
       */


      Corner.prototype.wallFrom = function (corner) {
        for (var i = 0; i < this.wallEnds.length; i++) {
          if (this.wallEnds[i].getStart() === corner) {
            return this.wallEnds[i];
          }
        }

        return null;
      };
      /** Get wall to or from corner.
       * @param corner A corner.
       * @return The associated wall or null.
       */


      Corner.prototype.wallToOrFrom = function (corner) {
        return this.wallTo(corner) || this.wallFrom(corner);
      };
      /**
       *
       */


      Corner.prototype.combineWithCorner = function (corner) {
        // update position to other corner's
        this.x = corner.x;
        this.y = corner.y; // absorb the other corner's wallStarts and wallEnds

        for (let i = corner.wallStarts.length - 1; i >= 0; i--) {
          corner.wallStarts[i].setStart(this);
        }

        for (let i = corner.wallEnds.length - 1; i >= 0; i--) {
          corner.wallEnds[i].setEnd(this);
        } // delete the other corner


        corner.removeAll();
        this.removeDuplicateWalls();
        this.floorplan.update();
      };

      Corner.prototype.mergeWithIntersected = function () {
        //console.log('mergeWithIntersected for object: ' + this.type);
        // check corners
        for (var i = 0; i < this.floorplan.getCorners().length; i++) {
          var corner = this.floorplan.getCorners()[i];

          if (this.distanceFromCorner(corner) < cornerTolerance && corner !== this) {
            this.combineWithCorner(corner);
            return true;
          }
        } // check walls


        for (let i = 0; i < this.floorplan.getWalls().length; i++) {
          var wall = this.floorplan.getWalls()[i];

          if (this.distanceFromWall(wall) < cornerTolerance && !this.isWallConnected(wall)) {
            // update position to be on wall
            var intersection = BP3D.Core.Utils.closestPointOnLine(this.x, this.y, wall.getStart().x, wall.getStart().y, wall.getEnd().x, wall.getEnd().y);
            this.x = intersection.x;
            this.y = intersection.y; // merge this corner into wall by breaking wall into two parts

            this.floorplan.newWall(this, wall.getEnd());
            wall.setEnd(this);
            this.floorplan.update();
            return true;
          }
        }

        return false;
      };
      /** Ensure we do not have duplicate walls (i.e. same start and end points) */


      Corner.prototype.removeDuplicateWalls = function () {
        // delete the wall between these corners, if it exists
        var wallEndpoints = {};
        var wallStartpoints = {};

        for (let i = this.wallStarts.length - 1; i >= 0; i--) {
          if (this.wallStarts[i].getEnd() === this) {
            // remove zero length wall 
            this.wallStarts[i].remove();
          } else if (this.wallStarts[i].getEnd().id in wallEndpoints) {
            // remove duplicated wall
            this.wallStarts[i].remove();
          } else {
            wallEndpoints[this.wallStarts[i].getEnd().id] = true;
          }
        }

        for (let i = this.wallEnds.length - 1; i >= 0; i--) {
          if (this.wallEnds[i].getStart() === this) {
            // removed zero length wall 
            this.wallEnds[i].remove();
          } else if (this.wallEnds[i].getStart().id in wallStartpoints) {
            // removed duplicated wall
            this.wallEnds[i].remove();
          } else {
            wallStartpoints[this.wallEnds[i].getStart().id] = true;
          }
        }
      };

      return Corner;
    }();

    Model.Corner = Corner;
  })(Model = BP3D.Model || (BP3D.Model = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Model;

  (function (Model) {
    /**
     * Half Edges are created by Room.
     *
     * Once rooms have been identified, Half Edges are created for each interior wall.
     *
     * A wall can have two half edges if it is visible from both sides.
     */
    var HalfEdge = function () {
      /**
       * Constructs a half edge.
       * @param room The associated room.
       * @param wall The corresponding wall.
       * @param front True if front side.
       */
      function HalfEdge(room, wall, front) {
        this.room = room;
        this.wall = wall;
        this.front = front;
        /** used for intersection testing... not convinced this belongs here */

        this.plane = null;
        this.box = null;
        /** transform from world coords to wall planes (z=0) */

        this.interiorTransform = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
        /** transform from world coords to wall planes (z=0) */

        this.invInteriorTransform = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
        /** transform from world coords to wall planes (z=0) */

        this.exteriorTransform = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
        /** transform from world coords to wall planes (z=0) */

        this.invExteriorTransform = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
        /** */

        this.redrawCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        this.edgeSelectedCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        this.edgeUnSelectedCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /**
         * this feels hacky, but need wall items
         */

        this.generatePlane = function () {
          function transformCorner(corner) {
            return new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](corner.x, 0, corner.y);
          }

          var v1 = transformCorner(this.interiorStart());
          var v2 = transformCorner(this.interiorEnd());
          var v3 = v2.clone();
          v3.y = this.wall.height;
          var v4 = v1.clone();
          v4.y = this.wall.height;
          var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["Geometry"]();
          geometry.vertices = [v1, v2, v3, v4];
          geometry.faces.push(new three__WEBPACK_IMPORTED_MODULE_0__["Face3"](0, 1, 2));
          geometry.faces.push(new three__WEBPACK_IMPORTED_MODULE_0__["Face3"](0, 2, 3));
          geometry.computeFaceNormals();
          geometry.computeBoundingBox();
          this.plane = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]());
          this.plane.visible = false;
          this.plane.edge = this; // js monkey patch

          this.computeTransforms(this.interiorTransform, this.invInteriorTransform, this.interiorStart(), this.interiorEnd());
          this.computeTransforms(this.exteriorTransform, this.invExteriorTransform, this.exteriorStart(), this.exteriorEnd());
        };

        this.front = front || false;
        this.offset = wall.thickness / 2.0;
        this.height = wall.height;

        if (this.front) {
          this.wall.frontEdge = this;
        } else {
          this.wall.backEdge = this;
        }
      }

      HalfEdge.prototype.drawOutline = function () {
        this.box = new three__WEBPACK_IMPORTED_MODULE_0__["BoxHelper"](this.plane, 0xffff00);
        this.edgeSelectedCallbacks.fire(this.box);
      };

      HalfEdge.prototype.removeOutline = function () {
        this.edgeUnSelectedCallbacks.fire(this.box);
      };
      /**
       *
       */


      HalfEdge.prototype.getTexture = function () {
        if (this.front) {
          return this.wall.frontTexture;
        } else {
          return this.wall.backTexture;
        }
      };
      /**
       *
       */


      HalfEdge.prototype.setTexture = function (textureUrl, textureStretch, textureScale) {
        var texture = {
          url: textureUrl,
          stretch: textureStretch,
          scale: textureScale
        };

        if (this.front) {
          this.wall.frontTexture = texture;
        } else {
          this.wall.backTexture = texture;
        }

        this.redrawCallbacks.fire();
      };

      HalfEdge.prototype.interiorDistance = function () {
        var start = this.interiorStart();
        var end = this.interiorEnd();
        return BP3D.Core.Utils.distance(start.x, start.y, end.x, end.y);
      };

      HalfEdge.prototype.computeTransforms = function (transform, invTransform, start, end) {
        var v1 = start;
        var v2 = end;
        var angle = BP3D.Core.Utils.angle(1, 0, v2.x - v1.x, v2.y - v1.y);
        var tt = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
        tt.makeTranslation(-v1.x, 0, -v1.y);
        var tr = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
        tr.makeRotationY(-angle);
        transform.multiplyMatrices(tr, tt);
        invTransform.getInverse(transform);
      };
      /** Gets the distance from specified point.
       * @param x X coordinate of the point.
       * @param y Y coordinate of the point.
       * @returns The distance.
       */


      HalfEdge.prototype.distanceTo = function (x, y) {
        // x, y, x1, y1, x2, y2
        return BP3D.Core.Utils.pointDistanceFromLine(x, y, this.interiorStart().x, this.interiorStart().y, this.interiorEnd().x, this.interiorEnd().y);
      };

      HalfEdge.prototype.getStart = function () {
        if (this.front) {
          return this.wall.getStart();
        } else {
          return this.wall.getEnd();
        }
      };

      HalfEdge.prototype.getEnd = function () {
        if (this.front) {
          return this.wall.getEnd();
        } else {
          return this.wall.getStart();
        }
      };

      HalfEdge.prototype.getOppositeEdge = function () {
        if (this.front) {
          return this.wall.backEdge;
        } else {
          return this.wall.frontEdge;
        }
      }; // these return an object with attributes x, y


      HalfEdge.prototype.interiorEnd = function () {
        var vec = this.halfAngleVector(this, this.next);
        return {
          x: this.getEnd().x + vec.x,
          y: this.getEnd().y + vec.y
        };
      };

      HalfEdge.prototype.interiorStart = function () {
        var vec = this.halfAngleVector(this.prev, this);
        return {
          x: this.getStart().x + vec.x,
          y: this.getStart().y + vec.y
        };
      };

      HalfEdge.prototype.interiorCenter = function () {
        return {
          x: (this.interiorStart().x + this.interiorEnd().x) / 2.0,
          y: (this.interiorStart().y + this.interiorEnd().y) / 2.0
        };
      };

      HalfEdge.prototype.exteriorEnd = function () {
        var vec = this.halfAngleVector(this, this.next);
        return {
          x: this.getEnd().x - vec.x,
          y: this.getEnd().y - vec.y
        };
      };

      HalfEdge.prototype.exteriorStart = function () {
        var vec = this.halfAngleVector(this.prev, this);
        return {
          x: this.getStart().x - vec.x,
          y: this.getStart().y - vec.y
        };
      };
      /** Get the corners of the half edge.
       * @returns An array of x,y pairs.
       */


      HalfEdge.prototype.corners = function () {
        return [this.interiorStart(), this.interiorEnd(), this.exteriorEnd(), this.exteriorStart()];
      };
      /**
       * Gets CCW angle from v1 to v2
       */


      HalfEdge.prototype.halfAngleVector = function (v1, v2) {
        // make the best of things if we dont have prev or next
        var v1startX;
        var v1startY;
        var v1endX;
        var v1endY;
        var v2startX;
        var v2startY;
        var v2endX;
        var v2endY;

        if (!v1) {
          v1startX = v2.getStart().x - (v2.getEnd().x - v2.getStart().x);
          v1startY = v2.getStart().y - (v2.getEnd().y - v2.getStart().y);
          v1endX = v2.getStart().x;
          v1endY = v2.getStart().y;
        } else {
          v1startX = v1.getStart().x;
          v1startY = v1.getStart().y;
          v1endX = v1.getEnd().x;
          v1endY = v1.getEnd().y;
        }

        if (!v2) {
          v2startX = v1.getEnd().x;
          v2startY = v1.getEnd().y;
          v2endX = v1.getEnd().x + (v1.getEnd().x - v1.getStart().x);
          v2endY = v1.getEnd().y + (v1.getEnd().y - v1.getStart().y);
        } else {
          v2startX = v2.getStart().x;
          v2startY = v2.getStart().y;
          v2endX = v2.getEnd().x;
          v2endY = v2.getEnd().y;
        } // CCW angle between edges


        var theta = BP3D.Core.Utils.angle2pi(v1startX - v1endX, v1startY - v1endY, v2endX - v1endX, v2endY - v1endY); // cosine and sine of half angle

        var cs = Math.cos(theta / 2.0);
        var sn = Math.sin(theta / 2.0); // rotate v2

        var v2dx = v2endX - v2startX;
        var v2dy = v2endY - v2startY;
        var vx = v2dx * cs - v2dy * sn;
        var vy = v2dx * sn + v2dy * cs; // normalize

        var mag = BP3D.Core.Utils.distance(0, 0, vx, vy);
        var desiredMag = this.offset / sn;
        var scalar = desiredMag / mag;
        var halfAngleVector = {
          x: vx * scalar,
          y: vy * scalar
        };
        return halfAngleVector;
      };

      return HalfEdge;
    }();

    Model.HalfEdge = HalfEdge;
  })(Model = BP3D.Model || (BP3D.Model = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Model;

  (function (Model) {
    /** The default wall texture. */
    var defaultWallTexture = {
      url: _Constants_js__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_3__["ASSETS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_WALL_MAP"],
      stretch: true,
      scale: 0
    };
    /**
     * A Wall is the basic element to create Rooms.
     *
     * Walls consists of two half edges.
     */

    var Wall = function () {
      /**
       * Constructs a new wall.
       * @param start Start corner.
       * @param end End corner.
       */
      function Wall(start, end) {
        this.start = start;
        this.end = end;
        /** Front is the plane from start to end. */

        this.frontEdge = null;
        /** Back is the plane from end to start. */

        this.backEdge = null;
        /** */

        this.orphan = false;
        /** Items attached to this wall */

        this.items = [];
        /** */

        this.onItems = [];
        /** The front-side texture. */

        this.frontTexture = defaultWallTexture;
        /** The back-side texture. */

        this.backTexture = defaultWallTexture;
        /** Wall thickness. */

        this.thickness = BP3D.Core.Configuration.getNumericValue(BP3D.Core.configWallThickness);
        /** Wall height. */

        this.height = BP3D.Core.Configuration.getNumericValue(BP3D.Core.configWallHeight);
        /** Actions to be applied after movement. */

        this.moved_callbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /** Actions to be applied on removal. */

        this.deleted_callbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /** Actions to be applied explicitly. */

        this.action_callbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        this.id = this.getUuid();
        this.start.attachStart(this);
        this.end.attachEnd(this);
      }

      Wall.prototype.getUuid = function () {
        return [this.start.id, this.end.id].join();
      };

      Wall.prototype.resetFrontBack = function () {
        this.frontEdge = null;
        this.backEdge = null;
        this.orphan = false;
      };

      Wall.prototype.snapToAxis = function (tolerance) {
        // order here is important, but unfortunately arbitrary
        this.start.snapToAxis(tolerance);
        this.end.snapToAxis(tolerance);
      };

      Wall.prototype.fireOnMove = function (func) {
        this.moved_callbacks.add(func);
      };

      Wall.prototype.fireOnDelete = function (func) {
        this.deleted_callbacks.add(func);
      };

      Wall.prototype.dontFireOnDelete = function (func) {
        this.deleted_callbacks.remove(func);
      };

      Wall.prototype.fireOnAction = function (func) {
        this.action_callbacks.add(func);
      };

      Wall.prototype.fireAction = function (action) {
        this.action_callbacks.fire(action);
      };

      Wall.prototype.relativeMove = function (dx, dy) {
        this.start.relativeMove(dx, dy);
        this.end.relativeMove(dx, dy);
      };

      Wall.prototype.fireMoved = function () {
        this.moved_callbacks.fire();
      };

      Wall.prototype.fireRedraw = function () {
        if (this.frontEdge) {
          this.frontEdge.redrawCallbacks.fire();
        }

        if (this.backEdge) {
          this.backEdge.redrawCallbacks.fire();
        }
      };

      Wall.prototype.getStart = function () {
        return this.start;
      };

      Wall.prototype.getEnd = function () {
        return this.end;
      };

      Wall.prototype.getStartX = function () {
        return this.start.getX();
      };

      Wall.prototype.getEndX = function () {
        return this.end.getX();
      };

      Wall.prototype.getStartY = function () {
        return this.start.getY();
      };

      Wall.prototype.getEndY = function () {
        return this.end.getY();
      };

      Wall.prototype.remove = function () {
        this.start.detachWall(this);
        this.end.detachWall(this);
        this.deleted_callbacks.fire(this);
      };

      Wall.prototype.setStart = function (corner) {
        this.start.detachWall(this);
        corner.attachStart(this);
        this.start = corner;
        this.fireMoved();
      };

      Wall.prototype.setEnd = function (corner) {
        this.end.detachWall(this);
        corner.attachEnd(this);
        this.end = corner;
        this.fireMoved();
      };

      Wall.prototype.distanceFrom = function (x, y) {
        return BP3D.Core.Utils.pointDistanceFromLine(x, y, this.getStartX(), this.getStartY(), this.getEndX(), this.getEndY());
      };
      /** Return the corner opposite of the one provided.
       * @param corner The given corner.
       * @returns The opposite corner.
       */


      Wall.prototype.oppositeCorner = function (corner) {
        if (this.start === corner) {
          return this.end;
        } else if (this.end === corner) {
          return this.start;
        } else {
          console.log('Wall does not connect to corner');
        }
      };

      return Wall;
    }();

    Model.Wall = Wall;
  })(Model = BP3D.Model || (BP3D.Model = {}));
})(BP3D || (BP3D = {}));
/*
TODO
var Vec2 = require('vec2')
var segseg = require('segseg')
var Polygon = require('polygon')
*/


(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Model;

  (function (Model) {
    /** Default texture to be used if nothing is provided. */
    var defaultRoomTexture = {
      url: _Constants_js__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _Constants_js__WEBPACK_IMPORTED_MODULE_3__["ASSETS"] + _Constants_js__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_FLOOR_MAP"],
      scale: 400
    };
    /**
     * A Room is the combination of a Floorplan with a floor plane.
     */

    var Room = function () {
      /**
       *  ordered CCW
       */
      function Room(floorplan, corners) {
        this.floorplan = floorplan;
        this.corners = corners;
        /** */

        this.interiorCorners = [];
        /** */

        this.edgePointer = null;
        /** floor plane for intersection testing */

        this.floorPlane = null;
        this.box = null;
        /** */

        this.customTexture = false;
        /** */

        this.floorChangeCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        this.roomSelectedCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        this.roomUnSelectedCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        this.updateWalls();
        this.updateInteriorCorners();
        this.generatePlane();
      }

      Room.prototype.drawOutline = function () {
        this.box = new three__WEBPACK_IMPORTED_MODULE_0__["BoxHelper"](this.floorPlane, 0xffff00);
        this.roomSelectedCallbacks.fire(this.box);
      };

      Room.prototype.removeOutline = function () {
        this.roomUnSelectedCallbacks.fire(this.box);
      };

      Room.prototype.getUuid = function () {
        var cornerUuids = BP3D.Core.Utils.map(this.corners, function (c) {
          return c.id;
        });
        cornerUuids.sort();
        return cornerUuids.join();
      };

      Room.prototype.fireOnFloorChange = function (callback) {
        this.floorChangeCallbacks.add(callback);
      };

      Room.prototype.getTexture = function () {
        var uuid = this.getUuid();
        var tex = this.floorplan.getFloorTexture(uuid);
        return tex || defaultRoomTexture;
      };
      /**
       * textureStretch always true, just an argument for consistency with walls
       */


      Room.prototype.setTexture = function (textureUrl, textureStretch, textureScale) {
        var uuid = this.getUuid();
        this.floorplan.setFloorTexture(uuid, textureUrl, textureScale);
        this.floorChangeCallbacks.fire();
      };

      Room.prototype.generatePlane = function () {
        var points = [];
        this.interiorCorners.forEach(function (corner) {
          points.push(new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](corner.x, corner.y));
        });
        var shape = new three__WEBPACK_IMPORTED_MODULE_0__["Shape"](points);
        var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["ShapeGeometry"](shape);
        this.floorPlane = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
          side: three__WEBPACK_IMPORTED_MODULE_0__["DoubleSide"]
        }));
        this.floorPlane.visible = false;
        this.floorPlane.rotation.set(Math.PI / 2, 0, 0);
        this.floorPlane.room = this; // js monkey patch
      };

      Room.prototype.cycleIndex = function (index) {
        if (index < 0) {
          return index += this.corners.length;
        } else {
          return index % this.corners.length;
        }
      };

      Room.prototype.updateInteriorCorners = function () {
        var edge = this.edgePointer;

        while (true) {
          this.interiorCorners.push(edge.interiorStart());
          edge.generatePlane();

          if (edge.next === this.edgePointer) {
            break;
          } else {
            edge = edge.next;
          }
        }
      };
      /**
       * Populates each wall's half edge relating to this room
       * this creates a fancy doubly connected edge list (DCEL)
       */


      Room.prototype.updateWalls = function () {
        var prevEdge = null;
        var firstEdge = null;

        for (var i = 0; i < this.corners.length; i++) {
          var firstCorner = this.corners[i];
          var secondCorner = this.corners[(i + 1) % this.corners.length]; // find if wall is heading in that direction

          var wallTo = firstCorner.wallTo(secondCorner);
          var wallFrom = firstCorner.wallFrom(secondCorner);
          var edge;

          if (wallTo) {
            edge = new Model.HalfEdge(this, wallTo, true);
          } else if (wallFrom) {
            edge = new Model.HalfEdge(this, wallFrom, false);
          } else {
            // something horrible has happened
            console.log("corners arent connected by a wall, uh oh");
          }

          if (i === 0) {
            firstEdge = edge;
          } else {
            edge.prev = prevEdge;
            prevEdge.next = edge;

            if (i + 1 === this.corners.length) {
              firstEdge.prev = edge;
              edge.next = firstEdge;
            }
          }

          prevEdge = edge;
        } // hold on to an edge reference


        this.edgePointer = firstEdge;
      };

      return Room;
    }();

    Model.Room = Room;
  })(Model = BP3D.Model || (BP3D.Model = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Model;

  (function (Model) {
    /** */
    var defaultFloorPlanTolerance = 10.0;
    /**
     * A Floorplan represents a number of Walls, Corners and Rooms.
     */

    var Floorplan = function () {
      /** Constructs a floorplan. */
      function Floorplan() {
        /** */
        this.walls = [];
        /** */

        this.corners = [];
        /** */

        this.rooms = [];
        /** */

        this.new_wall_callbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /** */

        this.new_corner_callbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /** */

        this.redraw_callbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /** */

        this.updated_rooms = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /** */

        this.roomLoadedCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /**
         * Floor textures are owned by the floorplan, because room objects are
         * destroyed and created each time we change the floorplan.
         * floorTextures is a map of room UUIDs (string) to a object with
         * url and scale attributes.
         */

        this.floorTextures = {};
      } // hack


      Floorplan.prototype.wallEdges = function () {
        var edges = [];
        this.walls.forEach(function (wall) {
          if (wall.frontEdge) {
            edges.push(wall.frontEdge);
          }

          if (wall.backEdge) {
            edges.push(wall.backEdge);
          }
        });
        return edges;
      }; // hack


      Floorplan.prototype.wallEdgePlanes = function () {
        var planes = [];
        this.walls.forEach(function (wall) {
          if (wall.frontEdge) {
            planes.push(wall.frontEdge.plane);
          }

          if (wall.backEdge) {
            planes.push(wall.backEdge.plane);
          }
        });
        return planes;
      };

      Floorplan.prototype.floorPlanes = function () {
        return BP3D.Core.Utils.map(this.rooms, function (room) {
          return room.floorPlane;
        });
      };

      Floorplan.prototype.fireOnNewWall = function (callback) {
        this.new_wall_callbacks.add(callback);
      };

      Floorplan.prototype.fireOnNewCorner = function (callback) {
        this.new_corner_callbacks.add(callback);
      };

      Floorplan.prototype.fireOnRedraw = function (callback) {
        this.redraw_callbacks.add(callback);
      };

      Floorplan.prototype.fireOnUpdatedRooms = function (callback) {
        this.updated_rooms.add(callback);
      };
      /**
       * Creates a new wall.
       * @param start The start corner.
       * @param end he end corner.
       * @returns The new wall.
       */


      Floorplan.prototype.newWall = function (start, end) {
        var wall = new Model.Wall(start, end);
        this.walls.push(wall);
        var scope = this;
        wall.fireOnDelete(function () {
          scope.removeWall(wall);
        });
        this.new_wall_callbacks.fire(wall);
        this.update();
        return wall;
      };
      /** Removes a wall.
       * @param wall The wall to be removed.
       */


      Floorplan.prototype.removeWall = function (wall) {
        BP3D.Core.Utils.removeValue(this.walls, wall);
        this.update();
      };
      /**
       * Creates a new corner.
       * @param x The x coordinate.
       * @param y The y coordinate.
       * @param id An optional id. If unspecified, the id will be created internally.
       * @returns The new corner.
       */


      Floorplan.prototype.newCorner = function (x, y, id) {
        var _this = this;

        var corner = new Model.Corner(this, x, y, id);
        this.corners.push(corner);
        corner.fireOnDelete(function () {
          // eslint-disable-next-line no-unused-expressions
          _this.removeCorner;
        });
        this.new_corner_callbacks.fire(corner);
        return corner;
      };
      /** Removes a corner.
       * @param corner The corner to be removed.
       */


      Floorplan.prototype.removeCorner = function (corner) {
        BP3D.Core.Utils.removeValue(this.corners, corner);
      };
      /** Gets the walls. */


      Floorplan.prototype.getWalls = function () {
        return this.walls;
      };
      /** Gets the corners. */


      Floorplan.prototype.getCorners = function () {
        return this.corners;
      };
      /** Gets the rooms. */


      Floorplan.prototype.getRooms = function () {
        return this.rooms;
      };

      Floorplan.prototype.overlappedCorner = function (x, y, tolerance) {
        tolerance = tolerance || defaultFloorPlanTolerance;

        for (var i = 0; i < this.corners.length; i++) {
          if (this.corners[i].distanceFrom(x, y) < tolerance) {
            return this.corners[i];
          }
        }

        return null;
      };

      Floorplan.prototype.overlappedWall = function (x, y, tolerance) {
        tolerance = tolerance || defaultFloorPlanTolerance;

        for (var i = 0; i < this.walls.length; i++) {
          if (this.walls[i].distanceFrom(x, y) < tolerance) {
            return this.walls[i];
          }
        }

        return null;
      }; // import and export -- cleanup


      Floorplan.prototype.saveFloorplan = function () {
        var floorplan = {
          corners: {},
          walls: [],
          wallTextures: [],
          floorTextures: {},
          newFloorTextures: {}
        };
        this.corners.forEach(function (corner) {
          floorplan.corners[corner.id] = {
            'x': corner.x,
            'y': corner.y
          };
        });
        this.walls.forEach(function (wall) {
          floorplan.walls.push({
            'corner1': wall.getStart().id,
            'corner2': wall.getEnd().id,
            'frontTexture': wall.frontTexture,
            'backTexture': wall.backTexture
          });
        });
        floorplan.newFloorTextures = this.floorTextures;
        return floorplan;
      };

      Floorplan.prototype.loadFloorplan = function (floorplan) {
        this.reset();
        var corners = {};

        if (floorplan == null || !('corners' in floorplan) || !('walls' in floorplan)) {
          return;
        }

        for (var id in floorplan.corners) {
          var corner = floorplan.corners[id];
          corners[id] = this.newCorner(corner.x, corner.y, id);
        }

        var scope = this;
        floorplan.walls.forEach(function (wall) {
          var newWall = scope.newWall(corners[wall.corner1], corners[wall.corner2]);

          if (wall.frontTexture) {
            newWall.frontTexture = wall.frontTexture;
          }

          if (wall.backTexture) {
            newWall.backTexture = wall.backTexture;
          }
        });

        if ('newFloorTextures' in floorplan) {
          this.floorTextures = floorplan.newFloorTextures;
        }

        this.update();
        this.roomLoadedCallbacks.fire();
      };

      Floorplan.prototype.getFloorTexture = function (uuid) {
        if (uuid in this.floorTextures) {
          return this.floorTextures[uuid];
        } else {
          return null;
        }
      };

      Floorplan.prototype.setFloorTexture = function (uuid, url, scale) {
        this.floorTextures[uuid] = {
          url: url,
          scale: scale
        };
      };
      /** clear out obsolete floor textures */


      Floorplan.prototype.updateFloorTextures = function () {
        var uuids = BP3D.Core.Utils.map(this.rooms, function (room) {
          return room.getUuid();
        });

        for (var uuid in this.floorTextures) {
          if (!BP3D.Core.Utils.hasValue(uuids, uuid)) {
            delete this.floorTextures[uuid];
          }
        }
      };
      /** */


      Floorplan.prototype.reset = function () {
        var tmpCorners = this.corners.slice(0);
        var tmpWalls = this.walls.slice(0);
        tmpCorners.forEach(function (corner) {
          corner.remove();
        });
        tmpWalls.forEach(function (wall) {
          wall.remove();
        });
        this.corners = [];
        this.walls = [];
      };
      /**
       * Update rooms
       */


      Floorplan.prototype.update = function () {
        this.walls.forEach(function (wall) {
          wall.resetFrontBack();
        });
        var roomCorners = this.findRooms(this.corners);
        this.rooms = [];
        var scope = this;
        roomCorners.forEach(function (corners) {
          scope.rooms.push(new Model.Room(scope, corners));
        });
        this.assignOrphanEdges();
        this.updateFloorTextures();
        this.updated_rooms.fire();
      };
      /**
       * Returns the center of the floorplan in the y plane
       */


      Floorplan.prototype.getCenter = function () {
        return this.getDimensions(true);
      };

      Floorplan.prototype.getSize = function () {
        return this.getDimensions(false);
      };

      Floorplan.prototype.getDimensions = function (center) {
        center = center || false; // otherwise, get size

        var xMin = Infinity;
        var xMax = -Infinity;
        var zMin = Infinity;
        var zMax = -Infinity;
        this.corners.forEach(function (corner) {
          if (corner.x < xMin) xMin = corner.x;
          if (corner.x > xMax) xMax = corner.x;
          if (corner.y < zMin) zMin = corner.y;
          if (corner.y > zMax) zMax = corner.y;
        });
        var ret;

        if (xMin === Infinity || xMax === -Infinity || zMin === Infinity || zMax === -Infinity) {
          ret = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        } else {
          if (center) {
            // center
            ret = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]((xMin + xMax) * 0.5, 0, (zMin + zMax) * 0.5);
          } else {
            // size
            ret = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](xMax - xMin, 0, zMax - zMin);
          }
        }

        return ret;
      };

      Floorplan.prototype.assignOrphanEdges = function () {
        // kinda hacky
        // find orphaned wall segments (i.e. not part of rooms) and
        // give them edges
        var orphanWalls = [];
        this.walls.forEach(function (wall) {
          if (!wall.backEdge && !wall.frontEdge) {
            wall.orphan = true;
            var back = new Model.HalfEdge(null, wall, false);
            back.generatePlane();
            var front = new Model.HalfEdge(null, wall, true);
            front.generatePlane();
            orphanWalls.push(wall);
          }
        });
      };
      /*
       * Find the "rooms" in our planar straight-line graph.
       * Rooms are set of the smallest (by area) possible cycles in this graph.
       * @param corners The corners of the floorplan.
       * @returns The rooms, each room as an array of corners.
       */


      Floorplan.prototype.findRooms = function (corners) {
        function _calculateTheta(previousCorner, currentCorner, nextCorner) {
          var theta = BP3D.Core.Utils.angle2pi(previousCorner.x - currentCorner.x, previousCorner.y - currentCorner.y, nextCorner.x - currentCorner.x, nextCorner.y - currentCorner.y);
          return theta;
        }

        function _removeDuplicateRooms(roomArray) {
          var results = [];
          var lookup = {};

          var hashFunc = function (corner) {
            return corner.id;
          };

          var sep = '-';

          for (var i = 0; i < roomArray.length; i++) {
            // rooms are cycles, shift it around to check uniqueness
            var add = true;
            var room = roomArray[i];

            for (var j = 0; j < room.length; j++) {
              var roomShift = BP3D.Core.Utils.cycle(room, j);
              var str = BP3D.Core.Utils.map(roomShift, hashFunc).join(sep);

              if (lookup.hasOwnProperty(str)) {
                add = false;
              }
            }

            if (add) {
              results.push(roomArray[i]);
              lookup[str] = true;
            }
          }

          return results;
        }

        function _findTightestCycle(firstCorner, secondCorner) {
          var stack = [];
          var next = {
            corner: secondCorner,
            previousCorners: [firstCorner]
          };
          var visited = {};
          visited[firstCorner.id] = true;

          var compFunc = function (a, b) {
            return _calculateTheta(previousCorner, currentCorner, b) - _calculateTheta(previousCorner, currentCorner, a);
          };

          var pushFunc = function (corner) {
            stack.push({
              corner: corner,
              previousCorners: previousCorners
            });
          };

          while (next) {
            // update previous corners, current corner, and visited corners
            var currentCorner = next.corner;
            visited[currentCorner.id] = true; // did we make it back to the startCorner?

            if (next.corner === firstCorner && currentCorner !== secondCorner) {
              return next.previousCorners;
            }

            var addToStack = [];
            var adjacentCorners = next.corner.adjacentCorners();

            for (let i = 0; i < adjacentCorners.length; i++) {
              var nextCorner = adjacentCorners[i]; // is this where we came from?
              // give an exception if its the first corner and we aren't at the second corner

              if (nextCorner.id in visited && !(nextCorner === firstCorner && currentCorner !== secondCorner)) {
                continue;
              } // nope, throw it on the queue  


              addToStack.push(nextCorner);
            }

            var previousCorners = next.previousCorners.slice(0);
            previousCorners.push(currentCorner);

            if (addToStack.length > 1) {
              // visit the ones with smallest theta first
              var previousCorner = next.previousCorners[next.previousCorners.length - 1];
              addToStack.sort(compFunc);
            }

            if (addToStack.length > 0) {
              // add to the stack
              addToStack.forEach(pushFunc);
            } // pop off the next one


            next = stack.pop();
          }

          return [];
        } // find tightest loops, for each corner, for each adjacent
        // TODO: optimize this, only check corners with > 2 adjacents, or isolated cycles


        var loops = [];
        corners.forEach(function (firstCorner) {
          firstCorner.adjacentCorners().forEach(function (secondCorner) {
            loops.push(_findTightestCycle(firstCorner, secondCorner));
          });
        }); // remove duplicates

        var uniqueLoops = _removeDuplicateRooms(loops); //remove CW loops


        var uniqueCCWLoops = BP3D.Core.Utils.removeIf(uniqueLoops, BP3D.Core.Utils.isClockwise);
        return uniqueCCWLoops;
      };

      return Floorplan;
    }();

    Model.Floorplan = Floorplan;
  })(Model = BP3D.Model || (BP3D.Model = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Items;

  (function (Items) {
    /**
     * A Floor Item is an entity to be placed related to a floor.
     */
    var FloorItem = function (_super) {
      __extends(FloorItem, _super);

      function FloorItem(model, metadata, geometry, material, position, rotation, scale) {
        _super.call(this, model, metadata, geometry, material, position, rotation, scale);
      }

      ;
      /** */

      FloorItem.prototype.placeInRoom = function () {
        if (!this.position_set) {
          var center = this.model.floorplan.getCenter();
          this.position.x = center.x;
          this.position.z = center.z;
          this.position.y = 0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y);
        }
      };

      FloorItem.prototype.setYPos = function (yPos) {};
      /** Take action after a resize */


      FloorItem.prototype.resized = function () {
        this.position.y = this.halfSize.y;
      };
      /** */


      FloorItem.prototype.moveToPosition = function (vec3, intersection) {
        // keeps the position in the room and on the floor
        if (!this.isValidPosition(vec3)) {
          this.showError(vec3);
          return;
        } else {
          this.hideError();
          vec3.y = this.position.y; // keep it on the floor!

          this.position.copy(vec3);
        }
      };
      /** */


      FloorItem.prototype.isValidPosition = function (vec3) {
        var corners = this.getCorners('x', 'z', vec3); // check if we are in a room

        var rooms = this.model.floorplan.getRooms();
        var isInARoom = false;

        for (let i = 0; i < rooms.length; i++) {
          if (BP3D.Core.Utils.pointInPolygon(vec3.x, vec3.z, rooms[i].interiorCorners) && !BP3D.Core.Utils.polygonPolygonIntersect(corners, rooms[i].interiorCorners)) {
            isInARoom = true;
          }
        }

        if (!isInARoom) {
          //console.log('object not in a room');
          return false;
        } // check if we are outside all other objects


        if (this.obstructFloorMoves) {
          let objects = this.model.scene.getItems();

          for (let i = 0; i < objects.length; i++) {
            if (objects[i] === this || !objects[i].obstructFloorMoves) {
              continue;
            }

            if (!BP3D.Core.Utils.polygonOutsidePolygon(corners, objects[i].getCorners('x', 'z')) || BP3D.Core.Utils.polygonPolygonIntersect(corners, objects[i].getCorners('x', 'z'))) {
              //console.log('object not outside other objects');
              return false;
            }
          }
        } // check if we are outside all other on floor objects


        if (this.obstructOnFloorMoves) {
          let objects = this.model.scene.getItems();

          for (let i = 0; i < objects.length; i++) {
            if (objects[i] === this || !objects[i].obstructOnFloorMoves) {
              continue;
            }

            if (!BP3D.Core.Utils.polygonOutsidePolygon(corners, objects[i].getCorners('x', 'z')) || BP3D.Core.Utils.polygonPolygonIntersect(corners, objects[i].getCorners('x', 'z'))) {
              //console.log('object not outside other objects');
              return false;
            }
          }
        }

        return true;
      };

      return FloorItem;
    }(Items.Item);

    Items.FloorItem = FloorItem;
  })(Items = BP3D.Items || (BP3D.Items = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Items;

  (function (Items) {
    /**
     * AnyWhere Item
     */
    var AnywhereItem = function (_super) {
      __extends(AnywhereItem, _super);

      function AnywhereItem(model, metadata, geometry, material, position, rotation, scale) {
        _super.call(this, model, metadata, geometry, material, position, rotation, scale);
      }

      ;
      /** */

      AnywhereItem.prototype.placeInRoom = function (pos) {
        if (!this.position_set) {
          var center = this.model.floorplan.getCenter();
          this.position.x = center.x;
          this.position.z = center.z;

          if (pos !== null && pos !== undefined) {
            this.position.y = pos.y;
          } else {
            this.position.y = 0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y);
          }
        }
      };

      AnywhereItem.prototype.setYPos = function (yPos) {
        this.position.y = yPos;
      };
      /** */


      AnywhereItem.prototype.isElevationAdjustable = function () {
        return true;
      };

      AnywhereItem.prototype.moveToPosition = function (vec3, intersection) {
        // keeps the position in the room
        if (!this.isValidPosition(vec3)) {
          this.showError(vec3);
          return;
        } else {
          let yPos = this.getYPos(vec3);
          vec3.y = yPos;
          jquery__WEBPACK_IMPORTED_MODULE_2___default()("#item-elevation").val(this.cmToIn(this.getElevation()).toFixed(0));
          this.hideError();
          this.position.copy(vec3);
        }
      };

      AnywhereItem.prototype.cmToIn = function (cm) {
        return cm / 2.54;
      };
      /** */


      AnywhereItem.prototype.isValidPosition = function (vec3) {
        var corners = this.getCorners('x', 'z', vec3); // check if we are in a room

        var rooms = this.model.floorplan.getRooms();
        var isInARoom = false;

        for (let i = 0; i < rooms.length; i++) {
          if (BP3D.Core.Utils.pointInPolygon(vec3.x, vec3.z, rooms[i].interiorCorners) && !BP3D.Core.Utils.polygonPolygonIntersect(corners, rooms[i].interiorCorners)) {
            isInARoom = true;
          }
        }

        if (!isInARoom) {
          //console.log('object not in a room');
          return false;
        }

        return true;
      };

      AnywhereItem.prototype.getYPos = function (vec3) {
        var corners = this.getCorners('x', 'z', vec3); // check if we are outside all other objects

        let objects = this.model.scene.getItems();

        for (let i = 0; i < objects.length; i++) {
          if (objects[i] === this || objects[i].obstructCeilingMoves || objects[i].obstructOnFloorMoves) {
            continue;
          }

          if (BP3D.Core.Utils.polygonPolygonIntersect(corners, objects[i].getCorners('x', 'z'))) {
            // console.log('object not outside other objects');
            return objects[i].position.y + objects[i].halfSize.y + this.halfSize.y;
          }

          if (!BP3D.Core.Utils.polygonOutsidePolygon(corners, objects[i].getCorners('x', 'z'))) {
            return this.position.y;
          }
        }

        return 0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y);
      };

      return AnywhereItem;
    }(Items.FloorItem);

    Items.AnywhereItem = AnywhereItem;
  })(Items = BP3D.Items || (BP3D.Items = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Items;

  (function (Items) {
    /**
     * AnyWhere Item
     */
    var CeilingItem = function (_super) {
      __extends(CeilingItem, _super);

      function CeilingItem(model, metadata, geometry, material, position, rotation, scale) {
        _super.call(this, model, metadata, geometry, material, position, rotation, scale);

        this.obstructCeilingMoves = true;
        this.obstructFloorMoves = false;
        this.castShadow = false;
        this.receiveShadow = false;
      }

      ;
      /** */

      CeilingItem.prototype.placeInRoom = function () {
        if (!this.position_set) {
          var center = this.model.floorplan.getCenter();
          this.position.x = center.x;
          this.position.z = center.z;
          this.position.y = BP3D.Core.Configuration.getNumericValue(BP3D.Core.configWallHeight) - 0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y);
        }
      };

      CeilingItem.prototype.setYPos = function (yPos) {};

      CeilingItem.prototype.resized = function () {
        this.position.y = BP3D.Core.Configuration.getNumericValue(BP3D.Core.configWallHeight) - this.halfSize.y;
      };

      CeilingItem.prototype.moveToPosition = function (vec3, intersection) {
        // keeps the position in the room
        if (!this.isValidPosition(vec3)) {
          this.showError(vec3);
          return;
        } else {
          this.hideError(); // if (vec3.y < 0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y)) {
          //     vec3.y = this.position.y;
          // } else {

          vec3.y = this.position.y; // }

          this.position.copy(vec3);
        }
      };
      /** */


      CeilingItem.prototype.isValidPosition = function (vec3) {
        var corners = this.getCorners('x', 'z', vec3); // check if we are in a room

        var rooms = this.model.floorplan.getRooms();
        var isInARoom = false;

        for (let i = 0; i < rooms.length; i++) {
          if (BP3D.Core.Utils.pointInPolygon(vec3.x, vec3.z, rooms[i].interiorCorners) && !BP3D.Core.Utils.polygonPolygonIntersect(corners, rooms[i].interiorCorners)) {
            isInARoom = true;
          }
        }

        if (!isInARoom) {
          //console.log('object not in a room');
          return false;
        } // check if we are outside all other on floor objects


        if (this.obstructCeilingMoves) {
          let objects = this.model.scene.getItems();

          for (let i = 0; i < objects.length; i++) {
            if (objects[i] === this || !objects[i].obstructCeilingMoves) {
              continue;
            }

            if (!BP3D.Core.Utils.polygonOutsidePolygon(corners, objects[i].getCorners('x', 'z')) || BP3D.Core.Utils.polygonPolygonIntersect(corners, objects[i].getCorners('x', 'z'))) {
              //console.log('object not outside other objects');
              return false;
            }
          }
        }

        return true;
      };

      return CeilingItem;
    }(Items.FloorItem);

    Items.CeilingItem = CeilingItem;
  })(Items = BP3D.Items || (BP3D.Items = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Items;

  (function (Items) {
    /**
     * A Wall Item is an entity to be placed related to a wall.
     */
    var WallItem = function (_super) {
      __extends(WallItem, _super);

      function WallItem(model, metadata, geometry, material, position, rotation, scale) {
        _super.call(this, model, metadata, geometry, material, position, rotation, scale);
        /** The currently applied wall edge. */


        this.currentWallEdge = null;
        /* TODO:
           This caused a huge headache.
           HalfEdges get destroyed/created every time floorplan is edited.
           This item should store a reference to a wall and front/back,
           and grab its edge reference dynamically whenever it needs it.
         */

        /** used for finding rotations */

        this.refVec = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](0, 1.0);
        /** */

        this.wallOffsetScalar = 0;
        /** */

        this.sizeX = 0;
        /** */

        this.sizeY = 0;
        /** */

        this.addToWall = false;
        /** */

        this.boundToFloor = false;
        this.obstructInWallMoves = false;
        /** */

        this.frontVisible = false;
        /** */

        this.backVisible = false;
        this.allowRotate = false;
      }

      ;
      /** Get the closet wall edge.
       * @returns The wall edge.
       */

      WallItem.prototype.closestWallEdge = function () {
        var wallEdges = this.model.floorplan.wallEdges();
        var wallEdge = null;
        var minDistance = null;
        var itemX = this.position.x;
        var itemZ = this.position.z;
        wallEdges.forEach(function (edge) {
          var distance = edge.distanceTo(itemX, itemZ);

          if (minDistance === null || distance < minDistance) {
            minDistance = distance;
            wallEdge = edge;
          }
        });
        return wallEdge;
      };
      /** */


      WallItem.prototype.removed = function () {
        if (this.currentWallEdge != null && this.addToWall) {
          BP3D.Core.Utils.removeValue(this.currentWallEdge.wall.items, this);
          this.redrawWall();
        }
      };
      /** */


      WallItem.prototype.redrawWall = function () {
        if (this.addToWall) {
          this.currentWallEdge.wall.fireRedraw();
        }
      };
      /** */


      WallItem.prototype.updateEdgeVisibility = function (visible, front) {
        if (front) {
          this.frontVisible = visible;
        } else {
          this.backVisible = visible;
        }

        this.visible = this.frontVisible || this.backVisible;
      };
      /** */


      WallItem.prototype.updateSize = function () {
        this.wallOffsetScalar = (this.geometry.boundingBox.max.z - this.geometry.boundingBox.min.z) * this.scale.z / 2.0;
        this.sizeX = (this.geometry.boundingBox.max.x - this.geometry.boundingBox.min.x) * this.scale.x;
        this.sizeY = (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y) * this.scale.y;
      };
      /** */


      WallItem.prototype.resized = function () {
        if (this.boundToFloor) {
          this.position.y = 0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y) * this.scale.y + 0.01;
        }

        this.updateSize();
        this.redrawWall();
      };
      /** */


      WallItem.prototype.placeInRoom = function () {
        var closestWallEdge = this.closestWallEdge();
        this.changeWallEdge(closestWallEdge);
        this.updateSize();

        if (!this.position_set) {
          // position not set
          var center = closestWallEdge.interiorCenter();
          var newPos = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](center.x, closestWallEdge.wall.height / 2.0, center.y);
          this.boundMove(newPos);
          this.position.copy(newPos);
          this.redrawWall();
        }
      };

      WallItem.prototype.setYPos = function (yPos) {};
      /** */


      WallItem.prototype.moveToPosition = function (vec3, intersection) {
        this.changeWallEdge(intersection.object.edge);
        this.boundMove(vec3);
        this.position.copy(vec3);
        this.redrawWall();
      };
      /** */


      WallItem.prototype.getWallOffset = function () {
        return this.wallOffsetScalar;
      };
      /** */


      WallItem.prototype.changeWallEdge = function (wallEdge) {
        if (this.currentWallEdge != null) {
          if (this.addToWall) {
            BP3D.Core.Utils.removeValue(this.currentWallEdge.wall.items, this);
            this.redrawWall();
          } else {
            BP3D.Core.Utils.removeValue(this.currentWallEdge.wall.onItems, this);
          }
        } // handle subscription to wall being removed


        if (this.currentWallEdge != null) {
          this.currentWallEdge.wall.dontFireOnDelete(this.remove.bind(this));
        }

        wallEdge.wall.fireOnDelete(this.remove.bind(this)); // find angle between wall normals

        var normal2 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
        var normal3 = wallEdge.plane.geometry.faces[0].normal;
        normal2.x = normal3.x;
        normal2.y = normal3.z;
        var angle = BP3D.Core.Utils.angle(this.refVec.x, this.refVec.y, normal2.x, normal2.y);
        this.rotation.y = angle; // update currentWall

        this.currentWallEdge = wallEdge;

        if (this.addToWall) {
          wallEdge.wall.items.push(this);
          this.redrawWall();
        } else {
          wallEdge.wall.onItems.push(this);
        }
      };
      /** Returns an array of planes to use other than the ground plane
       * for passing intersection to clickPressed and clickDragged */


      WallItem.prototype.customIntersectionPlanes = function () {
        return this.model.floorplan.wallEdgePlanes();
      };
      /** takes the move vec3, and makes sure object stays bounded on plane */


      WallItem.prototype.boundMove = function (vec3) {
        var tolerance = 1;
        var edge = this.currentWallEdge;
        vec3.applyMatrix4(edge.interiorTransform);

        if (vec3.x < this.sizeX / 2.0 + tolerance) {
          vec3.x = this.sizeX / 2.0 + tolerance;
        } else if (vec3.x > edge.interiorDistance() - this.sizeX / 2.0 - tolerance) {
          vec3.x = edge.interiorDistance() - this.sizeX / 2.0 - tolerance;
        }

        if (this.boundToFloor) {
          vec3.y = 0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y) * this.scale.y + 0.01;
        } else {
          if (vec3.y < this.sizeY / 2.0 + tolerance) {
            vec3.y = this.sizeY / 2.0 + tolerance;
          } else if (vec3.y > edge.height - this.sizeY / 2.0 - tolerance) {
            vec3.y = edge.height - this.sizeY / 2.0 - tolerance;
          }
        }

        vec3.z = this.getWallOffset();
        vec3.applyMatrix4(edge.invInteriorTransform);
      }; //obstruct


      return WallItem;
    }(Items.Item);

    Items.WallItem = WallItem;
  })(Items = BP3D.Items || (BP3D.Items = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Items;

  (function (Items) {
    /** */
    var InWallItem = function (_super) {
      __extends(InWallItem, _super);

      function InWallItem(model, metadata, geometry, material, position, rotation, scale) {
        _super.call(this, model, metadata, geometry, material, position, rotation, scale);

        this.addToWall = true;
        this.obstructInWallMoves = true;
      }

      ;
      /** */

      InWallItem.prototype.moveToPosition = function (vec3, intersection) {
        if (this.isValidPosition(vec3)) {
          this.changeWallEdge(intersection.object.edge);
          this.boundMove(vec3);
          this.position.copy(vec3);
          this.redrawWall();
        } else {
          return;
        }
      };
      /** */


      InWallItem.prototype.getWallOffset = function () {
        // fudge factor so it saves to the right wall
        return -this.currentWallEdge.offset + 0.5;
      };

      InWallItem.prototype.isValidPosition = function (vec3) {
        var cornersXZ = this.getCornersXZBIG('x', 'z', vec3);
        var objects = this.model.scene.getItems();

        for (let i = 0; i < objects.length; i++) {
          if (objects[i] === this || !objects[i].obstructInWallMoves) {
            continue;
          }

          if (!BP3D.Core.Utils.polygonOutsidePolygon(cornersXZ, objects[i].getCornersXZ('x', 'z')) || !BP3D.Core.Utils.polygonOutsidePolygon(objects[i].getCornersXZ('x', 'z'), cornersXZ) || BP3D.Core.Utils.polygonPolygonIntersect(cornersXZ, objects[i].getCornersXZ('x', 'z'))) {
            // console.log('object not outside other objects  XY');
            return false;
          } // if (!BP3D.Core.Utils.polygonOutsidePolygon(cornersXZ, objects[i].getCorners('x', 'z')) ||
          //     BP3D.Core.Utils.polygonPolygonIntersect(cornersXZ, objects[i].getCorners('x', 'z'))) {
          //     console.log('object not outside other objects  XZ');
          //     return false;
          // }
          // if (!BP3D.Core.Utils.polygonOutsidePolygon(cornersYZ, objects[i].getCornersYZ('y', 'z')) ||
          //     BP3D.Core.Utils.polygonPolygonIntersect(cornersYZ, objects[i].getCornersYZ('y', 'z'))) {
          //     console.log('object not outside other objects YZ');
          //     return false;
          // }

        }

        return true;
      };

      return InWallItem;
    }(Items.WallItem);

    Items.InWallItem = InWallItem;
  })(Items = BP3D.Items || (BP3D.Items = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Items;

  (function (Items) {
    /** */
    var InWallFloorItem = function (_super) {
      __extends(InWallFloorItem, _super);

      function InWallFloorItem(model, metadata, geometry, material, position, rotation, scale) {
        _super.call(this, model, metadata, geometry, material, position, rotation, scale);

        this.boundToFloor = true;
        this.obstructInWallMoves = true;
        this.obstructFloorMoves = true;
        this.addToWall = true;
      }

      ;
      return InWallFloorItem;
    }(Items.InWallItem);

    Items.InWallFloorItem = InWallFloorItem;
  })(Items = BP3D.Items || (BP3D.Items = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Items;

  (function (Items) {
    /** */
    var OnFloorItem = function (_super) {
      __extends(OnFloorItem, _super);

      function OnFloorItem(model, metadata, geometry, material, position, rotation, scale) {
        _super.call(this, model, metadata, geometry, material, position, rotation, scale);

        this.obstructFloorMoves = false;
        this.receiveShadow = true;
        this.obstructOnFloorMoves = true;
      }

      ;
      return OnFloorItem;
    }(Items.FloorItem);

    Items.OnFloorItem = OnFloorItem;
  })(Items = BP3D.Items || (BP3D.Items = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Items;

  (function (Items) {
    /** */
    var WallFloorItem = function (_super) {
      __extends(WallFloorItem, _super);

      function WallFloorItem(model, metadata, geometry, material, position, rotation, scale) {
        _super.call(this, model, metadata, geometry, material, position, rotation, scale);

        this.boundToFloor = true;
      }

      ;
      return WallFloorItem;
    }(Items.WallItem);

    Items.WallFloorItem = WallFloorItem;
  })(Items = BP3D.Items || (BP3D.Items = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Items;

  (function (Items) {
    /** Enumeration of item types. */
    var item_types = {
      1: Items.FloorItem,
      2: Items.WallItem,
      3: Items.InWallItem,
      7: Items.InWallFloorItem,
      8: Items.OnFloorItem,
      9: Items.WallFloorItem,
      10: Items.AnywhereItem,
      11: Items.CeilingItem
    };
    /** Factory class to create items. */

    var Factory = function () {
      function Factory() {}
      /** Gets the class for the specified item. */


      Factory.getClass = function (itemType) {
        return item_types[itemType];
      };

      return Factory;
    }();

    Items.Factory = Factory;
  })(Items = BP3D.Items || (BP3D.Items = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Model;

  (function (Model) {
    /**
     * The Scene is a manager of Items and also links to a ThreeJS scene.
     */
    var Scene = function () {
      /**
       * Constructs a scene.
       * @param model The associated model.
       * @param textureDir The directory from which to load the textures.
       */
      function Scene(model, textureDir) {
        this.model = model;
        this.textureDir = textureDir;
        /** */

        this.items = [];
        /** */

        this.needsUpdate = false;
        /** */

        this.itemLoadingCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /** Item */

        this.itemLoadedCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /** Item */

        this.itemRemovedCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"](); // init item loader

        this.loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"](); // this.loader.crossOrigin = "";
        // this.loader.setCrossOrigin('use-credentials');
      }
      /** Adds a non-item, basically a mesh, to the scene.
       * @param mesh The mesh to be added.
       */


      Scene.prototype.add = function (mesh) {
        this.scene.add(mesh);
      };
      /** Removes a non-item, basically a mesh, from the scene.
       * @param mesh The mesh to be removed.
       */


      Scene.prototype.remove = function (mesh) {
        this.scene.remove(mesh);
        BP3D.Core.Utils.removeValue(this.items, mesh);
      };
      /** Gets the scene.
       * @returns The scene.
       */


      Scene.prototype.getScene = function () {
        return this.scene;
      };
      /** Gets the items.
       * @returns The items.
       */


      Scene.prototype.getItems = function () {
        return this.items;
      };
      /** Gets the count of items.
       * @returns The count.
       */


      Scene.prototype.itemCount = function () {
        return this.items.length;
      };
      /** Removes all items. */


      Scene.prototype.clearItems = function () {
        // var items_copy = this.items;
        var scope = this;
        this.items.forEach(function (item) {
          scope.removeItem(item, true);
        });
        this.items = [];
      };
      /**
       * Removes an item.
       * @param item The item to be removed.
       * @param dontRemove If not set, also remove the item from the items list.
       */


      Scene.prototype.removeItem = function (item, dontRemove) {
        dontRemove = dontRemove || false; // use this for item meshes

        this.itemRemovedCallbacks.fire(item);
        item.removed();
        this.scene.remove(item);

        if (!dontRemove) {
          BP3D.Core.Utils.removeValue(this.items, item);
        }
      };
      /**
       * Creates an item and adds it to the scene.
       * @param itemType The type of the item given by an enumerator.
       * @param fileName The name of the file to load.
       * @param metadata TODO
       * @param position The initial position.
       * @param rotation The initial rotation around the y axis.
       * @param scale The initial scaling.
       * @param fixed True if fixed.
       */


      Scene.prototype.addItem = function (itemType, fileName, metadata, position, rotation, scale, fixed) {
        itemType = itemType || 1;
        var scope = this;

        var loaderCallback = function (geometry, materials) {
          var item = new (BP3D.Items.Factory.getClass(itemType))(scope.model, metadata, geometry, materials, position, rotation, scale);
          item.fixed = fixed || false;
          scope.items.push(item);
          scope.add(item);
          item.initObject(position);

          if (position !== null && position !== undefined) {
            item.setYPos(position.y);
          }

          scope.itemLoadedCallbacks.fire(item);
          three__WEBPACK_IMPORTED_MODULE_0__["Cache"].add(fileName, {
            geometry: geometry,
            materials: materials
          });
        };

        function addToMaterials(materials, newmaterial) {
          for (var i = 0; i < materials.length; i++) {
            var mat = materials[i];

            if (mat.name === newmaterial.name) {
              return [materials, i];
            }
          }

          materials.push(newmaterial);
          return [materials, materials.length - 1];
        }

        var gltfCallback = function (gltfModel) {
          // console.log(gltfModel)
          var newmaterials = [];
          var newGeometry = new three__WEBPACK_IMPORTED_MODULE_0__["Geometry"]();
          gltfModel.scene.traverse(function (child) {
            if (child.isMesh) {
              var materialindices = [];

              if (child.material.length) {
                for (var k = 0; k < child.material.length; k++) {
                  var newItems = addToMaterials(newmaterials, child.material[k]);
                  newmaterials = newItems[0];
                  materialindices.push(newItems[1]);
                }
              } else {
                newItems = addToMaterials(newmaterials, child.material); //materials.push(child.material);

                newmaterials = newItems[0];
                materialindices.push(newItems[1]);
              }

              if (child.geometry.isBufferGeometry) {
                var tGeometry = new three__WEBPACK_IMPORTED_MODULE_0__["Geometry"]().fromBufferGeometry(child.geometry);
                tGeometry.faces.forEach(face => {
                  face.materialIndex = materialindices[face.materialIndex];
                });
                child.updateMatrix();
                newGeometry.merge(tGeometry, child.matrix);
              } else {
                child.geometry.faces.forEach(face => {
                  face.materialIndex = materialindices[face.materialIndex];
                });
                child.updateMatrix();
                newGeometry.mergeMesh(child);
              }
            }
          });
          loaderCallback(newGeometry, newmaterials); // loaderCallback(gltfModel.scene, newmaterials, true);
        };

        this.itemLoadingCallbacks.fire();

        if (three__WEBPACK_IMPORTED_MODULE_0__["Cache"].get(fileName) === undefined) {
          try {
            this.loader.load(fileName, gltfCallback, null, null); // TODO_Ekki
          } catch (e) {
            console.log(e);
            this.itemLoadedCallbacks.fire();
          }
        } else {
          loaderCallback(three__WEBPACK_IMPORTED_MODULE_0__["Cache"].get(fileName).geometry, three__WEBPACK_IMPORTED_MODULE_0__["Cache"].get(fileName).materials);
        } // this.loader.load(fileName, gltfCallback, null, null);

      };

      return Scene;
    }();

    Model.Scene = Scene;
  })(Model = BP3D.Model || (BP3D.Model = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Model;

  (function (Model_1) {
    /**
     * A Model connects a Floorplan and a Scene.
     */
    var Model = function () {
      /** Constructs a new model.
       * @param textureDir The directory containing the textures.
       */
      function Model(textureDir) {
        /** */
        this.roomLoadingCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /** */

        this.roomLoadedCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /** name */

        this.roomSavedCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /** success (bool), copy (bool) */

        this.roomDeletedCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        this.floorplan = new Model_1.Floorplan();
        this.scene = new Model_1.Scene(this, textureDir);
      }

      Model.prototype.loadSerialized = function (json) {
        // TODO: better documentation on serialization format.
        // TODO: a much better serialization format.
        this.roomLoadingCallbacks.fire();
        var data = JSON.parse(json);
        this.newRoom(data.floorplan, data.items);
        this.roomLoadedCallbacks.fire();
      };

      Model.prototype.exportSerialized = function () {
        var items_arr = [];
        var objects = this.scene.getItems();

        for (var i = 0; i < objects.length; i++) {
          var object = objects[i];
          items_arr[i] = {
            item_name: object.metadata.itemName,
            item_type: object.metadata.itemType,
            model_url: object.metadata.modelUrl,
            xpos: object.position.x,
            ypos: object.position.y,
            zpos: object.position.z,
            rotation: object.rotation.y,
            scale_x: object.scale.x,
            scale_y: object.scale.y,
            scale_z: object.scale.z,
            fixed: object.fixed
          };
        }

        var room = {
          floorplan: this.floorplan.saveFloorplan(),
          items: items_arr
        };
        return JSON.stringify(room);
      };

      Model.prototype.newRoom = function (floorplan, items) {
        var _this = this;

        this.scene.clearItems();
        this.floorplan.loadFloorplan(floorplan);
        items.forEach(function (item) {
          var position = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](item.xpos, item.ypos, item.zpos);
          var metadata = {
            itemName: item.item_name,
            resizable: item.resizable,
            itemType: item.item_type,
            modelUrl: item.model_url
          };
          var scale = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](item.scale_x, item.scale_y, item.scale_z);

          _this.scene.addItem(item.item_type, item.model_url, metadata, position, item.rotation, scale, item.fixed);
        });
      };

      return Model;
    }();

    Model_1.Model = Model;
  })(Model = BP3D.Model || (BP3D.Model = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Floorplanner;

  (function (Floorplanner) {
    /** */
    Floorplanner.floorplannerModes = {
      MOVE: 0,
      DRAW: 1,
      DELETE: 2
    }; // grid parameters

    var gridSpacing = 20; // pixels

    var gridWidth = 1;
    var gridColor = "#f1f1f1"; // room config

    var roomColor = "#f9f9f9"; // wall config

    var wallWidth = 5;
    var wallWidthHover = 7;
    var wallColor = "#dddddd";
    var wallColorHover = "#008cba";
    var edgeColor = "#888888";
    var edgeColorHover = "#008cba";
    var edgeWidth = 1;
    var deleteColor = "#ff0000"; // corner config

    var cornerRadius = 0;
    var cornerRadiusHover = 7;
    var cornerColor = "#cccccc";
    var cornerColorHover = "#008cba";
    /**
     * The View to be used by a Floorplanner to render in/interact with.
     */

    var FloorplannerView = function () {
      /** */
      function FloorplannerView(floorplan, viewmodel, canvas) {
        this.floorplan = floorplan;
        this.viewmodel = viewmodel;
        this.canvas = canvas;
        this.canvasElement = document.getElementById(canvas);
        this.context = this.canvasElement.getContext('2d');
        var scope = this;
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).resize(function () {
          scope.handleWindowResize();
        });
        this.handleWindowResize();
      }
      /** */


      FloorplannerView.prototype.handleWindowResize = function () {
        var canvasSel = jquery__WEBPACK_IMPORTED_MODULE_2___default()("#" + this.canvas);
        var parent = canvasSel.parent();
        canvasSel.height(parent.innerHeight());
        canvasSel.width(parent.innerWidth());
        this.canvasElement.height = parent.innerHeight();
        this.canvasElement.width = parent.innerWidth();
        this.draw();
      };
      /** */


      FloorplannerView.prototype.draw = function () {
        var _this = this;

        this.context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.drawGrid();
        this.floorplan.getRooms().forEach(function (room) {
          _this.drawRoom(room);
        });
        this.floorplan.getWalls().forEach(function (wall) {
          _this.drawWall(wall);
        });
        this.floorplan.getCorners().forEach(function (corner) {
          _this.drawCorner(corner);
        });

        if (this.viewmodel.mode === Floorplanner.floorplannerModes.DRAW) {
          this.drawTarget(this.viewmodel.targetX, this.viewmodel.targetY, this.viewmodel.lastNode);
        }

        this.floorplan.getWalls().forEach(function (wall) {
          _this.drawWallLabels(wall);
        });
      };
      /** */


      FloorplannerView.prototype.drawWallLabels = function (wall) {
        // we'll just draw the shorter label... idk
        if (wall.backEdge && wall.frontEdge) {
          if (wall.backEdge.interiorDistance < wall.frontEdge.interiorDistance) {
            this.drawEdgeLabel(wall.backEdge);
          } else {
            this.drawEdgeLabel(wall.frontEdge);
          }
        } else if (wall.backEdge) {
          this.drawEdgeLabel(wall.backEdge);
        } else if (wall.frontEdge) {
          this.drawEdgeLabel(wall.frontEdge);
        }
      };
      /** */


      FloorplannerView.prototype.drawWall = function (wall) {
        var hover = wall === this.viewmodel.activeWall;
        var color = wallColor;

        if (hover && this.viewmodel.mode === Floorplanner.floorplannerModes.DELETE) {
          color = deleteColor;
        } else if (hover) {
          color = wallColorHover;
        }

        this.drawLine(this.viewmodel.convertX(wall.getStartX()), this.viewmodel.convertY(wall.getStartY()), this.viewmodel.convertX(wall.getEndX()), this.viewmodel.convertY(wall.getEndY()), hover ? wallWidthHover : wallWidth, color);

        if (!hover && wall.frontEdge) {
          this.drawEdge(wall.frontEdge, hover);
        }

        if (!hover && wall.backEdge) {
          this.drawEdge(wall.backEdge, hover);
        }
      };
      /** */


      FloorplannerView.prototype.drawEdgeLabel = function (edge) {
        var pos = edge.interiorCenter();
        var length = edge.interiorDistance();

        if (length < 60) {
          // dont draw labels on walls this short
          return;
        }

        this.context.font = "normal 12px Arial";
        this.context.fillStyle = "#000000";
        this.context.textBaseline = "middle";
        this.context.textAlign = "center";
        this.context.strokeStyle = "#ffffff";
        this.context.lineWidth = 4;
        this.context.strokeText(BP3D.Core.Dimensioning.cmToMeasure(length), this.viewmodel.convertX(pos.x), this.viewmodel.convertY(pos.y));
        this.context.fillText(BP3D.Core.Dimensioning.cmToMeasure(length), this.viewmodel.convertX(pos.x), this.viewmodel.convertY(pos.y));
      };
      /** */


      FloorplannerView.prototype.drawEdge = function (edge, hover) {
        var color = edgeColor;

        if (hover && this.viewmodel.mode === Floorplanner.floorplannerModes.DELETE) {
          color = deleteColor;
        } else if (hover) {
          color = edgeColorHover;
        }

        var corners = edge.corners();
        var scope = this;
        this.drawPolygon(BP3D.Core.Utils.map(corners, function (corner) {
          return scope.viewmodel.convertX(corner.x);
        }), BP3D.Core.Utils.map(corners, function (corner) {
          return scope.viewmodel.convertY(corner.y);
        }), false, null, true, color, edgeWidth);
      };
      /** */


      FloorplannerView.prototype.drawRoom = function (room) {
        var scope = this;
        this.drawPolygon(BP3D.Core.Utils.map(room.corners, function (corner) {
          return scope.viewmodel.convertX(corner.x);
        }), BP3D.Core.Utils.map(room.corners, function (corner) {
          return scope.viewmodel.convertY(corner.y);
        }), true, roomColor);
      };
      /** */


      FloorplannerView.prototype.drawCorner = function (corner) {
        var hover = corner === this.viewmodel.activeCorner;
        var color = cornerColor;

        if (hover && this.viewmodel.mode === Floorplanner.floorplannerModes.DELETE) {
          color = deleteColor;
        } else if (hover) {
          color = cornerColorHover;
        }

        this.drawCircle(this.viewmodel.convertX(corner.x), this.viewmodel.convertY(corner.y), hover ? cornerRadiusHover : cornerRadius, color);
      };
      /** */


      FloorplannerView.prototype.drawTarget = function (x, y, lastNode) {
        this.drawCircle(this.viewmodel.convertX(x), this.viewmodel.convertY(y), cornerRadiusHover, cornerColorHover);

        if (this.viewmodel.lastNode) {
          this.drawLine(this.viewmodel.convertX(lastNode.x), this.viewmodel.convertY(lastNode.y), this.viewmodel.convertX(x), this.viewmodel.convertY(y), wallWidthHover, wallColorHover);
        }
      };
      /** */


      FloorplannerView.prototype.drawLine = function (startX, startY, endX, endY, width, color) {
        // width is an integer
        // color is a hex string, i.e. #ff0000
        this.context.beginPath();
        this.context.moveTo(startX, startY);
        this.context.lineTo(endX, endY);
        this.context.lineWidth = width;
        this.context.strokeStyle = color;
        this.context.stroke();
      };
      /** */


      FloorplannerView.prototype.drawPolygon = function (xArr, yArr, fill, fillColor, stroke, strokeColor, strokeWidth) {
        // fillColor is a hex string, i.e. #ff0000
        fill = fill || false;
        stroke = stroke || false;
        this.context.beginPath();
        this.context.moveTo(xArr[0], yArr[0]);

        for (var i = 1; i < xArr.length; i++) {
          this.context.lineTo(xArr[i], yArr[i]);
        }

        this.context.closePath();

        if (fill) {
          this.context.fillStyle = fillColor;
          this.context.fill();
        }

        if (stroke) {
          this.context.lineWidth = strokeWidth;
          this.context.strokeStyle = strokeColor;
          this.context.stroke();
        }
      };
      /** */


      FloorplannerView.prototype.drawCircle = function (centerX, centerY, radius, fillColor) {
        this.context.beginPath();
        this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = fillColor;
        this.context.fill();
      };
      /** returns n where -gridSize/2 < n <= gridSize/2  */


      FloorplannerView.prototype.calculateGridOffset = function (n) {
        if (n >= 0) {
          return (n + gridSpacing / 2.0) % gridSpacing - gridSpacing / 2.0;
        } else {
          return (n - gridSpacing / 2.0) % gridSpacing + gridSpacing / 2.0;
        }
      };
      /** */


      FloorplannerView.prototype.drawGrid = function () {
        var offsetX = this.calculateGridOffset(-this.viewmodel.originX);
        var offsetY = this.calculateGridOffset(-this.viewmodel.originY);
        var width = this.canvasElement.width;
        var height = this.canvasElement.height;

        for (var x = 0; x <= width / gridSpacing; x++) {
          this.drawLine(gridSpacing * x + offsetX, 0, gridSpacing * x + offsetX, height, gridWidth, gridColor);
        }

        for (var y = 0; y <= height / gridSpacing; y++) {
          this.drawLine(0, gridSpacing * y + offsetY, width, gridSpacing * y + offsetY, gridWidth, gridColor);
        }
      };

      return FloorplannerView;
    }();

    Floorplanner.FloorplannerView = FloorplannerView;
  })(Floorplanner = BP3D.Floorplanner || (BP3D.Floorplanner = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Floorplanner;

  (function (Floorplanner_1) {
    /** how much will we move a corner to make a wall axis aligned (cm) */
    var snapTolerance = 25;
    /**
     * The Floorplanner implements an interactive tool for creation of floorplans.
     */

    var Floorplanner = function () {
      /** */
      function Floorplanner(canvas, floorplan) {
        this.floorplan = floorplan;
        /** */

        this.mode = 0;
        /** */

        this.activeWall = null;
        /** */

        this.activeCorner = null;
        /** */

        this.originX = 0;
        /** */

        this.originY = 0;
        /** drawing state */

        this.targetX = 0;
        /** drawing state */

        this.targetY = 0;
        /** drawing state */

        this.lastNode = null;
        /** */

        this.modeResetCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
        /** */

        this.mouseDown = false;
        /** */

        this.mouseMoved = false;
        /** */

        this.mouseMovedCount = 0;
        /** in ThreeJS coords */

        this.mouseX = 0;
        /** in ThreeJS coords */

        this.mouseY = 0;
        /** in ThreeJS coords */

        this.rawMouseX = 0;
        /** in ThreeJS coords */

        this.rawMouseY = 0;
        /** mouse position at last click */

        this.lastX = 0;
        /** mouse position at last click */

        this.lastY = 0;
        this.canvasElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()("#" + canvas);
        this.view = new Floorplanner_1.FloorplannerView(this.floorplan, this, canvas);
        var cmPerFoot = 30.48;
        var pixelsPerFoot = 15.0;
        this.cmPerPixel = cmPerFoot * (1.0 / pixelsPerFoot);
        this.pixelsPerCm = 1.0 / this.cmPerPixel;
        this.wallWidth = 10.0 * this.pixelsPerCm; // Initialization:

        this.setMode(Floorplanner_1.floorplannerModes.MOVE);
        var scope = this;
        this.canvasElement.mousedown(function () {
          scope.mousedown();
        });
        this.canvasElement.mousemove(function (event) {
          scope.mousemove(event);
        });
        this.canvasElement.mouseup(function () {
          scope.mouseup();
        });
        this.canvasElement.mouseleave(function () {
          scope.mouseleave();
        });
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).keyup(function (e) {
          if (e.keyCode === 27) {
            scope.escapeKey();
          }
        });
        floorplan.roomLoadedCallbacks.add(function () {
          scope.reset();
        });
      }
      /** */


      Floorplanner.prototype.escapeKey = function () {
        this.setMode(Floorplanner_1.floorplannerModes.MOVE);
      };
      /** */


      Floorplanner.prototype.updateTarget = function () {
        if (this.mode === Floorplanner_1.floorplannerModes.DRAW && this.lastNode) {
          if (Math.abs(this.mouseX - this.lastNode.x) < snapTolerance) {
            this.targetX = this.lastNode.x;
          } else {
            this.targetX = this.mouseX;
          }

          if (Math.abs(this.mouseY - this.lastNode.y) < snapTolerance) {
            this.targetY = this.lastNode.y;
          } else {
            this.targetY = this.mouseY;
          }
        } else {
          this.targetX = this.mouseX;
          this.targetY = this.mouseY;
        }

        this.view.draw();
      };
      /** */


      Floorplanner.prototype.mousedown = function () {
        // console.log("mouse down");
        this.mouseDown = true;
        this.mouseMoved = false;
        this.mouseMovedCount = 0;
        this.lastX = this.rawMouseX;
        this.lastY = this.rawMouseY; // delete

        if (this.mode === Floorplanner_1.floorplannerModes.DELETE) {
          if (this.activeCorner) {
            this.activeCorner.removeAll();
          } else if (this.activeWall) {
            this.activeWall.remove();
          } else {
            this.setMode(Floorplanner_1.floorplannerModes.MOVE);
          }
        }
      };
      /** */


      Floorplanner.prototype.mousemove = function (event) {
        // console.log("mouse move");
        this.mouseMovedCount++;
        this.mouseMoved = true; // update mouse

        this.rawMouseX = event.clientX;
        this.rawMouseY = event.clientY;
        this.mouseX = (event.clientX - this.canvasElement.offset().left) * this.cmPerPixel + this.originX * this.cmPerPixel;
        this.mouseY = (event.clientY - this.canvasElement.offset().top) * this.cmPerPixel + this.originY * this.cmPerPixel; // update target (snapped position of actual mouse)

        if (this.mode === Floorplanner_1.floorplannerModes.DRAW || this.mode === Floorplanner_1.floorplannerModes.MOVE && this.mouseDown) {
          this.updateTarget();
        } // update object target


        if (this.mode !== Floorplanner_1.floorplannerModes.DRAW && !this.mouseDown) {
          var hoverCorner = this.floorplan.overlappedCorner(this.mouseX, this.mouseY);
          var hoverWall = this.floorplan.overlappedWall(this.mouseX, this.mouseY);
          var draw = false;

          if (hoverCorner !== this.activeCorner) {
            this.activeCorner = hoverCorner;
            draw = true;
          } // corner takes precendence


          if (this.activeCorner == null) {
            if (hoverWall !== this.activeWall) {
              this.activeWall = hoverWall;
              draw = true;
            }
          } else {
            this.activeWall = null;
          }

          if (draw) {
            this.view.draw();
          }
        } // panning


        if (this.mouseDown && !this.activeCorner && !this.activeWall) {
          this.originX += this.lastX - this.rawMouseX;
          this.originY += this.lastY - this.rawMouseY;
          this.lastX = this.rawMouseX;
          this.lastY = this.rawMouseY;
          this.view.draw();
        } // dragging


        if (this.mode === Floorplanner_1.floorplannerModes.MOVE && this.mouseDown) {
          if (this.activeCorner) {
            this.activeCorner.move(this.mouseX, this.mouseY);
            this.activeCorner.snapToAxis(snapTolerance);
          } else if (this.activeWall) {
            this.activeWall.relativeMove((this.rawMouseX - this.lastX) * this.cmPerPixel, (this.rawMouseY - this.lastY) * this.cmPerPixel);
            this.activeWall.snapToAxis(snapTolerance);
            this.lastX = this.rawMouseX;
            this.lastY = this.rawMouseY;
          }

          this.view.draw();
        }
      };
      /** */


      Floorplanner.prototype.mouseup = function () {
        this.mouseDown = false; // console.log("mouse up");
        // console.log(this.mouseMoved);
        // drawing

        if (this.mode === Floorplanner_1.floorplannerModes.DRAW && (this.mouseMovedCount === 1 || this.mouseMovedCount === 0)) {
          // console.log(this.targetX);
          // console.log(this.targetY);
          var corner = this.floorplan.newCorner(this.targetX, this.targetY);

          if (this.lastNode != null) {
            this.floorplan.newWall(this.lastNode, corner);
          }

          if (corner.mergeWithIntersected() && this.lastNode != null) {
            this.setMode(Floorplanner_1.floorplannerModes.MOVE);
          }

          this.lastNode = corner;
        }
      };
      /** */


      Floorplanner.prototype.mouseleave = function () {
        this.mouseDown = false; //scope.setMode(scope.modes.MOVE);
      };
      /** */


      Floorplanner.prototype.reset = function () {
        this.resizeView();
        this.setMode(Floorplanner_1.floorplannerModes.MOVE);
        this.resetOrigin();
        this.view.draw();
      };
      /** */


      Floorplanner.prototype.resizeView = function () {
        this.view.handleWindowResize();
      };
      /** */


      Floorplanner.prototype.setMode = function (mode) {
        this.lastNode = null;
        this.mode = mode;
        this.modeResetCallbacks.fire(mode);
        this.updateTarget();
      };
      /** Sets the origin so that floorplan is centered */


      Floorplanner.prototype.resetOrigin = function () {
        var centerX = this.canvasElement.innerWidth() / 2;
        var centerY = this.canvasElement.innerHeight() / 2;
        var centerFloorplan = this.floorplan.getCenter();
        this.originX = centerFloorplan.x * this.pixelsPerCm - centerX;
        this.originY = centerFloorplan.z * this.pixelsPerCm - centerY;
      };
      /** Convert from THREEjs coords to canvas coords. */


      Floorplanner.prototype.convertX = function (x) {
        return (x - this.originX * this.cmPerPixel) * this.pixelsPerCm;
      };
      /** Convert from THREEjs coords to canvas coords. */


      Floorplanner.prototype.convertY = function (y) {
        return (y - this.originY * this.cmPerPixel) * this.pixelsPerCm;
      };

      return Floorplanner;
    }();

    Floorplanner_1.Floorplanner = Floorplanner;
  })(Floorplanner = BP3D.Floorplanner || (BP3D.Floorplanner = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Three;

  (function (Three) {
    Three.Controller = function (three, model, camera, element, controls, hud) {
      var scope = this;
      this.enabled = true; // var three = three;
      // var model = model;

      var scene = model.scene; // var element = element;
      // var camera = camera;
      // var controls = controls;
      // var hud = hud;

      var plane; // ground plane used for intersection testing

      var mouse;
      var intersectedObject;
      var mouseoverObject;
      var selectedObject;
      var mouseDown = false; // eslint-disable-next-line no-unused-vars

      var mouseMoved = false; // has mouse moved since down click

      var mouseMovedCounter = 0;
      var rotateMouseOver = false;
      var states = {
        UNSELECTED: 0,
        SELECTED: 1,
        DRAGGING: 2,
        ROTATING: 3,
        ROTATING_FREE: 4,
        PANNING: 5,
        DRAGGING_FREE: 6
      };
      var state = states.UNSELECTED;
      this.needsUpdate = true;

      function init() {
        element.mousedown(mouseDownEvent);
        element.mouseup(mouseUpEvent);
        element.mousemove(mouseMoveEvent);
        element.on("touchstart", touchStartEvent);
        element.on("touchmove", touchMoveEvent);
        element.on("touchend", touchEndEvent);
        mouse = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
        scene.itemRemovedCallbacks.add(itemRemoved);
        scene.itemLoadedCallbacks.add(itemLoaded);
        setGroundPlane();
      } // invoked via callback when item is loaded


      function itemLoaded(item) {
        if (item !== undefined && item !== null) {
          if (!item.position_set) {
            scope.setSelectedObject(item);
            switchState(states.DRAGGING_FREE);
          }

          item.position_set = true;
        }
      }

      function clickPressed(vec2) {
        vec2 = vec2 || mouse;
        var intersection = scope.itemIntersection(mouse, selectedObject);

        if (intersection) {
          selectedObject.clickPressed(intersection);
        }
      }

      function clickDragged(vec2) {
        vec2 = vec2 || mouse;
        var intersection = scope.itemIntersection(mouse, selectedObject);

        if (intersection) {
          if (scope.isRotating()) {
            selectedObject.rotate(intersection);
          } else {
            selectedObject.clickDragged(intersection);
          }
        }
      }

      function itemRemoved(item) {
        // invoked as a callback to event in Scene
        if (item === selectedObject) {
          selectedObject.setUnselected();
          selectedObject.mouseOff();
          scope.setSelectedObject(null);
        }
      }

      function setGroundPlane() {
        // ground plane used to find intersections
        var size = 10000;
        plane = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_0__["PlaneGeometry"](size, size), new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]());
        plane.rotation.x = -Math.PI / 2;
        plane.visible = false;
        scene.add(plane);
      }

      function checkWallsAndFloors() {
        // console.log("checking floor and wall")
        // double click on a wall or floor brings up texture change modal
        if (state === states.UNSELECTED && mouseoverObject == null) {
          // check walls
          var wallEdgePlanes = model.floorplan.wallEdgePlanes();
          var wallIntersects = scope.getIntersections(mouse, wallEdgePlanes, true);

          if (wallIntersects.length > 0) {
            var wall = wallIntersects[0].object.edge;
            three.wallClicked.fire(wall);
            return;
          } // check floors


          var floorPlanes = model.floorplan.floorPlanes();
          var floorIntersects = scope.getIntersections(mouse, floorPlanes, false);

          if (floorIntersects.length > 0) {
            var room = floorIntersects[0].object.room;
            three.floorClicked.fire(room);
            return;
          }

          three.nothingClicked.fire();
        }
      }

      function mouseMoveEvent(event) {
        if (scope.enabled) {
          event.preventDefault();
          mouseMoved = true; // console.log("mousemoved")

          mouseMovedCounter++;
          mouse.x = event.clientX;
          mouse.y = event.clientY;

          if (!mouseDown) {
            // console.log("Mouse Moving");
            if (state === states.DRAGGING_FREE) {
              // console.log("in Dragging without mouse down")
              clickDragged();
              hud.update();
              scope.needsUpdate = true;
            } else {
              // console.log("updating intersections");
              updateIntersections();
            }
          }

          switch (state) {
            case states.UNSELECTED:
              updateMouseover();
              break;

            case states.SELECTED:
              updateMouseover();
              break;

            case states.DRAGGING:
            case states.ROTATING:
            case states.ROTATING_FREE:
              clickDragged();
              hud.update();
              scope.needsUpdate = true;
              break;

            default:
              break;
          }
        }
      }

      this.isRotating = function () {
        return state === states.ROTATING || state === states.ROTATING_FREE;
      }; // eslint-disable-next-line no-unused-vars


      function touchStartEvent(event) {
        touchMoveEvent(event);

        if (scope.enabled) {
          event.preventDefault();
          mouseMoved = false; // console.log("mousedown")

          mouseMovedCounter = 0;
          mouseDown = true;

          switch (state) {
            case states.SELECTED:
              if (rotateMouseOver) {
                switchState(states.ROTATING);
              } else if (intersectedObject != null) {
                scope.setSelectedObject(intersectedObject);

                if (!intersectedObject.fixed) {
                  switchState(states.DRAGGING);
                }
              }

              break;

            case states.UNSELECTED:
              if (intersectedObject != null) {
                // console.log("calling set sel1bjhbjhbj")
                scope.setSelectedObject(intersectedObject);

                if (!intersectedObject.fixed) {
                  switchState(states.DRAGGING);
                }
              } else {// console.log("no object")
              }

              break;

            case states.DRAGGING:
            case states.ROTATING:
              break;

            case states.ROTATING_FREE:
              switchState(states.SELECTED);
              break;

            case states.DRAGGING_FREE:
              switchState(states.DRAGGING);
              break;

            default:
              break;
          }
        }
      } // eslint-disable-next-line no-unused-vars


      function touchMoveEvent(event) {
        if (scope.enabled) {
          event.preventDefault();
          mouseMoved = true; // console.log("mousemoved")

          mouseMovedCounter++;
          mouse.x = event.touches[0].clientX;
          mouse.y = event.touches[0].clientY;

          if (!mouseDown) {
            // console.log("Mouse Moving");
            if (state === states.DRAGGING_FREE) {
              // console.log("in Dragging without mouse down")
              clickDragged();
              hud.update();
              scope.needsUpdate = true;
            } else {
              // console.log("updating intersections");
              updateIntersections();
            }
          }

          switch (state) {
            case states.UNSELECTED:
              // console.log("updating")
              updateMouseover();
              break;

            case states.SELECTED:
              updateMouseover();
              break;

            case states.DRAGGING:
            case states.ROTATING:
            case states.ROTATING_FREE:
              clickDragged();
              hud.update();
              scope.needsUpdate = true;
              break;

            default:
              updateMouseover();
              break;
          }
        }
      } // eslint-disable-next-line no-unused-vars


      function touchEndEvent(event) {
        if (scope.enabled) {
          mouseDown = false;

          switch (state) {
            case states.DRAGGING:
              if (selectedObject != null) {
                selectedObject.clickReleased();
              }

              switchState(states.SELECTED);
              break;

            case states.ROTATING:
              if (mouseMovedCounter === 0 || mouseMovedCounter === 1) {
                switchState(states.ROTATING_FREE);
              } else {
                switchState(states.SELECTED);
              }

              break;

            case states.UNSELECTED:
              if (mouseMovedCounter === 0 || mouseMovedCounter === 1) {
                checkWallsAndFloors();
              }

              break;

            case states.SELECTED:
              if (intersectedObject == null && (mouseMovedCounter === 0 || mouseMovedCounter === 1)) {
                switchState(states.UNSELECTED);
                checkWallsAndFloors();
              }

              break;

            case states.ROTATING_FREE:
              break;

            default:
              // checkWallsAndFloors();
              break;
          }
        }
      }

      function mouseDownEvent(event) {
        if (scope.enabled) {
          event.preventDefault();
          mouseMoved = false; // console.log("mousedown")

          mouseMovedCounter = 0;
          mouseDown = true;

          switch (state) {
            case states.SELECTED:
              if (rotateMouseOver) {
                switchState(states.ROTATING);
              } else if (intersectedObject != null) {
                scope.setSelectedObject(intersectedObject);

                if (!intersectedObject.fixed) {
                  switchState(states.DRAGGING);
                }
              }

              break;

            case states.UNSELECTED:
              if (intersectedObject != null) {
                scope.setSelectedObject(intersectedObject);

                if (!intersectedObject.fixed) {
                  switchState(states.DRAGGING);
                }
              }

              break;

            case states.DRAGGING:
            case states.ROTATING:
              break;

            case states.ROTATING_FREE:
              switchState(states.SELECTED);
              break;

            case states.DRAGGING_FREE:
              switchState(states.DRAGGING);
              break;

            default:
              break;
          }
        }
      }

      function mouseUpEvent(event) {
        if (scope.enabled) {
          mouseDown = false;

          switch (state) {
            case states.DRAGGING:
              if (selectedObject != null) {
                selectedObject.clickReleased();
              }

              switchState(states.SELECTED);
              break;

            case states.ROTATING:
              if (mouseMovedCounter === 0 || mouseMovedCounter === 1) {
                switchState(states.ROTATING_FREE);
              } else {
                switchState(states.SELECTED);
              }

              break;

            case states.UNSELECTED:
              if (mouseMovedCounter === 0 || mouseMovedCounter === 1) {
                checkWallsAndFloors();
              }

              break;

            case states.SELECTED:
              if (intersectedObject == null && (mouseMovedCounter === 0 || mouseMovedCounter === 1)) {
                switchState(states.UNSELECTED);
                checkWallsAndFloors();
              }

              break;

            case states.ROTATING_FREE:
              break;

            default:
              checkWallsAndFloors();
              break;
          }
        }
      }

      function switchState(newState) {
        if (newState !== state) {
          onExit(state);
          onEntry(newState);
        }

        state = newState;
        hud.setRotating(scope.isRotating());
      }

      function onEntry(state) {
        switch (state) {
          case states.UNSELECTED:
            scope.setSelectedObject(null);
          // eslint-disable-next-line no-fallthrough

          case states.SELECTED:
            controls.enabled = true;
            break;

          case states.ROTATING:
          case states.ROTATING_FREE:
            controls.enabled = false;
            break;

          case states.DRAGGING:
            three.setCursorStyle("move");
            clickPressed();
            controls.enabled = false;
            break;

          case states.DRAGGING_FREE:
            three.setCursorStyle("move");
            break;

          default:
            break;
        }
      }

      function onExit(state) {
        switch (state) {
          case states.UNSELECTED:
          case states.SELECTED:
            break;

          case states.DRAGGING:
            if (mouseoverObject) {
              three.setCursorStyle("pointer");
            } else {
              three.setCursorStyle("auto");
            }

            break;

          case states.ROTATING:
          case states.ROTATING_FREE:
            break;

          default:
            break;
        }
      }

      this.selectedObject = function () {
        return selectedObject;
      }; // updates the vector of the intersection with the plane of a given
      // mouse position, and the intersected object
      // both may be set to null if no intersection found


      function updateIntersections() {
        // check the rotate arrow
        var hudObject = hud.getObject();

        if (hudObject != null) {
          var hudIntersects = scope.getIntersections(mouse, hudObject, false, false, true);

          if (hudIntersects.length > 0) {
            rotateMouseOver = true;
            hud.setMouseover(true);
            intersectedObject = null;
            return;
          }
        }

        rotateMouseOver = false;
        hud.setMouseover(false); // check objects

        var items = model.scene.getItems();
        var intersects = scope.getIntersections(mouse, items, false, true);

        if (intersects.length > 0) {
          intersectedObject = intersects[0].object;
        } else {
          intersectedObject = null;
        }
      } // sets coords to -1 to 1


      function normalizeVector2(vec2) {
        var retVec = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
        retVec.x = (vec2.x - three.widthMargin) / (window.innerWidth - three.widthMargin) * 2 - 1;
        retVec.y = -((vec2.y - three.heightMargin) / (window.innerHeight - three.heightMargin)) * 2 + 1;
        return retVec;
      } //


      function mouseToVec3(vec2) {
        var normVec2 = normalizeVector2(vec2);
        var vector = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](normVec2.x, normVec2.y, 0.5);
        vector.unproject(camera);
        return vector;
      } // returns the first intersection object


      this.itemIntersection = function (vec2, item) {
        if (item == null) {
          return null;
        }

        var customIntersections = item.customIntersectionPlanes();
        var intersections = null;

        if (customIntersections && customIntersections.length > 0) {
          intersections = this.getIntersections(vec2, customIntersections, true);
        } else {
          intersections = this.getIntersections(vec2, plane);
        }

        if (intersections.length > 0) {
          return intersections[0];
        } else {
          return null;
        }
      }; // filter by normals will only return objects facing the camera
      // objects can be an array of objects or a single object


      this.getIntersections = function (vec2, objects, filterByNormals, onlyVisible, recursive, linePrecision) {
        var vector = mouseToVec3(vec2);
        onlyVisible = onlyVisible || false;
        filterByNormals = filterByNormals || false;
        recursive = recursive || false;
        linePrecision = linePrecision || 20;
        var direction = vector.sub(camera.position).normalize();
        var raycaster = new three__WEBPACK_IMPORTED_MODULE_0__["Raycaster"](camera.position, direction);
        raycaster.params.Line.threshold = linePrecision; // raycaster.linePrecision = linePrecision;

        var intersections;

        if (objects instanceof Array) {
          intersections = raycaster.intersectObjects(objects, recursive);
        } else {
          intersections = raycaster.intersectObject(objects, recursive);
        } // filter by visible, if true


        if (onlyVisible) {
          intersections = BP3D.Core.Utils.removeIf(intersections, function (intersection) {
            return !intersection.object.visible;
          });
        } // filter by normals, if true


        if (filterByNormals) {
          intersections = BP3D.Core.Utils.removeIf(intersections, function (intersection) {
            var dot = intersection.face.normal.dot(direction);
            return dot > 0;
          });
        }

        return intersections;
      }; // manage the selected object


      this.setSelectedObject = function (object) {
        if (state === states.UNSELECTED) {
          switchState(states.SELECTED);
        }

        if (selectedObject != null) {
          selectedObject.setUnselected();
        }

        if (object != null) {
          selectedObject = object;
          selectedObject.setSelected();
          three.itemSelectedCallbacks.fire(object);
        } else {
          selectedObject = null;
          three.itemUnselectedCallbacks.fire();
        }

        this.needsUpdate = true;
      }; // TODO: there MUST be simpler logic for expressing this


      function updateMouseover() {
        if (intersectedObject != null) {
          if (mouseoverObject != null) {
            if (mouseoverObject !== intersectedObject) {
              mouseoverObject.mouseOff();
              mouseoverObject = intersectedObject;
              mouseoverObject.mouseOver();
              scope.needsUpdate = true;
            } else {}
          } else {
            mouseoverObject = intersectedObject;
            mouseoverObject.mouseOver();
            three.setCursorStyle("pointer");
            scope.needsUpdate = true;
          }
        } else if (mouseoverObject != null) {
          mouseoverObject.mouseOff();
          three.setCursorStyle("auto");
          mouseoverObject = null;
          scope.needsUpdate = true;
        }
      }

      init();
    };
  })(Three = BP3D.Three || (BP3D.Three = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Three;

  (function (Three) {
    Three.Floor = function (scene, room) {
      var scope = this;
      this.room = room; // var scene = scene;

      var floorPlane = null; // var roofPlane = null;

      init();

      function init() {
        scope.room.fireOnFloorChange(redraw);
        floorPlane = buildFloor();
        scope.room.roomSelectedCallbacks.add(drawOutline);
        scope.room.roomUnSelectedCallbacks.add(removeOutline); // roofs look weird, so commented out
        //roofPlane = buildRoof();
      }

      function drawOutline(box) {
        scene.add(box);
      }

      function removeOutline(box) {
        scene.remove(box);
      }

      function redraw() {
        scope.removeFromScene();
        floorPlane = buildFloor();
        scope.addToScene();
      }

      function buildFloor() {
        var textureSettings = scope.room.getTexture(); // setup texture

        var texLoader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();
        texLoader.setCrossOrigin('');
        var floorTexture = texLoader.load(textureSettings.url);
        floorTexture.wrapS = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
        floorTexture.wrapT = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
        floorTexture.repeat.set(1, 1);
        var floorMaterialTop = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"]({
          map: floorTexture,
          side: three__WEBPACK_IMPORTED_MODULE_0__["DoubleSide"],
          // ambient: 0xffffff, TODO_Ekki
          color: 0xcccccc,
          specular: 0x0a0a0a
        });
        var textureScale = textureSettings.scale; // http://stackoverflow.com/questions/19182298/how-to-texture-a-three-js-mesh-created-with-shapegeometry
        // scale down coords to fit 0 -> 1, then rescale

        var points = [];
        scope.room.interiorCorners.forEach(function (corner) {
          points.push(new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](corner.x / textureScale, corner.y / textureScale));
        });
        var shape = new three__WEBPACK_IMPORTED_MODULE_0__["Shape"](points);
        var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["ShapeGeometry"](shape);
        var floor = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, floorMaterialTop);
        floor.rotation.set(Math.PI / 2, 0, 0);
        floor.scale.set(textureScale, textureScale, textureScale);
        floor.receiveShadow = true;
        floor.castShadow = false;
        return floor;
      } // eslint-disable-next-line no-unused-vars


      function buildRoof() {
        // setup texture
        var roofMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
          side: three__WEBPACK_IMPORTED_MODULE_0__["FrontSide"],
          color: 0xe5e5e5
        });
        var points = [];
        scope.room.interiorCorners.forEach(function (corner) {
          points.push(new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](corner.x, corner.y));
        });
        var shape = new three__WEBPACK_IMPORTED_MODULE_0__["Shape"](points);
        var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["ShapeGeometry"](shape);
        var roof = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, roofMaterial);
        roof.rotation.set(Math.PI / 2, 0, 0);
        roof.position.y = 250;
        return roof;
      }

      this.addToScene = function () {
        scene.add(floorPlane); //scene.add(roofPlane);
        // hack so we can do intersect testing

        scene.add(room.floorPlane);
      };

      this.removeFromScene = function () {
        scene.remove(floorPlane); //scene.remove(roofPlane);

        scene.remove(room.floorPlane);
      };
    };
  })(Three = BP3D.Three || (BP3D.Three = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Three;

  (function (Three) {
    Three.Edge = function (scene, edge, controls) {
      var scope = this; // var scene = scene;
      // var edge = edge;
      // var controls = controls;

      var wall = edge.wall;
      var front = edge.front;
      var planes = [];
      var basePlanes = []; // always visible

      var texture = null; // var lightMap = new THREE.TextureLoader().load("http://localhost:8001/assets/5ef849ed8188602a98c95525");
      // var lightMap = THREE.ImageUtils.loadTexture("rooms/textures/walllightmap.png");

      var fillerColor = 0xdddddd;
      var sideColor = 0xcccccc;
      var baseColor = 0xdddddd;
      this.visible = false;

      this.remove = function () {
        edge.redrawCallbacks.remove(redraw);
        controls.cameraMovedCallbacks.remove(updateVisibility);
        removeFromScene();
      };

      function init() {
        edge.redrawCallbacks.add(redraw);
        edge.edgeSelectedCallbacks.add(drawOutline);
        edge.edgeUnSelectedCallbacks.add(removeOutline);
        controls.cameraMovedCallbacks.add(updateVisibility);
        updateTexture();
        updatePlanes();
        addToScene();
      }

      function drawOutline(box) {
        scene.add(box);
        updatePlanes();
      }

      function removeOutline(box) {
        scene.remove(box);
        updatePlanes();
      }

      function redraw() {
        removeFromScene();
        updateTexture();
        updatePlanes();
        addToScene();
      }

      function removeFromScene() {
        planes.forEach(function (plane) {
          scene.remove(plane);
        });
        basePlanes.forEach(function (plane) {
          scene.remove(plane);
        });
        planes = [];
        basePlanes = [];
      }

      function addToScene() {
        planes.forEach(function (plane) {
          scene.add(plane);
        });
        basePlanes.forEach(function (plane) {
          scene.add(plane);
        });
        updateVisibility();
      }

      function updateVisibility() {
        // finds the normal from the specified edge
        var start = edge.interiorStart();
        var end = edge.interiorEnd();
        var x = end.x - start.x;
        var y = end.y - start.y; // rotate 90 degrees CCW

        var normal = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-y, 0, x);
        normal.normalize(); // setup camera

        var position = controls.object.position.clone();
        var focus = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]((start.x + end.x) / 2.0, 0, (start.y + end.y) / 2.0);
        var direction = position.sub(focus).normalize(); // find dot

        var dot = normal.dot(direction); // update visible

        scope.visible = dot >= 0; // show or hide plans

        planes.forEach(function (plane) {
          plane.visible = scope.visible;
        });
        updateObjectVisibility();
      }

      function updateObjectVisibility() {
        wall.items.forEach(function (item) {
          item.updateEdgeVisibility(scope.visible, front);
        });
        wall.onItems.forEach(function (item) {
          item.updateEdgeVisibility(scope.visible, front);
        });
      }

      function updateTexture(callback) {
        // callback is fired when texture loads
        callback = function (texture) {
          scene.needsUpdate = true;
          three__WEBPACK_IMPORTED_MODULE_0__["Cache"].add(url, texture);
        };

        var textureData = edge.getTexture();
        var stretch = textureData.stretch;
        var url = textureData.url;
        var scale = textureData.scale;

        if (three__WEBPACK_IMPORTED_MODULE_0__["Cache"].get(url) === undefined) {
          texture = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]().load(url, callback, null, null);
        } else {
          texture = three__WEBPACK_IMPORTED_MODULE_0__["Cache"].get(url);
        } // texture = THREE.ImageUtils.loadTexture(url, null, callback);


        if (!stretch) {
          var height = wall.height;
          var width = edge.interiorDistance();
          texture.wrapT = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
          texture.wrapS = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
          texture.repeat.set(width / scale, height / scale);
          texture.needsUpdate = true;
        }
      }

      function updatePlanes() {
        var wallMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
          color: 0xffffff,
          // ambientColor: 0xffffff, TODO_Ekki
          //ambient: scope.wall.color,
          side: three__WEBPACK_IMPORTED_MODULE_0__["FrontSide"],
          map: texture
        });
        var fillerMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
          color: fillerColor,
          side: three__WEBPACK_IMPORTED_MODULE_0__["DoubleSide"]
        }); // exterior plane

        planes.push(makeWall(edge.exteriorStart(), edge.exteriorEnd(), edge.exteriorTransform, edge.invExteriorTransform, fillerMaterial)); // interior plane

        planes.push(makeWall(edge.interiorStart(), edge.interiorEnd(), edge.interiorTransform, edge.invInteriorTransform, wallMaterial)); // bottom
        // put into basePlanes since this is always visible

        basePlanes.push(buildFiller(edge, 0, three__WEBPACK_IMPORTED_MODULE_0__["BackSide"], baseColor)); // top

        planes.push(buildFiller(edge, wall.height, three__WEBPACK_IMPORTED_MODULE_0__["DoubleSide"], fillerColor)); // sides

        planes.push(buildSideFillter(edge.interiorStart(), edge.exteriorStart(), wall.height, sideColor));
        planes.push(buildSideFillter(edge.interiorEnd(), edge.exteriorEnd(), wall.height, sideColor));
      } // start, end have x and y attributes (i.e. corners)


      function makeWall(start, end, transform, invTransform, material) {
        var v1 = toVec3(start);
        var v2 = toVec3(end);
        var v3 = v2.clone();
        v3.y = wall.height;
        var v4 = v1.clone();
        v4.y = wall.height;
        var points = [v1.clone(), v2.clone(), v3.clone(), v4.clone()];
        points.forEach(function (p) {
          p.applyMatrix4(transform);
        });
        var shape = new three__WEBPACK_IMPORTED_MODULE_0__["Shape"]([new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](points[0].x, points[0].y), new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](points[1].x, points[1].y), new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](points[2].x, points[2].y), new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](points[3].x, points[3].y)]); // add holes for each wall item

        wall.items.forEach(function (item) {
          var pos = item.position.clone();
          pos.applyMatrix4(transform);
          var halfSize = item.halfSize;
          var min = halfSize.clone().multiplyScalar(-1);
          var max = halfSize.clone();
          min.add(pos);
          max.add(pos);
          var holePoints = [new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](min.x, min.y), new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](max.x, min.y), new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](max.x, max.y), new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](min.x, max.y)];
          shape.holes.push(new three__WEBPACK_IMPORTED_MODULE_0__["Path"](holePoints));
        });
        var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["ShapeGeometry"](shape);
        geometry.vertices.forEach(function (v) {
          v.applyMatrix4(invTransform);
        }); // make UVs

        var totalDistance = BP3D.Core.Utils.distance(v1.x, v1.z, v2.x, v2.z);
        var height = wall.height;
        geometry.faceVertexUvs[0] = [];

        function vertexToUv(vertex) {
          var x = BP3D.Core.Utils.distance(v1.x, v1.z, vertex.x, vertex.z) / totalDistance;
          var y = vertex.y / height;
          return new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](x, y);
        }

        geometry.faces.forEach(function (face) {
          var vertA = geometry.vertices[face.a];
          var vertB = geometry.vertices[face.b];
          var vertC = geometry.vertices[face.c];
          geometry.faceVertexUvs[0].push([vertexToUv(vertA), vertexToUv(vertB), vertexToUv(vertC)]);
        });
        geometry.faceVertexUvs[1] = geometry.faceVertexUvs[0];
        geometry.computeFaceNormals();
        geometry.computeVertexNormals();
        var mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
        return mesh;
      }

      function buildSideFillter(p1, p2, height, color) {
        var points = [toVec3(p1), toVec3(p2), toVec3(p2, height), toVec3(p1, height)];
        var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["Geometry"]();
        points.forEach(function (p) {
          geometry.vertices.push(p);
        });
        geometry.faces.push(new three__WEBPACK_IMPORTED_MODULE_0__["Face3"](0, 1, 2));
        geometry.faces.push(new three__WEBPACK_IMPORTED_MODULE_0__["Face3"](0, 2, 3));
        var fillerMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
          color: color,
          side: three__WEBPACK_IMPORTED_MODULE_0__["DoubleSide"]
        });
        var filler = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, fillerMaterial);
        return filler;
      }

      function buildFiller(edge, height, side, color) {
        var points = [toVec2(edge.exteriorStart()), toVec2(edge.exteriorEnd()), toVec2(edge.interiorEnd()), toVec2(edge.interiorStart())];
        var fillerMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
          color: color,
          side: side
        });
        var shape = new three__WEBPACK_IMPORTED_MODULE_0__["Shape"](points);
        var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["ShapeGeometry"](shape);
        var filler = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, fillerMaterial);
        filler.rotation.set(Math.PI / 2, 0, 0);
        filler.position.y = height;
        return filler;
      }

      function toVec2(pos) {
        return new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](pos.x, pos.y);
      }

      function toVec3(pos, height) {
        height = height || 0;
        return new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](pos.x, height, pos.y);
      }

      init();
    };
  })(Three = BP3D.Three || (BP3D.Three = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Three;

  (function (Three) {
    Three.Floorplan = function (scene, floorplan, controls) {
      var scope = this;
      this.scene = scene;
      this.floorplan = floorplan;
      this.controls = controls;
      this.floors = [];
      this.edges = [];
      floorplan.fireOnUpdatedRooms(redraw);

      function redraw() {
        // clear scene
        scope.floors.forEach(function (floor) {
          floor.removeFromScene();
        });
        scope.edges.forEach(function (edge) {
          edge.remove();
        });
        scope.floors = [];
        scope.edges = []; // draw floors

        scope.floorplan.getRooms().forEach(function (room) {
          var threeFloor = new Three.Floor(scene, room);
          scope.floors.push(threeFloor);
          threeFloor.addToScene();
        }); // draw edges

        scope.floorplan.wallEdges().forEach(function (edge) {
          var threeEdge = new Three.Edge(scene, edge, scope.controls);
          scope.edges.push(threeEdge);
        });
      }
    };
  })(Three = BP3D.Three || (BP3D.Three = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Three;

  (function (Three) {
    Three.Lights = function (scene, floorplan) {
      // var scope = this;
      // var scene = scene;
      // var floorplan = floorplan;
      var tol = 1;
      var height = 300; // TODO: share with Blueprint.Wall

      var dirLight;

      this.getDirLight = function () {
        return dirLight;
      };

      function init() {
        // var light = new THREE.HemisphereLight(0xffffff, 0x000000, 0.2);
        // light.position.set(0, height, 0);
        // scene.add(light);
        // add some lighting
        var ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__["AmbientLight"](0xffffff);
        scene.add(ambientLight); // var spotLight = new THREE.SpotLight(0xffffff);
        // spotLight.position.set(-40, 60, -10);
        // spotLight.castShadow = true;
        // scene.add(spotLight);

        dirLight = new three__WEBPACK_IMPORTED_MODULE_0__["DirectionalLight"](0xffffff, 0.7);
        dirLight.position.set(0, height, 0);
        dirLight.castShadow = true;
        dirLight.target.position.set(0, 0, 0);
        scene.add(dirLight);
        scene.add(dirLight.target);
        dirLight.shadow.mapSize.width = 512;
        dirLight.shadow.mapSize.height = 512;
        dirLight.shadow.camera.near = 0.5;
        dirLight.shadow.camera.far = 500; // dirLight.shadow.bias = -0.0001;
        // dirLight.visible = true;

        floorplan.fireOnUpdatedRooms(updateShadowCamera);
      }

      function updateShadowCamera() {
        var size = floorplan.getSize();
        var d = (Math.max(size.z, size.x) + tol) / 2.0;
        var center = floorplan.getCenter();
        var pos = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](center.x + 100, height, center.z + 60);
        dirLight.position.copy(pos);
        dirLight.target.position.copy(center); //dirLight.updateMatrix();

        dirLight.updateWorldMatrix();
        dirLight.shadow.camera.left = -d;
        dirLight.shadow.camera.right = d;
        dirLight.shadow.camera.top = d;
        dirLight.shadow.camera.bottom = -d;
        dirLight.shadow.camera.updateProjectionMatrix(); // this is necessary for updates
        // if (dirLight.shadowCamera) {
        //     dirLight.shadowCamera.left = dirLight.shadowCameraLeft;
        //     dirLight.shadowCamera.right = dirLight.shadowCameraRight;
        //     dirLight.shadowCamera.top = dirLight.shadowCameraTop;
        //     dirLight.shadowCamera.bottom = dirLight.shadowCameraBottom;
        //     dirLight.shadowCamera.updateProjectionMatrix();
        // }
      }

      init();
    };
  })(Three = BP3D.Three || (BP3D.Three = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Three;

  (function (Three) {
    Three.Skybox = function (scene) {
      // var scope = this;
      // var scene = scene;
      var topColor = 0xffffff; //0xD8ECF9

      var bottomColor = 0xe9e9e9; //0xf9f9f9;//0x565e63

      var verticalOffset = 500;
      var sphereRadius = 4000;
      var widthSegments = 32;
      var heightSegments = 15;
      var vertexShader = ["varying vec3 vWorldPosition;", "void main() {", "  vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "  vWorldPosition = worldPosition.xyz;", "  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join('\n');
      var fragmentShader = ["uniform vec3 topColor;", "uniform vec3 bottomColor;", "uniform float offset;", "varying vec3 vWorldPosition;", "void main() {", "  float h = normalize( vWorldPosition + offset ).y;", "  gl_FragColor = vec4( mix( bottomColor, topColor, (h + 1.0) / 2.0), 1.0 );", "}"].join('\n');

      function init() {
        var uniforms = {
          topColor: {
            type: "c",
            value: new three__WEBPACK_IMPORTED_MODULE_0__["Color"](topColor)
          },
          bottomColor: {
            type: "c",
            value: new three__WEBPACK_IMPORTED_MODULE_0__["Color"](bottomColor)
          },
          offset: {
            type: "f",
            value: verticalOffset
          }
        };
        var skyGeo = new three__WEBPACK_IMPORTED_MODULE_0__["SphereGeometry"](sphereRadius, widthSegments, heightSegments);
        var skyMat = new three__WEBPACK_IMPORTED_MODULE_0__["ShaderMaterial"]({
          vertexShader: vertexShader,
          fragmentShader: fragmentShader,
          uniforms: uniforms,
          side: three__WEBPACK_IMPORTED_MODULE_0__["BackSide"]
        });
        var sky = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](skyGeo, skyMat);
        scene.add(sky);
      }

      init();
    };
  })(Three = BP3D.Three || (BP3D.Three = {}));
})(BP3D || (BP3D = {}));
/**
This file is a modified version of THREE.OrbitControls
Contributors:
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */


(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Three;

  (function (Three) {
    Three.Controls = function (object, domElement) {
      this.object = object;
      this.domElement = domElement !== undefined ? domElement : document; // Set to false to disable this control

      this.enabled = true; // "target" sets the location of focus, where the control orbits around
      // and where it pans with respect to.

      this.target = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](); // center is old, deprecated; use "target" instead

      this.center = this.target; // This option actually enables dollying in and out; left as "zoom" for
      // backwards compatibility

      this.noZoom = false;
      this.zoomSpeed = 1.0; // Limits to how far you can dolly in and out

      this.minDistance = 0;
      this.maxDistance = 1500; //Infinity;
      // Set to true to disable this control

      this.noRotate = false;
      this.rotateSpeed = 1.0; // Set to true to disable this control

      this.noPan = false;
      this.keyPanSpeed = 40.0; // pixels moved per arrow key push
      // Set to true to automatically rotate around the target

      this.autoRotate = false;
      this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60
      // How far you can orbit vertically, upper and lower limits.
      // Range is 0 to Math.PI radians.

      this.minPolarAngle = 0; // radians

      this.maxPolarAngle = Math.PI / 2; // radians
      // Set to true to disable use of the keys

      this.noKeys = false; // The four arrow keys

      this.keys = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        BOTTOM: 40
      };
      this.cameraMovedCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
      this.needsUpdate = true; // internals

      var scope = this;
      var EPS = 0.000001;
      var rotateStart = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
      var rotateEnd = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
      var rotateDelta = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
      var panStart = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
      var panEnd = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
      var panDelta = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
      var dollyStart = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
      var dollyEnd = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
      var dollyDelta = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
      var phiDelta = 0;
      var thetaDelta = 0;
      var scale = 1;
      var pan = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
      var STATE = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_DOLLY: 4,
        TOUCH_PAN: 5
      };
      var state = STATE.NONE;

      this.controlsActive = function () {
        return state === STATE.NONE;
      };

      this.setPan = function (vec3) {
        pan = vec3;
      };

      this.panTo = function (vec3) {
        var newTarget = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](vec3.x, scope.target.y, vec3.z);
        var delta = scope.target.clone().sub(newTarget);
        pan.sub(delta);
        scope.update();
      };

      this.rotateLeft = function (angle) {
        if (angle === undefined) {
          angle = getAutoRotationAngle();
        }

        thetaDelta -= angle;
      };

      this.rotateUp = function (angle) {
        if (angle === undefined) {
          angle = getAutoRotationAngle();
        }

        phiDelta -= angle;
      }; // pass in distance in world space to move left


      this.panLeft = function (distance) {
        var panOffset = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        var te = this.object.matrix.elements; // get X column of matrix

        panOffset.set(te[0], 0, te[2]);
        panOffset.normalize();
        panOffset.multiplyScalar(-distance);
        pan.add(panOffset);
      }; // pass in distance in world space to move up


      this.panUp = function (distance) {
        var panOffset = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        var te = this.object.matrix.elements; // get Y column of matrix

        panOffset.set(te[4], 0, te[6]);
        panOffset.normalize();
        panOffset.multiplyScalar(distance);
        pan.add(panOffset);
      }; // main entry point; pass in Vector2 of change desired in pixel space,
      // right and down are positive


      this.pan = function (delta) {
        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        if (scope.object.fov !== undefined) {
          // perspective
          var position = scope.object.position;
          var offset = position.clone().sub(scope.target);
          var targetDistance = offset.length(); // half of the fov is center to top of screen

          targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0); // we actually don't use screenWidth, since perspective camera is fixed to screen height

          scope.panLeft(2 * delta.x * targetDistance / element.clientHeight);
          scope.panUp(2 * delta.y * targetDistance / element.clientHeight);
        } else if (scope.object.top !== undefined) {
          // orthographic
          scope.panLeft(delta.x * (scope.object.right - scope.object.left) / element.clientWidth);
          scope.panUp(delta.y * (scope.object.top - scope.object.bottom) / element.clientHeight);
        } else {
          // camera neither orthographic or perspective - warn user
          console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
        }

        scope.update();
      };

      this.panXY = function (x, y) {
        scope.pan(new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](x, y));
      };

      this.dollyIn = function (dollyScale) {
        if (dollyScale === undefined) {
          dollyScale = getZoomScale();
        }

        scale /= dollyScale;
      };

      this.dollyOut = function (dollyScale) {
        if (dollyScale === undefined) {
          dollyScale = getZoomScale();
        }

        scale *= dollyScale;
      };

      this.update = function () {
        var position = this.object.position;
        var offset = position.clone().sub(this.target); // angle from z-axis around y-axis

        var theta = Math.atan2(offset.x, offset.z); // angle from y-axis

        var phi = Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z), offset.y);

        if (this.autoRotate) {
          this.rotateLeft(getAutoRotationAngle());
        }

        theta += thetaDelta;
        phi += phiDelta; // restrict phi to be between desired limits

        phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, phi)); // restrict phi to be betwee EPS and PI-EPS

        phi = Math.max(EPS, Math.min(Math.PI - EPS, phi));
        var radius = offset.length() * scale; // restrict radius to be between desired limits

        radius = Math.max(this.minDistance, Math.min(this.maxDistance, radius)); // move target to panned location

        this.target.add(pan);
        offset.x = radius * Math.sin(phi) * Math.sin(theta);
        offset.y = radius * Math.cos(phi);
        offset.z = radius * Math.sin(phi) * Math.cos(theta);
        position.copy(this.target).add(offset);
        this.object.lookAt(this.target);
        thetaDelta = 0;
        phiDelta = 0;
        scale = 1;
        pan.set(0, 0, 0);
        this.cameraMovedCallbacks.fire();
        this.needsUpdate = true;
      };

      function getAutoRotationAngle() {
        return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
      }

      function getZoomScale() {
        return Math.pow(0.95, scope.zoomSpeed);
      }

      function onMouseDown(event) {
        if (scope.enabled === false) {
          return;
        }

        event.preventDefault();

        if (event.button === 0) {
          if (scope.noRotate === true) {
            return;
          }

          state = STATE.ROTATE;
          rotateStart.set(event.clientX, event.clientY);
        } else if (event.button === 1) {
          if (scope.noZoom === true) {
            return;
          }

          state = STATE.DOLLY;
          dollyStart.set(event.clientX, event.clientY);
        } else if (event.button === 2) {
          if (scope.noPan === true) {
            return;
          }

          state = STATE.PAN;
          panStart.set(event.clientX, event.clientY);
        } // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be


        scope.domElement.addEventListener('mousemove', onMouseMove, false);
        scope.domElement.addEventListener('mouseup', onMouseUp, false);
      }

      function onMouseMove(event) {
        if (scope.enabled === false) return;
        event.preventDefault();
        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        if (state === STATE.ROTATE) {
          if (scope.noRotate === true) return;
          rotateEnd.set(event.clientX, event.clientY);
          rotateDelta.subVectors(rotateEnd, rotateStart); // rotating across whole screen goes 360 degrees around

          scope.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed); // rotating up and down along whole screen attempts to go 360, but limited to 180

          scope.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
          rotateStart.copy(rotateEnd);
        } else if (state === STATE.DOLLY) {
          if (scope.noZoom === true) return;
          dollyEnd.set(event.clientX, event.clientY);
          dollyDelta.subVectors(dollyEnd, dollyStart);

          if (dollyDelta.y > 0) {
            scope.dollyIn();
          } else {
            scope.dollyOut();
          }

          dollyStart.copy(dollyEnd);
        } else if (state === STATE.PAN) {
          if (scope.noPan === true) return;
          panEnd.set(event.clientX, event.clientY);
          panDelta.subVectors(panEnd, panStart);
          scope.pan(panDelta);
          panStart.copy(panEnd);
        } // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be


        scope.update();
      }

      function onMouseUp() {
        if (scope.enabled === false) return; // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be

        scope.domElement.removeEventListener('mousemove', onMouseMove, false);
        scope.domElement.removeEventListener('mouseup', onMouseUp, false);
        state = STATE.NONE;
      }

      function onMouseWheel(event) {
        if (scope.enabled === false || scope.noZoom === true) return;
        var delta = 0;

        if (event.wheelDelta) {
          delta = event.wheelDelta;
        } else if (event.detail) {
          delta = -event.detail;
        }

        if (delta > 0) {
          scope.dollyOut();
        } else {
          scope.dollyIn();
        }

        scope.update();
      }

      function onTouchStart(event) {
        if (scope.enabled === false) {
          return;
        }

        event.preventDefault();

        if (scope.noRotate === true) {
          return;
        }

        state = STATE.ROTATE;
        rotateStart.set(event.touches[0].clientX, event.touches[0].clientY);
        scope.domElement.addEventListener('touchmove', onTouchMove, false);
        scope.domElement.addEventListener('touchend', onTouchEnd, false);
      }

      function onTouchMove(event) {
        if (scope.enabled === false) return;
        event.preventDefault();
        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        if (state === STATE.ROTATE) {
          if (scope.noRotate === true) return;
          rotateEnd.set(event.touches[0].clientX, event.touches[0].clientY);
          rotateDelta.subVectors(rotateEnd, rotateStart); // rotating across whole screen goes 360 degrees around

          scope.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed); // rotating up and down along whole screen attempts to go 360, but limited to 180

          scope.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
          rotateStart.copy(rotateEnd);
        } else if (state === STATE.DOLLY) {
          if (scope.noZoom === true) return;
          dollyEnd.set(event.touches[0].clientX, event.touches[0].clientY);
          dollyDelta.subVectors(dollyEnd, dollyStart);

          if (dollyDelta.y > 0) {
            scope.dollyIn();
          } else {
            scope.dollyOut();
          }

          dollyStart.copy(dollyEnd);
        } else if (state === STATE.PAN) {
          if (scope.noPan === true) return;
          panEnd.set(event.touches[0].clientX, event.touches[0].clientY);
          panDelta.subVectors(panEnd, panStart);
          scope.pan(panDelta);
          panStart.copy(panEnd);
        } // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be


        scope.update();
      }

      function onTouchEnd() {
        if (scope.enabled === false) return; // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be

        scope.domElement.removeEventListener('touchmove', onTouchMove, false);
        scope.domElement.removeEventListener('touchend', onTouchEnd, false);
        state = STATE.NONE;
      }

      function onKeyDown(event) {
        if (scope.enabled === false) {
          return;
        }

        if (scope.noKeys === true) {
          return;
        }

        if (scope.noPan === true) {
          return;
        }

        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('.modal-open').length) {
          return;
        }

        switch (event.keyCode) {
          case scope.keys.UP:
            scope.pan(new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](0, scope.keyPanSpeed));
            break;

          case scope.keys.BOTTOM:
            scope.pan(new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](0, -scope.keyPanSpeed));
            break;

          case scope.keys.LEFT:
            scope.pan(new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](scope.keyPanSpeed, 0));
            break;

          case scope.keys.RIGHT:
            scope.pan(new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](-scope.keyPanSpeed, 0));
            break;

          default:
            break;
        }
      }

      this.domElement.addEventListener('contextmenu', function (event) {
        event.preventDefault();
      }, false);
      this.domElement.addEventListener('mousedown', onMouseDown, false);
      this.domElement.addEventListener('mousewheel', onMouseWheel, false);
      this.domElement.addEventListener('touchstart', onTouchStart, false);
      this.domElement.addEventListener('DOMMouseScroll', onMouseWheel, false); // firefox

      document.addEventListener('keydown', onKeyDown, false);
    };
  })(Three = BP3D.Three || (BP3D.Three = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Three;

  (function (Three) {
    /**
     * Drawings on "top" of the scene. e.g. rotate arrows
     */
    Three.HUD = function (three) {
      var scope = this; // var three = three;

      var scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
      var selectedItem = null;
      var rotating = false;
      var mouseover = false; // var tolerance = 10;
      // eslint-disable-next-line no-unused-vars

      var height = 5;
      var distance = 20;
      var color = "#ffffff";
      var hoverColor = "#f1c40f";
      var activeObject = null;

      this.getScene = function () {
        return scene;
      };

      this.getObject = function () {
        return activeObject;
      };

      function init() {
        three.itemSelectedCallbacks.add(itemSelected);
        three.itemUnselectedCallbacks.add(itemUnselected);
      }

      function resetSelectedItem() {
        selectedItem = null;

        if (activeObject) {
          scene.remove(activeObject);
          activeObject = null;
        }
      }

      function itemSelected(item) {
        if (selectedItem !== item) {
          resetSelectedItem();

          if (item.allowRotate && !item.fixed) {
            selectedItem = item;
            activeObject = makeObject(selectedItem);
            scene.add(activeObject);
          }
        }
      }

      function itemUnselected() {
        resetSelectedItem();
      }

      this.setRotating = function (isRotating) {
        rotating = isRotating;
        setColor();
      };

      this.setMouseover = function (isMousedOver) {
        mouseover = isMousedOver;
        setColor();
      };

      function setColor() {
        if (activeObject) {
          activeObject.children.forEach(function (obj) {
            obj.material.color.set(getColor());
          });
        }

        three.needsUpdate();
      }

      function getColor() {
        return mouseover || rotating ? hoverColor : color;
      }

      this.update = function () {
        if (activeObject) {
          activeObject.rotation.y = selectedItem.rotation.y;
          activeObject.position.x = selectedItem.position.x;
          activeObject.position.z = selectedItem.position.z;
          activeObject.position.y = selectedItem.position.y - selectedItem.halfSize.y;
        }
      };

      function makeLineGeometry(item) {
        var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["Geometry"]();
        geometry.vertices.push(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0), rotateVector(item));
        return geometry;
      }

      function rotateVector(item) {
        var vec = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, Math.max(item.halfSize.x, item.halfSize.z) + 1.4 + distance);
        return vec;
      }

      function centreVector(item) {
        var vec = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0);
        return vec;
      }

      function makeLineMaterial(rotating) {
        var mat = new three__WEBPACK_IMPORTED_MODULE_0__["LineBasicMaterial"]({
          color: getColor(),
          linewidth: 3
        });
        return mat;
      }

      function makeCone(item) {
        var coneGeo = new three__WEBPACK_IMPORTED_MODULE_0__["CylinderGeometry"](5, 0, 10);
        var coneMat = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
          color: getColor()
        });
        var cone = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](coneGeo, coneMat);
        cone.position.copy(rotateVector(item));
        cone.rotation.x = -Math.PI / 2.0;
        return cone;
      }

      function makeSphere(item) {
        var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["SphereGeometry"](4, 16, 16);
        var material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
          color: getColor()
        });
        var sphere = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
        sphere.position.copy(centreVector(item));
        return sphere;
      }

      function makeObject(item) {
        var object = new three__WEBPACK_IMPORTED_MODULE_0__["Object3D"]();
        var line = new three__WEBPACK_IMPORTED_MODULE_0__["Line"](makeLineGeometry(item), makeLineMaterial(scope.rotating), three__WEBPACK_IMPORTED_MODULE_0__["LineSegments"]);
        var cone = makeCone(item);
        var sphere = makeSphere(item);
        object.add(line);
        object.add(cone);
        object.add(sphere);
        object.rotation.y = item.rotation.y;
        object.position.x = item.position.x;
        object.position.z = item.position.z;
        object.position.y = item.position.y - item.halfSize.y;
        return object;
      }

      init();
    };
  })(Three = BP3D.Three || (BP3D.Three = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Three;

  (function (Three) {
    Three.Main = function (model, element, canvasElement, opts) {
      var scope = this;
      var options = {
        resize: true,
        pushHref: false,
        spin: true,
        spinSpeed: .00002,
        clickPan: true,
        canMoveFixedItems: false
      }; // override with manually set options

      for (var opt in options) {
        if (options.hasOwnProperty(opt) && opts.hasOwnProperty(opt)) {
          options[opt] = opts[opt];
        }
      } // var model = model;


      var scene = model.scene;
      this.element = jquery__WEBPACK_IMPORTED_MODULE_2___default()(element);
      var domElement;
      var camera;
      var renderer; // eslint-disable-next-line no-unused-expressions

      this.controls; // var canvas;

      var controller; // eslint-disable-next-line no-unused-vars

      var floorplan; //var canvas;
      //var canvasElement = canvasElement;

      var needsUpdate = false;
      var lastRender = Date.now();
      var mouseOver = false;
      var hasClicked = false;
      var hud; // eslint-disable-next-line no-unused-expressions

      this.heightMargin; // eslint-disable-next-line no-unused-expressions

      this.widthMargin; // eslint-disable-next-line no-unused-expressions

      this.elementHeight; // eslint-disable-next-line no-unused-expressions

      this.elementWidth;
      this.itemSelectedCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks(); // item

      this.itemUnselectedCallbacks = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();
      this.wallClicked = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks(); // wall

      this.floorClicked = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks(); // floor

      this.nothingClicked = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.Callbacks();

      function init() {
        // THREE.ImageUtils.crossOrigin = "";
        // THREE.TextureLoader.setCrossOrigin('anonymous')
        three__WEBPACK_IMPORTED_MODULE_0__["Cache"].enabled = true;
        domElement = scope.element.get(0); // Container

        camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](45, 1, 1, 10000);
        renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
          antialias: true,
          preserveDrawingBuffer: true // required to support .toDataURL()

        });
        renderer.autoClear = false;
        renderer.shadowMap.enabled = true;
        renderer.shadowMapSoft = true;
        renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_0__["PCFSoftShadowMap"]; // eslint-disable-next-line no-unused-vars

        var skybox = new Three.Skybox(scene);
        scope.controls = new Three.Controls(camera, domElement);
        hud = new Three.HUD(scope);
        controller = new Three.Controller(scope, model, camera, scope.element, scope.controls, hud);
        domElement.appendChild(renderer.domElement); // handle window resizing

        scope.updateWindowSize();

        if (options.resize) {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).resize(scope.updateWindowSize);
        } // setup camera nicely


        scope.centerCamera();
        model.floorplan.fireOnUpdatedRooms(scope.centerCamera); // eslint-disable-next-line no-unused-vars

        var lights = new Three.Lights(scene, model.floorplan);
        floorplan = new Three.Floorplan(scene, model.floorplan, scope.controls);
        animate();
        scope.element.mouseenter(function () {
          mouseOver = true;
        }).mouseleave(function () {
          mouseOver = false;
        }).click(function () {
          hasClicked = true;
        });
        scope.element.on("touchstart", function () {
          mouseOver = true;
          hasClicked = true;
        });
        scope.element.on("touchend", function () {
          mouseOver = false;
        }); //canvas = new ThreeCanvas(canvasElement, scope);
      }

      function spin() {
        if (options.spin && !mouseOver && !hasClicked) {
          var theta = 2 * Math.PI * options.spinSpeed * (Date.now() - lastRender);
          scope.controls.rotateLeft(theta);
          scope.controls.update();
        }
      }

      this.dataUrl = function () {
        var dataUrl = renderer.domElement.toDataURL("image/png");
        return dataUrl;
      };

      this.stopSpin = function () {
        hasClicked = true;
      };

      this.options = function () {
        return options;
      };

      this.getModel = function () {
        return model;
      };

      this.getScene = function () {
        return scene;
      };

      this.getController = function () {
        return controller;
      };

      this.getCamera = function () {
        return camera;
      };

      this.needsUpdate = function () {
        needsUpdate = true;
      };

      function shouldRender() {
        // Do we need to draw a new frame
        if (scope.controls.needsUpdate || controller.needsUpdate || needsUpdate || model.scene.needsUpdate) {
          scope.controls.needsUpdate = false;
          controller.needsUpdate = false;
          needsUpdate = false;
          model.scene.needsUpdate = false;
          return true;
        } else {
          return false;
        }
      }

      function render() {
        spin();

        if (shouldRender()) {
          renderer.clear();
          renderer.render(scene.getScene(), camera);
          renderer.clearDepth();
          renderer.render(hud.getScene(), camera);
        }

        lastRender = Date.now();
      }

      ;

      function animate() {
        var delay = 50;
        setTimeout(function () {
          requestAnimationFrame(animate);
        }, delay);
        render();
      }

      ;

      this.rotatePressed = function () {
        controller.rotatePressed();
      };

      this.rotateReleased = function () {
        controller.rotateReleased();
      };

      this.setCursorStyle = function (cursorStyle) {
        domElement.style.cursor = cursorStyle;
      };

      this.updateWindowSize = function () {
        scope.heightMargin = scope.element.offset().top;
        scope.widthMargin = scope.element.offset().left;
        scope.elementWidth = scope.element.innerWidth();

        if (options.resize) {
          scope.elementHeight = window.innerHeight - scope.heightMargin;
        } else {
          scope.elementHeight = scope.element.innerHeight();
        }

        camera.aspect = scope.elementWidth / scope.elementHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(scope.elementWidth, scope.elementHeight);
        needsUpdate = true;
      };

      this.centerCamera = function () {
        var yOffset = 150.0;
        var pan = model.floorplan.getCenter();
        pan.y = yOffset;
        scope.controls.target = pan;
        var distance = model.floorplan.getSize().z * 1.5;
        var offset = pan.clone().add(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, distance, distance)); //scope.controls.setOffset(offset);

        camera.position.copy(offset);
        scope.controls.update();
      }; // projects the object's center point into x,y screen coords
      // x,y are relative to top left corner of viewer


      this.projectVector = function (vec3, ignoreMargin) {
        ignoreMargin = ignoreMargin || false;
        var widthHalf = scope.elementWidth / 2;
        var heightHalf = scope.elementHeight / 2;
        var vector = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        vector.copy(vec3);
        vector.project(camera);
        var vec2 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
        vec2.x = vector.x * widthHalf + widthHalf;
        vec2.y = -(vector.y * heightHalf) + heightHalf;

        if (!ignoreMargin) {
          vec2.x += scope.widthMargin;
          vec2.y += scope.heightMargin;
        }

        return vec2;
      };

      init();
    };
  })(Three = BP3D.Three || (BP3D.Three = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  /** Blueprint3D core application. */
  var Blueprint3d = function () {
    /** Creates an instance.
     * @param options The initialization options.
     */
    function Blueprint3d(options) {
      this.model = new BP3D.Model.Model(options.textureDir);
      this.three = new BP3D.Three.Main(this.model, options.threeElement, options.threeCanvasElement, {});

      if (!options.widget) {
        this.floorplanner = new BP3D.Floorplanner.Floorplanner(options.floorplannerElement, this.model.floorplan);
      } else {
        this.three.getController().enabled = false;
      }
    }

    return Blueprint3d;
  }();

  BP3D.Blueprint3d = Blueprint3d;
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Core;

  (function (Core) {
    /** Enumeration of log contexts. */
    (function (ELogContext) {
      /** Log nothing. */
      ELogContext[ELogContext["None"] = 0] = "None";
      /** Log all. */

      ELogContext[ELogContext["All"] = 1] = "All";
      /** 2D interaction */

      ELogContext[ELogContext["Interaction2d"] = 2] = "Interaction2d";
      /** Interior items */

      ELogContext[ELogContext["Item"] = 3] = "Item";
      /** Wall (connectivity) */

      ELogContext[ELogContext["Wall"] = 4] = "Wall";
      /** Room(s) */

      ELogContext[ELogContext["Room"] = 5] = "Room";
    })(Core.ELogContext || (Core.ELogContext = {}));

    var ELogContext = Core.ELogContext;
    /** Enumeration of log levels. */

    (function (ELogLevel) {
      /** An information. */
      ELogLevel[ELogLevel["Information"] = 0] = "Information";
      /** A warning. */

      ELogLevel[ELogLevel["Warning"] = 1] = "Warning";
      /** An error. */

      ELogLevel[ELogLevel["Error"] = 2] = "Error";
      /** A fatal error. */

      ELogLevel[ELogLevel["Fatal"] = 3] = "Fatal";
      /** A debug message. */

      ELogLevel[ELogLevel["Debug"] = 4] = "Debug";
    })(Core.ELogLevel || (Core.ELogLevel = {}));

    var ELogLevel = Core.ELogLevel;
    /** The current log context. To be set when initializing the Application. */

    Core.logContext = ELogContext.None;
    /** Pre-check if logging for specified context and/or level is enabled.
     * This may be used to avoid compilation of complex logs.
     * @param context The log context to be verified.
     * @param level The log level to be verified.
     * @returns If this context/levels is currently logged.
     */

    function isLogging(context, level) {
      return Core.logContext === ELogContext.All || Core.logContext === context || level === ELogLevel.Warning || level === ELogLevel.Error || level === ELogLevel.Fatal;
    }

    Core.isLogging = isLogging;
    /** Log the passed message in the context and with given level.
     * @param context The context in which the message should be logged.
     * @param level The level of the message.
     * @param message The messages to be logged.
     */

    function log(context, level, message) {
      if (isLogging(context, level) === false) {
        return;
      }

      var tPrefix = "";

      switch (level) {
        case ELogLevel.Information:
          tPrefix = "[INFO_] ";
          break;

        case ELogLevel.Warning:
          tPrefix = "[WARNG] ";
          break;

        case ELogLevel.Error:
          tPrefix = "[ERROR] ";
          break;

        case ELogLevel.Fatal:
          tPrefix = "[FATAL] ";
          break;

        case ELogLevel.Debug:
          tPrefix = "[DEBUG] ";
          break;

        default:
          break;
      }

      console.log(tPrefix + message);
    }

    Core.log = log;
  })(Core = BP3D.Core || (BP3D.Core = {}));
})(BP3D || (BP3D = {}));

(function (BP3D) {
  // eslint-disable-next-line no-unused-vars
  var Core;

  (function (Core) {
    /** Version information. */
    var Version = function () {
      function Version() {}
      /** The informal version. */


      Version.getInformalVersion = function () {
        return "1.0 Beta 1";
      };
      /** The technical version. */


      Version.getTechnicalVersion = function () {
        return "1.0.0.1";
      };

      return Version;
    }();

    Core.Version = Version;
  })(Core = BP3D.Core || (BP3D.Core = {}));
})(BP3D || (BP3D = {}));

console.log("Blueprint3D " + BP3D.Core.Version.getInformalVersion() + " (" + BP3D.Core.Version.getTechnicalVersion() + ")");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _LuminescenceStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LuminescenceStore */ "./src/LuminescenceStore.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var _jsxFileName = "/Users/cynthiadu/Github/roomdesign/src/index.js";







const Root = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
  store: _LuminescenceStore__WEBPACK_IMPORTED_MODULE_5__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(Root, document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/cynthiadu/Github/roomdesign/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/cynthiadu/Github/roomdesign/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/cynthiadu/Github/roomdesign/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map