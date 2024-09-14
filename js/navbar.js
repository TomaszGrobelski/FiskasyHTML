// Toggle Menu visible/hidden -------------------------------------------------
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

// Zamknięcie Menu jak za szeroki ekran: --------------------------------------
function checkWindowSize() {
  const menuMobile = document.querySelector('#menu-mobile');
  const limitWidth = 1024;
  if (window.innerWidth > limitWidth && menuMobile.style.display === 'block') {
    menuMobile.style.display = 'none';
  }
}
window.addEventListener('resize', checkWindowSize);

//Language switch UA/GB/PL ------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.language-button');

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      buttons.forEach((btn) => btn.classList.remove('active'));

      this.classList.add('active');
    });
  });
});
