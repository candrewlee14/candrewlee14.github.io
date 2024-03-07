<script lang='ts'>
    import { base } from '$app/paths';
    import dayjs from 'dayjs';

	export let data;
</script>

<svelte:head>
	<title>Blog - Andrew Lee</title>
	<meta
		name="description"
		content="Hello, I'm Andrew Lee! I'm a software developer and student at the University of Utah. Check out my blog!"
	/>
</svelte:head>

<div class="w-full h-full flex justify-center pb-6">
	<div class="h-full flex-col items-center px-6 prose prose-img:rounded-xl prose-p:indent-4" style="max-width: 500px;">
		{#if data.posts.length > 0}
			<div class="posts mb-8">
				<h1 class="text-center mb-12">📝{data.posts.length} Post{data.posts.length != 1 ? 's' : ''}</h1>
				<div class="not-prose">
				{#each data.posts as post, i}
					<div class="postlink w-full">
						<a href={`${base}/blog/${post.slug}`}>
							<div class="flex flex-row">
								<p class="num mr-4">#{data.posts.length - i}</p>
								<p class="date">{dayjs(post.date).format("MMM D, YYYY")} — {post.readTime} minute read</p>
							</div>
							<h2 class="title">{post.title}</h2>
							<p class="description">{post.description}</p>
						</a>
					</div>
					<hr />
				{/each}
				</div>
			</div>
		{/if}
		<h3 class="text-center">No More Posts</h3>
		<p class="my-4">
			That's all the posts so far! Stay tuned for more.
		</p>
	</div>
</div>

<style lang="postcss">
	.postlink {
		@apply flex flex-row justify-start;
		@apply border-slate-100 mb-6 mt-6;
	}

	.posts hr {
		@apply mt-2 mb-4 border rounded-sm;
		@apply border-slate-100 dark:border-slate-700;
	}
	.postlink .num{
		@apply bg-sky-200 dark:bg-sky-900 px-2 mb-1 rounded-md;
	}
	.postlink .title {
		@apply text-blue-500 hover:text-blue-300 dark:text-blue-400 dark:hover:text-blue-200 transition;
	}

	.postlink .date {
		@apply font-medium text-gray-500 dark:text-gray-400 italic;
	}
</style>
