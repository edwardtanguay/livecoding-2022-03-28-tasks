const navHomeElem = document.querySelector('nav ul li:nth-child(1)');
const navInfoElem = document.querySelector('nav ul li:nth-child(2)');
const navReportsElem = document.querySelector('nav ul li:nth-child(3)');
const navAboutElem = document.querySelector('nav ul li:nth-child(4)');

const pageHomeElem = document.querySelector('.home');
const pageInfoElem = document.querySelector('.info');
const pageReportsElem = document.querySelector('.reports');
const pageAboutElem = document.querySelector('.about');

hideAllPages();
pageHomeElem.style.display = 'block';

navHomeElem.addEventListener('click', () => {
	hideAllPages();
	pageHomeElem.style.display = 'block';
});
navInfoElem.addEventListener('click', () => {
	hideAllPages();
	pageInfoElem.style.display = 'block';
});
navReportsElem.addEventListener('click', () => {
	hideAllPages();
	pageReportsElem.style.display = 'block';
});
navAboutElem.addEventListener('click', () => {
	hideAllPages();
	pageAboutElem.style.display = 'block';
});



function hideAllPages() {
	const pageElems = document.querySelectorAll('.pages');
	// pageElems.forEach(pageElem => {
	// 	pageElem.style.display = 'none';
	// });
	// const pageArrElems = Array.from(pageElems);
	// for (const pageArrElem of pageArrElems) {
	// 	pageArrElem.style.display = 'none';
	// }
	pageHomeElem.style.display = 'none';
	pageInfoElem.style.display = 'none';
	pageReportsElem.style.display = 'none';
	pageAboutElem.style.display = 'none';
}