// 8. Most Frequent Array Item

// Write a JavaScript program to find the most frequent item in an array.

// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Sample Output : a ( 5 times )



frequent = (arr) => {
    let map = {};
    let maxElem = arr[0];
    let maxCount = 0;
    for(let i of arr) {
        map[i] = (map[i] || 0) + 1;

        if (map[i]> maxCount) {
            maxCount = map[i]
            maxElem = i;
        }
    }
    
    return {maxElem, maxCount};
}

console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))





   function reduceMethod(arr){
     const res = arr.reduce((acc, val)=> {
        acc.counts[val] = (acc.counts[val] || 0) +1;

        if (acc.counts[val] > acc.maxCount) {
            acc.maxCount = acc.counts[val];
            acc.maxItem = val;
        }
        return acc;
    }, { counts: {}, maxCount: 0, maxItem: null })
    return { count: res.maxCount, char: res.maxItem};
}

console.log(reduceMethod([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))