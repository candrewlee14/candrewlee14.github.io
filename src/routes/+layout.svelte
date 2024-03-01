<script>
	import "../app.css";
	import Navbar from "../components/Navbar.svelte";
	import PageTransition from "../components/PageTransition.svelte";
</script>

<div class="flex flex-row min-w-screen h-2">
	{#each ["bg-red-400 dark:bg-red-600", "bg-yellow-400 dark:bg-yellow-600", "bg-green-400 dark:bg-green-600", "bg-violet-400 dark:bg-violet-600"] as color}
		<div class={`flex-grow ${color}`}>&nbsp;</div>
	{/each}
</div>
<Navbar />
<div class="mx-6">
	<slot />
</div>
<div class="mt-4 mb-3">&nbsp;</div>
