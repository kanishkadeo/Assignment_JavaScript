


console.log(`Call function as "group(str="pink flag red flag black flag blue flag green flag red flag");"`)

function group(str) {
    const REGEXP = /blue flag|red flag/g
    console.log(str);
    console.log(str.match(REGEXP));
}


//----OR----


/*
const str1 = "red flag blue flag"
const str2 = "yellow flag red flag blue flag green flag"
const str3 = "pink flag red flag black flag blue flag green flag red flag"
const str4 = "blue flag red flag red flag blue flag green flag red flag"

const REGEXP = /blue flag|red flag/g;

console.log(`String-1:- `, str1);
console.log(str1.match(REGEXP));
console.log(`String-2:- `, str2);
console.log(str2.match(REGEXP));
console.log(`String-3:- `, str3);
console.log(str3.match(REGEXP));
console.log(`String-4:- `, str4);
console.log(str4.match(REGEXP));

*/
