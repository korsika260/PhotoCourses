/* Подключение popup Редактирование профиля */
const buttonMenu = document.querySelector('.button__menu');
const buttonsClose = document.querySelectorAll('.button__close');
const menuTablet = document.querySelector('.menu__tablet');
const orderButtons = document.querySelectorAll('.button__submit');
const buttonFooter = document.querySelector('.footer__button');

buttonMenu.addEventListener('click', () =>{
    menuTablet.classList.toggle('active');
});

buttonsClose.forEach(item => {
    item.addEventListener('click', () =>{
        menuTablet.classList.toggle('active');
    });
});

orderButtons.forEach(item =>{
    item.addEventListener('click', () =>{
        window.scrollTo(0, document.body.scrollHeight);
    });
});

buttonFooter.addEventListener('click',()=>{
    buttonFooter.innerHTML = 'Спасибо!';
});