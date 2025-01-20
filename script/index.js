//  menu hamburguer
const hamburger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');

// Abrir ou fechar o menu ao clicar no botão hambúrguer
hamburger.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menuMobile.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    // Fechar o menu apenas se o clique não for no menu nem no botão
    if (!isClickInsideMenu && !isClickOnHamburger && menuMobile.classList.contains('active')) {
        menuMobile.classList.remove('active');
    }
});



//locations
function inicio() {
    window.location.href = "#slider";
}

function empresa() {
    window.location.href = "#empresa";
}
function vantagem(){
    window.location.href = "#vantagem";
}
function vantagem(){
    window.location.href =  "#vantagem";
}

function whats() {
    window.location.href = "https://wa.link/jnllgx";
}