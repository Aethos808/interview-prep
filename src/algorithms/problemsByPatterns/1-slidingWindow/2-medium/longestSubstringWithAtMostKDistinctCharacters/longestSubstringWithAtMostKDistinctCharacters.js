"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestSubstringWithAtMostKDistinctCharacters = void 0;
/**
 * TODO: Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.
 * link - https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
 * @param s - some string
 * @param k - max number of distinct characters in a subarray
 */
var longestSubstringWithAtMostKDistinctCharacters = function (s, k) {
    var longestSubstring = '';
    if (k === 0) {
        return longestSubstring.length;
    }
    var letterOccurrenceInWindowMap = {};
    var numberOfDistinctChars = 0;
    var windowSubstring = '';
    for (var endWindow = 0; endWindow < s.length; endWindow++) {
        var currentChar = s[endWindow];
        windowSubstring += currentChar;
        if (!letterOccurrenceInWindowMap[currentChar]) {
            letterOccurrenceInWindowMap[currentChar] = 0;
            numberOfDistinctChars++;
        }
        letterOccurrenceInWindowMap[currentChar]++;
        if (numberOfDistinctChars > k) {
            var letterToRemove = windowSubstring.substring(0, 1);
            letterOccurrenceInWindowMap[letterToRemove]--;
            windowSubstring = windowSubstring.substring(1);
            if (letterOccurrenceInWindowMap[letterToRemove] === 0) {
                numberOfDistinctChars--;
            }
        }
        if (longestSubstring.length < windowSubstring.length) {
            longestSubstring = windowSubstring;
        }
    }
    return longestSubstring.length;
};
exports.longestSubstringWithAtMostKDistinctCharacters = longestSubstringWithAtMostKDistinctCharacters;
