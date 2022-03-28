const colorsElem = document.querySelector('.colors');
const newColorElem = document.querySelector('.newColor');
const btnDeleteElem = document.querySelector('.btnDelete');
const btnAddElem = document.querySelector('.btnAdd');

btnDeleteElem.addEventListener('click', () => {
	colorsElem.remove(colorsElem.selectedIndex);
});
btnAddElem.addEventListener('click', () => {
	const newColor = newColorElem.value;
	const option = document.createElement('option');
	option.text = newColor;
	option.value = newColor.toLowerCase();
	colorsElem.add(option);
	// colorsElem.appendChild(option); // (also works)
});