import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import 'ag-grid-enterprise'
import type { AgReactUiProps } from 'ag-grid-react'
import { AgGridReact } from 'ag-grid-react'
import type React from 'react'
import DEFAULT_GRID_CONFIG, {
	DEFAULT_GRID_HEIGHT,
	DEFAULT_GRID_WIDTH
} from './defaults'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DataGridProps<RowData> extends AgReactUiProps<RowData> {}

function DataGrid<RowData>(props: DataGridProps<RowData>): React.ReactElement {
	const {
		animateRows,
		defaultColDef,
		rowData,
		columnDefs,
		autoGroupColumnDef,
		treeData,
		getDataPath
	} = props

	return (
		<div
			className='ag-theme-alpine'
			style={{ height: DEFAULT_GRID_HEIGHT, width: DEFAULT_GRID_WIDTH }}
		>
			<AgGridReact<RowData>
				animateRows={animateRows ?? DEFAULT_GRID_CONFIG.animateRows}
				defaultColDef={defaultColDef ?? DEFAULT_GRID_CONFIG.defaultColDef}
				rowData={rowData}
				columnDefs={columnDefs}
				autoGroupColumnDef={autoGroupColumnDef}
				treeData={treeData}
				getDataPath={getDataPath}
			/>
		</div>
	)
}

export default DataGrid
