// Buat program yang mencetak angka dari 1 hingga 100. Untuk angka kelipatan 3, cetak "Fizz" dan untuk kelipatan 5 cetak "Buzz". Untuk angka yang kelipatan 3 dan 5, cetak "FizzBuzz".
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz", i);
    } else if (i % 3 == 0) {
        console.log("fizz", i);
    } else if (i % 5 == 0) {
        console.log("Buzz", i);
    }
}

