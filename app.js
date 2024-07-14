let str = '31 45 12 67 34 86 23 37 19 41';

let numbers = str.split(' ').map(Number)

let filteredNumbers = numbers.filter(num => num < 40)

let sum = filteredNumbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // Output: 156
