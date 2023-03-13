"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var longestSubstringWithoutRepeatingCharacters_1 = require("./longestSubstringWithoutRepeatingCharacters");
describe(longestSubstringWithoutRepeatingCharacters_1.longestSubstringWithoutRepeatingCharacters, function () {
    describe('Given a string', function () {
        it('then return length of the longest substring that has no repeating characters', function () {
            var string1 = 'abcabcbb';
            var expectedAnswer1 = 3;
            var string2 = 'bbbbb';
            var expectedAnswer2 = 1;
            var string3 = 'pwwkew';
            var expectedAnswer3 = 3;
            expect((0, longestSubstringWithoutRepeatingCharacters_1.longestSubstringWithoutRepeatingCharacters)(string1)).toEqual(expectedAnswer1);
            expect((0, longestSubstringWithoutRepeatingCharacters_1.longestSubstringWithoutRepeatingCharacters)(string2)).toEqual(expectedAnswer2);
            expect((0, longestSubstringWithoutRepeatingCharacters_1.longestSubstringWithoutRepeatingCharacters)(string3)).toEqual(expectedAnswer3);
        });
    });
});
