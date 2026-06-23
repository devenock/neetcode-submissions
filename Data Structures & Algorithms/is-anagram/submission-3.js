class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // compare the length of the strings
        if(s.length !== t.length){
            return false;
        }

        let f1 = {};
        let f2 = {};

        // loop through the first string
        for(let val of s){
            f1[val] = (f1[val] || 0) + 1;
        }

        for(let val of t){
            f2[val] = (f2[val] || 0) + 1;
        }

        // compare the keys
        for(let key in f1){
            if(!(key in f2)){
                return false;
            }
            if(f1[key] > f2[key]){
                return false;
            }
        }
        return true;
    }
}
