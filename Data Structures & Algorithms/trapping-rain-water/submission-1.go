func trap(height []int) int {
	l := 0
	r := len(height) - 1
	result := 0
	leftMax := height[l]
	rightMax := height[r]
	for l < r{
		if leftMax < rightMax{
			l++
			leftMax = max(leftMax, height[l])
			result += leftMax - height[l]
		}else{
			r--
			rightMax = max(rightMax, height[r])
			result += rightMax - height[r]
		}
	}
	return result
}
