const url = "http://localhost:3000";

const API = {
	getAllSweets: () => {
		return fetch(`${url}/sweet`)
		.then(response => response.json());
	},
	addASweet: (sweetObj) => {
		return fetch(`${url}/sweet`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(sweetObj)
		}).then(response => response.json());

	}
}

export default API;