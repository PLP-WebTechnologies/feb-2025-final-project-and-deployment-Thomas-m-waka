document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Message sent successfully!");
        });
    }
});

// script.js
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));