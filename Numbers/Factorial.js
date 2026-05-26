function factorial(n) {
    if (n < 0) return "negative numbers";

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));

// recursive apporach 
function factorials(n) {
    if (n < 0) return "negative numbers";
    if (n === 0 || n === 1) return 1;

    return n * factorials(n - 1);
}

console.log(factorials(5));