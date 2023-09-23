
// Função para mostrar/ocultar o menu em telas menores e ajustar a posição do botão
function toggleMenu() {
    var menu = document.getElementById('menu');
    var menuButton = document.getElementById('menu-button');
    
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuButton.classList.remove('active');
    } else {
        menu.classList.add('active');
        menuButton.classList.add('active');
    }
}


// Adicione um ouvinte de eventos para o botão de hambúrguer
var menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', toggleMenu);

// Adicione um ouvinte de eventos para ocultar o menu quando um link for clicado
var menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var menu = document.getElementById('menu');
        menu.classList.remove('active');
    });
});


// script slider

$(document).ready(function () {
    const largeCarousel = $(".carousel-large");
    const smallCarousel = $(".carousel-small");
    const slides = largeCarousel.find(".carousel-slide");
    const smallSlides = smallCarousel.find(".carousel-slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.hide();
        smallSlides.hide();
        slides.eq(index).show();
        smallSlides.eq(index).show();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Inicialmente, exiba o primeiro slide
    showSlide(currentIndex);

    // Configure o intervalo para trocar os slides a cada 5 segundos
    setInterval(nextSlide, 5000);
});



