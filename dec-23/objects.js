// Objects are different from other languages.

var obj = {name: 'Lennie', age: 29};
console.log(obj);

function Car() {
    
    this.brand = "Mercedes";
    this.color = "Red"
    this.transmission = "Automatic"
    this.milage = 100
    
    return this;
}
// 
var myCar = Car();

console.log(myCar);

