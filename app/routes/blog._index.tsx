import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "Andrew Lee - Blog" },
		{ name: "description", content: "Andrew Lee - Blog Directory" },
	];
};


export default function Blog() {
	return (
		<div>
			<h1 className="text-center">📃Blog</h1>
			<p>No blog posts yet, but stay tuned!</p>
		</div>
	)
}