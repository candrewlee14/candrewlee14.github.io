import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import "./tailwind.css";


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
        <div className="flex flex-row min-w-screen h-3">
          {[
            "bg-red-300 dark:bg-red-600",
            "bg-yellow-300 dark:bg-yellow-600",
            "bg-green-300 dark:bg-green-600",
            "bg-blue-300 dark:bg-blue-600",
            "bg-violet-300 dark:bg-violet-600",
          ].map((color) => (
            <div key={color} className={`flex-grow ${color}`}>&nbsp;</div>
          ))
          }
        </div>
				{children}
				<ScrollRestoration />
				<Scripts />
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
