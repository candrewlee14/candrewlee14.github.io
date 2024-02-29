import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "Andrew Lee - Blog" },
		{ name: "description", content: "Andrew Lee - Blog" },
	];
};


export default function Blog() {
    return (
		<div className="flex flex-col items-center mx-4">
			<article className="prose">
        	<Outlet/>
			</article>
		</div>
    )
}