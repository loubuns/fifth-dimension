var gif = document.getElementById("gif");
// Set the opacity to 0 to hide the GIF initially
gif.style.opacity = 0;

// Wait for the GIF to load
gif.addEventListener("load", function() {
  // Set the opacity to 1 to show the GIF
  gif.style.opacity = 1;

  // Get the duration of the GIF in seconds
  var duration = gif.duration || 5;

  // Set a timeout to fade out the GIF after it has played once
  setTimeout(function() {
    // Fade out the GIF
    gif.style.opacity = 0;

    // Wait for the fadeout to complete before hiding the GIF container and redirecting to homepage.html
    setTimeout(function() {
      var gifContainer = document.getElementById("gif-container");
      gifContainer.style.display = "none";
      window.location.href = "homepage.html";
    }, 500); // This delay should match the duration of the transition in CSS
  }, duration * 1000);
});

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	// Toggle Nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		// Burger Animation
		burger.classList.toggle('toggle');
	});

	// Close Nav on Nav Link Click
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			nav.classList.remove('nav-active');
			burger.classList.remove('toggle');
		});
	});
}

navSlide
