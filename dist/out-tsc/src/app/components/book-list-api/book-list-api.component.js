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
var book_service_1 = require("../../services/book.service");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
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
    core_1.Component({
        selector: 'app-book-list-api',
        templateUrl: './book-list-api.component.html',
        styleUrls: ['./book-list-api.component.css']
    }),
    __metadata("design:paramtypes", [book_service_1.BookService,
        router_1.Router,
        http_1.Http,
        router_1.ActivatedRoute])
], BookListAPIComponent);
exports.BookListAPIComponent = BookListAPIComponent;
//# sourceMappingURL=book-list-api.component.js.map