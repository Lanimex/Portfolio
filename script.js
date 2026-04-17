// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Highlight active nav section on scroll =====
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

// ===== Header: add .scrolled when past hero =====
const heroHeader = document.querySelector('.hero-header');
function updateHeaderScrolled() {
  if (window.scrollY > 80) heroHeader?.classList.add('scrolled');
  else heroHeader?.classList.remove('scrolled');
}
window.addEventListener('scroll', updateHeaderScrolled);
updateHeaderScrolled();

// ===== Section reveal on scroll =====
const sectionEls = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  },
  { rootMargin: '-40px 0px -60px 0px', threshold: 0 }
);
sectionEls.forEach((el) => sectionObserver.observe(el));

// ===== Bento cell stagger reveal =====
const bentoCells = document.querySelectorAll('.bento-cell');
const bentoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { rootMargin: '-20px 0px -40px 0px', threshold: 0.1 }
);
bentoCells.forEach((cell) => bentoObserver.observe(cell));

// ===== Magnetic button ripple effect =====
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    btn.style.setProperty('--mouse-x', `${x}%`);
    btn.style.setProperty('--mouse-y', `${y}%`);
  });
});

// ===== Cursor spotlight (follows mouse) =====
const spotlight = document.querySelector('.cursor-spotlight');
if (spotlight && window.matchMedia('(hover: hover)').matches) {
  let spotlightActive = false;
  
  document.addEventListener('mousemove', (e) => {
    if (!spotlightActive) {
      spotlight.classList.add('active');
      spotlightActive = true;
    }
    spotlight.style.left = e.clientX + 'px';
    spotlight.style.top = e.clientY + 'px';
  });

  document.addEventListener('mouseleave', () => {
    spotlight.classList.remove('active');
    spotlightActive = false;
  });
}

// ===== Subtle cursor-follow tilt on cards (desktop only) =====
if (window.matchMedia('(hover: hover)').matches) {
  const tiltTargets = document.querySelectorAll('.project-card, .bento-card');
  const MAX_DEG = 2.5;

  tiltTargets.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const ry = (x - 0.5) * MAX_DEG * 2;
      const rx = (0.5 - y) * MAX_DEG * 2;
      card.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
      card.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.removeProperty('--rx');
      card.style.removeProperty('--ry');
      setTimeout(() => { card.style.transition = ''; }, 500);
    });
  });
}

// ===== Typewriter effect for section labels =====
const sectionLabels = document.querySelectorAll('.section-label');
const labelObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.revealed) {
        entry.target.dataset.revealed = 'true';
        const text = entry.target.textContent;
        entry.target.textContent = '';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
        let i = 0;
        const type = () => {
          if (i < text.length) {
            entry.target.textContent += text[i];
            i++;
            requestAnimationFrame(() => setTimeout(type, 30));
          }
        };
        type();
      }
    });
  },
  { threshold: 0.5 }
);
sectionLabels.forEach((label) => labelObserver.observe(label));

// ===== Scroll-to-top button =====
const scrollTopBtn = document.getElementById('scroll-to-top');
if (scrollTopBtn) {
  function updateScrollTopVisibility() {
    if (window.scrollY > 600) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }
  
  window.addEventListener('scroll', updateScrollTopVisibility);
  updateScrollTopVisibility();

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== Footer year =====
const yearEl = document.getElementById('footer-year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ===== Parallax scroll variable =====
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
      ticking = false;
    });
    ticking = true;
  }
});
