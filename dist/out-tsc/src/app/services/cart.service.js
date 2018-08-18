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
var CartService = (function () {
    function CartService(http) {
        this.http = http;
    }
    CartService.prototype.addItem = function (id, qty) {
        var url = app_const_1.AppConst.serverPath + "/cart/add";
        var cartItemInfo = {
            "bookId": id,
            "qty": qty
        };
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, cartItemInfo, { headers: tokenHeader });
    };
    CartService.prototype.getCartItemList = function () {
        var url = app_const_1.AppConst.serverPath + "/cart/getCartItemList";
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    CartService.prototype.getShoppingCart = function () {
        var url = app_const_1.AppConst.serverPath + "/cart/getShoppingCart";
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    CartService.prototype.updateCartItem = function (cartItemId, qty) {
        var url = app_const_1.AppConst.serverPath + "/cart/updateCartItem";
        var cartItemInfo = {
            "cartItemId": cartItemId,
            "qty": qty
        };
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, cartItemInfo, { headers: tokenHeader });
    };
    CartService.prototype.removeCartItem = function (id) {
        var url = app_const_1.AppConst.serverPath + "/cart/removeItem";
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    return CartService;
}());
CartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map