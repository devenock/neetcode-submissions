class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // let n = nums.length;
        // let result = new Array(n)
        // for(let i =0; i<n;i++){
        //     let product = 1
        //     for(let j=0; j<n;j++){
        //         if(i !== j){
        //             product *= nums[j]
        //         }
        //     }
        //     result[i] = product
        // }
        // return result;
        let n = nums.length;
        let result = new Array(n).fill(1)
        let prefix = 1
        for(let i=0;i<n;i++){
            result[i] = prefix
            prefix *= nums[i]
        }
        let suffix = 1
        for(let j=n-1; j>=0;j--){
            result[j] *= suffix
            suffix *= nums[j]
        }
        return result;
    }
}
