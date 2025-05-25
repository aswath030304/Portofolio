 const roles = ["Engineer.", "Web Designer.", "Python Developer."]; // You can add more
 const typedText = document.getElementById("typed-text");

 let roleIndex = 0;
 let charIndex = 0;
 let isDeleting = false;

 function type() {
 const currentRole = roles[roleIndex];
 const displayedText = currentRole.substring(0, charIndex);
 typedText.textContent = displayedText;

 if (!isDeleting && charIndex < currentRole.length) {
 charIndex++;
 setTimeout(type, 200);
 } else if (isDeleting && charIndex > 0) {
 charIndex--;
 setTimeout(type, 100);
 } else {
 isDeleting = !isDeleting;
 if (!isDeleting) {
 roleIndex = (roleIndex + 1) % roles.length;
 }
 setTimeout(type, 1000);
 }
 }
 type()



 window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const homeSection = document.querySelector('#home');

    const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
    
    if (window.scrollY > homeBottom - 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Select all navbar links
const navLinks = document.querySelectorAll('nav.navbar ul li a');

// Function to update active link on scroll
function updateActiveNavLink() {
  let scrollPos = window.scrollY || window.pageYOffset;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      const sectionTop = section.offsetTop - 60; // Adjust offset for header height if any
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

// Run on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Run on page load in case page loads mid-section
window.addEventListener('load', updateActiveNavLink);

// Add click event to update active class immediately when user clicks
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
