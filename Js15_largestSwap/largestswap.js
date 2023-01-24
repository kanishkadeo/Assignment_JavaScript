
console.log(`call function as "largestSwap(x)" where x is any number`);

function largestSwap(num) {
    let reverse = 0;

    let x = num;
    while (x !== 0) {
        let remainder = x % 10;
        reverse = (reverse * 10) + remainder;
        x = Math.floor(x / 10);
    }

    if (reverse > num) {
        console.log(` The reverse Number is :- ${reverse} , Greater than Orignal Number ${num}`)
        return false;
    } else {
        console.log(` The reverse Number is :- ${reverse} , Less than or Equal-To Orignal Number ${num}`)
        return true;
    }
}
