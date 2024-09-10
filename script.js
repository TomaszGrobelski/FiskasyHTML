document.querySelectorAll('.switch-button').forEach((button) => {
  button.addEventListener('click', () => {
    const blueView = document.querySelector('#blue-view');
    const redView = document.querySelector('#red-view');

    // Toggle the visibility of views
    if (blueView.style.display === 'block' || blueView.style.display === '') {
      blueView.style.display = 'none';
      redView.style.display = 'block';
    } else {
      blueView.style.display = 'block';
      redView.style.display = 'none';
    }
  });
});
