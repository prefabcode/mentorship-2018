// differences between var, let and const with regards to scope.
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block

var myBool = true;

if (myBool) {
    let myStr = "Will this be visible outside the if statement?";
    var myVarStr = "Will this be visible outside the if statement?";
}

console.log('let variable outside if says:', myStr);
console.log('var variable outside if says:', myVarStr);

var i = 0;
while (i < 10) {
    i++;
    let k = i;
    var j = i;
}

// console.log(k);
// console.log(j);

// block scope can be anything that has brackets. 
{
    const bestJobEver = "Programmer";
}

console.log(bestJobEver);
