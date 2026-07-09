class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // for(let i = 0; i < nums.length; i++){
        //     for(let j = i + 1; j < nums.length; j++){
        //         if(nums[i] + nums[j] === target){
        //             return [i, j]
        //         }
        //     }
        // }
        // nums.sort((a, b) => a - b)
        // let left = 0;
        // let right = nums.length -1;
        // while(left < right){
        //     if(nums[left] + nums[right] === target){
        //         return [left, right]
        //     }else if(nums[left] + nums[right] > target){
        //         right--;
        //     }else{
        //         left++;
        //     }
        // }
        // return []

        // create a copy of the array
        const newNums = [...nums];

        // sort the new array
        newNums.sort((a, b) => a - b)

        // delare the pointers
        let start = 0
        let end = newNums.length - 1
        // set condition
        while(start < end){
            let sum = newNums[start] + newNums[end]
            if(sum === target){
                // get the index of the items from the old array
                let startIndex = nums.indexOf(newNums[start])
                let endIndex = nums.lastIndexOf(newNums[end])
                return[startIndex, endIndex]
            }else if(sum > target){
                end--
            }else{
                start++
            }
        }
    return [-1, -1]
    }
}
