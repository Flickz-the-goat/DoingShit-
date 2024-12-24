/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   elist: () => (/* binding */ elist),\n/* harmony export */   plist: () => (/* binding */ plist),\n/* harmony export */   tlist: () => (/* binding */ tlist)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./styles.css\");\n/* harmony import */ var _src_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/project.js */ \"./src/project.js\");\n/* harmony import */ var _src_tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/tasks.js */ \"./src/tasks.js\");\n/* harmony import */ var _src_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/events.js */ \"./src/events.js\");\n\r\n\r\n\r\n\r\n//open the module\r\nconst button = document.querySelector(\".add\");\r\nconst module = document.querySelector(\".module\");\r\nconst list = document.querySelector(\".list\");\r\n\r\nbutton.addEventListener(\"click\", ()=>{\r\n    module.show(); \r\n});\r\n\r\n//submit button and form information get\r\nconst submit = document.querySelector(\".submit\");\r\nfunction Task(taskName, taskDescription, priority, type, dueDate){ //task object \r\n    taskName = taskName; \r\n    taskDescription = taskDescription;\r\n    priority = priority;\r\n    type = type;\r\n    dueDate = dueDate; \r\n    \r\n    return {taskName, taskDescription, priority, type, dueDate};\r\n}\r\nconst plist = []; //array of lists \r\nconst elist = [];\r\nconst tlist = [];\r\nsubmit.addEventListener(\"click\", (e) =>{\r\n    e.preventDefault(); //prevent form submission\r\n    module.close(); \r\n    const taskName = document.getElementById(\"tn\").value; \r\n    const taskDescription = document.getElementById(\"dn\").value; \r\n    const priority = (()=>{\r\n        if(document.getElementById(\"high\").checked){\r\n            return \"high\";\r\n        }else if(document.getElementById(\"medium\").checked){\r\n            return \"medium\";\r\n        }else{\r\n            return \"low\";\r\n        }\r\n    })();\r\n    let type = \"\"; \r\n    const dueDate = 0; \r\n    if(document.getElementById(\"p\").checked){\r\n        type = \"Project\";\r\n        plist.push(Task(taskName, taskDescription, priority, type, dueDate)); //put the list in the array of lists \r\n    }else if(document.getElementById(\"e\").checked){\r\n        type = \"Events\";\r\n        elist.push(Task(taskName, taskDescription, priority, type, dueDate)); //put the list in the array of lists \r\n    }else{\r\n        type = \"Tasks\";\r\n        tlist.push(Task(taskName, taskDescription, priority, type, dueDate)); //put the list in the array of lists \r\n    } \r\n});\r\n\r\n\r\n\r\n//event listener for the navigation bar and switching to the desired list \r\nconst p = document.querySelector(\"#PS\");\r\nconst e = document.querySelector(\"#ES\");\r\nconst t = document.querySelector(\"#TS\");\r\n\r\np.addEventListener(\"click\", () =>{\r\n    list.innerHTML = \"\"; \r\n    (0,_src_project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); \r\n});\r\ne.addEventListener(\"click\",()=>{\r\n     list.innerHTML = \"\"; \r\n    (0,_src_events_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n});\r\nt.addEventListener(\"click\", ()=>{\r\n    list.innerHTML = \"\"; \r\n    (0,_src_tasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); \r\n});\n\n//# sourceURL=webpack://doingshit-/./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    margin:0;\r\n    padding:0;\r\n    box-sizing: border-box;\r\n}\r\nbody{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n    justify-content: center;\r\n}\r\n.header, .footer{\r\n    display: flex;\r\n    background-color: #f43f5e; \r\n    flex: .1; \r\n    align-items: center;\r\n    font-size: 24px; \r\n    color: white; \r\n    font-family: 'Courier New', Courier, monospace;\r\n    width:100%;\r\n    justify-content: space-between;\r\n    box-shadow: 0px 5px 5px rgba(0,0,0,0.2);\r\n}\r\n.header > h1, .footer > h3{\r\n    padding: 20px;\r\n}\r\n.content{\r\n    flex:.8;\r\n    display:flex;\r\n    flex-direction: column;\r\n}\r\n.coolColors{\r\n    flex: .8;\r\n    width:100%;\r\n    height: 100%;\r\n    background-color: #be123c;\r\n    z-index: 1;\r\n    box-shadow: -2px 0px 10px rgba(0,0,0,0.2);\r\n    border-radius: 10px;\r\n    display: flex;\r\n    justify-content: end;\r\n    align-items: center;\r\n    padding: 20px;\r\n}\r\nnav{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px; \r\n    flex: .1;\r\n    color: #be123c; \r\n    font-family: 'Courier New', Courier, monospace;\r\n    flex:.1;\r\n}\r\n.list{\r\n    flex: 0.9;\r\n    display: flex;\r\n    flex-direction: column; \r\n    gap: 10px;\r\n    background-color: #881337;\r\n    width:70%;\r\n    align-self: center;\r\n    padding: 20px;\r\n}\r\n.add{\r\n    padding: 20px;\r\n    border: none;\r\n    border-radius: 30px;\r\n    box-shadow: 0px 5px 5px rgba(0,0,0,0.2);\r\n    background-color: #4c0519;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    cursor: pointer;\r\n}\r\n.module[open]{\r\n    display:flex;\r\n    flex-direction: column;\r\n    align-self: center;\r\n    margin-left: 40%;\r\n    padding: 10px;\r\n    border: none; \r\n    background-color: #f43f5e;\r\n    width: 30%;\r\n    height: 65%;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nform{\r\n    width:100%;\r\n    height: 100%;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    font-size: 24px;\r\n}\r\ninput{\r\n    width:100%;\r\n    border:none;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n    font-weight: bold;\r\n}\r\ninput:focus{\r\n    outline: none;\r\n    border: 2px solid #be123c;\r\n    background-color: #881337;\r\n    color: white;\r\n    box-shadow: 0px 2px 3px rgba(0,0,0,0.2);\r\n}\r\ninput:hover{\r\n    box-shadow: 0px 2px 3px rgba(0,0,0,0.2);\r\n}\r\n.priority, .type{\r\n    display: flex;\r\n}\r\n.submit{\r\n    padding: 20px;\r\n    border: none;\r\n    border-radius: 30px;\r\n    box-shadow: 0px 5px 5px rgba(0,0,0,0.2);\r\n    background-color: #4c0519;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    cursor: pointer;\r\n}\r\nnav > div{\r\n    cursor: pointer;\r\n}\r\n.list{\r\n    padding:10px; \r\n}\r\n.taskContainer{\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: white;\r\n    background-color: #f43f5e;\r\n    font-weight: bold;\r\n    padding:15px;\r\n    font-size: 24px;\r\n    border-radius: 20px;\r\n}\r\n.done{\r\n    padding:10px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    background-color: #4c0519;\r\n    color: white;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://doingshit-/./styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://doingshit-/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://doingshit-/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://doingshit-/./styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://doingshit-/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://doingshit-/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://doingshit-/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://doingshit-/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://doingshit-/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://doingshit-/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   events: () => (/* binding */ events)\n/* harmony export */ });\n/* harmony import */ var C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./index.js\");\n//imports \r\n \r\n\r\n//get the lists \r\nconst l = document.querySelector(\".list\"); \r\n\r\nfunction events(){\r\n    for(let i = 0; i < C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.elist.length; i++){\r\n        const taskContainer = document.createElement(\"div\"); //container for task\r\n        taskContainer.classList.add(\"taskContainer\");\r\n\r\n        const taskName = document.createElement(\"div\");\r\n        taskName.classList.add(\"taskName\");\r\n        const taskDescription = document.createElement(\"div\");\r\n        taskDescription.classList.add(\"taskDescription\");\r\n        const priority = document.createElement(\"div\");\r\n        priority.classList.add(\"priorityVal\");\r\n        const type = document.createElement(\"div\");\r\n        type.classList.add(\"typeVal\");\r\n        const dueDate = document.createElement(\"div\");\r\n        dueDate.classList.add(\"dueDateVal\");\r\n\r\n        taskName.textContent = C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.elist[i].taskName;\r\n        taskDescription.textContent = C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.elist[i].taskDescription;\r\n        priority.textContent = C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.elist[i].priority; \r\n        type.textContent = C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.elist[i].type;\r\n        dueDate.textContent = C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.elist[i].dueDate; \r\n\r\n        const done = document.createElement(\"button\");\r\n        done.type = \"button\";\r\n        done.classList.add(\"done\");\r\n        done.textContent = \"Done\";\r\n        \r\n        taskContainer.appendChild(done);\r\n        taskContainer.appendChild(taskName);\r\n        taskContainer.appendChild(taskDescription);\r\n        taskContainer.appendChild(priority);\r\n        taskContainer.appendChild(type);\r\n        taskContainer.appendChild(dueDate);\r\n\r\n        l.appendChild(taskContainer); \r\n\r\n        done.addEventListener(\"click\", () =>{\r\n            taskContainer.remove(); \r\n        });\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events); \r\n\n\n//# sourceURL=webpack://doingshit-/./src/events.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   project: () => (/* binding */ project)\n/* harmony export */ });\n/* harmony import */ var C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./index.js\");\n//imports \r\n \r\n\r\n//get the lists \r\nconst l = document.querySelector(\".list\"); \r\n\r\nfunction project(){\r\n    for(let i = 0; i < C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.plist.length; i++){\r\n        const taskContainer = document.createElement(\"div\"); //container for task\r\n        taskContainer.classList.add(\"taskContainer\");\r\n\r\n        const taskName = document.createElement(\"div\");\r\n        taskName.classList.add(\"taskName\");\r\n        const taskDescription = document.createElement(\"div\");\r\n        taskDescription.classList.add(\"taskDescription\");\r\n        const priority = document.createElement(\"div\");\r\n        priority.classList.add(\"priorityVal\");\r\n        const type = document.createElement(\"div\");\r\n        type.classList.add(\"typeVal\");\r\n        const dueDate = document.createElement(\"div\");\r\n        dueDate.classList.add(\"dueDateVal\");\r\n\r\n        taskName.textContent = C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.plist[i].taskName;\r\n        taskDescription.textContent = C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.plist[i].taskDescription;\r\n        priority.textContent = C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.plist[i].priority; \r\n        type.textContent = C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.plist[i].type;\r\n        dueDate.textContent = C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.plist[i].dueDate; \r\n\r\n        const done = document.createElement(\"button\");\r\n        done.type = \"button\";\r\n        done.classList.add(\"done\");\r\n        done.textContent = \"Done\";\r\n        \r\n        taskContainer.appendChild(done);\r\n        taskContainer.appendChild(taskName);\r\n        taskContainer.appendChild(taskDescription);\r\n        taskContainer.appendChild(priority);\r\n        taskContainer.appendChild(type);\r\n        taskContainer.appendChild(dueDate);\r\n\r\n        l.appendChild(taskContainer); \r\n\r\n        done.addEventListener(\"click\", () =>{\r\n            taskContainer.remove(); \r\n        });\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project); \r\n\n\n//# sourceURL=webpack://doingshit-/./src/project.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./index.js\");\n//imports \r\n \r\n\r\n//get the lists \r\nconst l = document.querySelector(\".list\"); \r\n\r\nfunction tasks(){\r\n    for(let i = 0; i < C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.tlist.length; i++){\r\n        const taskContainer = document.createElement(\"div\"); //container for task\r\n        taskContainer.classList.add(\"taskContainer\");\r\n\r\n        const taskName = document.createElement(\"div\");\r\n        taskName.classList.add(\"taskName\");\r\n        const taskDescription = document.createElement(\"div\");\r\n        taskDescription.classList.add(\"taskDescription\");\r\n        const priority = document.createElement(\"div\");\r\n        priority.classList.add(\"priorityVal\");\r\n        const type = document.createElement(\"div\");\r\n        type.classList.add(\"typeVal\");\r\n        const dueDate = document.createElement(\"div\");\r\n        dueDate.classList.add(\"dueDateVal\");\r\n\r\n        taskName.textContent = C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.tlist[i].taskName;\r\n        taskDescription.textContent = C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.tlist[i].taskDescription;\r\n        priority.textContent = C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.tlist[i].priority; \r\n        type.textContent = C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.tlist[i].type;\r\n        dueDate.textContent = C_Users_aniau_repos_DoingShit_index_js__WEBPACK_IMPORTED_MODULE_0__.tlist[i].dueDate; \r\n\r\n        const done = document.createElement(\"button\");\r\n        done.type = \"button\";\r\n        done.classList.add(\"done\");\r\n        done.textContent = \"Done\";\r\n        \r\n        taskContainer.appendChild(done);\r\n        taskContainer.appendChild(taskName);\r\n        taskContainer.appendChild(taskDescription);\r\n        taskContainer.appendChild(priority);\r\n        taskContainer.appendChild(type);\r\n        taskContainer.appendChild(dueDate);\r\n\r\n        l.appendChild(taskContainer); \r\n\r\n        done.addEventListener(\"click\", () =>{\r\n            taskContainer.remove(); \r\n        });\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks); \r\n\n\n//# sourceURL=webpack://doingshit-/./src/tasks.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;