function check(s, l) {
    if (s.length !== l.length) return false
    return s.split('').sort().join('') === l.split('').sort().join('')
}

const s = "silent"
const l = "listen"

console.log(check(s, l))