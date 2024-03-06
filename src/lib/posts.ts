import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'
import { readingTime } from 'reading-time-estimator'

export async function getPosts() {
	let posts: Post[] = []

	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug' | 'default'>

			let readTime = 0;
			if ('default' in file) {
				readTime = readingTime(file.default?.render().html as string).minutes;
			}

			const post = { ...metadata, slug, readTime } satisfies Post
			post.published && posts.push(post)
		}
	}

	posts = posts.sort((first, second) =>
		new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}