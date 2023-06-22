/* eslint-disable array-callback-return */
// Hamburger Menu js events
const body = document.querySelector('body');
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
const see = document.querySelectorAll('.see-project');
see.forEach((btn) => (btn.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main-pop';
  const popup = document.createElement('div');
  popup.className = 'card-pop';
  popup.innerHTML = `
  <h5 class="card-title-pop">Tonic<i class="fas fa-times fa-2xs"></i></h5>
  <ul class="card-list-pop">
    <li class="card-text">CANOPY</li>
    <li class="dot"></li>
    <li class="dev">Back End Dev</li>
    <li class="dot"></li>
    <li class="year">2015</li>
    </ul>
  <img id="one" class="card-img-pop" src="images/Snapshoot 1.png" alt="Tonic project snapshot">
  <div class="left-block">
  <div class="card-body">
              
      <p class="text-pop">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
     <ul class="tags-pop">
     <li id="html"><a href="#" class="tags button1">html</a></li>
     <li id="css"><a href="#" class="tags button2">css</a></li>
     <li id="js"><a href="#" class="tags button3">javascript</a></li>
     </ul> 
      <hr id="hr-pop">
      <div class="btns">
     <div class="project-pop">
      <a id="proj" href="https://fatmahussein.github.io/portfolio/" class="button" >See live &nbsp;<img src="images/live.png"></a>
     </div>
     <div class="project-pop2">
      <a id="proj" href="https://github.com/fatmahussein/portfolio" class="button" >See Source &nbsp;<img src="images/source.png"></a>
     </div>
     </div>
    </div>

  </div>
  
  `;
  main.appendChild(popup);
  body.appendChild(main);

  const close = document.querySelector('.fa-times');
  close.addEventListener('click', () => {
    body.removeChild(main);
  });
})));

see.forEach((btn) => (btn.addEventListener('click', () => {
  const mains = document.createElement('div');
  mains.className = 'main-pop';
  const dPopup = document.createElement('div');
  dPopup.className = 'card-pop';
  dPopup.innerHTML = `
  <h5 class="card-title-pop">Tonic<i class="fas fa-times fa-2xs"></i></h5>
  <ul class="card-list-pop">
    <li class="card-text">CANOPY</li>
    <li class="dot"></li>
    <li class="dev">Back End Dev</li>
    <li class="dot"></li>
    <li class="year">2015</li>
    </ul>
  
  <img id="two" class="card-img-pop" src="vectors/snap20.png" alt="Tonic project snapshot">

  <div class="left-block">
  <div class="card-body">
    <div class="row ">
      <div class="col-8">
      <p class="text-pops">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
    </div>
    <div class="col-4">
    <ul class=" row tags-pops">
    <div class="row" >
      <div class="col"><li id="html"><a href="#" class="tags button1">html</a></li></div>
      <div class="col"><li id="css-pop"><a href="#" class="tags button2">css</a></li></div>
      <div class="col"> <li id="js-pop"><a href="#" class="tags button3">javascript</a></li></div>
     </div>
    <div class="row">
      <div class="col"><li id="git"><a href="#" class=" button3">github</a></li></div>
        <div class="col"><li id="ruby"><a href="#" class=" button3">ruby</a></li></div>
          <div class="col"><li id="bs"><a href="#" class=" button3">Bootstraps</a></li></div>
    </div>
     </ul> 
     <hr id="hr-pop">
     <div class="project-pop">
      <a id="projp" href="https://fatmahussein.github.io/portfolio/" class="button" >See live &nbsp;<img src="vectors/Icon.png"></a>
     </div>
     <div class="project-pop2">
      <a id="projp" href="https://github.com/fatmahussein/portfolio" class="button" >See Source &nbsp;<img src="vectors/git.png"></a>
     </div>
    </div>
    </div>
  </div>
  </div>
  
  `;
  mains.appendChild(dPopup);
  body.appendChild(mains);

  const close = document.querySelector('.fa-times');
  close.addEventListener('click', () => {
    body.removeChild(mains);
  });
})
));

// form validation
// VALIDATE FORM
const form = document.querySelector('#register');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('.error-message');
form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    errorMessage.style.visibility = 'visible';
    event.preventDefault();
  }
});