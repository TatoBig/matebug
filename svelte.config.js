import adapter from '@sveltejs/adapter-auto';
import seqPreprocessor from 'svelte-sequential-preprocessor'
import { preprocessThrelte } from '@threlte/preprocess'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: seqPreprocessor([preprocess(), preprocessThrelte()]),

	kit: {
		adapter: adapter()
	}
};

export default config;