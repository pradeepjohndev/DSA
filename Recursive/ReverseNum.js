function reverseNum(n) {
    if (n <= 1) return n
    console.log(n)
    return reverseNum(n - 1)
}

console.log(reverseNum(99))