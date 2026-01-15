// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
// //  let returnStr = '';

//     strs.sort();
//     console.log(strs)
//     let str1 = strs[0];
//     let str2 = strs[strs.length-1];
//     let index = 0;

//     while(index<= str1.length && str1.charAt(index) == str2.charAt(index)) index++;

//     return index == 0 ? "" : str1.substring(0, index)
// };


// second solution:::: 
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let firstStr = strs[0];
    

    for (let i =1; i < strs.length; i++) {
        while(strs[i].indexOf(firstStr) !==0) {
            firstStr = firstStr.substring(0, firstStr.length-1)
            if (firstStr == "") return "";
        }
    }
    return firstStr;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))