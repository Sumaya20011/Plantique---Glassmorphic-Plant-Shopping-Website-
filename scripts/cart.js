// === КОРЗИНА ===
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const SHIPPING_COST = 500;

// Обновление счётчика корзины
function updateCartCount() {
    const floatingCount = document.getElementById('floatingCartCount');
    if (floatingCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        floatingCount.textContent = totalItems;
        floatingCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Сохранение в localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Добавление в корзину
function addToCart(id, name, price, image) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    
    saveCart();
    renderCart();
    showNotification('Added to cart!');
}

// Удаление из корзины
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
}

// Изменение количества
function updateQuantity(id, newQuantity) {
    const item = cart.find(item => item.id === id);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(id);
        } else {
            item.quantity = newQuantity;
            saveCart();
            renderCart();
        }
    }
}

// Парсинг цены
function parsePrice(priceStr) {
    const match = priceStr.match(/₹([\d,]+)/);
    return match ? parseInt(match[1].replace(/,/g, '')) : 0;
}

// Форматирование цены
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

// Отрисовка корзины
function renderCart() {
    const container = document.getElementById('cartItems');
    const emptyState = document.getElementById('cartEmpty');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.style.display = 'none';
        document.querySelector('.cart-summary').style.display = 'none';
        emptyState.style.display = 'flex';
        return;
    }
    
    container.style.display = 'block';
    emptyState.style.display = 'none';
    document.querySelector('.cart-summary').style.display = 'block';
    
    // Отрисовка товаров
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
            <div class="cart-item-info">
                <div class="cart-item-header">
                    <h3>${item.name}</h3>
                    <button class="remove-item" onclick="removeFromCart('${item.id}')">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <p class="cart-item-price">${item.price}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">−</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Подсчёт суммы
    const subtotal = cart.reduce((sum, item) => {
        return sum + (parsePrice(item.price) * item.quantity);
    }, 0);
    
    subtotalEl.textContent = formatPrice(subtotal);
    totalEl.textContent = formatPrice(subtotal + SHIPPING_COST);
}

// Уведомление
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    renderCart();
});

// Экспорт
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.updateCartCount = updateCartCount;
