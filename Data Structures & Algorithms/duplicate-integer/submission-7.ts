class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        if(nums.length <= 0){
            return false;
        }
        const numsFrequency = {}

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
