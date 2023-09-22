

// Função para mostrar/ocultar o menu em telas menores
function toggleMenu() {
    var menu = document.getElementById('header').querySelector('ul');
    if (menu.style.display === 'block' || menu.style.display === '') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Adicione um evento de clique ao botão do menu de hambúrguer
document.getElementById('menu-button').addEventListener('click', toggleMenu);


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



