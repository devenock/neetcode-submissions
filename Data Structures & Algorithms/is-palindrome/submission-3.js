class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS = s.toLowerCase().replace(/[^a-z0-9]/g,"")
        let newSArr = newS.split("")

        // check for empty string
        if(newSArr.length == 0){
            return true;
        }

        // define the pointers
        let p1 = 0
        let p2 = newSArr.length - 1
        while(p1 < p2){
            if(newSArr[p1] !== newSArr[p2]){
                return false
            }else{
                p1++
                p2--
            }
        }
        return true
    }
}
