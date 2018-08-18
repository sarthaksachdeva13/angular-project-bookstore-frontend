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
var http_1 = require("@angular/http");
var app_const_1 = require("../constants/app-const");
var BookService = (function () {
    function BookService(http) {
        this.http = http;
    }
    BookService.prototype.getBookList = function () {
        var url = app_const_1.AppConst.serverPath + '/book/bookList';
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    BookService.prototype.getBook = function (id) {
        var url = app_const_1.AppConst.serverPath + '/book/' + id;
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    BookService.prototype.searchBook = function (keyword) {
        var url = app_const_1.AppConst.serverPath + '/book/searchBook';
        var tokenHeader = new http_1.Headers({
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map