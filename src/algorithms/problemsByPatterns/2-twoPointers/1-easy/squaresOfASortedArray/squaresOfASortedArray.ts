/**
 * TODO:Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted
 *   in non-decreasing order.
 * Link: https://leetcode.com/problems/squares-of-a-sorted-array/
 * @param nums
 */
export const squaresOfASortedArray = (nums: number[]): number[] => {
  let sortedSquareArray = [];

  nums.forEach((value, index) => {
    nums[index] *= value;
  })

  sortedSquareArray = nums.sort((a, b) => {
    return a-b;
  })

  return sortedSquareArray;
}