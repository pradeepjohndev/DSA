const arr = [1, 2, 3, 4]
let odd = []
let even = []
let result = 0

arr.forEach(item => {
    item % 2 === 0 ? even.push(item) : odd.push(item)
})

console.log("odd:", odd)
console.log("even: ", even)

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 === 0) {
        console.log("even", arr[i])
    }
    else {
        console.log("odd", arr[i])
    }
}

for (const x in arr) {
    if (arr[x] % 2 === 0) {
        result += arr[x]
    }
}
console.log("sum of even number: ", result)



