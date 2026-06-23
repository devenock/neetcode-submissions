class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let sArr = cleanedStr.split('');

        if(sArr.length === 0){
            return true;
        }

        let start = 0;
        let end = sArr.length -1;

        while(start < end){
            if(sArr[start] !== sArr[end]){
                return false;
            }
             end--;
             start++;
        }
        return true;
    }
}
