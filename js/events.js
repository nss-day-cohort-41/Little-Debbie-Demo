import API from './dbCalls.js';
import makeSweetList from './sweetList.js';
import updateFormFields from './updateFormFields.js'


const sweetContainer = document.querySelector("#sweetContainer");

export default {
	registerListeners() {
		sweetContainer.addEventListener("click", event => {
			console.log("what the heck is the event", event.target.id);
			//Get the id from the event.target.id
			if (event.target.id.startsWith("deleteSweet--")) {
				const sweetToDelete = event.target.id.split("--")[1];
				console.log(sweetToDelete);

				API.deleteSweet(sweetToDelete)
				.then(makeSweetList)
			}else if(event.target.id.startsWith("editSweet--")) {
				const sweetToEdit = event.target.id.split("--")[1];
				console.log(sweetToEdit);

				API.getSingleSweet(sweetToEdit)
				.then(sweetObj => updateFormFields(sweetObj));
			}
		})
	}
}