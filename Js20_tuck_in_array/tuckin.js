


function tuckIn(arr1, arr2) {
    console.log(arr1);
    console.log(arr2);

    let a = arr1.splice(1, 0, arr2);
    console.log(arr1);
    //  let b = arr1.join();
    //  console.log(`[${b}]`);
}