<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import Logo from '../components/Logo.svelte';
	import Navbar from '../components/Navbar.svelte';
	import PageTransition from '../components/PageTransition.svelte';

	let theme = null;
	function updateMode() {
		if (localStorage.theme === 'dark') {
			theme = 'dark';
			document.body.classList.add('dark');
			document.body.style.background = "#1f2937";
		} else {
			document.body.classList.remove('dark')
			document.body.style.background = "white";
			theme = 'light';
		}
	}

	function toggle() {
		let curTheme = localStorage.getItem('theme');
		if (curTheme === 'dark'){
			localStorage.theme = "light";
		}
		else {
			localStorage.theme = "dark";
		}
		updateMode();
	}
	onMount(() => {
		updateMode();
	});

	export let key;
</script>

<!-- Assign current route's path to `key` prop -->
<script context="module">
	export const load = async ({ url }) => ({
	  props: {
		key: url,
	  },
	})
</script>

<div class="flex flex-col w-full items-center" style="min-height: 100vh;">
	<Logo />
	<Navbar />
	<button class="absolute transition-color t-1 l-1 m-1 text-black hover_text-gray-600 dark_text-white dark_hover_text-gray-300 text-3xl" on:click={toggle}>
	{#if theme === 'dark'}
	☀️
	{/if}
	{#if theme === 'light'}
	🌙
	{/if}
	</button>
	<div class="w-5/6 bg-lightgray dark_bg-gray-500 pb-1 mb-4" style="content: ' ';" />
	<PageTransition refresh={key}><slot/></PageTransition>
</div>
<div class="pb-6 w-full bg-lightgray dark_bg-gray-900 mt-8" style="content: ' ';"/>

<style>
	button {
		top: 3rem;
		right: 2rem;
	}
</style>