/* 
# Author: WikiOur
# Author website: https://wikiour.com
# Patreon: https://patreon.com/wikiour
# GitHub: https://github.com/wikiour
# YouTube: https://youtube.com/@wikiour
# Facebook: https://facebook.com/wikiour
# Instagram: https://instagram.com/wikiour

Description: Full Menu WikiOur

// const settingsMenu = new navMenu({
  // --------------------------------
  // # Settings Menu
  // --------------------------------
  // New class Menu = You can change all classes as you wish.
  // --------------------------------
  // Class for nav
  // navMenu: 'new-nav-menu', // Default = nav-menu
  // Class for all nav if menu contains submenu
  // navSubMenu: 'new-nav-sub-menu', // Default = nav-sub-menu
  // Class for all spans that have submenus
  // navMenuSpan: 'new-nav-menu-span', // Default = nav-menu-span
  // Class for all li's that have a submenu
  // navMenuLi: 'new-nav-menu-li', // Default = nav-menu-li
  // Class for all ul's that have a submenu
  // navMenuUl: 'new-nav-menu-ul', // Default = nav-menu-ul
  // Class for all active submenus
  // navMenuActive: 'new-active', // Default = active
  // Class for all div mega menu
  // megaMenu: 'new-mega-menu', // Default = mega-menu
  // Class for all span Open more
  // openMore: 'new-open-more', // Restrict Span Class Default = open-more
  // ## Modifications - extensions for your menu
  // Enable Hover Effect for Entire Menu
  // hoverEnabled: true, // Enable Hover Menu
  // If you need to add date attributes to all menu items
  // addAttributeEnabled: true, // Enable Data Attribute
  // Do you want to change the default values? Here's how to do it
  // dataUl: 'new-data-ul', // Default = data-ul + index
  // dataLi: 'new-data-li', // Default = data-li + index
  // dataSpan: 'new-data-span', // Default = data-span + index
  // dataDiv: 'new-data-div', // Default = data-div + index
  // Add extra classes for all your menu items
  // If the elements contain a date attribute, then its value will be assigned, otherwise the current index
  // addClassEnabled: true, // Enable Add Class
  // classUl: 'new-ul', // Add Class  Default = ul-index
  // classLi: 'new-li', // Add Class  Default = li-index
  // classSpan: 'new-span', // Add Class  Default = span-index
  // classDiv: 'new-div', // Add Class  Default = div-index
  // If you want to globally include a Mega Menu which will wrap your nested uls in a div with class mega-menu
  // megaMenuEnabled: true, // Enable Mega Menu Global
  // If you want to enable a Mega Menu on a specific element which will wrap your nested ul in a div with class mega-menu
  // megaMenuOneEnabled: true, // Enable Mega Menu One
  // Determine the serial number for Mega Menu One
  // liIndex: 0, // Mega Menu One Enable Index Li Default = 0
  // Enable Hover Effect for Mega Menu One
  // hoverMegaMenuEnabled: true, // Enable Hover Mega Menu
  // Restrict submenu output for Mega Menu One
  // restrictMegaMenuEnabled: true, // Enable Restrict Content
  // Number of displayed submenus for Mega Menu One
  // maxiRestrict: 2, // Restrict Default = 10
  // Text details for Mega Menu One
  // textRestrict: 'Open more ...', // Restrict Text Default = Open more
  // --------------------------------
  // # Settings Burger
  // --------------------------------
  // If you want to activate Burger menu
  // burgerEnabled: true, // Enable Burger
  // ## New class Burger
  // The class for your div that contains nav.nav-menu
  // headerMenu: 'new-header-menu', // Default = header-menu
  // Class for active menu
  // open: 'new-open', // Default = open
  // Class for body when menu is active
  // lockMenu: 'new-lock-menu', // Default = lock-menu
  // Class for your Burger
  // burger: 'new-burger', // Default = burger
  // --------------------------------
// });

*/

