"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum = void 0;
/**
 * TODO:Given a sorted array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *   You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Link:https://leetcode.com/problems/two-sum/ <-- This problem is not sorted array, so this solution may not work unless you sort first
 * @param sortedArray
 * @param target
 */
var twoSum = function (sortedArray, target) {
    var leftIndex = 0;
    var rightIndex = sortedArray.length - 1;
    var noSolution = true;
    while (leftIndex < rightIndex) {
        var leftDifference = target - sortedArray[leftIndex];
        var rightDifference = target - sortedArray[rightIndex];
        if (leftDifference === sortedArray[rightIndex] || rightDifference === sortedArray[leftIndex]) {
            return [leftIndex, rightIndex];
        }
        else if (leftDifference > sortedArray[rightIndex]) {
            leftIndex++;
        }
        else if (rightDifference < sortedArray[leftIndex]) {
            rightIndex--;
        }
    }
    return [];
};
exports.twoSum = twoSum;
/*
  let neededIndices = [];

  //since the values in the case will be sorted we don't need to cache what values have been seen we can use 2 pointers

  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;

  while(sortedArray[leftPointer] + sortedArray[rightPointer] !== target) {
    if(sortedArray[leftPointer] + sortedArray[rightPointer] > target) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }

  neededIndices.push(leftPointer);
  neededIndices.push(rightPointer);

  return neededIndices;
 */ 
