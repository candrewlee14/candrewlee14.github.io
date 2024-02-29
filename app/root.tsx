import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import "./tailwind.css";
import { Navbar } from "./components/navbar";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<div className="flex flex-row min-w-screen h-2">
					{[
						"bg-red-400 dark:bg-red-600",
						"bg-yellow-400 dark:bg-yellow-600",
						"bg-green-400 dark:bg-green-600",
						// "bg-blue-400 dark:bg-blue-600",
						"bg-violet-400 dark:bg-violet-600",
					].map((color) => (
						<div key={color} className={`flex-grow ${color}`}>
							&nbsp;
						</div>
					))}
				</div>
				<Navbar/>
				{children}
				<ScrollRestoration />
				<Scripts />
				<div className="mt-4 mb-3">&nbsp;
						{/* <footer className="text-center">Bruh</footer> */}
				</div>
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function HydrateFallback() {
	return <p>Loading...</p>;
}
