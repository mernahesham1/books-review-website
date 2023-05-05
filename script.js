function changebg(){
    var navbar = document.getElementById('navbar');
    var scrollvalue = window.scrollY;
    if(scrollvalue <150){
        navbar.classList.remove('bgcolor');
    }
    else{
        navbar.classList.add('bgcolor');
    }
}
window.addEventListener('scroll' , changebg)


var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },

  });










