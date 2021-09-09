/* Подключение popup Редактирование профиля */
const menuButton = document.querySelector('.menu__button');
const menuClose = document.querySelectorAll('.menu__button-close');
const menuTablet = document.querySelector('.menu-tablet');
const orderButtons = document.querySelectorAll('.course__button');
const buttonFooter = document.querySelector('.footer__button');
const input = document.querySelector('.footer__form-item');
const footerForm = document.querySelector('.footer__form');

menuButton.addEventListener('click', () =>{
    menuTablet.classList.toggle('active');
});

menuClose.forEach(item => {
    item.addEventListener('click', () =>{
        menuTablet.classList.toggle('active');
    });
});

orderButtons.forEach(item =>{
    item.addEventListener('click', () =>{
        window.scrollTo(0, document.body.scrollHeight);
    });
});

footerForm.addEventListener('submit',(event) => {
  event.preventDefault();
  input.value = '';
  buttonFooter.innerHTML = 'Спасибо!';
})

