const arr = [8, 5, 4, 2, 3, 6, 7, 1, 2];

const unique = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
});

console.log(unique);

/* const arr = [2,4,5,1,2,4]
const duplicate = []

const result = arr.filter((item,index)=>{
    if(arr.indexOf(item) === index){
        return arr[item]
    }
    else duplicate.push(arr[item])
})

console.log(result)
console.log(duplicate) */

const method2 = [...new Set(arr)];
console.log(method2);

const array = [1, 3, 1, 5, 5]
let duplicate = []

for (let i = 0; i <= array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
        if (array[i] === array[j]) {
            duplicate.push(array[i])
            /* arr.splice(j,1)
            j-- */
        }
    }
}

console.log("duplicate in array are: ", duplicate)
