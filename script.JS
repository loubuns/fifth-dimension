var gif = document.getElementById("gif");
gif.style.opacity = 0;


gif.addEventListener("load", function() {
  gif.style.opacity = 1;

  var duration = gif.duration || 5;

  setTimeout(function() {
    gif.style.opacity = 0;

    setTimeout(function() {
      var gifContainer = document.getElementById("gif-container");
      gifContainer.style.display = "none";
      window.location.href = "homepage.html";
    }, 500);
  }, duration * 1000);
});

const passwordForm = document.getElementById('password-form');
const passwordInput = document.getElementById('password');

passwordForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const password = passwordInput.value;

  if (password === 'password') {
    // Correct password. Show the website.
    window.location.href = 'lockedvault.html';
  } else {
    // Incorrect password. Show an error message.
    alert('Incorrect password. Please try again.');
  }
});