class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // BRUTE FORCE SOLUTION(NESTED FOR LOOP(0(n^2)))
        // loop through the array twice frist time starting 
        // with the first item and then second loop starts 
        // from the second item in the array

// for(let i = 0; i < numbers.length; i++){
//     for(let j = i+1; j<numbers.length; j++){
//         if(numbers[i] + numbers[j] === target){
//             return [i + 1, j + 1]
//         }
//     }
// }

// OPTIMIZED SOLUTION(TWO POINTERS(0(n)))
// define the right and the left pointers
let leftPointer = 0;
let rightPointer = numbers.length - 1;
while(leftPointer < rightPointer){
    let sum = numbers[leftPointer] + numbers[rightPointer];
    if(sum === target){
        return [leftPointer + 1, rightPointer + 1]
    }else if(sum > target){
        rightPointer--
    }else{
        leftPointer++
    }
}
    }
}
