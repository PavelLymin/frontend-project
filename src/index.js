import './index.css';

document.addEventListener('DOMContentLoaded', function () {
  const itemTitles = document.querySelectorAll('.features__item-heading');

  itemTitles.forEach((title) => {
    title.addEventListener('click', () => {
      const parentItem = title.closest('.features__item');
      parentItem.classList.toggle('features__item--open');
    });
  });

  const menu = document.querySelector('.mobile-menu__inner');

  document.querySelector('.js-menu-active').addEventListener('click', () => {
    console.log('tap');
    menu.classList.toggle('mobile-menu__inner--active');
  });
});
