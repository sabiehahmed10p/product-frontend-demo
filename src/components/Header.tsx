import type { ReactElement } from 'react'
import './header.css'

interface Properties {
	title: string
}
export default function Header({ title }: Properties): ReactElement {
	return (
		<header className='the-page-header'>
			<h1 className='the-page-header-title'>{title}</h1>
		</header>
	)
}
