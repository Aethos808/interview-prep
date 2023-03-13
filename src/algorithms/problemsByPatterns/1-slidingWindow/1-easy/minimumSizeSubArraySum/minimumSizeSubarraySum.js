"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minimumSizeSubarray = void 0;
/**
 * TODO: Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray
 *  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 * link: https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param nums
 * @param s
 */
var minimumSizeSubarray = function (nums, s) {
    var minSum = Number.POSITIVE_INFINITY;
    var startWindow = 0;
    var windowSum = 0;
    for (var endWindow = 0; endWindow < nums.length; endWindow++) {
        windowSum += nums[endWindow];
        if (endWindow >= s - 1) {
            minSum = Math.min(minSum, windowSum);
            windowSum -= nums[startWindow];
            startWindow++;
        }
    }
    return minSum;
};
exports.minimumSizeSubarray = minimumSizeSubarray;
