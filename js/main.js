const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const burgerLines = document.querySelectorAll(".burger__line");
const overlay = document.querySelector(".main__overlay");
function navBar() {
    document.addEventListener("click", (event) => {
        if (event.target.closest(".burger")) {
            nav.classList.toggle("nav_active");
            nav.style.paddingTop = header.offsetHeight + "px";
            burgerLines.forEach((line) => {
                line.classList.toggle("burger_active");
                overlay.classList.toggle("main__overlay_active");
            });
        } else if (event.target.closest(".burger") || event.target.closest(".main__overlay")) {
            nav.classList.remove("nav_active");
            nav.style.paddingTop = "";
            burgerLines.forEach((line) => {
                line.classList.remove("burger_active");
            });
            overlay.classList.remove("main__overlay_active");
        }
    });

    const mediaQueryMinWidth_992 = window.matchMedia('(min-width: 992px)');
    mediaQueryMinWidth_992.addEventListener("change", (e) => {
        if (e.matches) {
            nav.style.paddingTop = "";
            nav.classList.remove("nav_active")
            overlay.classList.remove("main__overlay_active");
            burgerLines.forEach((line) => {
                line.classList.remove("burger_active");
            });
            return true;
        }
        else {
            nav.style.paddingTop = header.offsetHeight + "px";
        }
        return false;
    });
};

navBar();


if (document.querySelector(".blog__swiper")) {
    let swiper = new Swiper(".blog__swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
    });
}

