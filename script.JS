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
