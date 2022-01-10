<script>
    import Typewriter from 'svelte-typewriter'
</script>

<div>
    <Typewriter scramble={700} scrambleSlowdown={true} delay={50}><span>AND</span></Typewriter>
    <Typewriter scramble={700} scrambleSlowdown={true} delay={100}><span>REW</span></Typewriter>
    <Typewriter scramble={900} scrambleSlowdown={true} delay={150}><span>LEE</span></Typewriter>
</div>

<style>
    span {
        display: block;
        font-family: "Press Start 2P";
        margin: 0;
        font: 1rem;
        line-height: 1rem;
    }
    div {
        border: 3px solid;
        border-radius: 3px;
        min-width: 62px;
        min-height: 62px;
        @apply p-1 m-6 drop-shadow-md hover_drop-shadow-xl;
    }
</style>
