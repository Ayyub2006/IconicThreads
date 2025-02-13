const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

    window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '0';
    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 200);
});



    document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('overlay');
    var popupCard = document.getElementById('popupCard');
    var closePopup = document.getElementById('closePopup');

    overlay.style.display = 'block';
    popupCard.style.display = 'block';

    closePopup.addEventListener('click', function (event) {
        event.preventDefault();
        overlay.style.display = 'none';
        popupCard.style.display = 'none';
    });
});


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 2000,
});


const brands = document.querySelector('ul.brands');
let total_brand = brands.children.length;

for (let i = 0; i < total_brand; i++) {
    brands.appendChild(brands.children[i].cloneNode(true));
}

total_brand = brands.children.length;

document.documentElement.style.setProperty('--total-brand', total_brand);
document.documentElement.style.setProperty('--total-logo-width', `calc(${total_brand} * var(--logo-width) * 2)`);
document.documentElement.style.setProperty('--animation-duration', `calc(${total_brand} * 5s)`);




