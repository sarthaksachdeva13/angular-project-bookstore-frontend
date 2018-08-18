"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var book_service_1 = require("./book.service");
describe('BookService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [book_service_1.BookService]
        });
    });
    it('should be created', testing_1.inject([book_service_1.BookService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=book.service.spec.js.map