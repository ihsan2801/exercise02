// EXERCISE 02

// SOAL NOMOR 1
let number: number = 3;

function checkOddOrEven(number) {
    if (number % 2 === 0) {
        console.log(`${number} adalah angka genap`);
    } else {
        console.log(`${number} adalah angka ganjil`);
    }
}

// Penggunaan
checkOddOrEven(25); // Output: 25 adalah angka ganjil
checkOddOrEven(2);  // Output: 2 adalah angka genap


// SOAL NOMOR 2
function isPrime(number) {
    if (number <= 1) return false; // Angka 1 dan kurang dari 1 bukan bilangan prima

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false; // Jika ada pembagi lain selain 1 dan dirinya sendiri
        }
    }
    return true; // Jika tidak ada pembagi selain 1 dan dirinya sendiri
}

// Penggunaan
console.log(isPrime(7)); // Output: true (7 adalah bilangan prima)
console.log(isPrime(6)); // Output: false (6 bukan bilangan prima)


// SOAL NOMOR 3
function sumOfNumbers(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;
}

// Penggunaan
console.log(sumOfNumbers(5)); // Output: 15 (1 + 2 + 3 + 4 + 5)
console.log(sumOfNumbers(3)); // Output: 6 (1 + 2 + 3)


// SOAL NOMOR 4
function factorial(number) {
    let result = 1;
    for (let i = number; i > 0; i--) {
        result *= i;
    }
    return result;
}

// Penggunaan
console.log(factorial(4)); // Output: 24 (4 * 3 * 2 * 1)
console.log(factorial(6)); // Output: 720 (6 * 5 * 4 * 3 * 2 * 1)


// SOAL NOMOR 5
function printFibonacci(N) {
    let fibonacciSeries = [];
    let a = 0, b = 1, nextTerm;

    for (let i = 1; i <= N; i++) {
        fibonacciSeries.push(a);
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
    return fibonacciSeries;
}

// Penggunaan
console.log(printFibonacci(15)); 
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
