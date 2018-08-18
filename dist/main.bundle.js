webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_book_list_data_filter_pipe__ = __webpack_require__("../../../../../src/app/components/book-list/data-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_payment_service__ = __webpack_require__("../../../../../src/app/services/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_shipping_service__ = __webpack_require__("../../../../../src/app/services/shipping.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_checkout_service__ = __webpack_require__("../../../../../src/app/services/checkout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_my_account_my_account_component__ = __webpack_require__("../../../../../src/app/components/my-account/my-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/components/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_book_list_book_list_component__ = __webpack_require__("../../../../../src/app/components/book-list/book-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_book_detail_book_detail_component__ = __webpack_require__("../../../../../src/app/components/book-detail/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_order_order_component__ = __webpack_require__("../../../../../src/app/components/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_order_summary_order_summary_component__ = __webpack_require__("../../../../../src/app/components/order-summary/order-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_book_list_api_book_list_api_component__ = __webpack_require__("../../../../../src/app/components/book-list-api/book-list-api.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_my_account_my_account_component__["a" /* MyAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_my_profile_my_profile_component__["a" /* MyProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_book_list_book_list_component__["a" /* BookListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_book_list_data_filter_pipe__["a" /* DataFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_24__components_book_detail_book_detail_component__["a" /* BookDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_order_order_component__["a" /* OrderComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_order_summary_order_summary_component__["a" /* OrderSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_book_list_api_book_list_api_component__["a" /* BookListAPIComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_datatable__["DataTableModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_12__services_payment_service__["a" /* PaymentService */],
            __WEBPACK_IMPORTED_MODULE_13__services_shipping_service__["a" /* ShippingService */],
            __WEBPACK_IMPORTED_MODULE_14__services_book_service__["a" /* BookService */],
            __WEBPACK_IMPORTED_MODULE_15__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_16__services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_17__services_checkout_service__["a" /* CheckoutService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_my_account_my_account_component__ = __webpack_require__("../../../../../src/app/components/my-account/my-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/components/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_book_list_book_list_component__ = __webpack_require__("../../../../../src/app/components/book-list/book-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_book_detail_book_detail_component__ = __webpack_require__("../../../../../src/app/components/book-detail/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_order_order_component__ = __webpack_require__("../../../../../src/app/components/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_order_summary_order_summary_component__ = __webpack_require__("../../../../../src/app/components/order-summary/order-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_book_list_api_book_list_api_component__ = __webpack_require__("../../../../../src/app/components/book-list-api/book-list-api.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });










var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'myAccount',
        component: __WEBPACK_IMPORTED_MODULE_2__components_my_account_my_account_component__["a" /* MyAccountComponent */]
    },
    {
        path: 'myProfile',
        component: __WEBPACK_IMPORTED_MODULE_3__components_my_profile_my_profile_component__["a" /* MyProfileComponent */]
    },
    {
        path: 'bookList',
        component: __WEBPACK_IMPORTED_MODULE_4__components_book_list_book_list_component__["a" /* BookListComponent */]
    },
    {
        path: 'bookDetail/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__components_book_detail_book_detail_component__["a" /* BookDetailComponent */]
    },
    {
        path: 'shoppingCart',
        component: __WEBPACK_IMPORTED_MODULE_6__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */]
    },
    {
        path: 'checkout',
        component: __WEBPACK_IMPORTED_MODULE_7__components_order_order_component__["a" /* OrderComponent */]
    },
    {
        path: 'orderSummary',
        component: __WEBPACK_IMPORTED_MODULE_8__components_order_summary_order_summary_component__["a" /* OrderSummaryComponent */]
    },
    {
        path: 'search/:searchQ',
        component: __WEBPACK_IMPORTED_MODULE_9__components_book_list_api_book_list_api_component__["a" /* BookListAPIComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/book-detail/book-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#rowStyle {\n  margin-top: 120px;\n}\n\n#bookDetailsHeading {\n  font-family: helvetica, serif;\n}\n\n#imageLogo {\n  text-align: center;\n}\n\n#bookPanel {\n  border-width: 5px;\n  margin-top: 20px;\n}\n\n#addBookSuccess {\n  color: forestgreen;\n}\n\n#listPrice {\n  text-decoration: line-through;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/book-detail/book-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <p style=\"text-align:center;\">\n      <img src=\"../../../assets/image/logo.png\" height=250>\n    </p>\n    <div class=\"col-xs-8\">\n      <h2 style=\"font-family:helvetica;\"><span>Book Details</span></h2>\n    </div>\n\n  </div>\n\n  <hr class=\"style18\">\n  <div class=\"row\">\n    <div class=\"row\" id=\"rowStyle\">\n      <div class=\"col-xs-3\">\n        <a routerLink=\"/bookList\">Back to book list</a>\n        <br/>\n        <img class=\"img-responsive\" src=\"{{serverPath}}/image/book/{{book.id}}.png\"/>\n      </div>\n      <div class=\"col-xs-9\">\n        <h3><span *ngIf=\"addBookSuccess\" id=\"addBookSuccess\">\n          <i class=\"fa fa-check\" style=\"color:forestgreen\"></i>\n          Added to cart.</span>\n        </h3>\n        <h3><span *ngIf=\"notEnoughStock\"\n                  style=\"color:red\">Oops, only <span>{{book.inStockNumber}}</span> In Stock.</span></h3>\n        <h3>{{book.title}}</h3>\n        <div class=\"row\">\n          <div class=\"col-xs-5\">\n            <h5><strong>Author: </strong><span>{{book.author}}</span></h5>\n            <p><strong>Publisher:</strong><span>{{book.publisher}}</span></p>\n            <p><strong>Publication Date:</strong><span>{{book.publicationDate}}</span></p>\n            <p><strong>Language:</strong><span>{{book.language}}</span></p>\n            <p><strong>Category:</strong><span>{{book.category}}</span></p>\n            <p><strong><span>{{book.format}}</span>:</strong> <span>{{book.numberOfPages}}</span> pages</p>\n            <p><strong>ISBN:</strong> <span>{{book.isbn}}</span></p>\n            <p><strong>Shipping Weight:</strong> <span>{{book.shippingWeight}}</span> ounces</p>\n          </div>\n          <div class=\"col-xs-7\">\n            <div class=\"panel panel-default\" id=\"bookPanel\">\n              <div class=\"panel-body\">\n                <div class=\"col-xs-6\">\n                  <h4>Our Price: <span style=\"color: #db3208;\">$<span>\n            \t\t\t\t\t\t{{book.ourPrice | number : '1.2-2'}}\n            \t\t\t\t\t</span></span></h4>\n                  <p>List Price: <span id=\"listPrice\">$<span>{{book.listPrice | number : '1.2-2'}}</span></span>\n                  </p>\n                  <p>You Save: $<span>{{book.listPrice-book.ourPrice | number : '1.2-2'}}</span></p>\n                  <span>Qty: </span>\n                  <select [(ngModel)]=\"qty\" class=\"browser-default\" style=\"width:50px; display:inline;\">\n                    <option *ngFor=\"let x of numberList\" [ngValue]=\"x\">{{x}}</option>\n                  </select>\n                </div>\n                <div class=\"col-xs-6\">\n                  <h4 *ngIf=\"book.inStockNumber>10\" style=\"color:green;\">In Stock</h4>\n                  <h4 *ngIf=\"book.inStockNumber<10 && book.inStockNumber>0\" style=\"color:green;\">Only <span>{{book.inStockNumber}}</span>\n                    In Stock</h4>\n                  <h4 *ngIf=\"book.inStockNumber==0\" style=\"color:darkred;\">Unavailable</h4>\n                  <button md-raised-button [disabled]=\"book.inStockNumber==0\" (click)=\"onAddToCart()\"\n                          class=\"mat-primary\">Add to Cart\n                  </button>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <hr/>\n      <p>{{book.description}}</p>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/book-detail/book-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__("../../../../../src/app/models/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookDetailComponent = (function () {
    function BookDetailComponent(bookService, cartService, router, http, route) {
        this.bookService = bookService;
        this.cartService = cartService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.book = new __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */]();
        this.serverPath = __WEBPACK_IMPORTED_MODULE_6__constants_app_const__["a" /* AppConst */].serverPath;
        this.numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.addBookSuccess = false;
        this.notEnoughStock = false;
    }
    BookDetailComponent.prototype.onAddToCart = function () {
        var _this = this;
        this.cartService.addItem(this.bookId, this.qty).subscribe(function (res) {
            console.log(res.text());
            _this.addBookSuccess = true;
        }, function (err) {
            console.log(err.text());
            _this.notEnoughStock = true;
        });
    };
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.bookId = Number.parseInt(params['id']);
        });
        this.bookService.getBook(this.bookId).subscribe(function (res) {
            _this.book = res.json();
        }, function (error) {
            console.log(error);
        });
        this.qty = 1;
    };
    return BookDetailComponent;
}());
BookDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-book-detail',
        template: __webpack_require__("../../../../../src/app/components/book-detail/book-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/book-detail/book-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], BookDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=book-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/book-list-api/book-list-api.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#authorName{\n  color: darkred;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/book-list-api/book-list-api.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-8\">\n      <h2 style=\"font-family:helvetica;\"><span>List of Books from Google API</span></h2>\n    </div>\n  </div>\n\n  <hr class=\"style18\">\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let book of results.items\"\n        class=\"list-group-item\">\n      <img src=\"{{book.volumeInfo.imageLinks.smallThumbnail}}\"/>\n      <span>\n        {{book.volumeInfo.title}} //\n        <span id=\"authorName\">Author: </span>{{book.volumeInfo.authors[0]}}\n      </span>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/book-list-api/book-list-api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListAPIComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookListAPIComponent = (function () {
    function BookListAPIComponent(bookService, router, http, route) {
        this.bookService = bookService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.results = {
            items: []
        };
    }
    BookListAPIComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            return _this.bookService.searchBookAPI(params['searchQ'])
                .then(function (results) { return _this.results = results; });
        });
    };
    return BookListAPIComponent;
}());
BookListAPIComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-book-list-api',
        template: __webpack_require__("../../../../../src/app/components/book-list-api/book-list-api.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/book-list-api/book-list-api.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], BookListAPIComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=book-list-api.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/book-list/book-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/book-list/book-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <p style=\"text-align:center;\">\n      <img src=\"../../../assets/image/logo.png\" height=250>\n    </p>\n    <div class=\"col-xs-8\">\n      <h2 style=\"font-family:helvetica;\"><span>List of Books</span></h2>\n    </div>\n\n  </div>\n\n  <hr class=\"style18\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-9\">\n      <table class=\"table\" [mfData]=\"bookList | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\"\n             [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\n        <thead>\n        <tr>\n          <th colspan=\"5\">\n            <div class=\"row\">\n              <div class=\"col-md-9\">\n                Filter by Description:\n                <input class=\"form-control\" [(ngModel)]=\"filterQuery\"/>\n              </div>\n              <div class=\"col-md-3\">\n                <label class=\"label-control\">Rows on page</label>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\n                  <option [ngValue]=\"5\">5</option>\n                  <option [ngValue]=\"10\">10</option>\n                  <option [ngValue]=\"15\">15</option>\n                </select>\n              </div>\n            </div>\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let book of mf.data\">\n          <div class=\"row\" style=\"margin-bottom: 30px;\">\n            <div class=\"col-md-3\">\n              <a (click)=\"onSelect(book)\" style=\"cursor:pointer;\">\n                <img class=\"img-responsive\" src=\"{{serverPath}}/image/book/{{book.id}}.png\"/>\n              </a>\n            </div>\n            <div class=\"col-md-9\">\n              <h4 (click)=\"onSelect(book)\" style=\"margin-top:20px; cursor:pointer;\">{{book.title}}\n              </h4>\n              <span>{{book.publicationDate}}</span>\n              <p>{{book.author}}</p>\n              <a (click)=\"onSelect(book)\" style=\"cursor:pointer;\"><span>{{book.format | uppercase}}</span></a>\n              <span>{{book.numberOfPages}}</span><span> pages</span>\n              <br/>\n              <a (click)=\"onSelect(book)\"><span style=\"font-size: x-large; color:#db3208\">$<span>{{book.ourPrice | number : '1.2-2'}}</span></span></a>\n              <span style=\"text-decoration:line-through;\">$<span>{{book.listPrice | number : '1.2-2'}}</span></span>\n              <p>{{book.description | slice:0:500}}</p>\n            </div>\n          </div>\n        </tr>\n        </tbody>\n        <tfoot>\n        <tr>\n          <td colspan=\"5\">\n            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\n          </td>\n        </tr>\n        </tfoot>\n      </table>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/book-list/book-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookListComponent = (function () {
    function BookListComponent(bookService, router, http, route) {
        this.bookService = bookService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.filterQuery = '';
        this.rowsOnPage = 5;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_4__constants_app_const__["a" /* AppConst */].serverPath;
    }
    BookListComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        this.router.navigate(['/bookDetail', this.selectedBook.id]);
    };
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params['bookList']) {
                console.log('filtered book list');
                _this.bookList = JSON.parse(params['bookList']);
            }
            else {
                _this.bookService.getBookList().subscribe(function (res) {
                    console.log(res.json());
                    _this.bookList = res.json();
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    return BookListComponent;
}());
BookListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-book-list',
        template: __webpack_require__("../../../../../src/app/components/book-list/book-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/book-list/book-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], BookListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=book-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/book-list/data-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.description.indexOf(query) > -1; });
        }
        return array;
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: 'dataFilter'
    })
], DataFilterPipe);

