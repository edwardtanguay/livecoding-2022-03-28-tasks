const btnShowPhotoElem = document.querySelector('.btnShowPhoto');
const contentElem = document.querySelector('.content');

btnShowPhotoElem.addEventListener('click', () => {
	const num = Math.floor(Math.random() * 3);
	const filename = `pic-${num}.jpg`;
	contentElem.innerHTML = `<img src="images/${filename}"/>`;
});