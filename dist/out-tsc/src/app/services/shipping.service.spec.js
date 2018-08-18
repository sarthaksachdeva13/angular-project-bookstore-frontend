"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var shipping_service_1 = require("./shipping.service");
describe('ShippingService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [shipping_service_1.ShippingService]
        });
    });
    it('should be created', testing_1.inject([shipping_service_1.ShippingService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=shipping.service.spec.js.map