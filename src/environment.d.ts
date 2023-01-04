/// <reference types="vite/client" />

interface ImportMetaEnvironment {
	readonly VITE_API_URL: string
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnvironment
}
