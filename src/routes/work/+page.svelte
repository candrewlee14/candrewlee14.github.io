<script lang="ts">
	import SectionTitle from '../../components/SectionTitle.svelte';
	import EntryComp from '../../components/WorkEntry.svelte';
	import { workEntries } from './history';
</script>

<svelte:head>
	<title>Work - Andrew Lee</title>
	<meta name="description" content="Hello, I'm Andrew Lee! View my work experience here." />
	<meta property="og:title" content="Work - Andrew Lee" />
	<meta
		property="og:description"
		content="Hello, I'm Andrew Lee! View my work experience here."
	/>
	<meta
		name="og:image"
		content="https://candrewlee14.github.io/candrewlee14-social-preview.png"
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<SectionTitle title="WORK" />
<article class="prose mx-auto">
	<div class="mt-10">
		{#each workEntries as entry, index (index)}
			<EntryComp {entry} />
		{/each}
	</div>
</article>
