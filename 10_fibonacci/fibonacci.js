const fibonacci = function (num) {
    let n1 = 0;
    let n2 = 1;
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            next = n1 + n2;
            n1 = n2;
            n2 = next;
        }
        return n1;
    } else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
