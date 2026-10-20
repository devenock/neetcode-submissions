func isAnagram(s string, t string) bool {
// check string lens
	if len(s) != len(t) {
		return false
	}
	// create the maps
	sMap := make(map[rune]int)
	tMap := make(map[rune]int)

	// loop through the strings to update their maps
	for _, val := range s{
		sMap[val]++
	}

	for _, val := range t{
		tMap[val]++
	}

	for key, val := range sMap{
		if tMap[key] != val{
			return false
		}
	}

	return true
}
