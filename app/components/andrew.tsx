import styles from "./andrew.module.css";

function Char({
	val,
	className,
	style,
}: { val: string; className?: string; style?: React.CSSProperties }) {
	return (
		<div
			style={style}
			className={`bg-blue-300 p-2 mx-1 rounded w-10 h-10 text-center font-bold text-white flex justify-center items-center ${className} ${styles.bounce}`}
		>
			<span>{val}</span>
		</div>
	);
}

function EmptyKey({
	val,
	className,
	style,
}: { val?: string; className?: string; style?: React.CSSProperties }) {
	return (
		<div
			style={style}
			className={`bg-slate-300 dark:bg-slate-600 p-2 mx-1 rounded h-10 text-center font-bold text-white flex justify-center items-center ${className}  ${styles.bounce}`}
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
					<EmptyKey
						className="w-10 text-slate-100 dark:text-slate-500"
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
					<EmptyKey className="w-16" style={{ animationDelay: "1.5s" }} />
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
					<EmptyKey className="w-11" style={{ animationDelay: "2.0s" }} />
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
