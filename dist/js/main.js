const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

// let showMenu = false;

// menuBtn.addEventListener("click", toggleMenu);

// function toggleMenu(){
//     if(!showMenu){
//         hamburger.classList.add("open");
//         showMenu = true;
//     }else{
//         hamburger.classList.remove("open");
//         showMenu = false;
//     }
// }

menuBtn.addEventListener("click", function(){
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
    menuNav.classList.toggle("open");
    navItems.forEach(item => item.classList.toggle("open"));
});