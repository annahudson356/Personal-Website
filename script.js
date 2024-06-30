let currentSlide = 0;
let autoCycleInterval;
let autoCycleTimeout;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startAutoCycle() {
    autoCycleInterval = setInterval(nextSlide, 3000);
}

function resetAutoCycle() {
    clearTimeout(autoCycleTimeout);
    clearInterval(autoCycleInterval);
    autoCycleTimeout = setTimeout(startAutoCycle, 10000);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    resetAutoCycle(); 

    document.querySelectorAll('.carousel-control').forEach(button => {
        button.addEventListener('click', resetAutoCycle); 
    });

    document.querySelector('.carousel-inner').addEventListener('click', resetAutoCycle); 
});
