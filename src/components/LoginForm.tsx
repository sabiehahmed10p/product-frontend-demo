import type { ReactElement } from 'react'

export default function LoginForm(): ReactElement  {
	return (
		<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
			<div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl">
				<h1 className="text-3xl font-semibold text-center text-black">
					Sign in
				</h1>
				<form className="mt-6">
					<div className="mb-2">
						<label
							for="email"
							className="block text-sm font-semibold text-gray-800"
						>
							Email Address
						</label>
						<input
							type="email"
							className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<div className="mb-2">
						<label
							for="password"
							className="block text-sm font-semibold text-gray-800"
						>
							Password
						</label>
						<input
							type="password"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<div className="mt-6">
						<button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
							Sign In
						</button>
					</div>
					<a
						href="#"
						className="text-xs text-gray-600 hover:underline"
					>
						Forget Password?
					</a>

				</form>

				<p className="mt-8 text-xs font-light text-center text-gray-700">
					{" "}
					Don't have an account?{" "}
					<a
						href="#"
						className="font-medium text-blue-600 hover:underline"
					>
						Sign up
					</a>
				</p>
			</div>
		</div>
	);
}
