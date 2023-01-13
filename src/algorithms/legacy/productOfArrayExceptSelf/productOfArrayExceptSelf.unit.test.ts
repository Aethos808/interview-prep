import { productOfArrayExceptSelf } from './productOfArrayExceptSelf';

describe('productOfArrayExceptSelf', () => {
  describe('Given an array of numbers', () => {
    it('should return an array of products,where each index includes the product of all other numbers and excludes the number in that index', () => {
      expect(productOfArrayExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
      expect(productOfArrayExceptSelf([-1,1,0,-3,3])).toEqual([0,0,9,0,0]);
    });
  })
});