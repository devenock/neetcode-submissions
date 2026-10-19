class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // for(let i = 0; i<nums.length; i++){
        //     for(let j = i + 1; j<nums.length; j++){
        //         if(nums[i] === nums[j]){
        //             return true
        //         }
        //     }
        // }
        // return false;
        if(nums.length === 0){
            return false;
        }

        let numsFrequency = {}

        for(let num of nums){
            numsFrequency[num] = (numsFrequency[num] || 0) + 1
        }

        for(let key in numsFrequency){
            if(numsFrequency[key] > 1){
                return true
            }
        }
        return false;
    }
}
