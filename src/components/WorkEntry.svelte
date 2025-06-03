<script lang="ts">
	import type { WorkEntry } from '$lib/types';
	interface Props {
		entry: WorkEntry;
	}

	let { entry }: Props = $props();
</script>

<div class="flex flex-row">
	<div
		class="flex flex-col flex-grow mb-4 lg:mb-8 border border-line-gray dark:border-line-gray p-2"
	>
		<div class="flex flex-row">
			<div class="w-fit h-fit flex flex-col items-center bg-base-100 pl-1 pr-4 !pb-3">
				<p class="italic !my-1 w-full rounded-md text-center">
					{entry.dates[0].getUTCFullYear()}
				</p>
				<div class="w-8 lg:w-10 h-8">
					{#if entry.image_url}
						<img
							src={entry.image_url}
							alt={entry.company}
							class="rounded-sm w-full !my-0 !-mb-12"
						/>
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
					<div class="mt-2 mr-2 flex flex-row space-x-2 items-center">
						{#if entry.dates[1] == null}
							<div class="relative flex h-3 w-3 mb-1">
								<span
									class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75"
								></span>
								<span
									class="relative inline-flex rounded-full h-3 w-3 bg-cyber-green-dark"
								></span>
							</div>
							<span>Active</span>
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
