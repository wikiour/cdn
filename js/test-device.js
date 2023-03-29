/*
# Author: WikiOur
# Author website: https://wikiour.com
# GitHub: https://github.com/wikiour
# Patreon: https://patreon.com/wikiour
# YouTube: https://youtube.com/@wikiour
# Facebook: https://facebook.com/wikiour
# Instagram: https://instagram.com/wikiour

Description: This script defines the device and adds technical classes

*/


function mobileDesktop() {
  let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
  };

  let body = document.querySelector('body');
  if (isMobile.any()) {
    body.classList.add('touch');

  } else {
    body.classList.add('mouse');
  }
  
}; mobileDesktop();