function navMenu(options) {
  const navMenu = `${options.navMenu || 'nav-menu'}`;
  const navSubMenu = `${options.navSubMenu || 'nav-sub-menu'}`;
  const navMenuSpan = `${options.navMenuSpan || 'nav-menu-span'}`;
  const navMenuLi = `${options.navMenuLi || 'nav-menu-li'}`;
  const navMenuUl = `${options.navMenuUl || 'nav-menu-ul'}`;
  const navMenuActive = `${options.navMenuActive || 'active'}`;
  const megaMenu = `${options.megaMenu || 'mega-menu'}`;
  const classUl = `${options.classUl || 'ul'}`;
  const classLi = `${options.classLi || 'li'}`;
  const classSpan = `${options.classSpan || 'span'}`;
  const classDiv = `${options.classDiv || 'div'}`;
  const dataUl = `${options.dataUl || 'data-ul'}`;
  const dataLi = `${options.dataLi || 'data-li'}`;
  const dataSpan = `${options.dataSpan || 'data-span'}`;
  const dataDiv = `${options.dataDiv || 'data-div'}`;
  const maxiRestrict = `${options.maxiRestrict || 10}`;
  const textRestrict = `${options.textRestrict || 'Open more'}`;
  const openMore = `${options.openMore || 'open-more'}`;
  if (document.querySelector(`.${navMenu}`)) {
    const nav = document.querySelector(`.${navMenu}`);
    nav.querySelectorAll('li').forEach((li) => {
      let ul = li.querySelector('ul');
      if (ul) {
        let span = document.createElement('span');
        span.classList.add(navMenuSpan);
        while (li.firstChild !== ul) {
          span.appendChild(li.firstChild);
        };
        li.insertBefore(span, ul);
        li.classList.add(navMenuLi);
        ul.classList.add(navMenuUl);
        nav.classList.add(navSubMenu);
      };
    });
    document.addEventListener('click', function (event) {
      if (event.target.nodeName === 'SPAN' && event.target.classList.contains(navMenuSpan)) {
        closeSub(event.target.nextElementSibling);
        event.target.nextElementSibling.classList.toggle(navMenuActive);
        closeSubLI(event.target.parentElement);
        event.target.parentElement.classList.toggle(navMenuActive);
      };
      addSpanClass();
    });
    function hover() {
      if (document.querySelector(`.${navMenuLi}`)) {
        const navMenuLiElements = document.querySelectorAll(`.${navMenuLi}`);
        navMenuLiElements.forEach((li) => {
          li.addEventListener('mouseenter', (event) => {
            setTimeout(() => {
              const nestedUlElement = event.target.querySelector(`.${navMenuUl}`);
              if (nestedUlElement) {
                nestedUlElement.classList.add(navMenuActive);
                event.target.classList.add(navMenuActive);
              };
              addSpanClass();
            }, 100);
          });
          li.addEventListener('mouseleave', (event) => {
            setTimeout(() => {
              const nestedUlElement = event.target.querySelector(`.${navMenuUl}`);
              if (nestedUlElement) {
                nestedUlElement.classList.remove(navMenuActive);
                event.target.classList.remove(navMenuActive);
              };
              addSpanClass();
            }, 100);
          });
        });
      };
    };
    document.addEventListener('click', function (event) {
      const navigElement = document.querySelector(`.${navMenu}`);
      const clickedElement = event.target;
      if (!navigElement.contains(clickedElement)) {
        closeSub();
        closeSubLI();
        addSpanClass();
      };
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
        };
      };
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
        };
      };
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
        };
      };
      const subElement = document.querySelectorAll(`.${navMenu} li`);
      Array.from(subElement).forEach(item => {
        if (item != current && !parents.includes(item))
          item.classList.remove(navMenuActive);
      });
    };
    function burger() {
      const open = `${options.open || 'open'}`;
      const lockMenu = `${options.lockMenu || 'lock-menu'}`;
      const headerMenu = `.${options.headerMenu || 'header-menu'}`;
      const burger = `.${options.burger || 'burger'}`;
      const body = document.querySelector('body');
      const headerMenus = document.querySelector(headerMenu);
      const burgers = document.querySelector(burger);
      const spanBurger = document.querySelector(`span${burger}`);
      if (document.querySelector(headerMenu) && burger && spanBurger) {
        burgers.addEventListener('click', function () {
          body.classList.toggle(lockMenu);
          headerMenus.classList.toggle(open);
          burgers.classList.toggle(open);
          spanBurger.classList.toggle(open);
        });
      } else if (document.querySelector(headerMenu) && burger) {
        burgers.addEventListener('click', function () {
          body.classList.toggle(lockMenu);
          headerMenus.classList.toggle(open);
          burgers.classList.toggle(open);
        });
      };
    };
    function navMenuMegaMenu() {
      const navSubmenu = document.querySelector(`.${navMenu}.${navSubMenu}`);
      if (navSubmenu) {
        const firstUl = navSubmenu.querySelector(':scope > ul:first-child');
        const lis = firstUl.querySelectorAll(`:scope > li.${navMenuLi}`);
        lis.forEach(li => {
          const div = document.createElement('div');
          div.classList.add(megaMenu);
          div.innerHTML = li.innerHTML;
          li.innerHTML = '';
          li.appendChild(div);
          const span = li.querySelector(`.${navMenuSpan}`);
          if (span) {
            li.insertBefore(span, div);
          };
        });
        const targetNodes = document.querySelectorAll(`li.${navMenuLi}`);
        const observer = new MutationObserver(function (mutationsList) {
          for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              const targetLi = mutation.target;
              const menu = targetLi.querySelector(`.${megaMenu}`);
              if (menu) {
                menu.classList.toggle(navMenuActive, targetLi.classList.contains(navMenuActive));
              };
            };
          };
        });
        const config = { attributes: true, attributeFilter: ['class'] };
        for (const targetNode of targetNodes) {
          if (targetNode.querySelector(`.${megaMenu}`)) {
            observer.observe(targetNode, config);
          };
        };
      };
    };
    function navMenuMegaMenuOne() {
      const navSubmenu = document.querySelector(`.${navMenu}.${navSubMenu}`);
      if (navSubmenu) {
        const firstUl = navSubmenu.querySelector(':scope > ul:first-child');
        const lis = firstUl.querySelectorAll(`:scope > li.${navMenuLi}`);
        const liIndex = options.liIndex || 0;
        const secondLi = lis[liIndex];
        if (secondLi) {
          const div = document.createElement('div');
          div.classList.add(megaMenu);
          div.innerHTML = secondLi.innerHTML;
          secondLi.innerHTML = '';
          secondLi.appendChild(div);
          const span = secondLi.querySelector(`.${navMenuSpan}`);
          if (span) {
            secondLi.insertBefore(span, div);
          };
        };
        const targetNodes = document.querySelectorAll(`li.${navMenuLi}`);
        const observer = new MutationObserver(function (mutationsList) {
          for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              const targetLi = mutation.target;
              const menu = targetLi.querySelector(`.${megaMenu}`);
              if (menu) {
                menu.classList.toggle(navMenuActive, targetLi.classList.contains(navMenuActive));
              };
            };
          };
        });
        const config = { attributes: true, attributeFilter: ['class'] };
        for (const targetNode of targetNodes) {
          if (targetNode.querySelector(`.${megaMenu}`)) {
            observer.observe(targetNode, config);
          };
        };
      };
    };
    function navMenuHoverMegaMenu() {
      if (document.querySelector(`.${megaMenu}`)) {
        const navMenuLiElements = document.querySelectorAll(`.${navMenuLi}`);
        navMenuLiElements.forEach((li) => {
          li.addEventListener('mouseenter', (event) => {
            setTimeout(() => {
              const nestedUlElement = event.target.querySelector(`.${navMenuUl}`);
              if (nestedUlElement) {
                nestedUlElement.classList.add(navMenuActive);
                event.target.classList.add(navMenuActive);
              };
              addSpanClass();
            }, 10);
          });
          li.addEventListener('mouseleave', (event) => {
            setTimeout(() => {
              const nestedUlElement = event.target.querySelector(`.${navMenuUl}`);
              if (nestedUlElement) {
                nestedUlElement.classList.remove(navMenuActive);
                event.target.classList.remove(navMenuActive);
              };
              addSpanClass();
            }, 10);
          });
        });
      };
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
          };
        };
        let rootLis = document.querySelectorAll(`li.${navMenuLi}`);
        rootLis.forEach(rootLi => updateActiveClass(rootLi));
      };
    };
    function navRestrict() {
      if (document.querySelector(`.${navMenu}` && `.${navSubMenu}`)) {
        const subcategories = document.querySelectorAll(`.${megaMenu} ul li ul`);
        subcategories.forEach(subcategory => {
          const subcategoryItems = subcategory.querySelectorAll('li');
          if (subcategoryItems.length > maxiRestrict) {
            for (let i = maxiRestrict; i < subcategoryItems.length; i++) {
              subcategoryItems[i].style.display = 'none';
            };
            const openMoreSpan = document.createElement('span');
            const link = subcategory.previousElementSibling.querySelector('a');
            if (link) {
              const openMoreLink = document.createElement('a');
              openMoreLink.href = link.getAttribute('href');
              openMoreLink.textContent = textRestrict;
              openMoreSpan.appendChild(openMoreLink);
              openMoreSpan.classList.add(openMore);
              subcategory.appendChild(openMoreSpan);
            };
          };
        });
      };
    };
    function navAddAttribute() {
      if (document.querySelector(`.${navMenu}` && `.${navSubMenu}`)) {
        const ul = document.querySelectorAll(`.${navMenu} ul`);
        ul.forEach((item, index) => {
          item.setAttribute(dataUl, `${index}`);
        });
        const li = document.querySelectorAll(`.${navMenu} li`);
        li.forEach((item, index) => {
          item.setAttribute(dataLi, `${index}`);
        });
        const span = document.querySelectorAll(`.${navMenu} span.${navMenuSpan}`);
        span.forEach((item, index) => {
          item.setAttribute(dataSpan, `${index}`);
        });
      };
    };
    function navAddClass() {
      if (document.querySelector(`.${navMenu}` && `.${navSubMenu}`)) {
        let ul = document.querySelectorAll(`.${navMenu} ul`);
        ul.forEach((item, index) => {
          const ulAttributeValue = item.getAttribute(dataUl);
          if (ulAttributeValue) {
            item.classList.add(`${classUl}-${ulAttributeValue}`);
          } else {
            item.classList.add(`${classUl}-${index}`);
          };
        });
        let li = document.querySelectorAll(`.${navMenu} li`);
        li.forEach((item, index) => {
          const liAttributeValue = item.getAttribute(dataLi);
          if (liAttributeValue) {
            item.classList.add(`${classLi}-${liAttributeValue}`);
          } else {
            item.classList.add(`${classLi}-${index}`);
          };
        });
        let span = document.querySelectorAll(`.${navMenu} .${navMenuSpan}`);
        span.forEach((item, index) => {
          const spanAttributeValue = item.getAttribute(dataSpan);
          if (spanAttributeValue) {
            item.classList.add(`${classSpan}-${spanAttributeValue}`);
          } else {
            item.classList.add(`${classSpan}-${index}`);
          };
        });
        let div = document.querySelectorAll(`.${navMenu} .${megaMenu}`);
        div.forEach((item, index) => {
          const divAttributeValue = item.getAttribute(dataDiv);
          if (divAttributeValue) {
            item.classList.add(`${classDiv}-${divAttributeValue}`);
          } else {
            item.classList.add(`${classDiv}-${index}`);
          };
        });
      };
    };
  };
  if (options.burgerEnabled) {
    burger();
  };
  if (options.hoverEnabled) {
    hover();
  };
  if (options.megaMenuEnabled) {
    navMenuMegaMenu();
  };
  if (options.megaMenuOneEnabled) {
    navMenuMegaMenuOne();
  };
  if (options.hoverMegaMenuEnabled) {
    navMenuHoverMegaMenu();
  };
  if (options.restrictMegaMenuEnabled) {
    navRestrict();
  };
  if (options.addAttributeEnabled) {
    navAddAttribute();
  };
  if (options.addClassEnabled) {
    navAddClass();
  };
};
