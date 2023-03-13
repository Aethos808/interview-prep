"use strict";
/**
 * TODO: given an array of positive numbers and a positive number 'k', find the maximum sum of any contiguous subarray os size 'k'
 * link: https://leetcode.com/problems/largest-subarray-length-k/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.largestSubarrayLengthK = void 0;
var largestSubarrayLengthK = function (nums, k) {
    var maxSum = 0;
    var startWindow = 0;
    var windowSum = 0;
    for (var endWindow = 0; endWindow <= nums.length; endWindow++) {
        windowSum += nums[endWindow];
        if (endWindow >= k - 1) {
            if (maxSum < windowSum) {
                maxSum = windowSum;
            }
            windowSum -= nums[startWindow];
            startWindow++;
        }
    }
    return maxSum;
};
exports.largestSubarrayLengthK = largestSubarrayLengthK;
