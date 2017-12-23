// JavaScript has 7 types. 6 primitives and 1 complex. 
// Number, String, Boolean, undefined, Null, Symbol (introduced in ES6)
// Object.

var myVal = 20;
console.log("Type of myVal is:" + typeof myVal);

myVal = "foobar";
console.log("Type of myVal is:" + typeof myVal);

myVal = {name:'lennie', favColor:'green'}; 
console.log("Type of myVal is:" + typeof myVal);

myVal = false;
console.log("Type of myVal is:" + typeof myVal);

myVal = undefined;
console.log("Type of myVal is:" + typeof myVal);

myVal = null;
console.log("Type of myVal is:" + typeof myVal);
console.log("Value of Null is " + myVal);

myVal = Symbol("mySymbol");
console.log(typeof myVal);

