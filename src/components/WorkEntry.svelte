<script lang="ts">
	import type { WorkEntry } from '$lib/types';
	export let entry: WorkEntry;
</script>

<div class="flex flex-row">
	<div class="border-r-4 border-slate-300 dark:border-slate-600 w-0 ml-3"></div>
	<div class="flex flex-col flex-grow mb-4 lg:mb-8">
		<div class="flex flex-row">
			<div class="w-fit h-fit flex flex-col items-center -translate-x-1/2 bg-base-100 !pb-3">
				<p class="italic !my-1 w-full rounded-md text-center">{entry.dates[0].getUTCFullYear()}</p>
				<div class="w-8 lg:w-10 h-8">
					{#if entry.image_url}
						<img src={entry.image_url} alt={entry.company} class="rounded w-full !my-0 !-mb-12" />
					{/if}
				</div>
			</div>
			<div class="w-full">
				<div class="flex flex-row justify-between w-full">
					<h3 class="!mt-0 !mb-4">
						<span
							class={`border-b-4 ${entry.colorClass && `${entry.colorClass[0]} ${entry.colorClass[1]}`}`}
						>
							{entry.title}
						</span>
					</h3>
                    <div class="mt-2">
                        {#if entry.dates[1] == null}
                            <span class="bg-emerald-300 text-black dark:bg-emerald-600 dark:text-white p-1 px-2 rounded-sm">Active</span>
                        {/if}
                    </div>
				</div>
				<h4 class="!mt-0 italic">{entry.company}</h4>
			</div>
		</div>
		<ul class="ml-6 !mt-1 !mb-4">
			{#each entry.bullet_points as point}
				<li>{point}</li>
			{/each}
		</ul>
	</div>
</div>
