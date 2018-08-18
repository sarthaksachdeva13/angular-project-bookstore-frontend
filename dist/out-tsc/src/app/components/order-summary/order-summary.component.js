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
var checkout_service_1 = require("../../services/checkout.service");
var order_1 = require("../../models/order");
var OrderSummaryComponent = (function () {
    function OrderSummaryComponent(checkoutService, route, router) {
        this.checkoutService = checkoutService;
        this.route = route;
        this.router = router;
        this.serverPath = app_const_1.AppConst.serverPath;
        this.order = new order_1.Order();
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
    core_1.Component({
        selector: 'app-order-summary',
        templateUrl: './order-summary.component.html',
        styleUrls: ['./order-summary.component.css']
    }),
    __metadata("design:paramtypes", [checkout_service_1.CheckoutService,
        router_1.ActivatedRoute,
        router_1.Router])
], OrderSummaryComponent);
exports.OrderSummaryComponent = OrderSummaryComponent;
//# sourceMappingURL=order-summary.component.js.map