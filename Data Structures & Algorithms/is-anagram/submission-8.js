class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // first confirm their length is same
        if(s.length !== t.length){
            return false;
        }
        // find the frequency of the items
        let sFreq ={}
        let tFreq ={}
        for(let val of s){
            sFreq[val] = (sFreq[val] || 0) + 1
        }

         for(let val of t){
            tFreq[val] = (tFreq[val] || 0) + 1
        }

        for(let key in sFreq){
            if(!(key in tFreq)){
                return false
            }

            if(sFreq[key] > tFreq[key]){
                return false
            }
        }

        return true;

    }
}
