class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if(numbers.length === 0){
            return []
        }

        let firstPtr = 0
        let lastPtr = numbers.length - 1

        while(firstPtr < lastPtr){
            let sum = numbers[firstPtr] + numbers[lastPtr]
            if(sum == target){
                return [firstPtr + 1, lastPtr + 1]
            }else if(sum < target){
                firstPtr++
            }else{
                lastPtr--
            }
        }
        return []
    }
}
