import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		//add reducers here..
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// eslint-disable-next-line @typescript-eslint/no-type-alias
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// eslint-disable-next-line @typescript-eslint/no-type-alias
export type AppDispatch = typeof store.dispatch
