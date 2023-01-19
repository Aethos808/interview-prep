import {
  minimumWindowSubstring
} from "./minimumWindowSubstring";

describe(minimumWindowSubstring, () => {
  describe('Given a string s and a string t' ,() => {
    it('then return the shortest subarray in s that contains the a t permutation', () => {
      const s1 = 'ADOBECODEBANC';
      const t1 = 'ABC';
      const expectedAnswer1 = 'BANC'

      const s2 = 'a';
      const t2 = 'a';
      const expectedAnswer2 = 'a'

      const s3 = 'a';
      const t3 = 'aa';
      const expectedAnswer3 = ''

      expect(minimumWindowSubstring(s1,t1)).toEqual(expectedAnswer1);
      expect(minimumWindowSubstring(s2,t2)).toEqual(expectedAnswer2);
      expect(minimumWindowSubstring(s3,t3)).toEqual(expectedAnswer3);
    })
  })
})