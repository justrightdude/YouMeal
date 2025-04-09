import path from 'node:path';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	define: {
		SPA_MODE: JSON.stringify(process.env.SPA_MODE === 'true')
	},
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@styles': `${path.resolve(__dirname, 'src')}/lib/styles`
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@styles/viewport.scss";`
			}
		}
	}
});