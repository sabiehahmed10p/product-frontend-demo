import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import 'ag-grid-enterprise'
import type { AgReactUiProps } from 'ag-grid-react'
import { AgGridReact } from 'ag-grid-react'
import type React from 'react'
import { forwardRef } from 'react'
import DEFAULT_GRID_CONFIG, { DEFAULT_GRID_WIDTH } from './defaults'

import './grid.scss'

interface DataGridProps<RowData> extends AgReactUiProps<RowData> {
	gridTitle: string
}

const DataGrid = forwardRef(
	<RowData,>(props: DataGridProps<RowData>): React.ReactElement => {
		const {
			animateRows,
			defaultColDef,
			rowData,
			columnDefs,
			autoGroupColumnDef,
			treeData,
			getDataPath,
			gridTitle
		} = props

		return (
			<div className='ag-theme-finmark' style={{ width: DEFAULT_GRID_WIDTH }}>
				<h6 className='grid-table-subtitle text-gray-900'>{gridTitle}</h6>
				<AgGridReact<RowData>
					domLayout='autoHeight'
					animateRows={animateRows ?? DEFAULT_GRID_CONFIG.animateRows}
					defaultColDef={defaultColDef ?? DEFAULT_GRID_CONFIG.defaultColDef}
					rowData={rowData}
					columnDefs={columnDefs}
					autoGroupColumnDef={autoGroupColumnDef}
					treeData={treeData}
					getDataPath={getDataPath}
					suppressRowHoverHighlight={
						DEFAULT_GRID_CONFIG.suppressRowHoverHighlight
					}
				/>
			</div>
		)
	}
)

export default DataGrid
