const arr = [1, 2, 0, 6, 5, 6, 7, 0, 2, 1, 0];

function zero(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            result.push(arr[i]);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(zero(arr));

// function zerotoend(arr) {
//     return [
//         ...arr.filter(num !== 0),
//         ...arr.filter(num === 0)
//     ];
// }

// console.log(zerotoend(arr))


function Countzero(arr) {
    let count = 0;
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++;
        }
        else {
            res.push(arr[i])
        }
    }

    for (let i = 0; i < count; i++) {
        res.push(0);
    }

    return res;
}

console.log(Countzero(arr))