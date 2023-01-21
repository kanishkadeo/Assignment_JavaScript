

console.log(`call function as "numberSquares(n);" -- n is any number.... add numbers in array`);


function numberSquares(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + Math.pow(i, 2);
    }
    console.log(`The Number of Square in an N*N Grid is "${sum}"`)
    return sum;

}