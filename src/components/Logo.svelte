<script>
    import Typewriter from 'svelte-typewriter';

    import { onMount } from 'svelte';
    let lockedIn = false;
    let fadeIn = false;
</script>

<div>
    {#if !lockedIn}
    <Typewriter scramble={700} scrambleSlowdown={true} delay={50}>
        <span class={lockedIn ? "locked" : "unlocked"}>AND</span>
    </Typewriter>
    <Typewriter scramble={700} scrambleSlowdown={true} delay={100}>
        <span class={lockedIn ? "locked" : "unlocked"}>REW</span>
    </Typewriter>
    <Typewriter scramble={900} scrambleSlowdown={true} delay={150} on:done={() => {
        lockedIn = true; 
        setTimeout(() => {
            fadeIn = true
        }, 100);
    }}>
        <span class={lockedIn ? "locked" : "unlocked"}>LEE</span>
    </Typewriter>
    {/if}
    {#if lockedIn}
        <span class={fadeIn ? "locked" : "unlocked"}>AND</span>
        <span class={fadeIn ? "locked" : "unlocked"}>REW</span>
        <span class={fadeIn ? "locked" : "unlocked"}>LEE</span>
    {/if}
</div>

<style>
    span {
        display: block;
        font-family: "Press Start 2P";
        margin: 0;
        font: 1rem;
        line-height: 1rem;
        transition: color 2s;
    }
    div {
        border: 3px solid;
        border-radius: 3px;
        min-width: 62px;
        min-height: 62px;
        @apply p-1 m-6 drop-shadow-md hover_drop-shadow-xl;
    }
    .locked {
        @apply text-black;
    }
    .unlocked {
        @apply text-gray-500;
    }

</style>
