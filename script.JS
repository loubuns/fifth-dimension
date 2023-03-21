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

const colors = ["#e03776","#8f3e98","#4687bf","#3bab6f","#f9c25e","#f47274"];
const SVG_NS = 'http://www.w3.org/2000/svg';
const SVG_XLINK = "http://www.w3.org/1999/xlink";

let heartsRy = []

function useTheHeart(n){
  let use = document.createElementNS(SVG_NS, 'use');
  use.n = n;
  use.setAttributeNS(SVG_XLINK, 'xlink:href', '#heart');
  use.setAttributeNS(null, 'transform', `scale(${use.n})`);
  use.setAttributeNS(null, 'fill', colors[n%colors.length]);
  use.setAttributeNS(null, 'x', -69);
  use.setAttributeNS(null, 'y', -69);
  use.setAttributeNS(null, 'width', 138);
  use.setAttributeNS(null, 'height', 138);
  
  heartsRy.push(use)
  hearts.appendChild(use);
}

for(let n = 18; n >= 0; n--){useTheHeart(n)}

function Frame(){
  window.requestAnimationFrame(Frame);
  for(let i = 0; i < heartsRy.length; i++){
    if(heartsRy[i].n < 18){heartsRy[i].n +=.01
     }else{
     heartsRy[i].n = 0;
     hearts.appendChild(heartsRy[i])
    }
    heartsRy[i].setAttributeNS(null, 'transform', `scale(${heartsRy[i].n})`);
  }
}

Frame()
