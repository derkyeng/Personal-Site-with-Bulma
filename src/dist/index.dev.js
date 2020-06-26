"use strict";

var burger = document.querySelector('.navbar-burger');
var navMenu = document.querySelector('#' + burger.dataset.target);
burger.addEventListener('click', function () {
  burger.classList.toggle('is-active');
  navMenu.classList.toggle('is-active');
});