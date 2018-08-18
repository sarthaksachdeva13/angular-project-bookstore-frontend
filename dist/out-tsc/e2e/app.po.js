"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var StoreFrontPage = (function () {
    function StoreFrontPage() {
    }
    StoreFrontPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    StoreFrontPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return StoreFrontPage;
}());
exports.StoreFrontPage = StoreFrontPage;
//# sourceMappingURL=app.po.js.map