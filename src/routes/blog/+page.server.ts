export const prerender = true;

import { base } from '$app/paths';
import dayjs from 'dayjs';
import type { Post } from '$lib/types'

export const load = async ({ fetch }) => {
    const response = await fetch('/api/posts');
    const posts: Post[] = await response.json();

    return { posts };
};