class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // BRUTE FORCE: 0((n + m)log(n + m))
        // create a new array that merges the two arrays
        // let newArr = nums1.concat(nums2).sort((a,b) => a - b)
        // // get new array length
        // let n = newArr.length
        //     if(n % 2 === 0){
        //         return (newArr[n / 2-1] + newArr[n / 2]) / 2.0
        //     }else{
        //         return newArr[Math.floor(n / 2)]
        //     }

        // OPTIMIZED BINARY SEARCH SOLUTION
        
        // reassign the arrays to new arrays
        let A = nums1
        let B = nums2

        // get the total and the half
        let total = A.length + B.length
        let half = Math.floor((total + 1) / 2)

        // check if size of A is less than B
        if(B.length < A.length){
            [A, B] = [B, A]
        }

        // binary search A
        let left = 0
        let right = A.length;
        while(left <= right){
            let mid = Math.floor((left + right) / 2)
            let j = half - mid

            // define the borders
            let ALeft = mid > 0 ? A[mid -1] : Number.MIN_SAFE_INTEGER
            let ARight = mid < A.length ? A[mid] : Number.MAX_SAFE_INTEGER
            let BLeft = j > 0 ? B[j -1] : Number.MIN_SAFE_INTEGER
            let BRight = j < B.length ? B[j] : Number.MAX_SAFE_INTEGER

            if(ALeft <= BRight && BLeft <= ARight){
                if(total % 2 !== 0){
                    return Math.max(ALeft, BLeft)
                }
                return (Math.max(ALeft, BLeft) + Math.min(ARight , BRight)) / 2
            }else if(ALeft > BRight){
                right = mid -1
            }else{
                left = mid + 1
            }
        }

        return -1
    }
}
