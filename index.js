// Hamburger Menu js events
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// array to store all of the information for all projects.
const CardData = [
  {

    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Mobimage: 'images/Snapshoot 1.png',
    id: 'mobi',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/portfolio/',
    source: 'https://fatmahussein.github.io/portfolio/',
    company: 'CANOPY',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    id: 'desk',
    Desktimage: 'images/Desksnap.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/portfolio/',
    source: 'https://fatmahussein.github.io/portfolio/',
    company: 'CANOPY',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    id: 'mobi',
    Mobimage: 'images/Snapshoot 2.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/portfolio/',
    source: 'https://github.com/fatmahussein/portfolio',
    company: 'FACEBOOK',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Desktimage: 'images/Desksnap2.png',
    id: 'desk',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/portfolio/',
    source: 'https://github.com/fatmahussein/portfolio',
    company: 'FACEBOOK',
  },

  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    Desktimage: 'images/Snapshoot 1.png',
    id: 'desk',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/portfolio/',
    source: 'https://fatmahussein.github.io/portfolio/',
    company: 'FACEBOOK',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    Desktimage: 'images/Snapshoot 2.png',
    technologies: ['html', 'css', 'javascript'],
    id: 'desk',
    live: 'https://fatmahussein.github.io/portfolio/',
    source: 'https://fatmahussein.github.io/portfolio/',
    company: 'UBER',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Mobimage: 'images/Snapshoot 3.png',
    technologies: ['html', 'css', 'javascript'],
    id: 'mobi',
    live: 'https://fatmahussein.github.io/portfolio/',
    source: 'https://fatmahussein.github.io/portfolio/',
    company: 'CANOPY',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    id: 'mobi',
    Mobimage: 'images/Snapshoot 4.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/portfolio/',
    source: 'https://fatmahussein.github.io/portfolio/',
    company: 'FACEBOOK',
  },

];

const postContainer = document.querySelector('.cards');

const postMethods = () => {
  CardData.map((postData) => {
    const postElement = document.createElement('div');
    postElement.classList.add('card');
    postElement.setAttribute('id', postData.id);
    const postImage = document.createElement('img');
    if (postData.id === 'mobi') {
      postImage.src = postData.Mobimage;
    } else if (postData.id === 'desk') {
      postImage.src = postData.Desktimage;
    }
    postElement.appendChild(postImage);
    const postBody = document.createElement('div');
    postBody.classList.add('left-block');
    postBody.innerHTML = `
          <h2>${postData.name}</h2>
        <ul class="list1">
           <li id="canopy">CANOPY</li>
           <li class="dot"></li>
           <li>Back End Dev</li>
          <li class="dot"></li>
           <li>2015</li>
         </ul>
         <p class="p">${postData.description}</p>
         <ul class="list2">
          <li class="badge">${postData.technologies[0]}</li>
           <li class="badge">${postData.technologies[1]}</li>
           <li class="badge">${postData.technologies[2]}</li>
         </ul>
          <button type="button" class="see-project">See Project</button>
       </div>
   `;
    postElement.appendChild(postBody);
    postContainer.appendChild(postElement);
  });
};
postMethods();

// implementing pop up window
const postButton = document.querySelector('.see-project');

postButton.forEach((btn) => (btn.addEventListener('click', () => {
  const postdiv = document.createElement('div');
  postdiv.classList.add('main-pop');
  const pop = document.createElement('div');
  pop.classList.add('card-pop');
  postdiv.appendChild(pop);
  pop.innerHTML = `
          <h2>${CardData.name}</h2>
        <ul class="list1">
           <li id="canopy">CANOPY</li>
           <li class="dot"></li>
           <li>Back End Dev</li>
          <li class="dot"></li>
           <li>2015</li>
         </ul>
         <p class="p">${CardData.description}</p>
         <ul class="list2">
          <li class="badge">${CardData.technologies[0]}</li>
           <li class="badge">${CardData.technologies[1]}</li>
           <li class="badge">${CardData.technologies[2]}</li>
         </ul>
          <button type="button" class="see-project">See Project</button>
       </div>
   `;
  postButton.appendChild(postdiv);
})));