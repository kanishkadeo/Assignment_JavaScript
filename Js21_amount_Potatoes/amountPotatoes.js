
console.log(`call the function as "potatoes("potatopotatocherry")"`)





function potatoes(str) {
    const regex = /potato/g;
    const string = str.match(regex);
    console.log(string);
    console.log(string.length);


}


//-------or----

/*
function potatoes(str) {

    console.log(`The Total potatoes :- ${(str.match(/potato/g) || []).length}`);

}
*/

