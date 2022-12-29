import type { AgReactUiProps } from 'ag-grid-react'

export const DEFAULT_GRID_HEIGHT = 600
export const DEFAULT_GRID_WIDTH = '100%'
const DEFAULT_FLEX = 1

const DEFAULT_GRID_CONFIG: AgReactUiProps = {
	animateRows: true,
	defaultColDef: {
		flex: DEFAULT_FLEX,
		sortable: true,
		resizable: true,
		filter: true
	}
}

export default DEFAULT_GRID_CONFIG
