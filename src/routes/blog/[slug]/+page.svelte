<script lang="ts">
	import dayjs from 'dayjs';
	import utc from 'dayjs/plugin/utc';
	import timezone from 'dayjs/plugin/timezone'; // dependent on utc plugin
	import { andrewTz } from '$lib/posts';
	import SectionTitle from '../../../components/SectionTitle.svelte';
	dayjs.extend(utc);
	dayjs.extend(timezone);

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} - Andrew Lee</title>
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={`${data.meta.description} - Written by Andrew Lee`} />
	<meta
		property="og:image"
		content={data.meta.socialPreview
			? `https://candrewlee14.github.io${data.meta.socialPreview}`
			: 'https://candrewlee14.github.io/candrewlee14-social-preview.png'}
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div id="progress"></div>
<SectionTitle title={data.meta.title} />
<div class="flex flex-col items-center">
	<div class="text-center mt-[-1rem] opacity-70 flex flex-row">
		<i>by Andrew Lee</i>
		<div class="flex justify-center space-x-2 mb-2 mx-4">
			<div class="w-4 h-px bg-line-gray self-center"></div>
			<span class="text-cyber-green text-xs font-mono">::</span>
			<div class="w-4 h-px bg-line-gray self-center"></div>
		</div>
		<i class="date">
			{dayjs(data.meta.date).add(12, 'hours').tz(andrewTz).format('YYYY/MM/DD')}
		</i>
	</div>
	<article class="prose">
		<base target="_blank" />
		<data.content />
	</article>
</div>

<style lang="postcss">
	@keyframes grow-progress {
		from {
			transform: scaleX(0);
		}
		to {
			transform: scaleX(1);
		}
	}

	#progress {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 6px;
		background: #4ade80;
		background: linear-gradient(90deg, rgba(74, 222, 128, 1) 0%, rgba(126, 167, 215, 1) 100%);

		transform-origin: 0 50%;
		animation: grow-progress auto linear;
		animation-timeline: --page-scroll;
	}
</style>
