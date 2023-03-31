/*
# Author: WikiOur
# Author website: https://wikiour.com
# GitHub: https://github.com/wikiour
# Patreon: https://patreon.com/wikiour
# YouTube: https://youtube.com/@wikiour
# Facebook: https://facebook.com/wikiour
# Instagram: https://instagram.com/wikiour

Description: Full Nav Menu 

*/

function navMenu() {

  const navMenu = 'nav-menu';
  const navMenuSpan = 'nav-menu-span';
  const navMenuLi = 'nav-menu-li';
  const navMenuUl = 'nav-menu-ul';
  const navSubMenu = 'nav-sub-menu';
  const navMenuActive = 'active';

  if (document.querySelector(`.${navMenu}`)) {
    const nav = document.querySelector(`.${navMenu}`);
    nav.querySelectorAll('li').forEach((li) => {
      let ul = li.querySelector('ul');
      if (ul) {
        let span = document.createElement('span');
        span.classList.add(navMenuSpan);
        while (li.firstChild !== ul) {
          span.appendChild(li.firstChild);
        }
        li.insertBefore(span, ul);
        li.classList.add(navMenuLi);
        ul.classList.add(navMenuUl);
        nav.classList.add(navSubMenu);
      }
    });

    document.addEventListener('click', function (event) {
      if (event.target.nodeName === 'SPAN' && event.target.classList.contains(navMenuSpan)) {
        closeSub(event.target.nextElementSibling);
        event.target.nextElementSibling.classList.toggle(navMenuActive);
        closeSubLI(event.target.parentElement);
        event.target.parentElement.classList.toggle(navMenuActive);
      }
      addSpanClass();
    });

    if (document.querySelector(`.${navMenuLi}`)) {
      const navMenuLiElements = document.querySelectorAll(`.${navMenuLi}`);
      navMenuLiElements.forEach((li) => {
        li.addEventListener('mouseenter', (event) => {
          setTimeout(() => {
            const nestedUlElement = event.target.querySelector(`.${navMenuUl}`);
            if (nestedUlElement) {
              nestedUlElement.classList.add(navMenuActive);
              event.target.classList.add(navMenuActive);
            }
            addSpanClass();
          }, 10);
        });
        li.addEventListener('mouseleave', (event) => {
          setTimeout(() => {
            const nestedUlElement = event.target.querySelector(`.${navMenuUl}`);
            if (nestedUlElement) {
              nestedUlElement.classList.remove(navMenuActive);
              event.target.classList.remove(navMenuActive);
            }
            addSpanClass();
          }, 10);
        });
      });
    };

    document.addEventListener('click', function (event) {
      const navigElement = document.querySelector(`.${navMenu}`);
      const clickedElement = event.target;
      if (!navigElement.contains(clickedElement)) {
        closeSub();
        closeSubLI();
        addSpanClass();
      }
    });

    const linkElements = document.querySelectorAll('a');
    linkElements.forEach(function (link) {
      link.addEventListener('click', function () {
        closeSub();
        closeSubLI();
        addSpanClass();
      });
    });

    function addSpanClass() {
      function updateActiveClass(li) {
        if (li.classList.contains(navMenuLi) && li.classList.contains(navMenuActive)) {
          let spans = li.querySelectorAll('span');
          spans.forEach(span => span.classList.add(navMenuActive));
        } else {
          let spans = li.querySelectorAll('span');
          spans.forEach(span => span.classList.remove(navMenuActive));
        }
        let childUl = li.querySelector('ul');
        if (childUl) {
          let childLis = childUl.querySelectorAll('li');
          childLis.forEach(childLi => updateActiveClass(childLi));
        }
      }
      let rootLis = document.querySelectorAll(`li.${navMenuLi}`);
      rootLis.forEach(rootLi => updateActiveClass(rootLi));
    };

    function closeSub(current = null) {
      let parents = [];
      if (current) {
        let currentParent = current.parentNode;
        while (currentParent) {
          if (currentParent.classList.contains(navMenu)) break;
          if (currentParent.nodeName === 'UL') parents.push(currentParent);
          currentParent = currentParent.parentNode;
        }
      }
      const subElement = document.querySelectorAll(`.${navMenu} ul`);
      Array.from(subElement).forEach(item => {
        if (item != current && !parents.includes(item))
          item.classList.remove(navMenuActive);
      });
    };

    function closeSubLI(current = null) {
      let parents = [];
      if (current) {
        let currentParent = current.parentNode;
        while (currentParent) {
          if (currentParent.classList.contains(navMenu)) break;
          if (currentParent.nodeName === 'LI') parents.push(currentParent);
          currentParent = currentParent.parentNode;
        }
      }
      const subElement = document.querySelectorAll(`.${navMenu} li`);
      Array.from(subElement).forEach(item => {
        if (item != current && !parents.includes(item))
          item.classList.remove(navMenuActive);
      });
    };
  }
}; navMenu();

