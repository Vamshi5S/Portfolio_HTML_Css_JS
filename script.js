function checkScreenSize() {
    if (window.matchMedia("(max-width: 1200px)").matches) {
        document.getElementById("hamburger-nav").style.display = "block";
        document.querySelector(".nav-links").style.display = "none";
    } else {
        document.getElementById("hamburger-nav").style.display = "none";
        document.querySelector(".nav-links").style.display = "flex";
    }
}

window.addEventListener("resize", checkScreenSize);
checkScreenSize(); // Run on page load

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");


}
console.log("script.js is loaded!");
function scrollToExperience() {
    let experienceSection = document.getElementById("experience");
    if (experienceSection) {
        experienceSection.scrollIntoView({ behavior: "smooth" });
        console.log("Scrolling to experience section...");
    } else {
        console.error("Experience section not found!");
    }
}