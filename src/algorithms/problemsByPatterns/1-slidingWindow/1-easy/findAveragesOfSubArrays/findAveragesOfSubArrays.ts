/**
 * TODO: given an array, find the average of all contiguous subarrays of size 'K' in it.
 * https://leetcode.com/problems/maximum-average-subarray-i/
 */

export const findAveragesOfSubArrays = (nums: number[], k: number):number => {
  let maxAverage:number = Number.NEGATIVE_INFINITY;
  let startWindow = 0;
  let runningSum = 0;

  if(nums.length === 1 && k === 1) return nums[0];

  for(let endWindow = 0; endWindow < nums.length; endWindow++) {
    runningSum += nums[endWindow];

    if(endWindow >= k - 1) {
      maxAverage = Math.max(maxAverage, runningSum/k);

      let startWindowValue = nums[startWindow];
      startWindow++;

      runningSum -= startWindowValue;
    }
  }
  return maxAverage;
}















//Brute force *came up with this first*
// export const findAveragesOfSubArrays = (nums: number[], k: number):number => {
//   let maxAverage:number = Number.NEGATIVE_INFINITY;
//
//   for(let i = 0; i < nums.length - (k-1); i++) {
//     let runningSum = 0;
//
//     for(let j = i; j < i + k; j++) {
//       runningSum += nums[j];
//     }
//
//     let currentAverage = runningSum/k;
//
//     if(maxAverage < currentAverage) {
//       maxAverage = currentAverage;
//     }
//   }
//
//   return maxAverage;
// }