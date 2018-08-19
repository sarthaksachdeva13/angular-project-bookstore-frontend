"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var app_routing_1 = require("./app.routing");
require("hammerjs");
var angular2_datatable_1 = require("angular2-datatable");
var data_filter_pipe_1 = require("./components/book-list/data-filter.pipe");
var login_service_1 = require("./services/login.service");
var user_service_1 = require("./services/user.service");
var payment_service_1 = require("./services/payment.service");
var shipping_service_1 = require("./services/shipping.service");
var book_service_1 = require("./services/book.service");
var cart_service_1 = require("./services/cart.service");
var order_service_1 = require("./services/order.service");
var checkout_service_1 = require("./services/checkout.service");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var nav_bar_component_1 = require("./components/nav-bar/nav-bar.component");
var my_account_component_1 = require("./components/my-account/my-account.component");
var my_profile_component_1 = require("./components/my-profile/my-profile.component");
var book_list_component_1 = require("./components/book-list/book-list.component");
var book_detail_component_1 = require("./components/book-detail/book-detail.component");
var shopping_cart_component_1 = require("./components/shopping-cart/shopping-cart.component");
var order_component_1 = require("./components/order/order.component");
var order_summary_component_1 = require("./components/order-summary/order-summary.component");
var book_list_api_component_1 = require("./components/book-list-api/book-list-api.component");
var book_description_api_component_1 = require("./components/book-description-api/book-description-api.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            nav_bar_component_1.NavBarComponent,
            my_account_component_1.MyAccountComponent,
            my_profile_component_1.MyProfileComponent,
            book_list_component_1.BookListComponent,
            data_filter_pipe_1.DataFilterPipe,
            book_detail_component_1.BookDetailComponent,
            shopping_cart_component_1.ShoppingCartComponent,
            order_component_1.OrderComponent,
            order_summary_component_1.OrderSummaryComponent,
            book_list_api_component_1.BookListAPIComponent,
            book_description_api_component_1.BookDescriptionApiComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing,
            material_1.MaterialModule,
            angular2_datatable_1.DataTableModule
        ],
        providers: [
            login_service_1.LoginService,
            user_service_1.UserService,
            payment_service_1.PaymentService,
            shipping_service_1.ShippingService,
            book_service_1.BookService,
            cart_service_1.CartService,
            order_service_1.OrderService,
            checkout_service_1.CheckoutService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map