//# sourceMappingURL=data-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 \n{\n\ttext-align:center;\n}\n.flex-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n\t\t<p style=\"text-align:center;\">\n\t\t\t<img src=\"../../../assets/image/logo.png\" height=370>\n\t\t</p>\n\n    </div>\n    \n    <hr class=\"style18\">\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-4\">\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<a class=\"pointer\" routerLink=\"/bookList\">\n\t\t\t\t\t\t<img src=\"../../../assets/image/bestseller.png\" class=\"img-responsive\" />\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-4\">\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<a class=\"pointer\" routerLink=\"/hours\">\n\t\t\t\t\t\t<img src=\"../../../assets/image/hours.png\" class=\"img-responsive\" />\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-4\">\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<a class=\"pointer\" routerLink=\"/faq\">\n\t\t\t\t\t\t<img src=\"../../../assets/image/faq.png\" class=\"img-responsive\" />\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div>\n\t\t<h3 style=\"font-family:helvetica;\"><span>~ Featured Books ~</span></h3>\n\t\t<hr style=\"margin-top: 15px;\" />\n\t</div>\n\n\t<img class=\"img-responsive\" src=\"../../../assets/image/shelf.png\" style=\"margin-top: -5px; z-index:-1;\" />\n\n\t<div class=\"row\" style=\"margin:auto; margin-top:-190px; margin-bottom:50px; width:90%;\">\n\t\t<div class=\"col-xs-2\">\n\t\t\t<img class=\"img-responsive\" style=\"width: 71.5%;\" src=\"../../../assets/image/1.png\" />\n\t\t</div>\n\t\t<div class=\"col-xs-2\">\n\t\t\t<img class=\"img-responsive\" style=\"width: 71%;\" src=\"../../../assets/image/2.png\" />\n\t\t</div>\n\t\t<div class=\"col-xs-2\">\n\t\t\t<img class=\"img-responsive\" style=\"width: 74%;\" src=\"../../../assets/image/3.png\" />\n\t\t</div>\n\t\t<div class=\"col-xs-2\">\n\t\t\t<img class=\"img-responsive\" style=\"width: 70%;\" src=\"../../../assets/image/4.png\" />\n\t\t</div>\n\t\t<div class=\"col-xs-2\">\n\t\t\t<img class=\"img-responsive\" style=\"width: 70%;\" src=\"../../../assets/image/5.png\" />\n\t\t</div>\n\t\t<div class=\"col-xs-2\">\n\t\t\t<img class=\"img-responsive\" style=\"width: 69%;\" src=\"../../../assets/image/6.png\" />\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/my-account/my-account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/my-account/my-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n\t\t<p style=\"text-align:center;\">\n\t\t\t<img src=\"../../../assets/image/logo.png\" height=250>\n\t\t</p>\n\t\t<div class=\"col-xs-8\">\n\t\t\t<h2 style=\"font-family:helvetica;\"><span>Login/Register</span></h2>\n\t\t</div>\n\n    </div>\n    \n    <hr class=\"style18\">\n\n\t<div class=\"row\" style=\"margint-top:30px;\">\n\t\t<div class=\"col-xs-3\"></div>\n\t\t<div class=\"col-xs-9\">\n\t\t\t<div class=\"panel-group\">\n\t\t\t\t<div class=\"panel panel-default panel-faq\" style=\"border:none;\">\n\t\t\t\t\t<div class=\"panel-body\" style=\"background-color: #ededed; margin-top:20px;\">\n\t\t\t\t\t\t<md-tab-group>\n\t\t\t\t\t\t\t<md-tab label=\"Login\">\n\t\t\t\t\t\t\t\t<div style=\"margin-top:20px;\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"loginError\" style=\"color:red;\">\n\t\t\t\t\t\t\t\t\t\tIncorrect username or password.\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"onLogin()\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for =\"username\">Username *</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"credential.username\" required=\"required\" autofocus=\"autofocus\">\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color:#828282;\">Enter your username</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for =\"password\">Password *</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"credential.password\" required=\"required\" autofocus=\"autofocus\">\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color:#828282;\">Enter your password</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<button md-raised-button type=\"submit\" class=\"mat-primary\">Log In</button>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</md-tab>\n\t\t\t\t\t\t\t<md-tab label=\"New Account\">\n\t\t\t\t\t\t\t\t<div style=\"margin-top: 20px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-info\" *ngIf=\"emailSent\">An email has been sent to the email address you just registered. Please validate your email adderss and update your password info.</div>\n\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"onNewAccount()\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"newUsername\">Username *</label>&nbsp;<span *ngIf=\"usernameExists\" style=\"color:red;\">Username already exists. Choose a different one.</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"newUsername\" name=\"username\" [(ngModel)]=\"username\" required=\"required\" >\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color:#828282;\">Enter desired username</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"email\">Email Address *</label>&nbsp;<span *ngIf=\"emailExists\" style=\"color:red;\">Email already exists. Choose a different one.</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" required=\"required\" >\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color:#828282;\">Please enter a valid e-mail address. All e-mails from the system will be sent to this address.</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<button md-raised-button type=\"submit\" class=\"mat-primary\">Create new account</button>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</md-tab>\n\t\t\t\t\t\t\t<md-tab label=\"Forgot Password?\">\n\t\t\t\t\t\t\t\t<div style=\"margin-top: 20px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-warning\" *ngIf=\"emailNotExists\">Email doesn't exist.</div>\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-success\" *ngIf=\"forgetPasswordEmailSent\">Email sent.</div>\n\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"onForgetPassword()\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"recoverEmail\">Your Email Address *</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"recoverEmail\" name=\"recoverEmail\" [(ngModel)]=\"recoverEmail\" required=\"required\" >\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color:#828282;\">Enter your registered email address.</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<button md-raised-button type=\"submit\" class=\"mat-primary\">Submit</button>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</md-tab>\n\t\t\t\t\t\t</md-tab-group>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/my-account/my-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyAccountComponent = (function () {
    function MyAccountComponent(loginService, userService, router) {
        this.loginService = loginService;
        this.userService = userService;
        this.router = router;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_4__constants_app_const__["a" /* AppConst */].serverPath;
        this.loginError = false;
        this.loggedIn = false;
        this.credential = { 'username': '', 'password': '' };
        this.emailSent = false;
        this.emailNotExists = false;
    }
    MyAccountComponent.prototype.onLogin = function () {
        var _this = this;
        this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('xAuthToken', res.json().token);
            _this.loggedIn = true;
            location.reload();
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.loggedIn = false;
            _this.loginError = true;
        });
    };
    MyAccountComponent.prototype.onNewAccount = function () {
        var _this = this;
        this.usernameExists = false;
        this.emailExists = false;
        this.emailSent = false;
        this.userService.newUser(this.username, this.email).subscribe(function (res) {
            console.log(res);
            _this.emailSent = true;
        }, function (error) {
            console.log(error.text());
            var errorMessage = error.text();
            if (errorMessage === 'usernameExists') {
                _this.usernameExists = true;
            }
            if (errorMessage === 'emailExists') {
                _this.emailExists = true;
            }
        });
    };
    MyAccountComponent.prototype.onForgetPassword = function () {
        var _this = this;
        this.forgetPasswordEmailSent = false;
        this.emailNotExists = false;
        this.userService.retrievePassword(this.recoverEmail).subscribe(function (res) {
            console.log(res);
            _this.forgetPasswordEmailSent = true;
        }, function (error) {
            console.log(error.text());
            var errorMessage = error.text();
            if (errorMessage === 'Email not found') {
                _this.emailNotExists = true;
            }
        });
    };
    MyAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.checkSession().subscribe(function (res) {
            _this.loggedIn = true;
        }, function (error) {
            _this.loggedIn = false;
        });
    };
    return MyAccountComponent;
}());
MyAccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-my-account',
        template: __webpack_require__("../../../../../src/app/components/my-account/my-account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/my-account/my-account.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], MyAccountComponent);

var _a, _b, _c;
//# sourceMappingURL=my-account.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/my-profile/my-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/my-profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n\t\t<p style=\"text-align:center;\">\n\t\t\t<img src=\"../../../assets/image/logo.png\" height=250>\n\t\t</p>\n\t\t<div class=\"col-xs-8\">\n\t\t\t<h2 style=\"font-family:helvetica;\"><span>Account Details</span></h2>\n\t\t</div>\n    </div>\n    \n    <hr class=\"style18\">\n\t<div *ngIf=\"!dataFetched\" style=\"margin-top: 50px;\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-2 col-md-offset-5\">\n\t\t\t\t<md-spinner></md-spinner>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\" style=\"margin-top:30px;\">\n\t\t<div class=\"col-xs-3\"></div>\n\t\t<div *ngIf=\"dataFetched\">\n\t\t\t<div class=\"col-xs-9\">\n\t\t\t\t<div class=\"panel-group\">\n\t\t\t\t\t<div class=\"panel panel-default\" style=\"border:none;\">\n\t\t\t\t\t\t<div class=\"panel-body\" style=\"background-color: #ededed; margin-top: 20px;\">\n\t\t\t\t\t\t\t<md-tab-group [selectedIndex]=\"selectedProfileTab\">\n\t\t\t\t\t\t\t\t<md-tab label=\"Edit\">\n\t\t\t\t\t\t\t\t\t<div style=\"margin-top: 20px;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"incorrectPassword\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>Incorrect Password!</strong> Please enter the correct password for the current user.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"alert alert-success\" *ngIf=\"updateSuccess\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>Update Success!</strong>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"onUpdateUserInfo()\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" [(ngModel)]=\"user.id\" />\n\t\t\t\t\t\t\t\t\t\t<div class=\"bg-info\" *ngIf=\"updateUserInfo\">User info updated.</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"firstName\">First Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" [(ngModel)]=\"user.firstName\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"lastName\">Last Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" [(ngModel)]=\"user.lastName\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"username\">\n\t\t\t\t\t\t\t\t\t\t\t\tUsername *\n\t\t\t\t\t\t\t\t\t\t\t</label>&nbsp;<span *ngIf=\"usernameExists\" style=\"color:red\">Username already exists. Choose a different one.</span>\n\t\t\t\t\t\t\t\t\t\t\t<input required=\"required\" type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"user.username\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"currentPassword\">\n\t\t\t\t\t\t\t\t\t\t\t\tCurrent Password\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"currentPassword\" />\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color:#828282;\">Enter your current password to change the E-mail address or Password.</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"email\">\n\t\t\t\t\t\t\t\t\t\t\t\tEmail Address *\n\t\t\t\t\t\t\t\t\t\t\t</label>&nbsp;<span *ngIf=\"emailExists\" style=\"color:red\">Email already exists. Choose a different one.</span>\n\t\t\t\t\t\t\t\t\t\t\t<input required=\"required\" type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\" />\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color:#828282;\">A valid e-mail address. All e-mails from the system will be sent to this address.</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtNewPassword\">\n\t\t\t\t\t\t\t\t\t\t\t\tNew Password *\n\t\t\t\t\t\t\t\t\t\t\t</label>&nbsp;<span id=\"checkPasswordMatch\" style=\"color:red;\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"txtNewPassword\" name=\"txtNewPassword\" [(ngModel)]=\"newPassword\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtConfirmPassword\">\n\t\t\t\t\t\t\t\t\t\t\t\tConfirm New Password *\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"txtConfirmPassword\" name=\"txtNewPassword\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<button md-raised-button type=\"submit\" class=\"mat-primary\" id=\"udpateuserInfoButton\">Save</button>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</md-tab>\n\t\t\t\t\t\t\t\t<md-tab label=\"Orders\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default panel-faq\" style=\"border: none;\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\" style=\"background-color: #ededed; margin-top: 20px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-sm table-inverse\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Order Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Order Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let order of orderList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"pointer\" (click)=\"onDisplayOrder(order)\"><span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t>{{order.orderDate}}</span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{order.id}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{order.orderTotal}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{order.orderStatus}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"displayOrderDetail\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Order Detail for Purchase #<span>{{order.id}}</span></h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default height\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\"><strong>Billing Details</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.billingAddress.billingAddressName}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.billingAddress.billingAddressStreet1}} {{order.billingAddress.billingAddressStreet2}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.billingAddress.billingAddressCity}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.billingAddress.billingAddressState}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.billingAddress.billingAddressZipcode}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default height\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\"><strong>Payment Information</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.payment.holderName}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/> Visa\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.payment.cardNumber}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Exp Date:</span> <span>{{order.payment.expiryMonth}}</span>/<span>{{order.payment.expiryYear}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default height\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\"><strong>Shipping Address</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.shippingAddress.shippingAddressName}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.shippingAddress.shippingAddressStreet1}}' '{{order.shippingAddress.shippingAddressStreet2}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.shippingAddress.shippingAddressCity}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.shippingAddress.shippingAddressState}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.shippingAddress.shippingAddressZipcode}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"text-center\"><strong>Order summary</strong></h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-condensed\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><strong>Item Name</strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><strong>Item Price</strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><strong>Item Quantity</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><strong>Total</strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let cartItem of cartItemList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{cartItem.book.title}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{cartItem.book.ourPrice}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{cartItem.qty}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{cartItem.subtotal}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"highrow\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"highrow\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"highrow text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Subtotal</strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"highrow text-right\">{{order.orderTotal}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow text-center\"><strong>Tax</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow text-right\">{{order.orderTotal*0.06}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow\"><i class=\"fa fa-barcode iconbig\"></i></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow text-center\"><strong>Total</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow text-right\">{{order.orderTotal*1.06}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</md-tab>\n\t\t\t\t\t\t\t\t\t\t<md-tab label=\"Payment\">\n\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"defaultPaymentSet\">Default payment set successfully!</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<md-tab-group (selectedIndexChange)=\"selectedBillingChange($event)\" [selectedIndex]=\"selectedBillingTab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<md-tab label=\"List of Credit Cards\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"setDefaultPayment()\" method=\"post\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Default</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Credit Card</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Operations</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let userPayment of userPaymentList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"defaultUserPaymentId\" [(ngModel)]=\"defaultUserPaymentId\" [value]=\"userPayment.id\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Default</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{userPayment.cardName}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a md-button (click)=\"onUpdatePayment(userPayment)\"><i class=\"fa fa-pencil\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a md-button (click)=\"onRemovePayment(userPayment.id)\"><i class=\"fa fa-times\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button md-raised-button class=\"mat-primary\" type=\"submit\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</md-tab>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<md-tab label=\"Add(Update) Credit Card\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"onNewPayment()\" method=\"post\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"bg-info\" *ngIf=\"updateUserPaymentInfo\">User info updated.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input hidden=\"hidden\" name=\"id\" [(ngModel)]=\"userPayment.id\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>* Give a name for your card:</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cardName\" placeholder=\"Card Name\" name=\"cardName\" required=\"required\" [(ngModel)]=\"userPayment.cardName\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Billing Address -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"billingName\">* Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"billingName\" placeholder=\"Receiver name\" name=\"userBillingName\" required=\"required\" [(ngModel)]=\"userBilling.userBillingName\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"billingAddress\">* Street Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"billAddress\" placeholder=\"Street Address 1\" name=\"userBillingStreet1\" required=\"required\" [(ngModel)]=\"userBilling.userBillingStreet1\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Street Address 2\" name=\"userBillingStreet2\" [(ngModel)]=\"userBilling.userBillingStreet2\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"billingCity\">* City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"userBillingCity\" placeholder=\"Your Billing City\" name=\"userBillingCity\" required=\"required\" [(ngModel)]=\"userBilling.userBillingCity\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"billingState\">* State</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"billingState\" class=\"form-control\" name=\"userBillingstate\" [(ngModel)]=\"userBilling.userBillingState\" required=\"required\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>-- state --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let state of stateList\">{{state}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"billingZipcode\">* Zipcode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"userBillingZipcode\" placeholder=\"Zipcode\" name=\"userBillingZipcode\" required=\"required\" [(ngModel)]=\"userBilling.userBillingZipcode\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- User Payment -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Credit Card Information</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../../../assets/image/creditcard.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"cardType\">* Select Card Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"cardType\" class=\"form-control\" name=\"cardType\" [(ngModel)]=\"userPayment.type\" required=\"required\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>-- Card Type --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"visa\">Visa</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mastercard\">Mastercard</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"discover\">Discover</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"amex\">American Express</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"cardHolder\">* Card Holder</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cardholder\" placeholder=\"Card Holder Name\" name=\"cardHolderName\" required=\"required\" [(ngModel)]=\"userPayment.holderName\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"cardNumber\">* Card Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input required=\"required\" id=\"cardNumber\" type=\"tel\" class=\"form-control\" name=\"cardNumber\" placeholder=\"Valid Card Number\" [(ngModel)]=\"userPayment.cardNumber\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-credit-card\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>* Expiration Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"expiryMonth\" required=\"required\" [(ngModel)]=\"userPayment.expiryMonth\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled=\"disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-- Month --\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Jan (01)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">Feb (02)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">Mar (03)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Apr (04)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"5\">May (05)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"6\">Jun (06)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"7\">July (07)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"8\">Aug (08)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"9\">Sep (09)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"10\">Oct (10)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"11\">Nov (11)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"12\">Dec (12)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"expiryYear\" required=\"required\" [(ngModel)]=\"userPayment.expiryYear\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled=\"disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-- Year --\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"17\">2017</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"18\">2018</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"19\">2019</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"20\">2020</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"21\">2021</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"22\">2022</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"23\">2023</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"24\">2024</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"25\">2025</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-5 pull-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"cardCVC\">CV Code</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"cardCVC\" type=\"tel\" class=\"form-control\" name=\"cardCVC\" placeholder=\"CVC\" [(ngModel)]=\"userPayment.cvc\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button md-raised-button type=\"submit\" class=\"mat-primary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSave All\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</md-tab>\n\t\t\t\t\t\t\t\t\t\t\t\t</md-tab-group>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</md-tab>\n\t\t\t\t\t\t\t\t\t\t<md-tab label=\"Shipping\">\n\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"defaultShippingSet\">Default shipping set successfully!</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<md-tab-group (selectedIndexChange)=\"selectedShippingChange($event)\" [selectedIndex]=\"selectedShippingTab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<md-tab label=\"List of Shipping Addresses\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"setDefaultShipping()\" method=\"post\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Default</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Shipping Address</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Operations</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let userShipping of userShippingList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"defaultUserShippingId\" [(ngModel)]=\"defaultUserShippingId\" [value]=\"userShipping.id\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Default</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{userShipping.userShippingStreet1}}, {{userShipping.userShippingStreetCity}}, {{userShipping.userShippingState}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a md-button (click)=\"onUpdateShipping(userShipping)\"><i class=\"fa fa-pencil\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a md-button (click)=\"onRemoveShipping(userShipping.id)\"><i class=\"fa fa-times\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button md-raised-button class=\"mat-primary\" type=\"submit\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</md-tab>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<md-tab label=\"Add(Update) Shipping Address\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"onNewShipping()\" method=\"post\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"bg-info\" *ngIf=\"updateUserShippingInfo\">User info updated.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input hidden=\"hidden\" name=\"id\" [(ngModel)]=\"userShipping.id\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"shippingname\">* Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"shippingName\" placeholder=\"Receiver Name\" name=\"userShippingName\" required=\"required\" [(ngModel)]=\"userShipping.userShippingName\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"shippingAddress\">* Street Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"shippingAddress\" placeholder=\"Street Address 1\" name=\"userShippingStreet1\" required=\"required\" [(ngModel)]=\"userShipping.userShippingStreet1\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Street Address 2\" name=\"userShippingStreet2\" [(ngModel)]=\"userShipping.userShippingStreet2\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"shippingCity\">* City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"shippingCity\" placeholder=\"Your Shipping City\" name=\"userShippingCity\" required=\"required\" [(ngModel)]=\"userShipping.userShippingCity\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"shippingState\">* State</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"shippingState\" class=\"form-control\" name=\"userShippingState\" [(ngModel)]=\"userShipping.userShippingState\" required=\"required\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>-- state --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let state of stateList\">{{state}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"shippingZipcode\">* Zipcode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"userShippingZipcode\" placeholder=\"Zipcode\" name=\"userShippingZipcode\" required=\"required\" [(ngModel)]=\"userShipping.userShippingZipcode\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button md-raised-button type=\"submit\" class=\"mat-primary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSave All\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</md-tab>\n\t\t\t\t\t\t\t\t\t\t\t\t</md-tab-group>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</md-tab>\n\t\t\t\t\t\t\t\t\t</md-tab-group>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/my-profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_payment_service__ = __webpack_require__("../../../../../src/app/services/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_shipping_service__ = __webpack_require__("../../../../../src/app/services/shipping.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_user_payment__ = __webpack_require__("../../../../../src/app/models/user-payment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_user_billing__ = __webpack_require__("../../../../../src/app/models/user-billing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_user_shipping__ = __webpack_require__("../../../../../src/app/models/user-shipping.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_order__ = __webpack_require__("../../../../../src/app/models/order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyProfileComponent = (function () {
    function MyProfileComponent(loginService, userService, paymentService, shippingService, orderService, router) {
        this.loginService = loginService;
        this.userService = userService;
        this.paymentService = paymentService;
        this.shippingService = shippingService;
        this.orderService = orderService;
        this.router = router;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_1__constants_app_const__["a" /* AppConst */].serverPath;
        this.dataFetched = false;
        this.credential = { 'username': '', 'password': '' };
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]();
        this.selectedProfileTab = 0;
        this.selectedBillingTab = 0;
        this.selectedShippingTab = 0;
        this.userPayment = new __WEBPACK_IMPORTED_MODULE_8__models_user_payment__["a" /* UserPayment */]();
        this.userBilling = new __WEBPACK_IMPORTED_MODULE_9__models_user_billing__["a" /* UserBilling */]();
        this.userPaymentList = [];
        this.stateList = [];
        this.userShipping = new __WEBPACK_IMPORTED_MODULE_10__models_user_shipping__["a" /* UserShipping */]();
        this.userShippingList = [];
        this.orderList = [];
        this.order = new __WEBPACK_IMPORTED_MODULE_11__models_order__["a" /* Order */]();
    }
    MyProfileComponent.prototype.selectedShippingChange = function (val) {
        this.selectedShippingTab = val;
    };
    MyProfileComponent.prototype.selectedBillingChange = function (val) {
        this.selectedBillingTab = val;
    };
    MyProfileComponent.prototype.onUpdateUserInfo = function () {
        var _this = this;
        this.userService.updateUserInfo(this.user, this.newPassword, this.currentPassword).subscribe(function (res) {
            console.log(res.text());
            _this.updateSuccess = true;
        }, function (error) {
            console.log(error.text());
            var errorMessage = error.text();
            if (errorMessage === 'Incorrect current password!')
                _this.incorrectPassword = true;
        });
    };
    MyProfileComponent.prototype.onNewPayment = function () {
        var _this = this;
        this.paymentService.newPayment(this.userPayment).subscribe(function (res) {
            _this.getCurrentUser();
            _this.selectedBillingTab = 0;
            _this.userPayment = new __WEBPACK_IMPORTED_MODULE_8__models_user_payment__["a" /* UserPayment */]();
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.onUpdatePayment = function (payment) {
        this.userPayment = payment;
        this.userBilling = payment.userBilling;
        this.selectedBillingTab = 1;
    };
    MyProfileComponent.prototype.onRemovePayment = function (id) {
        var _this = this;
        this.paymentService.removePayment(id).subscribe(function (res) {
            _this.getCurrentUser();
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.setDefaultPayment = function () {
        var _this = this;
        this.defaultPaymentSet = false;
        this.paymentService.setDefaultPayment(this.defaultUserPaymentId).subscribe(function (res) {
            _this.getCurrentUser();
            _this.defaultPaymentSet = true;
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.onNewShipping = function () {
        var _this = this;
        this.shippingService.newShipping(this.userShipping).subscribe(function (res) {
            _this.getCurrentUser();
            _this.selectedShippingTab = 0;
            _this.userShipping = new __WEBPACK_IMPORTED_MODULE_10__models_user_shipping__["a" /* UserShipping */]();
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.onUpdateShipping = function (shipping) {
        this.userShipping = shipping;
        this.selectedShippingTab = 1;
    };
    MyProfileComponent.prototype.onRemoveShipping = function (id) {
        var _this = this;
        this.shippingService.removeShipping(id).subscribe(function (res) {
            _this.getCurrentUser();
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.setDefaultShipping = function () {
        var _this = this;
        this.defaultShippingSet = false;
        this.shippingService.setDefaultShipping(this.defaultUserShippingId).subscribe(function (res) {
            _this.getCurrentUser();
            _this.defaultShippingSet = true;
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.userService.getCurrentUser().subscribe(function (res) {
            _this.user = res.json();
            _this.userPaymentList = _this.user.userPaymentList;
            _this.userShippingList = _this.user.userShippingList;
            for (var index in _this.userPaymentList) {
                if (_this.userPaymentList[index].defaultPayment) {
                    _this.defaultUserPaymentId = _this.userPaymentList[index].id;
                    break;
                }
            }
            for (var index in _this.userShippingList) {
                if (_this.userShippingList[index].userShippingDefault) {
                    _this.defaultUserShippingId = _this.userShippingList[index].id;
                    break;
                }
            }
            _this.dataFetched = true;
        }, function (err) {
            console.log(err);
        });
    };
    MyProfileComponent.prototype.onDisplayOrder = function (order) {
        console.log(order);
        this.order = order;
        this.displayOrderDetail = true;
    };
    MyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.checkSession().subscribe(function (res) {
            _this.loggedIn = true;
        }, function (error) {
            _this.loggedIn = false;
            console.log('inactive session');
            _this.router.navigate(['/myAccount']);
        });
        this.getCurrentUser();
        this.orderService.getOrderList().subscribe(function (res) {
            _this.orderList = res.json();
        }, function (error) {
            console.log(error.text());
        });
        for (var s in __WEBPACK_IMPORTED_MODULE_1__constants_app_const__["a" /* AppConst */].usStates) {
            this.stateList.push(s);
        }
        this.userBilling.userBillingState = '';
        this.userPayment.type = '';
        this.userPayment.expiryMonth = '';
        this.userPayment.expiryYear = '';
        this.userPayment.userBilling = this.userBilling;
        this.defaultPaymentSet = false;
        this.userShipping.userShippingState = '';
        this.defaultShippingSet = false;
    };
    return MyProfileComponent;
}());
MyProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-my-profile',
        template: __webpack_require__("../../../../../src/app/components/my-profile/my-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/my-profile/my-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_payment_service__["a" /* PaymentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__services_shipping_service__["a" /* ShippingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_shipping_service__["a" /* ShippingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_12__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__services_order_service__["a" /* OrderService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _f || Object])
], MyProfileComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=my-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#searchField\n{\n    width: 100%;\n}\n\n#searchDiv\n{\n    width: 200%;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-top\" style=\"width: 100%; height: 20px; background-color: #e6005c\"></div>\n\n<nav class=\"navbar navbar-default navbar-inverse\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand pointer\" routerLink=\"/home\">Home</a>\n    </div>\n\n    <div id=\"navbar\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li><a md-button routerLink=\"/bookList\">Browse Books from DB</a></li>\n        <form class=\"navbar-form\">\n          <div class=\"form-group\">\n            <input\n                    type=\"text\"\n                   name=\"searchByTitle\"\n                   [(ngModel)]=\"keyword\" class=\"form-control\"\n                   placeholder=\"Search books from API\"/>\n          </div>\n          <button type=\"submit\"\n                  class=\"btn btn-primary\"\n                  (click)=\"search(keyword)\">Search\n          </button>\n        </form>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!loggedIn\">\n          <a md-button routerLink=\"/myAccount\">Login/Register</a>\n        </li>\n        <li *ngIf=\"loggedIn\">\n          <a md-button routerLink=\"/shoppingCart\">Shopping Cart</a>\n        </li>\n        <li *ngIf=\"loggedIn\">\n          <a md-button routerLink=\"/myProfile\">My Profile</a>\n        </li>\n        <li *ngIf=\"loggedIn\">\n          <a md-button (click)=\"logout()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = (function () {
    function NavBarComponent(loginService, router, bookService, route) {
        this.loginService = loginService;
        this.router = router;
        this.bookService = bookService;
        this.route = route;
        this.loggedIn = false;
        this.bookList = [];
        this.results = [];
    }
    NavBarComponent.prototype.logout = function () {
        this.loginService.logout().subscribe(function (res) {
            location.reload();
        }, function (err) {
            console.log(err);
        });
    };
    NavBarComponent.prototype.search = function (keyword) {
        this.router.navigate(['search/' + keyword]);
    };
    NavBarComponent.prototype.onSearchByTitle = function () {
        var _this = this;
        this.bookService.searchBook(this.keyword).subscribe(function (res) {
            _this.bookList = res.json();
            console.log(_this.bookList);
            var navigationExtras = {
                queryParams: {
                    'bookList': JSON.stringify(_this.bookList)
                }
            };
            _this.router.navigate(['/bookList'], navigationExtras);
        }, function (error) {
            console.log(error);
        });
    };
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.checkSession().subscribe(function (res) {
            _this.loggedIn = true;
        }, function (err) {
            _this.loggedIn = false;
        });
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], NavBarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/order-summary/order-summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/order-summary/order-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <p style=\"text-align:center;\">\n            <img src=\"../../../assets/image/logo.png\" height=250>\n        </p>\n        <div class=\"col-xs-8\">\n            <h2 style=\"font-family:helvetica;\"><span>Order Summary</span></h2>\n        </div>\n\n    </div>\n    \n    <hr class=\"style18\">\n\n    <div class=\"row\" style=\"margin-top: 120px;\">\n        <div class=\"alert alert-success\">\n            <h3><i class=\"fa fa-check\" style=\"color:limegreen;\"></i> Thank you, your order has been placed. </h3>\n            <h4>The estimated delivery date is <span>{{estimatedDeliveryDate}}</span></h4>\n        </div>\n        <h3>List of Items</h3>\n        <div class=\"row\" *ngFor=\"let cartItem of cartItemList\">\n            <hr/>\n            <div class=\"col-xs-2\">\n                <a md-button (click)=\"onSelect(cartItem.book)\"><img class=\"img-responsive\" src=\"{{serverPath}}/image/book/{{cartItem.book.id}}.png\" style=\"width:70px;\" /></a>\n            </div>\n            <div class=\"col-xs-6\">\n                <a class=\"pointer\" (click)=\"onSelect(cartItem.book)\">\n                    <h4>{{cartItem.book.title}}</h4></a>\n                <p *ngIf=\"cartItem.book.inStockNumber > 10\" style=\"color:green;\">In Stock</p>\n                <p *ngIf=\"cartItem.book.inStockNumber < 10 && cartItem.book.inStockNumber > 0\" style=\"color:green;\">Only <span>{{cartItem.book.inStockNumber}}</span> In Stock</p>\n                <p *ngIf=\"cartItem.book.inStockNumber == 0\" style=\"color:darkred;\">Product Unavailable</p>\n                <a class=\"pointer\" (click)=\"onRemoveCartItem(cartItem)\">delete</a>\n            </div>\n            <div class=\"col-xs-2\">\n                <h5 style=\"color:#db3208; font-size:large;\">$<span [ngClass]=\"{'text-strike': cartItem.book.inStockNumber == 0}\">{{cartItem.book.ourPrice}}</span>\n            \t\t\t</h5>\n            </div>\n            <div class=\"col-xs-2 text-center\">\n                <h5 style=\"font-size: large\">{{cartItem.qty}}</h5>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/order-summary/order-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_checkout_service__ = __webpack_require__("../../../../../src/app/services/checkout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_order__ = __webpack_require__("../../../../../src/app/models/order.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderSummaryComponent = (function () {
    function OrderSummaryComponent(checkoutService, route, router) {
        this.checkoutService = checkoutService;
        this.route = route;
        this.router = router;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_1__constants_app_const__["a" /* AppConst */].serverPath;
        this.order = new __WEBPACK_IMPORTED_MODULE_4__models_order__["a" /* Order */]();
        this.cartItemList = [];
    }
    OrderSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.order = JSON.parse(params['order']);
            var deliveryDate = new Date();
            if (_this.order.shippingMethod == 'groundShipping') {
                deliveryDate.setDate(deliveryDate.getDate() + 5);
            }
            else {
                deliveryDate.setDate(deliveryDate.getDate() + 3);
            }
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            _this.estimatedDeliveryDate = days[deliveryDate.getDay()] + ', ' + deliveryDate.getFullYear() + '/' + deliveryDate.getMonth() + '/' + deliveryDate.getDate();
            _this.cartItemList = _this.order.cartItemList;
        });
    };
    return OrderSummaryComponent;
}());
OrderSummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-summary',
        template: __webpack_require__("../../../../../src/app/components/order-summary/order-summary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/order-summary/order-summary.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_checkout_service__["a" /* CheckoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_checkout_service__["a" /* CheckoutService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], OrderSummaryComponent);

var _a, _b, _c;
//# sourceMappingURL=order-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <p style=\"text-align:center;\">\n            <img src=\"../../../assets/image/logo.png\" height=250>\n        </p>\n        <div class=\"col-xs-8\">\n            <h2 style=\"font-family:helvetica;\"><span>Checkout</span></h2>\n        </div>\n\n    </div>\n    \n    <hr class=\"style18\">\n    \n    <div class=\"row\" style=\"margin-top: 120px;\">\n        <form (ngSubmit)=\"onSubmit()\" method=\"post\">\n            <div class=\"col-xs-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        <button md-raised-button type=\"submit \" class=\"btn-block mat-primary\">Place your order\n                        </button>\n                        <p style=\"font-size: smaller\">By placing your order, you agree to Ficstore <a href=\"#\">privacy</a> notice and\n                            <a href=\"#\">conditions</a> of use.</p>\n                            <hr/>\n                            <h3>Order Summary</h3>\n                            <div class=\"row\">\n                                <div class=\"col-xs-7 text-left\">\n                                    Total before tax:\n                                </div>\n                                <div class=\"col-xs-5 text-right\">\n                                    $\n                                    <span>{{shoppingCart.grandTotal}}</span>\n                                </div>\n                            </div>\n                            <div class=\"row \">\n                                <div class=\"col-xs-7 text-left \">\n                                    Estimated tax:\n                                </div>\n                                <div class=\"col-xs-5 text-right \">\n                                    $<span>{{shoppingCart.grandTotal*0.06 | number : '1.2-2'}}</span>\n                                </div>\n                            </div>\n                            <hr />\n                            <div class=\"row \">\n                                <div class=\"col-xs-7 text-left \">\n                                    <h3 style=\"color:darkred; \"><strong>Order total:</strong></h3>\n                                </div>\n                                <div class=\"col-xs-5 text-right \">\n                                    <h3><strong style=\"color:darkred; \">$<span\n                                        >{{shoppingCart.grandTotal*1.06 | number : '1.2-2'}}</span>\n                                    </strong></h3>\n                                </div>\n                            </div>\n                            <div class=\"panel-footer \">Shipping and handling haven't applied.</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xs-8 \">\n                    <div *ngIf=\"missingRequiredField\">\n                        <h5 class=\"alert alert-warning \">There are some fields missing. Field with * is required. </h5>\n                    </div>\n                    <md-tab-group (selectedIndexChange)=\"selectedChange($event)\" [selectedIndex]=\"selectedTab\">\n                        <!--1. Shipping Address-->\n                        <md-tab label=\"1. Shipping Address\">\n                            <div class=\"panel panel-default \">\n                                <div class=\"panel-heading \">\n                                    <h4 class=\"panel-title \">\n                                        1. Shipping Address\n                                    </h4>\n                                </div>\n                                <div class=\"panel-body \">\n                                    <table class=\"table \" *ngIf=\"!emptyShippingList \">\n                                        <thead>\n                                            <tr>\n                                                <th>Available Shipping Addresses</th>\n                                                <th>Operations</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let userShipping of userShippingList \">\n                                                <td>\n                                                    {{userShipping.userShippingStreet1}}, {{userShipping.userShippingStreet2}}, {{userShipping.userShippingCity}}, {{userShipping.userShippingState}}\n                                                </td>\n                                                <td>\n                                                    <a class=\"pointer\" (click)=\"setShippingAddress(userShipping) \">Use\n                                                    this address</a>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                    <div class=\"form-group \">\n                                        <label for=\"shippingName \">* Name</label>\n                                        <input type=\"text \" class=\"form-control \" id=\"shippingName \" placeholder=\"Recevier Name \" name=\"shippingAddressName \" [(ngModel)]=\"shippingAddress.shippingAddressName \" />\n                                    </div>\n                                    <div class=\"form-group \">\n                                        <label for=\"shippingAddress \">* Street Address</label>\n                                        <input type=\"text \" class=\"form-control \" id=\"shippingAddress \" placeholder=\"Street Address 1 \" name=\"shippingAddressStreet1 \" [(ngModel)]=\"shippingAddress.shippingAddressStreet1 \" />\n                                    </div>\n                                    <div class=\"form-group \">\n                                        <input type=\"text \" class=\"form-control \" placeholder=\"Street Address 2 \" name=\"shippingAddressStreet2 \" [(ngModel)]=\"shippingAddress.shippingAddressStreet2 \" />\n                                    </div>\n                                    <div class=\"row \">\n                                        <div class=\"col-xs-4 \">\n                                            <div class=\"form-group \">\n                                                <label for=\"shippingCity \">* City</label>\n                                                <input type=\"text \" class=\"form-control \" id=\"shippingCity \" placeholder=\"Your City \" name=\"shippingAddressCity \" [(ngModel)]=\"shippingAddress.shippingAddressCity \" />\n                                            </div>\n                                        </div>\n                                        <div class=\"col-xs-4 \">\n                                            <div class=\"form-group \">\n                                                <label for=\"shippingState \">* State</label>\n                                                <select id=\"shippingState \" class=\"form-control \" name=\"shippingAddressState \" [(ngModel)]=\"shippingAddress.shippingAddressState \">\n                                                    <option value=\"\" disabled>-- state --</option>\n                                                    <option *ngFor=\"let state of stateList \">{{state}}\n                                                    </option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-xs-4 \">\n                                            <div class=\"form-group \">\n                                                <label for=\"shippingZipcode \">* Zipcode</label>\n                                                <input type=\"text \" class=\"form-control \" id=\"shippingZipcode \" placeholder=\"Zipcode \" name=\"shippingAddressZipcode \" [(ngModel)]=\"shippingAddress.shippingAddressZipcode \" />\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <a md-raised-button class=\"mat-primary\" (click)=\"goToPayment()\">Next</a>\n                                </div>\n                            </div>\n                        </md-tab>\n                        <!--2. Payment Information-->\n                        <md-tab label=\"2. Payment Information\">\n                            <div class=\"panel panel-default \">\n                                <div class=\"panel-heading \">\n                                    <h4 class=\"panel-title \">\n                                        2. Payment Information\n                                    </h4>\n                                </div>\n                                <div class=\"panel-body \">\n                                    <table class=\"table \" *ngIf=\"!emptyPaymentList \">\n                                        <thead>\n                                            <tr>\n                                                <th>Available Credit Card(s)</th>\n                                                <th>Operations</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let userPayment of userPaymentList \">\n                                                <td>\n                                                    {{userPayment.cardName}}\n                                                </td>\n                                                <td>\n                                                    <a class=\"pointer\" (click)=\"setPaymentMethod(userPayment)\">Use this payment method\n                                                    </a>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                    <!-- CREDIT CARD FORM STARTS HERE -->\n                                    <div class=\"row\">\n                                        <div class=\"col-xs-12\">\n                                            <img src=\"../../../assets/image/creditcard.png\" class=\"img-responsive\" />\n                                            <br/>\n                                            <div class=\"form-group\">\n                                                <label for=\"cardType\">* Select Card Type:</label>\n                                                <select class=\"form-control\" id=\"cardType\" name=\"type\" [(ngModel)]=\"payment.type\">\n                                                    <option value=\"\" disabled=\"disabled\">\n                                                        -- Card Type --\n                                                    </option>\n                                                    <option value=\"visa\">Visa</option>\n                                                    <option value=\"mastercard\">Mastercard</option>\n                                                    <option value=\"discover\">Discover</option>\n                                                    <option value=\"amex\">American Express</option>\n                                                </select>\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"cardHolder\">* Card Holder</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"cardHolder\" required=\"required\" placeholder=\"Card Holder Name\" name=\"holderName\" [(ngModel)]=\"payment.holderName\" />\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"cardNumber\">* Card Number</label>\n                                                <div class=\"input-group\">\n                                                    <input required=\"required\" id=\"cardNumber\" type=\"tel\" class=\"form-control\" name=\"cardNumber\" placeholder=\"Valid Card Number\" name=\"cardNumber\" [(ngModel)]=\"payment.cardNumber\" />\n                                                    <span class=\"input-group-addon\"><i class=\"fa fa-credit-card\"\n                                                     aria-hidden=\"true\"></i></span>\n                                                 </div>\n                                             </div>\n                                         </div>\n                                     </div>\n                                     <div class=\"row\">\n                                        <div class=\"col-xs-7 col-md-7\">\n                                            <div class=\"form-group\">\n                                                <label>* Expiration Date</label>\n                                                <div class=\"row\">\n                                                    <div class=\"col-xs-6\">\n                                                        <select class=\"form-control\" name=\"expiryMonth\" required=\"required\" [(ngModel)]=\"payment.expiryMonth\">\n                                                            <option value=\"\" disabled=\"disabled\">\n                                                                --Month--\n                                                            </option>\n                                                            <option value=\"1\">Jan (01)</option>\n                                                            <option value=\"2\">Feb (02)</option>\n                                                            <option value=\"3\">Mar (03)</option>\n                                                            <option value=\"4\">Apr (04)</option>\n                                                            <option value=\"5\">May (05)</option>\n                                                            <option value=\"6\">June (06)</option>\n                                                            <option value=\"7\">July (07)</option>\n                                                            <option value=\"8\">Aug (08)</option>\n                                                            <option value=\"9\">Sep (09)</option>\n                                                            <option value=\"10\">Oct (10)</option>\n                                                            <option value=\"11\">Nov (11)</option>\n                                                            <option value=\"12\">Dec (12)</option>\n                                                        </select>\n                                                    </div>\n                                                    <div class=\"col-xs-6\">\n                                                        <select class=\"form-control\" name=\"expiryYear\" [(ngModel)]=\"payment.expiryYear\">\n                                                            <option value=\"\" disabled=\"disabled\">--Year--\n                                                            </option>\n                                                            <option value=\"17\">2017</option>\n                                                            <option value=\"18\">2018</option>\n                                                            <option value=\"19\">2019</option>\n                                                            <option value=\"20\">2020</option>\n                                                            <option value=\"21\">2021</option>\n                                                            <option value=\"22\">2022</option>\n                                                            <option value=\"23\">2023</option>\n                                                            <option value=\"23\">2024</option>\n                                                            <option value=\"23\">2025</option>\n                                                            <option value=\"23\">2026</option>\n                                                            <option value=\"23\">2027</option>\n                                                            <option value=\"23\">2028</option>\n                                                            <option value=\"23\">2029</option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-xs-5 col-md-5 pull-right\">\n                                            <div class=\"form-group\">\n                                                <label for=\"cardCVC\">CV Code</label>\n                                                <input id=\"cardCVC\" type=\"tel\" class=\"form-control\" name=\"cardCVC\" placeholder=\"CVC\" name=\"cvc\" [(ngModel)]=\"payment.cvc\" />\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <!-- CREDIT CARD FORM ENDS HERE -->\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input id=\"theSameAsShippingAddress\" type=\"checkbox\"\n                                            name=\"billingSameAsShipping\" value=\"true\" (click)=\"setBillingAsShipping($event.target.checked)\" /> The same as shipping\n                                            address\n                                        </label>\n                                    </div>\n                                    <div class=\"form-group \">\n                                        <label for=\"billingName \">* Name</label>\n                                        <input type=\"text \" class=\"form-control billingAddress \" id=\"billingName \" placeholder=\"Recevier Name \" name=\"billingAddressName \" [(ngModel)]=\"billingAddress.billingAddressName\" />\n                                    </div>\n                                    <div class=\"form-group \">\n                                        <label for=\"billingAddress \">* Street Address</label>\n                                        <input type=\"text \" id=\"billingAddress \" class=\"form-control billingAddress \" placeholder=\"Street Address 1 \" name=\"billingAddressStreet1 \" [(ngModel)]=\"billingAddress.billingAddressStreet1\" />\n                                    </div>\n                                    <div class=\"form-group \">\n                                        <input type=\"text \" class=\"form-control billingAddress \" placeholder=\"Street Address 2 \" name=\"billingAddressStreet2 \" [(ngModel)]=\"billingAddress.billingAddressStreet2\" />\n                                    </div>\n                                    <div class=\"row \">\n                                        <div class=\"col-xs-4 \">\n                                            <div class=\"form-group \">\n                                                <label for=\"billingCity \">* City</label>\n                                                <input type=\"text \" class=\"form-control billingAddress \" id=\"billingCity \" placeholder=\"City \" name=\"billingAddressCity \" [(ngModel)]=\"billingAddress.billingAddressCity\" />\n                                            </div>\n                                        </div>\n                                        <div class=\"col-xs-4 \">\n                                            <div class=\"form-group \">\n                                                <label for=\"billingState \">* State</label>\n                                                <select id=\"billingState \" class=\"form-control billingAddress \" name=\"billingAddressState \" [(ngModel)]=\"billingAddress.billingAddressState\">\n                                                    <option value=\"\" disabled=\"disabled \">-- state --\n                                                    </option>\n                                                    <option *ngFor=\"let state of stateList\">{{state}}\n                                                    </option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-xs-4 \">\n                                            <div class=\"form-group \">\n                                                <label for=\"billingZipcode \">* Zipcode</label>\n                                                <input type=\"text \" class=\"form-control billingAddress \" id=\"billingZipcode \" placeholder=\"Zipcode \" name=\"billingAddressZipcode \" [(ngModel)]=\"billingAddress.billingAddressZipcode \" />\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <a md-raised-button class=\"mat-primary\" (click)=\"goToReview()\">Next</a>\n                                </div>\n                            </div>\n                        </md-tab>\n                        <!--3. Review Items and Shipping-->\n                        <md-tab label=\"3. Review\">\n                            <div class=\"panel panel-default \">\n                                <div class=\"panel-heading \">\n                                    <h4 class=\"panel-title \">\n                                        3. Review Items and Shipping\n                                    </h4>\n                                </div>\n                                <div class=\"panel-body \">\n                                    <h4>Choose your shipping method:</h4>\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" name=\"shippingMethod\" value=\"groundShipping\" [(ngModel)]=\"shippingMethod\" /> Ground Shipping\n                                        </label>\n                                    </div>\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" name=\"shippingMethod\" value=\"premiumShipping\" [(ngModel)]=\"shippingMethod\" /> Premium Shipping\n                                        </label>\n                                    </div>\n\n                                    <div class=\"row \">\n                                        <div class=\"col-xs-8 \">\n                                            <h4>Products</h4></div>\n                                            <div class=\"col-xs-2 \">\n                                                <h4>Price</h4></div>\n                                                <div class=\"col-xs-2 text-center \">\n                                                    <h4>Qty</h4></div>\n                                                </div>\n                                                <!--*******  display products in cart  ********-->\n                                                <div class=\"row \" *ngFor=\"let cartItem of cartItemList \">\n                                                    <hr/>\n                                                    <div class=\"col-xs-2 \">\n                                                        <a md-button (click)=\"onSelect(cartItem.book)\"><img class=\"img-responsive shelf-book\" src=\"{{serverPath}}/image/book/{{cartItem.book.id}}.png\" style=\"width:70px;\" /></a>\n                                                    </div>\n                                                    <div class=\"col-xs-6 \">\n                                                        <a class=\"pointer\" (click)=\"onSelect(cartItem.book)\"><h4>{{cartItem.book.title}}</h4></a>\n                                                        <p *ngIf=\"cartItem.book.inStockNumber > 10\" style=\"color: green;\">In Stock</p>\n                                                        <p *ngIf=\"cartItem.book.inStockNumber < 10 && cartItem.book.inStockNumber > 0\" style=\"color: green;\"> Only <span>{{cartItem.book.inStockNumber}}</span> In Stock\n                                                        </p>\n                                                        <p style=\"color: darkred;\" *ngIf=\"cartItem.book.inStockNumber==0\">Product Unavailable</p>\n                                                    </div>\n                                                    <div class=\"col-xs-2 \">\n                                                        <h5 style=\"color: #db3208; font-size: large;\">$<span [ngClass]=\"{'text-strike': cartItem.book.inStockNumber == 0 }\"\n                                                           >{{cartItem.book.ourPrice}}</span>\n                                                       </h5>\n                                                   </div>\n                                                   <div class=\"col-xs-2 text-center \">\n                                                    <h5 style=\"font-size: large \">{{cartItem.qty}}</h5>\n                                                </div>\n                                            </div>\n                                            <hr/>\n                                            <h4 class=\"col-xs-12 text-right\"><Strong style=\"font-size: large\">Total Price (<span\n                                                >{{cartItemNumber}}</span> items): </Strong><span\n                                                style=\"color: #db3208; font-size: large;\">$<span\n                                                ></span>{{shoppingCart.grandTotal}}</span></h4>\n                                                <br/>\n                                                <br/>\n                                                <button md-raised-button type=\"submit \" class=\"btn-block mat-primary\">Place your order\n                                                </button>\n                                                <p>By placing your order, you agree to Ficstore <a href=\"# \">privacy</a> notice and\n                                                    <a href=\"# \">conditions</a> of use.</p>\n                                                </div>\n                                            </div>\n                                        </md-tab>\n                                    </md-tab-group>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shipping_service__ = __webpack_require__("../../../../../src/app/services/shipping.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_payment_service__ = __webpack_require__("../../../../../src/app/services/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_checkout_service__ = __webpack_require__("../../../../../src/app/services/checkout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_shopping_cart__ = __webpack_require__("../../../../../src/app/models/shopping-cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_shipping_address__ = __webpack_require__("../../../../../src/app/models/shipping-address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_billing_address__ = __webpack_require__("../../../../../src/app/models/billing-address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_user_payment__ = __webpack_require__("../../../../../src/app/models/user-payment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_user_billing__ = __webpack_require__("../../../../../src/app/models/user-billing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_user_shipping__ = __webpack_require__("../../../../../src/app/models/user-shipping.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_payment__ = __webpack_require__("../../../../../src/app/models/payment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_order__ = __webpack_require__("../../../../../src/app/models/order.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var OrderComponent = (function () {
    function OrderComponent(router, cartService, shippingService, paymentService, checkoutService) {
        this.router = router;
        this.cartService = cartService;
        this.shippingService = shippingService;
        this.paymentService = paymentService;
        this.checkoutService = checkoutService;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_1__constants_app_const__["a" /* AppConst */].serverPath;
        this.cartItemList = [];
        this.shoppingCart = new __WEBPACK_IMPORTED_MODULE_7__models_shopping_cart__["a" /* ShoppingCart */]();
        this.shippingAddress = new __WEBPACK_IMPORTED_MODULE_8__models_shipping_address__["a" /* ShippingAddress */]();
        this.billingAddress = new __WEBPACK_IMPORTED_MODULE_9__models_billing_address__["a" /* BillingAddress */]();
        this.userPayment = new __WEBPACK_IMPORTED_MODULE_10__models_user_payment__["a" /* UserPayment */]();
        this.userShipping = new __WEBPACK_IMPORTED_MODULE_12__models_user_shipping__["a" /* UserShipping */]();
        this.userBilling = new __WEBPACK_IMPORTED_MODULE_11__models_user_billing__["a" /* UserBilling */]();
        this.userShippingList = [];
        this.userPaymentList = [];
        this.payment = new __WEBPACK_IMPORTED_MODULE_13__models_payment__["a" /* Payment */]();
        this.emptyShippingList = true;
        this.emptyPaymentList = true;
        this.stateList = [];
        this.order = new __WEBPACK_IMPORTED_MODULE_14__models_order__["a" /* Order */]();
    }
    OrderComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        this.router.navigate(['/bookDetail', this.selectedBook.id]);
    };
    OrderComponent.prototype.selectedChange = function (val) {
        this.selectedTab = val;
    };
    OrderComponent.prototype.goToPayment = function () {
        this.selectedTab = 1;
    };
    OrderComponent.prototype.goToReview = function () {
        this.selectedTab = 2;
    };
    OrderComponent.prototype.getCartItemList = function () {
        var _this = this;
        this.cartService.getCartItemList().subscribe(function (res) {
            _this.cartItemList = res.json();
            _this.cartItemNumber = _this.cartItemList.length;
        }, function (error) {
            console.log(error.text());
        });
    };
    OrderComponent.prototype.setShippingAddress = function (userShipping) {
        this.shippingAddress.shippingAddressName = userShipping.userShippingName;
        this.shippingAddress.shippingAddressStreet1 = userShipping.userShippingStreet1;
        this.shippingAddress.shippingAddressStreet2 = userShipping.userShippingStreet2;
        this.shippingAddress.shippingAddressCity = userShipping.userShippingCity;
        this.shippingAddress.shippingAddressState = userShipping.userShippingState;
        this.shippingAddress.shippingAddressCountry = userShipping.userShippingCountry;
        this.shippingAddress.shippingAddressZipcode = userShipping.userShippingZipcode;
    };
    OrderComponent.prototype.setPaymentMethod = function (userPayment) {
        this.payment.type = userPayment.type;
        this.payment.cardNumber = userPayment.cardNumber;
        this.payment.expiryMonth = userPayment.expiryMonth;
        this.payment.expiryYear = userPayment.expiryYear;
        this.payment.cvc = userPayment.cvc;
        this.payment.holderName = userPayment.holderName;
        this.payment.defaultPayment = userPayment.defaultPayment;
        this.billingAddress.billingAddressName = userPayment.userBilling.userBillingName;
        this.billingAddress.billingAddressStreet1 = userPayment.userBilling.userBillingStreet1;
        this.billingAddress.billingAddressStreet2 = userPayment.userBilling.userBillingStreet2;
        this.billingAddress.billingAddressCity = userPayment.userBilling.userBillingCity;
        this.billingAddress.billingAddressState = userPayment.userBilling.userBillingState;
        this.billingAddress.billingAddressCountry = userPayment.userBilling.userBillingCountry;
        this.billingAddress.billingAddressZipcode = userPayment.userBilling.userBillingZipcode;
    };
    OrderComponent.prototype.setBillingAsShipping = function (checked) {
        console.log('same as shipping');
        if (checked) {
            this.billingAddress.billingAddressName = this.shippingAddress.shippingAddressName;
            this.billingAddress.billingAddressStreet1 = this.shippingAddress.shippingAddressStreet1;
            this.billingAddress.billingAddressStreet2 = this.shippingAddress.shippingAddressStreet2;
            this.billingAddress.billingAddressCity = this.shippingAddress.shippingAddressCity;
            this.billingAddress.billingAddressState = this.shippingAddress.shippingAddressState;
            this.billingAddress.billingAddressCountry = this.shippingAddress.shippingAddressCountry;
            this.billingAddress.billingAddressZipcode = this.shippingAddress.shippingAddressZipcode;
        }
        else {
            this.billingAddress.billingAddressName = '';
            this.billingAddress.billingAddressStreet1 = '';
            this.billingAddress.billingAddressStreet2 = '';
            this.billingAddress.billingAddressCity = '';
            this.billingAddress.billingAddressState = '';
            this.billingAddress.billingAddressCountry = '';
            this.billingAddress.billingAddressZipcode = '';
        }
    };
    OrderComponent.prototype.onSubmit = function () {
        var _this = this;
        this.checkoutService.checkout(this.shippingAddress, this.billingAddress, this.payment, this.shippingMethod).subscribe(function (res) {
            _this.order = res.json();
            console.log(_this.order);
            var navigationExtras = {
                queryParams: {
                    'order': JSON.stringify(_this.order)
                }
            };
            _this.router.navigate(['/orderSummary'], navigationExtras);
        }, function (error) {
            console.log(error.text());
        });
    };
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCartItemList();
        this.cartService.getShoppingCart().subscribe(function (res) {
            console.log(res.json());
            _this.shoppingCart = res.json();
        }, function (error) {
            console.log(error.text());
        });
        this.shippingService.getUserShippingList().subscribe(function (res) {
            console.log(res.json());
            _this.userShippingList = res.json();
            if (_this.userShippingList.length) {
                _this.emptyShippingList = false;
                for (var _i = 0, _a = _this.userShippingList; _i < _a.length; _i++) {
                    var userShipping = _a[_i];
                    if (userShipping.userShippingDefault) {
                        _this.setShippingAddress(userShipping);
                        return;
                    }
                }
            }
        }, function (error) {
            console.log(error.text());
        });
        this.paymentService.getUserPaymentList().subscribe(function (res) {
            console.log(res.json());
            _this.userPaymentList = res.json();
            _this.emptyPaymentList = false;
            if (_this.userPaymentList.length) {
                _this.emptyPaymentList = false;
                for (var _i = 0, _a = _this.userPaymentList; _i < _a.length; _i++) {
                    var userPayment = _a[_i];
                    if (userPayment.defaultPayment) {
                        _this.setPaymentMethod(userPayment);
                        return;
                    }
                }
            }
        }, function (error) {
            console.log(error.text());
        });
        for (var s in __WEBPACK_IMPORTED_MODULE_1__constants_app_const__["a" /* AppConst */].usStates) {
            this.stateList.push(s);
        }
        this.payment.type = '';
        this.payment.expiryMonth = '';
        this.payment.expiryYear = '';
        this.billingAddress.billingAddressState = '';
        this.shippingAddress.shippingAddressState = '';
        this.shippingMethod = 'groundShipping';
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order',
        template: __webpack_require__("../../../../../src/app/components/order/order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/order/order.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shipping_service__["a" /* ShippingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shipping_service__["a" /* ShippingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_payment_service__["a" /* PaymentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_checkout_service__["a" /* CheckoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_checkout_service__["a" /* CheckoutService */]) === "function" && _e || Object])
], OrderComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <p style=\"text-align:center;\">\n            <img src=\"../../../assets/image/logo.png\" height=250>\n        </p>\n        <div class=\"col-xs-8\">\n            <h2 style=\"font-family:helvetica;\"><span>Shopping Cart</span></h2>\n        </div>\n\n    </div>\n    \n    <hr class=\"style18\">\n\n    <div class=\"row\" style=\"margin-top: 120px;\">\n        <div class=\"col-xs-12\">\n            <div class=\"row\">\n                <div class=\"col-xs-6 text-left\">\n                    <a md-raised-button class=\"mat-warn\" routerLink=\"/bookList\">Continue Shopping</a>\n                </div>\n                <div class=\"col-xs-6 text-right\">\n                    <a md-raised-button class=\"mat-warn\" routerLink=\"/checkout\">Check Out</a>\n                </div>\n            </div>\n            <br/>\n            <div *ngIf=\"cartItemUpdated\" class=\"alert alert-success\">\n                Cart Item Updated Successfully!\n            </div>\n            <div *ngIf=\"notEnoughStock\" class=\"alert alert-warning\">\n                Oops, some of the products don't have enough stock. Please update product quantity.\n            </div>\n            <div *ngIf=\"emptyCart\" class=\"alert alert-warning\">\n                Oops, your cart is empty. See if you can find what you link in the bookshelf and add them to cart.\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-8\">\n                    <h4>Products</h4>\n                </div>\n                <div class=\"col-xs-2\">\n                    <h4>Price</h4>\n                </div>\n                <div class=\"col-xs-2\">\n                    <h4>Qty</h4>\n                </div>\n            </div>\n            <div class=\"row\" *ngFor=\"let cartItem of cartItemList\">\n                <hr/>\n                <div class=\"col-xs-2\">\n                    <a md-button (click)=\"onSelect(cartItem.book)\"><img class=\"img-responsive\" src=\"{{serverPath}}/image/book/{{cartItem.book.id}}.png\" style=\"width:70px;\" /></a>\n                </div>\n                <div class=\"col-xs-6\">\n                    <a class=\"pointer\" (click)=\"onSelect(cartItem.book)\">\n                        <h4>{{cartItem.book.title}}</h4></a>\n                    <p *ngIf=\"cartItem.book.inStockNumber > 10\" style=\"color:green;\">In Stock</p>\n                    <p *ngIf=\"cartItem.book.inStockNumber < 10 && cartItem.book.inStockNumber > 0\" style=\"color:green;\">Only <span>{{cartItem.book.inStockNumber}}</span> In Stock</p>\n                    <p *ngIf=\"cartItem.book.inStockNumber == 0\" style=\"color:darkred;\">Product Unavailable</p>\n                    <a class=\"pointer\" (click)=\"onRemoveCartItem(cartItem)\">Remove</a>\n                </div>\n                <div class=\"col-xs-2\">\n                    <h5 style=\"color:#db3208; font-size:large;\">$<span [ngClass]=\"{'text-strike': cartItem.book.inStockNumber == 0}\">{{cartItem.book.ourPrice}}</span>\n            \t\t\t</h5>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input hidden=\"hidden\" name=\"id\" [(ngModel)]=\"cartItem.id\" />\n                    <input id=\"cartItem.id\" name=\"qty\" [disabled]=\"cartItem.book.inStockNumber==0\" class=\"form-control cartItemQty\" [(ngModel)]=\"cartItem.qty\" (ngModelChange)=\"cartItem.toUpdate=true\" />\n                    <a md-button *ngIf=\"cartItem.toUpdate\" class=\"pointer mat-warn\" (click)=\"onUpdateCartItem(cartItem)\">Update</a>\n                </div>\n            </div>\n            <div class=\"row\">\n                <hr />\n                <h4 class=\"col-xs-12 text-right\"><strong style=\"font-size: large\">Total Price (<span>{{cartItemNumber}}</span> items): </strong><span style=\"color:#db3208;font-size: large\">$ <span>{{shoppingCart.grandTotal}}</span></span></h4>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_shopping_cart__ = __webpack_require__("../../../../../src/app/models/shopping-cart.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(router, cartService) {
        this.router = router;
        this.cartService = cartService;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_1__constants_app_const__["a" /* AppConst */].serverPath;
        this.cartItemList = [];
        this.shoppingCart = new __WEBPACK_IMPORTED_MODULE_4__models_shopping_cart__["a" /* ShoppingCart */]();
    }
    ShoppingCartComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        this.router.navigate(['/bookDetail', this.selectedBook.id]);
    };
    ShoppingCartComponent.prototype.onRemoveCartItem = function (cartItem) {
        var _this = this;
        this.cartService.removeCartItem(cartItem.id).subscribe(function (res) {
            console.log(res.text());
            _this.getCartItemList();
            _this.getShoppingCart();
        }, function (error) {
            console.log(error.text());
        });
    };
    ShoppingCartComponent.prototype.onUpdateCartItem = function (cartItem) {
        var _this = this;
        this.cartService.updateCartItem(cartItem.id, cartItem.qty).subscribe(function (res) {
            console.log(res.text());
            _this.cartItemUpdated = true;
            _this.getShoppingCart();
        }, function (error) {
            console.log(error.text());
        });
    };
    ShoppingCartComponent.prototype.getCartItemList = function () {
        var _this = this;
        this.cartService.getCartItemList().subscribe(function (res) {
            _this.cartItemList = res.json();
            _this.cartItemNumber = _this.cartItemList.length;
        }, function (error) {
            console.log(error.text());
        });
    };
    ShoppingCartComponent.prototype.getShoppingCart = function () {
        var _this = this;
        this.cartService.getShoppingCart().subscribe(function (res) {
            console.log(res.json());
            _this.shoppingCart = res.json();
        }, function (error) {
            console.log(error.text());
        });
    };
    ShoppingCartComponent.prototype.onCheckout = function () {
        if (this.cartItemNumber == 0) {
            this.emptyCart = true;
        }
        else {
            for (var _i = 0, _a = this.cartItemList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.qty > item.book.inStockNumber) {
                    console.log('not enough stock on some item');
                    this.notEnoughStock = true;
                    return;
                }
            }
            // this.router.navigate('[/order]');
        }
    };
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.getCartItemList();
        this.getShoppingCart();
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shopping-cart',
        template: __webpack_require__("../../../../../src/app/components/shopping-cart/shopping-cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shopping-cart/shopping-cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]) === "function" && _b || Object])
], ShoppingCartComponent);

var _a, _b;
//# sourceMappingURL=shopping-cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/constants/app-const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConst; });
var AppConst = (function () {
    function AppConst() {
    }
    return AppConst;
}());

AppConst.serverPath = 'http://127.0.0.1:8181';
AppConst.usStates = {
    'AL': 'Alabama',
    'AK': 'Alaska',
    'AS': 'American Samoa',
    'AZ': 'Arizona',
    'AR': 'Arkansas',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DE': 'Delaware',
    'DC': 'District Of Columbia',
    'FM': 'Federated States Of Micronesia',
    'FL': 'Florida',
    'GA': 'Georgia',
    'GU': 'Guam',
    'HI': 'Hawaii',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'IA': 'Iowa',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'ME': 'Maine',
    'MH': 'Marshall Islands',
    'MD': 'Maryland',
    'MA': 'Massachusetts',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MS': 'Mississippi',
    'MO': 'Missouri',
    'MT': 'Montana',
    'NE': 'Nebraska',
    'NV': 'Nevada',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NY': 'New York',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'MP': 'Northern Mariana Islands',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PW': 'Palau',
    'PA': 'Pennsylvania',
    'PR': 'Puerto Rico',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VT': 'Vermont',
    'VI': 'Virgin Islands',
    'VA': 'Virginia',
    'WA': 'Washington',
    'WV': 'West Virginia',
    'WI': 'Wisconsin',
    'WY': 'Wyoming'
};
//# sourceMappingURL=app-const.js.map

/***/ }),

/***/ "../../../../../src/app/models/billing-address.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAddress; });
var BillingAddress = (function () {
    function BillingAddress() {
    }
    return BillingAddress;
}());

//# sourceMappingURL=billing-address.js.map

/***/ }),

/***/ "../../../../../src/app/models/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book() {
    }
    return Book;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ "../../../../../src/app/models/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order() {
    }
    return Order;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ "../../../../../src/app/models/payment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Payment; });
