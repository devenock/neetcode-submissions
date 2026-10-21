func isAnagram(s string, t string) bool {
	// first check the langth and if not same, return false
	if len(s) != len(t){
		return false
	}

	// declare the hash maps
	sMap := make(map[rune]int)
	tMap := make(map[rune]int)

	// loop through each string and update the maps
	for _, val := range s{
		sMap[val]++
	}

	for _, val := range t{
		tMap[val]++
	}

	// loop through the first map and compare the keys with the second map
	for key, val := range sMap{
		if tMap[key] != val{
			return false
		}
	}
	return true

}
