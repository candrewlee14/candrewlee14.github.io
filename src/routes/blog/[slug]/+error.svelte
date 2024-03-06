<script lang='ts'>
    import { page } from '$app/stores';
  </script>

<div class="flex flex-col items-center">
	<article class="prose">		
        {#if $page.error}
        <h1 class="text-center">⚠️{$page.status}</h1>
        <p>Could not find page "<span class="italic">{$page.error?.message}</span>".</p>
        <p>Check out the <a href="/">homepage</a> instead.</p>
        {/if}
    </article>
</div>`