var Payment = (function () {
    function Payment() {
    }
    return Payment;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ "../../../../../src/app/models/shipping-address.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingAddress; });
var ShippingAddress = (function () {
    function ShippingAddress() {
    }
    return ShippingAddress;
}());

//# sourceMappingURL=shipping-address.js.map

/***/ }),

/***/ "../../../../../src/app/models/shopping-cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCart; });
var ShoppingCart = (function () {
    function ShoppingCart() {
    }
    return ShoppingCart;
}());

//# sourceMappingURL=shopping-cart.js.map

/***/ }),

/***/ "../../../../../src/app/models/user-billing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBilling; });
var UserBilling = (function () {
    function UserBilling() {
    }
    return UserBilling;
}());

//# sourceMappingURL=user-billing.js.map

/***/ }),

/***/ "../../../../../src/app/models/user-payment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPayment; });
var UserPayment = (function () {
    function UserPayment() {
    }
    return UserPayment;
}());

//# sourceMappingURL=user-payment.js.map

/***/ }),

/***/ "../../../../../src/app/models/user-shipping.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserShipping; });
var UserShipping = (function () {
    function UserShipping() {
    }
    return UserShipping;
}());

//# sourceMappingURL=user-shipping.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/services/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookService = (function () {
    function BookService(http) {
        this.http = http;
    }
    BookService.prototype.getBookList = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath + '/book/bookList';
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    BookService.prototype.getBook = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath + '/book/' + id;
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    BookService.prototype.searchBook = function (keyword) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath + '/book/searchBook';
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, keyword, { headers: tokenHeader });
    };
    BookService.prototype.searchBookAPI = function (query) {
        var API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        return fetch(API_URL + query + '&maxResults=40').then(function (response) { return response.json(); });
    };
    return BookService;
}());
BookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], BookService);

