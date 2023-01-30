
console.log("call the function as :- 'isFirstSuperior([9.1, 8.1, 7.1, 6.1], [9.1, 8.1, 7.1, 5.1])' or ' isFirstSuperior(['zebra', 'ostrich', 'whale'], ['ant', 'ostrich', 'whale'])' ")
function isFirstSuperior(arr1 = [], arr2 = []) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) {
            return true;
        }

    }
    return false;
}