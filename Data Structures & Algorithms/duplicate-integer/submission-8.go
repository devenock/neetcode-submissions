func hasDuplicate(nums []int) bool {
    if len(nums) == 0{
		return false
	}
	// for i:= 0; i<len(nums);i++{
	// 	for j := i +1;j<len(nums);j++{
	// 		if nums[i] == nums[j]{
	// 			return true
	// 		}
	// 	}
	// }
	numFreq := make(map[int]int)
	for _, val := range nums{
		numFreq[val]++
	}
	
	for _, val := range numFreq{
		if val > 1{
			return true
		}
	}
	return false;
}
