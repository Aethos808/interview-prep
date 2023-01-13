/**
 * TODO: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * @param array
 */
export const containsDuplicate = (array: number[]): boolean => {
  let doesContainDuplicate = false;
  let valuesSeen = {};
  //loop through array
  //as you go, put each # in an object
  //check the object to see if number already exists there
  //if it does set doesContainDuplicate to true and return

  for(let number of array) {
    if(valuesSeen[number]) {
      doesContainDuplicate = true;
      return doesContainDuplicate;
    }

    valuesSeen[number] = true;
  }

  return doesContainDuplicate;
}