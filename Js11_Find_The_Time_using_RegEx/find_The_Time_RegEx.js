


const text = 'Breakfast at 09:00 in the room 123:456';
const regextime = /\b\d\d:\d\d\b/;
console.log(text);
console.log(`${text.match(regextime)}`);
console.log(text.match(regextime));




//-----------or----------
/*
const text = "Breakfast at 09:00 in the room 123:456.";
console.log(`"${text}":-  ${text.match(/\b\d\d:\d\d\b/)}`)
*/