function sumof(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return -1;
}

const target = 9;
const arr = [10, 12, 5, 4];

console.log(sumof(arr, target)); 