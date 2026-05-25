const arr = [8, 5, 4, 2, 3, 6, 7, 1, 2];

let largest = arr[0];
let secondLargest = arr[1];

for (let i = 0; i < arr.length; i++) {
    // arr[i] < largest [for lowest number]
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    }

    else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);