const arr = [8, 5, 4, 2, 3, 6, 7, 1, 2];

const unique = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
});

console.log(unique);

const method2 = [...new Set(arr)];
console.log(method2);

const array = [1, 3, 1, 5, 5]
let duplicate = []

for (let i = 0; i <= array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
        if (array[i] === array[j]) {
            duplicate.push(array[i])
        }
    }
}

console.log("duplicate in array are: ", duplicate)
