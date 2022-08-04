
var swiper = new Swiper(".review__row", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	loop: true,
	grabCursor: true,
});

let navBar = document.querySelector('.header__navbar');
let navLink1 = document.querySelector('#header__navbar-link1');
let navLink2 = document.querySelector('#header__navbar-link2');
let navLink3 = document.querySelector('#header__navbar-link3');
let navLink4 = document.querySelector('#header__navbar-link4');
let menuBtn = document.querySelector('#menu-btn');
let closeMenuBtn = document.querySelector('#close-btn');

menuBtn.onclick = () =>{
  navBar.classList.add('active');
};

navLink1.onclick = () =>{
	navBar.classList.remove('active');
};
navLink2.onclick = () =>{
	navBar.classList.remove('active');
};
navLink3.onclick = () =>{
	navBar.classList.remove('active');
};
navLink4.onclick = () =>{
	navBar.classList.remove('active');
};

closeMenuBtn.onclick = () =>{
  navBar.classList.remove('active');
};

let sheduleBtn = document.querySelector("#shedule-button2");
let table = document.querySelector(".table");
let tableCloseBtn = document.querySelector(".table__close");

sheduleBtn.onclick = () => {
	table.classList.add('active');
};

tableCloseBtn.onclick = () => {
	table.classList.remove('active');
};

let aboutMenuBtn = document.querySelector(".about-button1");
let menu = document.querySelector(".menu");
let menuCloseBtn = document.querySelector(".menu__close");
let aboutStudentsBtn = document.querySelector(".about-button2");
let students = document.querySelector(".students");
let studentsCloseBtn = document.querySelector(".students__close");

aboutMenuBtn.onclick = () => {
	menu.classList.add('active');
};

menuCloseBtn.onclick = () => {
	menu.classList.remove('active');
};

aboutStudentsBtn.onclick = () => {
	students.classList.add('active');
};

studentsCloseBtn.onclick = () => {
	students.classList.remove('active');
};

