<script lang="ts">
	import Char from "./Char.svelte";
	import EmptyKey from "./EmptyKey.svelte";

	interface Props {
		className?: string | undefined;
	}

	let { className = undefined }: Props = $props();
</script>

<div class={`text-2xl max-w-min text-bold open-sans bg-slate rounded-sm ring-8 p-1 ring-slate-100 dark:ring-slate-700 ${className}`}>
	<div class="grid grid-rows-3">
		<div class="my-1 flex">
			<EmptyKey
				className="w-8 text-slate-100 dark:text-slate-500"
				val="C"
				style="animation-delay: 0.0s"
			/>
			<Char
				val="A"
				style="animation-delay: 0.1s"
			/>
			<Char
				val="N"
				style="animation-delay: 0.2s"
			/>
			<Char
				val="D"
				style="animation-delay: 0.3s"
			/>
			<EmptyKey
				className="flex-grow min-w-10"
				style="animation-delay: 0.4s"
			/>
		</div>
		<div class="flex my-1">
			<EmptyKey className="w-12" style="animation-delay: 0.5s" />
			<Char
				val="R"
				style="animation-delay: 0.6s"
			/>
			<Char
				val="E"
				style="animation-delay: 0.7s"
			/>
			<Char
				val="W"
				style="animation-delay: 0.8s"
			/>
			<EmptyKey
				className="flex-grow min-w-10"
				style="animation-delay: 0.9s"
			/>
		</div>
		<div class="my-1 flex">
			<EmptyKey className="w-9" style="animation-delay: 1.0s" />
			<Char
				val="L"
				style="animation-delay: 1.1s"
			/>
			<Char
				val="E"
				style="animation-delay: 1.2s"
			/>
			<Char
				val="E"
				style="animation-delay: 1.3s"
			/>
			<EmptyKey
				className="flex-grow min-w-10 text-slate-100 dark:text-slate-500"
				val="14"
				style="animation-delay: 1.4s"
			/>
		</div>
	</div>
</div>