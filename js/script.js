const button = document.querySelector('button');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.closePopup');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu');

button.addEventListener('click', function(){
    popup.style.display = 'flex';
})

closePopup.addEventListener('click', function(){
    popup.style.display = 'none';
})

openMenu.addEventListener('click', function(){
    menu.style.left = '0';
})

closeMenu.addEventListener('click', function(){
    menu.style.left = '-50vw';
})
