let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');

    if (!slider || slides.length === 0) return; // Prevent errors if elements are missing

    if (index >= slides.length) { currentIndex = 0; }
    if (index < 0) { currentIndex = slides.length - 1; }
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);