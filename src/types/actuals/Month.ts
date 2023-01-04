export interface IMonth {
	date: string
	value: {
		scenarioId: number
		value?: number
		type?: string[]
		displayFormula?: string
		customVariableId?: string
		faulted: boolean
		style?: string
	}[]
	details?: string
	variance?: number
	endDate?: string
}
