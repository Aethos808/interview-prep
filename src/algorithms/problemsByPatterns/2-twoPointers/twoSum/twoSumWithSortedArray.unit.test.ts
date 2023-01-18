import {twoSum} from "./twoSumWithSortedArray";

describe(twoSum, () => {
  describe('Given a sorted array and target value', () => {
    it('then return a array with two indices that sum a target value', () => {
      const array1 = [2,7,11,15];
      const target1 = 9;

      const array2 = [2,3,4];
      const target2 = 6;

      const array3 = [3,3];
      const target3 = 6;

      const array4 = [1, 2, 10, 18, 20, 21, 22, 28];
      const target4 = 31;

      expect(twoSum(array1, target1)).toEqual([0, 1]);
      expect(twoSum(array2, target2)).toEqual([0, 2]);
      expect(twoSum(array3, target3)).toEqual([0, 1]);
      expect(twoSum(array4, target4)).toEqual([2, 5]);
    })
  })
})