import {minimumSizeSubarray} from "./minimumSizeSubarraySum";

describe("minimumSizeSubArray", () => {
  describe('Given a positive array and s', () => {
    it('then return min sum of any continuous array', () => {
      const array = [1,3,1,5,7,2];
      const k = 3;
      const expectedSmallestSum = 5;

      const sizeOneArray = [2];
      const sizeOneK = 1;
      const sizeOneExpectedSmallestSum = 2;

      expect(minimumSizeSubarray(array, k)).toEqual(expectedSmallestSum);
      expect(minimumSizeSubarray(sizeOneArray, sizeOneK)).toEqual(sizeOneExpectedSmallestSum);
    })
  })
})