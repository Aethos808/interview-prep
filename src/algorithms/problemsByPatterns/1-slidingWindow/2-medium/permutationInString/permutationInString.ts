/**
 * TODO: Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 *   In other words, return true if one of s1's permutations is the substring of s2.
 * Link: https://leetcode.com/problems/permutation-in-string/
 */

export const permutationInString = (s1: string, s2: string):boolean => {
  let containsPermutation = false;
  let startWindow = 0;
  let s1CharCountMap = {};
  let isMatch = 0;

  for(let char of s1) {
    if(!s1CharCountMap[char]) {
      s1CharCountMap[char] = 0;
    }

    s1CharCountMap[char]++;
  }

  for(let endWindow = 0; endWindow < s2.length; endWindow++) {
    let currentChar = s2[endWindow];

    if(currentChar in s1CharCountMap) {
      s1CharCountMap[currentChar]--;

      if(s1CharCountMap[currentChar] === 0) {
        isMatch++;
      }
    }

    if(isMatch === Object.keys(s1CharCountMap).length){
      containsPermutation = true;
      return containsPermutation;
    }

    if(endWindow >= s1.length - 1) {
      let startChar = s2[startWindow];

      if(startChar in s1CharCountMap) {
        if(s1CharCountMap[startChar] === 0) {
          isMatch--;
        }
        s1CharCountMap[startChar]++;
      }

      startWindow++;
    }
  }
  return containsPermutation;
}