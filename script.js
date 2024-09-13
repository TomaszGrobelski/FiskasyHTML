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
