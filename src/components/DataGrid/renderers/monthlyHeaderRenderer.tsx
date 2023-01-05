import type { ReactElement } from 'react'
import type { IMonthlyCellRendererParameters } from '../types'

function monthlyHeaderRenderer(
	parameters: IMonthlyCellRendererParameters
): ReactElement {
	const { date, isForecast } = parameters
	const [year, month] = date.split('-').map(Number)
	const fullDate = new Date()
	fullDate.setFullYear(year, month)
	const formattedMonth = fullDate.toLocaleString('en-US', {
		month: 'short'
	})
	const formattedYear = fullDate.toLocaleString('en-US', { year: '2-digit' })
	const formattedDate = `${formattedMonth} '${formattedYear}`

	return (
		<div
			className={`month-column ${isForecast ? 'month-column-forecast' : ''}`}
		>
			<div className='month-column-date'>{formattedDate}</div>

			<div className='month-column-text'>
				{isForecast ? 'Forecast' : 'Actual'}
			</div>
		</div>
	)
}

export default monthlyHeaderRenderer
