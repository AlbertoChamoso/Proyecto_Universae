document.addEventListener ('DOMContentLoaded',function(){
    eventListeners();

    
    
});

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click',navegacionResponsive);

}


function navegacionResponsive(){
    const navegacion = document.querySelector ('.navegacion');

    navegacion.classList.toggle('mostrar')
}
$(document).ready(function() {
    var slides = $('.slide');
    var currentSlide = 0;
    
    function nextSlide() {
        slides.eq(currentSlide).removeClass('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides.eq(currentSlide).addClass('active');
    }

    setInterval(nextSlide, 2000); // Cambia la imagen cada 5 segundos (5000 milisegundos)
});

