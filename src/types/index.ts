export * from './actuals'
export * from './fruits'

declare module 'react' {
	function forwardReference<T, P = unknown>(
		render: (props: P, reference: Ref<T>) => ReactElement | null
	): (props: P & RefAttributes<T>) => ReactElement | null
}
