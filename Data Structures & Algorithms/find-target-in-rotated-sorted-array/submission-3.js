class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (nums.length === 0) {
            return -1
        }
        // BRUTE FORCE: 0(n)
        // // loop through the array
        // for (let i = 0; i < nums.length; i++){
        //     if (nums[i] === target) {
        //         return i
        //     }
        // }
        // return -1

// SOLUTION 2: 0(nlog n)
  // let sortedArr = [...nums].sort((a, b) => a - b)
  // let left = 0
  // let right = sortedArr.length - 1
  // while (left <= right) {
  //   let mid = Math.floor((left + right) / 2)
  //   if (sortedArr[mid] === target) {
  //     let midIndex = nums.indexOf(sortedArr[mid])
  //     return midIndex;
  //   } else if (sortedArr[mid] > target) {
  //     right = mid -1
  //   } else {
  //     left = mid + 1
  //   }
  // }

// OPTIMIZED SOLUTION: Binary Search 0(log n)
// declare the pointers
  let left = 0
  let right = nums.length - 1
  while(left <= right){
    let mid = Math.floor((left + right) / 2)
    if(nums[mid] === target){
      return mid
    }

    if(nums[left] <= nums[mid]){
      if(nums[left] <= target && target < nums[mid]){
        right = mid - 1
      }else{
        left = mid + 1
      }
    }else{
      if(nums[mid] < target && target <= nums[right]){
        left = mid + 1
      }else{
        right = mid - 1
      }
    }
  }
  return -1
    }
}
