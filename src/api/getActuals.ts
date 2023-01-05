import type { IActual, IActualAPIResponse } from 'types'

import type { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../api'
import { API_TAG } from './constants'

const transformErrorResponse = (error: FetchBaseQueryError): Error => {
	const responseError: Error = {
		name: `${error.status}`,
		message: error.data as string
	}
	if (
		(error.status === 'FETCH_ERROR' ||
			error.status === 'TIMEOUT_ERROR' ||
			error.status === 'PARSING_ERROR') &&
		!responseError.message
	) {
		responseError.message = error.error
	}
	return responseError
}

export const actualsAPI = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: [API_TAG.ACTUALS],
	reducerPath: 'actuals',

	endpoints: builder => ({
		getActuals: builder.query<IActual[], undefined>({
			query: () => '/actuals/1', // 1 is for demo purpose only due to limitation of mockapi.io, Temporary code
			providesTags: [API_TAG.ACTUALS],
			transformErrorResponse,
			transformResponse: (response: IActualAPIResponse): IActual[] =>
				response.data.children
		})
	})
})

export const { useGetActualsQuery } = actualsAPI
