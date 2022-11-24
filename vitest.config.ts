// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		setupFiles: ['./vitest.setup.ts'],
		environment: 'jsdom',
		deps: {
			inline: ['canvas'],
		},
		// For this config, check https://github.com/vitest-dev/vitest/issues/740
		threads: false,
		environmentOptions: {
			jsdom: {
				resources: 'usable',
			},
		},
	},
})
