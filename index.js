const $ = document;
const navbar = $.querySelector('#navbar');
const mainDoc = $.querySelector('#main-doc');
const toogleNav = $.querySelector('#toogleNavBar');
const backdrop = $.querySelector('#backdrop');

responsiveNavBar();
window.addEventListener('resize', responsiveNavBar);

function responsiveNavBar() {
  const width = window.innerWidth;
  if (width < 1024) {
    navbar.classList.add('hideNav');
    mainDoc.classList.add('hideNav');
    toogleNav.classList.add('hideNav');
  } else {
    navbar.classList.remove('hideNav');
    navbar.classList.remove('open');
    backdrop.classList.remove('open');
    mainDoc.classList.remove('hideNav');
    toogleNav.classList.remove('hideNav');
  }
}

toogleNav.addEventListener('click', () => {
  navbar.classList.toggle('open');
  backdrop.classList.toggle('open');
});

backdrop.addEventListener('click', () => {
  navbar.classList.remove('open');
  backdrop.classList.remove('open');
});

navbar.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')) {
    if (navbar.classList.contains('open')) {
      navbar.classList.remove('open');
      backdrop.classList.remove('open');
    }
  }
});
