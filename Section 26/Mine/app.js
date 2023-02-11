const input = document.querySelector('input');
const butt1 = document.querySelector('#butt1');
const butt2 = document.querySelector('#butt2');
const reset = document.querySelector('#reset');
const h1 = document.querySelector('h1');
let inpValue = 0;
let i=0; 
let j=0;
printScore();

input.addEventListener('click', function() {
    inpValue = input.value;
    console.log(inpValue);
})

butt1.addEventListener('click', function() {
    if (i < inpValue && j < inpValue) {
        i+=1;
        printScore();
    }
})

butt2.addEventListener('click', function() {
    if (i < inpValue && j < inpValue) {
        j+=1;
        printScore();
    }
})

reset.addEventListener('click', function() {
    i=0;
    j=0;
    printScore();
})

function printScore() {
    h1.innerText = `${i} to ${j}`;
}