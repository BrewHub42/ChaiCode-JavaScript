/**
 * Write your challenge solution here
 */
const cartItems = document.getElementById('cart-items');
const emptyCart = document.querySelector('.empty-cart');
const cartTotal = document.querySelector('#cart-total h3');

document.querySelectorAll("button").forEach(btn => btn.classList.add("button-13"));

let cart = {};

function addToCart(product, price) {
    emptyCart.style.display = 'none';

    if (cart[product]) {
        cart[product].quantity++;
    } else {
        cart[product] = { price, quantity: 1 };
    }

    updateCart();
}

function updateCart() {
    cartItems.innerHTML = '';

    let total = 0;
    let empty = true;

    for (let product in cart) {
        let item = cart[product];
        let itemTotal = item.price * item.quantity;
        total += itemTotal;

        empty = false;

        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <p>${product} | $${item.price.toFixed(2)} | (Quantity: ${item.quantity})</p>
            <div class="quantity-controls">
                <button onclick="changeQuantity('${product}', -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity('${product}', 1)">+</button>
                <button onclick="removeFromCart('${product}')">Remove</button>
            </div>
        `;
        cartItem.querySelectorAll("button").forEach(btn => btn.classList.add("button-13"));
        cartItems.appendChild(cartItem);
    }

    cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;

    if (empty) {
        emptyCart.style.display = 'block';
    }
}


function changeQuantity(product, value) {
    if (cart[product]) {
        cart[product].quantity += value;

        if (cart[product].quantity <= 0) {
            delete cart[product];
        }
    }

    updateCart();
}


function removeFromCart(product){
    delete cart[product];
    updateCart();
}