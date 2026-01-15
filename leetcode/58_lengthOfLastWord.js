/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const filteredStr = s.trim().split(' ')
    console.log(filteredStr, filteredStr[filteredStr.length-1].length)
};


lengthOfLastWord("   fly me   to   the moon  ")
