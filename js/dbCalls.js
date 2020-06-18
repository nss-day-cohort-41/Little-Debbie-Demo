const url = "http://localhost:3000";

const API = {
	getAllSweets: () => {
		return fetch(`${url}/sweet`)
		.then(response => response.json());
	}
}

export default API;