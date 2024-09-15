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


