// Mobile Navigation Toggle
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon) {
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Simple contact form feedback (frontend only)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
    contactForm.reset();
  });
}

// Highlight active navigation link
const currentPage = window.location.pathname.split('/').pop();
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.style.color = '#fff';
    link.style.fontWeight = 'bold';
  }
});