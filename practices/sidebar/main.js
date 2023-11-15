const toggleMenu = document.querySelector(".toggle-menu");
const closeMenu = document.querySelector(".close-menu");
const sidebar = document.querySelector(".sidebar");

toggleMenu.addEventListener("click", function(){
    sidebar.classList.toggle("show-list")
});

closeMenu.addEventListener("click", function(){
    sidebar.classList.toggle("show-list")
})