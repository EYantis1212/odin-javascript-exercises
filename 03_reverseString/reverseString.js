const reverseString = function (str) {
    let splitStr = str.split("");
    let reverseArr = splitStr.reverse();
    let joinArr = reverseArr.join("");
    return joinArr;
};
// console.log(reverseString("Hello"));
// Do not edit below this line
module.exports = reverseString;
