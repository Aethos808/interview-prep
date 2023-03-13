"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var longestSubstringWithAtMostKDistinctCharacters_1 = require("./longestSubstringWithAtMostKDistinctCharacters");
describe("longestSubstringWithAtMostKDistinctCharacters", function () {
    describe("Given a string s and an integer k", function () {
        it("then return the longest substring with at most k distinct letters", function () {
            var string1 = 'eceba';
            var k1 = 2;
            var expectedSubstringLength1 = 3;
            var string2 = 'abee';
            var k2 = 1;
            var expectedSubstringLength2 = 2;
            expect((0, longestSubstringWithAtMostKDistinctCharacters_1.longestSubstringWithAtMostKDistinctCharacters)(string1, k1)).toEqual(expectedSubstringLength1);
            expect((0, longestSubstringWithAtMostKDistinctCharacters_1.longestSubstringWithAtMostKDistinctCharacters)(string2, k2)).toEqual(expectedSubstringLength2);
        });
    });
});
