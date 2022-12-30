import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const LoginPage = lazy(async () => import('pages/LoginPage'))
const Details = lazy(async () => import('pages/Details'))
const Dashboard = lazy(async () => import('pages/Dashboard'))

export default function App(): ReactElement {
	useEffect(() => {
		if (process.env.NODE_ENV === 'development') {
			const startWorker = async (): Promise<void> => {
				const { worker } = await import('./mocks/worker')
				worker.start().catch(error => {
					// eslint-disable-next-line no-console
					console.error('Could not start the API worker', error)
				})
			}

			void startWorker()
		}
	}, [])

	return (
		<div className='app'>
			<BrowserRouter>
				<Suspense fallback={<LoadingOrError />}>
					<Routes>
						<Route path='/' element={<LoginPage />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path=':fruitName' element={<Details />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</div>
	)
}
