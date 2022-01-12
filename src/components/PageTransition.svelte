<script>
    import { fade, fly } from 'svelte/transition';
    export let refresh = '';
</script>

{#key refresh}
  <div
    in:fly="{{ y: -50, duration: 250, delay: 500 }}"
    out:fly="{{ y: -50, duration: 250}}" 
    >
    <slot/>
  </div>
{/key}