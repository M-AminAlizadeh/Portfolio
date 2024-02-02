const portfolio = document.querySelector('#portfolio');

const projects = async () => {
  const response = await fetch('/Portfolio/data.json');
  const json = await response.json();
  return json.projects;
};

projects().then((projectsList) => {
  projectsList.forEach((project) => {
    const {
      name, companyName, role, year, tags, description, githubLink,
      previewLink, snapshootPath,
    } = project;
    const tagsArray = tags.slice(1, -1).split(',');
    portfolio.innerHTML += `
      <article class="card-container" id=${name}>
        <div class="card-preview-container">
          <img
            src=${snapshootPath}
            alt=${name}
            class="card-snapshoot-desktop" />
        </div>
        <div class="card-info-container">
          <div class="card-info-title-container">
            <h2 class="card-info-title">${name}</h2>
          </div>
          <div class="card-info-details-container">
            <span class="card-info-client-name">${companyName}</span>
            <img src="images/Counter.png" alt="counter icon" />
            <span class="card-info-role">${role}</span>
            <img src="images/Counter.png" alt="counter icon" />
            <span class="card-info-date">${year} </span>
          </div>
          <div class="card-info-description-container">
            <p class="card-info-description">
              ${description}
            </p>
          </div>
          <ul class="card-info-tags-container">
            ${tagsArray.map((tag) => `<li class="card-info-tag">${tag}</li>`)}
          </ul>
          <div class="card-info-link-container">
            <button>
              <a href=${githubLink} target="_blank" class="link">GitHub</a>
            </button>
            <button>
              <a href=${previewLink} target="_blank" class="link">Live Preview</a>
            </button>
          </div>
        </div>
      </article>`;
  });
});
