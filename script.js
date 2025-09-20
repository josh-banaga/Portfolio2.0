const navbarToggle = document.querySelector('.nav-toggle');
const navbarMenu = document.querySelector('.nav-menu')


navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active')
})