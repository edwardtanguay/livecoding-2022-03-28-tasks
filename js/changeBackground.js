const textElem = document.querySelector('.text'); 
const messageElem = document.querySelector('.message'); 
const linkElem = document.querySelector('.link');

textElem.addEventListener('focus', () => {
	messageElem.style.backgroundColor = 'yellow';
	messageElem.innerText =`href=${linkElem.href} and target=${linkElem.target}`;
});