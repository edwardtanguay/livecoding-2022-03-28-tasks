// syntax #2
buttonElem.addEventListener("click", function () {
	console.log('clicked with anonymous classic function')
});

// syntax #3
buttonElem.addEventListener("click", changeText);
function changeText() {
	console.log('clicked with named classic function');
}

// syntax #4
const changeText2 = () => {
	console.log('clicked with named arrow function');
};
buttonElem.addEventListener("click", changeText2);