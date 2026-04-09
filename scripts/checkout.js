// === ОФОРЛЕНИЕ ЗАКАЗА ===

let currentStep = 1;
const SHIPPING_COST = 500;

// Получение корзины
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Получение заказов
function getOrders() {
    return JSON.parse(localStorage.getItem('orders')) || [];
}

// Сохранение заказов
function saveOrders(orders) {
    localStorage.setItem('orders', JSON.stringify(orders));
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

// Переход к следующему шагу
function nextStep(step) {
    // Валидация текущего шага
    if (!validateStep(currentStep)) {
        return;
    }

    // Скрыть текущую секцию
    document.getElementById('section-' + currentStep).classList.remove('active');
    
    // Показать новую секцию
    document.getElementById('section-' + step).classList.add('active');
    
    // Обновить индикаторы шагов
    updateSteps(step);
    
    currentStep = step;

    // Если последний шаг - заполнить обзор заказа
    if (step === 4) {
        fillOrderReview();
    }

    // Прокрутка наверх
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Возврат к предыдущему шагу
function prevStep(step) {
    document.getElementById('section-' + currentStep).classList.remove('active');
    document.getElementById('section-' + step).classList.add('active');
    updateSteps(step);
    currentStep = step;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Обновление индикаторов шагов
function updateSteps(currentStep) {
    const steps = document.querySelectorAll('.step');
    
    steps.forEach((step, index) => {
        const stepNum = index + 1;
        
        if (stepNum < currentStep) {
            step.classList.add('completed');
            step.classList.remove('active');
            step.querySelector('.step-number').innerHTML = '✓';
        } else if (stepNum === currentStep) {
            step.classList.add('active');
            step.classList.remove('completed');
            step.querySelector('.step-number').textContent = stepNum;
        } else {
            step.classList.remove('active', 'completed');
            step.querySelector('.step-number').textContent = stepNum;
        }
    });
}

// Валидация шага
function validateStep(step) {
    const section = document.getElementById('section-' + step);
    const inputs = section.querySelectorAll('input[required], select[required]');
    
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            isValid = false;
            
            // Убрать красную рамку при вводе
            input.addEventListener('input', function() {
                this.style.borderColor = '#e5e7eb';
            }, { once: true });
        } else {
            input.style.borderColor = '#e5e7eb';
        }
    });

    // Специфичные валидации
    if (step === 1) {
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            document.getElementById('email').style.borderColor = '#ef4444';
            showNotification('Введите корректный email');
            isValid = false;
        }

        const phone = document.getElementById('phone').value;
        if (phone && phone.length < 10) {
            document.getElementById('phone').style.borderColor = '#ef4444';
            showNotification('Введите корректный номер телефона');
            isValid = false;
        }
    }

    if (step === 2) {
        const zipcode = document.getElementById('zipcode').value;
        if (zipcode && !/^\d{6}$/.test(zipcode)) {
            document.getElementById('zipcode').style.borderColor = '#ef4444';
            showNotification('Индекс должен содержать 6 цифр');
            isValid = false;
        }
    }

    if (!isValid) {
        showNotification('Заполните все обязательные поля');
    }

    return isValid;
}

