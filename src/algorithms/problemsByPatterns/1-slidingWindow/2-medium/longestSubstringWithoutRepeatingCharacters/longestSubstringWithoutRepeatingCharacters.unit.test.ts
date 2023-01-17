import {
  longestSubstringWithoutRepeatingCharacters
} from "./longestSubstringWithoutRepeatingCharacters";

describe(longestSubstringWithoutRepeatingCharacters, () => {
  describe('Given a string', () => {
    it('then return length of the longest substring that has no repeating characters', () => {
      let string1 = 'abcabcbb';
      let expectedAnswer1 = 3;

      let string2 = 'bbbbb';
      let expectedAnswer2 = 1;

      let string3 = 'pwwkew';
      let expectedAnswer3 = 3;


      expect(longestSubstringWithoutRepeatingCharacters(string1)).toEqual(expectedAnswer1);
      expect(longestSubstringWithoutRepeatingCharacters(string2)).toEqual(expectedAnswer2);
      expect(longestSubstringWithoutRepeatingCharacters(string3)).toEqual(expectedAnswer3);
    })
  })
})