
console.log(`call function As"seriesResistance([x1,x2,x3,x4..])"`);

function seriesResistance(arr) {
    let R = 0;
    for (let i = 0; i < arr.length; i++) {
        R = R + arr[i];
    }
    if (R <= 1) {
        console.log(`Total series Resistance = ${R} ohm`)
        return `${R} ohm`;
    }
    else {
        console.log(`Total series Resistance = ${R} ohms`)
        return `${R} ohms`;
    }
}