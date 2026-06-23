class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
  let start = 0;
  let end = heights.length - 1;
  let area = 0;

  while (start < end) {
    // declare with as the difference between the start and end indices
    let width = end - start;
    // declare height as the smallest between nums[start] and nums[end]
    let height = Math.min(heights[start], heights[end]);
    // declare the result
    let result = height * width;
    // update the area with the maximum value
    area = Math.max(area, result);
    // check to increment or decrement the pointer
    if (heights[start] <= heights[end]) {
      start++;
    } else {
      end--;
    }
  }

  return area;
    }
}
