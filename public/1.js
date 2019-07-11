(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard/AdminDashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/dashboard/AdminDashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineChart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LineChart.js */ "./resources/js/components/LineChart.js");
/* harmony import */ var _PieChart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../PieChart.js */ "./resources/js/components/PieChart.js");
/* harmony import */ var _common_ImageSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/ImageSelect */ "./resources/js/components/common/ImageSelect.vue");
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
  components: {
    LineChart: _LineChart_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    PieChart: _PieChart_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    ImageSelect: _common_ImageSelect__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/ImageSelect.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/ImageSelect.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Preloader */ "./resources/js/components/common/Preloader.vue");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination */ "./resources/js/components/common/Pagination.vue");
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
      file: '',
      images: [],
      showPreloader: false,
      pagination: [],
      selectedItems: []
    };
  },
  mounted: function mounted() {
    this.getImages();
  },
  computed: {
    disableSubmit: function disableSubmit() {
      if (this.selectedItems.length > 1) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    selectedItems: function selectedItems(val) {
      console.log(this.selectedItems);
    }
  },
  methods: {
    find: function find(array, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] == value) return i;
      }

      return -1;
    },
    getImages: function getImages() {
      var _this = this;

      axios.get('/api/image').then(function (response) {
        _this.images = response.data.data.data;
        _this.pagination = response.data.data;
        console.log(response.data.data);
      });
    },
    selectItem: function selectItem(item) {
      if (this.selectedItems.indexOf(item) == -1) {
        this.selectedItems.push(item);
      } else {
        this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
      }
    },
    getNewItems: function getNewItems(images) {
      this.images = images;
    },
    fileUpload: function fileUpload() {
      var _this2 = this;

      this.showPreloader = true;
      this.file = this.$refs.file.files[0];
      var formData = new FormData();
      formData.append('image', this.file);
      axios.post('/api/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function () {
        _this2.getImages();

        _this2.showPreloader = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deleteItems: function deleteItems() {
      var _this3 = this;

      this.showPreloader = true;
      axios.post('/api/image/delete', {
        items: this.selectedItems
      }).then(function () {
        _this3.showPreloader = false;
      });
    },
    onSubmitHandler: function onSubmitHandler() {
      this.$emit('selected-image', this.selectedItems);
    },
    onCloseHandler: function onCloseHandler() {
      this.$emit('close-form');
    }
  },
  components: {
    Preloader: _Preloader__WEBPACK_IMPORTED_MODULE_0__["default"],
    Pagination: _Pagination__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Pagination.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/Pagination.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: ['pagination'],
  computed: {},
  watch: {
    pagination: function pagination(value) {
      this.currentPage = value.current_page;
      this.nextPageUrl = value.next_page_url;
      this.prevPageUrl = value.prev_page_url;
      this.totalPages = this.pagination.last_page;
    },
    paginationItems: function paginationItems(value) {
      this.currentPage = value.current_page;
      this.nextPageUrl = value.next_page_url;
      this.prevPageUrl = value.prev_page_url;
    }
  },
  data: function data() {
    return {
      currentPage: 0,
      nextPageUrl: null,
      prevPageUrl: null,
      totalPages: 0,
      paginationItems: []
    };
  },
  methods: {
    getNextItems: function getNextItems() {
      if (this.currentPage <= this.totalPages) {
        this.currentPage += 1;
      }

      this.getItems(this.currentPage);
    },
    getPrevItems: function getPrevItems() {
      if (this.currentPage > 0) {
        this.currentPage -= 1;
      }

      this.getItems(this.currentPage);
    },
    getItems: function getItems(offset) {
      var _this = this;

      axios.get('/api/image?page=' + offset).then(function (response) {
        _this.paginationItems = response.data.data;

        _this.$emit('get-new-items', response.data.data.data);
      });
    },
    getSelectedPage: function getSelectedPage(key) {
      if (key <= this.totalPages && key > 0) {
        this.getItems(key);
        this.currentPage = key;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/ImageSelect.vue?vue&type=style&index=0&id=70cecbfe&scoped=true&lang=sass&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/ImageSelect.vue?vue&type=style&index=0&id=70cecbfe&scoped=true&lang=sass& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-select-container[data-v-70cecbfe] {\n  position: absolute;\n  z-index: 999;\n  width: 700px;\n  height: 500px;\n  background-color: #fff;\n  border: 1px solid black;\n}\n.image-select-header-container[data-v-70cecbfe] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 10px 20px;\n}\n.image-select-header-item[data-v-70cecbfe] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.mt-10[data-v-70cecbfe] {\n  margin-top: 10px;\n}\n.image-select-main-container[data-v-70cecbfe] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  height: 300px;\n  padding: 0 20px;\n}\n.image-select-footer-container[data-v-70cecbfe] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 10px 20px;\n}\n.image-select-main-item[data-v-70cecbfe] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100px;\n  height: 100px;\n}\n.image-select-item-image[data-v-70cecbfe] {\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 100px;\n  height: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/ImageSelect.vue?vue&type=style&index=0&id=70cecbfe&scoped=true&lang=sass&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/ImageSelect.vue?vue&type=style&index=0&id=70cecbfe&scoped=true&lang=sass& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageSelect.vue?vue&type=style&index=0&id=70cecbfe&scoped=true&lang=sass& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/ImageSelect.vue?vue&type=style&index=0&id=70cecbfe&scoped=true&lang=sass&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard/AdminDashboard.vue?vue&type=template&id=c0b92e6a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/dashboard/AdminDashboard.vue?vue&type=template&id=c0b92e6a& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("ImageSelect"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-8 col-xxl-7 col-lg-8" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [_c("LineChart")], 1)
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4 col-xxl-5 col-lg-4" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [_c("PieChart")], 1)
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _vm._m(5)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row page-titles" }, [
      _c("div", { staticClass: "col p-md-0" }, [
        _c("h4", [_vm._v("Restaurant")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col p-md-0" }, [
        _c("ol", { staticClass: "breadcrumb" }, [
          _c("li", { staticClass: "breadcrumb-item" }, [
            _c("a", { attrs: { href: "javascript:void(0)" } }, [_vm._v("Home")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item active" }, [
            _c("a", { attrs: { href: "" } }, [_vm._v("Restaurant")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row", attrs: { id: "dragdrop" } }, [
      _c("div", { staticClass: "col-md-4 col-sm-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "stat-widget-two" }, [
              _c("div", { staticClass: "media" }, [
                _c("div", { staticClass: "media-body" }, [
                  _c("h2", { staticClass: "mt-0 mb-1 text-info" }, [
                    _vm._v("2,02,150")
                  ]),
                  _c("span", {}, [_vm._v("Total Orders")])
                ]),
                _vm._v(" "),
                _c("img", {
                  staticClass: "ml-3",
                  attrs: {
                    src: __webpack_require__(/*! ../../../../assets/images/icons/1.png */ "./resources/assets/images/icons/1.png"),
                    alt: ""
                  }
                })
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 col-sm-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "stat-widget-two" }, [
              _c("div", { staticClass: "media" }, [
                _c("div", { staticClass: "media-body" }, [
                  _c("h2", { staticClass: "mt-0 mb-1 text-danger" }, [
                    _vm._v("2,02,150")
                  ]),
                  _c("span", {}, [_vm._v("Total Orders")])
                ]),
                _vm._v(" "),
                _c("img", {
                  staticClass: "ml-3",
                  attrs: {
                    src: __webpack_require__(/*! ../../../../assets/images/icons/2.png */ "./resources/assets/images/icons/2.png"),
                    alt: ""
                  }
                })
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 col-sm-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "stat-widget-two" }, [
              _c("div", { staticClass: "media" }, [
                _c("div", { staticClass: "media-body" }, [
                  _c("h2", { staticClass: "mt-0 mb-1 text-warning" }, [
                    _vm._v("2,02,150")
                  ]),
                  _c("span", {}, [_vm._v("Total Orders")])
                ]),
                _vm._v(" "),
                _c("img", {
                  staticClass: "ml-3",
                  attrs: {
                    src: __webpack_require__(/*! ../../../../assets/images/icons/3.png */ "./resources/assets/images/icons/3.png"),
                    alt: ""
                  }
                })
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title m-t-10" }, [
        _vm._v("Orders Monthly")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "table-action float-right" }, [
        _c("form", { attrs: { action: "#" } }, [
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "form-group m-b-0" }, [
              _c(
                "select",
                {
                  staticClass: "selectpicker show-tick",
                  attrs: { "data-width": "auto" }
                },
                [
                  _c("option", { attrs: { selected: "selected" } }, [
                    _vm._v("Last 30 Days")
                  ]),
                  _vm._v(" "),
                  _c("option", [_vm._v("Last 1 Month")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("Last 6 Month")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("Last Year")])
                ]
              )
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Most Selling Items")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-between" }, [
      _c("div", { staticClass: "col-lg-9" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body text-center" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3 mb-sm-0" }, [
                _c("div", { staticClass: "stat-widget-three py-2" }, [
                  _c("div", { staticClass: "media" }, [
                    _c("img", {
                      staticClass: "mr-4 mt-3",
                      attrs: {
                        src: __webpack_require__(/*! ../../../../assets/images/icons/4.png */ "./resources/assets/images/icons/4.png"),
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "media-body" }, [
                      _c("h2", { staticClass: "mt-0 mb-1 text-info" }, [
                        _vm._v("62,150")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-pale-sky " }, [
                        _vm._v("Total Orders")
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3 mb-sm-0" }, [
                _c("div", { staticClass: "stat-widget-three py-2" }, [
                  _c("div", { staticClass: "media" }, [
                    _c("img", {
                      staticClass: "mr-4 mt-3",
                      attrs: {
                        src: __webpack_require__(/*! ../../../../assets/images/icons/5.png */ "./resources/assets/images/icons/5.png"),
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "media-body" }, [
                      _c("h2", { staticClass: "mt-0 mb-1 text-success" }, [
                        _vm._v("9,750")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-pale-sky " }, [
                        _vm._v("Total Delivery")
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "stat-widget-three py-2" }, [
                  _c("div", { staticClass: "media" }, [
                    _c("img", {
                      staticClass: "mr-4 mt-3",
                      attrs: {
                        src: __webpack_require__(/*! ../../../../assets/images/icons/6.png */ "./resources/assets/images/icons/6.png"),
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "media-body" }, [
                      _c("h2", { staticClass: "mt-0 mb-1 text-danger" }, [
                        _vm._v("4,250")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-pale-sky " }, [
                        _vm._v("Pending Orders")
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "stat-widget-three py-2" }, [
                  _c("div", { staticClass: "media" }, [
                    _c("img", {
                      staticClass: "mr-4 mt-3",
                      attrs: {
                        src: __webpack_require__(/*! ../../../../assets/images/icons/7.png */ "./resources/assets/images/icons/7.png"),
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "media-body" }, [
                      _c("h2", { staticClass: "mt-0 mb-1 text-warning" }, [
                        _vm._v("4,250")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-pale-sky " }, [
                        _vm._v("Orders Hold")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body text-center" }, [
            _c("div", { staticClass: "stat-widget-three py-2" }, [
              _c("div", { staticClass: "media" }, [
                _c("img", {
                  staticClass: "mr-4",
                  attrs: {
                    src: __webpack_require__(/*! ../../../../assets/images/icons/8.png */ "./resources/assets/images/icons/8.png"),
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "media-body" }, [
                  _c(
                    "div",
                    { staticClass: "rating d-flex align-items-center" },
                    [
                      _c("span", { staticClass: "m-0" }, [
                        _c("span", { staticClass: "text-warning" }, [
                          _c("i", { staticClass: "fa fa-star" })
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-warning" }, [
                          _c("i", { staticClass: "fa fa-star" })
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-warning" }, [
                          _c("i", { staticClass: "fa fa-star" })
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-warning" }, [
                          _c("i", { staticClass: "fa fa-star" })
                        ]),
                        _vm._v(" "),
                        _c("span", {}, [_c("i", { staticClass: "fa fa-star" })])
                      ]),
                      _vm._v(" "),
                      _c("h2", { staticClass: "mt-0 mb-0 ml-3 text-warning" }, [
                        _vm._v("4.0")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-pale-sky " }, [
                    _vm._v("Customer Satisfaction")
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card transparent-card" }, [
          _c("div", { staticClass: "card-header pb-0" }, [
            _c("h4", { staticClass: "card-title mt-2" }, [
              _vm._v(" Recent Orders List")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "table-action float-sm-right mt-4 mt-sm-0" },
              [
                _c("form", { attrs: { action: "#" } }, [
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "form-group mr-3" }, [
                      _c(
                        "select",
                        {
                          staticClass: "selectpicker show-tick",
                          attrs: { "data-width": "auto" }
                        },
                        [
                          _c("option", { attrs: { selected: "selected" } }, [
                            _vm._v("Russia")
                          ]),
                          _vm._v(" "),
                          _c("option", [_vm._v("USA")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Canada")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Australia")])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "select",
                        {
                          staticClass: "selectpicker show-tick",
                          attrs: { "data-width": "auto" }
                        },
                        [
                          _c("option", { attrs: { selected: "selected" } }, [
                            _vm._v("Last 30 Days")
                          ]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Last 1 MOnth")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Last 6 MOnth")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Last Year")])
                        ]
                      )
                    ])
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body p-0" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c(
                "table",
                {
                  staticClass:
                    "table table-padded recent-order-list-table table-responsive-fix-big"
                },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("#No")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Customer Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Delivery Date & Time")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Location")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Amount")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Status")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [_vm._v("01")]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass:
                              "mr-2 bg-primary rounded-circle text-center text-uppercase d-inline-block",
                            attrs: { href: "javascript:void()" }
                          },
                          [_vm._v("SM")]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-pale-sky" }, [
                          _vm._v("Valentino Morose")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-muted" }, [
                        _vm._v("04 May 2018, 10:30 AM")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass: "text-primary",
                            attrs: { href: "javascript:void()" }
                          },
                          [_vm._v("Moscow")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("span", { staticClass: "text-pale-sky" }, [
                          _vm._v("$ 25.000")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "span",
                          {
                            staticClass:
                              "label label-xl label-rounded label-warning"
                          },
                          [_vm._v("Hold")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("02")]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass:
                              "mr-2 bg-lgreen rounded-circle text-center text-uppercase d-inline-block",
                            attrs: { href: "javascript:void()" }
                          },
                          [_vm._v("RM")]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-pale-sky" }, [
                          _vm._v("Adib")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-muted" }, [
                        _vm._v("04 May 2018, 10:30 AM")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass: "text-primary",
                            attrs: { href: "javascript:void()" }
                          },
                          [_vm._v("Samara")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("span", { staticClass: "text-pale-sky" }, [
                          _vm._v("$ 35.000")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "span",
                          {
                            staticClass:
                              "label label-xl label-rounded label-success"
                          },
                          [_vm._v("Delivered")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("03")]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass:
                              "mr-2 bg-dpink rounded-circle text-center text-uppercase d-inline-block",
                            attrs: { href: "javascript:void()" }
                          },
                          [_vm._v("SE")]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-pale-sky" }, [
                          _vm._v("Adam Razu")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-muted" }, [
                        _vm._v("04 May 2018, 10:30 AM")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass: "text-primary",
                            attrs: { href: "javascript:void()" }
                          },
                          [_vm._v("Suzdal")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("span", { staticClass: "text-pale-sky" }, [
                          _vm._v("$ 29.000")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "span",
                          {
                            staticClass:
                              "label label-xl label-rounded label-danger"
                          },
                          [_vm._v("Cancel")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("04")]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass:
                              "mr-2 bg-success rounded-circle text-center text-uppercase d-inline-block",
                            attrs: { href: "javascript:void()" }
                          },
                          [_vm._v("FM")]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-pale-sky" }, [
                          _vm._v("David Aziz")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-muted" }, [
                        _vm._v("04 May 2018, 10:30 AM")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass: "text-primary",
                            attrs: { href: "javascript:void()" }
                          },
                          [_vm._v("Hrasnoyarsk")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("span", { staticClass: "text-pale-sky" }, [
                          _vm._v("$ 38.000")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "span",
                          {
                            staticClass:
                              "label label-xl label-rounded label-success"
                          },
                          [_vm._v("Delivered")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("05")]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass:
                              "mr-2 bg-info rounded-circle text-center text-uppercase d-inline-block",
                            attrs: { href: "javascript:void()" }
                          },
                          [_vm._v("FK")]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-pale-sky" }, [
                          _vm._v("David Morose")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-muted" }, [
                        _vm._v("04 May 2018, 10:30 AM")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass: "text-primary",
                            attrs: { href: "javascript:void()" }
                          },
                          [_vm._v("Samara")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("span", { staticClass: "text-pale-sky" }, [
                          _vm._v("$ 75.000")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "span",
                          {
                            staticClass:
                              "label label-xl label-rounded label-warning"
                          },
                          [_vm._v("Hold")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("06")]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass:
                              "mr-2 bg-warning rounded-circle text-center text-uppercase d-inline-block",
                            attrs: { href: "javascript:void()" }
                          },
                          [_vm._v("MS")]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-pale-sky" }, [
                          _vm._v("Lionel Morose")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-muted" }, [
                        _vm._v("04 May 2018, 10:30 AM")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass: "text-primary",
                            attrs: { href: "javascript:void()" }
                          },
                          [_vm._v("Suzdal")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("span", { staticClass: "text-pale-sky" }, [
                          _vm._v("$ 225.000")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "span",
                          {
                            staticClass:
                              "label label-xl label-rounded label-warning"
                          },
                          [_vm._v("Hold")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("07")]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass:
                              "mr-2 bg-primary rounded-circle text-center text-uppercase d-inline-block",
                            attrs: { href: "javascript:void()" }
                          },
                          [_vm._v("GM")]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-pale-sky" }, [
                          _vm._v("Cristiano Morose")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-muted" }, [
                        _vm._v("04 May 2018, 10:30 AM")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass: "text-primary",
                            attrs: { href: "javascript:void()" }
                          },
                          [_vm._v("Moscow")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("span", { staticClass: "text-pale-sky" }, [
                          _vm._v("$ 25. 000")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "span",
                          {
                            staticClass:
                              "label label-xl label-rounded label-danger"
                          },
                          [_vm._v("Cancel")]
                        )
                      ])
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("nav", [
              _c(
                "ul",
                {
                  staticClass:
                    "pagination pagination-rounded pagination-md justify-content-end"
                },
                [
                  _c("li", { staticClass: "page-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "javascript:void()" }
                      },
                      [_vm._v("1")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "page-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "javascript:void()" }
                      },
                      [_vm._v("2")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "page-item active" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "javascript:void()" }
                      },
                      [_vm._v("3")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "page-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "javascript:void()" }
                      },
                      [_vm._v("4")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "page-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "javascript:void()" }
                      },
                      [_vm._v("5")]
                    )
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/ImageSelect.vue?vue&type=template&id=70cecbfe&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/ImageSelect.vue?vue&type=template&id=70cecbfe&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "form",
    {
      staticClass: "image-select-container",
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.onSubmitHandler($event)
        }
      }
    },
    [
      _c("div", { staticClass: "image-select-header-container" }, [
        _c("div", { staticClass: "image-select-header-item" }, [
          _c("h2", [_vm._v("Upload Image")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "close",
              attrs: { type: "button" },
              on: { click: _vm.onCloseHandler }
            },
            [_c("span", [_vm._v("×")])]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "image-select-header-item mt-10" }, [
          _c("div", [
            _c("input", {
              ref: "file",
              attrs: { type: "file", name: "image", id: "image" },
              on: { change: _vm.fileUpload }
            })
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-danger",
              attrs: { type: "button" },
              on: { click: _vm.deleteItems }
            },
            [_vm._v("Remove "), _vm._m(0)]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "image-select-main-container" },
        _vm._l(_vm.images, function(image) {
          return _c(
            "div",
            { key: image.id, staticClass: "image-select-main-item mr-5" },
            [
              _c("div", {
                staticClass: "image-select-item-image",
                style: { "background-image": "url(" + image.thumbnail + ")" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex" }, [
                _c("input", {
                  key: image.id,
                  staticClass: "mr-3 mt-1",
                  attrs: { id: image.id, type: "checkbox", name: image.id },
                  on: {
                    click: function($event) {
                      return _vm.selectItem(image.id)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: image.id } }, [
                  _vm._v(_vm._s(image.id))
                ])
              ])
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "image-select-footer-container" },
        [
          _vm.pagination
            ? _c("Pagination", {
                attrs: { pagination: _vm.pagination },
                on: { "get-new-items": _vm.getNewItems }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            [
              !_vm.showPreloader
                ? _c(
                    "button",
                    {
                      staticClass: "btn mr-2 btn-ft btn-flat btn-dark",
                      attrs: { type: "button" },
                      on: { click: _vm.onCloseHandler }
                    },
                    [_vm._v("Close")]
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.showPreloader
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-ft btn-flat btn-success",
                      attrs: { disabled: _vm.disableSubmit, type: "submit" }
                    },
                    [_vm._v("Select")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.showPreloader ? _c("Preloader") : _vm._e()
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-icon-right" }, [
      _c("i", { staticClass: "fa fa-close" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Pagination.vue?vue&type=template&id=3b0b08a3&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/Pagination.vue?vue&type=template&id=3b0b08a3& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "bootstrap-pagination my-3" }, [
    _c("nav", [
      _c(
        "ul",
        { staticClass: "pagination pagination-rounded pagination-sm" },
        [
          _vm.prevPageUrl != null
            ? _c(
                "li",
                { staticClass: "page-item", on: { click: _vm.getPrevItems } },
                [
                  _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                    _vm._v("<")
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.totalPages, function(item) {
            return _c(
              "li",
              {
                key: item,
                class: { active: item === _vm.currentPage, "page-item": 1 },
                on: {
                  click: function($event) {
                    return _vm.getSelectedPage(item)
                  }
                }
              },
              [
                _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                  _vm._v(_vm._s(item))
                ])
              ]
            )
          }),
          _vm._v(" "),
          _vm.nextPageUrl != null
            ? _c(
                "li",
                { staticClass: "page-item", on: { click: _vm.getNextItems } },
                [
                  _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                    _vm._v(">")
                  ])
                ]
              )
            : _vm._e()
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/icons/1.png":
/*!*********************************************!*\
  !*** ./resources/assets/images/icons/1.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/1.png?815802fc9ac8c77aa5b831eb49bff0f6";

/***/ }),

/***/ "./resources/assets/images/icons/2.png":
/*!*********************************************!*\
  !*** ./resources/assets/images/icons/2.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/2.png?991f0138b1e0a540bd36a8c835f0dc5c";

/***/ }),

/***/ "./resources/assets/images/icons/3.png":
/*!*********************************************!*\
  !*** ./resources/assets/images/icons/3.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/3.png?630168618dc9d0fe53f53ed796d34d63";

/***/ }),

/***/ "./resources/assets/images/icons/4.png":
/*!*********************************************!*\
  !*** ./resources/assets/images/icons/4.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/4.png?ca356cbdee32f58151ca18ec54390254";

/***/ }),

/***/ "./resources/assets/images/icons/5.png":
/*!*********************************************!*\
  !*** ./resources/assets/images/icons/5.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/5.png?e60a4eb845721c21dff3c1ef5b3ca061";

/***/ }),

/***/ "./resources/assets/images/icons/6.png":
/*!*********************************************!*\
  !*** ./resources/assets/images/icons/6.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/6.png?2f0ac213be39d4ba286c7f7d2581e53a";

/***/ }),

/***/ "./resources/assets/images/icons/7.png":
/*!*********************************************!*\
  !*** ./resources/assets/images/icons/7.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/7.png?1adc07075e2fa4fb1d94513c375a3501";

/***/ }),

/***/ "./resources/assets/images/icons/8.png":
/*!*********************************************!*\
  !*** ./resources/assets/images/icons/8.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/8.png?7be35017c169dcd961a4f61572e9f562";

/***/ }),

/***/ "./resources/js/components/LineChart.js":
/*!**********************************************!*\
  !*** ./resources/js/components/LineChart.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  data: function data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Data One',
          backgroundColor: '#f87979',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249EBF',
          //Data to be represented on y-axis
          data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
        }]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted: function mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options);
  }
});

/***/ }),

/***/ "./resources/js/components/PieChart.js":
/*!*********************************************!*\
  !*** ./resources/js/components/PieChart.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Pie"],
  data: function data() {
    return {
      dataCollection: {
        labels: ["Green", "Red", "Blue"],
        datasets: [{
          label: "Data One",
          backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
          data: [1, 10, 5]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted: function mounted() {
    this.renderChart(this.dataCollection, this.options);
  }
});

/***/ }),

/***/ "./resources/js/components/admin/dashboard/AdminDashboard.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/admin/dashboard/AdminDashboard.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminDashboard_vue_vue_type_template_id_c0b92e6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminDashboard.vue?vue&type=template&id=c0b92e6a& */ "./resources/js/components/admin/dashboard/AdminDashboard.vue?vue&type=template&id=c0b92e6a&");
/* harmony import */ var _AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminDashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/dashboard/AdminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminDashboard_vue_vue_type_template_id_c0b92e6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminDashboard_vue_vue_type_template_id_c0b92e6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/dashboard/AdminDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/dashboard/AdminDashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/admin/dashboard/AdminDashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard/AdminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/dashboard/AdminDashboard.vue?vue&type=template&id=c0b92e6a&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/admin/dashboard/AdminDashboard.vue?vue&type=template&id=c0b92e6a& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_c0b92e6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=template&id=c0b92e6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard/AdminDashboard.vue?vue&type=template&id=c0b92e6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_c0b92e6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_c0b92e6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/common/ImageSelect.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/common/ImageSelect.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageSelect_vue_vue_type_template_id_70cecbfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageSelect.vue?vue&type=template&id=70cecbfe&scoped=true& */ "./resources/js/components/common/ImageSelect.vue?vue&type=template&id=70cecbfe&scoped=true&");
/* harmony import */ var _ImageSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageSelect.vue?vue&type=script&lang=js& */ "./resources/js/components/common/ImageSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImageSelect_vue_vue_type_style_index_0_id_70cecbfe_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageSelect.vue?vue&type=style&index=0&id=70cecbfe&scoped=true&lang=sass& */ "./resources/js/components/common/ImageSelect.vue?vue&type=style&index=0&id=70cecbfe&scoped=true&lang=sass&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImageSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageSelect_vue_vue_type_template_id_70cecbfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageSelect_vue_vue_type_template_id_70cecbfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "70cecbfe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/ImageSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/ImageSelect.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/common/ImageSelect.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageSelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/ImageSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/ImageSelect.vue?vue&type=style&index=0&id=70cecbfe&scoped=true&lang=sass&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/common/ImageSelect.vue?vue&type=style&index=0&id=70cecbfe&scoped=true&lang=sass& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSelect_vue_vue_type_style_index_0_id_70cecbfe_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageSelect.vue?vue&type=style&index=0&id=70cecbfe&scoped=true&lang=sass& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/ImageSelect.vue?vue&type=style&index=0&id=70cecbfe&scoped=true&lang=sass&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSelect_vue_vue_type_style_index_0_id_70cecbfe_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSelect_vue_vue_type_style_index_0_id_70cecbfe_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSelect_vue_vue_type_style_index_0_id_70cecbfe_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSelect_vue_vue_type_style_index_0_id_70cecbfe_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSelect_vue_vue_type_style_index_0_id_70cecbfe_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/common/ImageSelect.vue?vue&type=template&id=70cecbfe&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/common/ImageSelect.vue?vue&type=template&id=70cecbfe&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSelect_vue_vue_type_template_id_70cecbfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageSelect.vue?vue&type=template&id=70cecbfe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/ImageSelect.vue?vue&type=template&id=70cecbfe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSelect_vue_vue_type_template_id_70cecbfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSelect_vue_vue_type_template_id_70cecbfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/common/Pagination.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/common/Pagination.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination_vue_vue_type_template_id_3b0b08a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=3b0b08a3& */ "./resources/js/components/common/Pagination.vue?vue&type=template&id=3b0b08a3&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js& */ "./resources/js/components/common/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagination_vue_vue_type_template_id_3b0b08a3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pagination_vue_vue_type_template_id_3b0b08a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/Pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/Pagination.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/common/Pagination.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/Pagination.vue?vue&type=template&id=3b0b08a3&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/common/Pagination.vue?vue&type=template&id=3b0b08a3& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_3b0b08a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=template&id=3b0b08a3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Pagination.vue?vue&type=template&id=3b0b08a3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_3b0b08a3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_3b0b08a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);