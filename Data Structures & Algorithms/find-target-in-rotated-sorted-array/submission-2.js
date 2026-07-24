class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // if (nums.length === 0) {
        //     return -1
        // }
        // // loop through the array
        // for (let i = 0; i < nums.length; i++){
        //     if (nums[i] === target) {
        //         return i
        //     }
        // }
        // return -1
        if (nums.length === 0) {
    return -1
  }

  let sortedArr = [...nums].sort((a, b) => a - b)
  let left = 0
  let right = sortedArr.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (sortedArr[mid] === target) {
      let midIndex = nums.indexOf(sortedArr[mid])
      return midIndex;
    } else if (sortedArr[mid] > target) {
      right = mid -1
    } else {
      left = mid + 1
    }
  }
  return -1
    }
}
