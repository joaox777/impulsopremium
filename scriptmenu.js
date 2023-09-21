

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






