class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // check if array has got items
        if(nums.length === 0){
            return [-1, -1]
        }

        // sort the array
        let newNums = [...nums]

        newNums.sort((a, b) => a- b)

        let left = 0;
        let right = nums.length - 1

        while(left < right){
            let sum = newNums[left] + newNums[right]
            if(sum == target){
                let leftIndex = nums.indexOf(newNums[left])
                let rightIndex = nums.lastIndexOf(newNums[right])
                return [leftIndex, rightIndex]
            }else if(sum > target){
                right--
            }else{
               left++ 
            }
        }
    }
}
