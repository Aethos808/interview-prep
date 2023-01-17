/**
 * TODO: Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray
 *  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 * link: https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param nums
 * @param s
 */
export const minimumSizeSubarray = (nums: number[], s: number) => {
  let minSum = Number.POSITIVE_INFINITY;
  let startWindow = 0;
  let windowSum = 0;

  for(let endWindow = 0; endWindow < nums.length; endWindow++) {
    windowSum += nums[endWindow];

    if(endWindow >= s - 1) {
      minSum = Math.min(minSum, windowSum);

      windowSum -= nums[startWindow];
      startWindow++;
    }
  }
  return minSum
}