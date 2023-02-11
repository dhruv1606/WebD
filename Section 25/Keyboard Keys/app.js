const input = document.querySelector('input');
const p = document.querySelector('p');
input.addEventListener('keydown', function(e) {
    switch(e.code) {
        case 'ArrowUp' : {
            p.innerText = 'UP!';
            break;
        }
        case 'ArrowDown' : {
            p.innerText = 'DOWN!';
            break;
        }
        case 'ArrowLeft' : {
            p.innerText = 'LEFT!';
            break;
        }
        case 'ArrowRight' : {
            p.innerText = 'RIGHT!';
            break;
        }
        default: {
            p.innerText = 'SOME OTHER KEY!';
            break;
        }
    }
})