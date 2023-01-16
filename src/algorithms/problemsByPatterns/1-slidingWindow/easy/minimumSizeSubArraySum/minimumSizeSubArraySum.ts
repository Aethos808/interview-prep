export const minimumSizeSubArray = (nums: number[], s: number) => {
  let minSum = Number.POSITIVE_INFINITY;
  let startWindow = 0;
  let windowSum = 0;

  for(let endWindow = 0; endWindow < nums.length; endWindow++) {
    windowSum += nums[endWindow];

    if(endWindow >= s - 1) {
      minSum = Math.min(minSum, windowSum);

      windowSum -= nums[startWindow];
      startWindow++;
    }
  }
  return minSum
}