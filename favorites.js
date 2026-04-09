// === ИЗБРАННОЕ ===
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Обновление счётчика избранного
function updateFavoritesCount() {
    const countElement = document.getElementById('favCount');
    const floatingCount = document.getElementById('floatingFavCount');
    
    if (countElement) {
        countElement.textContent = favorites.length;
    }
    if (floatingCount) {
        floatingCount.textContent = favorites.length;
        // Скрываем badge если 0
        floatingCount.style.display = favorites.length > 0 ? 'flex' : 'none';
    }
}

// Сохранение в localStorage
function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
}

// Добавление/удаление из избранного
function toggleFavorite(id, name, price, image) {
    const index = favorites.findIndex(fav => fav.id === id);
    
    if (index > -1) {
        // Удаляем
        favorites.splice(index, 1);
    } else {
        // Добавляем
        favorites.push({ id, name, price, image });
    }
    
    saveFavorites();
    renderFavoritesOnPage();
}

// Проверка, есть ли товар в избранном
function isFavorite(id) {
    return favorites.some(fav => fav.id === id);
}

// Отрисовка сердечка (активное/неактивное)
function updateHeartIcons() {
    const heartIcons = document.querySelectorAll('.heart_icon');
    heartIcons.forEach((icon, index) => {
        const card = icon.closest('.new_plant_card');
        if (card) {
            const id = card.getAttribute('data-id') || `plant-${index}`;
            if (isFavorite(id)) {
                // Заполненное сердечко SVG
                icon.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ef4444"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
                icon.classList.add('active');
            } else {
                // Пустое сердечко SVG
                icon.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%236b7280" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
                icon.classList.remove('active');
            }
        }
    });
}

// Отрисовка страницы избранного
function renderFavoritesOnPage() {
    const container = document.getElementById('favoritesContainer');
    const emptyState = document.getElementById('favoritesEmpty');
    
    if (!container) return;
    
    if (favorites.length === 0) {
        container.style.display = 'none';
        emptyState.style.display = 'flex';
        return;
    }
    
    container.style.display = 'grid';
    emptyState.style.display = 'none';
    
    container.innerHTML = favorites.map(fav => `
        <div class="favorite-card">
            <button class="remove-favorite" onclick="removeFromFavorites('${fav.id}')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <img src="${fav.image}" alt="${fav.name}" class="favorite-image" />
            <div class="favorite-info">
                <h3>${fav.name}</h3>
                <p class="favorite-price">${fav.price}</p>
                <button class="add-to-cart-btn">
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
}

// Удаление из избранного на странице
function removeFromFavorites(id) {
    const index = favorites.findIndex(fav => fav.id === id);
    if (index > -1) {
        favorites.splice(index, 1);
        saveFavorites();
        renderFavoritesOnPage();
        updateHeartIcons();
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    updateFavoritesCount();
    
    // Навешиваем обработчики на сердечки
    const heartIcons = document.querySelectorAll('.heart_icon');
    heartIcons.forEach((icon, index) => {
        icon.style.cursor = 'pointer';
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const card = icon.closest('.new_plant_card');
            if (card) {
                const id = card.getAttribute('data-id') || `plant-${index}`;
                const name = card.querySelector('h1')?.textContent || 'Plant';
                const price = card.querySelector('p')?.textContent || '₹0';
                const image = card.querySelector('img')?.src || '';
                
                toggleFavorite(id, name, price, image);
                
                // Анимация сердечка
                icon.style.transform = 'scale(1.3)';
                icon.style.transition = 'transform 0.2s ease';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                }, 200);
            }
        });
    });
    
    // Отрисовка на странице избранного
    renderFavoritesOnPage();
});

// Экспорт для использования в других местах
window.toggleFavorite = toggleFavorite;
window.removeFromFavorites = removeFromFavorites;
window.updateFavoritesCount = updateFavoritesCount;
