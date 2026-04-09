// === АВТОРИЗАЦИЯ И РЕГИСТРАЦИЯ ===

// Получение данных пользователя из localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// Сохранение пользователей в localStorage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Текущий авторизованный пользователь
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

// Установка текущего пользователя
function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Выход из аккаунта
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Регистрация нового пользователя
function register(email, password, name) {
    const users = getUsers();
    
    // Проверка, существует ли пользователь с таким email
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        showAuthError('Пользователь с таким email уже существует');
        return false;
    }
    
    // Создание нового пользователя
    const newUser = {
        id: Date.now().toString(),
        email,
        password, // В реальном проекте нужно хешировать пароль!
        name,
        createdAt: new Date().toISOString(),
        avatar: '',
        phone: '',
        address: ''
    };
    
    users.push(newUser);
    saveUsers(users);
    
    // Автоматический вход после регистрации
    setCurrentUser(newUser);
    showNotification('Регистрация успешна! Добро пожаловать, ' + name + '!');
    
    setTimeout(() => {
        window.location.href = 'profile.html';
    }, 1000);
    
    return true;
}

// Вход пользователя
function login(email, password) {
    const users = getUsers();
    
    // Поиск пользователя
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        showAuthError('Неверный email или пароль');
        return false;
    }
    
    // Установка текущего пользователя
    setCurrentUser(user);
    showNotification('Добро пожаловать, ' + user.name + '!');
    
    setTimeout(() => {
        window.location.href = 'profile.html';
    }, 1000);
    
    return true;
}

// Обновление профиля
function updateProfile(updates) {
    const currentUser = getCurrentUser();
    if (!currentUser) return false;
    
    const users = getUsers();
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex === -1) return false;
    
    // Обновление данных
    users[userIndex] = { ...users[userIndex], ...updates };
    saveUsers(users);
    setCurrentUser(users[userIndex]);
    
    showNotification('Профиль обновлён!');
    return true;
}

// Изменение пароля
function changePassword(oldPassword, newPassword) {
    const currentUser = getCurrentUser();
    if (!currentUser) return false;
    
    const users = getUsers();
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex === -1) return false;
    
    // Проверка старого пароля
    if (users[userIndex].password !== oldPassword) {
        showAuthError('Неверный старый пароль');
        return false;
    }
    
    users[userIndex].password = newPassword;
    saveUsers(users);
    setCurrentUser(users[userIndex]);
    
    showNotification('Пароль изменён!');
    return true;
}

// Показать ошибку авторизации
function showAuthError(message) {
    const errorEl = document.getElementById('authError');
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.style.display = 'block';
        
        setTimeout(() => {
            errorEl.style.display = 'none';
        }, 5000);
    }
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

// Проверка авторизации при загрузке страницы
function requireAuth() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        window.location.href = 'login.html';
        return null;
    }
    return currentUser;
}

// Обновление UI в зависимости от статуса авторизации
function updateAuthUI() {
    const currentUser = getCurrentUser();
    const loginBtn = document.querySelector('.login-btn');
    const profileBtn = document.querySelector('.profile-btn');
    
    if (loginBtn && profileBtn) {
        if (currentUser) {
            loginBtn.style.display = 'none';
            profileBtn.style.display = 'block';
            
            // Обновить имя в кнопке профиля
            const profileName = profileBtn.querySelector('.profile-name');
            if (profileName) {
                profileName.textContent = currentUser.name || 'Профиль';
            }
        } else {
            loginBtn.style.display = 'block';
            profileBtn.style.display = 'none';
        }
    }
}

// Валидация email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Валидация пароля
function isValidPassword(password) {
    return password.length >= 6;
}

// Экспорт функций
window.register = register;
window.login = login;
window.logout = logout;
window.updateProfile = updateProfile;
window.changePassword = changePassword;
window.getCurrentUser = getCurrentUser;
window.requireAuth = requireAuth;
window.updateAuthUI = updateAuthUI;

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    updateAuthUI();
});
