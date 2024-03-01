<script lang="ts">
	import Logo from './Logo.svelte';
	import Icon from '@iconify/svelte';

	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	type Theme = 'light' | 'dark';
	export const theme: Writable<Theme> = writable(getDefaultTheme());

	export let path: string;

	function getDefaultTheme() {
		return (
			typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light'
		) as Theme;
	}

	theme.subscribe((t) => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', t);
			const htmlNode = document.querySelector('html');
			htmlNode?.setAttribute('data-theme', t);
			htmlNode?.setAttribute('class', t);
		}
	});

	function toggle() {
		theme.update((t) => (t === 'light' ? 'dark' : 'light'));
	}

	onMount(() => {
		theme.set(getDefaultTheme());
	});
</script>

<div class="my-8 mb-10 flex justify-around flex-wrap">
	<a href="/" class="my-8">
		<Logo className="mx-auto" />
	</a>
	<button
		type="button"
		aria-label="Toggle theme"
		name="theme-toggle"
		class="absolute top-10 right-4 md:right-10 text-3xl transition-all hover:rotate-45"
		on:click={toggle}
	>
		{#if $theme === 'light'}
			<Icon icon="fa-solid:moon" />
		{:else}
			<Icon icon="fa-solid:sun" />
		{/if}
	</button>
	<div
		id="navbar"
		class="prose-xl flex mx-auto justify-center relative mt-4 lg:mt-0 lg:absolute lg:top-8 lg:right-24 p-1 rounded max-w-min"
	>
		<div class="mx-3 whitespace-nowrap">
			👨<a href="/" class={path === '/' ? 'text-blue-400' : ''}>About</a>
		</div>
		<div class="mx-3 whitespace-nowrap">
			⚒️<a href="/work" class={path.endsWith('/work') ? 'text-blue-400' : ''}
				>Work</a
			>
		</div>
		<div class="mx-3 whitespace-nowrap">
			📃<a href="/blog" class={path.endsWith('/blog') ? 'text-blue-400' : ''}
				>Blog</a
			>
		</div>
	</div>
</div>
