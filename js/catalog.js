// document.addEventListener('DOMContentLoaded', function () {
//   const productsContainer = document.querySelector('.products-container');
//   const searchInput = document.getElementById('search-input'); // Upewnij się, że ten element istnieje na stronie
//   const searchInputMobile = document.getElementById('search-input-mobile'); // Upewnij się, że ten element istnieje na stronie

//   function fetchAndRenderProducts(query = '') {
//     fetch('../data/products.json')
//       .then((response) => response.json())
//       .then((products) => {
//         // Filtruj produkty, jeśli jest zapytanie
//         const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));

//         // Wyczyść kontener przed dodaniem nowych produktów
//         productsContainer.innerHTML = '';

//         // Renderowanie produktów
//         filteredProducts.forEach((product) => {
//           const productCard = document.createElement('a');
//           productCard.href = `/pages/product.html?id=${product.id}`;
//           productCard.className = 'product-card';

//           productCard.innerHTML = `
//               <div class="product-card">
//                 <p class="product-card__title">${product.title}</p>
//                 <img src="${product.image}" class="product-card__image" />
//                 <div class="price-box">
//                   <span class="price-box__value">OD</span>
//                   <span class="price-box__value">${product.bruttoPrice} zł</span>
//                 </div>
//               </div>
//             `;

//           productsContainer.appendChild(productCard);
//         });
//       })
//       .catch((error) => console.error('Error fetching products:', error));
//   }

//   // Fetch products initially
//   fetchAndRenderProducts();

//   // Add event listener for the search input
//   if (searchInput) {
//     searchInput.addEventListener('input', function () {
//       const searchQuery = searchInput.value.trim();
//       fetchAndRenderProducts(searchQuery);
//     });
//   }
//   if (searchInputMobile) {
//     searchInputMobile.addEventListener('input', function () {
//       const searchQuery = searchInputMobile.value.trim();
//       fetchAndRenderProducts(searchQuery);
//     });
//   }
// });
