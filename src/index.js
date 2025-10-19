document.addEventListener('DOMContentLoaded', function () {
  const itemTitles = document.querySelectorAll('.features__item-heading');

  itemTitles.forEach((title) => {
    title.addEventListener('click', () => {
      const parentItem = title.closest('.features__item');
      parentItem.classList.toggle('features__item--open');
    });
  });
});
