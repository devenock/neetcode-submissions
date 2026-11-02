func productExceptSelf(nums []int) []int {
	n := len(nums)
	result := make([]int, n)
	// for i:=0; i<n;i++{
	// 	product := 1
	// 	for j :=0; j<n;j++{
	// 		if i == j{
	// 			continue
	// 		}
	// 		product *= nums[j]
	// 	}
	// 	result[i] = product
	// }
	prefix := 1
	for i := 0; i <n;i++{
		result[i] = prefix
		prefix *= nums[i]
	}
	suffix := 1
	for j := n -1; j>=0;j--{
		result[j] *= suffix
		suffix *= nums[j]
	}

	return result
}
