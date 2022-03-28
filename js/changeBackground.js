const textElem = document.querySelector('.text'); 
const messageElem = document.querySelector('.message'); 

textElem.addEventListener('focus', () => {
	messageElem.style.backgroundColor = 'yellow';
});