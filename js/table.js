const btnAddRow = document.querySelector('.btnAddRow');
const mainTableElem = document.querySelector('.main');

btnAddRow.addEventListener('click', () => {
	// alert('test');
	const row = mainTableElem.insertRow(2);
	const cellFirstName = row.insertCell(0);
	cellFirstName.innerText = 'Robert';
	const cellLastName = row.insertCell(1);
	cellLastName.innerText = 'Angelton';
});