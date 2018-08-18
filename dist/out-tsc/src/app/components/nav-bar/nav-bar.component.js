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
var login_service_1 = require("../../services/login.service");
var router_1 = require("@angular/router");
var book_service_1 = require("../../services/book.service");
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
    core_1.Component({
        selector: 'app-nav-bar',
        templateUrl: './nav-bar.component.html',
        styleUrls: ['./nav-bar.component.css']
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        router_1.Router,
        book_service_1.BookService,
        router_1.ActivatedRoute])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav-bar.component.js.map