const menuButton = document.querySelector('.menu__button');
const menuTabletClose = document.querySelectorAll('.menu-tablet__button-close');
const menuTablet = document.querySelector('.menu-tablet');
const compositionButton = document.querySelector('.composition__button');
const searchButton = document.querySelector('.search__button');
const buttonFooter = document.querySelector('.footer__button');
const input = document.querySelector('.footer__form-item');
const footerForm = document.querySelector('.footer__form');

menuButton.addEventListener('click', () => {
  menuTablet.classList.toggle('active');
});

menuTabletClose.forEach(item => {
  item.addEventListener('click', () => {
    menuTablet.classList.toggle('active');
  });
});

compositionButton.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
});

searchButton.addEventListener('click', () => {
  window.scrollTo(0, document.body.scrollHeight);
});

footerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  input.value = '';
  buttonFooter.innerHTML = 'Спасибо!';
})

