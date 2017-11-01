'use strict';

function decode(word){
    if (word.charAt(0) === 'a' || word.charAt(0) === 'A' ) {
        console.log(word.charAt(1));
    } else if (word.charAt(0) === 'b' || word.charAt(0) === 'B' ) {
        console.log(word.charAt(2));
    } else if (word.charAt(0) === 'c' || word.charAt(0) === 'C' ) {
        console.log(word.charAt(3));
    } else if (word.charAt(0) === 'd' || word.charAt(0) === 'D' ) {
        console.log(word.charAt(4));
    } else {
        console.log(` `);
    }
}

decode('droop');

//for loop