const cards = document.querySelectorAll('.carousel-item');
console.log(cards);

const animations = ['card-move-left', 'card-move-to-center', 'card-gets-in'];

cards[0].style.animation = 'card-restarts ease-out 0.5s';
cards[1].style.animation = 'card-moves-to-center 1s';
cards[2].style.animation = 'card-moves-from-center 1s';

for(let i = 0; i < cards.length; i++){
  cards[i].addEventListener('animationend', (e) => {
    if(e.animationName === 'card-restarts'){
      cards[i].style.animation = 'card-restarts-right ease-out 0.5s';
    }
    else if(e.animationName === 'card-restarts-right'){
      cards[i].style.animation = 'card-moves-to-center 1s';
    }
    else if(e.animationName === 'card-moves-to-center'){
      cards[i].style.animation = 'card-moves-from-center 1s';
    }
    else if(e.animationName === 'card-moves-from-center'){
      cards[i].style.animation = 'card-restarts 0.5s';
    }
  });
}
/* 
cards[1].style.animation = 'card-move-to-center 2s';
cards[1].style.animationFillMode = 'forwards';

cards[2].style.animation = 'card-gets-in 2s';
cards[2].style.animationFillMode = 'forwards'; */

/* 
function restartCardAnimation(card){
  card.style.animation = 
} */
