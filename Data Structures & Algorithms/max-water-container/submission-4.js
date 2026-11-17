class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = heights.length - 1
        let result = 0
        while(l < r){
            let width = r - l
            let length = Math.min(heights[l], heights[r])
            let area = width * length
            result = Math.max(result, area)
            if(heights[l] <= heights[r]){
                l++
            }else{
                r--
            }
        }
        return result;
    }
}