var _a;
//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartService = (function () {
    function CartService(http) {
        this.http = http;
    }
    CartService.prototype.addItem = function (id, qty) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath + "/cart/add";
        var cartItemInfo = {
            "bookId": id,
            "qty": qty
        };
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, cartItemInfo, { headers: tokenHeader });
    };
    CartService.prototype.getCartItemList = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath + "/cart/getCartItemList";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    CartService.prototype.getShoppingCart = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath + "/cart/getShoppingCart";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    CartService.prototype.updateCartItem = function (cartItemId, qty) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath + "/cart/updateCartItem";
        var cartItemInfo = {
            "cartItemId": cartItemId,
            "qty": qty
        };
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, cartItemInfo, { headers: tokenHeader });
    };
    CartService.prototype.removeCartItem = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath + "/cart/removeItem";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    return CartService;
}());
CartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CartService);

var _a;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/checkout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutService = (function () {
    function CheckoutService(http) {
        this.http = http;
    }
    CheckoutService.prototype.checkout = function (shippingAddress, billingAddress, payment, shippingMethod) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath + "/checkout/checkout";
        var order = {
            "shippingAddress": shippingAddress,
            "billingAddress": billingAddress,
            "payment": payment,
            "shippingMethod": shippingMethod
        };
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, order, { headers: tokenHeader });
    };
    CheckoutService.prototype.getUserOrder = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath + "/checkout/getUserOrder";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    return CheckoutService;
}());
CheckoutService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CheckoutService);

