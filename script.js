
    /* Open when someone clicks on the span element */

function openNav() {
  document.getElementById("sidenav").style.width = "30%";
}


/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("sidenav").style.width = "10%";
}

let typed = new Typed(".auto-input", {
      strings: ["Student", "Back-end Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    })

    
// script slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("portfolio-card");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// script slider end
  


    let certificateIndex = 1;
certificateSlide(certificateIndex);

// setelah/sebelumious controls
function certificatePlus(n) {
  certificateSlide(certificateIndex += n);
}

// Thumbnail image controls
function liveSlide(n) {
  certificateSlide(certificateIndex = n);
}

function certificateSlide(n) {
  let i;
  let slides = document.getElementsByClassName("certificate-slide");
  let dots = document.getElementsByClassName("democ");
  let keteranganText = document.getElementById("keterangan");
  if (n > slides.length) {certificateIndex = 1}
  if (n < 1) {certificateIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (certificateIndex > slides.length) {certificateIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[certificateIndex-1].style.display = "block";
  dots[certificateIndex-1].className += " active";
  setTimeout(showSlides, 2000);
  keteranganText.innerHTML = dots[certificateIndex-1].alt;

}
