const languagesToggler = document.querySelector('.languages-toggler');
const languagesContainer = document.querySelector('.languages-container');
const frameworksToggler = document.querySelector('.frameworks-toggler');
const frameworksContainer = document.querySelector('.frameworks-container');
const skillsToggler = document.querySelector('.skills-toggler');
const skillsContainer = document.querySelector('.skills-container');
const togglers = [languagesToggler, frameworksToggler, skillsToggler];
const containers = [languagesContainer, frameworksContainer, skillsContainer];

const data = async () => {
  const res = await fetch("../data.json");
  const json = await res.json();
  return json;
}

const fetchedData = await data();
const languagesList = fetchedData.languages;
const frameworksList = fetchedData.frameworks;
const skillsList = fetchedData.skills;

togglers.forEach((toggler, index)=> {
  toggler.addEventListener("click", (e) => {
    containers.forEach((container) => container.innerHTML = "");
    togglers.forEach((toggler) => toggler.children[1].style.transform = 'rotate(0deg)');

    if(index === 0){
      for(let i = 0; i < languagesList.length; i++){
        languagesContainer.innerHTML += `<img src=${languagesList[i]} />`;
      }
    } else if (index === 1){
      frameworksList.forEach((framework)=> frameworksContainer.innerHTML += `<img src=${framework} />`)
    } else if (index === 2) {
      skillsList.forEach((skill)=> skillsContainer.innerHTML += `<img src=${skill} />`)
    }
    toggler.children[1].style.transform = 'rotate(90deg)';
  })
})
