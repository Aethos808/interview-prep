import {setKeyMap} from './setKeyMap';

export const encode = (data: string):string => {
  let encodedString = "";
  const keyMap = setKeyMap();

  for(let char of data) {
    encodedString += keyMap.get(char);
  }

  return encodedString;
}

/**
 * TODO:
 * Add spaces in the encode punctuation variable
 * No need to create a generated file so we ca remove that
 * Using Jest create a test for the encode function
 * Once encode works and is tested move on to create the file to find the two numbes that when divided give the
 * decimal of that number
 *  Need to consider precision.... how do you get 100's or even 1000's of digits of precision??
 *  whats the easiest mathematical way to even determine what two numbers are needed
 *
 *  once we have that function we need to write some tests to make sure that the function is working properly
 *
 *  No that we can find the two numbers that give the decimal lets make a decoder. Given 2 numbers return the text.
 *
 *  from there we should be done. now test on significantly larger data sets so yeeeeee
 */