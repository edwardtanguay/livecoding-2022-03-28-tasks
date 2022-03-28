const firstNameElem = document.querySelector('.firstName');
const lastNameElem = document.querySelector('.lastName');
const btnDisplayElem = document.querySelector('.btnDisplay');
const displayAreaElem = document.querySelector('.displayArea');

btnDisplayElem.addEventListener('click', (e) => {
	e.preventDefault();
	const firstName = firstNameElem.value;
	const lastName = lastNameElem.value;
	displayAreaElem.innerText = `${firstName} ${lastName}`;
});