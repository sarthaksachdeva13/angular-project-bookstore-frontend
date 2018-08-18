"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var payment_service_service_1 = require("./payment-service.service");
describe('PaymentServiceService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [payment_service_service_1.PaymentServiceService]
        });
    });
    it('should be created', testing_1.inject([payment_service_service_1.PaymentServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=payment.service.spec.js.map