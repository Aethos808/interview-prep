"use strict";
/**
 * TODO: Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 *   In other words, return true if one of s1's permutations is the substring of s2.
 * Link: https://leetcode.com/problems/permutation-in-string/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.permutationInString = void 0;
var permutationInString = function (s1, s2) {
    var containsPermutation = false;
    var startWindow = 0;
    var s1CharCountMap = {};
    var isMatch = 0;
    for (var _i = 0, s1_1 = s1; _i < s1_1.length; _i++) {
        var char = s1_1[_i];
        if (!s1CharCountMap[char]) {
            s1CharCountMap[char] = 0;
        }
        s1CharCountMap[char]++;
    }
    for (var endWindow = 0; endWindow < s2.length; endWindow++) {
        var currentChar = s2[endWindow];
        if (currentChar in s1CharCountMap) {
            s1CharCountMap[currentChar]--;
            if (s1CharCountMap[currentChar] === 0) {
                isMatch++;
            }
        }
        if (isMatch === Object.keys(s1CharCountMap).length) {
            containsPermutation = true;
            return containsPermutation;
        }
        if (endWindow >= s1.length - 1) {
            var startChar = s2[startWindow];
            if (startChar in s1CharCountMap) {
                if (s1CharCountMap[startChar] === 0) {
                    isMatch--;
                }
                s1CharCountMap[startChar]++;
            }
            startWindow++;
        }
    }
    return containsPermutation;
};
exports.permutationInString = permutationInString;
