const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-mode");
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.toggle("dark-mode"))
} else {
    document.body.classList.remove("dark-mode");
}

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.toggle("dark-mode"))
}