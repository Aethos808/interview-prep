export const setKeyMap = ():Map<string, string> => {
  const letterPunctuationMap: Map<string, string> = new Map();
  let value = '000';
  const punctuations = '~!@#$%^&*()_-+={}[]\\|;:\'",.<>?/';
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < letters.length; i++) {
    letterPunctuationMap.set(letters[i], value);
    value = (parseInt(value) + 1).toString().padStart(3, '0');
  }

  for (let i = 0; i < punctuations.length; i++) {
    letterPunctuationMap.set(punctuations[i], value);
    value = (parseInt(value) + 1).toString().padStart(3, '0');
  }

  return letterPunctuationMap;
}