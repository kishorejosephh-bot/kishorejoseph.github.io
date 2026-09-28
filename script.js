// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close mobile menu after clicking a link

document.querySelectorAll("#nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =========================
// BACK TO TOP
// =========================

const topBtn = document.getElementById("top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {

            link.style.color = "#00a1e0";

        }

    });

});