
let index = 1;
let limit = 5;

let cancel= setInterval(printAndCount, 1000);

function printAndCount() {
    console.log(index);
    
    if (index === limit) {
        clearInterval(cancel);
    }

    index++;
}

setTimeout(function() {
    console.log('hello world');
}, 6000);

// show example with queuing setTimeouts. 


