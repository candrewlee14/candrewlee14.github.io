<script lang="ts">
	import { base } from '$app/paths';
	import dayjs from 'dayjs';
	import utc from 'dayjs/plugin/utc';
	import timezone from 'dayjs/plugin/timezone'; // dependent on utc plugin
	import { andrewTz } from '$lib/posts';
	import SectionTitle from '../../components/SectionTitle.svelte';

	dayjs.extend(utc);
	dayjs.extend(timezone);

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog - Andrew Lee</title>
	<meta name="description" content="Hello, I'm Andrew Lee! Check out my blog!" />
	<meta property="og:title" content="Blog - Andrew Lee" />
	<meta property="og:description" content="Hello, I'm Andrew Lee! Check out my blog!" />
	<meta
		property="og:image"
		content="https://candrewlee14.github.io/candrewlee14-social-preview.png"
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<SectionTitle title="BLOG" />
<article class="h-full flex-col items-center prose max-w-none">
	{#if data.posts.length > 0}
		<div class="posts mb-8">
			<div class="not-prose">
				{#each data.posts as post, i}
					<div class="postlink w-full border border-line-gray px-4 py-3">
						<a class="w-full" href={`${base}/blog/${post.slug}`}>
							<div class="flex flex-row justify-between w-full">
								<div class="flex flex-row">
									<p class="num bg-sky-200 dark:bg-sky-900 mr-4">
										#{data.posts.length - i}
									</p>
									<p class="font-medium text-gray-500 dark:text-gray-400 italic">
										{dayjs(post.date)
											.add(12, 'hour')
											.tz(andrewTz)
											.format('MMM D, YYYY')}
									</p>
								</div>
								<p class="font-medium text-gray-500 dark:text-gray-400 italic">
									{post.readTime} minute read
								</p>
							</div>
							<div class="flex flex-row justify-between">
								<h2
									class="text-blue-500 hover:text-blue-300 dark:text-blue-400 dark:hover:text-blue-200 transition"
								>
									{post.title}
								</h2>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	{/if}
	<h3 class="text-center">No More Posts</h3>
	<p class="my-4">That's all the posts so far! Stay tuned for more.</p>
</article>

<style lang="postcss">
	.postlink {
		@apply flex flex-row justify-start;
		@apply mb-4 mt-4;
	}

	.posts hr {
		@apply mt-2 mb-4 border;
	}
	.postlink .num {
		@apply px-2 mb-1;
	}
</style>
