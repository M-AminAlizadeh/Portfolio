const menuButton = document.querySelector('.navbar__menu-icon');
const exitButton = document.querySelector('.mobile-navbar__exit-icon');
const mobileMenuPopup = document.querySelector('.mobile-navbar');
const mobileMenuLinks = document.querySelectorAll('.mobile-navbar__link');
const elements = [menuButton, exitButton];

elements.forEach((element)=> {
  element.addEventListener("click", (e) => {
    mobileMenuPopup.classList.toggle('mobile-navbar__toggler');
  })
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenuPopup.classList.toggle('mobile-navbar__toggler');
  });
});
