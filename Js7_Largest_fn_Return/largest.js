
console.log(`call function as "whichIsLarger(()=>x, ()=>y)" -- x,y is any number`);

function whichIsLarger(f, g) {
    let a = f();
    let b = g();
    if (a === b) {
        console.log(`Both the Function(Number) are Equal i.e "f()=${a}" & "g()=${b}"`);
        return 'neither';
    }
    else if (a > b) {
        console.log(`From Function(Number) f()=${a} & g()=${b} . The Function "f" is Returning  the largest number`);
        return 'f';
    }
    else {
        console.log(`From Function(Number) f()=${a} & g()=${b} . The Function "g" is Returning  the largest number`);
        return 'g';
    }
}