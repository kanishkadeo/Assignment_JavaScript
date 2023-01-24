
let promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("Hello !!!! "); }, 1000);
});

promise.then(function (value) {
    console.log(value);
})