var _a;
//# sourceMappingURL=checkout.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath;
    }
    LoginService.prototype.sendCredential = function (username, password) {
        var url = this.serverPath + '/token';
        var encodedCredentials = btoa(username + ":" + password);
        var basicHeader = "Basic " + encodedCredentials;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': basicHeader
        });
        return this.http.get(url, { headers: headers });
    };
    LoginService.prototype.checkSession = function () {
        var url = this.serverPath + '/checkSession';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: headers });
    };
    LoginService.prototype.logout = function () {
        var url = this.serverPath + '/user/logout';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, '', { headers: headers });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = (function () {
    function OrderService(http) {
        this.http = http;
    }
    OrderService.prototype.getOrderList = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath + "/order/getOrderList";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    return OrderService;
}());
OrderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], OrderService);

var _a;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/payment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentService = (function () {
    function PaymentService(http) {
        this.http = http;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_1__constants_app_const__["a" /* AppConst */].serverPath;
    }
    PaymentService.prototype.newPayment = function (payment) {
        var url = this.serverPath + "/payment/add";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, JSON.stringify(payment), { headers: tokenHeader });
    };
    PaymentService.prototype.getUserPaymentList = function () {
        var url = this.serverPath + "/payment/getUserPaymentList";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    PaymentService.prototype.removePayment = function (id) {
        var url = this.serverPath + "/payment/remove";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    PaymentService.prototype.setDefaultPayment = function (id) {
        var url = this.serverPath + "/payment/setDefault";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    return PaymentService;
}());
PaymentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object])
], PaymentService);

