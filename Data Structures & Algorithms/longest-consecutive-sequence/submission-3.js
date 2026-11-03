class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count = 0
  let numSet = new Set(nums)
  for (let val of numSet) {
    if (!numSet.has(val - 1)) {
      let length = 1
      while (numSet.has(val + length)) {
        length++
      }
      count = Math.max(count, length)
    }
  }
  return count;
    }
}
