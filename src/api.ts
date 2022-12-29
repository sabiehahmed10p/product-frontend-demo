import axios from 'axios'

export const BASE_URL = 'https://614c99f03c438c00179faa84.mockapi.io'

const Api = axios.create({
	baseURL: BASE_URL
})

export default Api
