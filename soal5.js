const myNumber = [10, 20, 4, 45, 99];  // mencari nilai terbesar ke 2
const myNumber2 = [10, 20, 4, 45, 99, 100, 88, 120, 300, 45, 70, 85, 67, 200, 500, 250]; // mencari

let sortingNumber = myNumber.sort((a, b) => {
    return a - b;
})

let sortNum = myNumber2.sort((a, b) => {
    return a - b;
})

console.log(sortingNumber.at(-2));
console.log(sortNum.at(-2));