import type { IActual, IActualAPIResponse } from 'types'
import API from '../api'

export default async function getActuals(): Promise<IActual[]> {
	const response = await API.get<IActualAPIResponse>('/actuals')
	return response.data.data.children
}
