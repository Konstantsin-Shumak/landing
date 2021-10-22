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

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }
    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills)
})