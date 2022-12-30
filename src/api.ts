import axios from 'axios'

export const BASE_URL = `${window.location.origin}/api`

const Api = axios.create({
	baseURL: BASE_URL
})

export default Api
