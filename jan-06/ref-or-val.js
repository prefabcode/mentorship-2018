// is JavaScript pass by reference or pass by value?
// number, string, Boolean, undefined, and null pass by value
// objects passed by reference. 
var value = 10;

console.log("Before any function calls:", value);

changeValueWithArgs(value);

console.log("After calling changeValueWithArgs:", value); // what is the result? Why?

changeValue();
console.log("After calling changeValue", value); // what is the result? Why? 


var obj = {name:'Lennie', age:29};

changeAge(obj);
console.log(obj);

function changeValueWithArgs(value) {
    value++;
}

function changeValue() {
    value++;
}

function changeAge(obj) {
    if (obj.hasOwnProperty("age")) {
        obj.age++;
    }
}







