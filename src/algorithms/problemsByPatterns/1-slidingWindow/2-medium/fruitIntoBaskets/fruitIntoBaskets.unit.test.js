"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fruitIntoBaskets_1 = require("./fruitIntoBaskets");
describe(fruitIntoBaskets_1.fruitIntoBaskets, function () {
    describe('Given an array of fruits', function () {
        it('then return the max number of fruits you can pick', function () {
            var array1 = [1, 2, 1];
            var expectedValue1 = 3;
            var array2 = [0, 1, 2, 2];
            var expectedValue2 = 3;
            var array3 = [1, 2, 3, 2, 2];
            var expectedValue3 = 4;
            expect((0, fruitIntoBaskets_1.fruitIntoBaskets)(array1)).toEqual(expectedValue1);
            expect((0, fruitIntoBaskets_1.fruitIntoBaskets)(array2)).toEqual(expectedValue2);
            expect((0, fruitIntoBaskets_1.fruitIntoBaskets)(array3)).toEqual(expectedValue3);
        });
    });
});
