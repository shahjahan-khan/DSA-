
// 20. Find Duplicate Values

// Write a JavaScript program to find duplicate values in a JavaScript array.


findDuplicate = (arr) => {
    const obj = {};
    const dupSet = new Set();
    for(let i of arr) {
        console.log(obj[i])
       if(obj[i]) dupSet.add(i)
        else obj[i] = 1; 
    }
    console.log(obj)
    return [...dupSet];
}
console.log(findDuplicate([1,2,1,4,4,4,4,4,4,4,2,2,2,2,1,1,1,1,1,8,6,5,4,3,2,1,8,8,8,66,6,8,,8,9]))