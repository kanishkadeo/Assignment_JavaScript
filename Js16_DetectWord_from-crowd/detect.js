console.log(`call the function as "detectWord("UcUNFYGaFYFYGtNUH")"`)

function detectWord(str) {
    const regex = /[a-z]/g;
    const found = str.match(regex);

    console.log(found);

    console.log(found.join(''));
}
