const removeFromArray = function (arr, ...removedEle) {
    let newArr = arr.filter((item) => !removedEle.includes(item));
    return newArr;
};
console.log(removeFromArray([1, 2, 3, 4], 2, 3));
// Do not edit below this line
// module.exports = removeFromArray;
