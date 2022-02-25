<script context="module">
	import { base } from '$app/paths';
	import dayjs from 'dayjs';
	export const load = async ({ fetch }) => {
		const posts = await fetch('/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Blog - Andrew Lee</title>
	<meta
		name="description"
		content="Hello, I'm Andrew Lee! I'm a software developer and student at the University of Utah. Check out my blog!"
	/>
</svelte:head>

<div class="w-full h-full flex justify-center pb-6">
	<div class="h-full flex-col items-center px-6" style="max-width: 500px;">
		{#if posts.length > 0}
			<div class="posts mb-8">
				<h1 class="blogtitle text-3xl mb-4 text-center">{posts.length} Post{posts.length != 1 ? 's' : ''}</h1>
				{#each posts as post, i}
					<div class="postlink w-full">
						<a href={`${base}/${post.path}`}>
							<div class="flex flex-row">
								<p class="num mr-4">#{posts.length - i}</p>
								<p class="date">{dayjs(post.meta.date).format("MMM D, YYYY")} by Andrew Lee</p>
							</div>
							<h2 class="title">{post.meta.title}</h2>
							<p class="excerpt">{post.meta.excerpt}</p>
						</a>
					</div>
				{/each}
				<hr class="border-8" />
			</div>
		{/if}
		<h1 class="text-center">That's All, Folks!</h1>
		<p class="my-4">
			But don't worry, I've got thousands of monkeys all hacking away on typewriters 'round the
			clock. If your local grocery store is out of bananas, you'll know who to blame.
		</p>
		<p>They're bound to whip up a shiny new post sometime soon, so stay tuned!</p>
		<br />
		<h1 class="text-center text-4xl">🦍 🦍 🦍 🦍 🦍</h1>
	</div>
</div>

<style lang="postcss">
	.postlink {
		@apply flex flex-row justify-start;
		@apply border-lightgray mb-6 mt-6;
	}
	.blogtitle {
		margin-top: -10px;
	}
	.posts hr {
		@apply mt-2 mb-4 border rounded-sm;
		@apply border-lightgray dark_border-gray-400;
	}
	.postlink .num{
		@apply bg-sky-200 dark_bg-sky-900 px-2 mb-1 rounded-md;
	}
	.postlink .title {
		@apply text-blue-500 hover_text-blue-300 dark_text-blue-400 dark_hover_text-blue-200 transition;
	}

	.postlink .date {
		@apply font-medium text-gray-500 dark_text-gray-400 italic;
	}
</style>
