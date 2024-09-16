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
        const product = products.find((product) => product.id == productId);

        if (product) {
          document.getElementById('product-title').textContent = product.title;
          document.getElementById('product-image').src = product.image;
          document.getElementById('product-netto-price').textContent = product.nettoPrice;
          document.getElementById('product-brutto-price').textContent = product.bruttoPrice;
          document.getElementById('product-producer').textContent = product.producer;

          //Obsługa wyszukiwania:
          const searchInput = document.getElementById('search-input');
          const searchInputMobile = document.getElementById('search-input-mobile');
          if (searchInput) {
            searchInput.addEventListener('input', function () {
              const searchQuery = searchInput.value.trim();
              if (searchQuery !== '') {
                window.location.href = `catalog.html?search=${encodeURIComponent(searchQuery)}`;
              }
            });
          }
          if (searchInputMobile) {
            searchInputMobile.addEventListener('input', function () {
              const searchQuery = searchInputMobile.value.trim();
              if (searchQuery !== '') {
                window.location.href = `catalog.html?search=${encodeURIComponent(searchQuery)}&fromMobile=true`;
              }
            });
          }
          
        } else {
          document.querySelector('.product-details').innerHTML = '<p>Nie znaleziono produktu.</p>';
        }
      });
  }
});
