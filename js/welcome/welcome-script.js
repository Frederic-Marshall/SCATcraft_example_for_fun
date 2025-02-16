document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("welcomeShown")) {
        localStorage.setItem("welcomeShown", "true");
    }
});