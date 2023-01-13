import {containsDuplicate} from './containsDuplicate';

describe('containsDuplicate', () => {
  describe('Given an array of numbers', () => {
    it('should return true if array contains duplicates', () => {
      expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
      expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
    });

    it('should return false if array does not contain duplicates', () => {
      expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    });
  })
});