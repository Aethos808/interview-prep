/**
 * TODO:Given a string s, find the length of the longest substring without repeating characters.
 * link - https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param s
 */
export const longestSubstringWithoutRepeatingCharacters = (s: string):number => {
  const maxDistinctCharacters = 1;
  let longestStringLength = 0;
  let currentSubString = '';
  let valuesInWindow = {};
  let startWindow = 0;

  for(let endWindow = 0; endWindow < s.length; endWindow++) {
    let currentChar = s[endWindow];
    currentSubString += currentChar;

    if(!valuesInWindow[currentChar]){
      valuesInWindow[currentChar] = 0;
    }
    valuesInWindow[currentChar]++;

    while(valuesInWindow[currentChar] > maxDistinctCharacters) {
      const charToRemove = s[startWindow];
      valuesInWindow[charToRemove]--;
      currentSubString = currentSubString.substring(1);
      startWindow++;
    }

    longestStringLength = Math.max(currentSubString.length, longestStringLength);
  }

  return longestStringLength;
}