import {
  permutationInString
} from "./permutationInString";

describe(permutationInString, () => {
  describe('Given two strings', () => {
    it('then return true or false is some s1 permutation lives in s2', () => {
      const stringOne1 = 'ab'
      const stringTwo1 = 'eidbaooo'
      const expectedOutput1 = true;

      const stringOne2 = 'ab'
      const stringTwo2 = 'eidboaooo'
      const expectedOutput2 = false;

      expect(permutationInString(stringOne1, stringTwo1)).toEqual(expectedOutput1)
      expect(permutationInString(stringOne2, stringTwo2)).toEqual(expectedOutput2)
    })
  })
})