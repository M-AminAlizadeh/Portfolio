const menuButton = document.querySelector('#menu-icon');
const exitMenuButton = document.querySelector('#exit-menu-icon');
const menuBtns = [menuButton, exitMenuButton];
const menuContainer = document.querySelector('.mobile-menu-container');

menuBtns.map((menuBtn) => menuBtn.addEventListener('click', () => menuContainer.classList.toggle('mobile-menu-toggler')));
