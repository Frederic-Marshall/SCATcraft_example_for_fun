document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navigator = document.getElementById("navigator");

    menuToggle.addEventListener("click", () => {
        navigator.classList.toggle("open");
    });

    document.addEventListener("click", (event) => {
        if (!navigator.contains(event.target) && !menuToggle.contains(event.target)) {
            navigator.classList.remove("open");
        }
    });
});