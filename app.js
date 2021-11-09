const cards = document.querySelectorAll('.carousel-item');

cards[0].style.animation = 'card-restarts ease-out 1s';
cards[1].style.animation = 'card-moves-to-center 2s';
cards[2].style.animation = 'card-moves-from-center 2s';

for(let i = 0; i < cards.length; i++){
  cards[i].addEventListener('animationend', (e) => {
    if(e.animationName === 'card-restarts'){
      cards[i].style.animation = 'card-restarts-right ease-out 1s';
    }
    else if(e.animationName === 'card-restarts-right'){
      cards[i].style.animation = 'card-moves-to-center 2s';
    }
    else if(e.animationName === 'card-moves-to-center'){
      cards[i].style.animation = 'card-moves-from-center 2s';
    }
    else if(e.animationName === 'card-moves-from-center'){
      cards[i].style.animation = 'card-restarts ease-out 1s';
    }
  });
}
