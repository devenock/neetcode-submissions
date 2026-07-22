class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if(nums.length === 0){
            return -1;
        }
        // declare the left and right pointers
        let left = 0
        let right = nums.length - 1
        while(left <= right){
            // get the mid point
            let mid = Math.floor((left + right) / 2)
            if(nums[mid] === target){
                return mid
            }else if(nums[mid] > target){
                right = mid - 1
            }else{
                left = mid + 1
            }
        }
        return -1;
    }
}
