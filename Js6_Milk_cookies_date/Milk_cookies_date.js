
console.log(`Call Function As "christmas(new Date ('mm-dd-yyyy'))" Type month ,date and year`);

function christmas(date) {
    if ((date.getDate() === 25) && (date.getMonth() === 11)) {
        console.log(`The Christmas Eve .... Time for Milk and Cookies`);
    }
    else {
        console.log(`Not the Christmas Eve ....`);
    }

    return (date.getDate() === 25) && (date.getMonth() === 11);
}




//christmas(new Date ('mm-dd-yyyy'));

//-------------------------------------------------
//  OR
//----------------------------------------

/*

function christmas1(date) {
    let day = date.getDate();
    let month = date.getMonth();

    if (day == 25 && month == 11) {
        console.log(`The Christmas Eve .... Time for Milk and Cookies`);
        return true

    } else {
        console.log(`Not the Christmas Eve ....`);
        return false
    }
}

*/