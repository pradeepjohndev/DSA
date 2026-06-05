const arr = [100, "apple", 'c', 900, "new", 'b']
const str = []
const num = []
const char = []

arr.forEach((item) => {
    if (typeof (item) == "number") {
        num.push(item)
    }
    else if (typeof (item) == "string" && item.length <= 1) {
        char.push(item)
    }
    else {
        str.push(item)
    }
})

console.log(num, char, str)