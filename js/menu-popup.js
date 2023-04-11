const menuButton = document.querySelector('#menu-icon');
const exitMenuButton = document.querySelector('#exit-menu-icon');
const menuLinks = document.querySelectorAll('.mobile-menu-link')
const menuBtns = [menuButton, exitMenuButton];
const menuContainer = document.querySelector('.mobile-menu-container');
const whole_page = document.querySelector('html');

menuBtns.map((menuBtn) => menuBtn.addEventListener('click', () => {
  menuContainer.classList.toggle('mobile-menu-toggler');
  whole_page.classList.toggle('overflow-none');
}));

menuLinks.forEach((menuLink)=>{ menuLink.addEventListener("click",(e)=>{
  console.log(e.target)
  menuContainer.classList.toggle('mobile-menu-toggler');
  
})})