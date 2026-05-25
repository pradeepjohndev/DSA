const obj1 = [
    {
        key: "a",
        val: 1
    },
    {
        key: "b",
        val: 2
    },
    {
        key: "c",
        val: 3
    }
]
const res = {}
let result = obj1.map(item => item.key)
console.log(Object.assign(res, result))


