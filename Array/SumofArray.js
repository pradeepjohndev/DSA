const arr = [8, 5, 4, 2, 3, 6, 7, 1, 2];
let result = 0

/* for (const x of arr) {
    result += x
} */

/* for (let i = 0; i < arr.length; i++) {
    result += arr[i];
} */

/* arr.forEach(num => { sum += num; }); */

arr.reduce((a, b) => a + b, 0);

console.log(result)

