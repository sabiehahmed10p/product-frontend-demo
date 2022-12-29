import type { IFruit } from 'types'
import type { IGridData } from './types'

export default function formatDataForGrid(
	data: IFruit[] | undefined
): IGridData[] {
	let formattedGridData: IGridData[] = []

	if (!data) return formattedGridData

	for (const item of data) {
		formattedGridData = [
			...formattedGridData,
			...item.metadata.map<IGridData>(metadata => ({
				fruit: [item.name],
				nutrition: metadata.name,
				amount: metadata.value
			}))
		]
	}

	return formattedGridData
}
