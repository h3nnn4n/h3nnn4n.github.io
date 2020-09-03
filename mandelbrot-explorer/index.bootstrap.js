(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return load; });\n/* harmony import */ var _js_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ui */ \"./js/ui.ts\");\n/* harmony import */ var _js_mandelbrot_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/mandelbrot_manager */ \"./js/mandelbrot_manager.ts\");\n\n\nvar width = 800;\nvar height = 600;\nvar Rust;\nvar mandelbrot_manager;\nvar render_mandelbrot = function () {\n    mandelbrot_manager.render_mandelbrot();\n    mandelbrot_manager.draw_to_canvas();\n};\nvar init = function () {\n    mandelbrot_manager = new _js_mandelbrot_manager__WEBPACK_IMPORTED_MODULE_1__[\"MandelbrotManager\"](Rust, width, height);\n    Object(_js_ui__WEBPACK_IMPORTED_MODULE_0__[\"bindEvents\"])(render_mandelbrot);\n    render_mandelbrot();\n};\nvar load = function () {\n    (function () { return __webpack_require__.e(/*! import() | strange_attractor_explorer */ \"strange_attractor_explorer\").then(__webpack_require__.bind(null, /*! ./pkg/mandelbrot_explorer.js */ \"./pkg/mandelbrot_explorer.js\")).then(function (module) {\n        Rust = module;\n        init();\n    }); })();\n};\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./js/mandelbrot_manager.ts":
/*!**********************************!*\
  !*** ./js/mandelbrot_manager.ts ***!
  \**********************************/
/*! exports provided: MandelbrotManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MandelbrotManager\", function() { return MandelbrotManager; });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./js/ui.ts\");\n\nvar MandelbrotManager = /** @class */ (function () {\n    function MandelbrotManager(rust, width, height) {\n        this.real_value = -0.5;\n        this.imag_value = 0;\n        this.zoom = 2;\n        this.escape_radius = 2.0;\n        this.iterations = 256;\n        this.rust = rust;\n        this.height = height;\n        this.width = width;\n        this.config = this.rust.build_config(width, height);\n        this.image = this.rust.init_image_data(width, height);\n        this.update_config();\n    }\n    MandelbrotManager.prototype.update_config = function () {\n        this.real_value = Object(_ui__WEBPACK_IMPORTED_MODULE_0__[\"readValue\"])('real_value');\n        this.imag_value = Object(_ui__WEBPACK_IMPORTED_MODULE_0__[\"readValue\"])('imag_value');\n        this.zoom = Object(_ui__WEBPACK_IMPORTED_MODULE_0__[\"readValue\"])('zoom_level');\n        this.escape_radius = Object(_ui__WEBPACK_IMPORTED_MODULE_0__[\"readValue\"])('escape_radius_value');\n        this.iterations = Object(_ui__WEBPACK_IMPORTED_MODULE_0__[\"readValue\"])('iterations_value');\n        this.config.set_coordinates(this.real_value, this.imag_value);\n        this.config.set_zoom(this.zoom);\n        this.config.set_escape_radius(this.escape_radius);\n        this.config.set_iterations(this.iterations);\n    };\n    MandelbrotManager.prototype.render_mandelbrot = function () {\n        this.update_config();\n        this.image.reset();\n        this.rust.render_mandelbrot(this.config, this.image);\n    };\n    MandelbrotManager.prototype.draw_to_canvas = function () {\n        this.image.normalize_image();\n        this.image.gamma_correction(1.7);\n        var image_pixels = this.image.as_u8();\n        var canvas = Object(_ui__WEBPACK_IMPORTED_MODULE_0__[\"getCanvas\"])();\n        var canvas_context = canvas.getContext('2d');\n        if (canvas_context != null) {\n            var clamped_array = new Uint8ClampedArray(image_pixels);\n            var image_data = new ImageData(clamped_array, this.width, this.height);\n            canvas_context.putImageData(image_data, 0, 0);\n        }\n    };\n    return MandelbrotManager;\n}());\n\n\n\n//# sourceURL=webpack:///./js/mandelbrot_manager.ts?");

/***/ }),

/***/ "./js/ui.ts":
/*!******************!*\
  !*** ./js/ui.ts ***!
  \******************/
/*! exports provided: getCanvas, readValue, readColor, bindEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCanvas\", function() { return getCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readValue\", function() { return readValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readColor\", function() { return readColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindEvents\", function() { return bindEvents; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var a_color_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! a-color-picker */ \"./node_modules/a-color-picker/dist/acolorpicker.js\");\n/* harmony import */ var a_color_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(a_color_picker__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction bindEvents(render_callback) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__('#render').click(render_callback);\n    jquery__WEBPACK_IMPORTED_MODULE_0__('#download').click(downloadCanvas);\n}\nfunction downloadCanvas() {\n    var dataURL = getCanvas().toDataURL('image/png');\n    jquery__WEBPACK_IMPORTED_MODULE_0__('#download').attr('href', dataURL);\n    jquery__WEBPACK_IMPORTED_MODULE_0__('#download').attr('download', 'image.png');\n}\nfunction getCanvas() {\n    var j_canvas = jquery__WEBPACK_IMPORTED_MODULE_0__('#canvas');\n    var canvas = j_canvas[0];\n    return canvas;\n}\nfunction readValue(name) {\n    var value = jquery__WEBPACK_IMPORTED_MODULE_0__('#' + name).val();\n    return Number(value);\n}\nfunction readColor(name) {\n    var value = jquery__WEBPACK_IMPORTED_MODULE_0__('#' + name).val();\n    var parsed = a_color_picker__WEBPACK_IMPORTED_MODULE_1__[\"parseColor\"](value, \"rgb\");\n    return parsed;\n}\n\n\n\n//# sourceURL=webpack:///./js/ui.ts?");

/***/ })

}]);