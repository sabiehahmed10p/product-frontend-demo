export interface IActualsGridData {
	hierarchy: string[]
	months: IMonthFormatted[]
	title: string
	id: string
	unit: string
}

export interface IMonthFormatted {
	date: string
	value?: number
}
