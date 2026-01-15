// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105


// unshift and pop operations are CPU heavy so better to use rotate and swap.
// k = k % nums.length; is done so that k is always smaller  than array length
/**
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // console.log("nums len", nums.length)
    k = k % nums.length;
    // console.log("k is::", k)
    // for (let i =0; i< k; i++) {
    //     const removedElement = nums.pop();
    //     nums.unshift(removedElement)
    // }

    // 1: rotate complete array: 
    rotateArray(nums, 0, nums.length-1)
    // 2: rotate right k elements: 
    rotateArray (nums, 0, k-1);

    // 3: rotate last remaining elemnts:
    rotateArray(nums, k, nums.length-1)

    
    return nums
};

function rotateArray(arr, left, right) {
    while (left <= right) {
        [arr[left], arr[right] ] = [arr[right], arr[left] ]
        left++;
        right--;
    }
}