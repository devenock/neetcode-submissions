func threeSum(nums []int) [][]int {
	// sort the nums slice
	sort.Ints(nums)
	// initialize an empty nested slice to be returned at the end
	res := [][]int{}
	// iterate on the sorted items to capture each item
	for i := 0; i<len(nums); i++ {
		if nums[i] > 0{
			break
		}
		if i > 0 && nums[i] == nums[i - 1]{
			continue
		}
		// initialize the two pointers
		l := i + 1
		r := len(nums) - 1
		for l < r{
			sum := nums[i] + nums[l] + nums[r]
			if sum > 0{
				r--
			}else if sum < 0{
				l++
			}else{
				res = append(res, []int{nums[i], nums[l], nums[r]})
				l++
				r--
				for l < r && nums[l] == nums[l - 1]{
					l++
				}
			}
		}
	}
	return res
}
