let arr = [1, 2, 3, 3, 4, 56, 67, 67, 89,];
arr = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
});
console.log(arr);