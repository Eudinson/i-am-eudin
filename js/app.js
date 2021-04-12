'use strict';

const navs = document.querySelectorAll('.nav');
const sections = document.querySelectorAll('.section');
const sectionTitle = document.querySelectorAll('.section-title');
const col2 = document.querySelectorAll('.col-2');

const logo = document.querySelector(".logo");
logo.innerText = "< I am eudin />";

let z = 0;

// set the sections default z-index
for (let i = sections.length - 1; i > -1; i--) {
  z++;
  sections[i].style.zIndex = z;
}

// set default front section
sections[0].style.animation = "animate .5s ease-in-out";
sections[0].addEventListener("animationend", () => {
  sectionTitle[0].style.animation = "section-title-show .5s ease";
  sectionTitle[0].style.opacity = 1;
})

sectionTitle[0].style.animation = "section-title-show .5s ease-out";
sectionTitle[0].addEventListener('animationend', () => {
  col2[0].style.animation = "section-title-show .5s ease-out";
  col2[0].style.opacity = 1;
})


// navs interaction with the sections
navs.forEach(menu => {
  menu.addEventListener('click', (e) => {
    for (let i = 0; i < navs.length; i++) {
      if (e.target.innerText === sectionTitle[i].innerText) {
        sections[i].style.zIndex = sections.length;
        sections[i].style.animation = "animate .5s ease-out";
        sections[i].addEventListener("animationend", () => {
          sectionTitle[i].style.animation = "section-title-show .5s ease-out";
          sectionTitle[i].style.opacity = 1;
          sectionTitle[i].addEventListener('animationend', () => {
            col2[i].style.animation = "section-title-show .5s ease-out";
            col2[i].style.opacity = 1;
          })
        });
      } else {
        sections[i].style.zIndex = sections[i].style.zIndex - 1;
        sections[i].style.animation = "none";
        sectionTitle[i].style.animation = "none";
        sectionTitle[i].style.opacity = 0;
        col2[i].style.animation = "none";
        col2[i].style.opacity = 0;
      }
    }
  })
})

// Project Slide

const slides = document.querySelector('.project-slide');
const projectTitle = document.querySelector('.project-title');
const caseStudy = document.querySelector('.case-study');
const projectImage = document.querySelector('.project-img');
const projectLink = document.querySelector('.project-link');

const btnPre = document.querySelector('.btn-pre');
const btnNext = document.querySelector('.btn-next');

const webTitles = [
  "Corner2corner UAE",
  "Findway Nuvola",
  "Play A Maze",
  "Mittal Facility",
  "Agatha Chic",
  "Mittal Contracting",
  "Bible Quick Search",
  "Bible Quiz Game"
];

const caseStudies = [
  "Redesign the old website using wordpress platform, make it responsive to all screen sizes and apply SEO.",
  "Implement custom single page design from figma with custom animation to wordpress website.",
  "Redesign the single page website, install SSL certificate, fix broken links, add mailchimp integration and apply SEO.",
  "Build a simple website from wordpress template given by the owner, make it responsive, apply SEO.",
  "Build a simple ecommerce website using wordpress woocommerce.",
  "Redesign the old website using plain html, css, js, bootstrap, jquery and make it responsive.",
  "Build an app where a user can search quickly a specific passage from the Bible.",
  "Build an app using c# winform. Bible quiz game for fun, testing, and learning."
];

const imgs = [];
imgs[0] = "imgs/projects/corner2corner.jpg";
imgs[1] = "imgs/projects/findway nuvola.jpg";
imgs[2] = "imgs/projects/playamaze.jpg";
imgs[3] = "imgs/projects/mittal facility.jpg";
imgs[4] = "imgs/projects/agatha chic.jpg";
imgs[5] = "imgs/projects/mittal contracting.jpg";
imgs[6] = "imgs/projects/bible quick search.jpg";
imgs[7] = "imgs/projects/Bible-Quiz-Game.png";

const webLinks = [
  "https://corner2corner.ae/",
  "https://findway.nuvola.co.il/",
  "https://plmaze.com/",
  "https://www.mittalfacility.com/",
  "https://agathachic.com/",
  "https://www.mittalconstruction.com/",
  "https://eudinson.github.io/quick-search-bible/",
  "https://eudinson.github.io/Bible-Quiz-Game/",
];


let count = webTitles.length;

projectTitle.innerText = webTitles[0];
caseStudy.innerHTML = '<span class="case">Case Study</span> - ' + caseStudies[0];
projectImage.src = imgs[0];
projectLink.innerText = "visit website >>";
projectLink.href = webLinks[0];

const previous = () => {
  btnPre.style.pointerEvents = "none";
  count--;

  if (count <= -1) {
    count = webTitles.length - 1;
  }

  projectTitle.innerText = webTitles[count];
  caseStudy.innerHTML = '<span class="case">Case Study</span> - '+ caseStudies[count];
  projectImage.src = imgs[count];
  projectLink.href = webLinks[count];

  slides.style.animation = "slidePrevious .8s ease-out";
  slides.addEventListener('animationend', () => {
    slides.style.animation = "none";
    btnPre.style.pointerEvents = "all";
  })
}

const next = () => {
  btnNext.style.pointerEvents = "none";
  count++;
  if (projectTitle.innerText === webTitles[0]) {
    count = 1;
  }

  if (count >= webTitles.length) {
    count = 0;
  }
  projectTitle.innerText = webTitles[count];
  caseStudy.innerHTML = '<span class="case">Case Study</span> - '+ caseStudies[count];
  projectImage.src = imgs[count];
  projectLink.href = webLinks[count];

  slides.style.animation = "slideNext .8s ease-out";
  slides.addEventListener('animationend', () => {
    slides.style.animation = "none";
    btnNext.style.pointerEvents = "all";
  })

}

btnNext.addEventListener('click', next);
btnPre.addEventListener('click', previous);

btnPre.innerText = "<";
btnNext.innerText = ">";



// Mobile




const burger = document.querySelector('.burger-container');
const navContainer = document.querySelector('.nav-container');

const animateNav = () => {
  burger.classList.toggle('burger-rotate');
  navContainer.classList.toggle('nav-container-animation');
  navs.forEach(nav => {
    nav.addEventListener('click', () => {
      navContainer.classList.remove('nav-container-animation');
      burger.classList.remove('burger-rotate');
    })
  })
}

burger.addEventListener('click', animateNav);



















var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "none"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
