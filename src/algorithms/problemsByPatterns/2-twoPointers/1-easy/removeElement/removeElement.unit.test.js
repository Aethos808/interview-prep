"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeElement_1 = require("./removeElement");
describe(removeElement_1.removeElement, function () {
    describe('Given an integer array and an integer k', function () {
        it('then return new size of array after removing all k\'s', function () {
            var nums1 = [3, 2, 2, 3];
            var numsNew1 = [2, 2];
            var val1 = 3;
            var expectedSize1 = 2;
            var nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
            var numsNew2 = [0, 1, 3, 0, 4];
            var val2 = 2;
            var expectedSize2 = 5;
            console.log(nums1);
            expect((0, removeElement_1.removeElement)(nums1, val1)).toEqual(expectedSize1);
            console.log(nums1);
            expect(nums1[0]).toEqual(numsNew1[0]);
            expect(nums1[1]).toEqual(numsNew1[1]);
            console.log(nums2);
            expect((0, removeElement_1.removeElement)(nums2, val2)).toEqual(expectedSize2);
            console.log(nums2);
            expect(nums2[0]).toEqual(numsNew2[0]);
            expect(nums2[1]).toEqual(numsNew2[1]);
            expect(nums2[2]).toEqual(numsNew2[2]);
            expect(nums2[3]).toEqual(numsNew2[3]);
            expect(nums2[4]).toEqual(numsNew2[4]);
        });
    });
});
