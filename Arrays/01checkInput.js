// Write a JavaScript function to check whether an `input` is an array or not.

// Test Data :

// console.log(is_array('w3resource'));

// console.log(is_array([1, 2, 4, 0]));

// false

// true



function is_array(args) {
    return (typeof args == 'object')
}

console.log(is_array('w3resource'));

console.log(is_array([1, 2, 4, 0]));