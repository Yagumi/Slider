
var slideLeft = document.querySelector('.arrows__left');
slideLeft.addEventListener('click', clickLeft);

var slideRight = document.querySelector('.arrows__right');
slideRight.addEventListener('click', clickRight);

var slider = document.querySelector('.slider');
var slide = slider.getElementsByTagName('img');
var main = document.querySelector('.main');
var arr = [];

function createArr() {
	for (var i = 0; i < slide.length; i++) {
		arr.push(slide[i].src);
	}
}


var idx = 0;

function clickLeft() {
	if (idx <= 0) {
		idx = arr.length - 1;
		main.src = arr[idx];
	} else {
		idx--;
		main.src = arr[idx];
	}
}

function clickRight() {  
	if ( idx < arr.length - 1) {
		idx++;
		main.src = arr[idx];
	} else {                              
		idx = 0;
		main.src = arr[0];
	}
}

createArr();

