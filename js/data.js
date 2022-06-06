// seleziono gli elementi del DOM
const myContentArea = document.querySelector("main");
const myHeaderButton = document.getElementById("navbar-selection");

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

// la navbar raggruppa le icone per tipologia di visualizzazione
myHeaderButton.addEventListener('change', selectType);

myHeaderButton.value = 'all';
addCard(myIcon);

function selectType() {	
	console.log(myHeaderButton.value);
	switch(myHeaderButton.value) {
		case 'animal':
			const colorAnimal = myIcon.filter((element) => element.type === 'animal');
			addCard(colorAnimal);
			break;
		case 'vegetable':
			const colorVegetable = myIcon.filter((element) => element.type === 'vegetable');
	 		addCard(colorVegetable);
	 		break;
	 	case 'user':
	 		const colorUser = myIcon.filter((element) => element.type === 'user');
	 		addCard(colorUser);	 
			 break;
		default:
			addCard(myIcon);
	}
}
		


// creo un ciclo con le classi dai inserire nel html
function addCard(myList) {
	console.log(myList);
	// svuota 
	myContentArea.innerHTML = "";

	myList.forEach(element => {
		const divCard = document.createElement("div");
		divCard.classList.add("button-card");
		const divLink = document.createElement("a");
		divLink.setAttribute("href", "#");
		divCard.append(divLink);
	
		// e all'interno inserisco il tag "i" che contegono le proprietà array
		const divLinkIcon = document.createElement("i");
		// divLinkIcon.setAttribute("class", element.family);
		divLinkIcon.classList.add(element.family);
		divLinkIcon.classList.add(element.prefix + element.name);
		divLinkIcon.classList.add(element.color);
		divLink.append(divLinkIcon);
	
		// aggiungo del testo nel tag "a"
		const textIconCard = document.createElement("h5");
		textIconCard.append(element.name.toUpperCase());
		divLink.append(textIconCard);
		myContentArea.append(divCard);
		console.log(divCard);	
	});
}