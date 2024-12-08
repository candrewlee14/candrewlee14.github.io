<script lang="ts">
	import EntryComp from "../../components/WorkEntry.svelte";
	import { workEntries } from "./history";
</script>

<svelte:head>
	<title>Work - Andrew Lee</title>
	<meta
		name="description"
		content="Hello, I'm Andrew Lee! View my work experience here."
	/>
	<meta property="og:title" content="Work - Andrew Lee" />
	<meta
		property="og:description"
		content="Hello, I'm Andrew Lee! View my work experience here."
	/>
	<meta name="og:image" content="https://candrewlee14.github.io/candrewlee14-social-preview.png" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="flex flex-col items-center -ml-2">
	<article class="prose max-w-screen-lg">
		<h1 class="text-center mb-8">💼 Work</h1>
		<div class="mt-10">
			{#each workEntries as entry}
				<EntryComp {entry} />
			{/each}
		</div>
	</article>
</div>
