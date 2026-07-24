class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // let result = nums[0];
        // for(let i = 1; i < nums.length;i++){
        //     result =  Math.min(result, nums[i])
        // }

        // return result;
        // return Math.min(...nums)

        // BINARY SEARCH
        let left = 0
        let right = nums.length - 1
        while(left < right){
           let mid = Math.floor((left + right) / 2)
           if(nums[mid] > nums[right]){
            left = mid + 1
           }else{
            right = mid
           }
        }
        return nums[left];
    }
}
