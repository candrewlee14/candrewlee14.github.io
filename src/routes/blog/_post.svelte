<script>
	import dayjs from 'dayjs';
	export let title;
	export let date;
</script>

<div class="content flex flex-col align-center">
	<h1>{title}</h1>
	<p class="date">{dayjs(date).format('MMM D, YYYY')} by Andrew Lee</p>
    <base target="_blank"/>
	<slot />
</div>

<style lang="postcss">
	.content {
		@apply mx-6;
        margin-top: -15px;
		max-width: 900px;
	}
	.content :global(h1),
	.content :global(h2),
	.content :global(h3),
	.content :global(h4),
	.content :global(h5),
	.content :global(h6) {
		@apply mb-4 mt-2;
	}
	.content :global(p) {
		@apply mb-4 text-base;
	}
	.content :global(h1) {
		@apply text-3xl;
	}
	.content :global(h2) {
		@apply text-2xl pl-1 pb-1;
        border-bottom: 2px solid;
        @apply border-gray-400;
	}
	.content :global(h3) {
		@apply text-xl;
	}
	.content :global(h4) {
		@apply text-lg;
	}
	.content :global(a) {
		@apply text-blue-500 hover_text-blue-200 font-normal;
	}
    .content :global(ul) {
        list-style-type: disc;
        list-style-position: outside;
        @apply mb-4 ml-5;
    }
    .content :global(img) {
        @apply mb-0 rounded-sm border-2 border-gray-300; 
        object-fit: contain;
    }
    .content :global(.gallery) {
        @apply flex flex-row flex-wrap justify-center w-full mb-5;
    }
	.date {
		@apply font-medium text-gray-500 dark_text-gray-400 italic mb-4;
	}
	.content :global(strong) {
		@apply font-semibold dark_font-bold;
	}
	.content :global(picture) {
		display: inline-block;
		margin: 0;
		padding: 0;
	}
	.content :global(.txt-and-img) {
		@apply flex flex-row flex-wrap justify-between pb-6;
	}
	.content :global(.txt-side) {
		max-width: 450px;
		margin-right: 10px;
	}
	.content :global(.img-side) {
		max-width: 450px;
		@apply flex flex-col;
	}
	.content :global(blockquote) {
		padding-left: 10px;

		@apply p-2 italic;
	}
</style>
