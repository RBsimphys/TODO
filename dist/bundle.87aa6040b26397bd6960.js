/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMstuff.js":
/*!*************************!*\
  !*** ./src/DOMstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dataTable = document.querySelector(".job-aggregator-table");
function displayJobs(jobData) {
  var divContainer = [];
  for (var k in jobData) {
    if (jobData[k]) {
      var div = document.createElement("div");
      div.textContent = jobData[k];
      div.classList.add("cell");
      divContainer.push(div);
    }
  }
  divContainer.forEach(function (e) {
    dataTable.appendChild(e);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayJobs);

/***/ }),

/***/ "./src/jobCreator.js":
/*!***************************!*\
  !*** ./src/jobCreator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var container = document.querySelector(".main-container");
var job = /*#__PURE__*/function () {
  function job(data) {
    _classCallCheck(this, job);
    this.title = data.title;
    this.company = data.company;
    this.link = data.link;
    this.status = data.status;
    this.date = data.date;
    this.category = data.category;
  }
  _createClass(job, [{
    key: "Data",
    get: function get() {
      return {
        title: this.title,
        company: this.company,
        link: this.link,
        status: this.status,
        sumbmissionDate: this.date,
        category: this.category
      };
    }
  }, {
    key: "Status",
    set: function set(newStatus) {
      this.status = newStatus;
    }
  }]);
  return job;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (job);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Merriweather', serif;\n\n}\n\n\n:root {\n    --blue: #1670c9;\n    --white: #FFFFFF;\n    --main-font: #000022;\n    --main-bg-color: #FFFFFF;\n    --search-bg-color: #FFFFFF;\n    --body-bg-color: #FFFFFF;\n}\n\n.content {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 8fr;\n    grid-template-rows: 1fr 2fr 3fr 2fr;\n}\n\n\n/*****************HEADER**********************/\n#logo {\n    margin-left: 2%;\n}\n\n\n#search-bar {\n    background-color: var(--search-bg-color);\n    text-align: left;\n    color: var(--main-font);\n    width: 30%;\n    height: 70%;\n    max-height: 50px;\n    border-radius: 10px;\n    font-size: 1em;\n    padding-left: 10px;\n    margin-left: 15%;\n}\n\n.nav {\n    grid-column: 1/3;\n    grid-row: 1/2;\n    display: flex;\n    align-items: center;\n    background-color: var(--main-bg-color);\n    width: 100%;\n    border-bottom: solid rgb(145, 145, 145) 1px;\n}\n\n\n\n/******************** BODY *****************************/\n/*...............form  container......................*/\n.form-container {\n    grid-column: 2/3;\n    grid-row: 2/3;\n    max-height: fit-content;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto;\n}\n\n/* application form */\n#job-form {\n    grid-column: 1/2;\n    display: flex;\n    flex-direction: column;\n    font-size: 1em;\n    gap: 10px;\n    margin-left: 30px;\n    margin-bottom: 40px;\n}\n\nlegend {\n    box-shadow: inset 0 -0.1em black;\n    width: fit-content;\n    font-size: 1.5em;\n}\n\n#job-form .input-container {\n    display: flex;\n    flex-direction: column;\n    min-width: none;\n    width: 74%;\n    max-width: 300px;\n}\n\n#job-form input,\nselect {\n    min-height: 30px;\n}\n\n.input-container-row {\n    display: flex;\n    width: 65%;\n    max-width: 300px;\n}\n\n.input-container-row>* {\n    flex-basis: 50%;\n}\n\n[type=\"submit\"] {\n    width: 74%;\n    max-width: 300px;\n    background-color: whitesmoke;\n    border: solid 1.5px black;\n}\n\n/*spreadsheet of form input*/\n.job-aggregator-table {\n    grid-column: 1/3;\n    grid-row: 3/4;\n\n    width: 70%;\n    margin-left: 10%;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 2%;\n}\n.job-aggregator-table>*{\n    display: flex;\n    padding: 0.5%;\n    align-items: center;\n    gap: 50px;\n    border-radius: 10px;\n}\n.job{\n    border: 2px grey solid;\n}\n.job:hover{\n    box-shadow: 2px 2px #2b3030,-2px -2px #2b3030 ;\n}\n#table-status{\n    align-self: flex-start;\n    background:white; \n    border: solid gray 0.2px;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n}\n\n\n/******************* SIDE BAR *************************/\n.sidebar {\n    grid-column: 1/2;\n    grid-row: 2/3;\n    background-color: var(--main-bg-color);\n    padding: 5%;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    font-size: 1.4em;\n}\n\n.sidebar>* {\n    border: solid black 1px;\n    padding: 20px;\n}\n\n/********************FOOTER**************************/\nfooter {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter>* {\n    font-size: 1em;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAGA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;IACT,kCAAkC;;AAEtC;;;AAGA;IACI,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,wBAAwB;IACxB,0BAA0B;IAC1B,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;AACvC;;;AAGA,8CAA8C;AAC9C;IACI,eAAe;AACnB;;;AAGA;IACI,wCAAwC;IACxC,gBAAgB;IAChB,uBAAuB;IACvB,UAAU;IACV,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,sCAAsC;IACtC,WAAW;IACX,2CAA2C;AAC/C;;;;AAIA,wDAAwD;AACxD,uDAAuD;AACvD;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;;IAEvB,aAAa;IACb,8BAA8B;IAC9B,wBAAwB;AAC5B;;AAEA,qBAAqB;AACrB;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,SAAS;IACT,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;IAChC,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,UAAU;IACV,gBAAgB;AACpB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,4BAA4B;IAC5B,yBAAyB;AAC7B;;AAEA,4BAA4B;AAC5B;IACI,gBAAgB;IAChB,aAAa;;IAEb,UAAU;IACV,gBAAgB;;IAEhB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,WAAW;AACf;AACA;IACI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,8CAA8C;AAClD;AACA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,wBAAwB;IACxB,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;;AAGA,uDAAuD;AACvD;IACI,gBAAgB;IAChB,aAAa;IACb,sCAAsC;IACtC,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,aAAa;AACjB;;AAEA,qDAAqD;AACrD;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@900&display=swap');\n\n\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Merriweather', serif;\n\n}\n\n\n:root {\n    --blue: #1670c9;\n    --white: #FFFFFF;\n    --main-font: #000022;\n    --main-bg-color: #FFFFFF;\n    --search-bg-color: #FFFFFF;\n    --body-bg-color: #FFFFFF;\n}\n\n.content {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 8fr;\n    grid-template-rows: 1fr 2fr 3fr 2fr;\n}\n\n\n/*****************HEADER**********************/\n#logo {\n    margin-left: 2%;\n}\n\n\n#search-bar {\n    background-color: var(--search-bg-color);\n    text-align: left;\n    color: var(--main-font);\n    width: 30%;\n    height: 70%;\n    max-height: 50px;\n    border-radius: 10px;\n    font-size: 1em;\n    padding-left: 10px;\n    margin-left: 15%;\n}\n\n.nav {\n    grid-column: 1/3;\n    grid-row: 1/2;\n    display: flex;\n    align-items: center;\n    background-color: var(--main-bg-color);\n    width: 100%;\n    border-bottom: solid rgb(145, 145, 145) 1px;\n}\n\n\n\n/******************** BODY *****************************/\n/*...............form  container......................*/\n.form-container {\n    grid-column: 2/3;\n    grid-row: 2/3;\n    max-height: fit-content;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto;\n}\n\n/* application form */\n#job-form {\n    grid-column: 1/2;\n    display: flex;\n    flex-direction: column;\n    font-size: 1em;\n    gap: 10px;\n    margin-left: 30px;\n    margin-bottom: 40px;\n}\n\nlegend {\n    box-shadow: inset 0 -0.1em black;\n    width: fit-content;\n    font-size: 1.5em;\n}\n\n#job-form .input-container {\n    display: flex;\n    flex-direction: column;\n    min-width: none;\n    width: 74%;\n    max-width: 300px;\n}\n\n#job-form input,\nselect {\n    min-height: 30px;\n}\n\n.input-container-row {\n    display: flex;\n    width: 65%;\n    max-width: 300px;\n}\n\n.input-container-row>* {\n    flex-basis: 50%;\n}\n\n[type=\"submit\"] {\n    width: 74%;\n    max-width: 300px;\n    background-color: whitesmoke;\n    border: solid 1.5px black;\n}\n\n/*spreadsheet of form input*/\n.job-aggregator-table {\n    grid-column: 1/3;\n    grid-row: 3/4;\n\n    width: 70%;\n    margin-left: 10%;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 2%;\n}\n.job-aggregator-table>*{\n    display: flex;\n    padding: 0.5%;\n    align-items: center;\n    gap: 50px;\n    border-radius: 10px;\n}\n.job{\n    border: 2px grey solid;\n}\n.job:hover{\n    box-shadow: 2px 2px #2b3030,-2px -2px #2b3030 ;\n}\n#table-status{\n    align-self: flex-start;\n    background:white; \n    border: solid gray 0.2px;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n}\n\n\n/******************* SIDE BAR *************************/\n.sidebar {\n    grid-column: 1/2;\n    grid-row: 2/3;\n    background-color: var(--main-bg-color);\n    padding: 5%;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    font-size: 1.4em;\n}\n\n.sidebar>* {\n    border: solid black 1px;\n    padding: 20px;\n}\n\n/********************FOOTER**************************/\nfooter {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter>* {\n    font-size: 1em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _jobCreator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobCreator.js */ "./src/jobCreator.js");
/* harmony import */ var _DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMstuff.js */ "./src/DOMstuff.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var inputs = Array.from(document.querySelectorAll("[data-name=\"input\"]"));
var addJobForm = document.getElementById('job-form');
var jobAggregator = document.getElementById('job-aggregator');
var errorElement = document.getElementById('error');
var jobDataBase = [];

// event listeners 
document.addEventListener('DOMContentLoaded', function () {
  addJobForm.addEventListener('submit', collectData);
});
var collectData = function collectData(event) {
  event.preventDefault();
  var data = inputs.reduce(function (acc, curr, index) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, curr.id, curr.value));
  }, {});
  jobDataBase.push(data);
  console.table(jobDataBase, jobAggregator);
  renderData(jobDataBase, jobAggregator);
  addJobForm.reset();
};
function renderData(dataBase, container) {
  for (var i = 0; i < dataBase.length; i++) {}
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.87aa6040b26397bd6960.js.map