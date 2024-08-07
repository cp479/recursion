// Iterative version of Fibonacci sequence generator
function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray;
}

// Recursive version of Fibonacci sequence generator
function fibsRec(n, fibArray = [0, 1]) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return fibArray.slice(0, 2);

    const nextFib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    fibArray.push(nextFib);

    if (fibArray.length === n) {
        return fibArray;
    } else {
        return fibsRec(n, fibArray);
    }
}

// Test cases
console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibs(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibs(1)); // Output: [0]
console.log(fibs(0)); // Output: []

console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibsRec(1)); // Output: [0]
console.log(fibsRec(0)); // Output: []
