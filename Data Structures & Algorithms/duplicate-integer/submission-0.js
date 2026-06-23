class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // nums has to have values
        if(nums.length === 0){
            return false;
        }

        // initialize the frequency counter object
        let frequencyCounter = {};

        // loop through nums and then count the frequency in the object
        for(let val of nums){
            frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
        }

    // check the value of the keys if there is any that is more than 1
    for(let key in frequencyCounter){
        if(frequencyCounter[key] > 1){
            return true
        }
    }
    return false;
    }
}
