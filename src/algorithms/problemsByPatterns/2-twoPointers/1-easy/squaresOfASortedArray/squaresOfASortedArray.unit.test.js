"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var squaresOfASortedArray_1 = require("./squaresOfASortedArray");
describe(squaresOfASortedArray_1.squaresOfASortedArray, function () {
    describe('Given an array of numbers', function () {
        it('then return a sorted list of squares in ascending order', function () {
            var nums1 = [-4, -1, 0, 3, 10];
            var expectedArray1 = [0, 1, 9, 16, 100];
            var nums2 = [-7, -3, 2, 3, 11];
            var expectedArray2 = [4, 9, 9, 49, 121];
            expect((0, squaresOfASortedArray_1.squaresOfASortedArray)(nums1)).toEqual(expectedArray1);
            expect((0, squaresOfASortedArray_1.squaresOfASortedArray)(nums2)).toEqual(expectedArray2);
        });
    });
});
