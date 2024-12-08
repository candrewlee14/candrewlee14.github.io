
<script lang="ts">
    interface Props {
        src: string;
        webp_src: string;
        alt: string;
        className?: string;
        imgClassName: string;
    }

    let {
        src,
        webp_src,
        alt,
        className = '',
        imgClassName
    }: Props = $props();
</script>

<picture class={className}>
    {#if webp_src}
        <source srcSet={webp_src} type="image/webp" />
    {/if}
    <img src={src} alt={alt} class={imgClassName} />
</picture>
