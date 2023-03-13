"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squaresOfASortedArray = void 0;
/**
 * TODO:Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted
 *   in non-decreasing order.
 * Link: https://leetcode.com/problems/squares-of-a-sorted-array/
 * @param nums
 */
var squaresOfASortedArray = function (nums) {
    var sortedSquareArray = [];
    nums.forEach(function (value, index) {
        nums[index] *= value;
    });
    sortedSquareArray = nums.sort(function (a, b) {
        return a - b;
    });
    return sortedSquareArray;
};
exports.squaresOfASortedArray = squaresOfASortedArray;
