
console.log(`call function as "minmax(x,y,z,...);" -- x,y,z is any number.... add numbers in array`);

function minmax(...a) {
    let n = 0;
    n = a.length;
    let b = a[0];
    let c = a[0];
    for (let i = 1; i < n; i++) {
        if (a[i] < b) {
            b = a[i];
        }
        if (a[i] > c) {
            c = a[i];
        }

    }
    console.log([b, c]);
    console.log(`The Minimum value from Array is:- ${b}`);
    console.log(`The Maximum value from Array is:- ${c}`);

}

