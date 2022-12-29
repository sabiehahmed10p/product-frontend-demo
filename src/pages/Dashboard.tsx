import { useQuery } from '@tanstack/react-query'
import type { AgGridColumnProps } from 'ag-grid-react'
import getFruits from 'api/getFruits'
import DataGrid from 'components/DataGrid'
import type { IGridData } from 'components/DataGrid/types'
import formatDataForGrid from 'components/DataGrid/utils'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { useMemo } from 'react'
import type { IFruit } from 'types'

export default function DashboardPage(): ReactElement {
	const { isLoading, isError, error, data } = useQuery(['fruits'], getFruits)

	const formattedData = useMemo(
		() => formatDataForGrid(data as IFruit[]),
		[data]
	)

	const columnDefinition = useMemo(
		() =>
			[
				{ field: 'fruit', rowGroup: true, hide: true },
				{
					field: 'nutrition'
				},
				{
					field: 'amount'
				}
			] as AgGridColumnProps[],
		[]
	)

	const autoGroupColumnDefinition = useMemo(
		() =>
			({
				headerName: 'Fruit',
				cellRendererParams: {
					suppressCount: true
				}
			} as AgGridColumnProps),
		[]
	)

	if (isLoading || isError) {
		return <LoadingOrError error={error as Error} />
	}

	return (
		<DataGrid<IGridData>
			rowData={formattedData}
			columnDefs={columnDefinition}
			autoGroupColumnDef={autoGroupColumnDefinition}
		/>
	)
}
