<script>
	import Typewriter from 'svelte-typewriter';

	import { onMount } from 'svelte';
	let lockedIn = false;
	let fadeIn = false;
</script>

<div>
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
		<span class={fadeIn ? 'locked' : 'unlocked'}>AND</span>
		<span class={fadeIn ? 'locked' : 'unlocked'}>REW</span>
		<span class={fadeIn ? 'locked' : 'unlocked'}>LEE</span>
	{/if}
</div>

<style>
	span {
		display: block;
		font-family: 'Press Start 2P';
		margin: 0;
		font: 1rem;
		line-height: 1rem;
		transition: color 2s;
		@apply uppercase;
	}
	div {
		border: 3px solid;
		border-radius: 3px;
		min-width: 62px;
		min-height: 62px;
		@apply p-1 m-10 drop-shadow-sm;
	}
	div:after {
		top: 3px;
		left: 3px;
		height: calc(100% + 6px);
		width: calc(100% + 6px);
		content: ' ';
		position: absolute;
		border: 3px solid;
		border-radius: 7px;
		border-left-color: transparent;
		border-top-color: transparent;
		z-index: 100;
	}
	.locked {
		@apply text-black;
	}
	.unlocked {
		@apply text-gray-500;
	}
</style>
