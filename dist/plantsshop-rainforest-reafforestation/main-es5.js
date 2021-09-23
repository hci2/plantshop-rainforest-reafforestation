function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <app-header></app-header>\n\n  <router-outlet></router-outlet>\n\n  <app-footer></app-footer>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/list/list.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donation/list/list.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDonationListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron\">\n  <h1>List</h1>\n\n  <h2>Current order id:</h2>\n  <p class=\"selectedId\">{{currentOrder.id}}</p>\n\n  <h3>Select one country of the list for what you want to spend your current share of your order´s donation:</h3>\n\n  <table>\n    <tr>\n      <th *ngFor=\"let colHeader of columnsHeader\">\n        {{colHeader}}\n      </th>\n    </tr>\n    <tr class=\"tableRow\" *ngFor=\"let country of countries\">\n      <td>\n        <button class=\"btn btn-dark\" (click)=\"onSelectDonation()\">Donate</button>\n      </td>\n      <td *ngFor=\"let colKey of columnsKey\">\n<!--                <img *ngIf=\"colKey === 'flagUrl' || colKey === 'imgUrl'; else title\" src=\"{{country[colKey]}}\">-->\n<!--                <ng-template #title *ngIf=\"colKey==='label'; else description\">-->\n<!--                  <div class=\"tableElementTitle\">{{country[colKey]}}</div>-->\n<!--                </ng-template>-->\n<!--                <ng-template #description>-->\n<!--                  <small class=\"tableElementDescription\">{{country[colKey]}}</small>-->\n<!--                </ng-template>-->\n\n        <img *ngIf=\"colKey === 'flagUrl' || colKey === 'imgUrl'\" src=\"{{country[colKey]}}\">\n        <div *ngIf=\"colKey==='label'\" class=\"tableElementTitle\">{{country[colKey]}}</div>\n        <small *ngIf=\"colKey==='description'\" class=\"tableElementDescription\">{{country[colKey]}}</small>\n      </td>\n    </tr>\n  </table>\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/map/map.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donation/map/map.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDonationMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron\">\r\n  <h1>Map</h1>\r\n\r\n  <h2>Current order id:</h2>\r\n  <p class=\"selectedId\">{{currentOrder.id}}</p>\r\n\r\n  <h3>Select one country for what you want to spend your current share of your order´s donation:</h3>\r\n\r\n  <br>\r\n\r\n  <agm-map [latitude]=\"initialLat\" [longitude]=\"initialLng\" [zoom]=\"initialZoom\">\r\n    TODO: *ngFor to create agm-marker for the different possible donation countries\r\n    <div *ngFor=\"let country of countries\">\r\n      <agm-marker [iconUrl]=\"defaultIconUrl\" [latitude]=\"country.lat\" [longitude]=\"country.lng\" [label]=\"country.label\"\r\n                  (markerClick)=\"onSelectMarker(country.id)\">\r\n      </agm-marker>\r\n    </div>\r\n  </agm-map>\r\n\r\n  <div id=\"anchorSelCountry\"></div>\r\n  <div *ngIf=\"selectedCountry\">\r\n    <h3 class=\"titleSelectedCountry\">{{selectedCountry.label}}</h3>\r\n    <img src=\"{{selectedCountry.flagUrl}}\">\r\n    <div>\r\n      <button class=\"btn btn-dark\" (click)=\"onSelectDonation()\">\r\n        Donate\r\n      </button>\r\n    </div>\r\n    <p>{{selectedCountry.description}}</p>\r\n    <img class=\"imgSelectedCountry\" src=\"{{selectedCountry.imgUrl}}\">\r\n  </div>\r\n\r\n\r\n<!--  <div fxLayout=\"row wrap\" fxLayoutGap=\"32px\" fxLayoutAlign=\"flex-start\" *ngIf=\"selectedCountry\">-->\r\n<!--    <ng-container class=\"selCountry\">-->\r\n<!--      <h3>{{selectedCountry.label}}</h3>-->\r\n<!--      <img src=\"{{selectedCountry.flagUrl}}\">-->\r\n<!--      <button class=\"btn btn-dark\" (click)=\"onSelectDonation()\">-->\r\n<!--        Donate-->\r\n<!--      </button>-->\r\n<!--    </ng-container>-->\r\n<!--    <ng-container class=\"selCountry\">-->\r\n<!--      <p>{{selectedCountry.description}}</p>-->\r\n<!--    </ng-container>-->\r\n<!--    <ng-container class=\"selCountry\">-->\r\n<!--      <img src=\"{{selectedCountry.imgUrl}}\">-->\r\n<!--    </ng-container>-->\r\n<!--  </div>-->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/organisation/organisation.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donation/organisation/organisation.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDonationOrganisationOrganisationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron\">\n  <h1>Organisation</h1>\n\n  <h2>Current order id:</h2>\n  <p class=\"selectedId\">{{currentOrder.id}}</p>\n\n  <h3>Select one organisation of the list for what you want to spend your current share of your order´s donation:</h3>\n\n  <br>\n\n  <!--  <ul>-->\n  <!--    <div class=\"organisation\" *ngFor=\"let organisation of organisations\">-->\n  <!--      <p>{{organisation.name}}</p>-->\n  <!--      <img src=\"{{organisation.imgUrl}}\">-->\n  <!--      <p>{{organisation.description}}</p>-->\n  <!--      <p>{{organisation.continents}}</p>-->\n  <!--      <a href=\"{{organisation.websiteUrl}}\" target=\"_blank\">Link</a>-->\n  <!--      <br>-->\n  <!--      <button (click)=\"onSelectDonation()\">Donate</button>-->\n  <!--    </div>-->\n  <!--  </ul>-->\n\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"32px\" fxLayoutAlign=\"flex-start\">\n    <div class=\"organisation\" *ngFor=\"let organisation of organisations\">\n      <ng-container>\n        <h3 id=\"name\">{{organisation.name}}</h3>\n        <img src=\"{{organisation.imgUrl}}\">\n      </ng-container>\n      <ng-container>\n        <div class=\"linkButton\">\n          <a href=\"{{organisation.websiteUrl}}\" target=\"_blank\">Link</a>\n        </div>\n        <p>{{organisation.description}}</p>\n        <p>{{organisation.continents}}</p>\n      </ng-container>\n      <div class=\"linkButton\">\n        <button class=\"btn btn-dark\" (click)=\"onSelectDonation()\">Donate</button>\n      </div>\n      <!--      <ng-container *ngFor=\"let organisation of organisations\">-->\n      <!--        <p>{{organisation.name}}</p>-->\n      <!--        <img src=\"{{organisation.imgUrl}}\">-->\n      <!--        <p>{{organisation.description}}</p>-->\n      <!--        <p>{{organisation.continents}}</p>-->\n      <!--        <a href=\"{{organisation.websiteUrl}}\" target=\"_blank\">Link</a>-->\n      <!--        <button class=\"btn btn-dark\" (click)=\"onSelectDonation()\">Donate</button>-->\n      <!--      </ng-container>-->\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar fixed-bottom navbar-expand navbar-dark bg-dark\">\n  <div class=\"navbar-text m-auto\">\n    <a routerLink=\"/imprint\" routerLinkActive=\"active\">Imprint</a>\n    <a href=\"mailto:support@plantshop-rainforest-reafforestation.at\" target=\"_blank\">\n      Contact\n    </a>\n    <p  class=\"text-xs-center\">© Copyright 2019. All rights reserved.</p>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark fixed-top\">\n  <a class=\"navbar-brand\" routerLink=\"/\" routerLinkActive=\"active\">{{title}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"true\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/overview\" routerLinkActive=\"active\" (click)=\"checkForRandomOrders()\">Overview</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/donation/map\" routerLinkActive=\"active\" (click)=\"checkForRandomOrders()\">Map</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/donation/organisation\" routerLinkActive=\"active\" (click)=\"checkForRandomOrders()\">Organisation</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/donation/list\" routerLinkActive=\"active\" (click)=\"checkForRandomOrders()\">List</a>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron\">\n  <h1>Welcome home, happy to see you!<br> The rainforest is smiling for you!</h1>\n  <p>You can either enter your order id (additionally) or continue your purchasing process. You can find the order id on the etiquette on the plant.</p>\n  <h2>Your order ids: </h2>\n  <div *ngIf=\"orders.length <1\">\n    <p>-</p>\n  </div>\n  <div *ngFor=\"let order of orders\">\n    <p>{{order.id}}</p>\n  </div>\n\n  <h2>Redeem order id: </h2>\n  <form [formGroup]=\"checkoutOrderForm\" (ngSubmit)=\"onSubmitRedeemedOrder(checkoutOrderForm.value)\">\n    <div class=\"form-group\">\n      <label for=\"oder-id\">\n        Order Id:\n      </label>\n      <input id=\"oder-id\" class=\"form-control\" type=\"text\" formControlName=\"id\" placeholder=\"order id on etiquette of plant\">\n    </div>\n    <button class=\"btn-dark\" type=\"submit\">Redeem order id</button>\n  </form>\n\n  <div class=\"overview-buttons\">\n    <button class=\"btn btn-dark\" (click)=\"routeToOverview()\">\n      Continue to donation\n    </button>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/imprint/imprint.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imprint/imprint.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppImprintImprintComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron\">\n  <p>\n    Operator and responsible for the content of this website<br>\n    Plant-for-the-Planet Foundation<br>\n    Am Bahnhof 1<br>\n    82449 Uffing am Staffelsee<br>\n    Germany<br>\n  </p>\n\n  <p>\n    Phone: +49 (0)8808 9345<br>\n    Fax: +49 (0)8808 9346\n  </p>\n\n  <p>\n    Email: support@plantshop-rainforest-reafforestation.at<br>\n    Internet: http://localhost:4200\n  </p>\n\n  <p>\n    Authorised Representative<br>\n    Philipp Dangl\n  </p>\n  <p>\n    German VAT Id according to § 27 a German Value Added Tax Law: DE 276314869\n  </p>\n  <p>\n    The Plant-for-the-Planet Foundation is from the local tax office of Garmisch-Partenkirchen recognized as a charitable foundation, and\n    can\n    issue tax deductible receipts for donations.\n  </p>\n  <p>\n    Bank account <br>\n    Plant-for-the-Planet <br>\n    Account number 200 000 <br>\n    Bank code 700 20 500, Sozialbank <br>\n    IBAN DE13 7002 0500 0000 200 000 <br>\n    BIC BFSWDE33MUE <br>\n    SWIFT BFSWDE33MUE <br>\n  </p>\n  <p>\n    Person responsible for content <br>\n    Philipp Dangl <br>\n    As regards content a person responsible according to §55 paragraph 2 RStV German law are the respective authors of the concerning\n    contribution or forum contribution. <br>\n    The contents of our website were produced with great care. However we are not able to guarantee the total accuracy, integrity and\n    currency\n    of those contents. As a service provider we are responsible under the general law § 7 paragraph 1 TMG for the contents of our pages.\n    Service providers are however not obligated to monitor the content that is submitted or stored from foreign sources or to investigate\n    circumstances that indicate illegal activities. Under the general laws, obligations to remove or block access to information remain\n    thereby unaffected. Liability is however only possible from the time of realisation that an infringement has occurred. If we become\n    aware\n    of such a violation, we will be sure to remove the contents immediately.<br>\n  </p>\n  <p>\n    Liability<br>\n    In spite of careful content control we take over no liability for the contents of external links. For the contents of linked sites are\n    responsible excluding their operators.<br>\n  </p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/overview/overview.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/overview/overview.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOverviewOverviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron\">\n  <ng-template [ngIf]=\"currentOrder\" [ngIfElse]=\"currentOrderEmpty\">\n    <div>\n      <h1>Decide for your favorite donation type</h1>\n      <p>We are happy that you bought your plant(s) here. 30 % of your expenditures are spent as donation for the reafforestation of the\n        rainforest!</p>\n\n      <h2>Your order ids: </h2>\n      <div *ngFor=\"let order of orders\">\n        <p>{{order.id}}</p>\n      </div>\n      <h2>Current order id:</h2>\n      <p class=\"selectedId\">{{currentOrder.id}}</p>\n      <br>\n      <h3>Select one of the following donation types for what you want to spend your current donation´s share of your order:</h3>\n\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Select donation\">\n        <button type=\"button\" class=\"btn btn-dark\" [routerLink]=\"['../donation/map']\" routerLinkActive=\"true\">Map</button>\n        <button type=\"button\" class=\"btn btn-dark\" [routerLink]=\"['../donation/list']\" routerLinkActive=\"true\">List</button>\n        <button type=\"button\" class=\"btn btn-dark\" [routerLink]=\"['../donation/organisation']\" routerLinkActive=\"true\">Organisation</button>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #currentOrderEmpty>\n    <div  class=\"donationSuccess\" >\n      <h1>Many thanks! The remaining rainforest will smile because of you! No orders are left. See you soon!</h1>\n      <img class=\"donationSuccessImg\" src=\"https://www.edgeofexistence.org/wp-content/uploads/2014/03/loris_planted_trees_credited.jpg\">\n    </div>\n  </ng-template>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron\">\n  <h1>Page not found!</h1>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\r\n  background-color: rgba(113, 175, 0, 0.75);\r\n  height: ;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBeUM7RUFDekMsUUFBUTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTMsIDE3NSwgMCwgMC43NSk7XHJcbiAgaGVpZ2h0OiA7XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-page-scroll-core */
    "./node_modules/ngx-page-scroll-core/fesm2015/ngx-page-scroll-core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _overview_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./overview/overview.component */
    "./src/app/overview/overview.component.ts");
    /* harmony import */


    var _donation_map_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./donation/map/map.component */
    "./src/app/donation/map/map.component.ts");
    /* harmony import */


    var _donation_list_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./donation/list/list.component */
    "./src/app/donation/list/list.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _donation_organisation_organisation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./donation/organisation/organisation.component */
    "./src/app/donation/organisation/organisation.component.ts");
    /* harmony import */


    var _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./imprint/imprint.component */
    "./src/app/imprint/imprint.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]
    }, {
      path: 'overview',
      component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_11__["OverviewComponent"]
    }, {
      path: 'donation/map',
      component: _donation_map_map_component__WEBPACK_IMPORTED_MODULE_12__["MapComponent"]
    }, {
      path: 'donation/list',
      component: _donation_list_list_component__WEBPACK_IMPORTED_MODULE_13__["ListComponent"]
    }, {
      path: 'donation/organisation',
      component: _donation_organisation_organisation_component__WEBPACK_IMPORTED_MODULE_17__["OrganisationComponent"]
    }, // children: [
    //   {path: 'map', component: MapComponent},
    //   {path: 'list', component: ListComponent},
    //   {path: 'organisation', component: FundComponent},
    // ]
    {
      path: 'imprint',
      component: _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_18__["ImprintComponent"]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _overview_overview_component__WEBPACK_IMPORTED_MODULE_11__["OverviewComponent"], _donation_map_map_component__WEBPACK_IMPORTED_MODULE_12__["MapComponent"], _donation_organisation_organisation_component__WEBPACK_IMPORTED_MODULE_17__["OrganisationComponent"], _donation_list_list_component__WEBPACK_IMPORTED_MODULE_13__["ListComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"], _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_18__["ImprintComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
        enableTracing: false
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_9__["NgxPageScrollCoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-center'
      }), _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyA0HGHUrjdLwZdcm0zhFggq6HbkmBPWgXQ'
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/donation/list/list.component.css":
  /*!**************************************************!*\
    !*** ./src/app/donation/list/list.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDonationListListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".jumbotron{\r\n  background-color: rgba(113, 175, 0, 0.75);\r\n}\r\n\r\nh1, h2, h3, p {\r\n  text-align: center;\r\n}\r\n\r\n.selectedId {\r\n  color: #ffffff;\r\n  font-size: larger;\r\n}\r\n\r\nth, td {\r\n  padding: 20px;\r\n}\r\n\r\n.btn {\r\n  font-size: larger;\r\n}\r\n\r\n.tableElementDescription {\r\n  font-size: smaller;\r\n}\r\n\r\n.tableElementTitle {\r\n  font-weight: bold;\r\n}\r\n\r\ntr{\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\nth, td {\r\n  border-right: 1px solid black;\r\n  /*text-align: center;*/\r\n  /*vertical-align: middle;*/\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRpb24vbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9kb25hdGlvbi9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTMsIDE3NSwgMCwgMC43NSk7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMsIHAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlbGVjdGVkSWQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4udGFibGVFbGVtZW50RGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnRhYmxlRWxlbWVudFRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxudHJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIC8qdGV4dC1hbGlnbjogY2VudGVyOyovXHJcbiAgLyp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyovXHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/donation/list/list.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/donation/list/list.component.ts ***!
    \*************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppDonationListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/http.service */
    "./src/app/service/http.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/toast.service */
    "./src/app/service/toast.service.ts");
    /* harmony import */


    var _service_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/order.service */
    "./src/app/service/order.service.ts");

    var ListComponent =
    /*#__PURE__*/
    function () {
      function ListComponent(route, router, httpService, orderService, toastService) {
        _classCallCheck(this, ListComponent);

        this.route = route;
        this.router = router;
        this.httpService = httpService;
        this.orderService = orderService;
        this.toastService = toastService;
        this.columnsHeader = ["Donate", "Country", "Flag", "Description", "Rainforest"];
        this.columnsKey = ["label", "flagUrl", "description", "imgUrl"];
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.orders = this.orderService.getOrders();
          this.currentOrder = this.orderService.getCurrentOrder();
          this.getAndSetCountries();
        }
      }, {
        key: "getAndSetCountries",
        value: function getAndSetCountries() {
          var _this = this;

          this.httpService.getCountries().subscribe(function (data) {
            return _this.countries = data;
          });
        }
      }, {
        key: "onSelectDonation",
        value: function onSelectDonation() {
          this.orderService.removeOrder(this.currentOrder);
          this.toastService.display();
          this.router.navigate(['/overview']);
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: _service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
      }, {
        type: _service_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }];
    };

    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/list/list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.css */
      "./src/app/donation/list/list.component.css")).default]
    })], ListComponent);
    /***/
  },

  /***/
  "./src/app/donation/map/map.component.css":
  /*!************************************************!*\
    !*** ./src/app/donation/map/map.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDonationMapMapComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".jumbotron{\r\n  background-color: rgba(113, 175, 0, 0.75);\r\n}\r\n\r\nh1, h2, h3, p, form, label, input, button, div {\r\n  text-align: center;\r\n}\r\n\r\n.selectedId {\r\n  color: #ffffff;\r\n  font-size: larger;\r\n}\r\n\r\nagm-map {\r\n  display: block;\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n  width: 90%;\r\n  height: 75vh;\r\n}\r\n\r\n/*ng-container > h3, button, p {*/\r\n\r\n/*  flex: 1 0 calc(33.3% - 5px);*/\r\n\r\n/*}*/\r\n\r\n.btn {\r\n  margin: 5vh;\r\n  font-size: larger;\r\n}\r\n\r\n.titleSelectedCountry {\r\n  margin-top: 5vh;\r\n  margin-bottom: 5vh;\r\n}\r\n\r\n.imgSelectedCountry {\r\n  margin-bottom: 5vh;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRpb24vbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUEsaUNBQWlDOztBQUNqQyxpQ0FBaUM7O0FBQ2pDLElBQUk7O0FBRUo7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0aW9uL21hcC9tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTMsIDE3NSwgMCwgMC43NSk7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMsIHAsIGZvcm0sIGxhYmVsLCBpbnB1dCwgYnV0dG9uLCBkaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlbGVjdGVkSWQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG5hZ20tbWFwIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA3NXZoO1xyXG59XHJcblxyXG4vKm5nLWNvbnRhaW5lciA+IGgzLCBidXR0b24sIHAgeyovXHJcbi8qICBmbGV4OiAxIDAgY2FsYygzMy4zJSAtIDVweCk7Ki9cclxuLyp9Ki9cclxuXHJcbi5idG4ge1xyXG4gIG1hcmdpbjogNXZoO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4udGl0bGVTZWxlY3RlZENvdW50cnkge1xyXG4gIG1hcmdpbi10b3A6IDV2aDtcclxuICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbn1cclxuXHJcbi5pbWdTZWxlY3RlZENvdW50cnkge1xyXG4gIG1hcmdpbi1ib3R0b206IDV2aDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/donation/map/map.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/donation/map/map.component.ts ***!
    \***********************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppDonationMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/http.service */
    "./src/app/service/http.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/toast.service */
    "./src/app/service/toast.service.ts");
    /* harmony import */


    var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-page-scroll-core */
    "./node_modules/ngx-page-scroll-core/fesm2015/ngx-page-scroll-core.js");
    /* harmony import */


    var _service_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/order.service */
    "./src/app/service/order.service.ts");

    var MapComponent =
    /*#__PURE__*/
    function () {
      function MapComponent(route, router, httpService, orderService, toastService, pageScrollService) {
        _classCallCheck(this, MapComponent);

        this.route = route;
        this.router = router;
        this.httpService = httpService;
        this.orderService = orderService;
        this.toastService = toastService;
        this.pageScrollService = pageScrollService;
        this.initialZoom = 2.8;
        this.initialLat = 8.195179;
        this.initialLng = 21.193984; // defaultIconUrl: string = 'https://image.flaticon.com/icons/png/128/1412/1412808.png';

        this.defaultIconUrl = 'https://www.weforest.org/map_ecosia/marker/marker_green_tree_47_30.png';
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.orders = this.orderService.getOrders();
          this.currentOrder = this.orderService.getCurrentOrder();
          this.getAndSetCountries();
        }
      }, {
        key: "getAndSetCountries",
        value: function getAndSetCountries() {
          var _this2 = this;

          return this.httpService.getCountries().subscribe(function (data) {
            return _this2.countries = data;
          });
        }
      }, {
        key: "onSelectDonation",
        value: function onSelectDonation() {
          this.orderService.removeOrder(this.currentOrder);
          this.toastService.display();
          this.router.navigate(['/overview']);
        }
      }, {
        key: "onSelectMarker",
        value: function onSelectMarker(id) {
          this.selectedCountry = this.countries[id];
          this.pageScrollService.scroll({
            document: document,
            scrollTarget: '#anchorSelCountry'
          });
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: _service_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]
      }, {
        type: _service_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }, {
        type: ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_5__["PageScrollService"]
      }];
    };

    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/map/map.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.component.css */
      "./src/app/donation/map/map.component.css")).default]
    })], MapComponent);
    /***/
  },

  /***/
  "./src/app/donation/organisation/organisation.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/donation/organisation/organisation.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDonationOrganisationOrganisationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".jumbotron{\r\n  background-color: rgba(113, 175, 0, 0.75);\r\n}\r\n\r\nh1, h2, h3, p {\r\n  text-align: center;\r\n}\r\n\r\n.selectedId {\r\n  color: #ffffff;\r\n  font-size: larger;\r\n}\r\n\r\nng-container > p, img, a, button {\r\n  /*flex: 1 0 calc(50% - 5px);*/\r\n}\r\n\r\n.organisation{\r\n  margin-bottom: 2vh;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n#name {\r\n  font-weight: bold;\r\n}\r\n\r\nimg{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 5vh;\r\n  margin-bottom: 5vh;\r\n  width: 50%;\r\n}\r\n\r\na {\r\n  /*color: black;*/\r\n  text-decoration: none;\r\n  padding: 1rem;\r\n}\r\n\r\na:hover {\r\n  font-weight: bold;\r\n}\r\n\r\n.linkButton{\r\n  text-align: center;\r\n  margin-bottom: 1vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRpb24vb3JnYW5pc2F0aW9uL29yZ2FuaXNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0aW9uL29yZ2FuaXNhdGlvbi9vcmdhbmlzYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTMsIDE3NSwgMCwgMC43NSk7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMsIHAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlbGVjdGVkSWQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG5uZy1jb250YWluZXIgPiBwLCBpbWcsIGEsIGJ1dHRvbiB7XHJcbiAgLypmbGV4OiAxIDAgY2FsYyg1MCUgLSA1cHgpOyovXHJcbn1cclxuXHJcbi5vcmdhbmlzYXRpb257XHJcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI25hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDV2aDtcclxuICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuYSB7XHJcbiAgLypjb2xvcjogYmxhY2s7Ki9cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5hOmhvdmVyIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxpbmtCdXR0b257XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/donation/organisation/organisation.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/donation/organisation/organisation.component.ts ***!
    \*****************************************************************/

  /*! exports provided: OrganisationComponent */

  /***/
  function srcAppDonationOrganisationOrganisationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganisationComponent", function () {
      return OrganisationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/http.service */
    "./src/app/service/http.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/toast.service */
    "./src/app/service/toast.service.ts");
    /* harmony import */


    var _service_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/order.service */
    "./src/app/service/order.service.ts");

    var OrganisationComponent =
    /*#__PURE__*/
    function () {
      function OrganisationComponent(route, router, orderService, httpService, toastService) {
        _classCallCheck(this, OrganisationComponent);

        this.route = route;
        this.router = router;
        this.orderService = orderService;
        this.httpService = httpService;
        this.toastService = toastService;
      }

      _createClass(OrganisationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.orders = this.orderService.getOrders();
          this.currentOrder = this.orderService.getCurrentOrder();
          this.getAndSetOrganisations();
        }
      }, {
        key: "getAndSetOrganisations",
        value: function getAndSetOrganisations() {
          var _this3 = this;

          this.httpService.getOrganisations().subscribe(function (data) {
            return _this3.organisations = data;
          });
        }
      }, {
        key: "onSelectDonation",
        value: function onSelectDonation() {
          this.orderService.removeOrder(this.currentOrder);
          this.toastService.display();
          this.router.navigate(['/overview']);
        }
      }]);

      return OrganisationComponent;
    }();

    OrganisationComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
      }, {
        type: _service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: _service_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }];
    };

    OrganisationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-organisation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./organisation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/organisation/organisation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./organisation.component.css */
      "./src/app/donation/organisation/organisation.component.css")).default]
    })], OrganisationComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\ndiv > a {\r\n  text-decoration: none;\r\n  padding: 1rem;\r\n}\r\n\r\ndiv > a:hover {\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdiA+IGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbmRpdiA+IGE6aG92ZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-item{\r\n  padding:2px;\r\n  margin-left: 7px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbXtcclxuICBwYWRkaW5nOjJweDtcclxuICBtYXJnaW4tbGVmdDogN3B4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/order.service */
    "./src/app/service/order.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(orderService) {
        _classCallCheck(this, HeaderComponent);

        this.orderService = orderService;
        this.title = 'Plantshop Rainforest Reafforestation';
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "checkForRandomOrders",
        value: function checkForRandomOrders() {
          this.orderService.checkIsRandomOrdersAndInCaseCreateRandomOrders();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _service_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".jumbotron {\r\n  background-color: rgba(113, 175, 0, 0.75);\r\n  height: 100vh;\r\n}\r\n\r\nh1, h2, p, form, label, input, button, div {\r\n  text-align: center;\r\n}\r\n\r\ndiv:not(.jumbotron) {\r\n  margin: 1vh;\r\n}\r\n\r\n.btn {\r\n  margin-top: 10vh;\r\n  font-size: larger;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBeUM7RUFDekMsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTMsIDE3NSwgMCwgMC43NSk7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuaDEsIGgyLCBwLCBmb3JtLCBsYWJlbCwgaW5wdXQsIGJ1dHRvbiwgZGl2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdjpub3QoLmp1bWJvdHJvbikge1xyXG4gIG1hcmdpbjogMXZoO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/order.service */
    "./src/app/service/order.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(formBuilder, orderService, router) {
        _classCallCheck(this, HomeComponent);

        this.formBuilder = formBuilder;
        this.orderService = orderService;
        this.router = router;
        this.orders = new Array();
        this.checkoutOrderForm = this.formBuilder.group({
          id: ''
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.orders = this.orderService.getOrders(); // this.orderService.removeAllOfLocalStorage();
        }
      }, {
        key: "onSubmitRedeemedOrder",
        value: function onSubmitRedeemedOrder(customerData) {
          console.warn('Your orderService has been submitted', customerData); // PRODUCES DOUBLE VALUES
          // this.orders.push(customerData);

          this.orderService.setOrder(customerData);
          this.checkoutOrderForm.reset();
        }
      }, {
        key: "routeToOverview",
        value: function routeToOverview() {
          if (this.orders.length > 0) {
            this.orderService.setOrders(this.orders);
            this.orderService.setIsRandomOrders(false);
          } else {
            this.orderService.setRandomOrders();
            this.orderService.setIsRandomOrders(true);
          }

          this.router.navigateByUrl("/overview");
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _service_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/imprint/imprint.component.css":
  /*!***********************************************!*\
    !*** ./src/app/imprint/imprint.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppImprintImprintComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".jumbotron{\r\n  background-color: rgba(113, 175, 0, 0.75);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wcmludC9pbXByaW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBeUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9pbXByaW50L2ltcHJpbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTMsIDE3NSwgMCwgMC43NSk7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/imprint/imprint.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/imprint/imprint.component.ts ***!
    \**********************************************/

  /*! exports provided: ImprintComponent */

  /***/
  function srcAppImprintImprintComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImprintComponent", function () {
      return ImprintComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ImprintComponent =
    /*#__PURE__*/
    function () {
      function ImprintComponent() {
        _classCallCheck(this, ImprintComponent);
      }

      _createClass(ImprintComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImprintComponent;
    }();

    ImprintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-imprint',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./imprint.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/imprint/imprint.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./imprint.component.css */
      "./src/app/imprint/imprint.component.css")).default]
    })], ImprintComponent);
    /***/
  },

  /***/
  "./src/app/model/order.ts":
  /*!********************************!*\
    !*** ./src/app/model/order.ts ***!
    \********************************/

  /*! exports provided: Order */

  /***/
  function srcAppModelOrderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Order", function () {
      return Order;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Order = function Order(id) {
      _classCallCheck(this, Order);

      this.id = id;
    };
    /***/

  },

  /***/
  "./src/app/overview/overview.component.css":
  /*!*************************************************!*\
    !*** ./src/app/overview/overview.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOverviewOverviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".jumbotron{\n  background-color: rgba(113, 175, 0, 0.75);\n  height: 100vh;\n}\n\nh1, h2, h3, p, form, label, input, button, div {\n  text-align: center;\n}\n\n.selectedId {\n  color: #ffffff;\n  font-size: larger;\n}\n\n.btn-group {\n  margin-top: 5vh;\n}\n\n.donationSuccess{\n  margin-top: 5vh;\n  text-align: center;\n}\n\n.donationSuccessImg{\n  margin-top: 2vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUF5QztFQUN6QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEzLCAxNzUsIDAsIDAuNzUpO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5oMSwgaDIsIGgzLCBwLCBmb3JtLCBsYWJlbCwgaW5wdXQsIGJ1dHRvbiwgZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VsZWN0ZWRJZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLmJ0bi1ncm91cCB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbn1cblxuLmRvbmF0aW9uU3VjY2Vzc3tcbiAgbWFyZ2luLXRvcDogNXZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZG9uYXRpb25TdWNjZXNzSW1ne1xuICBtYXJnaW4tdG9wOiAydmg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/overview/overview.component.ts":
  /*!************************************************!*\
    !*** ./src/app/overview/overview.component.ts ***!
    \************************************************/

  /*! exports provided: OverviewComponent */

  /***/
  function srcAppOverviewOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverviewComponent", function () {
      return OverviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/order.service */
    "./src/app/service/order.service.ts");

    var OverviewComponent =
    /*#__PURE__*/
    function () {
      function OverviewComponent(orderService) {
        _classCallCheck(this, OverviewComponent);

        this.orderService = orderService;
      }

      _createClass(OverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.orders = this.orderService.getOrders();
          this.currentOrder = this.orderService.getCurrentOrder();
        }
      }]);

      return OverviewComponent;
    }();

    OverviewComponent.ctorParameters = function () {
      return [{
        type: _service_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
      }];
    };

    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-overview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./overview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/overview/overview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./overview.component.css */
      "./src/app/overview/overview.component.css")).default]
    })], OverviewComponent);
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".jumbotron{\r\n  background-color: rgba(113, 175, 0, 0.75);\r\n  height: 100vh;\r\n}\r\n\r\nh1 {\r\n  margin-top: 35vh;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUF5QztFQUN6QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTMsIDE3NSwgMCwgMC43NSk7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbi10b3A6IDM1dmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var timeoutTillRedirection = 3000;

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent(route, router) {
        _classCallCheck(this, PageNotFoundComponent);

        this.route = route;
        this.router = router;
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          setTimeout(function () {
            _this4.router.navigate(['/']);
          }, timeoutTillRedirection);
        }
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/page-not-found/page-not-found.component.css")).default]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/service/http.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/http.service.ts ***!
    \*****************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppServiceHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var urlCountries = 'assets/countries.json';
    var urlOrganisations = 'assets/organisations.json';

    var HttpService =
    /*#__PURE__*/
    function () {
      function HttpService(httpClient) {
        _classCallCheck(this, HttpService);

        this.httpClient = httpClient;
      }

      _createClass(HttpService, [{
        key: "getCountries",
        value: function getCountries() {
          return this.httpClient.get(urlCountries);
        }
      }, {
        key: "getOrganisations",
        value: function getOrganisations() {
          return this.httpClient.get(urlOrganisations);
        }
      }]);

      return HttpService;
    }();

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HttpService);
    /***/
  },

  /***/
  "./src/app/service/order.service.ts":
  /*!******************************************!*\
    !*** ./src/app/service/order.service.ts ***!
    \******************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppServiceOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-webstorage-service */
    "./node_modules/ngx-webstorage-service/fesm2015/ngx-webstorage-service.js");
    /* harmony import */


    var _uuid_generator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./uuid-generator.service */
    "./src/app/service/uuid-generator.service.ts");

    var STORAGE_KEY_CURRENT_ORDER = 'storage_current_order';
    var STORAGE_KEY_ORDERS = 'storage_orders';
    var STORAGE_KEY_IS_RANDOM_ORDERS = 'storage_random_orders';

    var OrderService =
    /*#__PURE__*/
    function () {
      // LOCAL STORAGE
      // constructor(private uuidGeneratorService: UuidGeneratorService, @Inject(LOCAL_STORAGE) private storageService: StorageService) {
      // }
      function OrderService(uuidGeneratorService, storageService) {
        _classCallCheck(this, OrderService);

        this.uuidGeneratorService = uuidGeneratorService;
        this.storageService = storageService;
        this.isRandomOrders = false;
        this.orders = new Array();
        this.currentOrder = null;
      }

      _createClass(OrderService, [{
        key: "checkIsRandomOrdersAndInCaseCreateRandomOrders",
        value: function checkIsRandomOrdersAndInCaseCreateRandomOrders() {
          var isRandomOrders = this.getIsRandomOrders();
          console.log(isRandomOrders);

          if (isRandomOrders || isRandomOrders == undefined) {
            this.setRandomOrders();
            this.setIsRandomOrders(true);
          }
        }
      }, {
        key: "getIsRandomOrders",
        value: function getIsRandomOrders() {
          console.log("Getting is random orders ...");
          this.isRandomOrders = this.storageService.get(STORAGE_KEY_IS_RANDOM_ORDERS);
          console.log(this.storageService.get(STORAGE_KEY_IS_RANDOM_ORDERS) || 'Local storage is random orders is empty');
          return this.isRandomOrders;
        }
      }, {
        key: "setIsRandomOrders",
        value: function setIsRandomOrders(isRandomOrders) {
          console.log("Saving is random orders ...");
          this.isRandomOrders = isRandomOrders;
          this.storageService.set(STORAGE_KEY_IS_RANDOM_ORDERS, this.isRandomOrders);
          console.log(this.storageService.get(STORAGE_KEY_IS_RANDOM_ORDERS) || 'Local storage is random orders is empty');
        }
      }, {
        key: "setOrders",
        value: function setOrders(orders) {
          console.log("Saving orders ...");
          this.orders = orders;
          this.currentOrder = this.orders[0];
          this.saveAllToLocalStorage();
        }
      }, {
        key: "setOrder",
        value: function setOrder(order) {
          console.log("Saving order ...");
          this.orders.push(order);
          this.currentOrder = this.orders[0];
          this.saveAllToLocalStorage();
        }
      }, {
        key: "getOrders",
        value: function getOrders() {
          console.log("Loading orders ...");
          this.loadOrdersFromLocalStorage();

          if (!this.orders) {
            this.orders = new Array();
          }

          return this.orders;
        }
      }, {
        key: "isOrdersOrCurrentOrderEmpty",
        value: function isOrdersOrCurrentOrderEmpty() {
          return this.isLocalStorageEmpty();
        }
      }, {
        key: "removeOrder",
        value: function removeOrder(order) {
          var _this5 = this;

          console.log("Removing order ...");
          this.loadOrdersFromLocalStorage();
          this.orders.forEach(function (item, index) {
            if (Object.is(item.id, order.id)) {
              _this5.orders.splice(index, 1);

              _this5.currentOrder = _this5.orders.length > 0 ? _this5.orders[0] : null;
              console.log('Removed order: ' + item.id);

              _this5.saveAllToLocalStorage();
            }
          });
          console.log('Removing not working for order: ' + order.id);
        }
      }, {
        key: "setRandomOrders",
        value: function setRandomOrders() {
          console.log("Saving random orders ...");
          this.orders = this.uuidGeneratorService.getUuids(this.uuidGeneratorService.getRandomAmount());
          this.currentOrder = this.orders[0];
          this.saveAllToLocalStorage();
        }
      }, {
        key: "getCurrentOrder",
        value: function getCurrentOrder() {
          this.loadCurrentOrderFromLocalStorage();
          return this.currentOrder;
        }
      }, {
        key: "loadCurrentOrderFromLocalStorage",
        value: function loadCurrentOrderFromLocalStorage() {
          this.currentOrder = this.storageService.get(STORAGE_KEY_CURRENT_ORDER);
          console.log(this.storageService.get(STORAGE_KEY_CURRENT_ORDER) || 'Local storage current order is empty');
        }
      }, {
        key: "loadOrdersFromLocalStorage",
        value: function loadOrdersFromLocalStorage() {
          this.orders = this.storageService.get(STORAGE_KEY_ORDERS);
          console.log(this.storageService.get(STORAGE_KEY_ORDERS) || 'Local storage orders is empty');
        }
      }, {
        key: "isLocalStorageEmpty",
        value: function isLocalStorageEmpty() {
          return this.storageService.has(STORAGE_KEY_ORDERS) || this.storageService.has(STORAGE_KEY_CURRENT_ORDER);
        }
      }, {
        key: "saveAllToLocalStorage",
        value: function saveAllToLocalStorage() {
          this.storageService.set(STORAGE_KEY_ORDERS, this.orders);
          this.storageService.set(STORAGE_KEY_CURRENT_ORDER, this.currentOrder);
          console.log(this.storageService.get(STORAGE_KEY_ORDERS) || 'Local storage orders is empty');
          console.log(this.storageService.get(STORAGE_KEY_CURRENT_ORDER) || 'Local storage current order is empty');
        }
      }, {
        key: "removeAllOfLocalStorage",
        value: function removeAllOfLocalStorage() {
          console.log("Deleting local storage ...");
          console.log(this.storageService.get(STORAGE_KEY_ORDERS) || 'Local storage orders is empty');
          console.log(this.storageService.get(STORAGE_KEY_CURRENT_ORDER) || 'Local storage current order is empty');
          this.storageService.remove(STORAGE_KEY_ORDERS);
          this.storageService.remove(STORAGE_KEY_CURRENT_ORDER);
          this.orders = new Array();
          this.currentOrder = null;
          console.log(this.storageService.get(STORAGE_KEY_ORDERS) || 'Local storage orders is empty');
          console.log(this.storageService.get(STORAGE_KEY_CURRENT_ORDER) || 'Local storage current order is empty');
        }
      }]);

      return OrderService;
    }();

    OrderService.ctorParameters = function () {
      return [{
        type: _uuid_generator_service__WEBPACK_IMPORTED_MODULE_3__["UuidGeneratorService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE"]]
        }]
      }];
    };

    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE"]))], OrderService);
    /***/
  },

  /***/
  "./src/app/service/toast.service.ts":
  /*!******************************************!*\
    !*** ./src/app/service/toast.service.ts ***!
    \******************************************/

  /*! exports provided: ToastService */

  /***/
  function srcAppServiceToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var ToastService =
    /*#__PURE__*/
    function () {
      function ToastService(toastr) {
        _classCallCheck(this, ToastService);

        this.toastr = toastr;
      }

      _createClass(ToastService, [{
        key: "display",
        value: function display() {
          this.toastr.info('Thank you for your donation for reafforestation!', 'Successfully donated!');
        }
      }]);

      return ToastService;
    }();

    ToastService.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }];
    };

    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ToastService);
    /***/
  },

  /***/
  "./src/app/service/uuid-generator.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/service/uuid-generator.service.ts ***!
    \***************************************************/

  /*! exports provided: UuidGeneratorService */

  /***/
  function srcAppServiceUuidGeneratorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UuidGeneratorService", function () {
      return UuidGeneratorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _model_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/order */
    "./src/app/model/order.ts");

    var minUuid = 1;
    var maxAddRandomUuid = 5;

    var UuidGeneratorService =
    /*#__PURE__*/
    function () {
      function UuidGeneratorService() {
        _classCallCheck(this, UuidGeneratorService);

        this.randomAmount = this.generateRandomAmount();
      }

      _createClass(UuidGeneratorService, [{
        key: "getUuids",
        value: function getUuids(amount) {
          var prefix = 'order-';
          var uuids = [];

          for (var i = 0; i < amount; i++) {
            uuids.push(new _model_order__WEBPACK_IMPORTED_MODULE_3__["Order"](prefix + Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])()));
          }

          return uuids;
        }
      }, {
        key: "getRandomAmount",
        value: function getRandomAmount() {
          return this.randomAmount;
        }
      }, {
        key: "generateRandomAmount",
        value: function generateRandomAmount() {
          return minUuid + Math.floor(Math.random() * Math.floor(maxAddRandomUuid));
        }
      }]);

      return UuidGeneratorService;
    }();

    UuidGeneratorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UuidGeneratorService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\DANGL\OneDrive\Software\Angular\plantshop-rainforest-reafforestation\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map