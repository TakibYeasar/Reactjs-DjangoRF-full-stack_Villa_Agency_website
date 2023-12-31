import axios from 'axios';
import { domain } from "./env";

const axiosInstance = axios.create({
    baseURL : domain,
    timeout : 5000,
    headers: {
		Authorization: localStorage.getItem('access')
			? 'JWT ' + localStorage.getItem('access')
			: null,
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});


axiosInstance.interceptors.response.use(
	(response) => {
		console.log("axiosssss");

		return response;
	},
	async function (error) {
		console.log("axios");

		const originalRequest = error.config;

		if (typeof error.response === 'undefined') {
			console.log("axiosz");

			alert(
				'A server/network error occurred. ' +
					'Looks like CORS might be the problem. ' +
					'Sorry about this - we will get it fixed shortly.'
			);
			return Promise.reject(error);
		}

		if (
			error.response.status === 401 &&
			originalRequest.url === baseURL + 'token/refresh/'
		) {
			console.log("axioszze");

			window.location.href = '/login/';
			return Promise.reject(error);
		}

		if (
			error.response.data.code === 'token_not_valid' &&
			error.response.status === 401 &&
			error.response.statusText === 'Unauthorized'
		) {
			console.log("axioszRef");

			const refreshToken = localStorage.getItem('refresh');

			if (refreshToken) {
				console.log("axioszRefsss");

				const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

				// exp date in token is expressed in seconds, while now() returns milliseconds:
				const now = Math.ceil(Date.now() / 1000);
				console.log(tokenParts.exp);

				if (tokenParts.exp > now) {
					return axiosInstance
						.post('/token/refresh/', {
							refresh: refreshToken,
						})
						.then((response) => {
							console.log(response.data);
							localStorage.setItem('access', response.data.access);

							axiosInstance.defaults.headers['Authorization'] =
								'JWT ' + response.data.access;
							originalRequest.headers['Authorization'] =
								'JWT ' + response.data.access;

							return axiosInstance(originalRequest);
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					localStorage.clear();
					console.log('Refresh token is expired', tokenParts.exp, now);
					window.location.href = '/login/';
				}
			} else {
				localStorage.clear();
				console.log('Refresh token not available.');
				window.location.href = '/login/';
			}
		}

		// specific error handling done elsewhere
		return Promise.reject(error);
	}
);

export default axiosInstance;