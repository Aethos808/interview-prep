import {parse} from "ts-jest";

/**
 * TODO: Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
 *       An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * Link: https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
 */
export const findAllAnagramsInAString = (s: string, p: string): number[] => {
  let startingIndicesOfAllAnagrams = [];
  let startWindow = 0;
  let charFrequencyMap = {};
  let matchPattern = 0;

  for(let char of p) {
    if(!(char in charFrequencyMap)) {
      charFrequencyMap[char] = 0;
    }

    charFrequencyMap[char]++;
  }

  for(let endWindow = 0; endWindow < s.length ; endWindow++) {
    let currentChar = s[endWindow];

    if(currentChar in charFrequencyMap) {
      charFrequencyMap[currentChar]--;

      if(charFrequencyMap[currentChar] === 0) {
        matchPattern++;
      }
    }

    if(matchPattern === Object.keys(charFrequencyMap).length) {
      startingIndicesOfAllAnagrams.push(startWindow);
    }

    if(endWindow >= p.length - 1) {
      let startWindowChar = s[startWindow];
      startWindow++;

      if(startWindowChar in charFrequencyMap) {
        if(charFrequencyMap[startWindowChar] === 0) {
          matchPattern--;
        }
        charFrequencyMap[startWindowChar]++;
      }
    }
  }

  return startingIndicesOfAllAnagrams;
}



/**
 *       const s = 'cbaebabacd';
 *       const p = 'abc';
 *       const pObj = 'a'
 *       const expectedAnswer = [0, 6];
 *
 *     s.length = n
 *     p.length = m
 *     O(n*m) solution
 *       loop through s by char
 *       check every char to see if it is contained in p
 *        if char in p
 *          check the next p.length chars in s, starting from the one you are at in the loop
 *          maybe make a subarray? pop off a character when you find it, so you dont use duplicates as false positives
 *        if char not in p
 *          continue
 */

// let pObj={};
//   for(let character of p) {
//     pObj[character] = pObj[character]++ || 1;
//   }
//
// for(let i = 0; i < s.length; i++){
//   for(let index in p.split('')){
//     if (pObj[index] === s[i]){
//       pObj.splice(parseInt(index));
//       if (pObj.length === 0){
//         startingIndicesOfAllAnagrams.push(i);
//         pObj = p.split('');
//       }
//     }
//     else{
//       pObj = p.split('');
//       break;
//     }
//   }
// }