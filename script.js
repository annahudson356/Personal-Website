let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const totalCards = document.querySelectorAll('.carousel-card').length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } else if (currentIndex >= totalCards) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}