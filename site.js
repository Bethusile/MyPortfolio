// Get all project cards
const projectCards = document.querySelectorAll('.card');

// Set event listeners to update the modal content
projectCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const carousel = document.getElementById('projectCarousel');
        const carouselItems = carousel.querySelector('.carousel-inner').children;

        // Reset all carousel items to inactive
        Array.from(carouselItems).forEach(item => item.classList.remove('active'));

        // Set the active class to the selected project image
        carouselItems[index].classList.add('active');
    });
});
// Slow down the video playback rate
document.getElementById('hero-video').playbackRate = 0.5;  // Adjust this value to make the video slower (0.5 is 50% of the normal speed)

document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.getElementById("navbarNav");
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        // Only collapse if open
        if (navbarCollapse.classList.contains("show")) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  });

  //NavBar Burger
  // Get the navbar collapse element
    const navbarCollapse = document.getElementById('navbarNav');

    // Get all the nav links inside the navbar collapse
    const navLinks = navbarCollapse.querySelectorAll('.nav-link');

    // Add a click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if the navbar is currently visible (in mobile mode)
            if (navbarCollapse.classList.contains('show')) {
                // Get the Bootstrap collapse instance and hide it
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });

  
  