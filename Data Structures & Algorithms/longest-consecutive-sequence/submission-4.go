func longestConsecutive(nums []int) int {
	count := 0
	numSet := make(map[int]struct{})
	for _, num := range nums{
		numSet[num] = struct{}{}
	}
	for val := range numSet{
		if _, found := numSet[val - 1]; !found{
			length := 1
			for{
				if _, exist := numSet[val + length];exist{
					length++
				}else{
					break
				}
			}
			if length > count{
				count = length
			}
		}
	}
	return count;
}
