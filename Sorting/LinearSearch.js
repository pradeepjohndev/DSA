/* Linear Search: Time Complexity: O(n) Space Complexity: O(1) */

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const numbers = [10, 25, 7, 42, 99];

console.log(linearSearch(numbers, 42));
