
console.log(`call function as "leftShift(x,y)" -- x,y is any number`);

// With out using LeftShift Operator.

function leftShift(x, y) {
    let sum = (x * (Math.pow(2, y)));

    console.log(`Binary number of '${x}' is '${x.toString(2)}'`);
    console.log(`Left Shift by '${y}'`);
    console.log(`The Number '${x}' after '${y}' Left Shift in Binary is '${sum.toString(2)}' and in Decimal is "${sum}" `);

    return sum;

}


//-----------------------------------------
//  OR
//-----------------------------------------
//With using LeftShift Operator.

/*

function leftShift1(x, y) {
    let sum = x << y;

    console.log(`The Number '${x}' After '${y}' Left Shift is "${sum}"`)
    return sum;

}

*/