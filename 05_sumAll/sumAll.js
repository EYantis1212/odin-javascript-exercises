const sumAll = function (x, y) {
    let sum = 0;
    if (typeof x === "number" && typeof y === "number" && y >= 0 && x >= 0) {
        if (x < y) {
            for (let i = x; i <= y; i++) {
                sum += i;
            }
            return sum;
        } else if (x > y) {
            for (let i = y; i <= x; i++) {
                sum += i;
            }
            return sum;
        }
    } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
