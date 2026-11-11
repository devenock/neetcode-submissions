func threeSum(nums []int) [][]int {
	// sort the array in ascending order
	sort.Ints(nums)
	// declare an empty slice that will be returned at the end
	result := [][]int{}

	// loop for the first time to get the first item
	for i := 0; i< len(nums); i++{
		if nums[i] > 0{
			break
		}
		if i > 0 && nums[i] == nums[i - 1]{
			continue
		}
		l := i + 1
		r := len(nums) - 1
		for l < r{
			sum := nums[i] + nums[l] + nums[r]
			if sum > 0{
				r--
			}else if sum < 0{
				l++
			}else{
				result = append(result, []int{nums[i], nums[l], nums[r]})
				l++
				r--
				for l < r && nums[l] == nums[l - 1]{
					l++
				}
			}
		}
	}
	return result
}
