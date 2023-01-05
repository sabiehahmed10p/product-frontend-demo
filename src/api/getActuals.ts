import type { IActual, IActualAPIResponse } from 'types'
import API from '../api'

export default async function getActuals(): Promise<IActual[]> {
	const response = await API.get<IActualAPIResponse>('/actuals/1') // 1 is for demo purpose only due to limitation of mockapi.io, Temporary code
	return response.data.data.children
}
