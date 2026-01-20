// find max and do adjecent swap


function bubbleSort(arr) {
    let n = arr.length
    for (let i = n-1; i>=1; i--) {
        let didSwap = false;
        for (let j=0; j<=i; j++) {
            if (arr[j]> arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                didSwap = true;
            }
        }
        if (!didSwap) return arr;
            console.log("runs")
    }
    return arr;
}

console.log(bubbleSort([1,4,44,444,1000]))


//complexity: Worst and Average:  O(N^2) -> had to iterate and swap the array
// best: array is already sorted: O(N)