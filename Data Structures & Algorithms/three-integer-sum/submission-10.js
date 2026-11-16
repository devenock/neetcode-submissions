class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // sort the array in ascending order
        nums.sort((a, b) => a - b)
        // initialize an empty res array to be returned at the end
        let res = []
        // iterate through the sorted array for the first time to capture all the items
        for(let i =0; i< nums.length;i++){
            // check for duplicates
            if(nums[i] > 0)break
            if(i > 0 && nums[i] == nums[i - 1]) continue
            // now use two pointers to search for the item
            let l = i + 1
            let r = nums.length - 1
            while(l < r){
                let sum = nums[i] + nums[l] + nums[r]
                if(sum > 0){
                    r--
                }else if(sum < 0){
                    l++
                }else{
                    res.push([nums[i], nums[l], nums[r]])
                    l++
                    r--
                    while(l < r && nums[l] == nums[l - 1]){
                        l++
                    }
                }
            }
        }
        return res;
    }
}
