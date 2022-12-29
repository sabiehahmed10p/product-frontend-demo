import type { IFruit } from 'types'
import API from '../api'

export default async function getFruits(): Promise<IFruit[]> {
	const response = await API.get('/fruits')
	return response.data as IFruit[]
}
