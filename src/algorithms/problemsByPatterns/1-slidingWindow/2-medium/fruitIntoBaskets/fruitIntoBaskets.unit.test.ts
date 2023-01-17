import {
  fruitIntoBaskets
} from "./fruitIntoBaskets";

describe(fruitIntoBaskets, function () {
  describe('Given an array of fruits', () => {
    it('then return the max number of fruits you can pick', () => {
      const array1 = [1,2,1];
      const expectedValue1 = 3;

      const array2 = [0,1,2,2];
      const expectedValue2 = 3;

      const array3 = [1,2,3,2,2];
      const expectedValue3 = 4;

      expect(fruitIntoBaskets(array1)).toEqual(expectedValue1);
      expect(fruitIntoBaskets(array2)).toEqual(expectedValue2);
      expect(fruitIntoBaskets(array3)).toEqual(expectedValue3);
    })
  })
});