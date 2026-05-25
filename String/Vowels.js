const str = "hello"
let result = ""

for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        result += str[i] + " "
    }
}

console.log(result)
console.log(result.length)

