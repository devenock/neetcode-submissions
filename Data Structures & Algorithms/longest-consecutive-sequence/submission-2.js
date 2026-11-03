class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count = 0
        let numSet = new Set(nums)
        for(let num of numSet){
            if(!numSet.has(num - 1)){
                let length = 1
                while(numSet.has(num + length)){
                    length++
                }
                count = Math.max(count, length)
            }
        }
        return count;
    }
}
