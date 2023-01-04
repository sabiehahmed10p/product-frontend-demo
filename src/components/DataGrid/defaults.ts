import type { AgReactUiProps } from 'ag-grid-react'

export const DEFAULT_GRID_HEIGHT = 600
export const DEFAULT_GRID_WIDTH = '100%'
export const DEFAULT_MONTHLY_COLUMN_WIDTH = 113
export const DEFAULT_MAIN_COLUMN_WIDTH = 300

const DEFAULT_FLEX = 1

const DEFAULT_GRID_CONFIG: AgReactUiProps = {
	animateRows: true,
	suppressRowHoverHighlight: true,
	defaultColDef: {
		flex: DEFAULT_FLEX,
		sortable: false,
		resizable: false,
		filter: true,
		suppressMovable: true
	}
}

export default DEFAULT_GRID_CONFIG
