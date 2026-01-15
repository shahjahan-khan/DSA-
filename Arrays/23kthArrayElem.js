// function findKthLargest (arr, k) {
//     const heap = [];

//     for (let num of arr) {
//         heap.push(num);
//         heap.sort((a,b) => a-b) 

//         if (heap.length > k) {
//             heap.shift()
//         }
//     }
//     return heap[0];
// }



function findKthLargest(arr, k) {
    return arr.sort((a,b)=> b-a)[k-1]
}
console.log(findKthLargest([1,2,1,45,6], 1))