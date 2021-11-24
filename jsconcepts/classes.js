function a(name) {
    this.name = name;
    console.log(this.name);
}

var o = new a('prem');
console.log(o);