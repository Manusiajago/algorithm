// 1. Check for Palindromes With Built-In Functions
function palindromeChecker(str) {
    // Langkah 1: Buat regular expression (re) untuk menghapus semua karakter selain huruf dan angka
    let re = /[^A-Za-z0-9]/g;

    // Langkah 2: Ubah string menjadi huruf kecil semua dan hapus semua karakter yang bukan huruf atau angka
    str = str.toLowerCase().replace(re, '');

    //langkah 3 tentukan panjang string
    let len = str.length;

    // Langkah 4: Loop untuk memeriksa apakah karakter di awal dan akhir string cocok
    for (let i = 0; i < len / 2; i++) {
        // Jika karakter di indeks ke-i dari awal tidak sama dengan karakter di indeks ke-i dari akhir
        if (str[i] !== str[len - 1 - i]) {
            // jika tidak cocok maka bukan palindrome
            return false;
        }
    }
    // kembalikan nilai jika string mengandung palindrome
    return true;
}

// panggil
console.log("hasil pertama : ", palindromeChecker("racecar"));
console.log("hasil kedua : ", palindromeChecker("racecar"));


//