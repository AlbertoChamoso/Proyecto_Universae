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

    setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos (5000 milisegundos)
});
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const btnInicio = document.getElementById("btnInicio");

    let currentSlide = 0;

    // Mostrar la primera imagen
    slides[currentSlide].classList.add("active");

    // Función para avanzar al siguiente slide
    function nextSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    // Cambiar al siguiente slide cada 3 segundos (3000 milisegundos)
    setInterval(nextSlide, 5000);

    // Redirigir al hacer clic en el botón de inicio
    btnInicio.addEventListener("click", function() {
        window.location.href = "index.html"; // Cambia "index.html" por la ruta de tu página principal
    });
});

