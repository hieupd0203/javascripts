const toggleButton = document.querySelector(".toggle-menu");
const menuList = document.querySelector(".menu-list");

toggleButton.addEventListener("click", function() {
    menuList.classList.toggle("show-list");
})