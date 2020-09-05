(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mandelbrot_explorer"],{

/***/ "./pkg/mandelbrot_explorer.js":
/*!************************************!*\
  !*** ./pkg/mandelbrot_explorer.js ***!
  \************************************/
/*! exports provided: init_image_data, init_canvas, build_config, render_mandelbrot, render_mandelbrot_line, __widl_f_log_1_, __widl_f_get_element_by_id_Document, __widl_instanceof_HTMLCanvasElement, __widl_f_set_width_HTMLCanvasElement, __widl_f_set_height_HTMLCanvasElement, __widl_instanceof_Window, __widl_f_document_Window, __wbg_newnoargs_4b1bc9d06177648d, __wbg_call_b1011dd6b074a84c, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref, __wbindgen_string_new, PointData, Image, Config, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init_image_data\", function() { return init_image_data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init_canvas\", function() { return init_canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"build_config\", function() { return build_config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render_mandelbrot\", function() { return render_mandelbrot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render_mandelbrot_line\", function() { return render_mandelbrot_line; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_log_1_\", function() { return __widl_f_log_1_; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_element_by_id_Document\", function() { return __widl_f_get_element_by_id_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_HTMLCanvasElement\", function() { return __widl_instanceof_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_width_HTMLCanvasElement\", function() { return __widl_f_set_width_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_height_HTMLCanvasElement\", function() { return __widl_f_set_height_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_document_Window\", function() { return __widl_f_document_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_4b1bc9d06177648d\", function() { return __wbg_newnoargs_4b1bc9d06177648d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_b1011dd6b074a84c\", function() { return __wbg_call_b1011dd6b074a84c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PointData\", function() { return PointData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Image\", function() { return Image; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Config\", function() { return Config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mandelbrot_explorer_bg */ \"./pkg/mandelbrot_explorer_bg.wasm\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* tslint:disable */\n\nvar cachegetUint8Memory = null;\n\nfunction getUint8Memory() {\n  if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n    cachegetUint8Memory = new Uint8Array(_mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n  }\n\n  return cachegetUint8Memory;\n}\n\nfunction getArrayU8FromWasm(ptr, len) {\n  return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);\n}\n\nvar cachedGlobalArgumentPtr = null;\n\nfunction globalArgumentPtr() {\n  if (cachedGlobalArgumentPtr === null) {\n    cachedGlobalArgumentPtr = _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_global_argument_ptr\"]();\n  }\n\n  return cachedGlobalArgumentPtr;\n}\n\nvar cachegetUint32Memory = null;\n\nfunction getUint32Memory() {\n  if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n    cachegetUint32Memory = new Uint32Array(_mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n  }\n\n  return cachegetUint32Memory;\n}\n/**\n* @param {number} arg0\n* @param {number} arg1\n* @returns {Image}\n*/\n\n\nfunction init_image_data(arg0, arg1) {\n  return Image.__wrap(_mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"init_image_data\"](arg0, arg1));\n}\n/**\n* @param {number} arg0\n* @param {number} arg1\n* @returns {void}\n*/\n\nfunction init_canvas(arg0, arg1) {\n  return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"init_canvas\"](arg0, arg1);\n}\n/**\n* @param {number} arg0\n* @param {number} arg1\n* @returns {Config}\n*/\n\nfunction build_config(arg0, arg1) {\n  return Config.__wrap(_mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"build_config\"](arg0, arg1));\n}\n/**\n* @param {Config} arg0\n* @param {Image} arg1\n* @returns {void}\n*/\n\nfunction render_mandelbrot(arg0, arg1) {\n  return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"render_mandelbrot\"](arg0.ptr, arg1.ptr);\n}\n/**\n* @param {number} arg0\n* @param {Config} arg1\n* @param {Image} arg2\n* @returns {void}\n*/\n\nfunction render_mandelbrot_line(arg0, arg1, arg2) {\n  return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"render_mandelbrot_line\"](arg0, arg1.ptr, arg2.ptr);\n}\nvar heap = new Array(32);\nheap.fill(undefined);\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) {\n  return heap[idx];\n}\n\nfunction __widl_f_log_1_(arg0) {\n  console.log(getObject(arg0));\n}\nvar cachedTextDecoder = new TextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n  return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nvar heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n  if (heap_next === heap.length) heap.push(heap.length + 1);\n  var idx = heap_next;\n  heap_next = heap[idx];\n  heap[idx] = obj;\n  return idx;\n}\n\nfunction isLikeNone(x) {\n  return x === undefined || x === null;\n}\n\nfunction __widl_f_get_element_by_id_Document(arg0, arg1, arg2) {\n  var varg1 = getStringFromWasm(arg1, arg2);\n  var val = getObject(arg0).getElementById(varg1);\n  return isLikeNone(val) ? 0 : addHeapObject(val);\n}\nfunction __widl_instanceof_HTMLCanvasElement(idx) {\n  return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0;\n}\nfunction __widl_f_set_width_HTMLCanvasElement(arg0, arg1) {\n  getObject(arg0).width = arg1;\n}\nfunction __widl_f_set_height_HTMLCanvasElement(arg0, arg1) {\n  getObject(arg0).height = arg1;\n}\nfunction __widl_instanceof_Window(idx) {\n  return getObject(idx) instanceof Window ? 1 : 0;\n}\nfunction __widl_f_document_Window(arg0) {\n  var val = getObject(arg0).document;\n  return isLikeNone(val) ? 0 : addHeapObject(val);\n}\nfunction __wbg_newnoargs_4b1bc9d06177648d(arg0, arg1) {\n  var varg0 = getStringFromWasm(arg0, arg1);\n  return addHeapObject(new Function(varg0));\n}\n\nfunction handleError(exnptr, e) {\n  var view = getUint32Memory();\n  view[exnptr / 4] = 1;\n  view[exnptr / 4 + 1] = addHeapObject(e);\n}\n\nfunction __wbg_call_b1011dd6b074a84c(arg0, arg1, exnptr) {\n  try {\n    return addHeapObject(getObject(arg0).call(getObject(arg1)));\n  } catch (e) {\n    handleError(exnptr, e);\n  }\n}\nfunction __wbindgen_object_clone_ref(idx) {\n  return addHeapObject(getObject(idx));\n}\n\nfunction dropObject(idx) {\n  if (idx < 36) return;\n  heap[idx] = heap_next;\n  heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) {\n  dropObject(i);\n}\nfunction __wbindgen_string_new(p, l) {\n  return addHeapObject(getStringFromWasm(p, l));\n}\n\nfunction freePointData(ptr) {\n  _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_pointdata_free\"](ptr);\n}\n/**\n*/\n\n\nvar PointData = /*#__PURE__*/function () {\n  function PointData() {\n    _classCallCheck(this, PointData);\n  }\n\n  _createClass(PointData, [{\n    key: \"free\",\n    value: function free() {\n      var ptr = this.ptr;\n      this.ptr = 0;\n      freePointData(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"iterations\",\n    get: function get() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_pointdata_iterations\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_pointdata_iterations\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"max_iterations\",\n    get: function get() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_pointdata_max_iterations\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_pointdata_max_iterations\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"real\",\n    get: function get() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_pointdata_real\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_pointdata_real\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"imaginary\",\n    get: function get() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_pointdata_imaginary\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_pointdata_imaginary\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {PointData}\n    */\n\n  }], [{\n    key: \"__wrap\",\n    value: function __wrap(ptr) {\n      var obj = Object.create(PointData.prototype);\n      obj.ptr = ptr;\n      return obj;\n    }\n  }, {\n    key: \"new\",\n    value: function _new() {\n      return PointData.__wrap(_mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"pointdata_new\"]());\n    }\n  }]);\n\n  return PointData;\n}();\n\nfunction freeImage(ptr) {\n  _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_image_free\"](ptr);\n}\n/**\n*/\n\n\nvar Image = /*#__PURE__*/function () {\n  function Image() {\n    _classCallCheck(this, Image);\n  }\n\n  _createClass(Image, [{\n    key: \"free\",\n    value: function free() {\n      var ptr = this.ptr;\n      this.ptr = 0;\n      freeImage(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"reset\",\n\n    /**\n    * @returns {void}\n    */\n    value: function reset() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"image_reset\"](this.ptr);\n    }\n    /**\n    * @returns {void}\n    */\n\n  }, {\n    key: \"normalize_image\",\n    value: function normalize_image() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"image_normalize_image\"](this.ptr);\n    }\n    /**\n    * @param {number} arg0\n    * @returns {void}\n    */\n\n  }, {\n    key: \"gamma_correction\",\n    value: function gamma_correction(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"image_gamma_correction\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {void}\n    */\n\n  }, {\n    key: \"invert_colors\",\n    value: function invert_colors() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"image_invert_colors\"](this.ptr);\n    }\n    /**\n    * @returns {Uint8Array}\n    */\n\n  }, {\n    key: \"as_u8\",\n    value: function as_u8() {\n      var retptr = globalArgumentPtr();\n      _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"image_as_u8\"](retptr, this.ptr);\n      var mem = getUint32Memory();\n      var rustptr = mem[retptr / 4];\n      var rustlen = mem[retptr / 4 + 1];\n      var realRet = getArrayU8FromWasm(rustptr, rustlen).slice();\n\n      _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](rustptr, rustlen * 1);\n\n      return realRet;\n    }\n    /**\n    * @param {Image} arg0\n    * @returns {void}\n    */\n\n  }, {\n    key: \"copy_from\",\n    value: function copy_from(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"image_copy_from\"](this.ptr, arg0.ptr);\n    }\n    /**\n    * @param {number} arg0\n    * @param {number} arg1\n    * @returns {PointData}\n    */\n\n  }, {\n    key: \"get_point\",\n    value: function get_point(arg0, arg1) {\n      return PointData.__wrap(_mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"image_get_point\"](this.ptr, arg0, arg1));\n    }\n  }, {\n    key: \"width\",\n    get: function get() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_image_width\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_image_width\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"height\",\n    get: function get() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_image_height\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_image_height\"](this.ptr, arg0);\n    }\n    /**\n    * @param {number} arg0\n    * @param {number} arg1\n    * @returns {Image}\n    */\n\n  }], [{\n    key: \"__wrap\",\n    value: function __wrap(ptr) {\n      var obj = Object.create(Image.prototype);\n      obj.ptr = ptr;\n      return obj;\n    }\n  }, {\n    key: \"init\",\n    value: function init(arg0, arg1) {\n      return Image.__wrap(_mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"image_init\"](arg0, arg1));\n    }\n  }]);\n\n  return Image;\n}();\n\nfunction freeConfig(ptr) {\n  _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_config_free\"](ptr);\n}\n/**\n*/\n\n\nvar Config = /*#__PURE__*/function () {\n  function Config() {\n    _classCallCheck(this, Config);\n  }\n\n  _createClass(Config, [{\n    key: \"free\",\n    value: function free() {\n      var ptr = this.ptr;\n      this.ptr = 0;\n      freeConfig(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"set_size\",\n\n    /**\n    * @param {number} arg0\n    * @param {number} arg1\n    * @returns {void}\n    */\n    value: function set_size(arg0, arg1) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"config_set_size\"](this.ptr, arg0, arg1);\n    }\n    /**\n    * @param {number} arg0\n    * @returns {void}\n    */\n\n  }, {\n    key: \"set_escape_radius\",\n    value: function set_escape_radius(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"config_set_escape_radius\"](this.ptr, arg0);\n    }\n    /**\n    * @param {number} arg0\n    * @returns {void}\n    */\n\n  }, {\n    key: \"set_iterations\",\n    value: function set_iterations(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"config_set_iterations\"](this.ptr, arg0);\n    }\n    /**\n    * @param {number} arg0\n    * @returns {void}\n    */\n\n  }, {\n    key: \"set_zoom\",\n    value: function set_zoom(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"config_set_zoom\"](this.ptr, arg0);\n    }\n    /**\n    * @param {number} arg0\n    * @param {number} arg1\n    * @returns {void}\n    */\n\n  }, {\n    key: \"set_coordinates\",\n    value: function set_coordinates(arg0, arg1) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"config_set_coordinates\"](this.ptr, arg0, arg1);\n    }\n  }, {\n    key: \"xcenter\",\n    get: function get() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_config_xcenter\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_config_xcenter\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"ycenter\",\n    get: function get() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_config_ycenter\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_config_ycenter\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"zoom\",\n    get: function get() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_config_zoom\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_config_zoom\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"width\",\n    get: function get() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_config_width\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_config_width\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"height\",\n    get: function get() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_config_height\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_config_height\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"escape_radius\",\n    get: function get() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_config_escape_radius\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_config_escape_radius\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n\n  }, {\n    key: \"iterations\",\n    get: function get() {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_config_iterations\"](this.ptr);\n    },\n    set: function set(arg0) {\n      return _mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_config_iterations\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {Config}\n    */\n\n  }], [{\n    key: \"__wrap\",\n    value: function __wrap(ptr) {\n      var obj = Object.create(Config.prototype);\n      obj.ptr = ptr;\n      return obj;\n    }\n  }, {\n    key: \"new\",\n    value: function _new() {\n      return Config.__wrap(_mandelbrot_explorer_bg__WEBPACK_IMPORTED_MODULE_0__[\"config_new\"]());\n    }\n  }]);\n\n  return Config;\n}();\nfunction __wbindgen_throw(ptr, len) {\n  throw new Error(getStringFromWasm(ptr, len));\n}\n\n//# sourceURL=webpack:///./pkg/mandelbrot_explorer.js?");

