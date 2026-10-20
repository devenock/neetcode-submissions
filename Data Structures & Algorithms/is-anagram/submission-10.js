class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         // compare the length and if not the same, return false
  if (s.length !== t.length) {
    return false;
  }

  // define their frequencies
  let sFrequency = {}
  let tFrequency = {}

  // loop through each string to update their frequencies
  for (let char of s) {
    sFrequency[char] = (sFrequency[char] || 0) + 1
  }

  for (let char of t) {
    tFrequency[char] = (tFrequency[char] || 0) + 1
  }

  // iterate over the frequencies to compare the keys
  for (let key in sFrequency) {
    if (!(key in tFrequency)) {
      return false;
    }

    if(sFrequency[key] > tFrequency[key]){
        return false;
    }
  }

  return true;
    }
}
