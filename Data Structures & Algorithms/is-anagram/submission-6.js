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

        // BRUTE FORCE(NESTED LOOP - 0(n^2))
        // Convert both strings to arrays.
        // For each character in s, find a matching character in t.
        // Remove the matched character from t.
        // If any character can't be matched, return false.
        // let arrT = t.split("");
        // for(let val of s){
        //     let indexT = arrT.indexOf(val);

        //     if(indexT === -1){
        //         return false;
        //     }

        //     arrT.splice(indexT, 1);
        // }

        // return true;

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
