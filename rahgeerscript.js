let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    if (index >= totalSlides) slideIndex = 0;
    else if (index < 0) slideIndex = totalSlides - 1;
    else slideIndex = index;

    const offset = -slideIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

// Auto-slide feature
setInterval(() => {
    moveSlide(1);
}, 5000); // Change slide every 5 seconds

// Initial display
showSlide(slideIndex);
