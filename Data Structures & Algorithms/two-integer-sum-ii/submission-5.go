func twoSum(numbers []int, target int) []int {
	if len(numbers) == 0{
		return []int{}
	}
	ptrOne := 0
	ptrTwo := len(numbers) - 1

	for ptrOne < ptrTwo{
		sum := numbers[ptrOne] + numbers[ptrTwo]
		if sum == target{
			return []int{ptrOne + 1, ptrTwo + 1}
		}else if sum < target{
			ptrOne++
		}else{
			ptrTwo--
		}
	}
	return []int{}
}
