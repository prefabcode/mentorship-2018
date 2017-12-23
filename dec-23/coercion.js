var myVal = 0;
// loose equality check
if (myVal == false) {
    console.log("What just happened?");
}

myVal = "3";

if (myVal == 3) {
    console.log("JavaScript is trying to be helpful");
}
// strict equality check
if (myVal === 3) {
    console.log("this won't print");
}

