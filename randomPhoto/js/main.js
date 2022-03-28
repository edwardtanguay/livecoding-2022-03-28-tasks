const btnShowPhotoElem = document.querySelector('.btnShowPhoto');
const contentElem = document.querySelector('.content');

const photos = [
	{
		title: "Nice Car",
		fileName: "car.jpg",
		width: 200
	},
	{
		title: "A house in the middle of nowhere",
		fileName: "house.jpg",
		width: 400
	},
	{
		title: "Some unidentified city",
		fileName: "city.jpg",
		width: 300
	}
]

btnShowPhotoElem.addEventListener('click', () => {
	const index = Math.floor(Math.random() * 3);
	const photo = photos[index];
	contentElem.innerHTML = `<div style="height:500px;position:relative;background-image:url('images/${photo.fileName}')">
	<div style="position:absolute: top:100px; left:10" class="title">${photo.title}</div>
	</div>`;
});