// Заполнение обзора заказа
function fillOrderReview() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    document.getElementById('reviewContact').innerHTML = `
        <strong>${firstName} ${lastName}</strong><br>
        📧 ${email}<br>
        📱 ${phone}
    `;

    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zipcode = document.getElementById('zipcode').value;
    const country = document.getElementById('country');
    const countryText = country.options[country.selectedIndex].text;
    const comment = document.getElementById('comment').value;
    
    document.getElementById('reviewAddress').innerHTML = `
        <strong>${countryText}, ${city}</strong><br>
        ${address}<br>
        Индекс: ${zipcode}
        ${comment ? '<br><br><em>Комментарий: ' + comment + '</em>' : ''}
    `;

    const payment = document.querySelector('input[name="payment"]:checked').value;
    const paymentText = {
        'card': '💳 Банковская карта',
        'cash': '💵 Наличные при получении',
        'online': '🌐 Онлайн оплата'
    };
    
    document.getElementById('reviewPayment').innerHTML = paymentText[payment];

    // Товары
    const cart = getCart();
    const itemsHtml = cart.map(item => `
        <div class="review-item">
            <span>${item.name} × ${item.quantity}</span>
            <span>${item.price}</span>
        </div>
    `).join('');
    
    document.getElementById('reviewItems').innerHTML = itemsHtml;

    // Итого
    const subtotal = cart.reduce((sum, item) => {
        return sum + (parsePrice(item.price) * item.quantity);
    }, 0);
    
    const total = subtotal + SHIPPING_COST;
    document.getElementById('reviewTotal').textContent = formatPrice(total);
}

// Обработка оформления заказа
function handleCheckout(event) {
    event.preventDefault();
    
    const cart = getCart();
    
    if (cart.length === 0) {
        showNotification('Корзина пуста!');
        setTimeout(() => {
            window.location.href = '../pages/cart.html';
        }, 1000);
        return false;
    }

    // Сбор данных заказа
    const order = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        status: 'pending',
        customer: {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        },
        shipping: {
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            zipcode: document.getElementById('zipcode').value,
            country: document.getElementById('country').value,
            comment: document.getElementById('comment').value
        },
        payment: document.querySelector('input[name="payment"]:checked').value,
        items: cart,
        subtotal: cart.reduce((sum, item) => sum + (parsePrice(item.price) * item.quantity), 0),
        shipping_cost: SHIPPING_COST,
        total: cart.reduce((sum, item) => sum + (parsePrice(item.price) * item.quantity), 0) + SHIPPING_COST
    };

    // Сохранение заказа
    const orders = getOrders();
    orders.push(order);
    saveOrders(orders);

    // Сохранить последний заказ для страницы успеха
    localStorage.setItem('lastOrder', JSON.stringify({
        id: order.id,
        date: order.date,
        total: formatPrice(order.total)
    }));

    // Если пользователь авторизован - привязать заказ к аккаунту
    const currentUser = getCurrentUser();
    if (currentUser) {
        const userOrders = JSON.parse(localStorage.getItem('userOrders_' + currentUser.id)) || [];
        userOrders.push(order);
        localStorage.setItem('userOrders_' + currentUser.id, JSON.stringify(userOrders));
    }

    // Очистка корзины
    localStorage.removeItem('cart');
    
    // Показать уведомление
    showNotification('Заказ успешно оформлен!');

    // Переход на страницу успеха
    setTimeout(() => {
        window.location.href = '../pages/order-success.html';
    }, 1000);

    return false;
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

// Автозаполнение данных из профиля
function autofillFromProfile() {
    const currentUser = getCurrentUser();
    
    if (currentUser) {
        if (currentUser.name) {
            const nameParts = currentUser.name.split(' ');
            document.getElementById('firstName').value = nameParts[0] || '';
            document.getElementById('lastName').value = nameParts[1] || '';
        }
        if (currentUser.email) {
            document.getElementById('email').value = currentUser.email;
        }
        if (currentUser.phone) {
            document.getElementById('phone').value = currentUser.phone;
        }
        if (currentUser.address) {
            document.getElementById('address').value = currentUser.address;
        }
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Проверка корзины
    const cart = getCart();
    if (cart.length === 0) {
        showNotification('Корзина пуста!');
        setTimeout(() => {
            window.location.href = '../pages/cart.html';
        }, 1500);
        return;
    }

    // Автозаполнение из профиля
    autofillFromProfile();

    // Анимация появления
    setTimeout(() => {
        document.querySelector('.checkout-container').classList.add('visible');
    }, 100);
});

// Экспорт функций
window.nextStep = nextStep;
window.prevStep = prevStep;
window.handleCheckout = handleCheckout;
