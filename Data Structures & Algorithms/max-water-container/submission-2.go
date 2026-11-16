func maxArea(heights []int) int {
	l := 0
	r := len(heights) - 1
	res := 0
	for l < r{
		width := r - l
		length := min(heights[l], heights[r])
		area := width * length
		res = max(res, area)
		if heights[l] <= heights[r]{
			l++
		}else{
			r--
		}
	}
	return res
}
