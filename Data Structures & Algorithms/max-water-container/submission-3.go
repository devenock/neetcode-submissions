func maxArea(heights []int) int {
//   initialize two pointers on the array heights
l := 0
r := len(heights) -1
result := 0
for l < r{
	width := r - l
	length := min(heights[l], heights[r])
	area := width * length
	result = max(result, area)
	if heights[l] <= heights[r]{
		l++
	}else{
		r--
	}
}
return result
}
