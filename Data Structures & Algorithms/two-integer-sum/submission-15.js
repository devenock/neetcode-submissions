class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // declare an empty hash set
        let newMap = new Map()
        // loop through the array to populate the hash set
        for(let i =0; i<nums.length;i++){
            let complement = target - nums[i]

            if(newMap.has(complement)){
                return [newMap.get(complement), i]
            }

            newMap.set(nums[i], i)
        }

        return [-1, -1]
    }
}
