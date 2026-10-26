class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // create an empty hash map
        const newMap = {}
        // loop through the strs and update the map
        for(let i=0;i<strs.length;i++){
          let sorted = strs[i].split("").sort().join('')
          if(!newMap[sorted]){
            newMap[sorted] = []
          }
          newMap[sorted].push(strs[i])
        }
        return Object.values(newMap)
    }
}
