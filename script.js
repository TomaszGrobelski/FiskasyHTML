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

// toggle Menu visible/hidden
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

// zamknięcie Menu jak za szeroki ekran:
function checkWindowSize() {
  const menuMobile = document.querySelector('#menu-mobile');
  const limitWidth = 1024;
  if (window.innerWidth > limitWidth && menuMobile.style.display === 'block') {
    menuMobile.style.display = 'none';
  }
}
window.addEventListener('resize', checkWindowSize);

//ZMIANA JĘZYKA:

// document.addEventListener('DOMContentLoaded', function () {
//   const buttons = document.querySelectorAll('.language-button');

//   buttons.forEach((button) => {
//     button.addEventListener('click', function () {
//       buttons.forEach((btn) => btn.classList.remove('active'));

//       this.classList.add('active');
//     });
//   });
// });


// KARUZELA PRODUKTÓW NA PROMOCJI:

let container = document.querySelector('.discount-moving-container');
let innerContainer = document.querySelector('.discount-inner-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let pressed = false;
let startX;
let currentTranslateX = 0;
const scrollSpeedMultiplier = 1.5; 
const scrollAmount = 200;

// Dla urządzeń desktopowych 
container.addEventListener('mousedown', (e) => {
  pressed = true;
  startX = e.clientX - currentTranslateX;
  container.style.cursor = 'grabbing'; // Dodanie stylu 'grabbing'
});

container.addEventListener('mouseup', () => {
  container.style.cursor = 'grab';
  pressed = false;
});

container.addEventListener('mouseleave', () => {
  pressed = false;
  container.style.cursor = 'grab';
});

container.addEventListener('mousemove', (e) => {
  if (!pressed) return;

  e.preventDefault();

  let x = e.clientX;
  let moveDistance = (x - startX) * scrollSpeedMultiplier;

  moveInnerContainer(moveDistance);
});

// Dla urządzeń mobilnych (touch events)
container.addEventListener('touchstart', (e) => {
  pressed = true;
  startX = e.touches[0].clientX - currentTranslateX;
  container.style.cursor = 'grabbing'; // Działa tylko na desktopach
});

container.addEventListener('touchend', () => {
  pressed = false;
  container.style.cursor = 'grab'; // Działa tylko na desktopach
});

container.addEventListener('touchmove', (e) => {
  if (!pressed) return;

  e.preventDefault();

  let x = e.touches[0].clientX;
  let moveDistance = (x - startX) * scrollSpeedMultiplier;

  moveInnerContainer(moveDistance);
});

// Funkcja przesuwania kontenera
function moveInnerContainer(distance) {
  let maxRight = 0;
  let maxLeft = container.offsetWidth - innerContainer.offsetWidth -30;

  if (distance > maxRight) {
    distance = maxRight;
  } else if (distance < maxLeft) {
    distance = maxLeft;
  }

  innerContainer.style.transform = `translateX(${distance}px)`;
  currentTranslateX = distance;
}

leftArrow.addEventListener('click', () => {
  moveInnerContainer(currentTranslateX + scrollAmount);
});

rightArrow.addEventListener('click', () => {
  moveInnerContainer(currentTranslateX - scrollAmount);
});