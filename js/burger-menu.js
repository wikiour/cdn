/*
# Author: WikiOur
# Author website: https://wikiour.com
# GitHub: https://github.com/wikiour
# Patreon: https://patreon.com/wikiour
# YouTube: https://youtube.com/@wikiour
# Facebook: https://facebook.com/wikiour
# Instagram: https://instagram.com/wikiour

Description: Burger Menu

*/

function burger() {
  let body = document.querySelector('body');
  let headerMenu = document.querySelector('.header-menu');
  let burger = document.querySelector('.burger');
  let spanBurger = document.querySelector('span.burger');

  if (document.querySelector('.header-menu')) {
    burger.addEventListener('click', function () {
      body.classList.toggle('lock-menu');
      headerMenu.classList.toggle('open');
      burger.classList.toggle('open');
      spanBurger.classList.toggle('open');
    });
  }
}; burger();