/**
 * TODO: Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.
 * link - https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
 * @param s - some string
 * @param k - max number of distinct characters in a subarray
 */
export const longestSubstringWithAtMostKDistinctCharacters = (s:string, k:number): number => {
  let longestSubstring = '';

  if(k === 0) {
    return longestSubstring.length;
  }

  let letterOccurrenceInWindowMap = {};
  let numberOfDistinctChars = 0;
  let windowSubstring = '';

  for(let endWindow = 0; endWindow < s.length; endWindow++) {
    let currentChar = s[endWindow]
    windowSubstring += currentChar;

    if(!letterOccurrenceInWindowMap[currentChar]) {
      letterOccurrenceInWindowMap[currentChar] = 0;
      numberOfDistinctChars++;
    }
    letterOccurrenceInWindowMap[currentChar]++

    if(numberOfDistinctChars > k) {
      const letterToRemove = windowSubstring.substring(0,1)

      letterOccurrenceInWindowMap[letterToRemove]--;
      windowSubstring = windowSubstring.substring(1);

      if(letterOccurrenceInWindowMap[letterToRemove] === 0) {
        numberOfDistinctChars--;
      }
    }

    if(longestSubstring.length < windowSubstring.length) {
      longestSubstring = windowSubstring
    }
  }

  return longestSubstring.length;
}