let name = 'prem';
function a() {
    var name = 'mathar';
    return function z() {
        console.log(name);
    }
}
a()();
console.log(name);