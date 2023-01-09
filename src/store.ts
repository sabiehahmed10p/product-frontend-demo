import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { actualsAPI } from 'api/getActuals'

export const store = configureStore({
	reducer: {
		// add reducers here..
		[actualsAPI.reducerPath]: actualsAPI.reducer
	},
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	devTools: { trace: true, traceLimit: 25 },
	middleware: getDefaultMiddleware =>
		// eslint-disable-next-line unicorn/prefer-spread
		getDefaultMiddleware().concat(actualsAPI.middleware)
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
// eslint-disable-next-line @typescript-eslint/no-type-alias
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// eslint-disable-next-line @typescript-eslint/no-type-alias
export type AppDispatch = typeof store.dispatch
