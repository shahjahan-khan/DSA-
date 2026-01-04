// 11. Sum of Squares in Array

// Write a JavaScript program to find the sum of squares of a numerical vector.


sumOfSquare = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum += Math.pow(element, 2 )
        // sum += (element * element )
    });

    return sum;
}

console.log(sumOfSquare([0,1,2,3,4]))