"use strict";
/**
 * TODO: Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that
 *   every character in t (including duplicates) is included in the window. If there is no such substring, return the
 *   empty string "".
 * Link: https://leetcode.com/problems/minimum-window-substring/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.minimumWindowSubstring = void 0;
var minimumWindowSubstring = function (s, t) {
    var shortestSubString = '';
    var charFrequencyMap = {};
    var currentWindowSubstring = '';
    var startWindow = 0;
    var matchPatternTimes = 0;
    for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
        var char = t_1[_i];
        charFrequencyMap[char] = charFrequencyMap[char] + 1 || 1;
    }
    for (var endWindow = 0; endWindow < s.length; endWindow++) {
        var currentChar = s[endWindow];
        currentWindowSubstring += currentChar;
        if (currentChar in charFrequencyMap) {
            charFrequencyMap[currentChar]--;
            if (charFrequencyMap[currentChar] === 0) {
                matchPatternTimes++;
            }
        }
        while (matchPatternTimes === t.length) {
            if (shortestSubString === '' || shortestSubString.length > currentWindowSubstring.length) {
                shortestSubString = currentWindowSubstring;
            }
            var startWindowChar = s[startWindow];
            startWindow++;
            currentWindowSubstring = currentWindowSubstring.substring(1);
            if (startWindowChar in charFrequencyMap) {
                charFrequencyMap[startWindowChar]++;
                if (charFrequencyMap[startWindowChar] > 0) {
                    matchPatternTimes--;
                }
            }
        }
    }
    return shortestSubString;
};
exports.minimumWindowSubstring = minimumWindowSubstring;
