window.onload = function() {
  
  // Change the slideshow picture at the bottom of the page when you click it.
  var whichImage = 0;

  var images = ["Unit1_WebDevelopment/portfolio-with-js/img1.png",
                "Unit1_WebDevelopment/portfolio-with-js/img2.png",
                "Unit1_WebDevelopment/portfolio-with-js/img3.png"];

  document.getElementById("slideshow").onclick = function() {
    whichImage = whichImage + 1;
    if (whichImage > 2) {
      whichImage = 0;
    }
    document.getElementById("slideshow").src = images[whichImage];
  }
}