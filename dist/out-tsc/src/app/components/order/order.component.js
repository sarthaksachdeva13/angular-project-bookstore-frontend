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
var shipping_service_1 = require("../../services/shipping.service");
var payment_service_1 = require("../../services/payment.service");
var checkout_service_1 = require("../../services/checkout.service");
var shopping_cart_1 = require("../../models/shopping-cart");
var shipping_address_1 = require("../../models/shipping-address");
var billing_address_1 = require("../../models/billing-address");
var user_payment_1 = require("../../models/user-payment");
var user_billing_1 = require("../../models/user-billing");
var user_shipping_1 = require("../../models/user-shipping");
var payment_1 = require("../../models/payment");
var order_1 = require("../../models/order");
var OrderComponent = (function () {
    function OrderComponent(router, cartService, shippingService, paymentService, checkoutService) {
        this.router = router;
        this.cartService = cartService;
        this.shippingService = shippingService;
        this.paymentService = paymentService;
        this.checkoutService = checkoutService;
        this.serverPath = app_const_1.AppConst.serverPath;
        this.cartItemList = [];
        this.shoppingCart = new shopping_cart_1.ShoppingCart();
        this.shippingAddress = new shipping_address_1.ShippingAddress();
        this.billingAddress = new billing_address_1.BillingAddress();
        this.userPayment = new user_payment_1.UserPayment();
        this.userShipping = new user_shipping_1.UserShipping();
        this.userBilling = new user_billing_1.UserBilling();
        this.userShippingList = [];
        this.userPaymentList = [];
        this.payment = new payment_1.Payment();
        this.emptyShippingList = true;
        this.emptyPaymentList = true;
        this.stateList = [];
        this.order = new order_1.Order();
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
        console.log("same as shipping");
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
            this.billingAddress.billingAddressName = "";
            this.billingAddress.billingAddressStreet1 = "";
            this.billingAddress.billingAddressStreet2 = "";
            this.billingAddress.billingAddressCity = "";
            this.billingAddress.billingAddressState = "";
            this.billingAddress.billingAddressCountry = "";
            this.billingAddress.billingAddressZipcode = "";
        }
    };
    OrderComponent.prototype.onSubmit = function () {
        var _this = this;
        this.checkoutService.checkout(this.shippingAddress, this.billingAddress, this.payment, this.shippingMethod).subscribe(function (res) {
            _this.order = res.json();
            console.log(_this.order);
            var navigationExtras = {
                queryParams: {
                    "order": JSON.stringify(_this.order)
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
        for (var s in app_const_1.AppConst.usStates) {
            this.stateList.push(s);
        }
        this.payment.type = "";
        this.payment.expiryMonth = "";
        this.payment.expiryYear = "";
        this.billingAddress.billingAddressState = "";
        this.shippingAddress.shippingAddressState = "";
        this.shippingMethod = "groundShipping";
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    core_1.Component({
        selector: 'app-order',
        templateUrl: './order.component.html',
        styleUrls: ['./order.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        cart_service_1.CartService,
        shipping_service_1.ShippingService,
        payment_service_1.PaymentService,
        checkout_service_1.CheckoutService])
], OrderComponent);
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map