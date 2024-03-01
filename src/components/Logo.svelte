<!-- REACT VERSION 
export default function AndrewLogo({className, style}: {className?: string, style?: React.CSSProperties}) {
	return (
		<div className={`text-2xl max-w-min text-bold open-sans bg-slate rounded-sm ring-8 p-1 ring-slate-100 dark:ring-slate-700 ${className}`}>
			{/* add a squiggly line svg from the center to the top*/}
			<div className="grid grid-rows-3">
				<div className="my-1 flex">
					<EmptyKey
						className="w-8 text-slate-100 dark:text-slate-500"
						val="C"
						style={{ animationDelay: "1.0s" }}
					/>
					<Char
						val="A"
						// className="bg-blue-300 dark:bg-blue-400"
						style={{ animationDelay: "1.1s" }}
					/>
					<Char
						val="N"
						// className="bg-blue-300 dark:bg-blue-400"
						style={{ animationDelay: "1.2s" }}
					/>
					<Char
						val="D"
						// className="bg-blue-300 dark:bg-blue-400"
						style={{ animationDelay: "1.3s" }}
					/>
					<EmptyKey
						className="flex-grow min-w-10"
						style={{ animationDelay: "1.4s" }}
					/>
				</div>
				<div className="flex my-1">
					<EmptyKey className="w-12" style={{ animationDelay: "1.5s" }} />
					<Char
						val="R"
						style={{ animationDelay: "1.6s" }}

						// className="bg-cyan-400 dark:bg-cyan-600"
					/>
					<Char
						val="E"
						style={{ animationDelay: "1.7s" }}
						// className="bg-cyan-400 dark:bg-cyan-600"
					/>
					<Char
						val="W"
						style={{ animationDelay: "1.8s" }}

						// className="bg-cyan-400 dark:bg-cyan-600"
					/>
					<EmptyKey
						className="flex-grow min-w-10"
						style={{ animationDelay: "1.9s" }}
					/>
				</div>
				<div className="my-1 flex">
					<EmptyKey className="w-9" style={{ animationDelay: "2.0s" }} />
					<Char
						val="L"
						style={{ animationDelay: "2.1s" }}
						// className="bg-teal-500 dark:bg-teal-700"
					/>
					<Char
						val="E"
						style={{ animationDelay: "2.2s" }}
						// className="bg-teal-500 dark:bg-teal-700"
					/>
					<Char
						val="E"
						style={{ animationDelay: "2.3s" }}
						// className="bg-teal-500 dark:bg-teal-700"
					/>
					<EmptyKey
						className="flex-grow min-w-10 text-slate-100 dark:text-slate-500"
						val="14"
						style={{ animationDelay: "2.4s" }}
					/>
				</div>
			</div>
		</div>
	);
}

-->


<!-- SVELTE VERSION -->
<script lang="ts">
	import Char from "./Char.svelte";
	import EmptyKey from "./EmptyKey.svelte";

	export let className: string | undefined = undefined;
</script>

<div class={`text-2xl max-w-min text-bold open-sans bg-slate rounded-sm ring-8 p-1 ring-slate-100 dark:ring-slate-700 ${className}`}>
	<!-- add a squiggly line svg from the center to the top-->
	<div class="grid grid-rows-3">
		<div class="my-1 flex">
			<EmptyKey
				className="w-8 text-slate-100 dark:text-slate-500"
				val="C"
				style="animation-delay: 1.0s"
			/>
			<Char
				val="A"
				style="animation-delay: 1.1s"
			/>
			<Char
				val="N"
				style="animation-delay: 1.2s"
			/>
			<Char
				val="D"
				style="animation-delay: 1.3s"
			/>
			<EmptyKey
				className="flex-grow min-w-10"
				style="animation-delay: 1.4s"
			/>
		</div>
		<div class="flex my-1">
			<EmptyKey className="w-12" style="animation-delay: 1.5s" />
			<Char
				val="R"
				style="animation-delay: 1.6s"
			/>
			<Char
				val="E"
				style="animation-delay: 1.7s"
			/>
			<Char
				val="W"
				style="animation-delay: 1.8s"
			/>
			<EmptyKey
				className="flex-grow min-w-10"
				style="animation-delay: 1.9s"
			/>
		</div>
		<div class="my-1 flex">
			<EmptyKey className="w-9" style="animation-delay: 2.0s" />
			<Char
				val="L"
				style="animation-delay: 2.1s"
			/>
			<Char
				val="E"
				style="animation-delay: 2.2s"
			/>
			<Char
				val="E"
				style="animation-delay: 2.3s"
			/>
			<EmptyKey
				className="flex-grow min-w-10 text-slate-100 dark:text-slate-500"
				val="14"
				style="animation-delay: 2.4s"
			/>
		</div>
	</div>
</div>