class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // let newMap = new Map()

        // // loop through nums array to populate the hash map
        // for(let i =0; i<nums.length;i++){
        //     let complement = target - nums[i]

        //     if(newMap.has(complement)){
        //         return [newMap.get(complement), i]
        //     }

        //     newMap.set(nums[i], i)
        // }

        // return [-1, -1]

        // create a new array
        if(nums.length === 0){
            return [-1, -1]
        }
        let newNums = [...nums]
        newNums.sort((a, b) => a- b)
        let left = 0
        let right = nums.length - 1

        while(left < right){
            let sum = newNums[left] + newNums[right]
            if(sum === target){
                let indexLeft = nums.indexOf(newNums[left])
                let indexRight = nums.lastIndexOf(newNums[right])
                return [indexLeft, indexRight]
            }else if(sum > target){
                right--
            }else{
                left++
            }
        }

        return [-1, -1]
    }
}
