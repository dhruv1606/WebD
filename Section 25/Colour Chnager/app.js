const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function() {
    const ccolor = randomColor();
    document.body.style.backgroundColor = ccolor;
    h1.innerText = ccolor;
})

const randomColor = function() {
    const i = Math.floor(Math.random() * 255);
    const j = Math.floor(Math.random() * 255);
    const k = Math.floor(Math.random() * 255);
    return `rgb(${i}, ${j}, ${k})`;
}

