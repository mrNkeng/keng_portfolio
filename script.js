/*
- toggleMenu() toggles (shows/hides) the mobile menu when the hamburger icon is clicked.
-1️ Get the element with class "menu-links" (the dropdown menu).
- 2️ Get the element with class "hamburger-icon" (the 3-line icon).
- 3 if "open" class is present, it removes it (hides menu) and shows it if its not present.
*/
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
} 

