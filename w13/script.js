const p = document.querySelector('.main-menu');
const mainMenu = document.querySelector('.main-nav .main-menu');

p.addEventListener('click', function () {
    mainMenu.classList.toggle('show');
})