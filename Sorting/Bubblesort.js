/* Bubble sort: Time Complexity: O(log n) Space Complexity: O(1) */

function bubblesort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

const arr = [1, 4, 2, 6, 7, 8, 9, 3, 5]
console.log(bubblesort(arr))