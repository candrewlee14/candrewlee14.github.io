<script lang="ts">
	import dayjs from 'dayjs';
	import utc from 'dayjs/plugin/utc';
	import timezone from 'dayjs/plugin/timezone'; // dependent on utc plugin
	import { andrewTz } from '$lib/posts';
	dayjs.extend(utc);
	dayjs.extend(timezone);
	import { fadeIn } from '$lib/actions/fadeIn';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} - Andrew Lee</title>
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={`${data.meta.description} - Written by Andrew Lee`}/>
	<meta
		property="og:image"
		content={data.meta.socialPreview
			? `https://candrewlee14.github.io${data.meta.socialPreview}`
			: 'https://candrewlee14.github.io/candrewlee14-social-preview.png'}
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div class="flex flex-col items-center overflow-x-hidden"> <!-- Added overflow-x-hidden for consistency -->
	<article use:fadeIn class="fade-in-on-scroll prose dark:prose-invert prose-img:rounded-md">
		<h1 class="text-center">{data.meta.title}</h1>
		<p class="date text-center">
			{dayjs(data.meta.date).add(12, 'hours').tz(andrewTz).format('MMM D, YYYY')} by Andrew Lee
		</p>
		<base target="_blank" />
		<data.content />
	</article>
</div>
