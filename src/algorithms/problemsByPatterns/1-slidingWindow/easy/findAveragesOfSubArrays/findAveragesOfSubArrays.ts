/**
 * TODO: given an array, find the average of all contiguous subarrays of size 'K' in it.
 * https://leetcode.com/problems/maximum-average-subarray-i/
 */

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

export const findAveragesOfSubArrays = (nums: number[], k: number):number => {
  let maxAverage:number = Number.NEGATIVE_INFINITY;
  //current value
  //start window
  //loop

  return maxAverage;
}