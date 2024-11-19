// document.addEventListener('DOMContentLoaded', function () {
//   function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
//   }

//   const productId = getQueryParam('id');

//   if (productId) {
//     fetch('../data/products.json')
//       .then((response) => response.json())
//       .then((products) => {
//         const product = products.find((product) => product.id == productId);

//         if (product) {
//           document.getElementById('product-title').textContent = product.title;
//           document.getElementById('product-image').src = product.image;
//           document.getElementById('product-netto-price').textContent = product.nettoPrice;
//           document.getElementById('product-brutto-price').textContent = product.bruttoPrice;
//           document.getElementById('product-producer').textContent = product.producer;

//           //Obsługa wyszukiwania:
//           const searchInput = document.getElementById('search-input');
//           const searchInputMobile = document.getElementById('search-input-mobile');
//           if (searchInput) {
//             searchInput.addEventListener('input', function () {
//               const searchQuery = searchInput.value.trim();
//               if (searchQuery !== '') {
//                 window.location.href = `catalog.html?search=${encodeURIComponent(searchQuery)}`;
//               }
//             });
//           }
//           if (searchInputMobile) {
//             searchInputMobile.addEventListener('input', function () {
//               const searchQuery = searchInputMobile.value.trim();
//               if (searchQuery !== '') {
//                 window.location.href = `catalog.html?search=${encodeURIComponent(searchQuery)}&fromMobile=true`;
//               }
//             });
//           }

//         } else {
//           document.querySelector('.product-details').innerHTML = '<p>Nie znaleziono produktu.</p>';
//         }
//       });
//   }
// });

// Pokazanie/howanie bocznego aside
const showIndustriesButton = document.querySelector('.show-industries');
const industriesContainer = document.querySelector('.industries-container');

if (showIndustriesButton && industriesContainer) {
  // Pokaż kontener, gdy najedziesz na przycisk
  showIndustriesButton.addEventListener('mouseover', function () {
    industriesContainer.classList.add('visible');
  });

  // Ukryj kontener, gdy opuścisz przycisk
  showIndustriesButton.addEventListener('mouseout', function () {
    industriesContainer.classList.remove('visible');
  });
}

// -------------------------------------------------------------------------------------------------------------------------
// Powiększanie kółka

document.addEventListener('DOMContentLoaded', () => {
  const whiteCircle = document.querySelector('.white-circle');
  const fancyboxLink = whiteCircle.querySelector('a');
  let isExpanded = false;

  if (whiteCircle) {
    const toggleExpandOrOpen = (event) => {
      event.preventDefault();

      if (isExpanded) {
        whiteCircle.classList.remove('expand');
        isExpanded = false;

        Fancybox.show([
          {
            src: fancyboxLink.href,
            type: 'image',
            opts: {
              width: 600, 
              height: 400, 
              autoSize: false,
              // smallBtn: true, 
            },
          },
        ]);
        return;
      }

      const isLargeScreen = window.innerWidth >= 768;

      if (isLargeScreen) {
        whiteCircle.classList.add('expand');
        whiteCircle.classList.remove('expand-small');
      } else {
        whiteCircle.classList.add('expand-small');
        whiteCircle.classList.remove('expand');
      }

      isExpanded = true;
    };

    whiteCircle.addEventListener('click', toggleExpandOrOpen);

    window.addEventListener('resize', () => {
      const isLargeScreen = window.innerWidth >= 768;

      if (isLargeScreen) {
        whiteCircle.classList.remove('expand-small');
      } else {
        whiteCircle.classList.remove('expand');
      }

      isExpanded = false;
    });

    Fancybox.bind('[data-fancybox="gallery"]', {
      afterShow: () => {
        whiteCircle.classList.add('expand-small');
        whiteCircle.classList.remove('expand');
      },
      afterClose: () => {
        whiteCircle.classList.remove('expand', 'expand-small');
        isExpanded = false;
      },
    });

    if (fancyboxLink) {
      fancyboxLink.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }
  }
});
