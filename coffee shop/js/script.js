// Получаем ссылки на элементы DOM
const navItems = document.querySelectorAll('.nav-item');
const phoneNumberLink = document.querySelector('.numeber .nam');
const orderLinks = document.querySelectorAll('.order-link');

// Функция для замены путей ссылок в навигации
function replaceNavLinks() {
    navItems[1].href = "/store"; // Заменяем путь к странице магазина
    navItems[2].href = "/about"; // Заменяем путь к странице "О нас"
    navItems[3].href = "/menu"; // Заменяем путь к странице с меню
}


// Функция для добавления обработчика события на кнопки "Add to order"
function addOrderButtonListeners() {
    orderLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем действие по умолчанию (переход по ссылке)
            console.log("Товар добавлен в заказ"); // Вместо этого можно добавить вашу логику для добавления товара в корзину или что-то еще
        });
    });
}

// Вызываем функции после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    replaceNavLinks();
    replacePhoneNumber();
    addOrderButtonListeners();
});
