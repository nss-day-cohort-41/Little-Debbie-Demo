console.log("Little Debbies are Delicious");
import makeSweet from './sweetFactory.js';
import API from './dbCalls.js';
import makeSweetList from './sweetList.js';


// (name, quantity, desc, shapeId, typeId, seasonId)
const newSweet1 = makeSweet("Happy Camper Cake", 5, "Green Pine trees with chocolate", 1, 2, 3);
const newSweet2 = makeSweet("Football Brownies", 6, "Looks like a football", 4, 1, 6);

console.log("this is the new sweet", newSweet1);
console.log("this is the second sweet", newSweet2);

///////////////////////////////////

// go get all the data
const allSweets = () => {
	// API is an object that has multiple methods for interacting with the DB
	//GET
	API.getAllSweets()
	.then((sweets) => {
		// API.getAllSweets returns data, in this case an array
		console.log(sweets);
	})
}

//invoke the allSweets function
// allSweets();

// using the makeSweet factory function, make a sweet object
const newSweet3 = makeSweet("Easter Egg Brownie", 6, "Yellow decoration with stripes", 2, 2, 1);

//invoke the addASweet method and pass it the newSweet3 object
//POST
// API.addASweet(newSweet3)
// .then(() => {
// 	//Once the new sweet has been added to the DB, go get all the data again.
// 	allSweets();
// });

const allTypes = () => {
	API.getAllTypes()
	.then((typeArray) => { 
		console.log("All the tpyes:", typeArray)
	});
}

allTypes();

makeSweetList();

const clearInputs = () => {
	document.querySelector("#sweetId").value = "";
	document.querySelector("#sweetName").value = "";
	document.querySelector("#sweetDesc").value = "";
	document.querySelector("#sweetType").value = "";
	document.querySelector("#sweetShape").value = "";
	document.querySelector("#sweetSeason").value = "";
	document.querySelector("#sweetQuantity").value = "";
}

saveSweetButton.addEventListener("click", event => {
    const hiddenSweetId = document.querySelector("#sweetId");

    if (hiddenSweetId.value !== "") {
		const sweetNameInput = document.querySelector("#sweetName").value;
		const sweetQuantityInput = document.querySelector("#sweetQuantity").value;
		const sweetDescInput = document.querySelector("#sweetDesc").value;
		const sweetTypeInput = document.querySelector("#sweetType").value;
		const sweetShapeInput = document.querySelector("#sweetShape").value;
		const sweetSeasonInput = document.querySelector("#sweetSeason").value;
		//(name, quantity, desc, shapeId, typeId, seasonId)
		API.updateSweet(hiddenSweetId.value, makeSweet(sweetNameInput,sweetQuantityInput, sweetDescInput, sweetShapeInput, sweetTypeInput, sweetSeasonInput))
		.then(() => {
			clearInputs();
			makeSweetList();
		});
    } else {
		// Save functionality goes here
		console.log("this is the save a new one functionality");
    }
});
const sweetContainer2 = document.querySelector("#sweetContainer2");

// use of .values
const allSweetsForObjMethods = () => {
	API.getAllSweets()
	.then((sweetArray) => { 

		
		//example using keys and values
		// sweetArray.forEach(sweet => {
		// 	for (const key of Object.keys(sweet)) {
		// 		sweetContainer2.innerHTML += `<div>${key}</div>`
		// 	  }
		// 	for (const value of Object.values(sweet)){
		// 		console.log("object value", value);
		// 		sweetContainer2.innerHTML += `<p>${value}</p>`
		// 	}
		// })

		//example using entry
		sweetArray.forEach(sweet => {
			sweetContainer2.innerHTML += "<hr/>"
		
			for (const entry of Object.entries(sweet)) {
				console.log("entry:", entry);
				sweetContainer2.innerHTML += `<div><strong>${entry[0]}:</strong> ${entry[1]}</div>`
			}
		})
	});
}

allSweetsForObjMethods();