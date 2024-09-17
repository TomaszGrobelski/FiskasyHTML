// Sprawdzenie, na której stronie się znajdujemy
const currentPage = window.location.pathname;

function getSearchParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get('search') || '';
}

// Obsługa strony głównej i mobilnej
if (currentPage.includes('index.html') || currentPage === '/') {
  document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchInputMobile = document.getElementById('search-input-mobile');

    // Wyszukiwanie desktopowe
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const searchQuery = searchInput.value.trim();
        if (searchQuery !== '') {
          window.location.href = `pages/catalog.html?search=${encodeURIComponent(searchQuery)}`;
        }
      });
    }

    // Wyszukiwanie mobilne
    if (searchInputMobile) {
      searchInputMobile.addEventListener('input', function () {
        const searchQuery = searchInputMobile.value.trim();
        if (searchQuery !== '') {
          window.location.href = `pages/catalog.html?search=${encodeURIComponent(searchQuery)}&fromMobile=true`;
        }
      });
    }
  });

  // Obsługa strony katalogu
} else if (currentPage.includes('catalog.html')) {
  document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchInputMobile = document.getElementById('search-input-mobile');
    const menuMobile = document.querySelector('#menu-mobile');

    const searchQuery = getSearchParam();
    const isFromMobile = new URLSearchParams(window.location.search).get('fromMobile') === 'true';

    if (searchQuery) {
      if (isFromMobile) {
        //mobile
        if (menuMobile) {
          menuMobile.style.display = 'block';

          if (searchInputMobile) {
            searchInputMobile.value = searchQuery;
            searchInputMobile.focus();
          }
        }
      } else {
        // desktop
        if (searchInput) {
          searchInput.value = searchQuery;
          searchInput.focus();
        }
        filterProducts(searchQuery);
      }
    }
  });

  function filterProducts(query) {
    console.log('Filtrowanie produktów na podstawie:', query);
    // Tutaj możesz dodać logikę do filtrowania produktów
  }
}
