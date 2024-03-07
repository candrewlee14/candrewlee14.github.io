<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	export let data;
</script>

<svelte:head>
	<meta property="og:url" content={`https://candrewlee14.github.io${data.pathname}`} />
</svelte:head>

<div class="flex flex-row min-w-screen h-2">
	{#each ['bg-red-400 dark:bg-red-600', 'bg-yellow-400 dark:bg-yellow-600', 'bg-green-400 dark:bg-green-600', 'bg-violet-400 dark:bg-violet-600'] as color}
		<div class={`flex-grow ${color}`}>&nbsp;</div>
	{/each}
</div>
<Navbar path={data.pathname}/>
<div class="mx-6">
	{#key data.pathname}
		<div
			in:fly={{ easing: cubicOut, y: 10, duration: 100, delay: 150 }}
			out:fly={{ easing: cubicIn, y: -10, duration: 100 }}
		>
			<slot />
		</div>
	{/key}
</div>
<div class="mt-4 mb-3">&nbsp;</div>
