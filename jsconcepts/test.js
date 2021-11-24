function add(c) {
    // this.c = c;
    console.log(this.a);
    console.log(this.b);
    console.log(c);
    return this.a + this.b + c;
}
const addTwo = {};
addTwo.a = 5;
addTwo.b = 6;
console.log(addTwo);
const bi = add.bind(addTwo, 6);
//console.log(add.bind(addTwo, 6));
console.log(add.call(addTwo, 6));
// const va = ['a', 'b', 'v', 'h'];
// for (let v in va) {
//     console.log('something fishy');
//     console.log(v);
// }

// for (let v of va) {
//     console.log('something wrecked');
//     console.log(v);
// }