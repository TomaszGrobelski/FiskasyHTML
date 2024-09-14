// Toggle BlueView / Red View
document.querySelectorAll('.switch-button').forEach((button) => {
  button.addEventListener('click', () => {
    const blueView = document.querySelector('#blue-view');
    const redView = document.querySelector('#red-view');

    if (blueView.style.display === 'block' || blueView.style.display === '') {
      blueView.style.display = 'none';
      redView.style.display = 'block';
    } else {
      blueView.style.display = 'block';
      redView.style.display = 'none';
    }
  });
});

// Toggle Menu visible/hidden
document.querySelectorAll('.menu-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const menuMobile = document.querySelector('#menu-mobile');

    if (menuMobile.style.display === 'block') {
      menuMobile.style.display = 'none';
    } else {
      menuMobile.style.display = 'block';
    }
  });
});

// Zamknięcie Menu jak za szeroki ekran:
function checkWindowSize() {
  const menuMobile = document.querySelector('#menu-mobile');
  const limitWidth = 1024;
  if (window.innerWidth > limitWidth && menuMobile.style.display === 'block') {
    menuMobile.style.display = 'none';
  }
}
window.addEventListener('resize', checkWindowSize);

//Language switch UA/GB/PL
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.language-button');

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      buttons.forEach((btn) => btn.classList.remove('active'));

      this.classList.add('active');
    });
  });
});

//Karuzela zdjęć:
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const cards = document.querySelectorAll('.discount-card');
let currentPosition = 0;

function getCardWidth() {
  const card = cards[0];
  const cardStyle = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth;
  const cardMargin = parseInt(cardStyle.marginRight);
  return cardWidth + cardMargin;
}

function updateCards() {
  const visibleCards = 3; 

  cards.forEach((card, index) => {
    if (index >= currentPosition && index < currentPosition + visibleCards) {
      card.style.display = 'flex'; 
    } else {
      card.style.display = 'none'; 
    }
  });
}

rightArrow.addEventListener('click', () => {
  if (currentPosition < cards.length - 3) {
    currentPosition++;
    updateCards();
  }
});

leftArrow.addEventListener('click', () => {
  if (currentPosition > 0) {
    currentPosition--;
    updateCards();
  }
});

updateCards();

window.addEventListener('resize', () => {
  updateCards();
});
