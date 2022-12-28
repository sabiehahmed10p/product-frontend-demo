import Head from 'components/Head'
import type { ReactElement } from 'react'

import LoginForm from '../components/LoginForm'

export default function LoginPage(): ReactElement {
	return (
		<>
			<Head title='Product Frontend Login' />
			<div className="bg-[url('/203736e49602cb770887.svg')]">
				<LoginForm />
			</div>
		</>
	)
}