/***/ }),

/***/ "./pkg/mandelbrot_explorer_bg.wasm":
/*!*****************************************!*\
  !*** ./pkg/mandelbrot_explorer_bg.wasm ***!
  \*****************************************/
/*! exports provided: memory, __wbg_pointdata_free, __wbg_get_pointdata_iterations, __wbg_set_pointdata_iterations, __wbg_get_pointdata_max_iterations, __wbg_set_pointdata_max_iterations, __wbg_get_pointdata_real, __wbg_set_pointdata_real, __wbg_get_pointdata_imaginary, __wbg_set_pointdata_imaginary, pointdata_new, __wbindgen_global_argument_ptr, __wbg_config_free, __wbg_get_config_xcenter, __wbg_set_config_xcenter, __wbg_get_config_ycenter, __wbg_set_config_ycenter, __wbg_get_config_zoom, __wbg_set_config_zoom, __wbg_get_config_width, __wbg_set_config_width, __wbg_get_config_height, __wbg_set_config_height, __wbg_get_config_escape_radius, __wbg_set_config_escape_radius, __wbg_get_config_iterations, __wbg_set_config_iterations, config_new, config_set_size, config_set_escape_radius, config_set_iterations, config_set_zoom, config_set_coordinates, __wbg_image_free, __wbg_get_image_width, __wbg_set_image_width, __wbg_get_image_height, __wbg_set_image_height, image_init, image_reset, image_normalize_image, image_gamma_correction, image_invert_colors, image_as_u8, image_copy_from, image_get_point, init_image_data, init_canvas, build_config, render_mandelbrot, render_mandelbrot_line, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./mandelbrot_explorer */ \"./pkg/mandelbrot_explorer.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/mandelbrot_explorer_bg.wasm?");

/***/ })

}]);