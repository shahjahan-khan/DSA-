// 21. Flatten Nested Array

// Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.

// Sample Data :

// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]

// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]


// solution 1: 
// flatten = (arr) => {
//     const newArr = arr.flat(Infinity)
//     return newArr
// }


// solution 2:

// flatten = (arr) => {
//     return arr.reduce((acc, val)=> {
//         return acc.concat( Array.isArray(val) ?  flatten(val): val);
//     }, [])
// }



// solution 3 with stack:

function flatten (arr) {
    const res = [];
    const stack = [...arr];

    while(stack.length) {
        const curr = stack.pop();

        if(Array.isArray(curr)) {
            stack.push(...curr);
        } else {
            res.push(curr)
        }
    }
    return res.reverse();
}



console.log(flatten([1, [2], [3, [[4]]],[5,6]]))