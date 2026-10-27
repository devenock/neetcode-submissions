class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const kCount ={}
        // let result = []
        for(let num of nums){
            kCount[num] = (kCount[num] || 0) + 1
        }
        const numValues = Object.entries(kCount).map(([num, freq]) =>[
            freq, 
            parseInt(num)
        ])
        numValues.sort((a,b) => b[0] - a[0])
        
        return numValues.slice(0,k).map((pair) =>pair[1]);
    }
}
