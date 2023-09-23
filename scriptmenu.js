// Função para mostrar/ocultar o menu em telas menores e ajustar a posição do botão
function toggleMenu() {
    var menu = document.getElementById('menu');
    var menuButton = document.getElementById('menu-button');
    var closeButton = document.getElementById('close-button');

    if (menu.classList.contains('opened')) {
        menu.classList.remove('opened');
        menuButton.classList.remove('active');
        closeButton.style.display = 'none';
    } else {
        menu.classList.add('opened');
        menuButton.classList.add('active');
        closeButton.style.display = 'block';
    }
}

// Adicione um ouvinte de eventos para o botão de hambúrguer
document.getElementById('menu-button').addEventListener('click', toggleMenu);

// Adicione um ouvinte de eventos para o botão de fechar
document.getElementById('close-button').addEventListener('click', toggleMenu);


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
