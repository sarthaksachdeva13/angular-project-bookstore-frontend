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
var app_const_1 = require("../../constants/app-const");
var BookListComponent = (function () {
    function BookListComponent(bookService, router, http, route) {
        this.bookService = bookService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.filterQuery = '';
        this.rowsOnPage = 5;
        this.serverPath = app_const_1.AppConst.serverPath;
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
    core_1.Component({
        selector: 'app-book-list',
        templateUrl: './book-list.component.html',
        styleUrls: ['./book-list.component.css']
    }),
    __metadata("design:paramtypes", [book_service_1.BookService,
        router_1.Router,
        http_1.Http,
        router_1.ActivatedRoute])
], BookListComponent);
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=book-list.component.js.map