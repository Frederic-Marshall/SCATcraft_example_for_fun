// Кнопка "Вернуться назад"
const backToTopBtn = document.getElementById('back-to-top-btn');
const welcomeHeader = document.getElementById('welcome-header');
window.addEventListener('scroll', () => {
    
    if (window.scrollY > 1000) {
        backToTopBtn.classList.remove('hidden');
    } else {
        backToTopBtn.classList.add('hidden');
    }

    if (window.scrollY > 100) {
        welcomeHeader.style.background = 'rgba(15, 15, 15, 1)';
    } else {
        welcomeHeader.style.background = 'rgba(15, 15, 15, .9)';
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});


// Уведомления
function showNotification(message) {
    notification.innerHTML = message;
    notification.classList.remove('hidden-notify');
    notification.classList.add('visible-notify');

    setTimeout(() => {
        notification.classList.remove('visible-notify');
        notification.classList.add('hidden-notify');
    }, 3000); // 3 секунды 
}
