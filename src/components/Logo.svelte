<script>
	import Typewriter from 'svelte-typewriter';

	import { onMount } from 'svelte';
	let lockedIn = false;
	let fadedIn = false;
	const SCRAMBLE_TIME = 1200;
	const SCRAMBLE_DIFF = 300;
	let reanimate_count = 0;
</script>

	<div class="logo p-1 m-10 text-gray-500 dark_text-gray-400 drop-shadow-sm border-4 rounded border-black dark_border-lightgray"
		on:click="{() => {reanimate_count++; lockedIn = false; fadedIn=false;}}"
	>
		{#if !lockedIn}
			<Typewriter scramble={SCRAMBLE_TIME} scrambleSlowdown={true} delay={reanimate_count === 0 ? 250 : 0}>
				<span class={lockedIn ? 'locked' : 'unlocked'}>AND</span>
			</Typewriter>
			<Typewriter scramble={SCRAMBLE_TIME + SCRAMBLE_DIFF} scrambleSlowdown={true} delay={reanimate_count === 0 ? 250 : 0}>
				<span class={lockedIn ? 'locked' : 'unlocked'}>REW</span>
			</Typewriter>
			<Typewriter
				scramble={SCRAMBLE_TIME + 2*SCRAMBLE_DIFF}
				scrambleSlowdown={true}
				delay={reanimate_count === 0 ? 250 : 0}
				on:done={() => {
					lockedIn = true;
					setTimeout(() => {
						fadedIn = true;
					}, 100);
				}}
			>
				<span class={lockedIn ? 'locked' : 'unlocked'}>LEE</span>
			</Typewriter>
		{/if}
		{#if lockedIn}
			<span class={fadedIn ? 'text-black dark_text-lightgray' : 'text-gray-500 dark_text-gray-400'}>AND</span>
			<span class={fadedIn ? 'text-black dark_text-lightgray' : 'text-gray-500 dark_text-gray-400'}>REW</span>
			<span class={fadedIn ? 'text-black dark_text-lightgray' : 'text-gray-500 dark_text-gray-400'}>LEE</span>
		{/if}
		<noscript>
			<span class='text-black dark_text-lightgray' style="transition: none;">AND</span>
			<span class='text-black dark_text-lightgray' style="transition: none;">REW</span>
			<span class='text-black dark_text-lightgray' style="transition: none;">LEE</span>
		</noscript>
		<div class="div-after border-4 border-black dark_border-lightgray rounded-md" style="position: absolute; border-left-color: transparent; border-top-color: transparent;"/>
	</div>

<style lang="postcss">
	span {
		display: block;
		font-family: 'Press Start 2P';
		margin: 0;
		font-size: 1.5rem;
		line-height: 1.5rem;
		transition: color 2s;
		@apply uppercase;
	}
	.logo {
		/* border-size: 3px solid;
		border-radius: 3px; */
		position: relative;
		min-width: 88px;
		min-height: 88px;
	}
	.div-after {
		position: absolute;
		top: 3.5px;
		left: 4px;
		height: calc(100% + 7px);
		width: calc(100% + 7px);
		content: ' ';
		z-index: 1;
	}
</style>
