function Char({ val, className }: { val: string; className?: string }) {
	return (
		<div
			className={`bg-blue-300 p-2 mx-1 rounded w-10 h-10 text-center font-bold text-white flex justify-center items-center ${className}`}
		>
			<span>{val}</span>
		</div>
	);
}

function EmptyKey({ val, className }: { val?:string, className?: string }) {
	return (
		<div
			className={`bg-slate-300 dark:bg-slate-600 p-2 mx-1 rounded h-10 text-center font-bold text-white flex justify-center items-center ${className}`}
		>
			<span>{val}</span>
		</div>
	);
}

export default function AndrewLogo() {
	return (
		<div className="mx-auto text-2xl max-w-min text-bold open-sans bg-slate rounded-sm ring-4 ring-slate-100 dark:ring-slate-800">
			<div className="grid grid-rows-3">
				<div className="my-1 flex">
					<EmptyKey className="w-10 text-slate-100 dark:text-slate-500" val='C' />
					<Char val="A" 
					// className="bg-blue-300 dark:bg-blue-400"
					/>
					<Char val="N" 
					// className="bg-blue-300 dark:bg-blue-400"
					/>
					<Char val="D" 
					// className="bg-blue-300 dark:bg-blue-400"
					/>
					<EmptyKey className="flex-grow min-w-10" />
				</div>
				<div className="flex my-1">
					<EmptyKey className="w-16" />
					<Char val="R"  
					// className="bg-cyan-400 dark:bg-cyan-600"
					/>
					<Char val="E"  
					// className="bg-cyan-400 dark:bg-cyan-600"
					/>
					<Char val="W"  
					// className="bg-cyan-400 dark:bg-cyan-600"
					/>
					<EmptyKey className="flex-grow min-w-10" />
				</div>
				<div className="my-1 flex">
					<EmptyKey className="w-11" />
					<Char val="L" 
					// className="bg-teal-500 dark:bg-teal-700"
					/>
					<Char val="E" 
					// className="bg-teal-500 dark:bg-teal-700"
					/>
					<Char val="E" 
					// className="bg-teal-500 dark:bg-teal-700"
					/>
					<EmptyKey className="flex-grow min-w-10 text-slate-100 dark:text-slate-500" val="14"/>
				</div>
			</div>
		</div>
	);
}
