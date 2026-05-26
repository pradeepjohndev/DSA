const n = 10;

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
    let next = a + b;

    console.log(next);

    a = b;
    b = next;
}

function fibbo(n) {
    if (n <= 1) {
        return n
    }

    return fibbo(n - 1) + fibbo(n - 2);
}

console.log(fibbo(6))


let fibbonaci = [0, 1]

for (let i = 2; i < n; i++) {
    fibbonaci[i] = fibbonaci[i - 1] + fibbonaci[i - 2]
}

console.log(fibbonaci)
