import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm(): ReactElement {
	return (
		<div className='relative flex min-h-screen flex-col justify-center overflow-hidden'>
			<div className='m-auto w-full rounded-md bg-white p-6 lg:max-w-xl'>
				<h1 className='text-center text-3xl font-semibold text-black'>
					Sign in
				</h1>
				<form className='mt-6'>
					<div className='mb-2'>
						<label
							htmlFor='email'
							className='block text-sm font-semibold text-gray-800'
						>
							Email Address
						</label>
						<input
							id='email'
							type='email'
							className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
						/>
					</div>
					<div className='mb-2'>
						<label
							htmlFor='password'
							className='block text-sm font-semibold text-gray-800'
						>
							Password
						</label>
						<input
							id='password'
							type='password'
							className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
						/>
					</div>
					<div className='mt-6'>
						<button
							type='submit'
							className='w-full transform rounded-md bg-green-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-green-600 focus:bg-green-600 focus:outline-none'
						>
							Sign In
						</button>
					</div>
					<Link to='/' className='text-xs text-gray-600 hover:underline'>
						Forget Password?
					</Link>
				</form>
				<p className='mt-8 text-center text-xs font-light text-gray-700'>
					Don't have an account? &nbsp;
					<Link to='/' className='font-medium text-blue-600 hover:underline'>
						Sign Up
					</Link>
				</p>
			</div>
		</div>
	)
}
