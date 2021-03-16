let name = {
    firstname: 'Prem',
    lastname: 'Kamban',

}
const printFullname = function () {
    console.log(this.firstname + this.lastname);
}

printFullname.call(name);
printFullname.apply(name);
printFullname.bind(name)();