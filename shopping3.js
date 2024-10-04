// Function to check if user is logged in
function isLoggedIn() {
    return !!localStorage.getItem('userToken'); // Replace with your authentication logic
}

// Function to show the login prompt modal
function showLoginPrompt() {
    let modal = document.getElementById('loginPromptModal');
    modal.style.display = 'block'; // Show the modal

    // Close the modal when clicking the 'X' button
    let closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Redirect to the login page when 'Go to Login' is clicked
    let loginBtn = document.getElementById('loginBtn');
    loginBtn.onclick = function() {
        window.location.href = '/login'; // Redirect to login page
    }

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// Function to add an item to the cart or show the login prompt
function addToCart(productId) {
    if (!isLoggedIn()) {
        showLoginPrompt(); // Show modal if user is not logged in
    } else {
        addItemToCart(productId); // Otherwise, add item to cart
    }
}

// Example function to add item to the cart (if logged in)
function addItemToCart(productId) {
    console.log('Item added to cart:', productId);
    // Add your logic here to add the item to the cart
}
