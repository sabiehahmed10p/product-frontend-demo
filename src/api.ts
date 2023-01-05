import axios from 'axios'

export const BASE_URL = `${
	process.env.NODE_ENV === 'development'
		? window.location.origin
		: import.meta.env.VITE_API_URL
}/api`

const Api = axios.create({
	baseURL: BASE_URL
})

export default Api
