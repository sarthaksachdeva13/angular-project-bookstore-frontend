"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var checkout_service_1 = require("./checkout.service");
describe('CheckoutService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [checkout_service_1.CheckoutService]
        });
    });
    it('should be created', testing_1.inject([checkout_service_1.CheckoutService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=checkout.service.spec.js.map