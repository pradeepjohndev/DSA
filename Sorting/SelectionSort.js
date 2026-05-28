/* selection sort: Time Complexity: O(n^2) Space Complexity: O(1) */

function selection(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}

const arr = [3, 6, 4, 1, 2, 7, 9, 10, 8]
console.log(selection(arr))