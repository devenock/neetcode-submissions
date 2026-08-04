class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // SOLUTION 1 = BRUTE FORCE: 0(n^2)
        // loop through the array twice first one starting
        // at index 0 while the second one from index 1 then compare the values in those indices
        // for(let i= 0; i<nums.length;i++){
        //     for(let j = i + 1; j<nums.length; j++){
        //         if(nums[i] === nums[j]){
        //             return true
        //         }
        //     }
        // }
        // return false;
        

        // SOLUTION 2 = Frequency Counter: 0(n)

        // declare an empty hash map
        // let numsFreq = {}

        // // loop through the array
        // for(let n of nums){
        //     // update the hash map with the frequencies
        //     numsFreq[n] = (numsFreq[n] || 0) + 1
        // }

        // // check through the hash map keys to compare
        // for(let key in numsFreq){
        //     if(numsFreq[key] > 1){
        //         return true
        //     }
        // }

        // return false;

        // SOLUTION 3: Sorting: 0(n)
        // first sort the array
        nums.sort((a, b) => a- b)
        // the same elements will move close to each other
        // loop through the sorted array
        for(let i =0; i<nums.length;i++){
            if(nums[i] === nums[i - 1]){
                return true
            }
        }
        return false;
    }
}
