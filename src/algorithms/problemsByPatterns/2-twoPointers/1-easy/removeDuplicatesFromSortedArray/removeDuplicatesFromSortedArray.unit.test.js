"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeDuplicatesFromSortedArray_1 = require("./removeDuplicatesFromSortedArray");
describe(removeDuplicatesFromSortedArray_1.removeDuplicatesFromSortedArray, function () {
    describe('Given a sorted number array in ascending order', function () {
        it('then remove duplicates so each distinct element appears only once and the relative order is kept', function () {
            var nums1 = [1, 1, 2];
            var expectedAnswerNewArray1 = [1, 2, 1];
            var expectedAnswerK1 = 2;
            var nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
            var expectedAnswerNewArray2 = [0, 1, 2, 3, 4, 0, 1, 1, 2, 3];
            var expectedAnswerK2 = 5;
            expect((0, removeDuplicatesFromSortedArray_1.removeDuplicatesFromSortedArray)(nums1)).toEqual(expectedAnswerK1);
            expect((0, removeDuplicatesFromSortedArray_1.removeDuplicatesFromSortedArray)(nums2)).toEqual(expectedAnswerK2);
            expect(nums1[0]).toEqual(expectedAnswerNewArray1[0]);
            expect(nums1[1]).toEqual(expectedAnswerNewArray1[1]);
            expect(nums2[0]).toEqual(expectedAnswerNewArray2[0]);
            expect(nums2[1]).toEqual(expectedAnswerNewArray2[1]);
            expect(nums2[2]).toEqual(expectedAnswerNewArray2[2]);
            expect(nums2[3]).toEqual(expectedAnswerNewArray2[3]);
            expect(nums2[4]).toEqual(expectedAnswerNewArray2[4]);
        });
    });
});
