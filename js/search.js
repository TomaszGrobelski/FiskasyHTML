// Wyszukiwanie produktów:

// const searchInput = document.getElementById('search-input');

// searchInput.addEventListener('input', function () {
//   const searchQuery = searchInput.value.trim();

//   if (searchQuery !== '' && !window.location.href.includes('catalog.html')) {
//     //   window.location.href = `catalog.html?search=${encodeURIComponent(searchQuery)}`;
//     window.location.href = `pages/catalog.html`;
//   }
// });

// Sprawdzenie, na której stronie się znajdujemy
const currentPage = window.location.pathname;
function getSearchParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get('search') || '';
}

if (currentPage.includes('index.html') || currentPage === '/') {
  const searchInput = document.getElementById('search-input');

  searchInput.addEventListener('input', function () {
    const searchQuery = searchInput.value.trim();

    if (searchQuery !== '') {
      window.location.href = `pages/catalog.html?search=${encodeURIComponent(searchQuery)}`;
    }
  });
} else if (currentPage.includes('catalog.html')) {
  const searchInput = document.getElementById('search-input');

  window.addEventListener('DOMContentLoaded', function () {
    const searchQuery = getSearchParam();
    if (searchQuery) {
      searchInput.value = searchQuery;

      searchInput.focus();
      filterProducts(searchQuery);
    }
  });

  function filterProducts(query) {
    console.log('Filtrowanie produktów na podstawie:', query);
  }
}
