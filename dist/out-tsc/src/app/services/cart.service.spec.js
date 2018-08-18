"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var cart_service_1 = require("./cart.service");
describe('CartService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [cart_service_1.CartService]
        });
    });
    it('should be created', testing_1.inject([cart_service_1.CartService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=cart.service.spec.js.map