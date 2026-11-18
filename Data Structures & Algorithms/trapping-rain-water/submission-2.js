class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0
        let r = height.length - 1
        let result = 0
        let leftMax = height[l]
        let rightMax = height[r]
        while(l < r){
            if(height[l] <= height[r]){
                l++
                leftMax = Math.max(leftMax, height[l])
                result += leftMax - height[l]
            }else{
                r--
                rightMax = Math.max(rightMax, height[r])
                result += rightMax - height[r]
            }
        }
        return result;
    }
}
