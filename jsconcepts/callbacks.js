var val = {
    id: 203,
    Person: {
        name: 'sample',
        age: 26,
        address: 'kolathur',
        area: 'chennai'
    }
};
var obj = { ...val };
obj.Person.area = 'cmbt';
obj.id = 666;

console.log(val);
console.log(obj);

class Func {
    constructor() {
        this.name = name;
    }
}
console.log(typeof Func);