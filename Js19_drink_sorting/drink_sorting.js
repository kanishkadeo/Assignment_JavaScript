

/* in console :- 
const drinks1 = [
    {name: 'lemonade', price: 90}, 
    {name: 'lime', price: 432}, 
    {name: 'peach', price: 23}
];
sortDrinkByPrice(drinks1);
*/

console.log(`const drinks1 = [
    {name: 'lemonade', price: 90}, 
    {name: 'lime', price: 432}, 
    {name: 'peach', price: 23}
];
sortDrinkByPrice(drinks1);`);


//------------

function sortDrinkByPrice(drinks) {
    //console.log(drinks);
    drinks.sort((a, b) => (a.price > b.price) ? 1 : -1);
    return drinks;
}

