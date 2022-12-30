import type { ReactElement } from 'react'
import { Children } from 'react'
import Header from './Header'
import './layout.css'

interface LayoutProps {
	pageTitle: string
	children: React.ReactNode
}
export default function Layout({
	pageTitle,
	children
}: LayoutProps): ReactElement {
	return (
		<div className='layout'>
			<Header title={pageTitle} />
			<div className='layout-page'>
				{Children.map(children, child => (
					<section className='layout-panel'>{child}</section>
				))}
			</div>
		</div>
	)
}
