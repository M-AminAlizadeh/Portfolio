const menu_button = document.querySelector("#menu-icon");
const exit_menu_button = document.querySelector("#exit-menu-icon");
const menu_btns = [menu_button, exit_menu_button];
const menu_container = document.querySelector(".mobile-menu-container");

menu_btns.map((menu_btn) => {
  menu_btn.addEventListener("click", () => {
    menu_container.classList.toggle("mobile-menu-toggler");
  });
});
