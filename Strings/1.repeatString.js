// function repeatString(str, n) {
//     return new Array(n+1).join(str);
// }

// console.log(repeatString('ha', 5))



// function countIndex(main, str) {
//     let count = 0;
//     i = 0;

//     while(true) {
//         const r = main.indexOf(str,i);

//         if(r!== -1 ) {
//             [count, i] = [count + 1, r + 1];
//         } else {
//             return count;
//         }
//     }
// }

// console.log(countIndex('the quick brown the fox', 'the'));


function test(text, word) {
    // return parseInt(n.toString(2).split('').reverse().join(''), 2);

    const count = text.split(word).length-1
    return count
}

console.log(test('apple-apple', 'apple'))