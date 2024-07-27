window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const aboutSection = document.querySelector('.about-section');
  const header = document.querySelector('header');

  if (scrollY > aboutSection.offsetTop + aboutSection.offsetHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
