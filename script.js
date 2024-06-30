
let current = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        current = 0;
    } else if (index < 0) {
        current = slides.length - 1;
    } else {
        current = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === current);
    });
}

function nextSlide() {
    showSlide(current + 1);
}

function prevSlide() {
    showSlide(current - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(current);
});