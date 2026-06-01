/* bubble Search: Time Complexity: O(log n) Space Complexity: O(1) */
function bubble(arr, target) {
    let left = 0
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid
        }
        if (arr[mid] < target) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return -1
}

const arr = [1, 3, 5, 7, 8, 10, 12, 15, 18, 19, 20]
console.log(bubble(arr, 10))