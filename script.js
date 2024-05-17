let typed = new Typed(".auto-input", {
  strings: ["Student", "Back-end Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("portfolio-card");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
}

let certificateIndex = 1;
certificateSlide(certificateIndex);

function certificatePlus(x) {
  certificateSlide(certificateIndex += x);
}

function liveSlide(x) {
  certificateSlide(certificateIndex = x);
}

function certificateSlide(x) {
  let i;
  let slides = document.getElementsByClassName("certificate-slide");
  let dots = document.getElementsByClassName("democ");
  let keteranganText = document.getElementById("keterangan");
  if (x > slides.length) {certificateIndex = 1}
  if (x < 1) {certificateIndex = slides.length}
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
  keteranganText.innerHTML = dots[certificateIndex-1].alt;
}
