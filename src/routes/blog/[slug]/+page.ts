import { read } from '$app/server';
import { error } from '@sveltejs/kit'
import {readingTime} from 'reading-time-estimator';

export async function load({ params }) {
	try {
		const post = await import(`../../../posts/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}