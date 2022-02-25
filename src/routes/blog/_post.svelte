<script>
	import dayjs from 'dayjs';
	export let title;
	export let date;
</script>

<div class="content flex flex-col align-center">
	<h1>{title}</h1>
	<p class="date">{dayjs(date).format('MMM D, YYYY')} by Andrew Lee</p>
	<slot />
</div>

<style lang="postcss">
	.content {
		@apply mx-6;
		max-width: 900px;
	}
	.content :global(h1),
	.content :global(h2),
	.content :global(h3),
	.content :global(h4),
	.content :global(h5),
	.content :global(h6),
	.content :global(p) {
		@apply mb-2;
	}
	.content :global(h1) {
		@apply text-3xl;
	}
	.content :global(h2) {
		@apply text-2xl;
	}
	.content :global(h3) {
		@apply text-xl;
	}
	.content :global(h4) {
		@apply text-lg;
	}
	.date {
		@apply font-medium text-gray-500 dark_text-gray-400 italic mb-4;
	}
	.content :global(strong) {
		@apply font-semibold dark_font-bold;
	}
</style>
