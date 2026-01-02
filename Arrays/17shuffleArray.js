// shuffleArray = (arr) => {
//     const firstElem = arr[0];
//     let newArr = [];
//     for(let i =0; i < arr.length-1; i++) {
//         arr[i] = arr[i+1];
//         newArr.push(arr[i])
//     }
//     // console.log(arr);
//     newArr.push(firstElem)

//     return newArr
// }

// console.log(shuffleArray([1,2,3,4]))




// Fisher-Yates shuffle algorithm :::: 


shuffleArray = (arr) => {
    let currentIndex = arr.length, randomIndex;

    while (currentIndex > 0 ) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;

        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }
    return arr;
}


console.log(shuffleArray([1,2,3,4]))

