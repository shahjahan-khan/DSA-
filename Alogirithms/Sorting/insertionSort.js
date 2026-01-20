// start from 0, compare i and i+1 and insert element at right place and do swaps


function insertionSort(arr) {
    let n = arr.length;

    for (let i =0; i<= n-1; i++) {
        let j = i;
        while(j>0 && arr[j-1]> arr[j]) {
            let temp = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = temp;
            j--;
        }
    }
    return arr;
}

console.log(insertionSort([2,35,1,56,9]))