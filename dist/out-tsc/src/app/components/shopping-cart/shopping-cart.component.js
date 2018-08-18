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
var app_const_1 = require("../../constants/app-const");
var router_1 = require("@angular/router");
var cart_service_1 = require("../../services/cart.service");
var shopping_cart_1 = require("../../models/shopping-cart");
var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(router, cartService) {
        this.router = router;
        this.cartService = cartService;
        this.serverPath = app_const_1.AppConst.serverPath;
        this.cartItemList = [];
        this.shoppingCart = new shopping_cart_1.ShoppingCart();
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
                    console.log("not enough stock on some item");
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
    core_1.Component({
        selector: 'app-shopping-cart',
        templateUrl: './shopping-cart.component.html',
        styleUrls: ['./shopping-cart.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        cart_service_1.CartService])
], ShoppingCartComponent);
exports.ShoppingCartComponent = ShoppingCartComponent;
//# sourceMappingURL=shopping-cart.component.js.map