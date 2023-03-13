"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minimumSizeSubarraySum_1 = require("./minimumSizeSubarraySum");
describe("minimumSizeSubArray", function () {
    describe('Given a positive array and s', function () {
        it('then return min sum of any continuous array', function () {
            var array = [1, 3, 1, 5, 7, 2];
            var k = 3;
            var expectedSmallestSum = 5;
            var sizeOneArray = [2];
            var sizeOneK = 1;
            var sizeOneExpectedSmallestSum = 2;
            expect((0, minimumSizeSubarraySum_1.minimumSizeSubarray)(array, k)).toEqual(expectedSmallestSum);
            expect((0, minimumSizeSubarraySum_1.minimumSizeSubarray)(sizeOneArray, sizeOneK)).toEqual(sizeOneExpectedSmallestSum);
        });
    });
});
