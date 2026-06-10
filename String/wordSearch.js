const str1 = "There is a cat and that cat is jumping on another cat"

const result = str1.matchAll(/Cat/ig)
const newres = str1.match(/cat/ig)
const final = Array.from(result).map((items) => items.index)

console.log(final)
console.log(newres.length)