import {
  removeDuplicatesFromSortedArray
} from './removeDuplicatesFromSortedArray';

describe(removeDuplicatesFromSortedArray, () => {
  describe('Given a sorted number array in ascending order', () => {
    it('then remove duplicates so each distinct element appears only once and the relative order is kept', () => {
      let nums1 = [1,1,2];
      const expectedAnswerNewArray1 = [1,2,1];
      const expectedAnswerK1 = 2;

      let nums2 = [0,0,1,1,1,2,2,3,3,4];
      const expectedAnswerNewArray2 = [0,1,2,3,4,0,1,1,2,3];
      const expectedAnswerK2 = 5;

      expect(removeDuplicatesFromSortedArray(nums1)).toEqual(expectedAnswerK1);
      expect(removeDuplicatesFromSortedArray(nums2)).toEqual(expectedAnswerK2);

      expect(nums1[0]).toEqual(expectedAnswerNewArray1[0]);
      expect(nums1[1]).toEqual(expectedAnswerNewArray1[1]);

      expect(nums2[0]).toEqual(expectedAnswerNewArray2[0]);
      expect(nums2[1]).toEqual(expectedAnswerNewArray2[1]);
      expect(nums2[2]).toEqual(expectedAnswerNewArray2[2]);
      expect(nums2[3]).toEqual(expectedAnswerNewArray2[3]);
      expect(nums2[4]).toEqual(expectedAnswerNewArray2[4]);

    })
  })
})
