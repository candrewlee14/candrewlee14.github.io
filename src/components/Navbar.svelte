<script lang="ts">
	import Logo from './Logo.svelte';
	import Icon from '@iconify/svelte';

	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	type Theme = 'light' | 'dark';
	export const theme: Writable<Theme> = writable(getDefaultTheme());

	interface Props {
		path: string;
	}

	let { path }: Props = $props();

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
			if (t == 'dark') htmlNode?.classList.add(t);
			else htmlNode?.classList.remove('dark');
		}
	});

	function toggle() {
		theme.update((t) => (t === 'light' ? 'dark' : 'light'));
	}

	onMount(() => {
		theme.set(getDefaultTheme());
	});
</script>

<div class="mt-2 mb-6 lg:mb-8 flex justify-around flex-wrap">
	<a
		href="/"
		class="w-full mt-6 lg:w-fit"
		onclick={() => {
			// reset bounce animation on all keys
			document.querySelectorAll('.bounce').forEach((el) => {
				el.classList.remove('bounce');
				void el.offsetWidth;
				el.classList.add('bounce');
			});
		}}
	>
		<Logo className="mx-auto" />
	</a>
	<button
		type="button"
		aria-label="Toggle theme"
		name="theme-toggle"
		class="absolute top-10 right-4 md:right-10 text-3xl transition-all hover:rotate-45"
		onclick={toggle}
	>
		{#if $theme === 'light'}
			<Icon icon="fa-solid:moon" />
		{:else}
			<Icon icon="fa-solid:sun" />
		{/if}
	</button>
	<div
		id="navbar"
		class="prose-xl flex mx-auto justify-center relative mt-6 lg:absolute lg:top-8 lg:right-24 px-1 max-w-min"
	>
		<div class="mx-3 whitespace-nowrap">
			<a href="/" class={(path === '/' || path === '' ? 'text-blue-400' : '') + ' font-mono'}
				>ABOUT</a
			>
		</div>
		<div class="mx-3 whitespace-nowrap">
			<a href="/work" class={(path.endsWith('/work') ? 'text-blue-400' : '') + ' font-mono'}
				>WORK</a
			>
		</div>
		<div class="mx-3 whitespace-nowrap">
			<a href="/blog" class={(path.endsWith('/blog') ? 'text-blue-400' : '') + ' font-mono'}
				>BLOG</a
			>
		</div>
	</div>
</div>

<style>
	#navbar a {
		position: relative;
	}

	#navbar a::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 50%;
		width: 0;
		height: 2px;
		transition:
			width 0.1s,
			left 0.1s;
		@apply bg-blue-400 dark:bg-blue-300;
	}

	#navbar a:hover::after {
		left: 0;
		width: 100%;
	}
</style>
