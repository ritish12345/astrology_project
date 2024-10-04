// Function to update the cart count display and store it in local storage
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
      cartCountElement.textContent = cartCount;
  }
  localStorage.setItem('cartCount', cartCount); // Store the cart count in local storage
}

// Retrieve cart count from local storage or set to 0 if not present
let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;

// Call the function to update the cart count display on page load
updateCartCount();
