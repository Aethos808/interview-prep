"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestSubstringWithoutRepeatingCharacters = void 0;
/**
 * TODO:Given a string s, find the length of the longest substring without repeating characters.
 * link - https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param s
 */
var longestSubstringWithoutRepeatingCharacters = function (s) {
    var maxDistinctCharacters = 1;
    var longestStringLength = 0;
    var currentSubString = '';
    var valuesInWindow = {};
    var startWindow = 0;
    for (var endWindow = 0; endWindow < s.length; endWindow++) {
        var currentChar = s[endWindow];
        currentSubString += currentChar;
        if (!valuesInWindow[currentChar]) {
            valuesInWindow[currentChar] = 0;
        }
        valuesInWindow[currentChar]++;
        while (valuesInWindow[currentChar] > maxDistinctCharacters) {
            var charToRemove = s[startWindow];
            valuesInWindow[charToRemove]--;
            currentSubString = currentSubString.substring(1);
            startWindow++;
        }
        longestStringLength = Math.max(currentSubString.length, longestStringLength);
    }
    return longestStringLength;
};
exports.longestSubstringWithoutRepeatingCharacters = longestSubstringWithoutRepeatingCharacters;
