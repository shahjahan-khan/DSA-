// 9. Swap Case in String

// Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.


swapCharacters = (input) => {
    const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const res = [];

    for (let i of input) {
        if(UPPER.indexOf(i) !== -1) {
            res.push(i.toLowerCase())
        } else {
            res.push(i.toUpperCase())

        }
    }

    console.log(res.join(''));
} 

swapCharacters('TesT')