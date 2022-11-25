/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: 'https://achtaitaipai.github.io/pixmix',
	build: {
		outDir: 'docs',
	},
})
