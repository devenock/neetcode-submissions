class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // create a new array that merges the two arrays
        let newArr = nums1.concat(nums2).sort((a,b) => a - b)
        // let left = 0
        // let right = newArr.length - 1
        // let mid = Math.floor((left + right) / 2)
        let n = newArr.length
            if(n % 2 === 0){
                return (newArr[n / 2-1] + newArr[n / 2]) / 2.0
            }else{
                return newArr[Math.floor(n / 2)]
            }
    }
}
