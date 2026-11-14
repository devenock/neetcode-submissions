class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // sort the nums array
        nums.sort((a, b) => a - b)
        // create  the results array to be returned at the end
        let result = []
        // loop through the array once to get the first item
        for(let i = 0; i<nums.length; i++){
            // check if there is a duplicate
            if(nums[i] > 0) break
            if(i > 0 && nums[i] === nums[i - 1]) continue
            let left = i + 1
            let right = nums.length - 1
            while(left < right){
                let sum = nums[i] + nums[left] + nums[right]
                if(sum > 0){
                    right--
                }else if(sum < 0){
                    left++
                }else{
                    result.push([nums[i], nums[left], nums[right]])
                    left++
                    right--
                    while(left < right && nums[left] === nums[left - 1]){
                        left++
                    }
                }
            }
        }
        return result;
    }
}
