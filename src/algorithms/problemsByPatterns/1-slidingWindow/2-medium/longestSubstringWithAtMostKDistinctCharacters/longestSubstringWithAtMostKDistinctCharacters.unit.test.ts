import {longestSubstringWithAtMostKDistinctCharacters} from "./longestSubstringWithAtMostKDistinctCharacters";

describe("longestSubstringWithAtMostKDistinctCharacters", () => {
  describe("Given a string s and an integer k", () => {
    it("then return the longest substring with at most k distinct letters", () => {
      const string1 = 'eceba';
      const k1 = 2;
      const expectedSubstringLength1 = 3;

      const string2 = 'abee';
      const k2 = 1;
      const expectedSubstringLength2 = 2;

      expect(longestSubstringWithAtMostKDistinctCharacters(string1, k1)).toEqual(expectedSubstringLength1);
      expect(longestSubstringWithAtMostKDistinctCharacters(string2, k2)).toEqual(expectedSubstringLength2);
    })
  })
})