const buttonElem = document.querySelector('button');
const pElem = document.querySelector('p');

// buttonElem.style.display = 'none';

buttonElem.addEventListener("click", () => {
	pElem.style.fontFamily = 'Courier';
	pElem.style.fontSize = '3rem';
	pElem.style.color = 'red';
});
