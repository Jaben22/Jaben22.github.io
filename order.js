/* SHOPPING CART TOGGLE */
document.addEventListener("DOMContentLoaded", function () {
    const cart = document.getElementById("cart-container");
    const overlay = document.getElementById("overlay");
    const toggleCartBtn = document.getElementById("toggle-cart");
    const closeCartBtn = document.getElementById("close-cart");

    // OPEN CART
    function openCart() {
        cart.style.display = "block";
        overlay.style.display = "block";
    }

    // CLOSE CART
    function closeCart() {
        cart.style.display = "none";
        overlay.style.display = "none";
    }

    toggleCartBtn.addEventListener("click", openCart);
    closeCartBtn.addEventListener("click", closeCart);
    overlay.addEventListener("click", closeCart);
});




/* SHOPPING CART */
document.addEventListener("DOMContentLoaded", function () {
    let cart = []; // Store items in an array
    const cartList = document.getElementById("cart-items");
    const cartContainer = document.getElementById("cart-container");
    const toggleCartBtn = document.getElementById("toggle-cart");
    const submitButton = document.getElementById("submit-order");

    toggleCartBtn.addEventListener("click", function () {
        cartContainer.classList.toggle("hidden");
    });

    // Prices for each product (in pesos)
    const productPrices = {
        "ChocoChip50g": 75,
        "ChocoChip100g": 105,
        "LotusBiscoff50g": 90,
        "LotusBiscoff100g": 130,
        "Campfire50g": 85,
        "Campfire100g": 110,
        "Monster50g": 95,
        "Monster100g": 140,
        "RedVelvet50g": 85,
        "RedVelvet100g": 110,
        "Matcha50g": 85,
        "Matcha100g": 110,
        "Blacksmore50g": 100,
        "Blacksmore100g": 160
    };

    // +- Toggle
    document.querySelectorAll(".button-container").forEach(container => {
        const minusButton = container.querySelector(".counter-button.minus");
        const plusButton = container.querySelector(".counter-button.plus");
        const counterValue = container.querySelector(".counter-value");
        const addToCartButtons = container.querySelectorAll(".cart-button");
        let count = 1;

        // Increment 
        plusButton.addEventListener("click", function () {
            count++;
            counterValue.textContent = count;
        });

        // Decrement if count is greater than 1
        minusButton.addEventListener("click", function () {
            if (count > 1) {
                count--;
                counterValue.textContent = count;
            }
        });

        // Add event listener to each cart button
        addToCartButtons.forEach(button => {
            button.addEventListener("click", function () {
                let productName = button.getAttribute("data-name"); // Get name from clicked button
                let productId = button.id; // Product ID

                let itemIndex = cart.findIndex(item => item.name === productName);

                if (itemIndex !== -1) {
                    cart[itemIndex].quantity += count;
                } else {
                    cart.push({ name: productName, quantity: count, price: productPrices[productId] });
                }

                updateCartUI();
            });
        });
    });

    // Function to handle hover effects for multiple buttons
    function setupButtonHoverEffect(buttonId, hoverText, defaultText, defaultIconClass) {
        const button = document.getElementById(buttonId);

        // Change text and icon on hover
        button.addEventListener('mouseover', () => {
            button.innerHTML = `&#8369 ${hoverText}`;
        });

        // Revert text and icon when not hovering
        button.addEventListener('mouseout', () => {
            button.innerHTML = `<i class="${defaultIconClass}"></i> ${defaultText}`;
        });
    }

    // Set up hover effects for each button
    setupButtonHoverEffect("ChocoChip50g", "75", "50g", "fa fa-shopping-bag");
    setupButtonHoverEffect("ChocoChip100g", "105", "100g", "fa fa-shopping-bag");
    setupButtonHoverEffect("LotusBiscoff50g", "90", "50g", "fa fa-shopping-bag");
    setupButtonHoverEffect("LotusBiscoff100g", "130", "100g", "fa fa-shopping-bag");
    setupButtonHoverEffect("Campfire50g", "85", "50g", "fa fa-shopping-bag");
    setupButtonHoverEffect("Campfire100g", "110", "100g", "fa fa-shopping-bag");
    setupButtonHoverEffect("Monster50g", "95", "50g", "fa fa-shopping-bag");
    setupButtonHoverEffect("Monster100g", "140", "100g", "fa fa-shopping-bag");
    setupButtonHoverEffect("RedVelvet50g", "85", "50g", "fa fa-shopping-bag");
    setupButtonHoverEffect("RedVelvet100g", "110", "100g", "fa fa-shopping-bag");
    setupButtonHoverEffect("Matcha50g", "85", "50g", "fa fa-shopping-bag");
    setupButtonHoverEffect("Matcha100g", "110", "100g", "fa fa-shopping-bag");
    setupButtonHoverEffect("Blacksmore50g", "100", "50g", "fa fa-shopping-bag");
    setupButtonHoverEffect("Blacksmore100g", "160", "100g", "fa fa-shopping-bag");


    // Updates Shopping Cart when "Add to Cart" is Clicked
    function updateCartUI() {
        cartList.innerHTML = "";
        let totalPrice = 0;

        cart.forEach((item, index) => {
            let listItem = document.createElement("li");
            listItem.classList.add("cart-item");

            let nameSpan = document.createElement("span");
            nameSpan.classList.add("name");
            nameSpan.textContent = `${item.name} x ${item.quantity}`;

            // Calculate the price for this item
            let itemTotalPrice = item.quantity * item.price;

            let priceSpan = document.createElement("span");
            priceSpan.classList.add("price");
            priceSpan.innerHTML = `&#8369; ${(item.quantity * item.price).toFixed(2)}`;

            // Add the item total price to totalPrice
            totalPrice += itemTotalPrice;

            let removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-btn");
            removeButton.addEventListener("click", function () {
                // "index" refers to the position of the current item in array
                // "splice()" modifies the array in place, removing 1 item at the specified index.
                cart.splice(index, 1); 
                updateCartUI(); // Update cart UI
            });

            listItem.appendChild(nameSpan);
            listItem.appendChild(priceSpan);
            listItem.appendChild(removeButton);
            cartList.appendChild(listItem);
        });

        // Display the total price
        const totalElement = document.createElement("li");
        totalElement.classList.add("cart-total");
        totalElement.innerHTML = `Total: &#8369; ${totalPrice.toFixed(2)}`;
        cartList.appendChild(totalElement);
    }

    // Submit Button
    submitButton.addEventListener("click", function () {
        // Check if the cart is empty
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items to your cart before submitting.");
            return;
        }

        // Collect the cart data
        let orderDetails = cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            totalPrice: (item.quantity * item.price).toFixed(2)
        }));

        alert("Your order has been submitted successfully!");

        // Clear the cart
        cart = [];
        updateCartUI(); // Update cart UI
    });
});