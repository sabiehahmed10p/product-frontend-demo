export interface IEmployee {
	id: string
	name: string
	startDate: Date
	termDate?: Date
	companyId: number
	companyName: string
	departmentId: number
	departmentName: string
	expenseClassId: number
	expenseClassName: string
	benefitsAndTaxes: number
	salary: number
	annualSalary: number
	salaryVariableId?: number
	salaryFormula: string
	titleId: number
	titleLabel: string
	scenarioId: number
	employmentType: string
	loadMultiplier?: number
	overrideGlobalLoadMultiplier: boolean
	bonusFormulaId?: number
	bonusFormula?: string
	unit?: string
	externalId?: number
	bonusAmount?: number
	hiringDriverId?: number
	faulted: boolean
}
