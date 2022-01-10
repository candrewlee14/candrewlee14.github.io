<script>
	import '../app.css';
	import Logo from '../components/Logo.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="flex flex-col h-full w-full items-center bg-white dark_bg-gray-800">
	<Logo />
	<Navbar />
	<div class="w-5/6 bg-lightgray dark_bg-gray-900 pb-1 mb-4" style="content: ' ';" />
	<slot />
</div>

<style>
</style>
