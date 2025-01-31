// script.js

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// GSAP Animations
gsap.from('.hero h1', {
  opacity: 0,
  y: -50,
  duration: 1.5,
  delay: 0.5
});

gsap.from('.hero p', {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 1
});

gsap.from('.cta-button', {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 1.5
});

gsap.from('.feature-item', {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: '.features',
    start: 'top 80%'
  }
});

gsap.from('.project-item', {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: '.projects',
    start: 'top 80%'
  }
});