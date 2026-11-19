class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let items = new Map()
        for(let i=0; i<nums.length;i++){
            let complement = target - nums[i]
            if(items.has(complement)){
                return [items.get(complement), i]
            }
            items.set(nums[i], i)
        }
        return []
    }
}
