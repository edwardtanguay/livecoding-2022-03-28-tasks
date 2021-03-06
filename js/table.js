const btnAddRow = document.querySelector('.btnAddRow');
const mainTableElem = document.querySelector('.main');

attachEvents();

btnAddRow.addEventListener('click', () => {
	// alert('test');
	const row = mainTableElem.insertRow(2);
	const cellFirstName = row.insertCell(0);
	cellFirstName.innerText = 'Robert';
	const cellLastName = row.insertCell(1);
	cellLastName.innerText = 'Angelton';
	const cellButton = row.insertCell(2);
	cellButton.innerHTML = '<button class="btnEdit">Edit</button>';
	attachEvents();
});

function attachEvents() {
	const btnEditElems = document.querySelectorAll('.btnEdit');

	btnEditElems.forEach(btnEditElem => {
		btnEditElem.addEventListener('click', () => {
			const firstNameElem = btnEditElem.parentElement.parentElement.children[0];
			const lastNameElem = btnEditElem.parentElement.parentElement.children[1];
			firstNameElem.innerHTML = `<input value="${firstNameElem.innerText}"/>`;
			lastNameElem.innerHTML = `<input value="${lastNameElem.innerText}"/>`;
		});
		console.log(btnEditElem)
	});

}