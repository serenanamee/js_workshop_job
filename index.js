let burger = document.querySelector('.navbar-menu');
let navbarClick = document.querySelector('.navbar-burger');

navbarClick.addEventListener('click', function () {
  burger.classList.toggle('is-active')
}, false)