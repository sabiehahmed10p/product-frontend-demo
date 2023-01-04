import type { IEmployee } from './Employee'
import type { IMonth } from './Month'

export interface IActual {
	id: string
	key: { scenarioId: number; key: string; attributionType: number }[]
	family: string
	title: string
	actualParentEntity?: {
		revenueStreamPricingPlan?: string
		expenseGroup?: string
		employee: IEmployee
	}
	unit: string
	months: IMonth[]
	children?: IActual[]
	style?: string
}
