class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // use hash map
        const numHash = new Map()
        // loop through the array
        for(let i =0; i<nums.length;i++){
            let complement = target - nums[i]
            // check if target exist inside the hash map
            if(numHash.has(complement)){
                return [numHash.get(complement), i]
            }
            numHash.set(nums[i], i)
        }
        return [-1, -1]
    }
}
