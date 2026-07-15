class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // check array length
        // if(nums.length == 0){
        //     return 0
        // }

        // let outputArr = []

        // for(let i =0; i<nums.length;i++){
        //        let product = 1
        //     for(let j = 0; j<nums.length;j++){
        //         if(i !== j){
        //             product *= nums[j]
        //         }
        //     }
        //     outputArr.push(product);
        // }

        
        // return outputArr;

        let n = nums.length
  let res = new Array(n).fill(1)

  for (let i = 1; i < n; i++){
    res[i] = res[i -1] * nums[i - 1]
  }

  let postfix = 1
  for (let i = n - 1; i >= 0; i--){
    res[i] *= postfix
    postfix *= nums[i]
  }

  return res
    }
}
