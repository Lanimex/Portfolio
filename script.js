// Smooth scroll for anchor links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight active nav section on scroll (hero nav + sidebar)
const sections = document.querySelectorAll('#bio, #projects, #skills, #interests, #blog, #contact');
const allNavLinks = document.querySelectorAll('.hero-nav a');

function setActiveNav() {
  const scrollY = window.scrollY + 120;
  let activeId = null;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      activeId = section.id;
    }
  });

  allNavLinks.forEach((link) => {
    const href = link.getAttribute('href');
    const linkId = href && href.startsWith('#') ? href.slice(1) : null;
    if (linkId === activeId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', setActiveNav);
setActiveNav();

// Header: add .scrolled when past hero
const heroHeader = document.querySelector('.hero-header');
function updateHeaderScrolled() {
  if (window.scrollY > 80) heroHeader?.classList.add('scrolled');
  else heroHeader?.classList.remove('scrolled');
}
window.addEventListener('scroll', updateHeaderScrolled);
updateHeaderScrolled();

// Section reveal on scroll
const sectionEls = document.querySelectorAll('.section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  },
  { rootMargin: '-40px 0px -60px 0px', threshold: 0 }
);
sectionEls.forEach((el) => observer.observe(el));
