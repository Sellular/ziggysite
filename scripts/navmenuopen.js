const menuButton = document.getElementById('menu-button');
const navbar = document.getElementById('navbar');

menuButton.addEventListener('click', e => {
    menuButton.classList.toggle('active');
    navbar.classList.toggle('open');
    e.stopPropagation();
});

document.addEventListener('click', () => {
    menuButton.classList.remove('active');
    navbar.classList.remove('open');
})