const arr = [8, 5, 4, 2, 3, 6, 7, 1, 2];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Largest:", largest);

// Accumulator (temporary result holder) currentvalue (store current value)
const result = arr.reduce((acc, curr) => {
    return curr > acc ? curr : acc
}, arr[0])

console.log("Largest:", result)