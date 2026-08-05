class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {}
        for(let str of strs){
            let sortedStr = str.split("").sort().join('')
            if(!hash[sortedStr]){
                hash[sortedStr] = []
            }
            hash[sortedStr].push(str)
        }
        return Object.values(hash)
    }
}
