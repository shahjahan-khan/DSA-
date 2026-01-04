// 16. Find Leap Years in Range

// Write a JavaScript program to find the leap years in a given range of years.


leapYear = (num1, num2) => {
    const leapArray = [];
    for (let i = num1; i< num2; i++) {
        if (i%4 === 0 ) {
            leapArray.push(i)
        }

    }
    return leapArray;
}


console.log(leapYear(1900, 3000))