/*
# Author: WikiOur
# Author website: https://wikiour.com
# GitHub: https://github.com/wikiour
# Patreon: https://patreon.com/wikiour
# YouTube: https://youtube.com/@wikiour
# Facebook: https://facebook.com/wikiour
# Instagram: https://instagram.com/wikiour

Description:  This script helps to implement a mobile menu

*/

function burger() {
  let body = document.querySelector('body');
  let headerMenu = document.querySelector('.header-menu');
  let burger = document.querySelector('.burger');
  let burgerOpen = document.querySelector('.burger-open');
  let burgerClose = document.querySelector('.burger-close');


  if (document.querySelector('.burger')) {
    burger.addEventListener('click', function () {
      body.classList.toggle('lock-menu');
      headerMenu.classList.toggle('open');
      burgerOpen.classList.toggle('open');
      burgerClose.classList.toggle('close');
    });
  }
}; burger();
