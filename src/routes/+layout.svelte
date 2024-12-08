<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	let { data, children } = $props();

	const colors = [
		'bg-purple-400 dark:bg-purple-600',
		'bg-blue-400 dark:bg-blue-600',
		'bg-green-400 dark:bg-green-600',
		'bg-lime-400 dark:bg-lime-600'
	];
	
</script>

<svelte:head>
	<meta property="og:url" content={`https://candrewlee14.github.io${data.pathname}`} />
</svelte:head>

<div class="flex flex-row min-w-screen h-2">
	{#each colors as color}
		<div class={`flex-grow ${color}`}>&nbsp;</div>
	{/each}
</div>
<Navbar path={data.pathname} />
<div class="mx-6">
	{#key data.pathname}
		<div
			in:fly={{ easing: cubicOut, y: 10, duration: 100, delay: 150 }}
			out:fly={{ easing: cubicIn, y: -10, duration: 100 }}
		>
			{@render children?.()}
		</div>
	{/key}
</div>
<div class="mt-4 mb-3">&nbsp;</div>
