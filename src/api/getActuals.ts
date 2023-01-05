import type { IActual, IActualAPIResponse } from 'types'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../api'

export const actualsAPI = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ['ACTUALS'],
	reducerPath: 'actuals',
	endpoints: builder => ({
		getActuals: builder.query<IActual[], undefined>({
			query: () => '/actuals',
			providesTags: ['ACTUALS'],
			transformResponse: (response: IActualAPIResponse): IActual[] =>
				response.data.children
		})
	})
})

export const { useGetActualsQuery } = actualsAPI
