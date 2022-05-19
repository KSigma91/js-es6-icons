// seleziono gli elementi del DOM
const myHtml = document.querySelector("main");
const myButton = document.querySelector(".button-card");


// creo una lista array degli elementi
const myIcon = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//console.log(myIcon);

// creo le classi dai inserire nel tag main
for (let i = 0; i < myIcon.length; i++) {
	const divCard = document.createElement("div");
	divCard.classList.add("button-card");
	const divLink = document.createElement("a");
	divLink.append(myIcon[i].family, myIcon[i].prefix, myIcon[i].name, myIcon[i].color);
	divCard.append(divLink);
	console.log(divCard);
}



// seleziono i colori degli elementi per tipologia
// const colorAnimal = myIcon.filter((selectionColAnim) => {
// 	if (selectionColAnim.color === 'orange') {
// 		myButton.append(myIcon.color);
// 		return true;
// 	}
// });

// const colorFruit = myIcon.filter((selectionColFruit) => {
// 	if (selectionColFruit.color === 'green') {
// 		return true;
// 	}
// });

// const colorHuman = myIcon.filter((selectionColHuman) => {
// 	if (selectionColHuman.color === 'blue') {
// 		return true;
// 	}
// });

//console.log(colorAnimal, colorFruit, colorHuman);




