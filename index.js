// navigation button 
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const closeSearchButton = document.getElementById('closeSearchBtn');
const searchMobile = document.getElementById('searchBtnMobile');
const searchInputMobile = document.getElementById('searchInputMobile');
const closeSearchMobile = document.getElementById('closeSearchBtnMobile');
const closeMenuMobile = document.getElementById('closeMenuMobile');
const menu = document.querySelector('.mobile-nav');
const menuButton = document.querySelector('.menu');

searchBtn.addEventListener('click', function() {
  searchInput.classList.toggle('active');
  closeSearchButton.classList.toggle('active');
});
searchMobile.addEventListener('click', function() {
    searchInputMobile.classList.toggle('active');
    closeSearchMobile.classList.toggle('active');
});
closeSearchButton.addEventListener('click', function() {
    searchInput.classList.remove('active');
    closeSearchButton.classList.remove('active');
  });
  closeSearchMobile.addEventListener('click', function() {
    searchInputMobile.classList.remove('active');
    closeSearchMobile.classList.remove('active');
  });
//   closeMenuMobile.addEventListener('click', function() {
//     menu.classList.toggle('active');
//   });
//   menuButton.addEventListener('click', function() {
//     console.log("ok")
//     menu.classList.toggle('active');
//   });
  menuButton.addEventListener('click', function() {
    menu.style.display = 'flex';
    console.log('ok')
    gsap.to(menu, {
      height: '300px',
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
  closeMenuMobile.addEventListener('click', function() {
    gsap.to(menu, {
      height: 0,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => {
        menu.style.display = 'none';
      }
    });
  });

  // animation.js

const leftElement = document.querySelector('.left');
const rightElement = document.querySelector('.right');
const navElement = document.querySelector('.nav');
const textH1Element = document.querySelector('.text h1');
const textPElement = document.querySelector('.text p');
const niaElement = document.querySelector('.nia');
const bottomNavLiElements = document.querySelectorAll('.bottomnav ul li');
const infoElement = document.querySelector('.info');
const nameElement = document.querySelector('.name');

let initialX = 500;

const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewportWidth <= 596 && viewportWidth >= 501) {
  initialX = 400;
}
if(viewportWidth <= 501) {
    console.log(viewportWidth)
    initialX = 300;
}


gsap.to(leftElement, 2, {
  delay: 0.8,
  width: '50%',
  ease: Power2.easeInOut
});

gsap.to(rightElement, 2, {
  delay: 0.6,
  width: '50%',
  ease: Power3.easeInOut
});

gsap.from(navElement, 2, {
  delay: 0.8,
  opacity: 0,
  ease: Expo.easeInOut
});

gsap.from(textH1Element, 2, {
  delay: 0.6,
  x: 1000,
  ease: Circ.easeInOut
});

gsap.from(textPElement, 2, {
  delay: 0.7,
  x: 1000,
  ease: Circ.easeInOut
});

gsap.to(niaElement, 2, {
  delay: 1.5,
  width: '100%',
  ease: Power2.easeInOut
});

gsap.from(bottomNavLiElements, {
    duration: 2,
    delay: 1,
    x: 1000,
    ease: "circ.inOut",
    stagger: 0.08
  });

gsap.from(infoElement, 2, {
  delay: 1.5,
  y: 100,
  ease: Circ.easeInOut
});

gsap.from(nameElement, 2, {
    delay: 1.5,
    x: initialX,
    ease: Circ.easeInOut
  });
 
