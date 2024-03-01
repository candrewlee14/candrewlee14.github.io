<script lang="ts">
    import type { WorkEntry } from "$lib/types";
    export let entry: WorkEntry;
</script>

<div class="flex flex-row">
    <div class="flex flex-col items-center mr-5">
        <p class="italic !my-1">{entry.dates[0].getUTCFullYear()}</p>
        <div class="w-8 lg:w-14">
            {#if entry.image_url}
                <img
                    src={entry.image_url}
                    alt={entry.company}
                    class="rounded w-full !my-1"
                />
            {/if}
        </div>
    </div>
    <div
        class="border-r-4 mr-6 mt-3 -mb-3 border-slate-300 dark:border-slate-600"
    >
        <div
            class="absolute ring-4 ring-slate-300 dark:ring-slate-600 w-3 h-3 -ml-1 rounded-full bg-base-100"
        >
            &nbsp;
        </div>
    </div>
    <div class="flex flex-col flex-grow mb-4">
        <h2 class="!mt-0 !mb-4">
            <span
                class={`border-b-4 ${entry.colorClass && `${entry.colorClass[0]} ${entry.colorClass[1]}`}`}
            >
                {entry.title}
            </span>
        </h2>
        <h3 class="!mt-0">{entry.company}</h3>
        <ul>
            {#each entry.bullet_points as point}
                <li>{point}</li>
            {/each}
        </ul>
    </div>
</div>
