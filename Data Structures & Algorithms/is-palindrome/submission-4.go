func isPalindrome(s string) bool {
	// convert to lowercase
	newStr := strings.ToLower(s)
	// get the regex library 
	regex := regexp.MustCompile(`[^a-z0-9]`)
	// remove the spacial characters
	clean := regex.ReplaceAllString(newStr, "")

	// convert to array
	newStrArr := []rune(clean)

	if len(newStrArr) == 0 {
		return true
	}

	// declare the pointers
	leftPointer := 0
	rightPointer := len(newStrArr) - 1

	for leftPointer < rightPointer{
		if newStrArr[leftPointer] != newStrArr[rightPointer]{
			return false
		}else{
			leftPointer++
			rightPointer--
		}
	}
	return true
}
