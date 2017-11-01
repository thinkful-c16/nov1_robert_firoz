'use strict';


// input: "craft block argon meter bells brown croon droop"
// output: "for loop"

function decode(string){
    const words = string.split(' ');
    const myObj = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
    };
    let outString = '';

    for (let e of words) {

        if (e.charAt(0) === 'a' || e.charAt(0) === 'A' ) {
            outString += e.charAt(1);
        } else if (e.charAt(0) === 'b' || e.charAt(0) === 'B' ) {
            outString += e.charAt(2);
        } else if (e.charAt(0) === 'c' || e.charAt(0) === 'C' ) {
            outString += e.charAt(3);
        } else if (e.charAt(0) === 'd' || e.charAt(0) === 'D' ) {
            outString += e.charAt(4);
        } else {
            outString += ' ';
        }
    }
    return outString;
}

//decode('craft');
console.log(decode("craft block argon meter bells brown croon droop"));
