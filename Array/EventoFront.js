function moveEvensToFront(arr) {
    let even = []
    let odd = []

    for (let x of arr) {
        if (x % 2 == 0) {
            even.push(x)
        }
        else {
            odd.push(x)
        }
    }
    return [...even, ...odd]
}



console.log(moveEvensToFront([5, 2, 8, 1, 4, 7, 6]));