//Mário
const mario = document.querySelector('.mario');
//Cano
const pipe = document.querySelector('.pipe');

//Pulo
const jump =() => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

}

const loop  = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    var reset = document.getElementById(reset);
    
    if(pipePosition <= 107 && marioPosition < 90 && pipePosition > 0 ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '/Sprints/game over.png'
  

        
        clearInterval(loop);
        
    }


} ,10)


document.addEventListener('keydown', jump);
