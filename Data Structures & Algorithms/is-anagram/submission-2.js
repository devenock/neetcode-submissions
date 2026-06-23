class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // ensure the length of string s equals to that of t
        if(s.length !== t.length){
            return false;
        }
        // declare the frequency counter objects
        let frequencyCounter1 = {}
        let frequencyCounter2 = {}

        // loop through the strings to populate their frequency objects
        for(let val of s){
            frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        }

        for(let val of t){
            frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
        }

        // iterate through the frequency objects
        for(let key in frequencyCounter1){
            if(!(key in frequencyCounter2)){
                return false;
            }

            if(frequencyCounter1[key] > frequencyCounter2[key]){
                return false;
            }
        }

        return true;
    }
}
