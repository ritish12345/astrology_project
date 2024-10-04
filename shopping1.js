// Categories names
const categories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
  "Category 6"
];

// Sample products for each category
const products = [
  [
    { name: "bracelet", price: "$10", image: "./images/bracelet-1-Photoroom.png" },
    { name: "Product 2", price: "$15", image: "./images/bracelet-2(1265).jpg" },
    { name: "Product 3", price: "$20", image: "./images/bracelet-3(950).jpg" },
    { name: "Product 4", price: "$25", image: "./images/bracelet-4(239).jpg" },
    { name: "Product 5", price: "$30", image: "./images/bracelet-5(LaJWARD STONE).jpg" },
    { name: "Product 6", price: "$35", image: "./images/bracelet-6(TIGER EYE 259).jpg" },
    { name: "Product 7", price: "$40", image: "./images/bracelet-7(Maitri export 499).jpg" },
    { name: "Product 8", price: "$45", image: "./images/bracelet-8(Fine gems 3249).jpg" }
  ],
  [
    { name: "Product 9", price: "$50", image: "product9.jpg" },
    { name: "Product 10", price: "$55", image: "product10.jpg" },
    { name: "Product 11", price: "$60", image: "product11.jpg" },
    { name: "Product 12", price: "$65", image: "product12.jpg" },
    { name: "Product 13", price: "$70", image: "product13.jpg" },
    { name: "Product 14", price: "$75", image: "product14.jpg" },
    { name: "Product 15", price: "$80", image: "product15.jpg" },
    { name: "Product 16", price: "$85", image: "product16.jpg" }
  ],
  // Repeat for each category with 8 products each
  [
    { name: "Product 17", price: "$90", image: "product17.jpg" },
    { name: "Product 18", price: "$95", image: "product18.jpg" },
    { name: "Product 19", price: "$100", image: "product19.jpg" },
    { name: "Product 20", price: "$105", image: "product20.jpg" },
    { name: "Product 21", price: "$110", image: "product21.jpg" },
    { name: "Product 22", price: "$115", image: "product22.jpg" },
    { name: "Product 23", price: "$120", image: "product23.jpg" },
    { name: "Product 24", price: "$125", image: "product24.jpg" }
  ],
  [
    { name: "Product 25", price: "$130", image: "product25.jpg" },
    { name: "Product 26", price: "$135", image: "product26.jpg" },
    { name: "Product 27", price: "$140", image: "product27.jpg" },
    { name: "Product 28", price: "$145", image: "product28.jpg" },
    { name: "Product 29", price: "$150", image: "product29.jpg" },
    { name: "Product 30", price: "$155", image: "product30.jpg" },
    { name: "Product 31", price: "$160", image: "product31.jpg" },
    { name: "Product 32", price: "$165", image: "product32.jpg" }
  ],
  [
    { name: "Product 33", price: "$170", image: "product33.jpg" },
    { name: "Product 34", price: "$175", image: "product34.jpg" },
    { name: "Product 35", price: "$180", image: "product35.jpg" },
    { name: "Product 36", price: "$185", image: "product36.jpg" },
    { name: "Product 37", price: "$190", image: "product37.jpg" },
    { name: "Product 38", price: "$195", image: "product38.jpg" },
    { name: "Product 39", price: "$200", image: "product39.jpg" },
    { name: "Product 40", price: "$205", image: "product40.jpg" }
  ],
  [
    { name: "Product 41", price: "$210", image: "product41.jpg" },
    { name: "Product 42", price: "$215", image: "product42.jpg" },
    { name: "Product 43", price: "$220", image: "product43.jpg" },
    { name: "Product 44", price: "$225", image: "product44.jpg" },
    { name: "Product 45", price: "$230", image: "product45.jpg" },
    { name: "Product 46", price: "$235", image: "product46.jpg" },
    { name: "Product 47", price: "$240", image: "product47.jpg" },
    { name: "Product 48", price: "$245", image: "product48.jpg" }
  ]
];




// Function to check if user is logged in by making an AJAX request to the server
async function isLoggedIn() {
  const response = await fetch('/session'); // Make a request to the session endpoint
  const data = await response.json();
  return !!data.user; // Returns true if user exists in session
}

// Function to show the login prompt modal
function showLoginPrompt() {
  let modal = document.getElementById('loginPromptModal');
  modal.style.display = 'block'; // Show the modal

  // Close the modal when clicking the 'X' button
  let closeBtn = document.getElementsByClassName('close')[0];
  closeBtn.onclick = function() {
    modal.style.display = 'none';
  };

  // Redirect to the login page when 'Go to Login' is clicked
  let loginBtn = document.getElementById('loginBtn');
  loginBtn.onclick = function() {
    window.location.href = '/login'; // Redirect to login page
  };

  // Close the modal if the user clicks outside of it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}

// Function to add an item to the cart or show the login prompt
async function addToCart(productName) {
  if (!(await isLoggedIn())) {
    showLoginPrompt(); // Show modal if user is not logged in
  } else {
    // User is logged in, add the item to the cart logic goes here
    console.log('Item added to cart:', productName);
    // Add logic here to actually add the product to the cart
  }
}



// Function to create HTML for each category and its products
function createCategoryHTML(category, products) {
  const categoryDiv = document.createElement('div');
  categoryDiv.classList.add('category');

  const categoryHeader = document.createElement('div');
  categoryHeader.classList.add('category-header');
  categoryHeader.innerHTML = `
      <span class="category-name">${category}</span>
      <span class="toggle-arrow">▼</span>
  `;

  const productsDiv = document.createElement('div');
  productsDiv.classList.add('products');

  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <p class="product-name">${product.name}</p>
        <p class="product-price">${product.price}</p>
        <button class="add-to-cart">Add to Cart</button>
    `;

    // Add event listener to the "Add to Cart" button
    const addToCartButton = productDiv.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
      addToCart(product.name); // Pass the product name instead of ID
    });

    productsDiv.appendChild(productDiv);
  });

  categoryDiv.appendChild(categoryHeader);
  categoryDiv.appendChild(productsDiv);

  categoryHeader.addEventListener('click', () => {
    productsDiv.style.display = productsDiv.style.display === 'none' ? 'flex' : 'none';
    categoryHeader.querySelector('.toggle-arrow').textContent = productsDiv.style.display === 'none' ? '▼' : '▲';
  });

  return categoryDiv;
}


// Function to show categories and products
function showCategories() {
  const categoriesDiv = document.getElementById('categories');
  categories.forEach((category, index) => {
    const categoryHTML = createCategoryHTML(category, products[index]);
    categoriesDiv.appendChild(categoryHTML);
  });
}

// Call the function to display categories and products
showCategories();