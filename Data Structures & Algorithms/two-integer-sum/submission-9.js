class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // BRUTE FORCE SOLUTION
        // for(let i =0; i<nums.length; i++){
        //     for(let j = i + 1; j<nums.length; j++){
        //         let sum = nums[i] + nums[j]
        //         if(sum == target){
        //             return [i, j]
        //         }
        //     }
        // }

        // OPTIMIZED SOLUTION: MULTIPLE POINTERS
        // first copy the nums array to another array
        const newNums = [...nums]
        // sort the new array
        newNums.sort((a, b) =>  a-b)

        // declare the pointers
        let start = 0
        let end = nums.length - 1
        // condition
        while(start < end){
            let sum = newNums[start] + newNums[end]
            if(sum == target){
                // define the indices
                let startIndex = nums.indexOf(newNums[start])
                let endIndex = nums.lastIndexOf(newNums[end])
                return [startIndex, endIndex]
            }else if(sum > target){
                end--
            }else{
                start++
            }
        }
        return [-1, -1]
    }
}
