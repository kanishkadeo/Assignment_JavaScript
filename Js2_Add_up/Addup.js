

function AddUp(num) {
    let sum = 0;
    for (let n = 1; n <= num; n++) {

        sum = n + sum;
    }

    console.log(`Sum of numbers from 1 to ${num} is :-  ${sum}`);

    //   return sum;

}
