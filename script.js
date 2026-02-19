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
const allNavLinks = document.querySelectorAll('.hero-nav a, .nav-links a');

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
