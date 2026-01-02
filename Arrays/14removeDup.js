// 14. Remove Duplicates

// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).



removeDuplicate = (arr) => {
    let n = new Set(arr);

    // arr.forEach(elem => {
    //     n.add(elem)
    // })

    console.log([...n])
}

removeDuplicate([1,2,3,1,1,1,4,2,4, 'a', 'a', 'b', 'xyz'])