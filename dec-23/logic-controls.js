
for (var i = 0; i < 10; i++) {
    console.log(i+1);
}

var i = 10;
while (i > 0) {
    console.log(i);
    i--;
}

var logicControl = true;

if (logicControl === true) {
    console.log('do stuff');
    logicControl = "Jedi";
}

switch (logicControl) {
    case "Jedi":
        console.log('may the force be with you.');
        break;
    case "Sith":
        console.log('Join me and together we will rule the galaxy');
        break;
    default: 
        console.log("Foobar");
        break;
}





