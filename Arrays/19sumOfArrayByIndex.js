// 19. Sum of Arrays by Index

// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample array :

// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];

// Expected Output :

// [4, 5, 8, 10, 12, 13]

sumOfArray = (arr1, arr2) => {
    const newArr = [];
    const maxElem = Math.max(arr1.length, arr2.length);
    console.log(maxElem)

    for(let i =0; i< maxElem; i++) {
            const ielem = arr1[i] || 0 
            const jelem = arr2[i] || 0
            const sum = ielem + jelem;
            newArr.push(sum)
    }

    return newArr;
}

console.log(sumOfArray([1,2,3,4], [1,2,3,4,5,6,7]))