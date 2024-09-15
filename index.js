//Problem - 1

function calculateDifference(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both inputs must be numbers');
    }
    return a - b;
}
console.log(calculateDifference(10, 4));
