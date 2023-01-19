import {
  findAllAnagramsInAString
} from './findAllAnagramsInAString';

describe(findAllAnagramsInAString, () => {
  describe('Given two strings s and p', () => {
    it('then return the first indices of all p\'s anagrams in s', () => {
      const s1 = 'cbaebabacd';
      const p1 = 'abc';
      const expectedAnswer1 = [0, 6];

      const s2 = 'abab';
      const p2 = 'ab';
      const expectedAnswer2 = [0, 1, 2];

      expect(findAllAnagramsInAString(s1, p1)).toEqual(expectedAnswer1);
      expect(findAllAnagramsInAString(s2, p2)).toEqual(expectedAnswer2);
    })
  })
})