const welcomeHeader = document.getElementById('welcome-header');
window.addEventListener('scroll', () => {
    console.log(welcomeHeader)
    if (window.scrollY > 500) {
        welcomeHeader.style.background = 'rgba(15, 15, 15)';
    } else {
        welcomeHeader.style.background = 'rgba(15, 15, 15, .9)';
    }
});