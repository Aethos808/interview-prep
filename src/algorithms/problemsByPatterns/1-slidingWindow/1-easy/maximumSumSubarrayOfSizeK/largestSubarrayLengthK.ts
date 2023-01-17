/**
 * TODO: given an array of positive numbers and a positive number 'k', find the maximum sum of any contiguous subarray os size 'k'
 * link: https://leetcode.com/problems/largest-subarray-length-k/
 */

export const largestSubarrayLengthK = (nums: number[], k: number): number => {
  let maxSum = 0;
  let startWindow = 0;
  let windowSum = 0;

  for(let endWindow = 0; endWindow <= nums.length; endWindow++) {
    windowSum += nums[endWindow];

    if(endWindow >= k - 1) {
      if(maxSum < windowSum) {
        maxSum = windowSum;
      }

      windowSum -= nums[startWindow];
      startWindow++;
    }
  }

  return maxSum;
}