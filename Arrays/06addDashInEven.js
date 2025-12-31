// 6. Insert Dashes Between Evens

// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.


function addDashInEven(n){

const numToString = n.toString();

const res = [numToString[0]];

for (let i =1; i< numToString.length; i++) {
    if (numToString[i-1] % 2 === 0 && numToString[i] %2 === 0) {
        res.push('-', numToString[i])
    } else {
        res.push(numToString[i])
    }
}
    return res.join('')
}

console.log(addDashInEven(124342));