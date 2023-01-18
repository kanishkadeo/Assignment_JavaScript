
console.log(`call function as "match_count(x);" -- x is any number`);


function match_count(n) {
    let sum = 6
    if (n === 0) {
        console.log(`The Match Stick Required to make '${n}' Houses are '${0}'`);
        return 0;
    }
    else {
        sum = ((n * 6) - (n - 1));
        console.log(`The Match Stick Required to make '${n}' Houses are '${sum}'`);
        return sum;
    }

}


//--------------------------------------------------------------
//   or
//-----------------------------------------------------------


/*

function match_count1(n) {
    let sum = 6
    if (n === 0) {
        console.log(`The Match Stick Required to make '${n}' Houses are '${0}'`);
        return 0;
    }
    else {
        for (let i = 1; i < n; i++) {
            sum = sum + 5;
        }
        console.log(`The Match Stick Required to make '${n}' Houses are '${sum}'`);
        return sum;
    }

}

*/

//--------------------------------------------------------------
//   or
//-----------------------------------------------------------


/*
function match_count2(n) {
    let sum = 6
    if (n === 0) {
        console.log(`The Match Stick Required to make '${n}' Houses are '${0}'`);
        return 0;
    }
    else {
        sum = ((n * 5) + 1);
        console.log(`The Match Stick Required to make '${n}' Houses are '${sum}'`);
        return sum;
    }

}

*/

