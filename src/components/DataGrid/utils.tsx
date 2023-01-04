import type { ValueGetterParams } from 'ag-grid-community'
import type { AgGridColumnProps } from 'ag-grid-react'
import type { IActual } from 'types'
import { DEFAULT_MONTHLY_COLUMN_WIDTH } from './defaults'
import monthlyHeaderRenderer from './renderers/monthlyHeaderRenderer'
import type {
	IActualsGridData,
	IMonthFormatted,
	IMonthlyCellRendererParameters
} from './types'

export function formatActualsDataForGrid(
	data?: IActual[],
	parentEntityIds?: string[]
): IActualsGridData[] {
	let formattedGridData: IActualsGridData[] = []

	if (!data) return formattedGridData

	for (const item of data) {
		const subFormattedgridData = {} as IActualsGridData
		let hierarchy: string[] = [item.id]
		if (parentEntityIds) {
			hierarchy = [...parentEntityIds, item.id]
		}
		subFormattedgridData.hierarchy = hierarchy
		subFormattedgridData.id = item.id
		subFormattedgridData.title = item.title
		subFormattedgridData.unit = item.unit
		subFormattedgridData.months = item.months.map(month => ({
			date: month.date,
			value: month.value.reduce(
				(sum, valueItem) => sum + (valueItem.value ?? 0),
				0
			)
		}))

		formattedGridData.push(subFormattedgridData)

		if (item.children) {
			formattedGridData = [
				...formattedGridData,
				...formatActualsDataForGrid(
					item.children,
					subFormattedgridData.hierarchy
				)
			]
		}
	}

	return formattedGridData
}

export function generateMonthColumns(
	months: IMonthFormatted[]
): AgGridColumnProps[] {
	return months.map((month, monthIndex) => ({
		field: month.date,
		title: month.date,
		minWidth: DEFAULT_MONTHLY_COLUMN_WIDTH,
		valueGetter: (api: ValueGetterParams<IActualsGridData>): string => {
			const value = api.data?.months.find(
				item => item.date === api.colDef.field
			)?.value
			return value ? `$${value}` : '--'
		},

		headerComponent: monthlyHeaderRenderer,
		headerComponentParams: {
			date: month.date,
			isForecast: monthIndex !== 0
		} as IMonthlyCellRendererParameters
	}))
}
