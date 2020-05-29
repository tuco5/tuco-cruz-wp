
// NAVIGATION FUNCTIONALITY
let links = document.querySelectorAll('.navigation__link');

links.forEach(link => {
    link.addEventListener("click",()=>{
        document.querySelector('.navigation__checkbox').checked=false
    })
});


// GALLERY FUNCTIONALITY
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("js--gallery__item");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }

    slides[slideIndex-1].style.opacity = 1;
};


// RELOAD GALLERY
function reloadGallery() {
    console.log();
    var slides = document.getElementsByClassName("js--gallery__item");
    if (window.innerWidth >= 900) {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.opacity = 1;
        }
    }
}

window.addEventListener('resize', reloadGallery);
window.addEventListener('load', reloadGallery);


// SECTION ANIMATIONS
const bookElement = document.querySelector('.js--book');
const sectionBenefitsElement = document.querySelector('.js--section-benefits');


function animateBook(scrollPosition) {
    let bookPosition = bookElement.offsetTop - 300;
    let featurePosition = sectionBenefitsElement.offsetTop - 300;

    if (scrollPosition >= featurePosition) {
        sectionBenefitsElement.classList.add('feature-box--animated-top');
    }

    if (scrollPosition >= bookPosition) {
        bookElement.classList.add('book--animated-left');
    }
}

window.addEventListener('scroll', (e) => {

    window.requestAnimationFrame( () => {
        animateBook(window.scrollY);
    });

}, {passive: true});

