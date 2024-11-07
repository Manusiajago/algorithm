const myAngka = [1, 2, 3, 4, 5, 6];

function calcSum(myAngka) {
    let total = 0;
    for (let i = 0; i < myAngka.length; i++) {
        if (myAngka[i] % 2 === 0) {
            total = total + myAngka[i];
        }


    }
    return total;
}

const calcSum2 = ((myAngka) => {
    let result = 0;

    for (let i = 0; i < myAngka.length; i++) {
        if (myAngka[i] % 2 === 0) {
            result = result + myAngka[i];
        }

    }
    return result;
})

console.log(calcSum(myAngka));