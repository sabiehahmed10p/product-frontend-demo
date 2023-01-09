/// <reference types="vite/client" />
/* eslint-disable unicorn/prevent-abbreviations */
interface ImportMetaEnv {
	readonly VITE_API_URL: string
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
