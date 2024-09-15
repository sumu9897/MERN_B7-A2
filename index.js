//Problem - 1

function calculateDifference(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both inputs must be numbers');
    }
    return a - b;
}
console.log(calculateDifference(10, 4));

//Problem - 2
function isOdd(num) {
    if (typeof num !== 'number') {
        throw new TypeError('Input must be a number');
    }
    return num % 2 !== 0;
}
console.log(isOdd(5));

//Problem - 3
function findMin(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array of numbers');
    }
    return Math.min(...arr);
}

const numbers = [5, 2, 9, 1, 7];
console.log(findMin(numbers));



//Problem - 4
function filterEvenNumbers(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array of numbers');
    }
    return arr.filter(num => num % 2 === 0);
}

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = filterEvenNumbers(numbers4);
console.log(evenNumbers);


//Problem -5
function sortArrayDescending(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array of numbers');
    }
    return arr.slice().sort((a, b) => b - a);
}

const numbers5 = [5, 2, 9, 1, 7];
const sortedNumbers = sortArrayDescending(numbers5);
console.log(sortedNumbers);

//Problem - 6
function lowercaseFirstLetter(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("Mohammad Sumon"));
console.log(lowercaseFirstLetter("MernBatch"));

//Problem - 7

function countVowels(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;

    for (const char of str) {
        if (vowels.has(char)) {
            count++;
        }
    }

    return count;
}


console.log(countVowels("Mohammad Sumon"));
console.log(countVowels("Ostad"));



//Problem - 8
function findAverage(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array of numbers');
    }
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

const numbers8 = [5, 10, 15, 20];
console.log(findAverage(numbers8)); 

