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
let currentPosition = 0; // Początkowa pozycja

// Obliczamy szerokość karty (wliczając odstępy)
function getCardWidth() {
  const card = cards[0];
  const cardStyle = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth;
  const cardMargin = parseInt(cardStyle.marginRight);
  return cardWidth + cardMargin;
}

// Funkcja do aktualizacji widocznych kart
function updateCards() {
  const visibleCards = 3; // Liczba widocznych kart na ekranie

  cards.forEach((card, index) => {
    if (index >= currentPosition && index < currentPosition + visibleCards) {
      card.style.display = 'flex'; // Pokazujemy widoczne karty
    } else {
      card.style.display = 'none'; // Ukrywamy niewidoczne karty
    }
  });
}

// Obsługa strzałki w prawo (przesunięcie w prawo)
rightArrow.addEventListener('click', () => {
  if (currentPosition < cards.length - 3) {
    // Sprawdzamy, czy nie jesteśmy na końcu
    currentPosition++;
    updateCards();
  }
});

// Obsługa strzałki w lewo (przesunięcie w lewo)
leftArrow.addEventListener('click', () => {
  if (currentPosition > 0) {
    // Sprawdzamy, czy nie jesteśmy na początku
    currentPosition--;
    updateCards();
  }
});

// Na początku ustawiamy widoczność kart
updateCards();

// Aktualizujemy szerokość kart przy zmianie rozmiaru okna
window.addEventListener('resize', () => {
  updateCards();
});
