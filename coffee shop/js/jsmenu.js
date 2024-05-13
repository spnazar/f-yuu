// Функция для добавления товара в корзину
function addToCart(itemName, itemPrice) {
    var cartItems = document.getElementById("cart-items");
    var newItem = document.createElement("li");
    newItem.textContent = itemName + " - $" + itemPrice;
    cartItems.appendChild(newItem);
}

// Функция для отображения модального окна корзины
function showCartModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

// Функция для скрытия модального окна корзины
function hideCartModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Функция для очистки корзины
function clearCart() {
    var cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
}
