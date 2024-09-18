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
// const leftArrow = document.querySelector('.left-arrow');
// const rightArrow = document.querySelector('.right-arrow');
// const cards = document.querySelectorAll('.discount-card');
// const discountBox = document.querySelector('.discount-moving-box'); // The container for all cards
// let currentPosition = 0;

// function getCardWidth() {
//   const card = cards[0];
//   const cardStyle = window.getComputedStyle(card);
//   const cardWidth = card.offsetWidth;
//   const cardMargin = parseInt(cardStyle.marginRight);
//   return cardWidth + cardMargin; // Total width including margin
// }

// function updateCards() {
//   const cardWidth = getCardWidth();
//   const totalTranslate = -(currentPosition * cardWidth); // Calculate the total translate value
//   discountBox.style.transform = `translateX(${totalTranslate}px)`; // Move the entire box
// }

// rightArrow.addEventListener('click', () => {
//   if (currentPosition < cards.length - 3) {
//     // Ensure we don't go beyond available cards
//     currentPosition++;
//     updateCards(); // Update the position and animate
//   }
// });

// leftArrow.addEventListener('click', () => {
//   if (currentPosition > 0) {
//     // Ensure we don't go below the first card
//     currentPosition--;
//     updateCards(); // Update the position and animate
//   }
// });

// updateCards(); // Initial setup

// window.addEventListener('resize', () => {
//   updateCards(); // Recalculate position on window resize
// });

let container = document.querySelector(".discount-moving-container");
let innerContainer = document.querySelector(".discount-inner-container");

let pressed = false;
let startX;
let x;
let currentTranslateX = 0;
const scrollSpeedMultiplier = 1.5;  // Dodaj mnożnik szybkości

container.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.clientX - currentTranslateX;
  container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
  container.style.cursor = "grab";
  pressed = false;
});

container.addEventListener("mouseleave", () => {
  pressed = false;
  container.style.cursor = "grab";
});

container.addEventListener("mousemove", (e) => {
  if (!pressed) return;

  e.preventDefault();

  x = e.clientX;
  let moveDistance = (x - startX) * scrollSpeedMultiplier; // Zastosuj mnożnik szybkości

  let maxRight = 0;
  let maxLeft = container.offsetWidth - innerContainer.offsetWidth;

  if (moveDistance > maxRight) {
    moveDistance = maxRight;
  } else if (moveDistance < maxLeft) {
    moveDistance = maxLeft;
  }

  innerContainer.style.transform = `translateX(${moveDistance}px)`;
  currentTranslateX = moveDistance;
});

