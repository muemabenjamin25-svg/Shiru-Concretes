document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // DYNAMIC COPYRIGHT YEAR
    // =========================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // =========================
    // MOBILE NAVIGATION
    // =========================

    const menuButton = document.getElementById("menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });

    }


    // =========================
    // SMOOTH SCROLLING
    // =========================

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});