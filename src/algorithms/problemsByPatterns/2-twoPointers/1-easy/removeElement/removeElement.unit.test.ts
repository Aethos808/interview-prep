import {removeElement} from "./removeElement";

describe(removeElement, () => {
  describe('Given an integer array and an integer k', () => {
    it('then return new size of array after removing all k\'s', () => {
      const nums1 = [3,2,2,3];
      const numsNew1 = [2,2];
      const val1 = 3;
      const expectedSize1 = 2;

      const nums2 = [0,1,2,2,3,0,4,2];
      const numsNew2 = [0,1,3,0,4]
      const val2 = 2;
      const expectedSize2 = 5;

      expect(removeElement(nums1, val1)).toEqual(expectedSize1);
      expect(nums1[0]).toEqual(numsNew1[0]);
      expect(nums1[1]).toEqual(numsNew1[1]);

      expect(removeElement(nums2, val2)).toEqual(expectedSize2);
      expect(nums2[0]).toEqual(numsNew2[0]);
      expect(nums2[1]).toEqual(numsNew2[1]);
      expect(nums2[2]).toEqual(numsNew2[2]);
      expect(nums2[3]).toEqual(numsNew2[3]);
      expect(nums2[4]).toEqual(numsNew2[4]);
    })
  })
})