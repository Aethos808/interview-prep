"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeElement = void 0;
/**
 * TODO:Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order
 *   of the elements may be changed.
 *   Since it is impossible to change the length of the array in some languages, you must instead have the result be placed
 *   in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the
 *   first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
 *   Return k after placing the final result in the first k slots of nums.
 *   Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1)
 *   extra memory.
 * Link: https://leetcode.com/problems/remove-element/
 * @param nums
 * @param val
 */
var removeElement = function (nums, val) {
    // let leftIndex = 0;
    // let rightIndex = nums.length-1;
    //
    // if (nums.length === 1){
    //   return nums[0] === val ? 0 : 1;
    // }
    // while(leftIndex < rightIndex){
    //   let leftVal = nums[leftIndex];
    //   let rightVal = nums[rightIndex];
    //
    //   if (leftVal === val){
    //     while (rightVal === val){
    //       rightIndex--;
    //       rightVal = nums[rightIndex];
    //     }
    //
    //     nums[leftIndex] = rightVal;
    //     nums[rightIndex] = leftVal;
    //   }
    //
    //   leftIndex++;
    // }
    // return leftIndex;
    var x = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[x] = nums[i];
            x++;
        }
    }
    return x;
    /**
     *\
     *
     * l loops thru the array, pauses when you reach a bad number
     * at this point you look at r
     *  decrement what r is pointing at, until it points to a good number,
     *  then swap the two
     *  after swapping, continue looping thru the array with l
     *      l     r
     *     [2,2,3,3]
     *
     *
     *
     *
     *       0,1,2,2,3,0,4,2
     *                l r
     *       [0,1,4,0,3,2,2,2];
     *       val = 2
     *       expected = [0,1,3,0,4....]
      */
    /**
     *
     * [0,1,2,0,2,2,4,2]
     *
     * [3,2,2,3]
     *
     */
};
exports.removeElement = removeElement;
