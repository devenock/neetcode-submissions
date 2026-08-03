class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // BRUTE FORCE: 0(n^2)
        // loop through the array twice first one starting
        // at index 0 while the second one from index 1 then compare the values in those indices
        for(let i= 0; i<nums.length;i++){
            for(let j = i + 1; j<nums.length; j++){
                if(nums[i] === nums[j]){
                    return true
                }
            }
        }
        return false;
    }
}
