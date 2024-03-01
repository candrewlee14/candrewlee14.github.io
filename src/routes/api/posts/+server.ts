export const prerender = true;
import type { RequestHandler } from './$types';
import {json } from '@sveltejs/kit';
import { getPosts } from '$lib';

export const GET: RequestHandler = async ({ url }) => {
	return json(await getPosts());
};
