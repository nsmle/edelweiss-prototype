import vercelAdapter from '@sveltejs/adapter-vercel';
import bunAdapter from 'svelte-adapter-bun';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        inlineStyleThreshold: Infinity,
        // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://svelte.dev/docs/kit/adapters for more information about adapters.
        adapter: Boolean(process.env.VERCEL || 0)
            ? vercelAdapter({
                  runtime: 'nodejs22.x',
                  images: {
                      sizes: [640, 828, 1200, 1920, 3840],
                      formats: ['image/avif', 'image/webp'],
                      minimumCacheTTL: 604800,
                      domains: ['dicea.fun', 'www.dicea.fun', 'edelweiss-beta.vercel.app']
                  }
              })
            : bunAdapter(),

        alias: {
            '$utils/*': 'src/utils/*',
            '$assets/*': 'static/*'
        }
    }
};

export default config;
