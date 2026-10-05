

    const slider = document.querySelector(".projects-slider");
    const cards = document.querySelectorAll(".project-card");
    const dots = document.querySelectorAll(".slider-dots span");

    let currentIndex = 0;


    // Move slider manually
    function moveSlide(direction) {

        currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    }

    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }

    showSlide();
}


    // Show selected slide
    function currentSlide(index) {

        currentIndex = index;

    showSlide();
}


    // Display slide
    function showSlide() {

    const cardWidth = cards[0].offsetWidth + 25;

    slider.scrollTo({
        left: currentIndex * cardWidth,
    behavior: "smooth"
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentIndex].classList.add("active");
}


// Automatic animation
setInterval(() => {

        moveSlide(1);

}, 4000);


    // Start with first dot active
    dots[0].classList.add("active");

