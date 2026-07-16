class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if(nums.length === 0){
            return -1
        }
        for(let i =0; i<nums.length;i++){
            if(nums[i] === target){
                return i
            }
        }
        return -1
         
        //  let left =0
        //  let right = nums.length -1
        //  let middle = Math.floor((left + right) / 2)

        //  while(left <= right && nums[middle] !== target){
        //     if(target < nums[middle]){
        //         right = middle - 1
        //     }else{
        //         left = middle + 1
        //     }

        //     middle = (left + right) / 2

        //     if(nums[middle] === target){
        //         return middle
        //     }else{
        //         return -1
        //     }

        //  }
    }
}
