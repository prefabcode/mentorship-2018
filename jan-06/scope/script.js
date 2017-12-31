var veryImportantVariable = {url: "/api/getId"};

setTimeout(function() {
    console.log("In Script 1", veryImportantVariable);
    veryImportantFunction();
}, 5000);

function veryImportantFunction() {
    console.log('this is the most important function in my app');
}

// veryImportantVariable placed on window
console.log(window);








