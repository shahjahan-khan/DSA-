// 18. Binary Search

// Write a JavaScript program to perform a binary search.

// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.

// Sample array :

// var items = [1, 2, 3, 4, 5, 7, 8, 9];

// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4


binarySearch = (sortedArr, elem) => {
    let low = 0;
    let high = sortedArr.length-1;
    
    while (high >= low ) {
        let mid = low+ Math.floor((high-low)/2);
        if (sortedArr[mid] ==  elem) return mid;
        if (sortedArr[mid] > elem) {
            high = mid -1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}


console.log(binarySearch([1,2,3,4,8, 10, 13, 18, 22, 25, 28, 30, 33, 39, 66, 311], 66))