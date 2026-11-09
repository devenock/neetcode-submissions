func twoSum(numbers []int, target int) []int {
	if len(numbers) == 0{
		return []int{}
	}
	firstPtr := 0
	lastPtr := len(numbers) - 1

	for firstPtr < lastPtr{
		sum := numbers[firstPtr] + numbers[lastPtr]
		if sum == target{
			return []int{firstPtr + 1, lastPtr + 1}
		}else if sum < target{
			firstPtr++
		}else{
			lastPtr--
		}
	}
	return []int{}
}
