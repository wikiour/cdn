/*
# Author: WikiOur
# Author website: https://wikiour.com
# GitHub: https://github.com/wikiour
# YouTube: https://youtube.com/@wikiour
# Facebook: https://facebook.com/wikiour
# Instagram: https://instagram.com/wikiour
# Patreon: https://patreon.com/wikiour

Description: Test WebP - Checking WebP support

*/

function testWebp() {
  const supportsWebp = (function () {
    const elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
  });
  if (supportsWebp()) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  };
}; testWebp();
