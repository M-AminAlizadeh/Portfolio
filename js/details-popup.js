const seeProjectBtns = document.querySelectorAll('.card-info-link-container button');
const exitBtn = document.querySelector('.mobile-details-first-row-container img');
const mobileDetailsPopupBgContainer = document.querySelector('.mobile-details-popup-bg-container');

// Mobile
// exit button functionality
exitBtn.addEventListener('click', () => {
  mobileDetailsPopupBgContainer.style.display = 'none';
});

// each project show info functionality
seeProjectBtns.forEach((seeProjectBtn) => {
  seeProjectBtn.addEventListener('click', () => {
    // show popup
    mobileDetailsPopupBgContainer.style.display = 'block';
  });
});
