(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["strange_attractor_explorer"],{

/***/ "./pkg sync recursive":
/*!******************!*\
  !*** ./pkg sync ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./pkg sync recursive\";\n\n//# sourceURL=webpack:///./pkg_sync?");

/***/ }),

/***/ "./pkg/strange_attractor_explorer.js":
/*!*******************************************!*\
  !*** ./pkg/strange_attractor_explorer.js ***!
  \*******************************************/
/*! exports provided: init_image_data, init_attractor, init_lyapunov, init, __widl_f_log_1_, __widl_f_get_element_by_id_Document, __widl_instanceof_HTMLCanvasElement, __widl_f_set_width_HTMLCanvasElement, __widl_f_set_height_HTMLCanvasElement, __widl_instanceof_Window, __widl_f_document_Window, __wbg_newnoargs_4b1bc9d06177648d, __wbg_call_b1011dd6b074a84c, __wbg_new_78b2a28f79ef6577, __wbg_call_89b45155b3b4485b, __wbg_self_7d468a665f0b9fd4, __wbg_crypto_fb04796ca787f72a, __wbg_getRandomValues_6cfbc78e64667b14, __wbg_getRandomValues_3b18d12e42acb2cf, __wbg_require_28466e53549c4fc7, __wbg_randomFillSync_9c9a28bbbbc171c7, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbindgen_is_undefined, __wbindgen_jsval_eq, Lyapunov, Image, Clifford, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init_image_data\", function() { return init_image_data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init_attractor\", function() { return init_attractor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init_lyapunov\", function() { return init_lyapunov; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_log_1_\", function() { return __widl_f_log_1_; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_element_by_id_Document\", function() { return __widl_f_get_element_by_id_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_HTMLCanvasElement\", function() { return __widl_instanceof_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_width_HTMLCanvasElement\", function() { return __widl_f_set_width_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_height_HTMLCanvasElement\", function() { return __widl_f_set_height_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_document_Window\", function() { return __widl_f_document_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_4b1bc9d06177648d\", function() { return __wbg_newnoargs_4b1bc9d06177648d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_b1011dd6b074a84c\", function() { return __wbg_call_b1011dd6b074a84c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_78b2a28f79ef6577\", function() { return __wbg_new_78b2a28f79ef6577; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_89b45155b3b4485b\", function() { return __wbg_call_89b45155b3b4485b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_7d468a665f0b9fd4\", function() { return __wbg_self_7d468a665f0b9fd4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_fb04796ca787f72a\", function() { return __wbg_crypto_fb04796ca787f72a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_6cfbc78e64667b14\", function() { return __wbg_getRandomValues_6cfbc78e64667b14; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_3b18d12e42acb2cf\", function() { return __wbg_getRandomValues_3b18d12e42acb2cf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_28466e53549c4fc7\", function() { return __wbg_require_28466e53549c4fc7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_9c9a28bbbbc171c7\", function() { return __wbg_randomFillSync_9c9a28bbbbc171c7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_jsval_eq\", function() { return __wbindgen_jsval_eq; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Lyapunov\", function() { return Lyapunov; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Image\", function() { return Image; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clifford\", function() { return Clifford; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strange_attractor_explorer_bg */ \"./pkg/strange_attractor_explorer_bg.wasm\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* tslint:disable */\n\nvar u32CvtShim = new Uint32Array(2);\nvar uint64CvtShim = new BigUint64Array(u32CvtShim.buffer);\nvar cachegetUint32Memory = null;\n\nfunction getUint32Memory() {\n  if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n    cachegetUint32Memory = new Uint32Array(_strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n  }\n\n  return cachegetUint32Memory;\n}\n\nvar cachegetUint8Memory = null;\n\nfunction getUint8Memory() {\n  if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n    cachegetUint8Memory = new Uint8Array(_strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n  }\n\n  return cachegetUint8Memory;\n}\n\nfunction getArrayU8FromWasm(ptr, len) {\n  return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);\n}\n\nvar cachedGlobalArgumentPtr = null;\n\nfunction globalArgumentPtr() {\n  if (cachedGlobalArgumentPtr === null) {\n    cachedGlobalArgumentPtr = _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_global_argument_ptr\"]();\n  }\n\n  return cachedGlobalArgumentPtr;\n}\n/**\n* @param {number} arg0\n* @param {number} arg1\n* @returns {Image}\n*/\n\n\nfunction init_image_data(arg0, arg1) {\n  return Image.__wrap(_strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"init_image_data\"](arg0, arg1));\n}\n/**\n* @returns {Clifford}\n*/\n\nfunction init_attractor() {\n  return Clifford.__wrap(_strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"init_attractor\"]());\n}\n/**\n* @returns {Lyapunov}\n*/\n\nfunction init_lyapunov() {\n  return Lyapunov.__wrap(_strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"init_lyapunov\"]());\n}\n/**\n* @returns {void}\n*/\n\nfunction init() {\n  return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"init\"]();\n}\nvar heap = new Array(32);\nheap.fill(undefined);\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) {\n  return heap[idx];\n}\n\nfunction __widl_f_log_1_(arg0) {\n  console.log(getObject(arg0));\n}\nvar cachedTextDecoder = new TextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n  return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nvar heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n  if (heap_next === heap.length) heap.push(heap.length + 1);\n  var idx = heap_next;\n  heap_next = heap[idx];\n  heap[idx] = obj;\n  return idx;\n}\n\nfunction isLikeNone(x) {\n  return x === undefined || x === null;\n}\n\nfunction __widl_f_get_element_by_id_Document(arg0, arg1, arg2) {\n  var varg1 = getStringFromWasm(arg1, arg2);\n  var val = getObject(arg0).getElementById(varg1);\n  return isLikeNone(val) ? 0 : addHeapObject(val);\n}\nfunction __widl_instanceof_HTMLCanvasElement(idx) {\n  return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0;\n}\nfunction __widl_f_set_width_HTMLCanvasElement(arg0, arg1) {\n  getObject(arg0).width = arg1;\n}\nfunction __widl_f_set_height_HTMLCanvasElement(arg0, arg1) {\n  getObject(arg0).height = arg1;\n}\nfunction __widl_instanceof_Window(idx) {\n  return getObject(idx) instanceof Window ? 1 : 0;\n}\nfunction __widl_f_document_Window(arg0) {\n  var val = getObject(arg0).document;\n  return isLikeNone(val) ? 0 : addHeapObject(val);\n}\nfunction __wbg_newnoargs_4b1bc9d06177648d(arg0, arg1) {\n  var varg0 = getStringFromWasm(arg0, arg1);\n  return addHeapObject(new Function(varg0));\n}\n\nfunction handleError(exnptr, e) {\n  var view = getUint32Memory();\n  view[exnptr / 4] = 1;\n  view[exnptr / 4 + 1] = addHeapObject(e);\n}\n\nfunction __wbg_call_b1011dd6b074a84c(arg0, arg1, exnptr) {\n  try {\n    return addHeapObject(getObject(arg0).call(getObject(arg1)));\n  } catch (e) {\n    handleError(exnptr, e);\n  }\n}\nfunction __wbg_new_78b2a28f79ef6577(arg0, arg1) {\n  var varg0 = getStringFromWasm(arg0, arg1);\n  return addHeapObject(new Function(varg0));\n}\nfunction __wbg_call_89b45155b3b4485b(arg0, arg1) {\n  return addHeapObject(getObject(arg0).call(getObject(arg1)));\n}\nfunction __wbg_self_7d468a665f0b9fd4(arg0) {\n  return addHeapObject(getObject(arg0).self);\n}\nfunction __wbg_crypto_fb04796ca787f72a(arg0) {\n  return addHeapObject(getObject(arg0).crypto);\n}\nfunction __wbg_getRandomValues_6cfbc78e64667b14(arg0) {\n  return addHeapObject(getObject(arg0).getRandomValues);\n}\nfunction __wbg_getRandomValues_3b18d12e42acb2cf(arg0, arg1, arg2) {\n  var varg1 = getArrayU8FromWasm(arg1, arg2);\n  getObject(arg0).getRandomValues(varg1);\n}\nfunction __wbg_require_28466e53549c4fc7(arg0, arg1) {\n  var varg0 = getStringFromWasm(arg0, arg1);\n  return addHeapObject(__webpack_require__(\"./pkg sync recursive\")(varg0));\n}\nfunction __wbg_randomFillSync_9c9a28bbbbc171c7(arg0, arg1, arg2) {\n  var varg1 = getArrayU8FromWasm(arg1, arg2);\n  getObject(arg0).randomFillSync(varg1);\n}\nfunction __wbindgen_object_clone_ref(idx) {\n  return addHeapObject(getObject(idx));\n}\n\nfunction dropObject(idx) {\n  if (idx < 36) return;\n  heap[idx] = heap_next;\n  heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) {\n  dropObject(i);\n}\nfunction __wbindgen_string_new(p, l) {\n  return addHeapObject(getStringFromWasm(p, l));\n}\nfunction __wbindgen_is_undefined(idx) {\n  return getObject(idx) === undefined ? 1 : 0;\n}\nfunction __wbindgen_jsval_eq(a, b) {\n  return getObject(a) === getObject(b) ? 1 : 0;\n}\n\nfunction freeLyapunov(ptr) {\n  _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_lyapunov_free\"](ptr);\n}\n/**\n*/\n\n\nvar Lyapunov =\n/*#__PURE__*/\nfunction () {\n  function Lyapunov() {\n    _classCallCheck(this, Lyapunov);\n  }\n\n  _createClass(Lyapunov, [{\n    key: \"free\",\n    value: function free() {\n      var ptr = this.ptr;\n      this.ptr = 0;\n      freeLyapunov(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"set_parameters\",\n\n    /**\n    * @param {number} arg0\n    * @param {number} arg1\n    * @param {number} arg2\n    * @param {number} arg3\n    * @returns {void}\n    */\n    value: function set_parameters(arg0, arg1, arg2, arg3) {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"lyapunov_set_parameters\"](this.ptr, arg0, arg1, arg2, arg3);\n    }\n    /**\n    * @param {number} arg0\n    * @returns {void}\n    */\n\n  }, {\n    key: \"set_iters\",\n    value: function set_iters(arg0) {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"lyapunov_set_iters\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {void}\n    */\n\n  }, {\n    key: \"evaluate\",\n    value: function evaluate() {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"lyapunov_evaluate\"](this.ptr);\n    }\n    /**\n    * @returns {void}\n    */\n\n  }, {\n    key: \"find_chaotic_params\",\n    value: function find_chaotic_params() {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"lyapunov_find_chaotic_params\"](this.ptr);\n    }\n    /**\n    * @returns {boolean}\n    */\n\n  }, {\n    key: \"is_chaotic\",\n    value: function is_chaotic() {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"lyapunov_is_chaotic\"](this.ptr) !== 0;\n    }\n  }, {\n    key: \"a\",\n    get: function get() {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_lyapunov_a\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_lyapunov_a\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"b\",\n    get: function get() {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_lyapunov_b\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_lyapunov_b\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"c\",\n    get: function get() {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_lyapunov_c\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_lyapunov_c\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"d\",\n    get: function get() {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_lyapunov_d\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_lyapunov_d\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"lyapunov\",\n    get: function get() {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_lyapunov_lyapunov\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_lyapunov_lyapunov\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {Lyapunov}\n    */\n\n  }], [{\n    key: \"__wrap\",\n    value: function __wrap(ptr) {\n      var obj = Object.create(Lyapunov.prototype);\n      obj.ptr = ptr;\n      return obj;\n    }\n  }, {\n    key: \"new\",\n    value: function _new() {\n      return Lyapunov.__wrap(_strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"lyapunov_new\"]());\n    }\n  }]);\n\n  return Lyapunov;\n}();\n\nfunction freeImage(ptr) {\n  _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_image_free\"](ptr);\n}\n/**\n*/\n\n\nvar Image =\n/*#__PURE__*/\nfunction () {\n  function Image() {\n    _classCallCheck(this, Image);\n  }\n\n  _createClass(Image, [{\n    key: \"free\",\n    value: function free() {\n      var ptr = this.ptr;\n      this.ptr = 0;\n      freeImage(ptr);\n    }\n    /**\n    * @param {BigInt} arg0\n    * @param {BigInt} arg1\n    * @returns {Image}\n    */\n\n  }, {\n    key: \"reset\",\n\n    /**\n    * @returns {void}\n    */\n    value: function reset() {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"image_reset\"](this.ptr);\n    }\n    /**\n    * @returns {void}\n    */\n\n  }, {\n    key: \"normalize_image\",\n    value: function normalize_image() {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"image_normalize_image\"](this.ptr);\n    }\n    /**\n    * @param {number} arg0\n    * @returns {void}\n    */\n\n  }, {\n    key: \"gamma_correction\",\n    value: function gamma_correction(arg0) {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"image_gamma_correction\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {void}\n    */\n\n  }, {\n    key: \"invert_colors\",\n    value: function invert_colors() {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"image_invert_colors\"](this.ptr);\n    }\n    /**\n    * @returns {Uint8Array}\n    */\n\n  }, {\n    key: \"as_u8\",\n    value: function as_u8() {\n      var retptr = globalArgumentPtr();\n      _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"image_as_u8\"](retptr, this.ptr);\n      var mem = getUint32Memory();\n      var rustptr = mem[retptr / 4];\n      var rustlen = mem[retptr / 4 + 1];\n      var realRet = getArrayU8FromWasm(rustptr, rustlen).slice();\n\n      _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](rustptr, rustlen * 1);\n\n      return realRet;\n    }\n  }], [{\n    key: \"__wrap\",\n    value: function __wrap(ptr) {\n      var obj = Object.create(Image.prototype);\n      obj.ptr = ptr;\n      return obj;\n    }\n  }, {\n    key: \"init\",\n    value: function init(arg0, arg1) {\n      uint64CvtShim[0] = arg0;\n      var low0 = u32CvtShim[0];\n      var high0 = u32CvtShim[1];\n      uint64CvtShim[0] = arg1;\n      var low1 = u32CvtShim[0];\n      var high1 = u32CvtShim[1];\n      return Image.__wrap(_strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"image_init\"](low0, high0, low1, high1));\n    }\n  }]);\n\n  return Image;\n}();\n\nfunction freeClifford(ptr) {\n  _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_clifford_free\"](ptr);\n}\n/**\n*/\n\n\nvar Clifford =\n/*#__PURE__*/\nfunction () {\n  function Clifford() {\n    _classCallCheck(this, Clifford);\n  }\n\n  _createClass(Clifford, [{\n    key: \"free\",\n    value: function free() {\n      var ptr = this.ptr;\n      this.ptr = 0;\n      freeClifford(ptr);\n    }\n    /**\n    * @returns {Clifford}\n    */\n\n  }, {\n    key: \"set_parameters\",\n\n    /**\n    * @param {number} arg0\n    * @param {number} arg1\n    * @param {number} arg2\n    * @param {number} arg3\n    * @returns {void}\n    */\n    value: function set_parameters(arg0, arg1, arg2, arg3) {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"clifford_set_parameters\"](this.ptr, arg0, arg1, arg2, arg3);\n    }\n    /**\n    * @param {number} arg0\n    * @returns {void}\n    */\n\n  }, {\n    key: \"set_iters\",\n    value: function set_iters(arg0) {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"clifford_set_iters\"](this.ptr, arg0);\n    }\n    /**\n    * @param {number} arg0\n    * @param {number} arg1\n    * @param {number} arg2\n    * @returns {void}\n    */\n\n  }, {\n    key: \"set_color\",\n    value: function set_color(arg0, arg1, arg2) {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"clifford_set_color\"](this.ptr, arg0, arg1, arg2);\n    }\n    /**\n    * @param {Image} arg0\n    * @returns {void}\n    */\n\n  }, {\n    key: \"iterate\",\n    value: function iterate(arg0) {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"clifford_iterate\"](this.ptr, arg0.ptr);\n    }\n    /**\n    * @param {boolean} arg0\n    * @returns {void}\n    */\n\n  }, {\n    key: \"find_bounding_box\",\n    value: function find_bounding_box(arg0) {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"clifford_find_bounding_box\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {void}\n    */\n\n  }, {\n    key: \"bump_bounding_box\",\n    value: function bump_bounding_box() {\n      return _strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"clifford_bump_bounding_box\"](this.ptr);\n    }\n  }], [{\n    key: \"__wrap\",\n    value: function __wrap(ptr) {\n      var obj = Object.create(Clifford.prototype);\n      obj.ptr = ptr;\n      return obj;\n    }\n  }, {\n    key: \"new\",\n    value: function _new() {\n      return Clifford.__wrap(_strange_attractor_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"clifford_new\"]());\n    }\n  }]);\n\n  return Clifford;\n}();\nfunction __wbindgen_throw(ptr, len) {\n  throw new Error(getStringFromWasm(ptr, len));\n}\n\n//# sourceURL=webpack:///./pkg/strange_attractor_explorer.js?");

