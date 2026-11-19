class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // for(let i =0;i<nums.length;i++){
        //     if(nums[i] === target){
        //         return i
        //     }
        // }
        // return -1
        let l =0
        let r =nums.length -1
        while(l <= r){
            let mid = Math.floor((l + r) / 2)
            if(nums[mid] < target){
                l = mid + 1
            }else if(nums[mid] > target){
                r = mid -1
            }else{
                return mid 
            }
        }
        return -1
    }
}
