
console.log(`call function as "nest_arr([x1,x2...], [y1,y2...]);" -- x,y,z is any number.... add numbers in array`);


function nest_arr(arr1, arr2) {
    if (((Math.min(...arr1)) > (Math.min(...arr2))) && ((Math.max(...arr1)) < (Math.max(...arr2)))) {
        console.log(`arr1 is nested inside arr2`);
        return true;

    }
    else {
        console.log(`arr1 is not nested inside arr2`);
        return false;
    }
}