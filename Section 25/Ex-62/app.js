const input = document.querySelector('#username');
const h1 = document.querySelector('h1');

input.addEventListener('input', function(e) {
    if (input.value != '') {
        const inp = input.value;
        h1.innerText = `Welcome, ${inp}`;
    }
})