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

