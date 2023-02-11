// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

for (let i = 0; i < 150; i++) {
    const div = document.createElement('div');
    const setdiv = document.body.appendChild(div);
    const img = document.createElement('img');
    let p = document.createElement('p');
    setdiv.appendChild(img);
    setdiv.appendChild(p);
    p.innerText = `#${i+1}`;
    let src1 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    img.src = `${src1}${i+1}.png`;
}