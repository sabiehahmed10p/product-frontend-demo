import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const LoginPage = lazy(async () => import('pages/LoginPage'))
const Details = lazy(async () => import('pages/Details'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path='/' element={<LoginPage />} />
					<Route path=':fruitName' element={<Details />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
