document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const textScaler = 1 - (window.scrollY * 0.00025)

        const pageText = document.querySelector(".header-img-text");

        pageText.style.transform = `scale(${textScaler})`;
    });
});