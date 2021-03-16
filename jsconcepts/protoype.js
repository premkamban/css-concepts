let arr = ['proto', 'promise', () => { console.log('oops') }];

// let arr1 = ['proto is not things'];
// arr1.__proto__ = arr;
// console.log(arr1[2]());
// console.log(arr1.__proto__.__proto__.__proto__);

// Array.prototype.mapi = function () {
//     return () => console.log('mathar');
// };
// arr.mapi();
console.log(arr.__proto__);