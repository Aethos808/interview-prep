/**
 * TODO: Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that
 *   every character in t (including duplicates) is included in the window. If there is no such substring, return the
 *   empty string "".
 * Link: https://leetcode.com/problems/minimum-window-substring/
 */

export const minimumWindowSubstring = (s: string, t: string): string => {
  let shortestSubString = '';
  let charFrequencyMap = {};
  let currentWindowSubstring = '';
  let startWindow = 0
  let matchPatternTimes = 0;

  for(let char of t) {
    charFrequencyMap[char] = charFrequencyMap[char] + 1 || 1;
  }

  for(let endWindow = 0; endWindow < s.length; endWindow++) {
    let currentChar = s[endWindow];
    currentWindowSubstring += currentChar;

    if(currentChar in charFrequencyMap) {
      charFrequencyMap[currentChar]--;

      if(charFrequencyMap[currentChar] === 0) {
        matchPatternTimes++;
      }
    }

    while(matchPatternTimes === t.length) {
      if(shortestSubString === '' || shortestSubString.length > currentWindowSubstring.length) {
        shortestSubString = currentWindowSubstring;
      }

      let startWindowChar = s[startWindow];
      startWindow++;
      currentWindowSubstring = currentWindowSubstring.substring(1);

      if(startWindowChar in charFrequencyMap) {
        charFrequencyMap[startWindowChar]++;
        if(charFrequencyMap[startWindowChar] > 0) {
          matchPatternTimes--;
        }
      }
    }
  }
  return shortestSubString;
}