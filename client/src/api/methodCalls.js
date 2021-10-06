import axios from "axios";

export const getTrasactions = (jwt) => {
	const url = `http://localhost:3000/api/transactions/get`;
	return axios.get(url, {
		headers: { Authorization: "Bearer " + jwt },
	});
};

export const delTransaction = (id, jwt) => {
	const url = `http://localhost:3000/api/transactions/delete`;
	return axios.delete(url, {
		headers: {
			Authorization: "Bearer " + jwt,
		},
		data: {
			id: id,
		},
	});
};
export const putTransaction = (data, jwt) => {
	const url = `http://localhost:3000/api/transactions/add`;
	return axios.post(url, data, {
		headers: {
			Authorization: "Bearer " + jwt,
		},
	});
};
export const register = (data) => {
	const url = `http://localhost:3000/api/auth/register`;
	return axios.post(url, data);
};
export const login = (data) => {
	const url = `http://localhost:3000/api/auth/login`;
	return axios.post(url, data);
};
