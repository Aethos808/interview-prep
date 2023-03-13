"use strict";
/**
 * You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by
 * an integer array fruits where fruits[i] is the type of fruit the ith tree produces.
 *
 * You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:
 *
 * You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of
 * fruit each basket can hold.
 *
 * Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while
 * moving to the right. The picked fruits must fit in one of your baskets.
 *
 * Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
 * Given the integer array fruits, return the maximum number of fruits you can pick.
 * link - https://leetcode.com/problems/fruit-into-baskets/
 * @param fruits
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fruitIntoBaskets = void 0;
var fruitIntoBaskets = function (fruits) {
    var maxNumberOfFruits = 0;
    return maxNumberOfFruits;
};
exports.fruitIntoBaskets = fruitIntoBaskets;
//Solution is below
// export const fruitIntoBaskets = (fruits: number[]): number => {
//   let maxNumberOfFruits = 0;
//   let maxNumberOfDistinctFruit = 2;
//   let windowFruitFrequency = {};
//   let startingTreeIndex = 0;
//
//   for(let latestTreeIndex = 0; latestTreeIndex < fruits.length; latestTreeIndex++) {
//     const currentFruitPicked = fruits[latestTreeIndex];
//
//     if(!windowFruitFrequency[currentFruitPicked]){
//       windowFruitFrequency[currentFruitPicked] = 0;
//     }
//
//     windowFruitFrequency[currentFruitPicked]++;
//
//     while(Object.keys(windowFruitFrequency).length > maxNumberOfDistinctFruit) {
//       const currentTree = fruits[startingTreeIndex]
//       windowFruitFrequency[currentTree]--;
//
//       if(windowFruitFrequency[currentTree] === 0) {
//         delete windowFruitFrequency[currentTree];
//       }
//
//       startingTreeIndex++;
//     }
//
//     maxNumberOfFruits = Math.max(maxNumberOfFruits, latestTreeIndex - startingTreeIndex + 1);
//   }
//   return maxNumberOfFruits;
// }
