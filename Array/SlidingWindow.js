function maxSumSubarray(arr, k) {
    let maxSum = 0

    for (let i = 0; i < arr.length - k; i++) {
        let sum = 0
        for (let j = i; j < i + k; j++) {
            sum += arr[j];
        }
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); 