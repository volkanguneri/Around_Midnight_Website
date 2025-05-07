import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: 'index.html',
			strict: false
		}),

		prerender: {
			handleHttpError: 'warn',
			entries: ['*']
		},
		
		// Ajout du base path pour GitHub Pages
		paths: {
			base: ''
		}
	}
};

export default config;
