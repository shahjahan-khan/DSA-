unionOfArray = (arr1, arr2) => {
    return [...new Set(arr1.concat(arr2))];
}


console.log(unionOfArray([1, 2, 3], [100, 2, 1, 10]));