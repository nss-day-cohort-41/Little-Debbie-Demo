const url = "http://localhost:3000";

//example
// return fetch(`${url}/sweet/?_expand=shape&_expand=season&_expand=type`)
		
const API = {
	getAllSweets: () => {
		return fetch(`${url}/sweets?_expand=shape&_expand=season&_expand=type`)
		.then(response => response.json());
	},
	addASweet: (sweetObj) => {
		return fetch(`${url}/sweets`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(sweetObj)
		}).then(response => response.json());

	},
	getSingleSweet: (id) => {
		return fetch(`${url}/sweets/${id}`)
		.then(response => response.json());
	},
	updateSweet: (id, updatedSweetObj) => {
		return fetch(`${url}/sweets/${id}`, {
			method: "PUT",
        	headers: {
            "Content-Type": "application/json"
        	},
        	body: JSON.stringify(updatedSweetObj)
		})
	},
	deleteSweet: (id) => {
		return fetch(`${url}/sweets/${id}`, {
			method: "DELETE"
		}).then(response => response.json());
	},
	getAllSeasons : () => {
		return fetch(`${url}/seasons`)
		.then(response => response.json());
	},
	getAllTypes : () => {
		return fetch(`${url}/types`)
		.then(response => response.json());
	},
	getAllShapes : () => {
		return fetch(`${url}/shapes`)
		.then(response => response.json());
	}
}

export default API;