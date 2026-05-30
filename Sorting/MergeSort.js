function mergesort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergesort(arr.slice(0, mid));
    let right = mergesort(arr.slice(mid))
    return merge(left, right)
}

function merge(l, r) {
    let result = []
    let i = 0
    let j = 0
    while (i < l.length && j < r.length) {
        if (l[i] < r[j]) {
            result.push(l[i])
            i++
        }
        else {
            result.push(r[j])
            j++
        }
    }
    return result
        .concat(l.slice(i)).concat(r.slice(j))
}

const arr = [5, 1, 8, 4, 2]
console.log(mergesort(arr))

/* function mergeSort(arr){
    if(arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    let result = []

    while(left.length && right.length){
        result.push(left[0] < right[0]? left.shift(): right.shift())
    }
    return [...result, ...left, ...right]
}

console.log(mergeSort([5, 2, 8, 1, 4])) */