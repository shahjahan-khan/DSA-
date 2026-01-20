// Iterate the array till n-2  -->> n-1 will already be sorted 
// find min and swap with i


function selectionSort(arr) {
    let n = arr.length
    for (let i =0; i<= n-2; i++) {
        let min = i;
        for (let j=i; j <=n-1; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}


console.log(selectionSort([11,4,111,67,3]))



// time complexity: 

// loop runs for n+(n-1)+(n-2)+...1
// n (n+1)/2

// n^2 * n/2


// -->>> O(N^2)