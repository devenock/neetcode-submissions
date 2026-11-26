func topKFrequent(nums []int, k int) []int {
	numsFreq := make(map[int]int)
	res := []int{}

	for _, val := range nums {
		numsFreq[val]++
	}

	buckets := make([][]int, len(nums)+1)
	for num, freq := range numsFreq {
		buckets[freq] = append(buckets[freq], num)
	}

	for i := len(buckets) - 1; i >= 0 && len(res) < k; i-- {
		for _, num := range buckets[i] {
			res = append(res, num)
			if len(res) == k {
				break
			}
		}
	}

	return res
}