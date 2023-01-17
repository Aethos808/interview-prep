import {findAveragesOfSubArrays} from "./findAveragesOfSubArrays";

describe("findAverageOfSubarray", () => {
  describe("Given an integer array", () => {
    describe("when the array is of size one", () => {
      describe("and k is equal to one", () => {
        it('then the max average value should be equal to the number in the array', () => {
          const expectedAverage = 5.75;
          const testNums = [expectedAverage];
          const k = 1;

          expect(findAveragesOfSubArrays(testNums, k)).toEqual(expectedAverage);
        })
      })
    })
    describe("when the array is bigger than size one", () => {
      describe("and k is greater than or equal to one", () => {
        it("then the max average should be returned given the subarray length", () => {
          const expectedAverage = 12.75;
          const testNums = [1,12,-5,-6,50,3];
          const k = 4;

          expect(findAveragesOfSubArrays(testNums, k)).toEqual(expectedAverage);
        })
      })
    })
  })
})