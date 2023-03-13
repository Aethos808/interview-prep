"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var largestSubarrayLengthK_1 = require("./largestSubarrayLengthK");
describe("maximumSumSubarrayOfSizeK", function () {
    describe('Given a positive array and k', function () {
        it('then return max sum of any continuous array', function () {
            var array = [1, 3, 1, 5, 7, 2];
            var k = 3;
            var expectedGreatestSum = 14;
            var sizeOneArray = [2];
            var sizeOneK = 1;
            var sizeOneExpectedGreatestSum = 2;
            expect((0, largestSubarrayLengthK_1.largestSubarrayLengthK)(array, k)).toEqual(expectedGreatestSum);
            expect((0, largestSubarrayLengthK_1.largestSubarrayLengthK)(sizeOneArray, sizeOneK)).toEqual(sizeOneExpectedGreatestSum);
        });
    });
});
