
// the main idea is to record the frequency of each character in the first string and decrement       the frequency of occurance of each character in the second string. Both strings share the same frequency map so that when the decrementing process starts if any character's frequency goes below zero or the character is not found in the frequency map we can say that the two strings are not anagrams of each other.

const checkAnagram = (str1, str2) => {
  // the first condition checks if the lengths of both the strings are equal. If not equal we can easily conclude that they are not anagrams of eachother.
  if(str1.length !== str2.length){
    return false;
  }
  // the frequency map.
  const charFrequency = {};

  // loop to count the occurance of each character in the first string
  for(let char of str1) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }
  // loop to decrement the frequency of each character in the second string .
  for(let char of str2) {
    if(!charFrequency[char]) {
      return false;
    }
    charFrequency[char] -= 1;
  }
  return true;
}
