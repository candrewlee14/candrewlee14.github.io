
<script lang="ts">
    export let src: string;
    export let webp_src: string;
    export let alt: string;
    export let className: string = '';
    export let imgClassName: string;
</script>

<picture class={className}>
    {#if webp_src}
        <source srcSet={webp_src} type="image/webp" />
    {/if}
    <img src={src} alt={alt} class={imgClassName} />
</picture>
