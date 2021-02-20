console.log('You are at '+window.location);

const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'

const Image = document.querySelector('.imageBlock')

if(player==rock && computer==paper) {
	Image.style.backgroundImage = "url(img/loose.jpg)";
}else if(player==rock && computer==scissors) {
	Image.style.backgroundImage = "url(img/win.jpg)";
}else if(player==scissors && computer==paper) {
	Image.style.backgroundImage = "url(img/win.jpg)";
}else if(player==scissors && computer==rock) {
	Image.style.backgroundImage = "url(img/loose.jpg)";
}else if(player==paper && computer==rock) {
	Image.style.backgroundImage = "url(img/win.jpg)";
}else if(player==paper && computer==scissors) {
	Image.style.backgroundImage = "url(img/loose.jpg)";
}else {
	Image.style.backgroundImage = "url(img/again.png)";
};

setTimeout(function(){
	location.reload();
}, 2000);