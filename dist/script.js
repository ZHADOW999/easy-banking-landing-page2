const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".nav-list");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active2");
    offScreenMenu.classList.toggle("active2");
    
});
