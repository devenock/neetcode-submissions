class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // first change the string to lowercase, then remove the spaces and the special x-ters from the string(trim it)
  let newStr = s.toLowerCase().replace(/[^a-z0-9]/g,"")
  // form an array from the string
  let sArr = newStr.split("")

  // check if length is 0 and return true because an empty string is a valid palindrome
  if (sArr.length === 0) {
    return true;
  }
  // define the pointers
  let left = 0
  let right = sArr.length - 1
  // set the loop
  while (left < right) {
    if (sArr[left] !== sArr[right]) {
      return false
    } else {
      left++
      right--
    }
  }

  return true;
    }
}
