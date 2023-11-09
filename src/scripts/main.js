'use strict';

const links = document.querySelectorAll('.shop__nav-link');

for (const link of links) {
  link.addEventListener('click',() => {
    links.forEach(l => l.classList.remove('shop__nav-link--active'))
    link.classList.add('shop__nav-link--active')
  })
}

