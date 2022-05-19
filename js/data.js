// seleziono gli elementi del DOM
const myContentArea = document.querySelector("main");
const myHeaderButton = document.getElementById("navbar-selection");
const selectAll = document.getElementById("all");
const selectAnimal = document.getElementById("animal");
const selectVegetable = document.getElementById("vegetable");
const selectUser = document.getElementById("user");


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

// creo un ciclo con le classi dai inserire nel html
for (let i = 0; i < myIcon.length; i++) {
	// creo un div con classe "button-card"
	const divCard = document.createElement("div");
	divCard.classList.add("button-card");
	// all'interno inserisco il tag "a"
	const divLink = document.createElement("a");
	divLink.setAttribute("href", "#");
	divCard.append(divLink);
	// e all'interno inserisco il tag "i" che contegono le proprietà array
	const divLinkIcon = document.createElement("i");
	divLinkIcon.setAttribute("class", myIcon[i].family);
	divLinkIcon.classList.add(myIcon[i].prefix + myIcon[i].name);
	divLink.append(divLinkIcon);
	console.log(divCard);	
}

// seleziono i colori degli elementi per tipologia
const colorAnimal = myIcon.filter((selectionColAnim) => {
	if (selectionColAnim.color === 'orange') {
		return true;
	}	
});

const colorFruit = myIcon.filter((selectionColFruit) => {
	if (selectionColFruit.color === 'green') {
		return true;
	}
});

const colorHuman = myIcon.filter((selectionColHuman) => {
	if (selectionColHuman.color === 'blue') {
		return true;
	}
});

//console.log(colorAnimal, colorFruit, colorHuman);


// la navbar raggruppa le icone per tipologia di visualizzazione
// myHeaderButton.addEventListener("change"

// );




