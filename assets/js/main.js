/*==================== MENU SHOW Y HIDDER ====================*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/
/*Validate if constant exists*/
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

/*===== MENU HIDDEN =====*/
/*Validate if constant exists*/
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
}

/*==================== MENU SHOW Y HIDDER ====================*/
const navLinks = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu")
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(link => link.addEventListener("click", linkAction))