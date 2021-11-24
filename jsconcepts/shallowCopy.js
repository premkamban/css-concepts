let a = 'prem';
let b = a;
a = 'ass';
console.log(b);


let obj = {
    name: 'prem',
    age: 89,
    address: {
        area: 'bangalore',
        pin: 99
    }
}

let obj1 = { ...obj };
obj.address.pin = 51;
obj1 = { ...obj, address: { area: 'chennai', pin: 510608 } }
obj.address.pin = 666;
console.log(obj, obj1);