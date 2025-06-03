<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	let { data, children } = $props();
</script>

<svelte:head>
	<meta property="og:url" content={`https://candrewlee14.github.io${data.pathname}`} />
</svelte:head>

<Navbar path={data.pathname} />
<div class="container mx-auto max-w-5xl">
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
	<footer class="py-8 border-t border-line-gray text-center">
		<div class="flex justify-center space-x-2 mb-2">
			<div class="w-4 h-px bg-line-gray self-center"></div>
			<span class="text-cyber-green text-xs font-mono">::</span>
			<div class="w-4 h-px bg-line-gray self-center"></div>
		</div>
		<p class="text-xs text-base-content opacity-70 font-mono">
			<span id="currentYear">{new Date().getFullYear()}</span> C. Andrew Lee.
		</p>
	</footer>
</div>
