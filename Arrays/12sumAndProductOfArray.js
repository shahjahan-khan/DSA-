// 12. Sum and Product of Array

// Write a JavaScript program to compute the sum and product of an array of integers.


sumAndProduct = (arr) => {
    let sum = 0;
    let product = 1;

    arr.forEach(element => {
        sum += element;
        product *= element;
    });

    console.log(sum, product)
}


sumAndProduct([1, 2, 3, 4, 5, 6])