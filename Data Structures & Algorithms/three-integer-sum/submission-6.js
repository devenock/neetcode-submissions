class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // first sort the nums array in ascending order
        nums.sort((a, b) => a-b)
        let result = []
        // loop through the sorted nums array to capture the first item
        for(let i =0; i<nums.length;i++){
            // check for duplicates
            if(nums[i] >0) break
            if(i > 0 && nums[i] === nums[i - 1]) continue
            let l = i + 1
            let r = nums.length - 1
            while(l < r){
                let sum = nums[i] + nums[l] + nums[r]
                if(sum > 0){
                    r--
                }else if(sum < 0){
                    l++
                }else{
                    result.push([nums[i], nums[l], nums[r]])
                    l++
                    r--
                    while(l < r && nums[l] === nums[l - 1]){
                        l++
                    }
                }
            }
        }
        return result
        
    }
}
