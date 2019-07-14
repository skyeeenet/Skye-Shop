(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/optionValue/OptionValueCreate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/optionValue/OptionValueCreate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_ImageSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/ImageSelect */ "./resources/js/components/common/ImageSelect.vue");
/* harmony import */ var _common_Preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Preloader */ "./resources/js/components/common/Preloader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isShowImageSelect: false,
      showPreloader: false,
      optionName: '',
      optionSort: '',
      groups: [],
      selectedGroup: null,
      selectedImage: null,
      selectedUrlImage: '#'
    };
  },
  components: {
    ImageSelect: _common_ImageSelect__WEBPACK_IMPORTED_MODULE_0__["default"],
    Preloader: _common_Preloader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.getGroups();
  },
  watch: {
    selectedImage: function selectedImage() {
      console.log(this.selectedImage);
    }
  },
  methods: {
    showImageSelect: function showImageSelect() {
      this.isShowImageSelect = true;
    },
    hideImageSelect: function hideImageSelect() {
      this.isShowImageSelect = false;
    },
    applyImageSelect: function applyImageSelect(images) {
      this.selectedImage = images[0];
      this.getImagesById(this.selectedImage);
      this.isShowImageSelect = false;
    },
    getImagesById: function getImagesById(id) {
      var _this = this;

      axios.get('/api/image/' + id).then(function (response) {
        _this.selectedUrlImage = '/' + response.data.data.thumbnail;
      });
    },
    back: function back() {
      this.$router.push({
        name: 'option-value-index'
      });
    },
    getGroups: function getGroups() {
      var _this2 = this;

      axios.get('/api/options').then(function (response) {
        _this2.groups = response.data.data;
      });
    },
    onSubmitForm: function onSubmitForm() {
      var _this3 = this;

      this.showPreloader = true;
      var optionValue = {
        name: this.optionName,
        sort_order: this.optionSort,
        option_id: this.selectedGroup,
        image_id: this.selectedImage
      };
      axios.post('/api/option-value', optionValue).then(function () {
        _this3.showPreloader = false;

        _this3.$router.push({
          name: 'option-value-index'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/optionValue/OptionValueCreate.vue?vue&type=template&id=4a58b36a&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/optionValue/OptionValueCreate.vue?vue&type=template&id=4a58b36a& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "card-body col-md-12" }, [
      _c("h4", { staticClass: "card-title mb-4" }, [_vm._v("Create Option")]),
      _vm._v(" "),
      _c("div", { staticClass: "basic-form" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmitForm($event)
              }
            }
          },
          [
            _c(
              "label",
              { staticClass: "text-label", attrs: { for: "group" } },
              [_vm._v("Group*")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selectedGroup,
                    expression: "selectedGroup"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "group", required: "" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.selectedGroup = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              _vm._l(_vm.groups, function(group) {
                return _c("option", { domProps: { value: group.id } }, [
                  _vm._v(_vm._s(group.name))
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "text-label" }, [
                _vm._v("Option Name*")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.optionName,
                    expression: "optionName"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", name: "name", required: "" },
                domProps: { value: _vm.optionName },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.optionName = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _vm.selectedUrlImage
                ? _c("div", { staticClass: "mb-4" }, [
                    _c("img", { attrs: { src: _vm.selectedUrlImage, alt: "" } })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-file",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.showImageSelect($event)
                    }
                  }
                },
                [_vm._v("Изображение\n          ")]
              )
            ]),
            _vm._v(" "),
            _vm.isShowImageSelect
              ? _c("ImageSelect", {
                  on: {
                    "close-form": _vm.hideImageSelect,
                    "selected-image": _vm.applyImageSelect
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "text-label" }, [
                _vm._v("Sort Order")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.optionSort,
                    expression: "optionSort"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", name: "order" },
                domProps: { value: _vm.optionSort },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.optionSort = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm.showPreloader
              ? _c(
                  "div",
                  { staticClass: "d-flex justify-content-start" },
                  [_c("Preloader")],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.showPreloader
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-form mr-2",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Submit")]
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.showPreloader
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-light text-dark btn-form",
                    attrs: { type: "button" },
                    on: { click: _vm.back }
                  },
                  [_vm._v("Cancel\n        ")]
                )
              : _vm._e()
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/optionValue/OptionValueCreate.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/admin/optionValue/OptionValueCreate.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OptionValueCreate_vue_vue_type_template_id_4a58b36a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionValueCreate.vue?vue&type=template&id=4a58b36a& */ "./resources/js/components/admin/optionValue/OptionValueCreate.vue?vue&type=template&id=4a58b36a&");
/* harmony import */ var _OptionValueCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptionValueCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/optionValue/OptionValueCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OptionValueCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OptionValueCreate_vue_vue_type_template_id_4a58b36a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OptionValueCreate_vue_vue_type_template_id_4a58b36a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/optionValue/OptionValueCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/optionValue/OptionValueCreate.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/admin/optionValue/OptionValueCreate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionValueCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OptionValueCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/optionValue/OptionValueCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionValueCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/optionValue/OptionValueCreate.vue?vue&type=template&id=4a58b36a&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/admin/optionValue/OptionValueCreate.vue?vue&type=template&id=4a58b36a& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionValueCreate_vue_vue_type_template_id_4a58b36a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OptionValueCreate.vue?vue&type=template&id=4a58b36a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/optionValue/OptionValueCreate.vue?vue&type=template&id=4a58b36a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionValueCreate_vue_vue_type_template_id_4a58b36a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionValueCreate_vue_vue_type_template_id_4a58b36a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);