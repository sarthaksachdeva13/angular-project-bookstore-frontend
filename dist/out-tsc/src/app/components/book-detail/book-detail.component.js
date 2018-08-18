"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var book_1 = require("../../models/book");
var book_service_1 = require("../../services/book.service");
var cart_service_1 = require("../../services/cart.service");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_const_1 = require("../../constants/app-const");
var BookDetailComponent = (function () {
    function BookDetailComponent(bookService, cartService, router, http, route) {
        this.bookService = bookService;
        this.cartService = cartService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.book = new book_1.Book();
        this.serverPath = app_const_1.AppConst.serverPath;
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
    core_1.Component({
        selector: 'app-book-detail',
        templateUrl: './book-detail.component.html',
        styleUrls: ['./book-detail.component.css']
    }),
    __metadata("design:paramtypes", [book_service_1.BookService,
        cart_service_1.CartService,
        router_1.Router,
        http_1.Http,
        router_1.ActivatedRoute])
], BookDetailComponent);
exports.BookDetailComponent = BookDetailComponent;
//# sourceMappingURL=book-detail.component.js.map