<script lang="ts">
	interface Props {
		title: string;
	}
	let { title = '' }: Props = $props();
</script>

<div
	id="work"
	class="mb-10 sm:mb-16 py-6 border-t border-b border-line-gray relative bg-zinc-50 dark:bg-zinc-900"
>
	<div
		class="absolute left-1/2 transform -translate-x-1/2 -translate-x-2 top-[-1px] w-12 h-px dark:bg-cyber-green"
	></div>
	<div
		class="absolute left-1/2 transform -translate-x-1/2 translate-x-2 top-[-1px] w-12 h-px bg-cyber-green opacity-0"
	></div>
	<div
		class="absolute left-1/2 transform -translate-x-1/2 -translate-x-2 bottom-[-1px] w-12 h-px dark:bg-cyber-green"
	></div>
	<div
		class="absolute left-1/2 transform -translate-x-1/2 translate-x-2 bottom-[-1px] w-12 h-px bg-cyber-green opacity-0"
	></div>

	<h2 class="text-3xl sm:text-4xl font-semibold text-center font-mono text-base-content">
		<span class="text-cyber-green">//</span>
		{title}
	</h2>
</div>
