document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slides img');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    document.querySelector('.prev').addEventListener('click', function() {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    document.querySelector('.next').addEventListener('click', function() {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    // Show initial slide
    showSlide(currentSlide);
});
