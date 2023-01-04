import type { IActual } from './Actual'

export interface IActualAPIResponse {
	data: { children: IActual[] }
}