/***/ }),

/***/ "./pkg/strange_attractor_explorer_bg.wasm":
/*!************************************************!*\
  !*** ./pkg/strange_attractor_explorer_bg.wasm ***!
  \************************************************/
/*! exports provided: memory, __wbindgen_global_argument_ptr, __wbg_image_free, image_init, image_reset, image_normalize_image, image_gamma_correction, image_invert_colors, image_as_u8, __wbg_lyapunov_free, __wbg_get_lyapunov_a, __wbg_set_lyapunov_a, __wbg_get_lyapunov_b, __wbg_set_lyapunov_b, __wbg_get_lyapunov_c, __wbg_set_lyapunov_c, __wbg_get_lyapunov_d, __wbg_set_lyapunov_d, __wbg_get_lyapunov_lyapunov, __wbg_set_lyapunov_lyapunov, lyapunov_new, lyapunov_set_parameters, lyapunov_set_iters, lyapunov_evaluate, lyapunov_find_chaotic_params, lyapunov_is_chaotic, __wbg_clifford_free, clifford_new, clifford_set_parameters, clifford_set_iters, clifford_set_color, clifford_iterate, clifford_find_bounding_box, clifford_bump_bounding_box, init_image_data, init_attractor, init_lyapunov, init, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./strange_attractor_explorer */ \"./pkg/strange_attractor_explorer.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/strange_attractor_explorer_bg.wasm?");

/***/ })

}]);