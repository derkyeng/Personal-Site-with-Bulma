let burger = document.querySelector('.navbar-burger');
let navMenu = document.querySelector('#' + burger.dataset.target);

burger.addEventListener('click', () =>{
    burger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
});