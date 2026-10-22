func twoSum(nums []int, target int) []int {
    // for i := 0; i < len(nums); i++{
	// 	for j := i + 1; j < len(nums); j++{
	// 		if nums[i] + nums[j] == target{
	// 			return []int{i, j}
	// 		}
	// 	}
	// }
	// return []int{}
// 	newMap := make(map[int]int)
// 	for i :=0; i < len(nums); i++{
// 	complement := target - nums[i]
// 	val, ok := newMap[complement]
// 	if ok{
// 		return []int{val, i}
// 	}
// 	newMap[nums[i]] = i
// }
// return []int{}
	newMap := make(map[int]int)
  	for i, n := range nums{
   		complement := target - n
     	val, ok := newMap[complement]
      	if ok{
       		return []int{val, i}
       	}
        newMap[n] =  i
   	}
    return []int{}
}
