document.addEventListener('DOMContentLoaded', function () {
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const productId = getQueryParam('id');

  if (productId) {
    fetch('../data/products.json')
      .then((response) => response.json())
      .then((products) => {
        const product = products.find((p) => p.id == productId);

        if (product) {
          document.getElementById('product-title').textContent = product.title;
          document.getElementById('product-image').src = product.image;
          document.getElementById('product-netto-price').textContent = product.nettoPrice;
          document.getElementById('product-brutto-price').textContent = product.bruttoPrice;
          document.getElementById('product-producer').textContent = product.producer;
        } else {
          document.querySelector('.product-details').innerHTML = '<p>Nie znaleziono produktu.</p>';
        }
      });
  }
});
