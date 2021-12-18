const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    let arrSum = 0;
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }
    return arrSum;
};

const power = function (a, b) {
    return a ** b;
};

const multiply = function (arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product = product * arr[i];
    }
    return product;
};
console.log(multiply([2, 3, 4, 5, 6, 7, 8]));
const factorial = function (num) {
    let f = 1;
    for (i = num; i >= 1; i--) {
        f = f * i;
    }
    return f;
};
console.log(factorial(10));
// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
