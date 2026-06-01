function sum(arr) {
    let n = arr.length + 1
    const expected = (n * (n + 1)) / 2
    const actual = arr.reduce((acc, curr) => acc + curr, 0)

    return expected - actual
}

const arr = [1, 3, 4, 5]
console.log(sum(arr))