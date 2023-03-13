"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var twoSumWithSortedArray_1 = require("./twoSumWithSortedArray");
describe(twoSumWithSortedArray_1.twoSum, function () {
    describe('Given a sorted array and target value', function () {
        it('then return a array with two indices that sum a target value', function () {
            var array1 = [2, 7, 11, 15];
            var target1 = 9;
            var array2 = [2, 3, 4];
            var target2 = 6;
            var array3 = [3, 3];
            var target3 = 6;
            var array4 = [1, 2, 10, 18, 20, 21, 22, 28];
            var target4 = 31;
            expect((0, twoSumWithSortedArray_1.twoSum)(array1, target1)).toEqual([0, 1]);
            expect((0, twoSumWithSortedArray_1.twoSum)(array2, target2)).toEqual([0, 2]);
            expect((0, twoSumWithSortedArray_1.twoSum)(array3, target3)).toEqual([0, 1]);
            expect((0, twoSumWithSortedArray_1.twoSum)(array4, target4)).toEqual([2, 5]);
        });
        it('for muscle memory', function () {
            var arrays = [[2, 7, 11, 15], [2, 3, 4], [3, 3], [1, 2, 10, 18, 20, 21, 22, 28]];
            var targets = [9, 6, 6, 31];
            var solutions = [[0, 1], [0, 2], [0, 1], [2, 5]];
            arrays.forEach(function (arr, index) {
                expect((0, twoSumWithSortedArray_1.twoSum)(arr, targets[index])).toEqual(solutions[index]);
            });
        });
    });
});
