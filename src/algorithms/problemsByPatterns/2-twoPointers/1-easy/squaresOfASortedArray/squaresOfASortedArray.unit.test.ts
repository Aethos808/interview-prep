import {
  squaresOfASortedArray
} from "./squaresOfASortedArray";

describe(squaresOfASortedArray, () => {
  describe('Given an array of numbers', () => {
    it('then return a sorted list of squares in ascending order', () => {
      const nums1 = [-4, -1, 0, 3, 10];
      const expectedArray1 = [0, 1, 9, 16, 100];

      const nums2 = [-7, -3, 2, 3, 11];
      const expectedArray2 = [4, 9, 9, 49, 121];

      expect(squaresOfASortedArray(nums1)).toEqual(expectedArray1);
      expect(squaresOfASortedArray(nums2)).toEqual(expectedArray2);
    })
  })
})