// Clone Array

// Write a JavaScript function to clone an array.

// Test Data:
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]



function array_Clone(arr) {
    // const newArr = [...arr];
    const newArr = arr.slice(0);
    // const newArr = Array.from(arr);

    return newArr;
}

// can also use slice



console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));