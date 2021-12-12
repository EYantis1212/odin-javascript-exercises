const repeatString = function (string, num) {
    if (num >= 0) {
        let str = "";
        for (let i = 0; i < num; i++) {
            str = str.concat(string);
        }
        return str;
    } else return "ERROR";
};
// repeatString("hey", 3);
// repeatString("hey", 3);
// repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