var _a;
//# sourceMappingURL=payment.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shipping.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShippingService = (function () {
    function ShippingService(http) {
        this.http = http;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_1__constants_app_const__["a" /* AppConst */].serverPath;
    }
    ShippingService.prototype.newShipping = function (shipping) {
        var url = this.serverPath + "/shipping/add";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, JSON.stringify(shipping), { headers: tokenHeader });
    };
    ShippingService.prototype.getUserShippingList = function () {
        var url = this.serverPath + "/shipping/getUserShippingList";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    ShippingService.prototype.removeShipping = function (id) {
        var url = this.serverPath + "/shipping/remove";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    ShippingService.prototype.setDefaultShipping = function (id) {
        var url = this.serverPath + "/shipping/setDefault";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    return ShippingService;
}());
ShippingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ShippingService);

var _a;
//# sourceMappingURL=shipping.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath;
    }
    UserService.prototype.newUser = function (username, email) {
        var url = this.serverPath + '/user/newUser';
        var userInfo = {
            "username": username,
            "email": email
        };
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, JSON.stringify(userInfo), { headers: tokenHeader });
    };
    UserService.prototype.updateUserInfo = function (user, newPassword, currentPassword) {
        var url = this.serverPath + "/user/updateUserInfo";
        var userInfo = {
            "id": user.id,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "username": user.username,
            "currentPassword": currentPassword,
            "email": user.email,
            "newPassword": newPassword
        };
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, JSON.stringify(userInfo), { headers: tokenHeader });
    };
    UserService.prototype.retrievePassword = function (email) {
        var url = this.serverPath + '/user/forgetPassword';
        var userInfo = {
            "email": email
        };
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, JSON.stringify(userInfo), { headers: tokenHeader });
    };
    UserService.prototype.getCurrentUser = function () {
        var url = this.serverPath + '/user/getCurrentUser';
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map