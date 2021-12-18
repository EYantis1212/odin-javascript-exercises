const palindromes = function (str) {
    let string = str
        .split("")
        .join("")
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
    let splitReverse = str
        .split("")
        .reverse()
        .join("")
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
    console.log(string);
    console.log(splitReverse);
    if (string === splitReverse) {
        return true;
    } else return false;
};
// Do not edit below this line
module.exports = palindromes;
