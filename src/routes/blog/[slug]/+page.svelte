<script lang="ts">
	import dayjs from "dayjs";
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} - Andrew Lee</title>
	<meta
		name="description"
		content={data.meta.description}
	/>
</svelte:head>

<div class="flex flex-col items-center">
	<article class="prose prose-img:rounded-md">
		<h1 class="text-center">{data.meta.title}</h1>
		<p class="date text-center">
			{dayjs(data.meta.date).format("MMM D, YYYY")} by Andrew Lee
		</p>
		<base target="_blank" />
		<svelte:component this={data.content} />
	</article>
</div>
