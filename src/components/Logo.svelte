<script>
	import Typewriter from 'svelte-typewriter';

	import { onMount } from 'svelte';
	let lockedIn = false;
	let fadeIn = false;
</script>

	<div class="logo p-1 m-10 text-gray-500 dark_text-gray-600 drop-shadow-sm border-4 rounded border-black dark_border-lightgray">
		{#if !lockedIn}
			<Typewriter scramble={800} scrambleSlowdown={true}>
				<span class={lockedIn ? 'locked' : 'unlocked'}>AND</span>
			</Typewriter>
			<Typewriter scramble={800} scrambleSlowdown={true}>
				<span class={lockedIn ? 'locked' : 'unlocked'}>REW</span>
			</Typewriter>
			<Typewriter
				scramble={1000}
				scrambleSlowdown={true}
				on:done={() => {
					lockedIn = true;
					setTimeout(() => {
						fadeIn = true;
					}, 100);
				}}
			>
				<span class={lockedIn ? 'locked' : 'unlocked'}>LEE</span>
			</Typewriter>
		{/if}
		{#if lockedIn}
			<span class={fadeIn ? 'text-black dark_text-lightgray' : 'text-gray-500 dark_text-gray-600'}>AND</span>
			<span class={fadeIn ? 'text-black dark_text-lightgray' : 'text-gray-500 dark_text-gray-600'}>REW</span>
			<span class={fadeIn ? 'text-black dark_text-lightgray' : 'text-gray-500 dark_text-gray-600'}>LEE</span>
		{/if}
		<div class="div-after border-4 border-black dark_border-lightgray rounded-md" style="position: absolute; border-left-color: transparent; border-top-color: transparent;"/>
	</div>

<style lang="postcss">
	span {
		display: block;
		font-family: 'Press Start 2P';
		margin: 0;
		font: 1rem;
		line-height: 1rem;
		transition: color 2s;
		@apply uppercase;
	}
	.logo {
		/* border-size: 3px solid;
		border-radius: 3px; */
		position: relative;
		min-width: 62px;
		min-height: 62px;
	}
	.div-after {
		position: absolute;
		top: 3.5px;
		left: 4px;
		height: calc(100% + 7px);
		width: calc(100% + 7px);
		content: ' ';
		/* border: 3px solid;
		border-radius: 7px;
		border-left-color: transparent;
		border-top-color: transparent; */
		z-index: 1;
	}
</style>
