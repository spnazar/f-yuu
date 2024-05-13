    // Находим кнопку "Заказать"
    let orderButton = document.querySelector('.button');

    // Добавляем обработчик события для нажатия на кнопку
    orderButton.addEventListener('click', function() {
        // Перенаправляем пользователя на страницу меню
        window.location.href = '../html/menu.html';
    });






// Создаем массив для хранения выбранных товаров
let cart = [];

// Функция для добавления товара в корзину
function addToCart(itemName) {
    cart.push(itemName); // Добавляем выбранный товар в массив корзины
    updateCart(); // Обновляем отображение корзины
}

// Функция для обновления отображения корзины
function updateCart() {
    // Очищаем текущее содержимое корзины
    document.getElementById('cart').innerHTML = '';

    // Добавляем каждый товар из массива в корзину
    cart.forEach(function(item) {
        let listItem = document.createElement('li');
        listItem.textContent = item;
        document.getElementById('cart').appendChild(listItem);
    });
}

// Находим все ссылки с классом "order-link"
let orderLinks = document.querySelectorAll('.order-link');

// Добавляем обработчик события для каждой ссылки
orderLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        let itemName = this.previousElementSibling.textContent; // Получаем имя товара
        addToCart(itemName); // Добавляем товар в корзину
    });
});

// Функция для очистки корзины
function clearCart() {
    cart = []; // Очищаем массив корзины
    updateCart(); // Обновляем отображение корзины
}

// Находим кнопку "Очистить корзину"
let clearCartBtn = document.getElementById('clear-cart-btn');

// Добавляем обработчик события для нажатия на кнопку "Очистить корзину"
clearCartBtn.addEventListener('click', clearCart);

// Обновляем функцию updateCart для использования ul вместо div
function updateCart() {
    let cartList = document.getElementById('cart-items');
    // Очищаем текущее содержимое корзины
    cartList.innerHTML = '';
    
    // Добавляем каждый товар из массива в корзину
    cart.forEach(function(item) {
        let listItem = document.createElement('li');
        listItem.textContent = item;
        cartList.appendChild(listItem);
    });
}


// Находим ссылку "Заказать"
let orderLink = document.querySelector('.order-link');

// Находим модальное окно
let modal = document.getElementById('modal');

// Находим кнопку "Закрыть" в модальном окне
let closeBtn = document.querySelector('.close');

// Добавляем обработчик события для нажатия на ссылку "Заказать"
orderLink.addEventListener('click', function() {
    modal.style.display = 'block'; // Показываем модальное окно при нажатии на ссылку "Заказать"
});

// Добавляем обработчик события для нажатия на кнопку "Закрыть" в модальном окне
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Скрываем модальное окно при нажатии на кнопку "Закрыть"
});

// Добавляем обработчик события для нажатия на область вне модального окна, чтобы закрыть его
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'; // Скрываем модальное окно, если пользователь кликнул вне его
    }
});

// Находим иконку корзины в навигационном меню
let cartIcon = document.querySelector('.cart-icon');

// Добавляем обработчик события для нажатия на иконку корзины
cartIcon.addEventListener('click', function() {
    modal.style.display = 'block'; // Показываем модальное окно при нажатии на иконку корзины
});














// Находим кнопку "Заказать" в первом модальном окне
let orderNowBtn = document.getElementById('order-now-btn');

// Находим второе модальное окно для заполнения данных заказа
let orderModal = document.getElementById('order-modal');

// Добавляем обработчик события для нажатия на кнопку "Заказать"
orderNowBtn.addEventListener('click', function() {
    // Показываем второе модальное окно при нажатии на кнопку "Заказать"
    orderModal.style.display = 'block';
});

// Находим кнопку "Закрыть" во втором модальном окне
let closeOrderModalBtn = document.querySelector('#order-modal .close');

// Добавляем обработчик события для нажатия на кнопку "Закрыть"
closeOrderModalBtn.addEventListener('click', function() {
    // Скрываем второе модальное окно при нажатии на кнопку "Закрыть"
    orderModal.style.display = 'none';
});

// Находим форму во втором модальном окне
let orderForm = document.getElementById('order-form');

// Добавляем обработчик события для отправки формы
orderForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    // Получаем данные из формы
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let paymentMethod = document.getElementById('payment-method').value;
    // Здесь можно добавить логику для обработки данных заказа
    // После обработки данных можно закрыть модальное окно
    orderModal.style.display = 'none';
});
