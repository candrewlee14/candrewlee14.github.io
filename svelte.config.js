import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
import { mdsvex } from 'mdsvex'

const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
        /*
        If you need to serve your file from a sub directory
        paths: {
            base: '/your-sub-dir',
        },
        */
    },
    extensions: ['.svelte', '.md'],
    preprocess: [preprocess({
        postcss: true
    }),
    mdsvex({
        extensions: ['.md'],
        layout: {
            blog: 'src/routes/blog/_post.svelte'
        }
    })]
};

export default config;
