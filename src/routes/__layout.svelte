<script>
	import { onMount } from 'svelte';
import { get_all_dirty_from_scope } from 'svelte/internal';


	import '../app.css';
	import Logo from '../components/Logo.svelte';
	import Navbar from '../components/Navbar.svelte';

	let theme = null;
	function updateMode() {
		if (localStorage.theme === 'dark') {
			theme = 'dark';
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
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
</script>

<div class="flex flex-col w-full items-center" style="min-height: 100vh;">
	<Logo />
	<Navbar />
	<button class="absolute transition-color t-1 l-1 m-1 text-black hover_text-gray-600 dark_text-white dark_hover_text-gray-300 text-3xl" on:click={toggle}>
	{#if theme === 'dark'}
	✸
	{/if}
	{#if !(theme === 'dark')}
	☾
	{/if}
	</button>
	<div class="w-5/6 bg-lightgray dark_bg-gray-900 pb-1 mb-4" style="content: ' ';" />
	<slot />
</div>
<div class="pb-6 w-full bg-lightgray dark_bg-gray-900" style="content: ' ';"/>

<style>
	button {
		top: 3rem;
		right: 2rem;
	}
</style>