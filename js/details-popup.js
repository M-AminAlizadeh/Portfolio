const seeProjectBtns = document.querySelectorAll('.card-info-link-container button');
// Mobile
const mobileExitBtn = document.querySelector('.mobile-details-first-row-container img');
const mobileDetailsPopupBgContainer = document.querySelector('.mobile-details-popup-bg-container');
const mobileProjectsData = [{
  id:0,
  title:"Tonic",
  snapshootUrl:"/images/Snapshoot Portfolio1.png",
  clientName:"CANOPY",
  role:"Back End Dev",
  year: 2015,
  description:"A daily selection of privately personalized reads; no accounts or sign-ups required.",
  stacks:["Html","CSS","Javascript"],
  previewLinkUrl:"",
  sourceLinkUrl:""
},{
  id:1,
  title:"Multi-Post Stories",
  snapshootUrl:"/images/Snapshoot Portfolio2.png",
  clientName:"CANOPY",
  role:"Back End Dev",
  year: 2015,
  description:"A daily selection of privately personalized reads; no accounts or sign-ups required.",
  stacks:["Html","CSS","Javascript"],
  previewLinkUrl:"",
  sourceLinkUrl:""
},{
  id:2,
  title:"Tonic",
  snapshootUrl:"/images/Snapshoot Portfolio3.png",
  clientName:"CANOPY",
  role:"Back End Dev",
  year: 2015,
  description:"A daily selection of privately personalized reads; no accounts or sign-ups required.",
  stacks:["Html","CSS","Javascript"],
  previewLinkUrl:"",
  sourceLinkUrl:""
},{
  id:3,
  title:"Multi-Post Stories",
  snapshootUrl:"/images/Snapshoot Portfolio4.png",
  clientName:"CANOPY",
  role:"Back End Dev",
  year: 2015,
  description:"A daily selection of privately personalized reads; no accounts or sign-ups required.",
  stacks:["Html","CSS","Javascript"],
  previewLinkUrl:"",
  sourceLinkUrl:""
},]
const mobileTitle = document.querySelector(".mobile-details-first-row-container h2");
const mobileSnapshoot = document.querySelector(".popup-snapshoot");
const mobileClientName = document.querySelector(".client-name");
const mobileRole = document.querySelector(".my-role");
const mobileYear = document.querySelector(".date-year");
const mobileDescription = document.querySelector(".popup-description");
const mobileStacksContainer = document.querySelectorAll(".mobile-details-popup-tags-container");
// Desktop
const desktopExitBtn = document.querySelector(".desktop-details-first-row-container img");
const desktopDetailsPopupBgContainer = document.querySelector(".desktop-details-popup-bg-container")
// Mobile
if(window.innerWidth <= 375){
  // exit button functionality
  mobileExitBtn.addEventListener('click', () => {
    mobileDetailsPopupBgContainer.style.display = 'none';
  });
  
  // each project show info functionality
  seeProjectBtns.forEach((seeProjectBtn,index) => {
    seeProjectBtn.addEventListener('click', () => {
      // show popup
      mobileDetailsPopupBgContainer.style.display = 'block';
      // replace each card info
      mobileProjectsData.map((card)=>{
        if(index === card.id){
          mobileTitle.innerHTML = card.title;
          mobileSnapshoot.src = card.snapshootUrl;
          mobileClientName.innerHTML = card.clientName;
          mobileRole.innerHTML = card.role;
          mobileYear.innerHTML = card.year;
          mobileDescription.innerHTML = card.description;
          // tags
          // console.log(mobileStacksContainer)
          // console.log(card.stacks)
          // for(let i = 0; i < card.stacks.length; i++){
          //   const list = document.createElement("li");
          //   list.classList.add("card-info-tag");
          //   const content = document.createTextNode(card.stacks[i]);
          //   list.appendChild(content);
          //   mobileStacksContainer[0].appendChild(list);
          // }
        }
      })
    });
  });
}else{
// Desktop
    // exit button functionality
  desktopExitBtn.addEventListener('click', () => {
    desktopDetailsPopupBgContainer.style.display = 'none';
  });
  // each project show info functionality
  seeProjectBtns.forEach((seeProjectBtn) => {
    seeProjectBtn.addEventListener('click', () => {
      // show popup
      desktopDetailsPopupBgContainer.style.display = 'block';
    });
  });
}
