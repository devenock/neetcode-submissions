func isAnagram(s string, t string) bool {
	if len(s) != len(t){
		return false;
	}
	sFreq := make(map[rune]int)
	tFreq := make(map[rune]int)

	// loop through the strings 
	for _, val := range s{
		sFreq[val]++
	}

	for _, val := range t{
		tFreq[val]++
	}

	// iterate the map to compare the frequencies
	for key, val := range sFreq{
		if tFreq[key] != val{
			return false
		}
	}
	return true;
}
