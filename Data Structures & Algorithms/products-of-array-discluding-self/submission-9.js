class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // NESTED LOOP SOLUTION
        // let n = nums.length;
        // let result = new Array(n).fill(1)
        // // first loop
        // for(let i =0;i<n;i++){
        //     let product = 1
        //     for(let j =0; i<n;j++){
        //         if(nums[i] != nums[j]){
        //             product *= nums[j]
        //         }
        //     }
        //     result.push(product)
        // }
        // return result;

// PREFIX-SUFFIX SUM SOLUTION
let n = nums.length
let result = new Array(n).fill(1)
let prefix = 1
for(let i=0; i<n;i++){
    result[i] = prefix
    prefix *= nums[i]
}
let suffix = 1
for(let i = n -1; i >= 0; i--){
    result[i] *= suffix
    suffix *= nums[i]
}
return result;
    }
}
