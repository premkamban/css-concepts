const pal = (arr) => {
    console.log(arr);
    console.log(arr.split('').reverse());
    return arr.split('').reverse().join('') === arr
};
// console.log(pal('minim'));

var flattendObj = {};
const flattenObject = (obj, keyName) => {
    return Object.keys(obj).forEach(key => {
        var newKey = `${keyName}_${key}`
        if (typeof obj[key] === "object") {
            // calling the function again
            flattenObject(obj[key], newKey);
        } else {
            flattendObj[newKey] = obj[key];
        }
    });
};
// console.log(flattendObj);
var user = {
    name: "Vishal",
    address: {
        primary: {
            house: "109",
            street: {
                main: "21",
                cross: "32"
            }
        }
    }
};
console.log(flattenObject(user, 'name'));