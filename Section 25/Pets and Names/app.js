
// // Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const ul = document.querySelector('#list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const input1 = product.value;
    const input2 = qty.value;
    const li = document.createElement('li');
    li.innerText = `${input2} ${input1}`;
    ul.insertAdjacentElement('beforeend', li);
    product.value = '';
    qty.value = '';
})