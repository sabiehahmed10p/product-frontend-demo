import type { AgGridColumnProps } from 'ag-grid-react'
import { useGetActualsQuery } from 'api/getActuals'
import DataGrid from 'components/DataGrid'
import { DEFAULT_MAIN_COLUMN_WIDTH } from 'components/DataGrid/defaults'
import type { IActualsGridData } from 'components/DataGrid/types'
import {
	formatActualsDataForGrid,
	generateMonthColumns
} from 'components/DataGrid/utils'
import Layout from 'components/Layout'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { useCallback, useMemo } from 'react'

export default function DashboardPage(): ReactElement {
	const { isError, isLoading, data, error } = useGetActualsQuery(undefined, {})

	const formattedData = useMemo(() => formatActualsDataForGrid(data), [data])

	const columnDefinition = useMemo(() => {
		const columns: AgGridColumnProps[] = [
			{ field: 'hierarchy', rowGroup: true, hide: true }
		]
		if (formattedData.length > 0) {
			const monthlyColumns = generateMonthColumns(formattedData[0].months).map(
				column => ({ ...column, floatingFilter: true })
			)
			return [...columns, ...monthlyColumns]
		}
		return columns
	}, [formattedData])

	const autoGroupColumnDefinition = useMemo(
		() =>
			({
				headerName: 'Combined Actuals',
				minWidth: DEFAULT_MAIN_COLUMN_WIDTH,
				pinned: 'left',
				field: 'title',
				floatingFilter: true,
				cellRendererParams: {
					suppressCount: true
				}
			} as AgGridColumnProps),
		[]
	)

	const getDataPath = useCallback(
		(item: IActualsGridData): string[] => item.hierarchy,
		[]
	)

	if (isLoading || isError) {
		return <LoadingOrError error={error as Error} />
	}

	return (
		<Layout pageTitle='Dashboard'>
			<DataGrid<IActualsGridData>
				gridTitle='Actuals'
				rowData={formattedData}
				columnDefs={columnDefinition}
				autoGroupColumnDef={autoGroupColumnDefinition}
				getDataPath={getDataPath}
				treeData
			/>
		</Layout>
	)
}
