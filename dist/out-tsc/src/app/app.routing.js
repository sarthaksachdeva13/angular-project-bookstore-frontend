"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var my_account_component_1 = require("./components/my-account/my-account.component");
var my_profile_component_1 = require("./components/my-profile/my-profile.component");
var book_list_component_1 = require("./components/book-list/book-list.component");
var book_detail_component_1 = require("./components/book-detail/book-detail.component");
var shopping_cart_component_1 = require("./components/shopping-cart/shopping-cart.component");
var order_component_1 = require("./components/order/order.component");
var order_summary_component_1 = require("./components/order-summary/order-summary.component");
var book_list_api_component_1 = require("./components/book-list-api/book-list-api.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'myAccount',
        component: my_account_component_1.MyAccountComponent
    },
    {
        path: 'myProfile',
        component: my_profile_component_1.MyProfileComponent
    },
    {
        path: 'bookList',
        component: book_list_component_1.BookListComponent
    },
    {
        path: 'bookDetail/:id',
        component: book_detail_component_1.BookDetailComponent
    },
    {
        path: 'shoppingCart',
        component: shopping_cart_component_1.ShoppingCartComponent
    },
    {
        path: 'checkout',
        component: order_component_1.OrderComponent
    },
    {
        path: 'orderSummary',
        component: order_summary_component_1.OrderSummaryComponent
    },
    {
        path: 'search/:searchQ',
        component: book_list_api_component_1.BookListAPIComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map