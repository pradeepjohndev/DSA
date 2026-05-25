const arr = [8, 5, 4, 2, 3, 6, 7, 1, 2];

const unique = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
});

console.log(unique);


const method2 = [...new Set(arr)];
console.log(method2);