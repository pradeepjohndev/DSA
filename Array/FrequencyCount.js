const arr = [8, 5, 4, 2, 3, 3, 1, 1, 2];

//method 1

const freq = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
}, {})

console.log("array reduce method:", freq)

// method 2

const frequency = {};

for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
}

console.log("for of looping method: ", frequency)

// method 3

const frequ = {}

arr.forEach(num => {
    frequ[num] = (frequ[num] || 0) + 1;
});

console.log("for each looping method:", frequ)

// without inbuild method
function getFrequency(arr) {
    const frequency = {};
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (frequency[item]) {
            frequency[item]++;
        } else {
            frequency[item] = 1;
        }
    }
    return frequency;
}

console.log(getFrequency([1, 2, 2, 3, 3, 3])); 
