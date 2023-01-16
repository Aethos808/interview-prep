import {maximumSumSubarrayOfSizeK} from "./maximumSumSubarrayOfSizeK";

describe("maximumSumSubarrayOfSizeK", () => {
  describe('Given a positive array and k', () => {
    it('then return max sum of any continuous array', () => {
      const array = [1,3,1,5,7,2];
      const k = 3;
      const expectedGreatestSum = 14;

      const sizeOneArray = [2];
      const sizeOneK = 1;
      const sizeOneExpectedGreatestSum = 2;

      expect(maximumSumSubarrayOfSizeK(array, k)).toEqual(expectedGreatestSum);
      expect(maximumSumSubarrayOfSizeK(sizeOneArray, sizeOneK)).toEqual(sizeOneExpectedGreatestSum);
    })
  })
})