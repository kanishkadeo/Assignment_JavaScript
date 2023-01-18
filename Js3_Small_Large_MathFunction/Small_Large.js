

console.log(`call function as "minmax(x,y,z,...);" -- x,y,z is any number.... add numbers in array`);


function minmax(...arr) {
    console.log([Math.min(...arr), Math.max(...arr)]);
    console.log(`The Minimum value from Array is ${Math.min(...arr)}`);
    console.log(`The Maximum value from Array is ${Math.max(...arr)}`);
    //return [Math.min(...a), Math.max(...a)];
}
