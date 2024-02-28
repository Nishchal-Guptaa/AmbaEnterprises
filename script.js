document.getElementById('menu-icon').addEventListener('click', function () {
  var navLinks = document.getElementById('nav-links');
  navLinks.style.display = (navLinks.style.display === 'block') ? 'none' : 'block';
});

document.getElementById('usericon').addEventListener('click', function () {
  window.location.href = 'user.html';
});

// Home page slide show
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Dealership
function Dealership() {
  var resumeUrl = "dealership.pdf";
  window.open(resumeUrl, '_blank')
}

function openGoogleMaps() {

  var address = 'Amba Enterprises, Bada Bazar, Basai Road, Near Bhuteshwar Mandir, Gurugram';
  var googleMapsUrl = 'https://www.google.com/maps/place/Amba+Enterprises/@28.457813,77.0221211,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1830581572f5:0x50a48c58c834b017!8m2!3d28.457813!4d77.024696!16s%2Fg%2F1tjdpql8?entry=ttu' + address;

  // Open a new tab or window with the Google Maps link
  window.open(googleMapsUrl, '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
  window.onscroll = function () {
    showBackToTopButton();
  };
});

function showBackToTopButton() {
  var button = document.querySelector('.back-to-top');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
