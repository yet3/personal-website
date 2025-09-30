import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),

		alias: {
			'$styles/*': 'src/styles/*',
			'$modules/*': 'src/lib/modules/*',
			'$common/*': 'src/lib/common/*',
			'$utils/*': 'src/lib/utils/*',
			'$ctx/*': 'src/lib/ctx/*',
			'$types/*': 'src/types/*',
			'$assets/*': 'src/lib/assets/*',
			'$static/*': 'static/*'
		}
	}
};

export default config;
